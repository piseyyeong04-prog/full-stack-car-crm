<template>
    <div class="page-wrapper">
        <div class="content">
            <layout-header></layout-header>

            <div class="content-wrap">
                <div class="d-flex align-items-center flex-wrap gap-3 border-bottom pb-4 mb-4">
                    <div class="flex-grow-1">
                        <h4 class="mb-1">Spare Parts &amp; Accessories</h4>
                        <p class="text-muted mb-0">Part numbers, compatibility, stock levels and workshop pricing.</p>
                    </div>
                    <a href="#" class="btn btn-primary d-inline-flex align-items-center" data-bs-toggle="offcanvas"
                        data-bs-target="#add_part" @click="openCreate"><i class="icon-plus me-1"></i>Add Part</a>
                </div>

                <div class="row g-4 mb-4">
                    <div class="col-xxl-3 col-md-6">
                        <div class="card dash-card mb-0">
                            <div class="card-body">
                                <h6 class="mb-2">Part Numbers</h6>
                                <h3 class="mb-0">{{ parts.length }}</h3>
                            </div>
                        </div>
                    </div>
                    <div class="col-xxl-3 col-md-6">
                        <div class="card dash-card mb-0">
                            <div class="card-body">
                                <h6 class="mb-2">Low Stock</h6>
                                <h3 class="mb-0 text-warning">{{ lowStockCount }}</h3>
                            </div>
                        </div>
                    </div>
                    <div class="col-xxl-3 col-md-6">
                        <div class="card dash-card mb-0">
                            <div class="card-body">
                                <h6 class="mb-2">Out of Stock</h6>
                                <h3 class="mb-0 text-danger">{{ outStockCount }}</h3>
                            </div>
                        </div>
                    </div>
                    <div class="col-xxl-3 col-md-6">
                        <div class="card dash-card mb-0">
                            <div class="card-body">
                                <h6 class="mb-2">Stock Value (Cost)</h6>
                                <h3 class="mb-0">{{ money(stockValue) }}</h3>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="d-flex align-items-center flex-wrap gap-3 justify-content-between mb-4">
                    <div class="d-flex align-items-center gap-3 flex-wrap">
                        <div class="dropdown">
                            <a href="javascript:void(0);" class="dropdown-toggle btn btn-white d-inline-flex align-items-center"
                                data-bs-toggle="dropdown">
                                <i class="icon-layers text-dark me-2"></i>{{ categoryFilter === 'All' ? 'All Categories' : categoryFilter }}
                            </a>
                            <ul class="dropdown-menu p-3">
                                <li v-for="c in categoryOptions" :key="c">
                                    <a href="javascript:void(0);" class="dropdown-item rounded" @click="categoryFilter = c">{{ c }}</a>
                                </li>
                            </ul>
                        </div>
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
                    </div>
                    <div class="search-input">
                        <span class="btn-searchset"><i class="icon-search fs-14"></i></span>
                        <input type="text" class="form-control search-addon" placeholder="Search part / SKU" v-model="searchQuery" />
                    </div>
                </div>

                <div class="table-responsive table-nowrap">
                    <a-table class="table mb-0 datatable" :columns="visibleColumns" :data-source="paginatedData"
                        :pagination="false">
                        <template #bodyCell="{ column, record }">
                            <template v-if="column.key === 'Part'">
                                <div class="d-flex align-items-center">
                                    <span class="avatar avatar-sm rounded bg-light flex-shrink-0 me-2">
                                        <i class="icon-cog fs-13"></i>
                                    </span>
                                    <div>
                                        <h6 class="fs-14 fw-semibold mb-0">{{ record.name }}</h6>
                                        <span class="fs-13">{{ record.partNumber }}</span>
                                    </div>
                                </div>
                            </template>
                            <template v-if="column.key === 'Compatibility'">
                                <span class="fs-13">{{ record.compatibility }}</span>
                            </template>
                            <template v-if="column.key === 'Location'">
                                <span class="fs-13">{{ record.warehouse }} · {{ record.shelf }}-{{ record.bin }}</span>
                            </template>
                            <template v-if="column.key === 'Stock'">
                                <span class="fw-semibold">{{ record.stock }}</span>
                                <div class="fs-13 text-muted">min {{ record.minStock }}</div>
                            </template>
                            <template v-if="column.key === 'Cost'">{{ money(record.cost) }}</template>
                            <template v-if="column.key === 'Retail'">{{ money(record.retailPrice) }}</template>
                            <template v-if="column.key === 'Workshop'">{{ money(record.workshopPrice) }}</template>
                            <template v-if="column.key === 'Status'">
                                <span class="badge" :class="statusClass(record)">{{ stockStatus(record) }}</span>
                            </template>
                            <template v-if="column.key === 'Action'">
                                <div class="text-end">
                                    <div class="dropstart">
                                        <button class="btn btn-icon btn-white" type="button" data-bs-toggle="dropdown"
                                            aria-label="Actions">
                                            <i class="icon-ellipsis-vertical"></i>
                                        </button>
                                        <ul class="dropdown-menu p-3">
                                            <li><a href="javascript:void(0);" class="dropdown-item rounded d-flex align-items-center" @click="openDetail('Spare Part', record)"><i class="icon-eye me-2"></i>View Part</a></li>
                                            <li>
                                                <a href="javascript:void(0);" class="dropdown-item rounded d-flex align-items-center"
                                                    data-bs-toggle="modal" data-bs-target="#adjust_modal" @click="setAdjust(record)">
                                                    <i class="icon-arrow-left-right me-2"></i>Stock Adjustment
                                                </a>
                                            </li>
                                            <li><a href="javascript:void(0);" class="dropdown-item rounded d-flex align-items-center" @click="openEdit(record)"><i class="icon-pencil-line me-2"></i>Edit</a></li>
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

    <!-- Stock adjustment modal -->
    <div class="modal fade" id="adjust_modal">
        <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title">Stock Adjustment</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body" v-if="adjustItem">
                    <p class="mb-3">{{ adjustItem.name }} · current stock <strong>{{ adjustItem.stock }}</strong></p>
                    <div class="mb-3">
                        <label class="form-label">New Stock Count</label>
                        <input type="number" class="form-control" v-model.number="adjustCount">
                    </div>
                    <div class="mb-0">
                        <label class="form-label">Reason for Adjustment<span class="text-danger"> *</span></label>
                        <input type="text" class="form-control" v-model="adjustReason" placeholder="e.g. Stock count correction">
                    </div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-light" data-bs-dismiss="modal">Cancel</button>
                    <button type="button" class="btn btn-primary" data-bs-dismiss="modal" @click="applyAdjust">Save</button>
                </div>
            </div>
        </div>
    </div>

    <!-- Add part -->
    <div class="offcanvas offcanvas-end" tabindex="-1" id="add_part">
        <div class="offcanvas-header d-flex align-items-center justify-content-between">
            <h4 class="offcanvas-title mb-0">{{ editingId ? 'Edit Part' : 'Add Part' }}</h4>
            <button type="button" class="btn-close btn-close-modal" data-bs-dismiss="offcanvas" aria-label="Close">
                <i class="icon-x"></i>
            </button>
        </div>
        <form class="d-flex flex-column overflow-y-auto h-100" @submit.prevent="addPart">
            <div class="offcanvas-body pb-0">
                <div class="row gx-3">
                    <div class="col-md-12">
                        <div class="mb-3">
                            <label class="form-label">Part Name<span class="text-danger"> *</span></label>
                            <input type="text" class="form-control" v-model="form.name" required>
                        </div>
                    </div>
                    <div class="col-lg-6 col-md-12">
                        <div class="mb-3">
                            <label class="form-label">Part Number</label>
                            <input type="text" class="form-control" v-model="form.partNumber">
                        </div>
                    </div>
                    <div class="col-lg-6 col-md-12">
                        <div class="mb-3">
                            <label class="form-label">SKU</label>
                            <input type="text" class="form-control" v-model="form.sku">
                        </div>
                    </div>
                    <div class="col-lg-6 col-md-12">
                        <div class="mb-3">
                            <label class="form-label">Brand</label>
                            <input type="text" class="form-control" v-model="form.brand">
                        </div>
                    </div>
                    <div class="col-lg-6 col-md-12">
                        <div class="mb-3">
                            <label class="form-label">Category</label>
                            <vue-select :options="partCategories" v-model="form.category" placeholder="Select" />
                        </div>
                    </div>
                    <div class="col-md-12">
                        <div class="mb-3">
                            <label class="form-label">Compatibility</label>
                            <input type="text" class="form-control" v-model="form.compatibility" placeholder="Model / year / engine">
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-12">
                        <div class="mb-3">
                            <label class="form-label">Warehouse</label>
                            <input type="text" class="form-control" v-model="form.warehouse">
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-12">
                        <div class="mb-3">
                            <label class="form-label">Shelf</label>
                            <input type="text" class="form-control" v-model="form.shelf">
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-12">
                        <div class="mb-3">
                            <label class="form-label">Bin</label>
                            <input type="text" class="form-control" v-model="form.bin">
                        </div>
                    </div>
                    <div class="col-lg-6 col-md-12">
                        <div class="mb-3">
                            <label class="form-label">Opening Stock</label>
                            <input type="number" class="form-control" v-model="form.stock">
                        </div>
                    </div>
                    <div class="col-lg-6 col-md-12">
                        <div class="mb-3">
                            <label class="form-label">Minimum Stock</label>
                            <input type="number" class="form-control" v-model="form.minStock">
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-12">
                        <div class="mb-3">
                            <label class="form-label">Cost</label>
                            <input type="number" class="form-control" v-model="form.cost">
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-12">
                        <div class="mb-3">
                            <label class="form-label">Retail Price</label>
                            <input type="number" class="form-control" v-model="form.retailPrice">
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-12">
                        <div class="mb-3">
                            <label class="form-label">Workshop Price</label>
                            <input type="number" class="form-control" v-model="form.workshopPrice">
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
</template>

<script>
import BasePagination from '@/components/BasePagination.vue';
import { parts, partCategories, stockStatus } from '@/data/after-sales'
import { money } from '@/data/crm'
import { hideOffcanvas, showOffcanvas } from '@/utils/offcanvas'
import { openDetail, notify } from '@/utils/ui'

export default {
    name: 'PartsList',
    components: { BasePagination },
    data() {
        return {
            parts,
            partCategories,
            stockStatus,
            money,
            openDetail,
            searchQuery: "",
            categoryFilter: 'All',
            statusFilter: 'All',
            categoryOptions: ['All', ...partCategories],
            statusOptions: ['All', 'In Stock', 'Low Stock', 'Out of Stock'],
            currentPage: 1,
            pageSize: 10,
            pageSizeOptions: [5, 10, 25, 50, 100],
            adjustItem: null,
            adjustCount: 0,
            adjustReason: '',
            form: this.emptyForm(),
            editingId: null,
            columns: [
                { title: "Part", dataIndex: "name", key: "Part", sorter: false, visible: true },
                { title: "Brand", dataIndex: "brand", key: "brand", sorter: false, visible: true },
                { title: "Category", dataIndex: "category", key: "category", sorter: false, visible: true },
                { title: "Compatibility", dataIndex: "compatibility", key: "Compatibility", sorter: false, visible: true },
                { title: "Location", dataIndex: "warehouse", key: "Location", sorter: false, visible: true },
                { title: "Stock", dataIndex: "stock", key: "Stock", sorter: false, visible: true },
                { title: "Cost", dataIndex: "cost", key: "Cost", sorter: false, visible: true },
                { title: "Retail", dataIndex: "retailPrice", key: "Retail", sorter: false, visible: true },
                { title: "Workshop", dataIndex: "workshopPrice", key: "Workshop", sorter: false, visible: true },
                { title: "Status", dataIndex: "status", key: "Status", sorter: false, visible: true },
                { title: "Action", dataIndex: "Action", key: "Action", sorter: false, visible: true },
            ],
        }
    },
    methods: {
        emptyForm() {
            return {
                name: '', partNumber: '', sku: '', brand: '', category: null, compatibility: '',
                warehouse: '', shelf: '', bin: '', stock: '', minStock: '', cost: '', retailPrice: '', workshopPrice: '',
            }
        },
        statusClass(part) {
            const status = stockStatus(part)
            if (status === 'In Stock') return 'badge-soft-success text-dark'
            if (status === 'Low Stock') return 'badge-soft-warning text-dark'
            return 'badge-soft-danger text-dark'
        },
        setAdjust(record) {
            this.adjustItem = record
            this.adjustCount = record.stock
            this.adjustReason = ''
        },
        applyAdjust() {
            if (this.adjustItem && this.adjustReason.trim()) {
                this.adjustItem.stock = Number(this.adjustCount) || 0
                notify(`${this.adjustItem.name} stock adjusted`)
            }
        },
        openCreate() {
            this.editingId = null
            this.form = this.emptyForm()
        },
        openEdit(record) {
            this.editingId = record.id
            this.form = {
                name: record.name, partNumber: record.partNumber, sku: record.sku,
                brand: record.brand, category: record.category, compatibility: record.compatibility,
                warehouse: record.warehouse, shelf: record.shelf, bin: record.bin,
                stock: record.stock, minStock: record.minStock, cost: record.cost,
                retailPrice: record.retailPrice, workshopPrice: record.workshopPrice,
            }
            showOffcanvas('add_part')
        },
        addPart() {
            if (this.editingId) {
                const record = this.parts.find(p => p.id === this.editingId)
                if (record) {
                    Object.assign(record, {
                        partNumber: this.form.partNumber, sku: this.form.sku, name: this.form.name,
                        brand: this.form.brand, category: this.form.category || record.category,
                        compatibility: this.form.compatibility, warehouse: this.form.warehouse || record.warehouse,
                        shelf: this.form.shelf, bin: this.form.bin,
                        stock: Number(this.form.stock) || 0, minStock: Number(this.form.minStock) || 0,
                        cost: Number(this.form.cost) || 0, retailPrice: Number(this.form.retailPrice) || 0,
                        workshopPrice: Number(this.form.workshopPrice) || 0,
                    })
                }
                notify('Part updated')
            } else {
                this.parts.unshift({
                    id: 'PT-' + (9011 + this.parts.length),
                    partNumber: this.form.partNumber,
                    sku: this.form.sku,
                    barcode: '',
                    name: this.form.name,
                    brand: this.form.brand,
                    category: this.form.category || 'Accessories',
                    unit: 'pcs',
                    compatibility: this.form.compatibility,
                    warehouse: this.form.warehouse || 'Main Store',
                    shelf: this.form.shelf,
                    bin: this.form.bin,
                    stock: Number(this.form.stock) || 0,
                    minStock: Number(this.form.minStock) || 0,
                    cost: Number(this.form.cost) || 0,
                    retailPrice: Number(this.form.retailPrice) || 0,
                    workshopPrice: Number(this.form.workshopPrice) || 0,
                    batch: '',
                    expiry: '—',
                })
                notify('Part added')
            }
            this.editingId = null
            this.form = this.emptyForm()
            hideOffcanvas('add_part')
        },
        onPageChange(page) { this.currentPage = page },
        onPageSizeChange(size) { this.pageSize = Number(size); this.currentPage = 1 },
    },
    computed: {
        lowStockCount() {
            return this.parts.filter(p => stockStatus(p) === 'Low Stock').length
        },
        outStockCount() {
            return this.parts.filter(p => stockStatus(p) === 'Out of Stock').length
        },
        stockValue() {
            return this.parts.reduce((sum, p) => sum + p.cost * p.stock, 0)
        },
        filteredPages() {
            const query = this.searchQuery.toLowerCase()
            return this.parts.filter((record) => {
                const matchesQuery =
                    record.name.toLowerCase().includes(query) ||
                    record.partNumber.toLowerCase().includes(query) ||
                    record.sku.toLowerCase().includes(query) ||
                    record.brand.toLowerCase().includes(query)
                const matchesCategory = this.categoryFilter === 'All' || record.category === this.categoryFilter
                const matchesStatus = this.statusFilter === 'All' || stockStatus(record) === this.statusFilter
                return matchesQuery && matchesCategory && matchesStatus
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
