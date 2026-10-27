<template>
    <div class="page-wrapper">
        <div class="content">
            <layout-header></layout-header>

            <div class="content-wrap">
                <!-- Page header -->
                <div class="d-flex align-items-center flex-wrap gap-3 border-bottom pb-4 mb-4">
                    <div class="flex-grow-1">
                        <div class="d-inline-flex align-items-center p-1 bg-body-secondary border rounded-pill">
                            <router-link :to="lp('/crm/leads')"
                                class="px-3 py-1 fw-semibold d-inline-flex align-items-center rounded-pill">
                                <i class="icon-list me-2"></i>{{ $t('leads.listView') }}
                            </router-link>
                            <router-link :to="lp('/crm/pipeline')"
                                class="px-3 py-1 fw-semibold d-inline-flex align-items-center rounded-pill bg-body">
                                <i class="icon-layout-panel-left me-2"></i>{{ $t('leads.pipeline') }}
                            </router-link>
                        </div>
                    </div>
                    <div class="d-flex align-items-center gap-3 flex-wrap">
                        <span class="badge bg-body text-body border fw-medium">{{ $t('leads.activeCount', { count: activeCount }) }}</span>
                        <router-link :to="lp('/crm/leads')" class="btn btn-primary d-inline-flex align-items-center">
                            <i class="icon-plus me-1"></i>{{ $t('leads.newOpportunity') }}
                        </router-link>
                    </div>
                </div>

                <!-- Board -->
                <div class="crm-board">
                    <div class="crm-column" v-for="stage in stages" :key="stage">
                        <div class="d-flex align-items-center justify-content-between mb-3">
                            <h6 class="mb-0 fw-semibold">{{ stageLabel(stage) }}</h6>
                            <span class="badge bg-body-secondary text-body fw-semibold">{{ board[stage].length }}</span>
                        </div>
                        <draggable v-model="board[stage]" :group="{ name: 'pipeline' }" item-key="id"
                            class="crm-column-body" @change="syncStage">
                            <div v-for="element in board[stage]" :key="element.id" class="card mb-3 crm-card">
                                <div class="card-body p-3">
                                    <div class="d-flex align-items-start justify-content-between gap-2 mb-2">
                                        <h6 class="fs-14 fw-semibold mb-0">{{ element.customer }}</h6>
                                        <span class="badge" :class="priorityClass(element.priority)">{{ priorityLabel(element.priority) }}</span>
                                    </div>
                                    <p class="fs-13 mb-2">{{ element.interest }}</p>
                                    <div class="d-flex align-items-center justify-content-between">
                                        <span class="fs-13 fw-semibold text-body-emphasis">{{ money(element.budget) }}</span>
                                        <span class="fs-12 text-muted">{{ element.id }}</span>
                                    </div>
                                    <div class="d-flex align-items-center gap-2 mt-3 pt-3 border-top">
                                        <span class="avatar avatar-xs rounded-circle bg-body-secondary">
                                            <i class="icon-user fs-11"></i>
                                        </span>
                                        <span class="fs-12 text-muted">{{ element.owner }}</span>
                                        <span class="fs-12 text-muted ms-auto" v-if="element.dueDate">
                                            <i class="icon-clock me-1"></i>{{ element.dueDate }}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </draggable>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { VueDraggableNext } from 'vue-draggable-next'
import { opportunities, salesStages, money } from '@/data/crm'

export default {
    name: 'CarCrmPipeline',
    components: { draggable: VueDraggableNext },
    data() {
        return {
            stages: salesStages,
            money,
            board: this.buildBoard(),
        }
    },
    computed: {
        activeCount() {
            return Object.values(this.board).reduce((sum, list) => sum + list.length, 0)
        },
    },
    methods: {
        buildBoard() {
            const result = {}
            salesStages.forEach((stage) => { result[stage] = [] })
            opportunities
                .filter(o => o.status === 'Active')
                .forEach((op) => {
                    const stage = result[op.stage] ? op.stage : 'New Lead'
                    result[stage].push({ ...op })
                })
            return result
        },
        syncStage() {
            this.stages.forEach((stage) => {
                this.board[stage].forEach((op) => {
                    op.stage = stage
                    const original = opportunities.find(o => o.id === op.id)
                    if (original) original.stage = stage
                })
            })
        },
        priorityClass(priority) {
            if (priority === 'Hot') return 'text-bg-danger'
            if (priority === 'Warm') return 'text-bg-warning'
            return 'text-bg-info'
        },
        stageLabel(stage) {
            const map = {
                'New Lead': 'stageNewLead',
                Contacted: 'stageContacted',
                Qualified: 'stageQualified',
                Appointment: 'stageAppointment',
                Quotation: 'stageQuotation',
                Negotiation: 'stageNegotiation',
                Booking: 'stageBooking',
                Contract: 'stageContract',
                Payment: 'stagePayment',
                Delivery: 'stageDelivery',
                'After Sales': 'stageAfterSales',
            }
            return map[stage] ? this.$t('leads.' + map[stage]) : stage
        },
        priorityLabel(priority) {
            const map = { Hot: 'priorityHot', Warm: 'priorityWarm', Cold: 'priorityCold' }
            return map[priority] ? this.$t('leads.' + map[priority]) : priority
        },
    },
}
</script>

<style scoped>
.crm-board {
    display: flex;
    gap: 16px;
    overflow-x: auto;
    padding-bottom: 16px;
    align-items: flex-start;
    flex: 1;
}
.crm-column {
    flex: 0 0 290px;
    background: var(--bs-tertiary-bg);
    border: 1px solid var(--bs-border-color);
    border-radius: 12px;
    padding: 14px;
}
.crm-column-body {
    min-height: 60px;
}
.crm-card {
    cursor: grab;
    border: 1px solid var(--bs-border-color);
    background: var(--bs-body-bg);
    color: var(--bs-body-color);
}
.crm-card:active {
    cursor: grabbing;
}
.fs-11 { font-size: 11px; }
.fs-12 { font-size: 12px; }
</style>
