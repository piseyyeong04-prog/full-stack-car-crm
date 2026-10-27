<template>
    <div class="page-wrapper">
        <div class="content">
            <layout-header></layout-header>

            <div class="content-wrap">
                <!-- Page header -->
                <div class="d-flex align-items-center flex-wrap gap-3 border-bottom pb-4 mb-4">
                    <div class="flex-grow-1">
                        <div class="d-inline-flex align-items-center p-1 bg-light border rounded-pill">
                            <router-link :to="lp('/crm/leads')"
                                class="px-3 py-1 fw-semibold d-inline-flex align-items-center rounded-pill bg-white">
                                <i class="icon-list me-2"></i>{{ $t('leads.listView') }}
                            </router-link>
                            <router-link :to="lp('/crm/pipeline')"
                                class="px-3 py-1 fw-semibold d-inline-flex align-items-center rounded-pill">
                                <i class="icon-layout-panel-left me-2"></i>{{ $t('leads.pipeline') }}
                            </router-link>
                        </div>
                    </div>
                    <div class="d-flex align-items-center gap-3 flex-wrap">
                        <div class="dropdown">
                            <a href="javascript:void(0);" class="dropdown-toggle btn btn-dark d-inline-flex align-items-center"
                                data-bs-toggle="dropdown">
                                <i class="icon-arrow-down-to-line me-1"></i>{{ $t('common.export') }}
                            </a>
                            <ul class="dropdown-menu dropdown-menu-end p-3">
                                <li><a href="javascript:void(0);" class="dropdown-item rounded" @click="exportPdf">{{ $t('common.exportPdf') }}</a></li>
                                <li><a href="javascript:void(0);" class="dropdown-item rounded" @click="exportExcel">{{ $t('common.exportExcel') }}</a></li>
                            </ul>
                        </div>
                    </div>
                </div>

                <!-- Filters -->
                <div class="d-flex align-items-center flex-wrap gap-3 justify-content-between mb-4">
                    <div class="d-flex align-items-center gap-3 flex-wrap">
                        <div class="dropdown">
                            <a href="javascript:void(0);" class="dropdown-toggle btn btn-white d-inline-flex align-items-center"
                                data-bs-toggle="dropdown">
                                <i class="icon-funnel text-dark me-2"></i>{{ stageFilter === 'All' ? $t('common.allStages') : stageLabel(stageFilter) }}
                            </a>
                            <ul class="dropdown-menu p-3">
                                <li v-for="s in stageOptions" :key="s">
                                    <a href="javascript:void(0);" class="dropdown-item rounded" @click="stageFilter = s">{{ s === 'All' ? $t('common.allStages') : stageLabel(s) }}</a>
                                </li>
                            </ul>
                        </div>
                        <div class="dropdown">
                            <a href="javascript:void(0);" class="dropdown-toggle btn btn-white d-inline-flex align-items-center"
                                data-bs-toggle="dropdown">
                                <i class="icon-flame text-dark me-2"></i>{{ priorityFilter === 'All' ? $t('common.allPriority') : priorityLabel(priorityFilter) }}
                            </a>
                            <ul class="dropdown-menu p-3">
                                <li v-for="p in priorityOptions" :key="p">
                                    <a href="javascript:void(0);" class="dropdown-item rounded" @click="priorityFilter = p">{{ p === 'All' ? $t('common.allPriority') : priorityLabel(p) }}</a>
                                </li>
                            </ul>
                        </div>
                        <div class="dropdown">
                            <a href="javascript:void(0);" class="dropdown-toggle btn btn-white d-inline-flex align-items-center"
                                data-bs-toggle="dropdown">
                                <i class="icon-circle-dot text-dark me-2"></i>{{ statusFilter === 'All' ? $t('common.allStatus') : statusLabel(statusFilter) }}
                            </a>
                            <ul class="dropdown-menu p-3">
                                <li v-for="s in statusOptions" :key="s">
                                    <a href="javascript:void(0);" class="dropdown-item rounded" @click="statusFilter = s">{{ s === 'All' ? $t('common.allStatus') : statusLabel(s) }}</a>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div class="d-flex align-items-center gap-3 flex-wrap">
                        <div class="search-input">
                            <span class="btn-searchset"><i class="icon-search fs-14"></i></span>
                            <input type="text" class="form-control search-addon" :placeholder="$t('common.search')" v-model="searchQuery" />
                        </div>
                        <a href="#" class="btn btn-primary d-inline-flex align-items-center" data-bs-toggle="offcanvas"
                            data-bs-target="#add_opportunity"><i class="icon-plus me-1"></i>{{ $t('leads.newOpportunity') }}</a>
                    </div>
                </div>

                <!-- Table -->
                <div class="table-responsive table-nowrap">
                    <a-table class="table mb-0 datatable" :columns="visibleColumns" :data-source="paginatedData"
                        :pagination="false">
                        <template #bodyCell="{ column, record }">
                            <template v-if="column.key === 'Customer'">
                                <div class="d-flex align-items-center">
                                    <span class="avatar avatar-sm avatar-rounded flex-shrink-0 me-2 bg-light">
                                        <i class="icon-user fs-13"></i>
                                    </span>
                                    <div>
                                        <h6 class="fs-14 fw-semibold mb-0">{{ record.customer }}</h6>
                                        <span class="fs-13">{{ record.interest }}</span>
                                    </div>
                                </div>
                            </template>
                            <template v-if="column.key === 'Budget'">
                                {{ money(record.budget) }}
                            </template>
                            <template v-if="column.key === 'Stage'">
                                <span class="badge badge-soft-info text-dark">{{ stageLabel(record.stage) }}</span>
                            </template>
                            <template v-if="column.key === 'Priority'">
                                <span class="badge" :class="priorityClass(record.priority)">{{ priorityLabel(record.priority) }}</span>
                            </template>
                            <template v-if="column.key === 'Status'">
                                <span class="badge" :class="record.status === 'Active' ? 'badge-soft-success text-dark' : 'badge-soft-danger text-dark'">
                                    {{ statusLabel(record.status) }}
                                </span>
                            </template>
                            <template v-if="column.key === 'Action'">
                                <div class="text-end">
                                    <div class="dropstart">
                                        <button class="btn btn-icon btn-white" type="button" data-bs-toggle="dropdown"
                                            aria-label="Actions">
                                            <i class="icon-ellipsis-vertical"></i>
                                        </button>
                                        <ul class="dropdown-menu p-3">
                                            <li><a href="javascript:void(0);" class="dropdown-item rounded d-flex align-items-center" @click="openDetail('Opportunity', record)"><i class="icon-eye me-2"></i>{{ $t('common.view') }}</a></li>
                                            <li><a href="javascript:void(0);" class="dropdown-item rounded d-flex align-items-center" @click="openEdit(record)"><i class="icon-pencil-line me-2"></i>{{ $t('common.edit') }}</a></li>
                                            <li>
                                                <a href="javascript:void(0);" class="dropdown-item rounded d-flex align-items-center"
                                                    data-bs-toggle="modal" data-bs-target="#delete_modal" @click="setDelete(record)">
                                                    <i class="icon-trash-2 me-2"></i>{{ $t('common.delete') }}
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

    <!-- Delete modal -->
    <div class="modal fade" id="delete_modal">
        <div class="modal-dialog modal-dialog-centered modal-sm">
            <div class="modal-content">
                <div class="modal-body text-center p-4">
                    <div class="mb-4">
                        <span class="avatar avatar-lg rounded-circle bg-danger"><i class="icon-trash fs-24"></i></span>
                    </div>
                    <h4 class="mb-1">{{ $t('leads.deleteTitle') }}</h4>
                    <p class="mb-4">{{ $t('leads.deleteConfirm') }}</p>
                    <div class="d-flex justify-content-center gap-2">
                        <a href="javascript:void(0);" class="btn btn-light w-100" data-bs-dismiss="modal">{{ $t('common.close') }}</a>
                        <a href="javascript:void(0);" class="btn btn-danger w-100" data-bs-dismiss="modal" @click="deleteItem">{{ $t('common.delete') }}</a>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <!-- New opportunity offcanvas -->
    <div class="offcanvas offcanvas-end" tabindex="-1" id="add_opportunity">
        <div class="offcanvas-header d-flex align-items-center justify-content-between">
            <h4 class="offcanvas-title mb-0">{{ editingId ? $t('leads.editOpportunity') : $t('leads.newOpportunity') }}</h4>
            <button type="button" class="btn-close btn-close-modal" data-bs-dismiss="offcanvas" aria-label="Close">
                <i class="icon-x"></i>
            </button>
        </div>
        <form class="d-flex flex-column overflow-y-auto h-100" @submit.prevent="addOpportunity">
            <div class="offcanvas-body pb-0">
                <div class="row gx-3">
                    <div class="col-lg-6 col-md-12">
                        <div class="mb-3">
                            <label class="form-label">{{ $t('leads.customerName') }}<span class="text-danger"> *</span></label>
                            <input type="text" class="form-control" v-model="form.customer" required>
                        </div>
                    </div>
                    <div class="col-lg-6 col-md-12">
                        <div class="mb-3">
                            <label class="form-label">{{ $t('leads.phone') }}</label>
                            <input type="text" class="form-control" v-model="form.phone">
                        </div>
                    </div>
                    <div class="col-md-12">
                        <div class="mb-3">
                            <label class="form-label">{{ $t('leads.vehicleInterest') }}<span class="text-danger"> *</span></label>
                            <input type="text" class="form-control" v-model="form.interest" required>
                        </div>
                    </div>
                    <div class="col-lg-6 col-md-12">
                        <div class="mb-3">
                            <label class="form-label">{{ $t('leads.budget') }}</label>
                            <input type="number" class="form-control" v-model="form.budget">
                        </div>
                    </div>
                    <div class="col-lg-6 col-md-12">
                        <div class="mb-3">
                            <label class="form-label">{{ $t('leads.leadSource') }}</label>
                            <vue-select :options="leadSources" v-model="form.source" :placeholder="$t('common.select')" />
                        </div>
                    </div>
                    <div class="col-lg-6 col-md-12">
                        <div class="mb-3">
                            <label class="form-label">{{ $t('leads.assignedTo') }}</label>
                            <vue-select :options="owners" v-model="form.owner" :placeholder="$t('common.select')" />
                        </div>
                    </div>
                    <div class="col-lg-6 col-md-12">
                        <div class="mb-3">
                            <label class="form-label">{{ $t('common.priority') }}</label>
                            <vue-select :options="priorityOptions.filter(p => p !== 'All')" v-model="form.priority" :placeholder="$t('common.select')" />
                        </div>
                    </div>
                    <div class="col-lg-6 col-md-12">
                        <div class="mb-3">
                            <label class="form-label">{{ $t('leads.nextAction') }}</label>
                            <input type="text" class="form-control" v-model="form.nextAction">
                        </div>
                    </div>
                    <div class="col-lg-6 col-md-12">
                        <div class="mb-3">
                            <label class="form-label">{{ $t('leads.followUpDue') }}</label>
                            <input type="date" class="form-control" v-model="form.dueDate">
                        </div>
                    </div>
                </div>
            </div>
            <div class="offcanvas-footer d-flex align-items-center gap-2 pt-2">
                <button type="button" class="btn btn-dark d-flex align-items-center w-100" data-bs-dismiss="offcanvas">
                    <i class="icon-x me-1"></i>{{ $t('common.cancel') }}
                </button>
                <button type="submit" class="btn btn-primary d-flex align-items-center w-100">
                    <i class="icon-circle-check me-1"></i>{{ editingId ? $t('common.saveChanges') : $t('common.create') }}
                </button>
            </div>
        </form>
    </div>
</template>

<script>
import BasePagination from '@/components/BasePagination.vue';
import { opportunities, salesStages, leadSources, users, money } from '@/data/crm'
import { hideOffcanvas, showOffcanvas } from '@/utils/offcanvas'
import { openDetail, notify } from '@/utils/ui'
import { exportCsv, exportPdf } from '@/utils/export'

export default {
    components: { BasePagination },
    data() {
        return {
            opportunities,
            leadSources,
            money,
            openDetail,
            searchQuery: "",
            stageFilter: 'All',
            priorityFilter: 'All',
            statusFilter: 'All',
            stageOptions: ['All', ...salesStages],
            priorityOptions: ['All', 'Hot', 'Warm', 'Cold'],
            statusOptions: ['All', 'Active', 'Lost'],
            owners: users.filter(u => u.role.includes('Sales')).map(u => u.name),
            currentPage: 1,
            pageSize: 10,
            pageSizeOptions: [5, 10, 25, 50, 100],
            itemToDelete: null,
            editingId: null,
            form: this.emptyForm(),
        }
    },
    methods: {
        emptyForm() {
            return {
                customer: '', phone: '', interest: '', budget: '',
                source: null, owner: null, priority: null, nextAction: '', dueDate: '',
            }
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
        statusLabel(status) {
            const map = { Active: 'statusActive', Lost: 'statusLost' }
            return map[status] ? this.$t('leads.' + map[status]) : status
        },
        priorityClass(priority) {
            if (priority === 'Hot') return 'badge-soft-danger text-dark'
            if (priority === 'Warm') return 'badge-soft-warning text-dark'
            return 'badge-soft-info text-dark'
        },
        openEdit(record) {
            this.editingId = record.id
            this.form = {
                customer: record.customer,
                phone: '',
                interest: record.interest,
                budget: record.budget,
                source: record.source,
                owner: record.owner,
                priority: record.priority,
                nextAction: record.nextAction,
                dueDate: record.dueDate,
            }
            showOffcanvas('add_opportunity')
        },
        addOpportunity() {
            if (this.editingId) {
                const record = this.opportunities.find(o => o.id === this.editingId)
                if (record) {
                    record.customer = this.form.customer
                    record.interest = this.form.interest
                    record.budget = Number(this.form.budget) || 0
                    record.source = this.form.source || record.source
                    record.owner = this.form.owner || record.owner
                    record.priority = this.form.priority || record.priority
                    record.nextAction = this.form.nextAction
                    record.dueDate = this.form.dueDate
                }
                notify('Opportunity updated')
            } else {
                const owner = this.form.owner || 'Unassigned'
                this.opportunities.unshift({
                    id: 'OP-' + (2049 + this.opportunities.length),
                    customer: this.form.customer,
                    customerId: 'C-NEW',
                    interest: this.form.interest,
                    budget: Number(this.form.budget) || 0,
                    source: this.form.source || 'Walk-in',
                    campaign: '',
                    owner,
                    team: 'Unassigned',
                    stage: 'New Lead',
                    priority: this.form.priority || 'Warm',
                    nextAction: this.form.nextAction || 'First call',
                    dueDate: this.form.dueDate || '',
                    lastContact: '',
                    status: 'Active',
                })
                notify('Opportunity created')
            }
            this.editingId = null
            this.form = this.emptyForm()
            hideOffcanvas('add_opportunity')
        },
        exportExcel() {
            exportCsv('leads-opportunities', this.columns, this.filteredPages)
            notify('Leads exported as Excel (CSV)')
        },
        exportPdf() {
            exportPdf('Leads & Opportunities', this.columns, this.filteredPages)
            notify('Leads export opened for printing')
        },
        onPageChange(page) { this.currentPage = page },
        onPageSizeChange(size) { this.pageSize = Number(size); this.currentPage = 1 },
        setDelete(record) { this.itemToDelete = record },
        deleteItem() {
            if (this.itemToDelete) {
                this.opportunities = this.opportunities.filter(item => item !== this.itemToDelete)
                this.itemToDelete = null
            }
        },
    },
    computed: {
        columns() {
            return [
                { title: this.$t('common.id'), dataIndex: "id", key: "id", sorter: false, visible: true },
                { title: this.$t('common.customer'), dataIndex: "customer", key: "Customer", sorter: false, visible: true },
                { title: this.$t('common.source'), dataIndex: "source", key: "source", sorter: false, visible: true },
                { title: this.$t('leads.budget'), dataIndex: "budget", key: "Budget", sorter: false, visible: true },
                { title: this.$t('common.owner'), dataIndex: "owner", key: "owner", sorter: false, visible: true },
                { title: this.$t('common.stage'), dataIndex: "stage", key: "Stage", sorter: false, visible: true },
                { title: this.$t('common.priority'), dataIndex: "priority", key: "Priority", sorter: false, visible: true },
                { title: this.$t('leads.nextAction'), dataIndex: "nextAction", key: "nextAction", sorter: false, visible: true },
                { title: this.$t('leads.due'), dataIndex: "dueDate", key: "dueDate", sorter: false, visible: true },
                { title: this.$t('common.status'), dataIndex: "status", key: "Status", sorter: false, visible: true },
                { title: this.$t('common.action'), dataIndex: "Action", key: "Action", sorter: false, visible: true },
            ]
        },
        filteredPages() {
            const query = this.searchQuery.toLowerCase()
            return this.opportunities.filter((record) => {
                const matchesQuery =
                    record.customer.toLowerCase().includes(query) ||
                    record.interest.toLowerCase().includes(query) ||
                    record.owner.toLowerCase().includes(query) ||
                    record.id.toLowerCase().includes(query)
                const matchesStage = this.stageFilter === 'All' || record.stage === this.stageFilter
                const matchesPriority = this.priorityFilter === 'All' || record.priority === this.priorityFilter
                const matchesStatus = this.statusFilter === 'All' || record.status === this.statusFilter
                return matchesQuery && matchesStage && matchesPriority && matchesStatus
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
