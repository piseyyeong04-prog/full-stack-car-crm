<template>
    <div class="page-wrapper">
        <div class="content">
            <layout-header></layout-header>

            <div class="content-wrap">
                <!-- Page header -->
                <div class="d-flex align-items-center flex-wrap gap-3 border-bottom pb-4 mb-4">
                    <div class="flex-grow-1">
                        <h4 class="mb-1">Vehicle Inventory</h4>
                        <p class="text-muted mb-0">Track every vehicle by VIN, status, location, cost and history.</p>
                    </div>
                    <div class="d-flex align-items-center gap-3 flex-wrap">
                        <div class="dropdown">
                            <a href="javascript:void(0);" class="dropdown-toggle btn btn-dark d-inline-flex align-items-center"
                                data-bs-toggle="dropdown">
                                <i class="icon-arrow-down-to-line me-1"></i>Export
                            </a>
                            <ul class="dropdown-menu dropdown-menu-end p-3">
                                <li><a href="javascript:void(0);" class="dropdown-item rounded" @click="exportPdf">Export as PDF</a></li>
                                <li><a href="javascript:void(0);" class="dropdown-item rounded" @click="exportExcel">Export as Excel</a></li>
                            </ul>
                        </div>
                        <a href="#" class="btn btn-primary d-inline-flex align-items-center" data-bs-toggle="offcanvas"
                            data-bs-target="#add_vehicle" @click="openCreate"><i class="icon-plus me-1"></i>Add Vehicle</a>
                    </div>
                </div>

                <!-- Summary -->
                <div class="row g-4 mb-4">
                    <div class="col-xxl-3 col-md-6">
                        <div class="card dash-card mb-0">
                            <div class="card-body">
                                <h6 class="mb-2">Available</h6>
                                <h3 class="mb-0">{{ statusCount('Available') }}</h3>
                            </div>
                        </div>
                    </div>
                    <div class="col-xxl-3 col-md-6">
                        <div class="card dash-card mb-0">
                            <div class="card-body">
                                <h6 class="mb-2">Reserved</h6>
                                <h3 class="mb-0">{{ statusCount('Reserved') }}</h3>
                            </div>
                        </div>
                    </div>
                    <div class="col-xxl-3 col-md-6">
                        <div class="card dash-card mb-0">
                            <div class="card-body">
                                <h6 class="mb-2">In Stock Value</h6>
                                <h3 class="mb-0">{{ money(stockValue) }}</h3>
                            </div>
                        </div>
                    </div>
                    <div class="col-xxl-3 col-md-6">
                        <div class="card dash-card mb-0">
                            <div class="card-body">
                                <h6 class="mb-2">Aging &gt; 45 days</h6>
                                <h3 class="mb-0 text-danger">{{ agingCount }}</h3>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Filters -->
                <div class="d-flex align-items-center flex-wrap gap-3 justify-content-between mb-4">
                    <div class="d-flex align-items-center gap-3 flex-wrap">
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
                        <div class="dropdown">
                            <a href="javascript:void(0);" class="dropdown-toggle btn btn-white d-inline-flex align-items-center"
                                data-bs-toggle="dropdown">
                                <i class="icon-car text-dark me-2"></i>{{ conditionFilter === 'All' ? 'All Condition' : conditionFilter }}
                            </a>
                            <ul class="dropdown-menu p-3">
                                <li v-for="c in conditionOptions" :key="c">
                                    <a href="javascript:void(0);" class="dropdown-item rounded" @click="conditionFilter = c">{{ c }}</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div class="search-input">
                        <span class="btn-searchset"><i class="icon-search fs-14"></i></span>
                        <input type="text" class="form-control search-addon" placeholder="Search VIN / model" v-model="searchQuery" />
                    </div>
                </div>

                <!-- Table -->
                <div class="table-responsive table-nowrap">
                    <a-table class="table mb-0 datatable" :columns="visibleColumns" :data-source="paginatedData"
                        :pagination="false">
                        <template #bodyCell="{ column, record }">
                            <template v-if="column.key === 'Vehicle'">
                                <div class="d-flex align-items-center">
                                    <span class="avatar avatar-sm rounded bg-light flex-shrink-0 me-2">
                                        <i class="icon-car fs-13"></i>
                                    </span>
                                    <div>
                                        <h6 class="fs-14 fw-semibold mb-0">{{ record.brand }} {{ record.model }}</h6>
                                        <span class="fs-13">{{ record.variant }} · {{ record.year }}</span>
                                    </div>
                                </div>
                            </template>
                            <template v-if="column.key === 'VIN'">
                                <span class="fs-13">{{ record.vin }}</span>
                            </template>
                            <template v-if="column.key === 'Condition'">
                                <span class="badge" :class="record.condition === 'New' ? 'badge-soft-success text-dark' : 'badge-soft-warning text-dark'">
                                    {{ record.condition }}
                                </span>
                            </template>
                            <template v-if="column.key === 'Status'">
                                <span class="badge" :class="statusClass(record.status)">{{ record.status }}</span>
                            </template>
                            <template v-if="column.key === 'Cost'">{{ money(record.cost) }}</template>
                            <template v-if="column.key === 'Price'">{{ money(record.price) }}</template>
                            <template v-if="column.key === 'Age'">
                                <span :class="record.ageDays >= 45 ? 'text-danger fw-semibold' : ''">{{ record.ageDays }} days</span>
                            </template>
                            <template v-if="column.key === 'Action'">
                                <div class="text-end">
                                    <div class="dropstart">
                                        <button class="btn btn-icon btn-white" type="button" data-bs-toggle="dropdown"
                                            aria-label="Actions">
                                            <i class="icon-ellipsis-vertical"></i>
                                        </button>
                                        <ul class="dropdown-menu p-3">
                                            <li><a href="javascript:void(0);" class="dropdown-item rounded d-flex align-items-center" @click="openDetail('Vehicle', record)"><i class="icon-eye me-2"></i>View Vehicle</a></li>
                                            <li><a href="javascript:void(0);" class="dropdown-item rounded d-flex align-items-center" @click="openEdit(record)"><i class="icon-pencil-line me-2"></i>Edit</a></li>
                                            <li><a href="javascript:void(0);" class="dropdown-item rounded d-flex align-items-center" data-bs-toggle="modal" data-bs-target="#transfer_modal" @click="openTransfer(record)"><i class="icon-arrow-left-right me-2"></i>Transfer Location</a></li>
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

    <!-- Add vehicle -->
    <div class="offcanvas offcanvas-end" tabindex="-1" id="add_vehicle">
        <div class="offcanvas-header d-flex align-items-center justify-content-between">
            <h4 class="offcanvas-title mb-0">{{ editingId ? 'Edit Vehicle' : 'Add Vehicle' }}</h4>
            <button type="button" class="btn-close btn-close-modal" data-bs-dismiss="offcanvas" aria-label="Close">
                <i class="icon-x"></i>
            </button>
        </div>
        <form class="d-flex flex-column overflow-y-auto h-100" @submit.prevent="addVehicle">
            <div class="offcanvas-body pb-0">
                <div class="row gx-3">
                    <div class="col-lg-6 col-md-12">
                        <div class="mb-3">
                            <label class="form-label">VIN / Chassis No.<span class="text-danger"> *</span></label>
                            <input type="text" class="form-control" v-model="form.vin" required>
                        </div>
                    </div>
                    <div class="col-lg-6 col-md-12">
                        <div class="mb-3">
                            <label class="form-label">License Plate</label>
                            <input type="text" class="form-control" v-model="form.plate">
                        </div>
                    </div>
                    <div class="col-lg-6 col-md-12">
                        <div class="mb-3">
                            <label class="form-label">Brand<span class="text-danger"> *</span></label>
                            <input type="text" class="form-control" v-model="form.brand" required>
                        </div>
                    </div>
                    <div class="col-lg-6 col-md-12">
                        <div class="mb-3">
                            <label class="form-label">Model<span class="text-danger"> *</span></label>
                            <input type="text" class="form-control" v-model="form.model" required>
                        </div>
                    </div>
                    <div class="col-lg-6 col-md-12">
                        <div class="mb-3">
                            <label class="form-label">Variant / Trim</label>
                            <input type="text" class="form-control" v-model="form.variant">
                        </div>
                    </div>
                    <div class="col-lg-6 col-md-12">
                        <div class="mb-3">
                            <label class="form-label">Year</label>
                            <input type="number" class="form-control" v-model="form.year">
                        </div>
                    </div>
                    <div class="col-lg-6 col-md-12">
                        <div class="mb-3">
                            <label class="form-label">Condition</label>
                            <vue-select :options="['New', 'Used']" v-model="form.condition" placeholder="Select" />
                        </div>
                    </div>
                    <div class="col-lg-6 col-md-12">
                        <div class="mb-3">
                            <label class="form-label">Status</label>
                            <vue-select :options="vehicleStatuses" v-model="form.status" placeholder="Select" />
                        </div>
                    </div>
                    <div class="col-lg-6 col-md-12">
                        <div class="mb-3">
                            <label class="form-label">Location</label>
                            <input type="text" class="form-control" v-model="form.location">
                        </div>
                    </div>
                    <div class="col-lg-6 col-md-12">
                        <div class="mb-3">
                            <label class="form-label">Color</label>
                            <input type="text" class="form-control" v-model="form.color">
                        </div>
                    </div>
                    <div class="col-lg-6 col-md-12">
                        <div class="mb-3">
                            <label class="form-label">Purchase Cost</label>
                            <input type="number" class="form-control" v-model="form.cost">
                        </div>
                    </div>
                    <div class="col-lg-6 col-md-12">
                        <div class="mb-3">
                            <label class="form-label">Selling Price</label>
                            <input type="number" class="form-control" v-model="form.price">
                        </div>
                    </div>
                </div>
            </div>
            <div class="offcanvas-footer d-flex align-items-center gap-2 pt-2">
                <button type="button" class="btn btn-dark d-flex align-items-center w-100" data-bs-dismiss="offcanvas">
                    <i class="icon-x me-1"></i>Cancel
                </button>
                <button type="submit" class="btn btn-primary d-flex align-items-center w-100">
                    <i class="icon-circle-check me-1"></i>{{ editingId ? 'Save Changes' : 'Save' }}
                </button>
            </div>
        </form>
    </div>

    <!-- Transfer location modal -->
    <div class="modal fade" id="transfer_modal">
        <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title">Transfer Location</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body" v-if="transferItem">
                    <p class="mb-3">{{ transferItem.brand }} {{ transferItem.model }} · {{ transferItem.vin }}</p>
                    <div class="mb-3">
                        <label class="form-label">Destination</label>
                        <vue-select :options="locations" v-model="transferTo" placeholder="Select location" />
                    </div>
                    <div class="mb-0">
                        <label class="form-label">Receiving Person</label>
                        <input type="text" class="form-control" v-model="transferReceiver">
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
import { vehicles, vehicleStatuses, money } from '@/data/crm'
import { hideOffcanvas, showOffcanvas } from '@/utils/offcanvas'
import { openDetail, notify } from '@/utils/ui'
import { exportCsv, exportPdf } from '@/utils/export'

export default {
    components: { BasePagination },
    data() {
        return {
            vehicles,
            vehicleStatuses,
            money,
            openDetail,
            searchQuery: "",
            statusFilter: 'All',
            conditionFilter: 'All',
            statusOptions: ['All', ...vehicleStatuses],
            conditionOptions: ['All', 'New', 'Used'],
            currentPage: 1,
            pageSize: 10,
            pageSizeOptions: [5, 10, 25, 50, 100],
            form: this.emptyForm(),
            editingId: null,
            transferItem: null,
            transferTo: null,
            transferReceiver: '',
            locations: ['Showroom A', 'Showroom B', 'Warehouse', 'Workshop', 'In Transit'],
            columns: [
                { title: "Vehicle", dataIndex: "model", key: "Vehicle", sorter: false, visible: true },
                { title: "VIN", dataIndex: "vin", key: "VIN", sorter: false, visible: true },
                { title: "Condition", dataIndex: "condition", key: "Condition", sorter: false, visible: true },
                { title: "Status", dataIndex: "status", key: "Status", sorter: false, visible: true },
                { title: "Location", dataIndex: "location", key: "location", sorter: false, visible: true },
                { title: "Cost", dataIndex: "cost", key: "Cost", sorter: false, visible: true },
                { title: "Price", dataIndex: "price", key: "Price", sorter: false, visible: true },
                { title: "Age", dataIndex: "ageDays", key: "Age", sorter: false, visible: true },
                { title: "Action", dataIndex: "Action", key: "Action", sorter: false, visible: true },
            ],
        }
    },
    methods: {
        emptyForm() {
            return {
                vin: '', plate: '', brand: '', model: '', variant: '', year: '',
                condition: null, status: null, location: '', color: '', cost: '', price: '',
            }
        },
        statusCount(status) {
            return this.vehicles.filter(v => v.status === status).length
        },
        statusClass(status) {
            if (['Available'].includes(status)) return 'badge-soft-success text-dark'
            if (['Reserved', 'Sold', 'Delivered'].includes(status)) return 'badge-soft-info text-dark'
            if (['Inspection', 'In Transit'].includes(status)) return 'badge-soft-warning text-dark'
            return 'badge-soft-secondary text-dark'
        },
        openCreate() {
            this.editingId = null
            this.form = this.emptyForm()
        },
        openEdit(record) {
            this.editingId = record.id
            this.form = {
                vin: record.vin, plate: record.plate, brand: record.brand, model: record.model,
                variant: record.variant, year: record.year, condition: record.condition,
                status: record.status, location: record.location, color: record.color,
                cost: record.cost, price: record.price,
            }
            showOffcanvas('add_vehicle')
        },
        openTransfer(record) {
            this.transferItem = record
            this.transferTo = record.location
            this.transferReceiver = ''
        },
        applyTransfer() {
            if (this.transferItem && this.transferTo) {
                this.transferItem.location = this.transferTo
                notify(`Vehicle moved to ${this.transferTo}`)
            }
        },
        exportExcel() {
            exportCsv('vehicle-inventory', this.columns, this.filteredPages)
            notify('Inventory exported as Excel (CSV)')
        },
        exportPdf() {
            exportPdf('Vehicle Inventory', this.columns, this.filteredPages)
            notify('Inventory export opened for printing')
        },
        addVehicle() {
            if (this.editingId) {
                const record = this.vehicles.find(v => v.id === this.editingId)
                if (record) {
                    Object.assign(record, {
                        vin: this.form.vin, plate: this.form.plate, brand: this.form.brand,
                        model: this.form.model, variant: this.form.variant,
                        year: Number(this.form.year) || record.year, color: this.form.color,
                        condition: this.form.condition || record.condition,
                        status: this.form.status || record.status,
                        location: this.form.location || record.location,
                        cost: Number(this.form.cost) || 0, price: Number(this.form.price) || 0,
                    })
                }
                notify('Vehicle updated')
            } else {
                this.vehicles.unshift({
                    id: 'V-' + (5011 + this.vehicles.length),
                    vin: this.form.vin,
                    brand: this.form.brand,
                    model: this.form.model,
                    variant: this.form.variant,
                    year: Number(this.form.year) || new Date().getFullYear(),
                    color: this.form.color,
                    engine: '',
                    transmission: '',
                    fuel: '',
                    condition: this.form.condition || 'New',
                    mileage: 0,
                    status: this.form.status || 'Available',
                    location: this.form.location || 'Showroom A',
                    cost: Number(this.form.cost) || 0,
                    price: Number(this.form.price) || 0,
                    minPrice: Number(this.form.price) || 0,
                    ageDays: 0,
                    plate: this.form.plate,
                })
                notify('Vehicle added')
            }
            this.editingId = null
            this.form = this.emptyForm()
            hideOffcanvas('add_vehicle')
        },
        onPageChange(page) { this.currentPage = page },
        onPageSizeChange(size) { this.pageSize = Number(size); this.currentPage = 1 },
    },
    computed: {
        stockValue() {
            return this.vehicles
                .filter(v => !['Sold', 'Delivered'].includes(v.status))
                .reduce((sum, v) => sum + v.cost, 0)
        },
        agingCount() {
            return this.vehicles.filter(v => v.ageDays >= 45 && !['Sold', 'Delivered'].includes(v.status)).length
        },
        filteredPages() {
            const query = this.searchQuery.toLowerCase()
            return this.vehicles.filter((record) => {
                const matchesQuery =
                    record.vin.toLowerCase().includes(query) ||
                    record.brand.toLowerCase().includes(query) ||
                    record.model.toLowerCase().includes(query) ||
                    record.variant.toLowerCase().includes(query)
                const matchesStatus = this.statusFilter === 'All' || record.status === this.statusFilter
                const matchesCondition = this.conditionFilter === 'All' || record.condition === this.conditionFilter
                return matchesQuery && matchesStatus && matchesCondition
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
