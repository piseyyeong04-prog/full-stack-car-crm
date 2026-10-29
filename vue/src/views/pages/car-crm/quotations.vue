<template>
    <div class="page-wrapper">
        <div class="content">
            <layout-header></layout-header>

            <div class="content-wrap">
                <div class="d-flex align-items-center flex-wrap gap-3 border-bottom pb-4 mb-4">
                    <div class="flex-grow-1">
                        <h4 class="mb-1">{{ $t('quotations.title') }}</h4>
                        <p class="text-muted mb-0">{{ $t('quotations.subtitle') }}</p>
                    </div>
                    <a href="#" class="btn btn-primary d-inline-flex align-items-center" data-bs-toggle="offcanvas"
                        data-bs-target="#add_quotation"><i class="icon-plus me-1"></i>{{ $t('quotations.addQuotation') }}</a>
                </div>

                <div class="d-flex align-items-center flex-wrap gap-3 justify-content-between mb-4">
                    <div class="dropdown">
                        <a href="javascript:void(0);" class="dropdown-toggle btn btn-white d-inline-flex align-items-center"
                            data-bs-toggle="dropdown">
                            <i class="icon-circle-dot text-dark me-2"></i>{{ statusFilter === 'All' ? $t('quotations.allStatus') : statusLabel(statusFilter) }}
                        </a>
                        <ul class="dropdown-menu p-3">
                            <li v-for="s in statusOptions" :key="s">
                                <a href="javascript:void(0);" class="dropdown-item rounded" @click="statusFilter = s">{{ s === 'All' ? $t('common.all') : statusLabel(s) }}</a>
                            </li>
                        </ul>
                    </div>
                    <div class="search-input">
                        <span class="btn-searchset"><i class="icon-search fs-14"></i></span>
                        <input type="text" class="form-control search-addon" :placeholder="$t('quotations.searchCustomer')" v-model="searchQuery" />
                    </div>
                </div>

                <div class="table-responsive table-nowrap">
                    <a-table class="table mb-0 datatable" :columns="visibleColumns" :data-source="paginatedData"
                        :pagination="false">
                        <template #bodyCell="{ column, record }">
                            <template v-if="column.key === 'Quote'">
                                <h6 class="fs-14 fw-semibold mb-0">{{ record.id }}</h6>
                                <span class="fs-13">{{ record.revision }}</span>
                            </template>
                            <template v-if="column.key === 'Vehicle'">
                                <div>
                                    <span class="fw-medium">{{ record.vehicle }}</span>
                                    <div class="fs-13 text-muted">{{ record.vin }}</div>
                                </div>
                            </template>
                            <template v-if="column.key === 'Discount'">
                                <span :class="record.discount > 0 ? 'text-danger fw-semibold' : ''">{{ money(record.discount) }}</span>
                            </template>
                            <template v-if="column.key === 'Total'">
                                <span class="fw-semibold">{{ money(record.total) }}</span>
                            </template>
                            <template v-if="column.key === 'Status'">
                                <span class="badge" :class="statusClass(record.status)">{{ statusLabel(record.status) }}</span>
                            </template>
                            <template v-if="column.key === 'Action'">
                                <div class="text-end">
                                    <div class="dropstart">
                                        <button class="btn btn-icon btn-white" type="button" data-bs-toggle="dropdown"
                                            aria-label="Actions">
                                            <i class="icon-ellipsis-vertical"></i>
                                        </button>
                                        <ul class="dropdown-menu p-3">
                                            <li><a href="javascript:void(0);" class="dropdown-item rounded d-flex align-items-center" @click="viewQuotation(record)"><i class="icon-eye me-2"></i>{{ $t('quotations.view') }}</a></li>
                                            <li><a href="javascript:void(0);" class="dropdown-item rounded d-flex align-items-center" @click="approveDiscount(record)"><i class="icon-check me-2"></i>{{ $t('quotations.approveDiscount') }}</a></li>
                                            <li><a href="javascript:void(0);" class="dropdown-item rounded d-flex align-items-center" @click="sendToCustomer(record)"><i class="icon-send me-2"></i>{{ $t('quotations.sendToCustomer') }}</a></li>
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

    <div class="offcanvas offcanvas-end" tabindex="-1" id="add_quotation">
        <div class="offcanvas-header d-flex align-items-center justify-content-between">
            <h4 class="offcanvas-title mb-0">{{ $t('quotations.newQuotation') }}</h4>
            <button type="button" class="btn-close btn-close-modal" data-bs-dismiss="offcanvas" aria-label="Close">
                <i class="icon-x"></i>
            </button>
        </div>
        <form class="d-flex flex-column overflow-y-auto h-100" @submit.prevent="addQuotation">
            <div class="offcanvas-body pb-0">
                <div class="row gx-3">
                    <div class="col-md-12">
                        <div class="mb-3">
                            <label class="form-label">{{ $t('quotations.customer') }}<span class="text-danger"> *</span></label>
                            <vue-select :options="customerNames" v-model="form.customer" :placeholder="$t('common.select')" />
                        </div>
                    </div>
                    <div class="col-md-12">
                        <div class="mb-3">
                            <label class="form-label">{{ $t('quotations.vehicle') }}</label>
                            <input type="text" class="form-control" v-model="form.vehicle">
                        </div>
                    </div>
                    <div class="col-md-12">
                        <div class="mb-3">
                            <label class="form-label">{{ $t('quotations.vin') }}</label>
                            <input type="text" class="form-control" v-model="form.vin">
                        </div>
                    </div>
                    <div class="col-md-12">
                        <div class="mb-3">
                            <label class="form-label">{{ $t('quotations.accessories') }}</label>
                            <input type="text" class="form-control" v-model="form.accessories">
                        </div>
                    </div>
                    <div class="col-lg-6 col-md-12">
                        <div class="mb-3">
                            <label class="form-label">{{ $t('quotations.discount') }}</label>
                            <input type="number" class="form-control" v-model="form.discount">
                        </div>
                    </div>
                    <div class="col-lg-6 col-md-12">
                        <div class="mb-3">
                            <label class="form-label">{{ $t('quotations.total') }}</label>
                            <input type="number" class="form-control" v-model="form.total">
                        </div>
                    </div>
                    <div class="col-md-12">
                        <div class="mb-3">
                            <label class="form-label">{{ $t('quotations.expiryDate') }}</label>
                            <input type="date" class="form-control" v-model="form.expiry">
                        </div>
                    </div>
                </div>
            </div>
            <div class="offcanvas-footer d-flex align-items-center gap-2 pt-2">
                <button type="button" class="btn btn-dark d-flex align-items-center w-100" data-bs-dismiss="offcanvas">
                    <i class="icon-x me-1"></i>{{ $t('common.cancel') }}
                </button>
                <button type="submit" class="btn btn-primary d-flex align-items-center w-100">
                    <i class="icon-circle-check me-1"></i>{{ $t('common.create') }}
                </button>
            </div>
        </form>
    </div>

    <!-- Professional Quotation -->
    <div class="modal fade" id="quotation_modal" tabindex="-1">
        <div class="modal-dialog modal-lg modal-dialog-centered modal-dialog-scrollable">
            <div class="modal-content quote-modal">
                <div class="modal-header border-0 pb-0">
                    <h5 class="modal-title">{{ $t('quotations.quotationTitle') }}</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body" v-if="quotation">
                    <div class="quote-paper" ref="quotePaper">
                        <div class="quote-head">
                            <div class="quote-brand">
                                <img src="@/assets/img/car-logo.svg" class="quote-logo" alt="logo">
                                <div>
                                    <h5 class="mb-0">Dreams Motors Co., Ltd.</h5>
                                    <p class="mb-0">No. 128, Preah Norodom Blvd, Phnom Penh, Cambodia</p>
                                    <p class="mb-0">Tel: +855 23 900 900 · sales@dreamsmotors.com.kh</p>
                                </div>
                            </div>
                            <div class="quote-title">
                                <h3>{{ $t('quotations.quotationUpper') }}</h3>
                                <p class="mb-0"><strong>{{ quotation.id }}</strong> · {{ quotation.revision }}</p>
                                <p class="mb-0">{{ $t('quotations.date') }}: {{ quoteDate }}</p>
                                <p class="mb-0">{{ $t('quotations.validUntil') }}: {{ quotation.expiry }}</p>
                            </div>
                        </div>

                        <div class="quote-grid">
                            <div>
                                <p class="quote-label">{{ $t('quotations.preparedFor') }}</p>
                                <h6 class="mb-1">{{ quotation.customer }}</h6>
                                <p class="mb-0">{{ $t('quotations.customerAccount') }}</p>
                            </div>
                            <div>
                                <p class="quote-label">{{ $t('quotations.preparedBy') }}</p>
                                <h6 class="mb-1">{{ $t('quotations.salesDepartment') }}</h6>
                                <p class="mb-0">Dreams Motors</p>
                            </div>
                            <div>
                                <p class="quote-label">{{ $t('quotations.status') }}</p>
                                <h6 class="mb-1">{{ statusLabel(quotation.status) }}</h6>
                                <p class="mb-0">{{ $t('quotations.revision') }} {{ quotation.revision }}</p>
                            </div>
                        </div>

                        <div class="quote-spec">
                            <div>
                                <p class="quote-label">{{ $t('quotations.vehicle') }}</p>
                                <span>{{ quotation.vehicle }}</span>
                            </div>
                            <div>
                                <p class="quote-label">{{ $t('quotations.vinChassis') }}</p>
                                <span>{{ quotation.vin }}</span>
                            </div>
                            <div>
                                <p class="quote-label">{{ $t('quotations.accessories') }}</p>
                                <span>{{ quotation.accessories }}</span>
                            </div>
                            <div>
                                <p class="quote-label">{{ $t('quotations.services') }}</p>
                                <span>{{ quotation.services }}</span>
                            </div>
                        </div>

                        <table class="quote-table">
                            <thead>
                                <tr>
                                    <th>{{ $t('quotations.description') }}</th>
                                    <th class="text-end">{{ $t('quotations.amount') }}</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="line in quotationLines" :key="line.description">
                                    <td>
                                        <strong>{{ line.description }}</strong>
                                        <div class="quote-sub">{{ line.detail }}</div>
                                    </td>
                                    <td class="text-end">{{ money(line.amount) }}</td>
                                </tr>
                                <tr v-if="quotation.discount > 0">
                                    <td><strong>{{ $t('quotations.specialDiscount') }}</strong></td>
                                    <td class="text-end text-danger">-{{ money(quotation.discount) }}</td>
                                </tr>
                            </tbody>
                        </table>

                        <div class="quote-summary">
                            <div class="quote-stamp" :class="stampClass">{{ statusLabel(quotation.status).toUpperCase() }}</div>
                            <div class="quote-totals">
                                <div class="row"><span>{{ $t('quotations.subtotal') }}</span><span>{{ money(quotation.total + quotation.discount) }}</span></div>
                                <div class="row" v-if="quotation.discount > 0"><span>{{ $t('quotations.discount') }}</span><span class="text-danger">-{{ money(quotation.discount) }}</span></div>
                                <div class="row grand"><span>{{ $t('quotations.grandTotal') }}</span><span>{{ money(quotation.total) }}</span></div>
                            </div>
                        </div>

                        <div class="quote-terms">
                            <p class="quote-label">{{ $t('quotations.termsTitle') }}</p>
                            <ul class="mb-0">
                                <li>{{ $t('quotations.termValid', { date: quotation.expiry }) }}</li>
                                <li>{{ $t('quotations.termPrice') }}</li>
                                <li>{{ $t('quotations.termDeposit') }}</li>
                                <li>{{ $t('quotations.termWarranty') }}</li>
                            </ul>
                        </div>

                        <div class="quote-foot">
                            <div class="quote-sign"><p class="mb-1">{{ $t('quotations.preparedBy') }}</p></div>
                            <div class="quote-sign"><p class="mb-1">{{ $t('quotations.customerAcceptance') }}</p></div>
                        </div>
                    </div>
                </div>
                <div class="modal-footer border-0">
                    <button type="button" class="btn btn-light" data-bs-dismiss="modal"><i class="icon-x me-1"></i>{{ $t('common.close') }}</button>
                    <button type="button" class="btn btn-white" @click="downloadQuotation"><i class="icon-download me-1"></i>{{ $t('common.savePdf') }}</button>
                    <button type="button" class="btn btn-primary" @click="printQuotation"><i class="icon-printer me-1"></i>{{ $t('quotations.printQuotation') }}</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import BasePagination from '@/components/BasePagination.vue';
import { quotations, customers, money } from '@/data/crm'
import { hideOffcanvas } from '@/utils/offcanvas'
import { showModal } from '@/utils/modal'
import { notify } from '@/utils/ui'

const QUOTE_PRINT_CSS = `
  * { box-sizing: border-box; }
  body { margin: 0; padding: 24px; font-family: 'Segoe UI', Arial, sans-serif; color: #1f2937; }
  @page { margin: 14mm; }
  .quote-paper { background: #fff; color: #1f2937; max-width: 820px; margin: 0 auto; }
  .quote-head { display: flex; justify-content: space-between; align-items: flex-start; border-bottom: 2px solid #0D76E1; padding-bottom: 20px; margin-bottom: 24px; }
  .quote-brand { display: flex; gap: 12px; align-items: center; }
  .quote-logo { width: 44px; height: 44px; }
  .quote-brand h5 { margin: 0; font-size: 18px; }
  .quote-brand p { margin: 0; font-size: 12px; color: #6b7280; }
  .quote-title { text-align: right; }
  .quote-title h3 { margin: 0 0 6px; letter-spacing: 3px; font-size: 22px; color: #0D76E1; }
  .quote-title p { margin: 0; font-size: 12px; }
  .quote-grid { display: flex; gap: 24px; margin-bottom: 20px; }
  .quote-grid > div { flex: 1; }
  .quote-grid h6 { margin: 0 0 2px; font-size: 14px; }
  .quote-grid p { margin: 0; font-size: 12px; color: #6b7280; }
  .quote-label { font-size: 11px; text-transform: uppercase; letter-spacing: 1px; color: #6b7280; margin: 0 0 4px; }
  .quote-spec { display: flex; gap: 24px; flex-wrap: wrap; background: #f9fafb; border: 1px solid #e5e7eb; border-radius: 8px; padding: 16px; margin-bottom: 20px; }
  .quote-spec > div { flex: 1; min-width: 140px; }
  .quote-spec span { font-size: 13px; }
  .quote-table { width: 100%; border-collapse: collapse; margin-bottom: 20px; }
  .quote-table th { background: #f3f4f6; text-align: left; padding: 10px 12px; font-size: 11px; text-transform: uppercase; letter-spacing: .5px; }
  .quote-table td { padding: 12px; border-bottom: 1px solid #e5e7eb; font-size: 13px; }
  .quote-sub { font-size: 11px; color: #6b7280; margin-top: 2px; }
  .quote-summary { display: flex; justify-content: space-between; align-items: flex-start; }
  .quote-stamp { display: inline-block; border: 3px solid; padding: 6px 18px; border-radius: 8px; font-weight: 800; letter-spacing: 2px; transform: rotate(-8deg); font-size: 14px; }
  .quote-stamp.approved { color: #16a34a; border-color: #16a34a; }
  .quote-stamp.pending { color: #d97706; border-color: #d97706; }
  .quote-stamp.sent { color: #0D76E1; border-color: #0D76E1; }
  .quote-totals { width: 280px; }
  .quote-totals .row { display: flex; justify-content: space-between; padding: 8px 0; font-size: 13px; }
  .quote-totals .grand { border-top: 2px solid #1f2937; font-weight: 700; font-size: 16px; margin-top: 4px; padding-top: 12px; }
  .quote-terms { margin-top: 28px; font-size: 12px; color: #4b5563; }
  .quote-terms ul { margin: 6px 0 0; padding-left: 18px; }
  .quote-terms li { margin-bottom: 3px; }
  .quote-foot { margin-top: 40px; display: flex; justify-content: space-between; gap: 24px; }
  .quote-sign { border-top: 1px solid #9ca3af; width: 220px; text-align: center; padding-top: 6px; font-size: 12px; color: #374151; }
`

export default {
    name: 'CarCrmQuotations',
    components: { BasePagination },
    data() {
        return {
            quotations,
            money,
            searchQuery: "",
            statusFilter: 'All',
            statusOptions: ['All', 'Sent', 'Pending Approval', 'Approved', 'Accepted'],
            customerNames: customers.map(c => c.name),
            currentPage: 1,
            pageSize: 10,
            pageSizeOptions: [5, 10, 25, 50, 100],
            form: this.emptyForm(),
            quotation: null,
            quoteDate: '',
        }
    },
    methods: {
        emptyForm() {
            return { customer: null, vehicle: '', vin: '', accessories: '', discount: '', total: '', expiry: '' }
        },
        statusLabel(status) {
            const key = {
                Sent: 'sent',
                'Pending Approval': 'pendingApproval',
                Approved: 'approved',
                Accepted: 'accepted',
            }[status]
            return key ? this.$t(`quotations.${key}`) : status
        },
        statusClass(status) {
            if (status === 'Accepted' || status === 'Approved') return 'badge-soft-success text-dark'
            if (status === 'Pending Approval') return 'badge-soft-warning text-dark'
            return 'badge-soft-info text-dark'
        },
        viewQuotation(record) {
            this.quotation = { ...record }
            this.quoteDate = new Date().toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' })
            showModal('quotation_modal')
        },
        printQuotation() {
            const el = this.$refs.quotePaper
            if (!el) return
            const win = window.open('', '_blank')
            if (!win) {
                notify('Please allow pop-ups to print the quotation', 'warning')
                return
            }
            win.document.write(`<!doctype html><html><head><meta charset="utf-8"><title>Quotation ${this.quotation?.id || ''}</title><style>${QUOTE_PRINT_CSS}</style></head><body>${el.outerHTML}</body></html>`)
            win.document.close()
            win.focus()
            setTimeout(() => win.print(), 300)
        },
        downloadQuotation() {
            this.printQuotation()
            notify('Choose "Save as PDF" in the print dialog', 'info')
        },
        approveDiscount(record) {
            record.status = 'Approved'
            notify(`${record.id} discount approved`)
        },
        sendToCustomer(record) {
            record.status = 'Sent'
            notify(`${record.id} sent to ${record.customer}`)
        },
        addQuotation() {
            const total = Number(this.form.total) || 0
            this.quotations.unshift({
                id: 'QT-' + (8806 + this.quotations.length),
                customer: this.form.customer || 'Unassigned',
                vehicle: this.form.vehicle,
                vin: this.form.vin,
                accessories: this.form.accessories || '—',
                services: '—',
                discount: Number(this.form.discount) || 0,
                total,
                expiry: this.form.expiry,
                revision: 'R1',
                status: Number(this.form.discount) > 0 ? 'Pending Approval' : 'Sent',
            })
            this.form = this.emptyForm()
            hideOffcanvas('add_quotation')
        },
        onPageChange(page) { this.currentPage = page },
        onPageSizeChange(size) { this.pageSize = Number(size); this.currentPage = 1 },
    },
    computed: {
        columns() {
            return [
                { title: this.$t('quotations.quote'),    dataIndex: "id",       key: "Quote",    sorter: false, visible: true },
                { title: this.$t('quotations.customer'), dataIndex: "customer", key: "customer", sorter: false, visible: true },
                { title: this.$t('quotations.vehicle'),  dataIndex: "vehicle",  key: "Vehicle",  sorter: false, visible: true },
                { title: this.$t('quotations.discount'), dataIndex: "discount", key: "Discount", sorter: false, visible: true },
                { title: this.$t('quotations.total'),    dataIndex: "total",    key: "Total",    sorter: false, visible: true },
                { title: this.$t('quotations.expiry'),   dataIndex: "expiry",   key: "expiry",   sorter: false, visible: true },
                { title: this.$t('quotations.status'),   dataIndex: "status",   key: "Status",   sorter: false, visible: true },
                { title: this.$t('quotations.action'),   dataIndex: "Action",   key: "Action",   sorter: false, visible: true },
            ]
        },
        quotationLines() {
            if (!this.quotation) return []
            return [{
                description: this.quotation.vehicle,
                detail: `${this.$t('quotations.vinChassis')}: ${this.quotation.vin}`,
                amount: this.quotation.total + this.quotation.discount,
            }]
        },
        stampClass() {
            if (!this.quotation) return ''
            const status = this.quotation.status
            if (status === 'Accepted' || status === 'Approved') return 'approved'
            if (status === 'Pending Approval') return 'pending'
            return 'sent'
        },
        filteredPages() {
            const query = this.searchQuery.toLowerCase()
            return this.quotations.filter((record) => {
                const matchesQuery =
                    record.customer.toLowerCase().includes(query) ||
                    record.vehicle.toLowerCase().includes(query) ||
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

<style scoped>
.quote-modal { border: 0; }
.quote-paper { background: #fff; color: #1f2937; padding: 32px; border-radius: 8px; }
.quote-head { display: flex; justify-content: space-between; align-items: flex-start; border-bottom: 2px solid #0D76E1; padding-bottom: 20px; margin-bottom: 24px; gap: 16px; flex-wrap: wrap; }
.quote-brand { display: flex; gap: 12px; align-items: center; }
.quote-logo { width: 44px; height: 44px; }
.quote-brand h5 { font-size: 18px; }
.quote-brand p { font-size: 12px; color: #6b7280; }
.quote-title { text-align: right; }
.quote-title h3 { letter-spacing: 3px; font-size: 22px; color: #0D76E1; margin-bottom: 6px; }
.quote-title p { font-size: 12px; }
.quote-grid { display: flex; gap: 24px; margin-bottom: 20px; flex-wrap: wrap; }
.quote-grid > div { flex: 1; min-width: 140px; }
.quote-grid h6 { font-size: 14px; }
.quote-grid p { font-size: 12px; color: #6b7280; }
.quote-label { font-size: 11px; text-transform: uppercase; letter-spacing: 1px; color: #6b7280; margin-bottom: 4px; }
.quote-spec { display: flex; gap: 24px; flex-wrap: wrap; background: #f9fafb; border: 1px solid #e5e7eb; border-radius: 8px; padding: 16px; margin-bottom: 20px; }
.quote-spec > div { flex: 1; min-width: 140px; }
.quote-spec span { font-size: 13px; }
.quote-table { width: 100%; border-collapse: collapse; margin-bottom: 20px; }
.quote-table th { background: #f3f4f6; text-align: left; padding: 10px 12px; font-size: 11px; text-transform: uppercase; letter-spacing: 0.5px; }
.quote-table td { padding: 12px; border-bottom: 1px solid #e5e7eb; font-size: 13px; }
.quote-sub { font-size: 11px; color: #6b7280; margin-top: 2px; }
.quote-summary { display: flex; justify-content: space-between; align-items: flex-start; gap: 16px; flex-wrap: wrap; }
.quote-stamp { display: inline-block; border: 3px solid; padding: 6px 18px; border-radius: 8px; font-weight: 800; letter-spacing: 2px; transform: rotate(-8deg); font-size: 14px; }
.quote-stamp.approved { color: #16a34a; border-color: #16a34a; }
.quote-stamp.pending { color: #d97706; border-color: #d97706; }
.quote-stamp.sent { color: #0D76E1; border-color: #0D76E1; }
.quote-totals { width: 280px; max-width: 100%; }
.quote-totals .row { display: flex; justify-content: space-between; padding: 8px 0; font-size: 13px; }
.quote-totals .grand { border-top: 2px solid #1f2937; font-weight: 700; font-size: 16px; margin-top: 4px; padding-top: 12px; }
.quote-terms { margin-top: 28px; font-size: 12px; color: #4b5563; }
.quote-terms ul { margin: 6px 0 0; padding-left: 18px; }
.quote-terms li { margin-bottom: 3px; }
.quote-foot { margin-top: 40px; display: flex; justify-content: space-between; gap: 24px; flex-wrap: wrap; }
.quote-sign { border-top: 1px solid #9ca3af; width: 220px; text-align: center; padding-top: 6px; font-size: 12px; color: #374151; }
</style>