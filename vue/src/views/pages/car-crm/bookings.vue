<template>
    <div class="page-wrapper">
        <div class="content">
            <layout-header></layout-header>

            <div class="content-wrap">
                <div class="d-flex align-items-center flex-wrap gap-3 border-bottom pb-4 mb-4">
                    <div class="flex-grow-1">
                        <h4 class="mb-1">Bookings &amp; Deposits</h4>
                        <p class="text-muted mb-0">Reserve a specific VIN, track deposits, expiry and refund terms.</p>
                    </div>
                    <a href="#" class="btn btn-primary d-inline-flex align-items-center" data-bs-toggle="offcanvas"
                        data-bs-target="#add_booking"><i class="icon-plus me-1"></i>New Booking</a>
                </div>

                <div class="d-flex align-items-center flex-wrap gap-3 justify-content-between mb-4">
                    <div class="dropdown">
                        <a href="javascript:void(0);" class="dropdown-toggle btn btn-white d-inline-flex align-items-center"
                            data-bs-toggle="dropdown">
                            <i class="icon-circle-dot text-dark me-2"></i>{{ statusFilter === 'All' ? 'All Status' : statusFilter }}
                        </a>
                        <ul class="dropdown-menu p-3">
                            <li v-for="s in statusOptions" :key="s">
                                <a href="javascript:void(0);" class="dropdown-item rounded" @click="statusFilter = s">{{ s }}</a>
                            </li>
                        </ul>
                    </div>
                    <div class="search-input">
                        <span class="btn-searchset"><i class="icon-search fs-14"></i></span>
                        <input type="text" class="form-control search-addon" placeholder="Search customer / VIN" v-model="searchQuery" />
                    </div>
                </div>

                <div class="table-responsive table-nowrap">
                    <a-table class="table mb-0 datatable" :columns="visibleColumns" :data-source="paginatedData"
                        :pagination="false">
                        <template #bodyCell="{ column, record }">
                            <template v-if="column.key === 'Booking'">
                                <h6 class="fs-14 fw-semibold mb-0">{{ record.id }}</h6>
                                <span class="fs-13">{{ record.customer }}</span>
                            </template>
                            <template v-if="column.key === 'Vehicle'">
                                <div>
                                    <span class="fw-medium">{{ record.vehicle }}</span>
                                    <div class="fs-13 text-muted">{{ record.vin }}</div>
                                </div>
                            </template>
                            <template v-if="column.key === 'Deposit'">
                                <span class="fw-semibold">{{ money(record.deposit) }}</span>
                                <div class="fs-13 text-muted">of {{ money(record.total) }}</div>
                            </template>
                            <template v-if="column.key === 'Status'">
                                <span class="badge" :class="statusClass(record.status)">{{ record.status }}</span>
                            </template>
                            <template v-if="column.key === 'Action'">
                                <div class="text-end">
                                    <div class="dropstart">
                                        <button class="btn btn-icon btn-white" type="button" data-bs-toggle="dropdown"
                                            aria-label="Actions">
                                            <i class="icon-ellipsis-vertical"></i>
                                        </button>
                                        <ul class="dropdown-menu p-3">
                                            <li><a href="javascript:void(0);" class="dropdown-item rounded d-flex align-items-center" @click="openDetail('Booking', record)"><i class="icon-eye me-2"></i>View Booking</a></li>
                                            <li><a href="javascript:void(0);" class="dropdown-item rounded d-flex align-items-center" @click="setStatus(record, 'Confirmed')"><i class="icon-check me-2"></i>Confirm</a></li>
                                            <li><a href="javascript:void(0);" class="dropdown-item rounded d-flex align-items-center" @click="setStatus(record, 'Cancelled')"><i class="icon-x me-2"></i>Cancel / Release</a></li>
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

    <div class="offcanvas offcanvas-end" tabindex="-1" id="add_booking">
        <div class="offcanvas-header d-flex align-items-center justify-content-between">
            <h4 class="offcanvas-title mb-0">New Booking</h4>
            <button type="button" class="btn-close btn-close-modal" data-bs-dismiss="offcanvas" aria-label="Close">
                <i class="icon-x"></i>
            </button>
        </div>
        <form class="d-flex flex-column overflow-y-auto h-100" @submit.prevent="addBooking">
            <div class="offcanvas-body pb-0">
                <div class="row gx-3">
                    <div class="col-md-12">
                        <div class="mb-3">
                            <label class="form-label">Customer<span class="text-danger"> *</span></label>
                            <vue-select :options="customerNames" v-model="form.customer" placeholder="Select" />
                        </div>
                    </div>
                    <div class="col-md-12">
                        <div class="mb-3">
                            <label class="form-label">Reserved Vehicle (VIN)<span class="text-danger"> *</span></label>
                            <vue-select :options="vinOptions" v-model="form.vin" placeholder="Select VIN" />
                        </div>
                    </div>
                    <div class="col-lg-6 col-md-12">
                        <div class="mb-3">
                            <label class="form-label">Deposit</label>
                            <input type="number" class="form-control" v-model="form.deposit">
                        </div>
                    </div>
                    <div class="col-lg-6 col-md-12">
                        <div class="mb-3">
                            <label class="form-label">Total</label>
                            <input type="number" class="form-control" v-model="form.total">
                        </div>
                    </div>
                    <div class="col-lg-6 col-md-12">
                        <div class="mb-3">
                            <label class="form-label">Expiry Date</label>
                            <input type="date" class="form-control" v-model="form.expiry">
                        </div>
                    </div>
                    <div class="col-md-12">
                        <div class="mb-3">
                            <label class="form-label">Cancellation / Refund Terms</label>
                            <input type="text" class="form-control" v-model="form.terms">
                        </div>
                    </div>
                </div>
            </div>
            <div class="offcanvas-footer d-flex align-items-center gap-2 pt-2">
                <button type="button" class="btn btn-dark d-flex align-items-center w-100" data-bs-dismiss="offcanvas">
                    <i class="icon-x me-1"></i>Cancel
                </button>
                <button type="submit" class="btn btn-primary d-flex align-items-center w-100">
                    <i class="icon-circle-check me-1"></i>Book
                </button>
            </div>
        </form>
    </div>
</template>

<script>
import BasePagination from '@/components/BasePagination.vue';
import { bookings, customers, vehicles, money } from '@/data/crm'
import { hideOffcanvas } from '@/utils/offcanvas'
import { openDetail, notify } from '@/utils/ui'

export default {
    name: 'CarCrmBookings',
    components: { BasePagination },
    data() {
        return {
            bookings,
            vehicles,
            money,
            openDetail,
            searchQuery: "",
            statusFilter: 'All',
            statusOptions: ['All', 'Pending', 'Confirmed', 'Expired', 'Cancelled'],
            customerNames: customers.map(c => c.name),
            vinOptions: vehicles.map(v => v.vin),
            currentPage: 1,
            pageSize: 10,
            pageSizeOptions: [5, 10, 25, 50, 100],
            form: this.emptyForm(),
            columns: [
                { title: "Booking", dataIndex: "id", key: "Booking", sorter: false, visible: true },
                { title: "Vehicle", dataIndex: "vehicle", key: "Vehicle", sorter: false, visible: true },
                { title: "Deposit", dataIndex: "deposit", key: "Deposit", sorter: false, visible: true },
                { title: "Expiry", dataIndex: "expiry", key: "expiry", sorter: false, visible: true },
                { title: "Terms", dataIndex: "terms", key: "terms", sorter: false, visible: true },
                { title: "Status", dataIndex: "status", key: "Status", sorter: false, visible: true },
                { title: "Action", dataIndex: "Action", key: "Action", sorter: false, visible: true },
            ],
        }
    },
    methods: {
        emptyForm() {
            return { customer: null, vin: null, deposit: '', total: '', expiry: '', terms: '' }
        },
        statusClass(status) {
            if (status === 'Confirmed') return 'badge-soft-success text-dark'
            if (status === 'Pending') return 'badge-soft-warning text-dark'
            return 'badge-soft-danger text-dark'
        },
        setStatus(record, status) {
            record.status = status
            notify(`${record.id} marked ${status}`)
        },
        addBooking() {
            const vehicle = this.vehicles?.find(v => v.vin === this.form.vin)
            this.bookings.unshift({
                id: 'BK-' + (6605 + this.bookings.length),
                customer: this.form.customer || 'Unassigned',
                vehicle: vehicle ? `${vehicle.brand} ${vehicle.model} ${vehicle.year}` : 'Reserved Vehicle',
                vin: this.form.vin || '',
                deposit: Number(this.form.deposit) || 0,
                total: Number(this.form.total) || 0,
                expiry: this.form.expiry,
                terms: this.form.terms || 'Company policy applies',
                status: 'Pending',
            })
            this.form = this.emptyForm()
            hideOffcanvas('add_booking')
        },
        onPageChange(page) { this.currentPage = page },
        onPageSizeChange(size) { this.pageSize = Number(size); this.currentPage = 1 },
    },
    computed: {
        filteredPages() {
            const query = this.searchQuery.toLowerCase()
            return this.bookings.filter((record) => {
                const matchesQuery =
                    record.customer.toLowerCase().includes(query) ||
                    record.vin.toLowerCase().includes(query) ||
                    record.id.toLowerCase().includes(query)
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
