<template>
    <div class="page-wrapper">
        <div class="content">
            <layout-header></layout-header>

            <div class="content-wrap">
                <!-- Page header -->
                <div class="d-flex align-items-center flex-wrap gap-3 border-bottom pb-4 mb-4">
                    <div class="flex-grow-1">
                        <h4 class="mb-1">{{ $t('customers.title') }}</h4>
                        <p class="text-muted mb-0">{{ $t('customers.subtitle') }}</p>
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
                                <i class="icon-user text-dark me-2"></i>{{ typeFilter === 'All' ? $t('customers.allTypes') : typeLabel(typeFilter) }}
                            </a>
                            <ul class="dropdown-menu p-3">
                                <li v-for="t in typeOptions" :key="t">
                                    <a href="javascript:void(0);" class="dropdown-item rounded" @click="typeFilter = t">{{ t === 'All' ? $t('common.all') : typeLabel(t) }}</a>
                                </li>
                            </ul>
                        </div>
                        <div class="dropdown">
                            <a href="javascript:void(0);" class="dropdown-toggle btn btn-white d-inline-flex align-items-center"
                                data-bs-toggle="dropdown">
                                <i class="icon-megaphone text-dark me-2"></i>{{ sourceFilter === 'All' ? $t('customers.allSources') : sourceLabel(sourceFilter) }}
                            </a>
                            <ul class="dropdown-menu p-3">
                                <li v-for="s in sourceOptions" :key="s">
                                    <a href="javascript:void(0);" class="dropdown-item rounded" @click="sourceFilter = s">{{ s === 'All' ? $t('common.all') : sourceLabel(s) }}</a>
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
                            data-bs-target="#add_customer" @click="openCreate"><i class="icon-plus me-1"></i>{{ $t('customers.newCustomer') }}</a>
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
                                        <h6 class="fs-14 fw-semibold mb-0">
                                            <a href="#" data-bs-toggle="offcanvas" data-bs-target="#view_details"
                                                @click="selected = record">{{ record.name }}</a>
                                        </h6>
                                        <span class="fs-13">{{ record.email }}</span>
                                    </div>
                                </div>
                            </template>
                            <template v-if="column.key === 'Type'">
                                <span class="badge" :class="record.type === 'Company' ? 'badge-soft-purple text-dark' : 'badge-soft-info text-dark'">
                                    {{ typeLabel(record.type) }}
                                </span>
                            </template>
                            <template v-if="column.key === 'Outstanding'">
                                <span :class="record.outstanding > 0 ? 'text-danger fw-semibold' : 'text-success fw-semibold'">
                                    {{ money(record.outstanding) }}
                                </span>
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
                                            <li>
                                                <a href="#" class="dropdown-item rounded d-flex align-items-center"
                                                    data-bs-toggle="offcanvas" data-bs-target="#view_details" @click="selected = record">
                                                    <i class="icon-eye me-2"></i>{{ $t('customers.viewDetails') }}
                                                </a>
                                            </li>
                                            <li><a href="javascript:void(0);" class="dropdown-item rounded d-flex align-items-center" @click="openEdit(record)"><i class="icon-pencil-line me-2"></i>{{ $t('customers.editCustomer') }}</a></li>
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
                    <h4 class="mb-1">{{ $t('customers.deleteTitle') }}</h4>
                    <p class="mb-4">{{ $t('customers.deleteConfirm') }}</p>
                    <div class="d-flex justify-content-center gap-2">
                        <a href="javascript:void(0);" class="btn btn-light w-100" data-bs-dismiss="modal">{{ $t('common.close') }}</a>
                        <a href="javascript:void(0);" class="btn btn-danger w-100" data-bs-dismiss="modal" @click="deleteItem">{{ $t('common.delete') }}</a>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <!-- Add / Edit customer -->
    <div class="offcanvas offcanvas-end" tabindex="-1" id="add_customer">
        <div class="offcanvas-header d-flex align-items-center justify-content-between">
            <h4 class="offcanvas-title mb-0">{{ editingId ? $t('customers.editCustomer') : $t('customers.newCustomer') }}</h4>
            <button type="button" class="btn-close btn-close-modal" data-bs-dismiss="offcanvas" aria-label="Close">
                <i class="icon-x"></i>
            </button>
        </div>
        <form class="d-flex flex-column overflow-y-auto h-100" @submit.prevent="saveCustomer">
            <div class="offcanvas-body pb-0">
                <div class="row gx-3">
                    <div class="col-md-12">
                        <div class="mb-3">
                            <label class="form-label">{{ $t('customers.customerName') }}<span class="text-danger"> *</span></label>
                            <input type="text" class="form-control" v-model="form.name" required>
                        </div>
                    </div>
                    <div class="col-lg-6 col-md-12">
                        <div class="mb-3">
                            <label class="form-label">{{ $t('customers.phone') }}</label>
                            <input type="text" class="form-control" v-model="form.phone">
                        </div>
                    </div>
                    <div class="col-lg-6 col-md-12">
                        <div class="mb-3">
                            <label class="form-label">{{ $t('customers.telegram') }}</label>
                            <input type="text" class="form-control" v-model="form.telegram">
                        </div>
                    </div>
                    <div class="col-md-12">
                        <div class="mb-3">
                            <label class="form-label">{{ $t('customers.email') }}</label>
                            <input type="email" class="form-control" v-model="form.email">
                        </div>
                    </div>
                    <div class="col-lg-6 col-md-12">
                        <div class="mb-3">
                            <label class="form-label">{{ $t('customers.customerType') }}</label>
                            <vue-select :options="['Individual', 'Company']" v-model="form.type" :placeholder="$t('common.select')" />
                        </div>
                    </div>
                    <div class="col-lg-6 col-md-12">
                        <div class="mb-3">
                            <label class="form-label">{{ $t('leads.leadSource') }}</label>
                            <vue-select :options="leadSources" v-model="form.source" :placeholder="$t('common.select')" />
                        </div>
                    </div>
                    <div class="col-md-12">
                        <div class="mb-3">
                            <label class="form-label">{{ $t('customers.campaign') }}</label>
                            <input type="text" class="form-control" v-model="form.campaign">
                        </div>
                    </div>
                    <div class="col-md-12">
                        <div class="mb-3">
                            <label class="form-label">{{ $t('customers.address') }}</label>
                            <input type="text" class="form-control" v-model="form.address">
                        </div>
                    </div>
                    <div class="col-lg-6 col-md-12">
                        <div class="mb-3">
                            <label class="form-label">{{ $t('common.owner') }}</label>
                            <input type="text" class="form-control" v-model="form.owner">
                        </div>
                    </div>
                    <div class="col-lg-6 col-md-12">
                        <div class="mb-3">
                            <label class="form-label">{{ $t('common.status') }}</label>
                            <vue-select :options="['Active', 'Inactive']" v-model="form.status" :placeholder="$t('common.select')" />
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

    <!-- Customer details -->
    <div class="offcanvas offcanvas-end" tabindex="-1" id="view_details">
        <div class="offcanvas-header d-flex align-items-center justify-content-between">
            <h4 class="offcanvas-title mb-0">{{ $t('customers.overview') }}</h4>
            <button type="button" class="btn-close btn-close-modal" data-bs-dismiss="offcanvas" aria-label="Close">
                <i class="icon-x"></i>
            </button>
        </div>
        <div class="offcanvas-body p-0" v-if="selected">
            <div class="border-bottom p-4">
                <div class="mb-4 d-flex align-items-center justify-content-between gap-3">
                    <div class="d-flex align-items-center">
                        <span class="avatar avatar-xxl border me-3 flex-shrink-0 bg-light">
                            <i class="icon-user fs-24"></i>
                        </span>
                        <div>
                            <h6 class="fs-14 fw-semibold mb-0">{{ selected.name }}</h6>
                            <p class="fs-13 mb-0">{{ selected.id }} · {{ selected.type }}</p>
                        </div>
                    </div>
                    <span class="badge" :class="selected.status === 'Active' ? 'badge-soft-success' : 'badge-soft-danger'">
                        {{ statusLabel(selected.status) }}
                    </span>
                </div>
                <div>
                    <div class="d-flex align-items-center justify-content-between mb-3">
                        <span><i class="icon-phone text-gray-9 me-1"></i>{{ $t('customers.phone') }}</span>
                        <span class="text-gray-9">{{ selected.phone }}</span>
                    </div>
                    <div class="d-flex align-items-center justify-content-between mb-3">
                        <span><i class="icon-send text-gray-9 me-1"></i>{{ $t('customers.telegram') }}</span>
                        <span class="text-gray-9">{{ selected.telegram }}</span>
                    </div>
                    <div class="d-flex align-items-center justify-content-between mb-3">
                        <span><i class="icon-map-pin text-gray-9 me-1"></i>{{ $t('customers.address') }}</span>
                        <span class="text-gray-9 text-end">{{ selected.address }}</span>
                    </div>
                    <div class="d-flex align-items-center justify-content-between mb-3">
                        <span><i class="icon-megaphone text-gray-9 me-1"></i>{{ $t('leads.leadSource') }}</span>
                        <span class="text-gray-9">{{ selected.source }} <template v-if="selected.campaign">· {{ selected.campaign }}</template></span>
                    </div>
                    <div class="d-flex align-items-center justify-content-between">
                        <span><i class="icon-user text-gray-9 me-1"></i>{{ $t('common.owner') }}</span>
                        <span class="text-gray-9">{{ selected.owner }}</span>
                    </div>
                </div>
            </div>
            <div class="p-4">
                <div class="row g-3 mb-4">
                    <div class="col-6">
                        <div class="border rounded p-3 text-center">
                            <p class="mb-1 fs-13">{{ $t('customers.vehicles') }}</p>
                            <h5 class="mb-0">{{ selected.vehicles }}</h5>
                        </div>
                    </div>
                    <div class="col-6">
                        <div class="border rounded p-3 text-center">
                            <p class="mb-1 fs-13">{{ $t('customers.outstanding') }}</p>
                            <h5 class="mb-0 text-danger">{{ money(selected.outstanding) }}</h5>
                        </div>
                    </div>
                </div>

                <h5 class="mb-3">{{ $t('customers.purchasedVehicles') }}</h5>
                <div class="border p-3 rounded mb-3" v-for="v in selectedVehicles" :key="v.id">
                    <div class="d-flex align-items-center justify-content-between border-bottom pb-2 mb-2">
                        <h6 class="text-info fw-semibold mb-0">{{ v.brand }} {{ v.model }} {{ v.year }}</h6>
                        <span class="badge badge-soft-success text-dark">{{ v.status }}</span>
                    </div>
                    <div class="d-flex align-items-center justify-content-between">
                        <span class="fs-13">VIN: {{ v.vin }}</span>
                        <span class="fw-medium">{{ money(v.price) }}</span>
                    </div>
                </div>
                <p v-if="!selectedVehicles.length" class="text-muted fs-13">{{ $t('customers.noVehicles') }}</p>
            </div>
        </div>
    </div>
</template>

<script>
import BasePagination from '@/components/BasePagination.vue';
import { customers, vehicles, leadSources, money } from '@/data/crm'
import { showOffcanvas, hideOffcanvas } from '@/utils/offcanvas'
import { notify } from '@/utils/ui'
import { exportCsv, exportPdf } from '@/utils/export'

export default {
    components: { BasePagination },
    data() {
        return {
            customers,
            vehicles,
            money,
            leadSources,
            selected: null,
            searchQuery: "",
            typeFilter: 'All',
            sourceFilter: 'All',
            typeOptions: ['All', 'Individual', 'Company'],
            sourceOptions: ['All', ...leadSources],
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
                name: '', phone: '', telegram: '', email: '', type: null,
                source: null, campaign: '', address: '', owner: '', status: null,
            }
        },
        typeLabel(t) {
            if (t === 'Company') return this.$t('customers.typeCompany')
            if (t === 'Individual') return this.$t('customers.typeIndividual')
            return t
        },
        statusLabel(s) {
            if (s === 'Active') return this.$t('customers.statusActive')
            if (s === 'Inactive') return this.$t('customers.statusInactive')
            return s
        },
        sourceLabel(s) {
            const map = {
                Facebook: 'srcFacebook',
                TikTok: 'srcTiktok',
                Website: 'srcWebsite',
                'Walk-in': 'srcWalkin',
                'Phone Call': 'srcPhoneCall',
                Referral: 'srcReferral',
                'Direct Visit': 'srcDirectVisit',
            }
            return map[s] ? this.$t('customers.' + map[s]) : s
        },
        openCreate() {
            this.editingId = null
            this.form = this.emptyForm()
        },
        openEdit(record) {
            this.editingId = record.id
            this.form = {
                name: record.name,
                phone: record.phone,
                telegram: record.telegram,
                email: record.email,
                type: record.type,
                source: record.source,
                campaign: record.campaign,
                address: record.address,
                owner: record.owner,
                status: record.status,
            }
            showOffcanvas('add_customer')
        },
        saveCustomer() {
            if (this.editingId) {
                const record = this.customers.find(c => c.id === this.editingId)
                if (record) Object.assign(record, { ...this.form })
                notify('Customer updated')
            } else {
                this.customers.unshift({
                    id: 'C-' + (1011 + this.customers.length),
                    ...this.form,
                    type: this.form.type || 'Individual',
                    source: this.form.source || 'Walk-in',
                    status: this.form.status || 'Active',
                    vehicles: 0,
                    outstanding: 0,
                    lastContact: new Date().toISOString().slice(0, 10),
                })
                notify('Customer created')
            }
            this.editingId = null
            this.form = this.emptyForm()
            hideOffcanvas('add_customer')
        },
        exportExcel() {
            exportCsv('customers', this.columns, this.filteredPages)
            notify('Customers exported as Excel (CSV)')
        },
        exportPdf() {
            exportPdf('Customers', this.columns, this.filteredPages)
            notify('Customers export opened for printing')
        },
        onPageChange(page) { this.currentPage = page },
        onPageSizeChange(size) { this.pageSize = Number(size); this.currentPage = 1 },
        setDelete(record) { this.itemToDelete = record },
        deleteItem() {
            if (this.itemToDelete) {
                this.customers = this.customers.filter(item => item !== this.itemToDelete)
                this.itemToDelete = null
            }
        },
    },
    computed: {
        columns() {
            return [
                { title: this.$t('common.customer'), dataIndex: "name", key: "Customer", sorter: false, visible: true },
                { title: this.$t('customers.phone'), dataIndex: "phone", key: "phone", sorter: false, visible: true },
                { title: this.$t('common.type'), dataIndex: "type", key: "Type", sorter: false, visible: true },
                { title: this.$t('common.source'), dataIndex: "source", key: "source", sorter: false, visible: true },
                { title: this.$t('common.owner'), dataIndex: "owner", key: "owner", sorter: false, visible: true },
                { title: this.$t('customers.vehicles'), dataIndex: "vehicles", key: "vehicles", sorter: false, visible: true },
                { title: this.$t('customers.outstanding'), dataIndex: "outstanding", key: "Outstanding", sorter: false, visible: true },
                { title: this.$t('customers.lastContact'), dataIndex: "lastContact", key: "lastContact", sorter: false, visible: true },
                { title: this.$t('common.status'), dataIndex: "status", key: "Status", sorter: false, visible: true },
                { title: this.$t('common.action'), dataIndex: "Action", key: "Action", sorter: false, visible: true },
            ]
        },
        selectedVehicles() {
            if (!this.selected) return []
            return this.vehicles.filter(v => this.selected.vehicles > 0 && v.status !== 'Available').slice(0, 2)
        },
        filteredPages() {
            const query = this.searchQuery.toLowerCase()
            return this.customers.filter((record) => {
                const matchesQuery =
                    record.name.toLowerCase().includes(query) ||
                    record.phone.toLowerCase().includes(query) ||
                    record.email.toLowerCase().includes(query) ||
                    record.id.toLowerCase().includes(query)
                const matchesType = this.typeFilter === 'All' || record.type === this.typeFilter
                const matchesSource = this.sourceFilter === 'All' || record.source === this.sourceFilter
                return matchesQuery && matchesType && matchesSource
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
