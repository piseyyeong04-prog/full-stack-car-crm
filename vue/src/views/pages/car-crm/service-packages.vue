<template>
    <div class="page-wrapper">
        <div class="content">
            <layout-header></layout-header>

            <div class="content-wrap">
                <div class="d-flex align-items-center flex-wrap gap-3 border-bottom pb-4 mb-4">
                    <div class="flex-grow-1">
                        <h4 class="mb-1">Service Packages</h4>
                        <p class="text-muted mb-0">Package definitions, usage deduction and transfer rules.</p>
                    </div>
                    <a href="#" class="btn btn-primary d-inline-flex align-items-center" data-bs-toggle="offcanvas"
                        data-bs-target="#add_package"><i class="icon-plus me-1"></i>New Package</a>
                </div>

                <div class="row g-4 mb-4">
                    <div class="col-xxl-3 col-md-6">
                        <div class="card dash-card mb-0">
                            <div class="card-body">
                                <h6 class="mb-2">Active Packages</h6>
                                <h3 class="mb-0">{{ statusCount('Active') }}</h3>
                            </div>
                        </div>
                    </div>
                    <div class="col-xxl-3 col-md-6">
                        <div class="card dash-card mb-0">
                            <div class="card-body">
                                <h6 class="mb-2">Completed</h6>
                                <h3 class="mb-0 text-muted">{{ statusCount('Completed') }}</h3>
                            </div>
                        </div>
                    </div>
                    <div class="col-xxl-3 col-md-6">
                        <div class="card dash-card mb-0">
                            <div class="card-body">
                                <h6 class="mb-2">Remaining Uses</h6>
                                <h3 class="mb-0 text-success">{{ totalRemaining }}</h3>
                            </div>
                        </div>
                    </div>
                    <div class="col-xxl-3 col-md-6">
                        <div class="card dash-card mb-0">
                            <div class="card-body">
                                <h6 class="mb-2">Used Uses</h6>
                                <h3 class="mb-0">{{ totalUsed }}</h3>
                            </div>
                        </div>
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
                        <input type="text" class="form-control search-addon" placeholder="Search package / customer" v-model="searchQuery" />
                    </div>
                </div>

                <div class="table-responsive table-nowrap">
                    <a-table class="table mb-0 datatable" :columns="visibleColumns" :data-source="paginatedData"
                        :pagination="false">
                        <template #bodyCell="{ column, record }">
                            <template v-if="column.key === 'Package'">
                                <div class="d-flex align-items-center">
                                    <span class="avatar avatar-sm rounded bg-light flex-shrink-0 me-2">
                                        <i class="icon-package fs-13"></i>
                                    </span>
                                    <div>
                                        <h6 class="fs-14 fw-semibold mb-0">{{ record.name }}</h6>
                                        <span class="fs-13">{{ record.id }}</span>
                                    </div>
                                </div>
                            </template>
                            <template v-if="column.key === 'Customer'">
                                <span class="fw-medium">{{ record.customer }}</span>
                                <div class="fs-13 text-muted">{{ record.vehicle }}</div>
                            </template>
                            <template v-if="column.key === 'Included'">
                                <span class="fs-13">{{ record.includedServices }}</span>
                            </template>
                            <template v-if="column.key === 'Validity'">
                                <span class="fs-13">{{ record.startDate }} → {{ record.expiryDate }}</span>
                            </template>
                            <template v-if="column.key === 'Usage'">
                                <div class="d-flex align-items-center gap-2">
                                    <div class="progress flex-grow-1" style="height: 6px; min-width: 80px;">
                                        <div class="progress-bar bg-primary"
                                            :style="{ width: usagePercent(record) + '%' }"></div>
                                    </div>
                                    <span class="fs-13 fw-semibold text-nowrap">{{ record.used }}/{{ record.usageAllowance }}</span>
                                </div>
                                <div class="fs-13 text-muted">{{ packageRemaining(record) }} remaining</div>
                            </template>
                            <template v-if="column.key === 'Status'">
                                <span class="badge" :class="record.status === 'Active' ? 'badge-soft-success text-dark' : 'badge-soft-secondary text-dark'">
                                    {{ record.status }}
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
                                            <li>
                                                <a href="javascript:void(0);" class="dropdown-item rounded d-flex align-items-center"
                                                    :class="{ disabled: packageRemaining(record) <= 0 }" @click="usePackage(record)">
                                                    <i class="icon-circle-check me-2"></i>Redeem on Job Card
                                                </a>
                                            </li>
                                            <li><a href="javascript:void(0);" class="dropdown-item rounded d-flex align-items-center" data-bs-toggle="modal" data-bs-target="#transfer_pkg_modal" @click="openTransfer(record)"><i class="icon-arrow-left-right me-2"></i>Transfer Package</a></li>
                                            <li><a href="javascript:void(0);" class="dropdown-item rounded d-flex align-items-center" @click="viewUsage(record)"><i class="icon-eye me-2"></i>View Usage History</a></li>
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

    <div class="offcanvas offcanvas-end" tabindex="-1" id="add_package">
        <div class="offcanvas-header d-flex align-items-center justify-content-between">
            <h4 class="offcanvas-title mb-0">New Service Package</h4>
            <button type="button" class="btn-close btn-close-modal" data-bs-dismiss="offcanvas" aria-label="Close">
                <i class="icon-x"></i>
            </button>
        </div>
        <form class="d-flex flex-column overflow-y-auto h-100" @submit.prevent="addPackage">
            <div class="offcanvas-body pb-0">
                <div class="row gx-3">
                    <div class="col-md-12">
                        <div class="mb-3">
                            <label class="form-label">Package Name<span class="text-danger"> *</span></label>
                            <input type="text" class="form-control" v-model="form.name" required>
                        </div>
                    </div>
                    <div class="col-lg-6 col-md-12">
                        <div class="mb-3">
                            <label class="form-label">Customer</label>
                            <input type="text" class="form-control" v-model="form.customer">
                        </div>
                    </div>
                    <div class="col-lg-6 col-md-12">
                        <div class="mb-3">
                            <label class="form-label">Vehicle</label>
                            <input type="text" class="form-control" v-model="form.vehicle">
                        </div>
                    </div>
                    <div class="col-md-12">
                        <div class="mb-3">
                            <label class="form-label">Included Services &amp; Parts</label>
                            <input type="text" class="form-control" v-model="form.includedServices">
                        </div>
                    </div>
                    <div class="col-lg-6 col-md-12">
                        <div class="mb-3">
                            <label class="form-label">Start Date</label>
                            <input type="date" class="form-control" v-model="form.startDate">
                        </div>
                    </div>
                    <div class="col-lg-6 col-md-12">
                        <div class="mb-3">
                            <label class="form-label">Expiry Date</label>
                            <input type="date" class="form-control" v-model="form.expiryDate">
                        </div>
                    </div>
                    <div class="col-lg-6 col-md-12">
                        <div class="mb-3">
                            <label class="form-label">Usage Allowance</label>
                            <input type="number" class="form-control" v-model="form.usageAllowance">
                        </div>
                    </div>
                    <div class="col-lg-6 col-md-12">
                        <div class="mb-3">
                            <label class="form-label">Transferable</label>
                            <vue-select :options="['Yes', 'No']" v-model="form.transferable" placeholder="Select" />
                        </div>
                    </div>
                </div>
            </div>
            <div class="offcanvas-footer d-flex align-items-center gap-2 pt-2">
                <button type="button" class="btn btn-dark d-flex align-items-center w-100" data-bs-dismiss="offcanvas">
                    <i class="icon-x me-1"></i>Cancel
                </button>
                <button type="submit" class="btn btn-primary d-flex align-items-center w-100">
                    <i class="icon-circle-check me-1"></i>Save
                </button>
            </div>
        </form>
    </div>

    <!-- Transfer package modal -->
    <div class="modal fade" id="transfer_pkg_modal">
        <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title">Transfer Package</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body" v-if="transferItem">
                    <p class="mb-3">{{ transferItem.name }} · currently with {{ transferItem.customer }}</p>
                    <div class="mb-3">
                        <label class="form-label">Transfer To (Customer)</label>
                        <input type="text" class="form-control" v-model="transferTo">
                    </div>
                    <div class="mb-0">
                        <label class="form-label">Vehicle</label>
                        <input type="text" class="form-control" v-model="transferVehicle">
                    </div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-light" data-bs-dismiss="modal">Cancel</button>
                    <button type="button" class="btn btn-primary" data-bs-dismiss="modal" @click="applyTransfer">Transfer</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import BasePagination from '@/components/BasePagination.vue';
import { servicePackages, packageRemaining } from '@/data/after-sales'
import { hideOffcanvas } from '@/utils/offcanvas'
import { openDetail, notify } from '@/utils/ui'

export default {
    name: 'ServicePackages',
    components: { BasePagination },
    data() {
        return {
            servicePackages,
            packageRemaining,
            transferItem: null,
            transferTo: '',
            transferVehicle: '',
            searchQuery: "",
            statusFilter: 'All',
            statusOptions: ['All', 'Active', 'Completed', 'Expired'],
            currentPage: 1,
            pageSize: 10,
            pageSizeOptions: [5, 10, 25, 50, 100],
            form: this.emptyForm(),
            columns: [
                { title: "Package", dataIndex: "name", key: "Package", sorter: false, visible: true },
                { title: "Customer", dataIndex: "customer", key: "Customer", sorter: false, visible: true },
                { title: "Included", dataIndex: "includedServices", key: "Included", sorter: false, visible: true },
                { title: "Validity", dataIndex: "startDate", key: "Validity", sorter: false, visible: true },
                { title: "Usage", dataIndex: "used", key: "Usage", sorter: false, visible: true },
                { title: "Transferable", dataIndex: "transferable", key: "transferable", sorter: false, visible: true },
                { title: "Status", dataIndex: "status", key: "Status", sorter: false, visible: true },
                { title: "Action", dataIndex: "Action", key: "Action", sorter: false, visible: true },
            ],
        }
    },
    methods: {
        emptyForm() {
            return {
                name: '', customer: '', vehicle: '', includedServices: '',
                startDate: '', expiryDate: '', usageAllowance: '', transferable: null,
            }
        },
        usagePercent(record) {
            if (!record.usageAllowance) return 0
            return Math.min(100, Math.round((record.used / record.usageAllowance) * 100))
        },
        usePackage(record) {
            if (packageRemaining(record) <= 0) return
            record.used += 1
            if (packageRemaining(record) <= 0) record.status = 'Completed'
            notify(`${record.name} redeemed on Job Card (${packageRemaining(record)} left)`)
        },
        openTransfer(record) {
            this.transferItem = record
            this.transferTo = ''
            this.transferVehicle = record.vehicle
        },
        applyTransfer() {
            if (this.transferItem && this.transferTo.trim()) {
                this.transferItem.customer = this.transferTo
                this.transferItem.vehicle = this.transferVehicle
                notify(`Package transferred to ${this.transferTo}`)
            }
        },
        viewUsage(record) {
            openDetail('Package Usage History', {
                package: record.name,
                customer: record.customer,
                vehicle: record.vehicle,
                usageAllowance: record.usageAllowance,
                used: record.used,
                remaining: packageRemaining(record),
                startDate: record.startDate,
                expiryDate: record.expiryDate,
                transferable: record.transferable,
                status: record.status,
            })
        },
        statusCount(status) {
            return this.servicePackages.filter(p => p.status === status).length
        },
        addPackage() {
            this.servicePackages.unshift({
                id: 'SP-' + (8005 + this.servicePackages.length),
                name: this.form.name,
                customer: this.form.customer,
                vehicle: this.form.vehicle,
                vin: '',
                includedServices: this.form.includedServices,
                startDate: this.form.startDate,
                expiryDate: this.form.expiryDate,
                usageAllowance: Number(this.form.usageAllowance) || 0,
                used: 0,
                transferable: this.form.transferable || 'No',
                status: 'Active',
            })
            this.form = this.emptyForm()
            hideOffcanvas('add_package')
        },
        onPageChange(page) { this.currentPage = page },
        onPageSizeChange(size) { this.pageSize = Number(size); this.currentPage = 1 },
    },
    computed: {
        totalRemaining() {
            return this.servicePackages.reduce((sum, p) => sum + packageRemaining(p), 0)
        },
        totalUsed() {
            return this.servicePackages.reduce((sum, p) => sum + p.used, 0)
        },
        filteredPages() {
            const query = this.searchQuery.toLowerCase()
            return this.servicePackages.filter((record) => {
                const matchesQuery =
                    record.name.toLowerCase().includes(query) ||
                    record.customer.toLowerCase().includes(query) ||
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
