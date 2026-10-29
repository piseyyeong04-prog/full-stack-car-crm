<template>
    <div class="page-wrapper">
        <div class="content">
            <layout-header></layout-header>

            <div class="content-wrap">
                <div class="d-flex align-items-center flex-wrap gap-3 border-bottom pb-4 mb-4">
                    <div class="flex-grow-1">
                        <h4 class="mb-1">{{ $t('PartsOrders.title') }}</h4>
                        <p class="text-muted mb-0">{{ $t('PartsOrders.subtitle') }}</p>
                    </div>
                    <a href="#" class="btn btn-primary d-inline-flex align-items-center" data-bs-toggle="offcanvas"
                        data-bs-target="#add_parts_order"><i class="icon-plus me-1"></i>{{ $t('PartsOrders.newOrder') }}</a>
                </div>

                <div class="d-flex align-items-center flex-wrap gap-3 justify-content-between mb-4">
                    <div class="dropdown">
                        <a href="javascript:void(0);" class="dropdown-toggle btn btn-white d-inline-flex align-items-center"
                            data-bs-toggle="dropdown">
                            <i class="icon-circle-dot text-dark me-2"></i>{{ statusFilter === 'All' ? $t('PartsOrders.allStatus') : statusLabel(statusFilter) }}
                        </a>
                        <ul class="dropdown-menu p-3">
                            <li v-for="s in statusOptions" :key="s">
                                <a href="javascript:void(0);" class="dropdown-item rounded" @click="statusFilter = s">{{ s === 'All' ? $t('PartsOrders.all') : statusLabel(s) }}</a>
                            </li>
                        </ul>
                    </div>
                    <div class="search-input">
                        <span class="btn-searchset"><i class="icon-search fs-14"></i></span>
                        <input type="search" class="form-control search-addon" :placeholder="$t('PartsOrders.searchPlaceholder')" v-model="searchQuery" />
                    </div>
                </div>

                <div class="table-responsive table-nowrap">
                    <a-table class="table mb-0 datatable" :columns="visibleColumns" :data-source="paginatedData"
                        :pagination="false">
                        <template #bodyCell="{ column, record }">
                            <template v-if="column.key === 'Order'">
                                <h6 class="fs-14 fw-semibold mb-0">{{ record.id }}</h6>
                                <span class="fs-13">{{ record.items }}</span>
                            </template>
                            <template v-if="column.key === 'Amount'">{{ money(record.amount) }}</template>
                            <template v-if="column.key === 'Status'">
                                <span class="badge" :class="statusClass(record.status)">{{ statusLabel(record.status) }}</span>
                            </template>
                            <template v-if="column.key === 'Action'">
                                <div class="text-end">
                                    <div class="dropstart">
                                        <button class="btn btn-icon btn-white" type="button" data-bs-toggle="dropdown"
                                            :aria-label="$t('PartsOrders.actions')">
                                            <i class="icon-ellipsis-vertical"></i>
                                        </button>
                                        <ul class="dropdown-menu p-3">
                                            <li><a href="javascript:void(0);" class="dropdown-item rounded d-flex align-items-center" @click="openDetail($t('PartsOrders.order'), record)"><i class="icon-eye me-2"></i>{{ $t('PartsOrders.viewOrder') }}</a></li>
                                            <li><a href="javascript:void(0);" class="dropdown-item rounded d-flex align-items-center" @click="setStatus(record, 'Received')"><i class="icon-check me-2"></i>{{ $t('PartsOrders.receiveGoods') }}</a></li>
                                            <li><a href="javascript:void(0);" class="dropdown-item rounded d-flex align-items-center" @click="setStatus(record, 'Returned')"><i class="icon-undo-2 me-2"></i>{{ $t('PartsOrders.supplierReturn') }}</a></li>
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

    <div class="offcanvas offcanvas-end" tabindex="-1" id="add_parts_order">
        <div class="offcanvas-header d-flex align-items-center justify-content-between">
            <h4 class="offcanvas-title mb-0">{{ $t('PartsOrders.newOrder') }}</h4>
            <button type="button" class="btn-close btn-close-modal" data-bs-dismiss="offcanvas" :aria-label="$t('PartsOrders.close')">
                <i class="icon-x"></i>
            </button>
        </div>
        <form class="d-flex flex-column overflow-y-auto h-100" @submit.prevent="addOrder">
            <div class="offcanvas-body pb-0">
                <div class="row gx-3">
                    <div class="col-md-12">
                        <div class="mb-3">
                            <label class="form-label">{{ $t('PartsOrders.supplier') }}<span class="text-danger"> *</span></label>
                            <input type="text" class="form-control" v-model="form.supplier" required>
                        </div>
                    </div>
                    <div class="col-md-12">
                        <div class="mb-3">
                            <label class="form-label">{{ $t('PartsOrders.items') }}</label>
                            <input type="text" class="form-control" v-model="form.items" :placeholder="$t('PartsOrders.itemsPlaceholder')">
                        </div>
                    </div>
                    <div class="col-lg-6 col-md-12">
                        <div class="mb-3">
                            <label class="form-label">{{ $t('PartsOrders.amount') }}</label>
                            <input type="number" class="form-control" v-model="form.amount">
                        </div>
                    </div>
                    <div class="col-lg-6 col-md-12">
                        <div class="mb-3">
                            <label class="form-label">{{ $t('PartsOrders.expectedReceipt') }}</label>
                            <input type="date" class="form-control" v-model="form.expected">
                        </div>
                    </div>
                </div>
            </div>
            <div class="offcanvas-footer d-flex align-items-center gap-2 pt-2">
                <button type="button" class="btn btn-dark d-flex align-items-center w-100" data-bs-dismiss="offcanvas">
                    <i class="icon-x me-1"></i>{{ $t('PartsOrders.cancel') }}
                </button>
                <button type="submit" class="btn btn-primary d-flex align-items-center w-100">
                    <i class="icon-circle-check me-1"></i>{{ $t('PartsOrders.submit') }}
                </button>
            </div>
        </form>
    </div>
</template>

<script>
import BasePagination from '@/components/BasePagination.vue';
import { partsOrders } from '@/data/after-sales'
import { money } from '@/data/crm'
import { hideOffcanvas } from '@/utils/offcanvas'
import { openDetail, notify } from '@/utils/ui'

export default {
    name: 'PartsOrders',
    components: { BasePagination },
    data() {
        return {
            partsOrders,
            money,
            openDetail,
            searchQuery: "",
            statusFilter: 'All',
            statusOptions: ['All', 'Pending', 'Approved', 'Received', 'Returned'],
            currentPage: 1,
            pageSize: 10,
            pageSizeOptions: [5, 10, 25, 50, 100],
            form: { supplier: '', items: '', amount: '', expected: '' },
        }
    },
    methods: {
        statusLabel(status) {
            const keys = { Pending: 'pending', Approved: 'approved', Received: 'received', Returned: 'returned' }
            return keys[status] ? this.$t(`PartsOrders.statuses.${keys[status]}`) : status
        },
        statusClass(status) {
            if (status === 'Received') return 'badge-soft-success text-dark'
            if (status === 'Approved') return 'badge-soft-info text-dark'
            if (status === 'Returned') return 'badge-soft-danger text-dark'
            return 'badge-soft-warning text-dark'
        },
        setStatus(record, status) {
            record.status = status
            notify(this.$t('PartsOrders.statusUpdated', { id: record.id, status: this.statusLabel(status) }))
        },
        addOrder() {
            const today = new Date().toISOString().slice(0, 10)
            this.partsOrders.unshift({
                id: 'PPO-' + (4106 + this.partsOrders.length),
                supplier: this.form.supplier,
                items: this.form.items,
                amount: Number(this.form.amount) || 0,
                ordered: today,
                expected: this.form.expected,
                status: 'Pending',
            })
            this.form = { supplier: '', items: '', amount: '', expected: '' }
            hideOffcanvas('add_parts_order')
        },
        onPageChange(page) { this.currentPage = page },
        onPageSizeChange(size) { this.pageSize = Number(size); this.currentPage = 1 },
    },
    computed: {
        columns() {
            return [
                { title: this.$t('PartsOrders.order'), dataIndex: 'id', key: 'Order', sorter: false, visible: true },
                { title: this.$t('PartsOrders.supplier'), dataIndex: 'supplier', key: 'supplier', sorter: false, visible: true },
                { title: this.$t('PartsOrders.amount'), dataIndex: 'amount', key: 'Amount', sorter: false, visible: true },
                { title: this.$t('PartsOrders.ordered'), dataIndex: 'ordered', key: 'ordered', sorter: false, visible: true },
                { title: this.$t('PartsOrders.expected'), dataIndex: 'expected', key: 'expected', sorter: false, visible: true },
                { title: this.$t('PartsOrders.status'), dataIndex: 'status', key: 'Status', sorter: false, visible: true },
                { title: this.$t('PartsOrders.action'), dataIndex: 'Action', key: 'Action', sorter: false, visible: true },
            ]
        },
        filteredPages() {
            const query = this.searchQuery.toLowerCase()
            return this.partsOrders.filter((record) => {
                const matchesQuery =
                    record.supplier.toLowerCase().includes(query) ||
                    record.items.toLowerCase().includes(query) ||
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
