<template>
    <div class="page-wrapper">
        <div class="content">
            <layout-header></layout-header>

            <div class="content-wrap">
                <div class="d-flex align-items-center flex-wrap gap-3 border-bottom pb-4 mb-4">
                    <div class="flex-grow-1">
                        <h4 class="mb-1">{{ $t('WorkshopJobs.title') }}</h4>
                        <p class="text-muted mb-0">{{ $t('WorkshopJobs.subtitle') }}</p>
                    </div>
                    <a href="#" class="btn btn-primary d-inline-flex align-items-center" data-bs-toggle="offcanvas"
                        data-bs-target="#add_job"><i class="icon-plus me-1"></i>{{ $t('WorkshopJobs.newJobCard') }}</a>
                </div>

                <div class="row g-4 mb-4">
                    <div class="col-xxl-3 col-md-6">
                        <div class="card dash-card mb-0">
                            <div class="card-body">
                                <h6 class="mb-2">{{ $t('WorkshopJobs.openJobs') }}</h6>
                                <h3 class="mb-0">{{ openJobs }}</h3>
                            </div>
                        </div>
                    </div>
                    <div class="col-xxl-3 col-md-6">
                        <div class="card dash-card mb-0">
                            <div class="card-body">
                                <h6 class="mb-2">{{ $t('WorkshopJobs.awaitingApproval') }}</h6>
                                <h3 class="mb-0 text-warning">{{ statusCount('Awaiting Approval') }}</h3>
                            </div>
                        </div>
                    </div>
                    <div class="col-xxl-3 col-md-6">
                        <div class="card dash-card mb-0">
                            <div class="card-body">
                                <h6 class="mb-2">{{ $t('WorkshopJobs.inRepair') }}</h6>
                                <h3 class="mb-0 text-info">{{ statusCount('In Repair') }}</h3>
                            </div>
                        </div>
                    </div>
                    <div class="col-xxl-3 col-md-6">
                        <div class="card dash-card mb-0">
                            <div class="card-body">
                                <h6 class="mb-2">{{ $t('WorkshopJobs.readyHandover') }}</h6>
                                <h3 class="mb-0 text-success">{{ statusCount('Ready') + statusCount('Handover') }}</h3>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="d-flex align-items-center flex-wrap gap-3 justify-content-between mb-4">
                    <div class="d-flex align-items-center gap-3 flex-wrap">
                        <div class="dropdown">
                            <a href="javascript:void(0);" class="dropdown-toggle btn btn-white d-inline-flex align-items-center"
                                data-bs-toggle="dropdown">
                                <i class="icon-circle-dot text-dark me-2"></i>{{ statusFilter === 'All' ? $t('WorkshopJobs.allStatus') : statusLabel(statusFilter) }}
                            </a>
                            <ul class="dropdown-menu p-3">
                                <li v-for="s in statusOptions" :key="s">
                                    <a href="javascript:void(0);" class="dropdown-item rounded" @click="statusFilter = s">{{ s === 'All' ? $t('WorkshopJobs.all') : statusLabel(s) }}</a>
                                </li>
                            </ul>
                        </div>
                        <div class="dropdown">
                            <a href="javascript:void(0);" class="dropdown-toggle btn btn-white d-inline-flex align-items-center"
                                data-bs-toggle="dropdown">
                                <i class="icon-wrench text-dark me-2"></i>{{ techFilter === 'All' ? $t('WorkshopJobs.allTechnicians') : techFilter }}
                            </a>
                            <ul class="dropdown-menu p-3">
                                <li v-for="t in techOptions" :key="t">
                                    <a href="javascript:void(0);" class="dropdown-item rounded" @click="techFilter = t">{{ t === 'All' ? $t('WorkshopJobs.all') : t }}</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div class="search-input">
                        <span class="btn-searchset"><i class="icon-search fs-14"></i></span>
                        <input type="search" class="form-control search-addon" :placeholder="$t('WorkshopJobs.searchPlaceholder')" v-model="searchQuery" />
                    </div>
                </div>

                <div class="table-responsive table-nowrap">
                    <a-table class="table mb-0 datatable" :columns="visibleColumns" :data-source="paginatedData"
                        :pagination="false">
                        <template #bodyCell="{ column, record }">
                            <template v-if="column.key === 'Job'">
                                <h6 class="fs-14 fw-semibold mb-0">
                                    <a href="#" data-bs-toggle="offcanvas" data-bs-target="#view_job" @click="selected = record">{{ record.id }}</a>
                                </h6>
                                <span class="fs-13">{{ record.customer }}</span>
                            </template>
                            <template v-if="column.key === 'Vehicle'">
                                <div>
                                    <span class="fw-medium">{{ record.vehicle }}</span>
                                    <div class="fs-13 text-muted">{{ record.vin }}</div>
                                </div>
                            </template>
                            <template v-if="column.key === 'Problem'">
                                <span class="fs-13">{{ record.reportedProblem }}</span>
                            </template>
                            <template v-if="column.key === 'technician'">{{ technicianLabel(record.technician) }}</template>
                            <template v-if="column.key === 'Estimate'">
                                <span class="fw-semibold">{{ money(record.estimateParts + record.estimateLabor) }}</span>
                                <div class="fs-13 text-muted">{{ $t('WorkshopJobs.parts') }} {{ money(record.estimateParts) }} · {{ $t('WorkshopJobs.labor') }} {{ money(record.estimateLabor) }}</div>
                            </template>
                            <template v-if="column.key === 'Approval'">
                            <span class="badge" :class="record.approval === 'Approved' ? 'badge-soft-success text-dark' : 'badge-soft-warning text-dark'">
                                    {{ approvalLabel(record.approval) }}
                                </span>
                            </template>
                            <template v-if="column.key === 'Status'">
                                <span class="badge" :class="statusClass(record.status)">{{ statusLabel(record.status) }}</span>
                            </template>
                            <template v-if="column.key === 'Action'">
                                <div class="text-end">
                                    <div class="dropstart">
                                        <button class="btn btn-icon btn-white" type="button" data-bs-toggle="dropdown"
                                            :aria-label="$t('WorkshopJobs.actions')">
                                            <i class="icon-ellipsis-vertical"></i>
                                        </button>
                                        <ul class="dropdown-menu p-3">
                                            <li>
                                                <a href="#" class="dropdown-item rounded d-flex align-items-center"
                                                    data-bs-toggle="offcanvas" data-bs-target="#view_job" @click="selected = record">
                                                    <i class="icon-eye me-2"></i>{{ $t('WorkshopJobs.openJobCard') }}
                                                </a>
                                            </li>
                                            <li v-if="record.approval !== 'Approved'">
                                                <a href="javascript:void(0);" class="dropdown-item rounded d-flex align-items-center" @click="recordApproval(record)">
                                                    <i class="icon-check me-2"></i>{{ $t('WorkshopJobs.recordApproval') }}
                                                </a>
                                            </li>
                                            <li>
                                                <a href="javascript:void(0);" class="dropdown-item rounded d-flex align-items-center" @click="advance(record)">
                                                    <i class="icon-chevron-right me-2"></i>{{ $t('WorkshopJobs.advanceStage') }}
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </template>
                        </template>
                    </a-table>
                </div>

                <BasePagination :currentPage="currentPage" :pageSize="pageSize" :pageSizeOptions="pageSizeOptions"
                    :totalPages="totalPages" :totalItems="filteredPages.length" @update:currentPage="onPageChange"
                    @update:pageSize="onPageSizeChange" />
            </div>
        </div>
    </div>

    <!-- Job detail -->
    <div class="offcanvas offcanvas-end" style="width: 640px; max-width: 100%;" tabindex="-1" id="view_job">
        <div class="offcanvas-header d-flex align-items-center justify-content-between">
            <h4 class="offcanvas-title mb-0">{{ $t('WorkshopJobs.jobCardTitle') }}</h4>
            <button type="button" class="btn-close btn-close-modal" data-bs-dismiss="offcanvas" :aria-label="$t('WorkshopJobs.close')">
                <i class="icon-x"></i>
            </button>
        </div>
        <div class="offcanvas-body p-0" v-if="selected">
            <div class="border-bottom p-4">
                <div class="d-flex align-items-center justify-content-between gap-3 mb-3">
                    <div>
                        <h5 class="mb-1">{{ selected.id }} · {{ selected.customer }}</h5>
                        <p class="mb-0 fs-13">{{ selected.vehicle }} · {{ selected.vin }}</p>
                    </div>
                    <span class="badge" :class="statusClass(selected.status)">{{ statusLabel(selected.status) }}</span>
                </div>
                <div class="d-flex align-items-center gap-4 flex-wrap fs-13">
                    <span><i class="icon-gauge text-gray-9 me-1"></i>{{ $t('WorkshopJobs.mileage') }}: {{ selected.mileage.toLocaleString() }} km</span>
                    <span><i class="icon-wrench text-gray-9 me-1"></i>{{ $t('WorkshopJobs.technician') }}: {{ technicianLabel(selected.technician) }}</span>
                    <span><i class="icon-calendar text-gray-9 me-1"></i>{{ $t('WorkshopJobs.expected') }}: {{ selected.expected }}</span>
                </div>
            </div>

            <div class="p-4 border-bottom">
                <h6 class="mb-3">{{ $t('WorkshopJobs.repairWorkflow') }}</h6>
                <div class="d-flex align-items-center flex-wrap gap-2">
                    <template v-for="(step, i) in workflow" :key="step">
                        <div class="d-flex align-items-center gap-2">
                            <span class="avatar avatar-sm rounded-circle"
                                :class="i <= stepIndex(selected.status) ? 'bg-primary text-white' : 'bg-light text-dark'">
                                <i v-if="i < stepIndex(selected.status)" class="icon-check fs-12"></i>
                                <span v-else>{{ i + 1 }}</span>
                            </span>
                            <span class="fs-13 fw-semibold" :class="i <= stepIndex(selected.status) ? 'text-dark' : 'text-muted'">{{ workflowLabel(step) }}</span>
                        </div>
                        <i v-if="i < workflow.length - 1" class="icon-chevron-right text-muted fs-13"></i>
                    </template>
                </div>
            </div>

            <div class="p-4 border-bottom">
                <h6 class="mb-2">{{ $t('WorkshopJobs.reportedProblem') }}</h6>
                <p class="fs-13 mb-3">{{ selected.reportedProblem }}</p>
                <h6 class="mb-2">{{ $t('WorkshopJobs.diagnosis') }}</h6>
                <p class="fs-13 mb-0">{{ diagnosisLabel(selected.diagnosis) }}</p>
            </div>

            <div class="p-4">
                <div class="row g-3 mb-4">
                    <div class="col-6">
                        <div class="border rounded p-3">
                            <p class="mb-1 fs-13">{{ $t('WorkshopJobs.parts') }}</p>
                            <h6 class="mb-0">{{ money(selected.actualParts || selected.estimateParts) }}</h6>
                        </div>
                    </div>
                    <div class="col-6">
                        <div class="border rounded p-3">
                            <p class="mb-1 fs-13">{{ $t('WorkshopJobs.labor') }}</p>
                            <h6 class="mb-0">{{ money(selected.actualLabor || selected.estimateLabor) }}</h6>
                        </div>
                    </div>
                    <div class="col-6">
                        <div class="border rounded p-3">
                            <p class="mb-1 fs-13">{{ $t('WorkshopJobs.customerApproval') }}</p>
                            <h6 class="mb-0">{{ approvalLabel(selected.approval) }}</h6>
                        </div>
                    </div>
                    <div class="col-6">
                        <div class="border rounded p-3">
                            <p class="mb-1 fs-13">{{ $t('WorkshopJobs.qualityCheck') }}</p>
                            <h6 class="mb-0">{{ selected.qualityResult === 'Passed' ? $t('WorkshopJobs.passed') : selected.qualityResult }}</h6>
                        </div>
                    </div>
                </div>
                <div class="d-flex align-items-center gap-2">
                    <button type="button" class="btn btn-white w-100" :disabled="selected.approval === 'Approved'"
                        @click="recordApproval(selected)">
                        <i class="icon-check me-1"></i>{{ $t('WorkshopJobs.recordApproval') }}
                    </button>
                    <button type="button" class="btn btn-primary w-100" @click="advance(selected)">
                        {{ $t('WorkshopJobs.advanceStage') }}<i class="icon-chevron-right ms-1"></i>
                    </button>
                </div>
            </div>
        </div>
    </div>

    <!-- New job card -->
    <div class="offcanvas offcanvas-end" tabindex="-1" id="add_job">
        <div class="offcanvas-header d-flex align-items-center justify-content-between">
            <h4 class="offcanvas-title mb-0">{{ $t('WorkshopJobs.newJobCard') }}</h4>
            <button type="button" class="btn-close btn-close-modal" data-bs-dismiss="offcanvas" :aria-label="$t('WorkshopJobs.close')">
                <i class="icon-x"></i>
            </button>
        </div>
        <form class="d-flex flex-column overflow-y-auto h-100" @submit.prevent="addJob">
            <div class="offcanvas-body pb-0">
                <div class="row gx-3">
                    <div class="col-lg-6 col-md-12">
                        <div class="mb-3">
                            <label class="form-label">{{ $t('WorkshopJobs.customer') }}<span class="text-danger"> *</span></label>
                            <input type="text" class="form-control" v-model="form.customer" required>
                        </div>
                    </div>
                    <div class="col-lg-6 col-md-12">
                        <div class="mb-3">
                            <label class="form-label">{{ $t('WorkshopJobs.vehicle') }}</label>
                            <input type="text" class="form-control" v-model="form.vehicle">
                        </div>
                    </div>
                    <div class="col-md-12">
                        <div class="mb-3">
                            <label class="form-label">{{ $t('WorkshopJobs.vin') }}</label>
                            <input type="text" class="form-control" v-model="form.vin">
                        </div>
                    </div>
                    <div class="col-lg-6 col-md-12">
                        <div class="mb-3">
                            <label class="form-label">{{ $t('WorkshopJobs.mileage') }}</label>
                            <input type="number" class="form-control" v-model="form.mileage">
                        </div>
                    </div>
                    <div class="col-lg-6 col-md-12">
                        <div class="mb-3">
                            <label class="form-label">{{ $t('WorkshopJobs.technician') }}</label>
                            <vue-select :options="technicianNames" v-model="form.technician" :placeholder="$t('WorkshopJobs.select')" />
                        </div>
                    </div>
                    <div class="col-md-12">
                        <div class="mb-3">
                            <label class="form-label">{{ $t('WorkshopJobs.reportedProblem') }}<span class="text-danger"> *</span></label>
                            <input type="text" class="form-control" v-model="form.reportedProblem" required>
                        </div>
                    </div>
                    <div class="col-md-12">
                        <div class="mb-3">
                            <label class="form-label">{{ $t('WorkshopJobs.diagnosis') }}</label>
                            <input type="text" class="form-control" v-model="form.diagnosis">
                        </div>
                    </div>
                    <div class="col-lg-6 col-md-12">
                        <div class="mb-3">
                            <label class="form-label">{{ $t('WorkshopJobs.estimateParts') }}</label>
                            <input type="number" class="form-control" v-model="form.estimateParts">
                        </div>
                    </div>
                    <div class="col-lg-6 col-md-12">
                        <div class="mb-3">
                            <label class="form-label">{{ $t('WorkshopJobs.estimateLabor') }}</label>
                            <input type="number" class="form-control" v-model="form.estimateLabor">
                        </div>
                    </div>
                    <div class="col-md-12">
                        <div class="mb-3">
                            <label class="form-label">{{ $t('WorkshopJobs.expectedCompletion') }}</label>
                            <input type="date" class="form-control" v-model="form.expected">
                        </div>
                    </div>
                </div>
            </div>
            <div class="offcanvas-footer d-flex align-items-center gap-2 pt-2">
                <button type="button" class="btn btn-dark d-flex align-items-center w-100" data-bs-dismiss="offcanvas">
                    <i class="icon-x me-1"></i>{{ $t('WorkshopJobs.cancel') }}
                </button>
                <button type="submit" class="btn btn-primary d-flex align-items-center w-100">
                    <i class="icon-circle-check me-1"></i>{{ $t('WorkshopJobs.createJobCard') }}
                </button>
            </div>
        </form>
    </div>
</template>

<script>
import BasePagination from '@/components/BasePagination.vue';
import { jobCards, jobStatuses, technicians } from '@/data/after-sales'
import { money } from '@/data/crm'
import { hideOffcanvas } from '@/utils/offcanvas'
import { notify } from '@/utils/ui'

export default {
    name: 'WorkshopJobs',
    components: { BasePagination },
    data() {
        return {
            jobCards,
            money,
            selected: null,
            searchQuery: "",
            statusFilter: 'All',
            techFilter: 'All',
            statusOptions: ['All', ...jobStatuses],
            techOptions: ['All', ...technicians.map(t => t.name)],
            technicianNames: technicians.map(t => t.name),
            currentPage: 1,
            pageSize: 10,
            pageSizeOptions: [5, 10, 25, 50, 100],
            workflow: ['Check-in', 'Inspection', 'Approval', 'Repair', 'Quality Check', 'Handover'],
            form: this.emptyForm(),
        }
    },
    methods: {
        emptyForm() {
            return {
                customer: '', vehicle: '', vin: '', mileage: '', technician: null,
                reportedProblem: '', diagnosis: '', estimateParts: '', estimateLabor: '', expected: '',
            }
        },
        statusLabel(status) {
            const keyByStatus = {
                'Check-in': 'checkIn',
                Inspection: 'inspection',
                'Awaiting Approval': 'awaitingApproval',
                'In Repair': 'inRepair',
                'Quality Check': 'qualityCheck',
                Ready: 'ready',
                Invoiced: 'invoiced',
                Handover: 'handover',
            }
            const key = keyByStatus[status]
            return key ? this.$t(`WorkshopJobs.statuses.${key}`) : status
        },
        approvalLabel(approval) {
            return this.$t(approval === 'Approved' ? 'WorkshopJobs.approved' : 'WorkshopJobs.pending')
        },
        technicianLabel(technician) {
            return technician === 'Unassigned' ? this.$t('WorkshopJobs.unassigned') : technician
        },
        diagnosisLabel(diagnosis) {
            return diagnosis === 'Pending inspection' ? this.$t('WorkshopJobs.pendingInspection') : diagnosis
        },
        workflowLabel(step) {
            const keyByStep = {
                'Check-in': 'checkIn',
                Inspection: 'inspection',
                Approval: 'approvalStage',
                Repair: 'repair',
                'Quality Check': 'qualityCheck',
                Handover: 'handover',
            }
            return this.$t(`WorkshopJobs.workflow.${keyByStep[step] || 'checkIn'}`)
        },
        statusClass(status) {
            if (['Ready', 'Handover'].includes(status)) return 'badge-soft-success text-dark'
            if (['Awaiting Approval', 'Inspection', 'Check-in'].includes(status)) return 'badge-soft-warning text-dark'
            if (['In Repair', 'Quality Check', 'Invoiced'].includes(status)) return 'badge-soft-info text-dark'
            return 'badge-soft-secondary text-dark'
        },
        stepIndex(status) {
            if (status === 'Check-in') return 0
            if (status === 'Inspection') return 1
            if (status === 'Awaiting Approval') return 2
            if (status === 'In Repair') return 3
            if (status === 'Quality Check') return 4
            return 5
        },
        recordApproval(record) {
            record.approval = 'Approved'
            notify(this.$t('WorkshopJobs.approvalRecorded', { id: record.id }))
        },
        advance(record) {
            const i = jobStatuses.indexOf(record.status)
            if (i >= 0 && i < jobStatuses.length - 1) {
                record.status = jobStatuses[i + 1]
                if (record.status === 'Quality Check' && record.qualityResult === '—') record.qualityResult = 'Passed'
                notify(this.$t('WorkshopJobs.stageAdvanced', { id: record.id, status: this.statusLabel(record.status) }))
            }
        },
        statusCount(status) {
            return this.jobCards.filter(j => j.status === status).length
        },
        addJob() {
            this.jobCards.unshift({
                id: 'JC-' + (7007 + this.jobCards.length),
                customer: this.form.customer,
                vehicle: this.form.vehicle,
                vin: this.form.vin,
                mileage: Number(this.form.mileage) || 0,
                reportedProblem: this.form.reportedProblem,
                diagnosis: this.form.diagnosis || 'Pending inspection',
                technician: this.form.technician || 'Unassigned',
                estimateParts: Number(this.form.estimateParts) || 0,
                estimateLabor: Number(this.form.estimateLabor) || 0,
                approval: 'Pending',
                status: 'Check-in',
                expected: this.form.expected,
                actualParts: 0,
                actualLabor: 0,
                qualityResult: '—',
            })
            this.form = this.emptyForm()
            hideOffcanvas('add_job')
        },
        onPageChange(page) { this.currentPage = page },
        onPageSizeChange(size) { this.pageSize = Number(size); this.currentPage = 1 },
    },
    computed: {
        columns() {
            return [
                { title: this.$t('WorkshopJobs.jobCard'), dataIndex: 'id', key: 'Job', sorter: false, visible: true },
                { title: this.$t('WorkshopJobs.vehicle'), dataIndex: 'vehicle', key: 'Vehicle', sorter: false, visible: true },
                { title: this.$t('WorkshopJobs.problem'), dataIndex: 'reportedProblem', key: 'Problem', sorter: false, visible: true },
                { title: this.$t('WorkshopJobs.technician'), dataIndex: 'technician', key: 'technician', sorter: false, visible: true },
                { title: this.$t('WorkshopJobs.estimate'), dataIndex: 'estimateParts', key: 'Estimate', sorter: false, visible: true },
                { title: this.$t('WorkshopJobs.approval'), dataIndex: 'approval', key: 'Approval', sorter: false, visible: true },
                { title: this.$t('WorkshopJobs.status'), dataIndex: 'status', key: 'Status', sorter: false, visible: true },
                { title: this.$t('WorkshopJobs.action'), dataIndex: 'Action', key: 'Action', sorter: false, visible: true },
            ]
        },
        openJobs() {
            return this.jobCards.filter(j => !['Handover'].includes(j.status)).length
        },
        filteredPages() {
            const query = this.searchQuery.toLowerCase()
            return this.jobCards.filter((record) => {
                const matchesQuery =
                    record.customer.toLowerCase().includes(query) ||
                    record.vin.toLowerCase().includes(query) ||
                    record.id.toLowerCase().includes(query)
                const matchesStatus = this.statusFilter === 'All' || record.status === this.statusFilter
                const matchesTech = this.techFilter === 'All' || record.technician === this.techFilter
                return matchesQuery && matchesStatus && matchesTech
            })
        },
        paginatedData() {
            const start = (this.currentPage - 1) * this.pageSize
            return this.filteredPages.slice(start, start + this.pageSize)
        },
        totalPages() {
            return Math.ceil(this.filteredPages.length / this.pageSize) || 1
        },
        visibleColumns() {
            return this.columns.filter((column) => column.visible)
        },
    },
}
</script>
