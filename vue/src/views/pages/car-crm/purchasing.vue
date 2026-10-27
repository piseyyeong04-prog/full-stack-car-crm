<template>
    <div class="page-wrapper">
        <div class="content">
            <layout-header></layout-header>

            <div class="content-wrap">
                <div class="d-flex align-items-center flex-wrap gap-3 border-bottom pb-4 mb-4">
                    <div class="flex-grow-1">
                        <h4 class="mb-1">Purchasing</h4>
                        <p class="text-muted mb-0">Purchase orders, approvals and vehicle receipt.</p>
                    </div>
                    <div class="d-flex align-items-center gap-3 flex-wrap">
                        <a href="#" class="btn btn-primary d-inline-flex align-items-center" data-bs-toggle="offcanvas"
                            data-bs-target="#add_purchase"><i class="icon-plus me-1"></i>New Purchase Order</a>
                    </div>
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
                        <input type="text" class="form-control search-addon" placeholder="Search supplier" v-model="searchQuery" />
                    </div>
                </div>

                <div class="table-responsive table-nowrap">
                    <a-table class="table mb-0 datatable" :columns="visibleColumns" :data-source="paginatedData"
                        :pagination="false">
                        <template #bodyCell="{ column, record }">
                            <template v-if="column.key === 'Order'">
                                <h6 class="fs-14 fw-semibold mb-0">{{ record.id }}</h6>
                                <span class="fs-13">{{ record.vehicles }}</span>
                            </template>
                            <template v-if="column.key === 'Amount'">{{ money(record.amount) }}</template>
                            <template v-if="column.key === 'Deposit'">{{ money(record.deposit) }}</template>
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
                                            <li><a href="javascript:void(0);" class="dropdown-item rounded d-flex align-items-center" @click="openDetail('Purchase Order', record)"><i class="icon-eye me-2"></i>View Order</a></li>
                                            <li><a href="javascript:void(0);" class="dropdown-item rounded d-flex align-items-center" @click="receive(record)"><i class="icon-check me-2"></i>Receive Vehicles</a></li>
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

    <div class="offcanvas offcanvas-end" tabindex="-1" id="add_purchase">
        <div class="offcanvas-header d-flex align-items-center justify-content-between">
            <h4 class="offcanvas-title mb-0">New Purchase Order</h4>
            <button type="button" class="btn-close btn-close-modal" data-bs-dismiss="offcanvas" aria-label="Close">
                <i class="icon-x"></i>
            </button>
        </div>
        <form class="d-flex flex-column overflow-y-auto h-100" @submit.prevent="addPurchase">
            <div class="offcanvas-body pb-0">
                <div class="row gx-3">
                    <div class="col-md-12">
                        <div class="mb-3">
                            <label class="form-label">Supplier<span class="text-danger"> *</span></label>
                            <input type="text" class="form-control" v-model="form.supplier" required>
                        </div>
                    </div>
                    <div class="col-md-12">
                        <div class="mb-3">
                            <label class="form-label">Vehicles</label>
                            <input type="text" class="form-control" v-model="form.vehicles" placeholder="e.g. 2x Fortuner 2024">
                        </div>
                    </div>
                    <div class="col-lg-6 col-md-12">
                        <div class="mb-3">
                            <label class="form-label">Order Amount</label>
                            <input type="number" class="form-control" v-model="form.amount">
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
                            <label class="form-label">Expected Receipt</label>
                            <input type="date" class="form-control" v-model="form.expected">
                        </div>
                    </div>
                    <div class="col-lg-6 col-md-12">
                        <div class="mb-3">
                            <label class="form-label">Approver</label>
                            <vue-select :options="approvers" v-model="form.approver" placeholder="Select" />
                        </div>
                    </div>
                </div>
            </div>
            <div class="offcanvas-footer d-flex align-items-center gap-2 pt-2">
                <button type="button" class="btn btn-dark d-flex align-items-center w-100" data-bs-dismiss="offcanvas">
                    <i class="icon-x me-1"></i>Cancel
                </button>
                <button type="submit" class="btn btn-primary d-flex align-items-center w-100">
                    <i class="icon-circle-check me-1"></i>Submit
                </button>
            </div>
        </form>
    </div>
</template>

<script>
import BasePagination from '@/components/BasePagination.vue';
import { purchases, users, money } from '@/data/crm'
import { hideOffcanvas } from '@/utils/offcanvas'
import { openDetail, notify } from '@/utils/ui'

export default {
    name: 'CarCrmPurchasing',
    components: { BasePagination },
    data() {
        return {
            purchases,
            money,
            openDetail,
            searchQuery: "",
            statusFilter: 'All',
            statusOptions: ['All', 'Pending Approval', 'Approved', 'In Transit', 'Received'],
            approvers: users.filter(u => ['Sales Manager', 'Director'].includes(u.role) || u.role.includes('Manager')).map(u => u.name),
            currentPage: 1,
            pageSize: 10,
            pageSizeOptions: [5, 10, 25, 50, 100],
            form: this.emptyForm(),
            columns: [
                { title: "Order", dataIndex: "id", key: "Order", sorter: false, visible: true },
                { title: "Supplier", dataIndex: "supplier", key: "supplier", sorter: false, visible: true },
                { title: "Amount", dataIndex: "amount", key: "Amount", sorter: false, visible: true },
                { title: "Deposit", dataIndex: "deposit", key: "Deposit", sorter: false, visible: true },
                { title: "Expected", dataIndex: "expected", key: "expected", sorter: false, visible: true },
                { title: "Approver", dataIndex: "approver", key: "approver", sorter: false, visible: true },
                { title: "Status", dataIndex: "status", key: "Status", sorter: false, visible: true },
                { title: "Action", dataIndex: "Action", key: "Action", sorter: false, visible: true },
            ],
        }
    },
    methods: {
        emptyForm() {
            return { supplier: '', vehicles: '', amount: '', deposit: '', expected: '', approver: null }
        },
        statusClass(status) {
            if (status === 'Received') return 'badge-soft-success text-dark'
            if (status === 'Approved') return 'badge-soft-info text-dark'
            if (status === 'In Transit') return 'badge-soft-warning text-dark'
            return 'badge-soft-secondary text-dark'
        },
        receive(record) {
            record.status = 'Received'
            notify(`${record.id} vehicles received into stock`)
        },
        addPurchase() {
            this.purchases.unshift({
                id: 'PO-' + (3306 + this.purchases.length),
                supplier: this.form.supplier,
                vehicles: this.form.vehicles,
                amount: Number(this.form.amount) || 0,
                deposit: Number(this.form.deposit) || 0,
                expected: this.form.expected,
                approver: this.form.approver || 'Pending',
                status: 'Pending Approval',
            })
            this.form = this.emptyForm()
            hideOffcanvas('add_purchase')
        },
        onPageChange(page) { this.currentPage = page },
        onPageSizeChange(size) { this.pageSize = Number(size); this.currentPage = 1 },
    },
    computed: {
        filteredPages() {
            const query = this.searchQuery.toLowerCase()
            return this.purchases.filter((record) => {
                const matchesQuery =
                    record.supplier.toLowerCase().includes(query) ||
                    record.id.toLowerCase().includes(query) ||
                    record.vehicles.toLowerCase().includes(query)
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
