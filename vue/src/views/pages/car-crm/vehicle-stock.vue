<template>
    <div class="page-wrapper">
        <div class="content">
            <layout-header></layout-header>

            <div class="content-wrap">
                <!-- Page header -->
                <div class="d-flex align-items-center flex-wrap gap-3 border-bottom pb-4 mb-4">
                    <div class="flex-grow-1">
                        <h4 class="mb-1">{{ $t('vehicles.title') }}</h4>
                        <p class="text-muted mb-0">{{ $t('vehicles.subtitle') }}</p>
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
                        <a href="#" class="btn btn-primary d-inline-flex align-items-center" data-bs-toggle="offcanvas"
                            data-bs-target="#add_vehicle" @click="openCreate"><i class="icon-plus me-1"></i>{{ $t('vehicles.addVehicle') }}</a>
                    </div>
                </div>

                <!-- Summary -->
                <div class="row g-4 mb-4">
                    <div class="col-xxl-3 col-md-6">
                        <div class="card dash-card mb-0">
                            <div class="card-body">
                                <h6 class="mb-2">{{ $t('vehicles.available') }}</h6>
                                <h3 class="mb-0">{{ statusCount('Available') }}</h3>
                            </div>
                        </div>
                    </div>
                    <div class="col-xxl-3 col-md-6">
                        <div class="card dash-card mb-0">
                            <div class="card-body">
                                <h6 class="mb-2">{{ $t('vehicles.reserved') }}</h6>
                                <h3 class="mb-0">{{ statusCount('Reserved') }}</h3>
                            </div>
                        </div>
                    </div>
                    <div class="col-xxl-3 col-md-6">
                        <div class="card dash-card mb-0">
                            <div class="card-body">
                                <h6 class="mb-2">{{ $t('vehicles.stockValue') }}</h6>
                                <h3 class="mb-0">{{ money(stockValue) }}</h3>
                            </div>
                        </div>
                    </div>
                    <div class="col-xxl-3 col-md-6">
                        <div class="card dash-card mb-0">
                            <div class="card-body">
                                <h6 class="mb-2">{{ $t('vehicles.aging') }}</h6>
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
                                <i class="icon-circle-dot text-dark me-2"></i>{{ statusFilter === 'All' ? $t('vehicles.allStatus') : statusLabel(statusFilter) }}
                            </a>
                            <ul class="dropdown-menu p-3">
                                <li v-for="s in statusOptions" :key="s">
                                    <a href="javascript:void(0);" class="dropdown-item rounded" @click="statusFilter = s">{{ s === 'All' ? $t('common.all') : statusLabel(s) }}</a>
                                </li>
                            </ul>
                        </div>
                        <div class="dropdown">
                            <a href="javascript:void(0);" class="dropdown-toggle btn btn-white d-inline-flex align-items-center"
                                data-bs-toggle="dropdown">
                                <i class="icon-car text-dark me-2"></i>{{ conditionFilter === 'All' ? $t('vehicles.allCondition') : conditionLabel(conditionFilter) }}
                            </a>
                            <ul class="dropdown-menu p-3">
                                <li v-for="c in conditionOptions" :key="c">
                                    <a href="javascript:void(0);" class="dropdown-item rounded" @click="conditionFilter = c">{{ c === 'All' ? $t('common.all') : conditionLabel(c) }}</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div class="search-input">
                        <span class="btn-searchset"><i class="icon-search fs-14"></i></span>
                        <input type="text" class="form-control search-addon" :placeholder="$t('vehicles.searchPlaceholder')" v-model="searchQuery" />
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
                                        <h6 class="fs-14 fw-semibold mb-0">
                                            <a href="#" data-bs-toggle="offcanvas" data-bs-target="#view_details"
                                                @click="selected = record">{{ record.brand }} {{ record.model }}</a>
                                        </h6>
                                        <span class="fs-13">{{ record.variant }} · {{ record.year }}</span>
                                    </div>
                                </div>
                            </template>
                            <template v-if="column.key === 'VIN'">
                                <span class="fs-13">{{ record.vin }}</span>
                            </template>
                            <template v-if="column.key === 'Condition'">
                                <span class="badge" :class="record.condition === 'New' ? 'badge-soft-success text-dark' : 'badge-soft-warning text-dark'">
                                    {{ conditionLabel(record.condition) }}
                                </span>
                            </template>
                            <template v-if="column.key === 'Status'">
                                <span class="badge" :class="statusClass(record.status)">{{ statusLabel(record.status) }}</span>
                            </template>
                            <template v-if="column.key === 'Location'">{{ locationLabel(record.location) }}</template>
                            <template v-if="column.key === 'Cost'">{{ money(record.cost) }}</template>
                            <template v-if="column.key === 'Price'">{{ money(record.price) }}</template>
                            <template v-if="column.key === 'Age'">
                                <span :class="record.ageDays >= 45 ? 'text-danger fw-semibold' : ''">{{ record.ageDays }} {{ $t('vehicles.days') }}</span>
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
                                                <a href="#" class="dropdown-item rounded d-flex align-items-center"
                                                    data-bs-toggle="offcanvas" data-bs-target="#view_details" @click="selected = record">
                                                    <i class="icon-eye me-2"></i>{{ $t('vehicles.viewVehicle') }}
                                                </a>
                                            </li>
                                            <li><a href="javascript:void(0);" class="dropdown-item rounded d-flex align-items-center" @click="openEdit(record)"><i class="icon-pencil-line me-2"></i>{{ $t('vehicles.editVehicle') }}</a></li>
                                            <li><a href="javascript:void(0);" class="dropdown-item rounded d-flex align-items-center" data-bs-toggle="modal" data-bs-target="#transfer_modal" @click="openTransfer(record)"><i class="icon-arrow-left-right me-2"></i>{{ $t('vehicles.transferLocation') }}</a></li>
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
                    <h4 class="mb-1">{{ $t('vehicles.deleteTitle') }}</h4>
                    <p class="mb-4">{{ $t('vehicles.deleteConfirm') }}</p>
                    <div class="d-flex justify-content-center gap-2">
                        <a href="javascript:void(0);" class="btn btn-light w-100" data-bs-dismiss="modal">{{ $t('common.close') }}</a>
                        <a href="javascript:void(0);" class="btn btn-danger w-100" data-bs-dismiss="modal" @click="deleteItem">{{ $t('common.delete') }}</a>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <!-- Add / Edit vehicle -->
    <div class="offcanvas offcanvas-end" tabindex="-1" id="add_vehicle">
        <div class="offcanvas-header d-flex align-items-center justify-content-between">
            <h4 class="offcanvas-title mb-0">{{ editingId ? $t('vehicles.editVehicle') : $t('vehicles.addVehicle') }}</h4>
            <button type="button" class="btn-close btn-close-modal" data-bs-dismiss="offcanvas" aria-label="Close">
                <i class="icon-x"></i>
            </button>
        </div>
        <form class="d-flex flex-column overflow-y-auto h-100" @submit.prevent="saveVehicle">
            <div class="offcanvas-body pb-0">
                <div class="row gx-3">
                    <div class="col-lg-6 col-md-12">
                        <div class="mb-3">
                            <label class="form-label">{{ $t('vehicles.vin') }}<span class="text-danger"> *</span></label>
                            <input type="text" class="form-control" v-model="form.vin" required>
                        </div>
                    </div>
                    <div class="col-lg-6 col-md-12">
                        <div class="mb-3">
                            <label class="form-label">{{ $t('vehicles.plate') }}</label>
                            <input type="text" class="form-control" v-model="form.plate">
                        </div>
                    </div>
                    <div class="col-lg-6 col-md-12">
                        <div class="mb-3">
                            <label class="form-label">{{ $t('vehicles.brand') }}<span class="text-danger"> *</span></label>
                            <input type="text" class="form-control" v-model="form.brand" required>
                        </div>
                    </div>
                    <div class="col-lg-6 col-md-12">
                        <div class="mb-3">
                            <label class="form-label">{{ $t('vehicles.model') }}<span class="text-danger"> *</span></label>
                            <input type="text" class="form-control" v-model="form.model" required>
                        </div>
                    </div>
                    <div class="col-lg-6 col-md-12">
                        <div class="mb-3">
                            <label class="form-label">{{ $t('vehicles.variant') }}</label>
                            <input type="text" class="form-control" v-model="form.variant">
                        </div>
                    </div>
                    <div class="col-lg-6 col-md-12">
                        <div class="mb-3">
                            <label class="form-label">{{ $t('vehicles.year') }}</label>
                            <input type="number" class="form-control" v-model="form.year">
                        </div>
                    </div>
                    <div class="col-lg-6 col-md-12">
                        <div class="mb-3">
                            <label class="form-label">{{ $t('vehicles.condition') }}</label>
                            <vue-select :options="['New', 'Used']" v-model="form.condition" :placeholder="$t('common.select')" />
                        </div>
                    </div>
                    <div class="col-lg-6 col-md-12">
                        <div class="mb-3">
                            <label class="form-label">{{ $t('vehicles.status') }}</label>
                            <vue-select :options="vehicleStatuses" v-model="form.status" :placeholder="$t('common.select')" />
                        </div>
                    </div>
                    <div class="col-lg-6 col-md-12">
                        <div class="mb-3">
                            <label class="form-label">{{ $t('vehicles.location') }}</label>
                            <input type="text" class="form-control" v-model="form.location">
                        </div>
                    </div>
                    <div class="col-lg-6 col-md-12">
                        <div class="mb-3">
                            <label class="form-label">{{ $t('vehicles.color') }}</label>
                            <input type="text" class="form-control" v-model="form.color">
                        </div>
                    </div>
                    <div class="col-lg-6 col-md-12">
                        <div class="mb-3">
                            <label class="form-label">{{ $t('vehicles.purchaseCost') }}</label>
                            <input type="number" class="form-control" v-model="form.cost">
                        </div>
                    </div>
                    <div class="col-lg-6 col-md-12">
                        <div class="mb-3">
                            <label class="form-label">{{ $t('vehicles.sellingPrice') }}</label>
                            <input type="number" class="form-control" v-model="form.price">
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

    <!-- Vehicle details -->
    <div class="offcanvas offcanvas-end" tabindex="-1" id="view_details">
        <div class="offcanvas-header d-flex align-items-center justify-content-between">
            <h4 class="offcanvas-title mb-0">{{ $t('vehicles.overview') }}</h4>
            <button type="button" class="btn-close btn-close-modal" data-bs-dismiss="offcanvas" aria-label="Close">
                <i class="icon-x"></i>
            </button>
        </div>
        <div class="offcanvas-body p-0" v-if="selected">
            <div class="border-bottom p-4">
                <div class="mb-4 d-flex align-items-center justify-content-between gap-3">
                    <div class="d-flex align-items-center">
                        <span class="avatar avatar-xxl border me-3 flex-shrink-0 bg-light">
                            <i class="icon-car fs-24"></i>
                        </span>
                        <div>
                            <h6 class="fs-14 fw-semibold mb-0">{{ selected.brand }} {{ selected.model }} {{ selected.year }}</h6>
                            <p class="fs-13 mb-0">{{ selected.id }} · {{ conditionLabel(selected.condition) }}</p>
                        </div>
                    </div>
                    <span class="badge" :class="statusClass(selected.status)">
                        {{ statusLabel(selected.status) }}
                    </span>
                </div>
                <div>
                    <div class="d-flex align-items-center justify-content-between mb-3">
                        <span><i class="icon-hash text-gray-9 me-1"></i>{{ $t('vehicles.vin') }}</span>
                        <span class="text-gray-9">{{ selected.vin }}</span>
                    </div>
                    <div class="d-flex align-items-center justify-content-between mb-3">
                        <span><i class="icon-car text-gray-9 me-1"></i>{{ $t('vehicles.plate') }}</span>
                        <span class="text-gray-9">{{ selected.plate }}</span>
                    </div>
                    <div class="d-flex align-items-center justify-content-between mb-3">
                        <span><i class="icon-tag text-gray-9 me-1"></i>{{ $t('vehicles.variant') }}</span>
                        <span class="text-gray-9">{{ selected.variant }}</span>
                    </div>
                    <div class="d-flex align-items-center justify-content-between mb-3">
                        <span><i class="icon-palette text-gray-9 me-1"></i>{{ $t('vehicles.color') }}</span>
                        <span class="text-gray-9">{{ selected.color }}</span>
                    </div>
                    <div class="d-flex align-items-center justify-content-between mb-3">
                        <span><i class="icon-map-pin text-gray-9 me-1"></i>{{ $t('vehicles.location') }}</span>
                        <span class="text-gray-9">{{ locationLabel(selected.location) }}</span>
                    </div>
                    <div class="d-flex align-items-center justify-content-between mb-3">
                        <span><i class="icon-gauge text-gray-9 me-1"></i>{{ $t('vehicles.mileage') }}</span>
                        <span class="text-gray-9">{{ selected.mileage }}</span>
                    </div>
                    <div class="d-flex align-items-center justify-content-between mb-3">
                        <span><i class="icon-settings text-gray-9 me-1"></i>{{ $t('vehicles.engine') }}</span>
                        <span class="text-gray-9">{{ selected.engine }}</span>
                    </div>
                    <div class="d-flex align-items-center justify-content-between mb-3">
                        <span><i class="icon-settings text-gray-9 me-1"></i>{{ $t('vehicles.transmission') }}</span>
                        <span class="text-gray-9">{{ selected.transmission }}</span>
                    </div>
                    <div class="d-flex align-items-center justify-content-between">
                        <span><i class="icon-fuel text-gray-9 me-1"></i>{{ $t('vehicles.fuel') }}</span>
                        <span class="text-gray-9">{{ selected.fuel }}</span>
                    </div>
                </div>
            </div>
            <div class="p-4">
                <div class="row g-3">
                    <div class="col-6">
                        <div class="border rounded p-3 text-center">
                            <p class="mb-1 fs-13">{{ $t('vehicles.purchaseCost') }}</p>
                            <h5 class="mb-0">{{ money(selected.cost) }}</h5>
                        </div>
                    </div>
                    <div class="col-6">
                        <div class="border rounded p-3 text-center">
                            <p class="mb-1 fs-13">{{ $t('vehicles.sellingPrice') }}</p>
                            <h5 class="mb-0 text-success">{{ money(selected.price) }}</h5>
                        </div>
                    </div>
                    <div class="col-6">
                        <div class="border rounded p-3 text-center">
                            <p class="mb-1 fs-13">{{ $t('vehicles.minPrice') }}</p>
                            <h5 class="mb-0">{{ money(selected.minPrice) }}</h5>
                        </div>
                    </div>
                    <div class="col-6">
                        <div class="border rounded p-3 text-center">
                            <p class="mb-1 fs-13">{{ $t('vehicles.age') }}</p>
                            <h5 class="mb-0" :class="selected.ageDays >= 45 ? 'text-danger' : ''">{{ selected.ageDays }} {{ $t('vehicles.days') }}</h5>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <!-- Transfer location modal -->
    <div class="modal fade" id="transfer_modal">
        <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title">{{ $t('vehicles.transferLocation') }}</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body" v-if="transferItem">
                    <p class="mb-3">{{ transferItem.brand }} {{ transferItem.model }} · {{ transferItem.vin }}</p>
                    <div class="mb-3">
                        <label class="form-label">{{ $t('vehicles.destination') }}</label>
                        <vue-select :options="locations" v-model="transferTo" :placeholder="$t('vehicles.selectLocation')" />
                    </div>
                    <div class="mb-0">
                        <label class="form-label">{{ $t('vehicles.receivingPerson') }}</label>
                        <input type="text" class="form-control" v-model="transferReceiver">
                    </div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-light" data-bs-dismiss="modal">{{ $t('common.cancel') }}</button>
                    <button type="button" class="btn btn-primary" data-bs-dismiss="modal" @click="applyTransfer">{{ $t('vehicles.transfer') }}</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import BasePagination from '@/components/BasePagination.vue';
import { vehicles, vehicleStatuses, money } from '@/data/crm'
import { hideOffcanvas, showOffcanvas } from '@/utils/offcanvas'
import { notify } from '@/utils/ui'
import { exportCsv, exportPdf } from '@/utils/export'

export default {
    components: { BasePagination },
    data() {
        return {
            vehicles,
            vehicleStatuses,
            money,
            selected: null,
            searchQuery: "",
            statusFilter: 'All',
            conditionFilter: 'All',
            statusOptions: ['All', ...vehicleStatuses],
            conditionOptions: ['All', 'New', 'Used'],
            currentPage: 1,
            pageSize: 10,
            pageSizeOptions: [5, 10, 25, 50, 100],
            itemToDelete: null,
            editingId: null,
            form: this.emptyForm(),
            transferItem: null,
            transferTo: null,
            transferReceiver: '',
            locations: ['Showroom A', 'Showroom B', 'Warehouse', 'Workshop', 'In Transit'],
        }
    },
    methods: {
        emptyForm() {
            return {
                vin: '', plate: '', brand: '', model: '', variant: '', year: '',
                condition: null, status: null, location: '', color: '', cost: '', price: '',
            }
        },
        conditionLabel(c) {
            if (c === 'New') return this.$t('vehicles.conditionNew')
            if (c === 'Used') return this.$t('vehicles.conditionUsed')
            return c
        },
        statusLabel(s) {
            const map = {
                Ordered: 'statusOrdered',
                Available: 'statusAvailable',
                Reserved: 'statusReserved',
                Sold: 'statusSold',
                Delivered: 'statusDelivered',
                Inspection: 'statusInspection',
                'In Transit': 'statusInTransit',
            }
            return map[s] ? this.$t('vehicles.' + map[s]) : s
        },
        locationLabel(l) {
            const map = {
                'Showroom A': 'locShowroomA',
                'Showroom B': 'locShowroomB',
                Warehouse: 'locWarehouse',
                Workshop: 'locWorkshop',
                'In Transit': 'locInTransit',
            }
            return map[l] ? this.$t('vehicles.' + map[l]) : l
        },
        statusCount(status) {
            return this.vehicles.filter(v => v.status === status).length
        },
        statusClass(status) {
            if (['Available'].includes(status)) return 'badge-soft-success text-dark'
            if (['Reserved', 'Sold', 'Delivered'].includes(status)) return 'badge-soft-info text-dark'
            if (['Ordered', 'Inspection', 'In Transit'].includes(status)) return 'badge-soft-warning text-dark'
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
        saveVehicle() {
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
        exportExcel() {
            exportCsv('vehicle-inventory', this.columns, this.filteredPages)
            notify('Inventory exported as Excel (CSV)')
        },
        exportPdf() {
            exportPdf('Vehicle Inventory', this.columns, this.filteredPages)
            notify('Inventory export opened for printing')
        },
        onPageChange(page) { this.currentPage = page },
        onPageSizeChange(size) { this.pageSize = Number(size); this.currentPage = 1 },
        setDelete(record) { this.itemToDelete = record },
        deleteItem() {
            if (this.itemToDelete) {
                this.vehicles = this.vehicles.filter(item => item !== this.itemToDelete)
                this.itemToDelete = null
            }
        },
    },
    computed: {
        columns() {
            return [
                { title: this.$t('vehicles.vehicle'), dataIndex: "model", key: "Vehicle", sorter: false, visible: true },
                { title: this.$t('vehicles.vin'), dataIndex: "vin", key: "VIN", sorter: false, visible: true },
                { title: this.$t('vehicles.condition'), dataIndex: "condition", key: "Condition", sorter: false, visible: true },
                { title: this.$t('vehicles.status'), dataIndex: "status", key: "Status", sorter: false, visible: true },
                { title: this.$t('vehicles.location'), dataIndex: "location", key: "Location", sorter: false, visible: true },
                { title: this.$t('vehicles.cost'), dataIndex: "cost", key: "Cost", sorter: false, visible: true },
                { title: this.$t('vehicles.price'), dataIndex: "price", key: "Price", sorter: false, visible: true },
                { title: this.$t('vehicles.age'), dataIndex: "ageDays", key: "Age", sorter: false, visible: true },
                { title: this.$t('common.action'), dataIndex: "Action", key: "Action", sorter: false, visible: true },
            ]
        },
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