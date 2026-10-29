<template>
    <div class="page-wrapper">
        <div class="content">
            <layout-header></layout-header>

            <div class="content-wrap">
                <div class="d-flex align-items-center flex-wrap gap-3 border-bottom pb-4 mb-4">
                    <div class="flex-grow-1">
                        <h4 class="mb-1">{{ $t('CheckupReminders.title') }}</h4>
                        <p class="text-muted mb-0">{{ $t('CheckupReminders.subtitle') }}</p>
                    </div>
                    <a href="#" class="btn btn-primary d-inline-flex align-items-center" data-bs-toggle="offcanvas"
                        data-bs-target="#add_checkup"><i class="icon-plus me-1"></i>{{ $t('CheckupReminders.newReminder') }}</a>
                </div>

                <div class="row g-4 mb-4">
                    <div class="col-xxl-4 col-md-4">
                        <div class="card dash-card mb-0">
                            <div class="card-body">
                                <h6 class="mb-2">{{ $t('CheckupReminders.overdue') }}</h6>
                                <h3 class="mb-0 text-danger">{{ statusCount('Overdue') }}</h3>
                            </div>
                        </div>
                    </div>
                    <div class="col-xxl-4 col-md-4">
                        <div class="card dash-card mb-0">
                            <div class="card-body">
                                <h6 class="mb-2">{{ $t('CheckupReminders.dueNow') }}</h6>
                                <h3 class="mb-0 text-warning">{{ statusCount('Due') }}</h3>
                            </div>
                        </div>
                    </div>
                    <div class="col-xxl-4 col-md-4">
                        <div class="card dash-card mb-0">
                            <div class="card-body">
                                <h6 class="mb-2">{{ $t('CheckupReminders.upcoming') }}</h6>
                                <h3 class="mb-0 text-info">{{ statusCount('Upcoming') }}</h3>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="d-flex align-items-center flex-wrap gap-3 justify-content-between mb-4">
                    <div class="dropdown">
                        <a href="javascript:void(0);" class="dropdown-toggle btn btn-white d-inline-flex align-items-center"
                            data-bs-toggle="dropdown">
                            <i class="icon-circle-dot text-dark me-2"></i>{{ statusFilter === 'All' ? $t('CheckupReminders.allStatus') : statusLabel(statusFilter) }}
                        </a>
                        <ul class="dropdown-menu p-3">
                            <li v-for="s in statusOptions" :key="s">
                                <a href="javascript:void(0);" class="dropdown-item rounded" @click="statusFilter = s">{{ s === 'All' ? $t('CheckupReminders.all') : statusLabel(s) }}</a>
                            </li>
                        </ul>
                    </div>
                    <div class="search-input">
                        <span class="btn-searchset"><i class="icon-search fs-14"></i></span>
                        <input type="search" class="form-control search-addon" :placeholder="$t('CheckupReminders.searchPlaceholder')" v-model="searchQuery" />
                    </div>
                </div>

                <div class="table-responsive table-nowrap">
                    <a-table class="table mb-0 datatable" :columns="visibleColumns" :data-source="paginatedData"
                        :pagination="false">
                        <template #bodyCell="{ column, record }">
                            <template v-if="column.key === 'Reminder'">
                                <div class="d-flex align-items-center">
                                    <span class="avatar avatar-sm rounded bg-light flex-shrink-0 me-2">
                                        <i class="icon-calendar-clock fs-13"></i>
                                    </span>
                                    <div>
                                        <h6 class="fs-14 fw-semibold mb-0">{{ record.customer }}</h6>
                                        <span class="fs-13">{{ record.vehicle }}</span>
                                    </div>
                                </div>
                            </template>
                            <template v-if="column.key === 'Package'">
                                <span class="fs-13">{{ record.package }}</span>
                            </template>
                            <template v-if="column.key === 'Due'">
                                <span class="fw-medium" v-if="record.dueType === 'Date'">{{ record.dueDate }}</span>
                                <span class="fw-medium" v-else>{{ Number(record.dueMileage).toLocaleString() }} km</span>
                                <div class="fs-13 text-muted">{{ $t('CheckupReminders.by') }} {{ dueTypeLabel(record.dueType) }}</div>
                            </template>
                            <template v-if="column.key === 'Current'">
                                <span class="fs-13">{{ record.currentMileage.toLocaleString() }} km</span>
                            </template>
                            <template v-if="column.key === 'LastVisit'">
                                <span class="fs-13">{{ record.lastVisit }}</span>
                            </template>
                            <template v-if="column.key === 'Status'">
                                <span class="badge" :class="statusClass(record.status)">{{ statusLabel(record.status) }}</span>
                            </template>
                            <template v-if="column.key === 'Action'">
                                <div class="text-end">
                                    <div class="dropstart">
                                        <button class="btn btn-icon btn-white" type="button" data-bs-toggle="dropdown"
                                            :aria-label="$t('CheckupReminders.actions')">
                                            <i class="icon-ellipsis-vertical"></i>
                                        </button>
                                        <ul class="dropdown-menu p-3">
                                            <li><a href="javascript:void(0);" class="dropdown-item rounded d-flex align-items-center" @click="sendReminder(record)"><i class="icon-send me-2"></i>{{ $t('CheckupReminders.sendReminder') }}</a></li>
                                            <li><a href="javascript:void(0);" class="dropdown-item rounded d-flex align-items-center" @click="createAppointment(record)"><i class="icon-calendar-plus me-2"></i>{{ $t('CheckupReminders.createAppointment') }}</a></li>
                                            <li><a href="javascript:void(0);" class="dropdown-item rounded d-flex align-items-center" @click="markDone(record)"><i class="icon-check me-2"></i>{{ $t('CheckupReminders.markDone') }}</a></li>
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

    <div class="offcanvas offcanvas-end" tabindex="-1" id="add_checkup">
        <div class="offcanvas-header d-flex align-items-center justify-content-between">
            <h4 class="offcanvas-title mb-0">{{ $t('CheckupReminders.newCheckupReminder') }}</h4>
            <button type="button" class="btn-close btn-close-modal" data-bs-dismiss="offcanvas" :aria-label="$t('CheckupReminders.close')">
                <i class="icon-x"></i>
            </button>
        </div>
        <form class="d-flex flex-column overflow-y-auto h-100" @submit.prevent="addCheckup">
            <div class="offcanvas-body pb-0">
                <div class="row gx-3">
                    <div class="col-lg-6 col-md-12">
                        <div class="mb-3">
                            <label class="form-label">{{ $t('CheckupReminders.customer') }}<span class="text-danger"> *</span></label>
                            <input type="text" class="form-control" v-model="form.customer" required>
                        </div>
                    </div>
                    <div class="col-lg-6 col-md-12">
                        <div class="mb-3">
                            <label class="form-label">{{ $t('CheckupReminders.vehicle') }}</label>
                            <input type="text" class="form-control" v-model="form.vehicle">
                        </div>
                    </div>
                    <div class="col-md-12">
                        <div class="mb-3">
                            <label class="form-label">{{ $t('CheckupReminders.vin') }}</label>
                            <input type="text" class="form-control" v-model="form.vin">
                        </div>
                    </div>
                    <div class="col-lg-6 col-md-12">
                        <div class="mb-3">
                            <label class="form-label">{{ $t('CheckupReminders.reminderType') }}</label>
                            <vue-select :options="dueTypeOptions" label="label" :reduce="option => option.value" v-model="form.dueType" :placeholder="$t('CheckupReminders.select')" />
                        </div>
                    </div>
                    <div class="col-lg-6 col-md-12" v-if="form.dueType === 'Date'">
                        <div class="mb-3">
                            <label class="form-label">{{ $t('CheckupReminders.dueDate') }}</label>
                            <input type="date" class="form-control" v-model="form.dueDate">
                        </div>
                    </div>
                    <div class="col-lg-6 col-md-12" v-else>
                        <div class="mb-3">
                            <label class="form-label">{{ $t('CheckupReminders.dueMileage') }}</label>
                            <input type="number" class="form-control" v-model="form.dueMileage">
                        </div>
                    </div>
                    <div class="col-lg-6 col-md-12">
                        <div class="mb-3">
                            <label class="form-label">{{ $t('CheckupReminders.currentMileage') }}</label>
                            <input type="number" class="form-control" v-model="form.currentMileage">
                        </div>
                    </div>
                </div>
            </div>
            <div class="offcanvas-footer d-flex align-items-center gap-2 pt-2">
                <button type="button" class="btn btn-dark d-flex align-items-center w-100" data-bs-dismiss="offcanvas">
                    <i class="icon-x me-1"></i>{{ $t('CheckupReminders.cancel') }}
                </button>
                <button type="submit" class="btn btn-primary d-flex align-items-center w-100">
                    <i class="icon-circle-check me-1"></i>{{ $t('CheckupReminders.save') }}
                </button>
            </div>
        </form>
    </div>
</template>

<script>
import BasePagination from '@/components/BasePagination.vue';
import { checkups } from '@/data/after-sales'
import { hideOffcanvas } from '@/utils/offcanvas'
import { notify } from '@/utils/ui'

export default {
    name: 'CheckupReminders',
    components: { BasePagination },
    data() {
        return {
            checkups,
            searchQuery: "",
            statusFilter: 'All',
            statusOptions: ['All', 'Overdue', 'Due', 'Upcoming', 'Done'],
            currentPage: 1,
            pageSize: 10,
            pageSizeOptions: [5, 10, 25, 50, 100],
            form: this.emptyForm(),
        }
    },
    methods: {
        emptyForm() {
            return {
                customer: '', vehicle: '', vin: '', dueType: null,
                dueDate: '', dueMileage: '', currentMileage: '',
            }
        },
        statusLabel(status) {
            const keys = { Overdue: 'overdue', Due: 'due', Upcoming: 'upcoming', Done: 'done' }
            return keys[status] ? this.$t(`CheckupReminders.statuses.${keys[status]}`) : status
        },
        dueTypeLabel(type) {
            const keys = { Date: 'date', Mileage: 'mileage' }
            return keys[type] ? this.$t(`CheckupReminders.dueTypes.${keys[type]}`).toLowerCase() : type
        },
        statusClass(status) {
            if (status === 'Done') return 'badge-soft-success text-dark'
            if (status === 'Due') return 'badge-soft-warning text-dark'
            if (status === 'Overdue') return 'badge-soft-danger text-dark'
            return 'badge-soft-info text-dark'
        },
        statusCount(status) {
            return this.checkups.filter(c => c.status === status).length
        },
        sendReminder(record) {
            record.status = record.status === 'Overdue' ? 'Due' : record.status
            notify(this.$t('CheckupReminders.reminderSent', { name: record.customer }))
        },
        createAppointment(record) {
            record.status = 'Due'
            notify(this.$t('CheckupReminders.appointmentCreated', { name: record.customer }))
        },
        markDone(record) {
            record.status = 'Done'
            notify(this.$t('CheckupReminders.checkupCompleted', { name: record.customer }))
        },
        addCheckup() {
            const today = new Date().toISOString().slice(0, 10)
            this.checkups.unshift({
                id: 'CK-' + (3007 + this.checkups.length),
                customer: this.form.customer,
                vehicle: this.form.vehicle,
                vin: this.form.vin,
                package: '—',
                dueType: this.form.dueType || 'Date',
                dueDate: this.form.dueDate || '—',
                dueMileage: Number(this.form.dueMileage) || '—',
                currentMileage: Number(this.form.currentMileage) || 0,
                lastVisit: today,
                status: 'Upcoming',
            })
            this.form = this.emptyForm()
            hideOffcanvas('add_checkup')
        },
        onPageChange(page) { this.currentPage = page },
        onPageSizeChange(size) { this.pageSize = Number(size); this.currentPage = 1 },
    },
    computed: {
        columns() {
            return [
                { title: this.$t('CheckupReminders.reminder'), dataIndex: 'customer', key: 'Reminder', sorter: false, visible: true },
                { title: this.$t('CheckupReminders.package'), dataIndex: 'package', key: 'Package', sorter: false, visible: true },
                { title: this.$t('CheckupReminders.due'), dataIndex: 'dueDate', key: 'Due', sorter: false, visible: true },
                { title: this.$t('CheckupReminders.current'), dataIndex: 'currentMileage', key: 'Current', sorter: false, visible: true },
                { title: this.$t('CheckupReminders.lastVisit'), dataIndex: 'lastVisit', key: 'LastVisit', sorter: false, visible: true },
                { title: this.$t('CheckupReminders.status'), dataIndex: 'status', key: 'Status', sorter: false, visible: true },
                { title: this.$t('CheckupReminders.action'), dataIndex: 'Action', key: 'Action', sorter: false, visible: true },
            ]
        },
        dueTypeOptions() {
            return [
                { value: 'Date', label: this.$t('CheckupReminders.dueTypes.date') },
                { value: 'Mileage', label: this.$t('CheckupReminders.dueTypes.mileage') },
            ]
        },
        filteredPages() {
            const query = this.searchQuery.toLowerCase()
            return this.checkups.filter((record) => {
                const matchesQuery =
                    record.customer.toLowerCase().includes(query) ||
                    record.vin.toLowerCase().includes(query) ||
                    record.vehicle.toLowerCase().includes(query)
                const matchesStatus = this.statusFilter === 'All' || record.status === this.statusFilter
                return matchesQuery && matchesStatus
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
