<template>
    <div class="page-wrapper">
        <div class="content">
            <layout-header></layout-header>

            <div class="content-wrap">
                <div class="d-flex align-items-center flex-wrap gap-3 border-bottom pb-4 mb-4">
                    <div class="flex-grow-1">
                        <h4 class="mb-1">{{$t('payments.title')}}</h4>
                        <p class="text-muted mb-0">{{$t('payments.subtitle')}}</p>
                    </div>
                    <a href="#" class="btn btn-primary d-inline-flex align-items-center" data-bs-toggle="offcanvas"
                        data-bs-target="#add_payment"><i class="icon-plus me-1"></i>{{$t('payments.addRecord')}}</a>
                </div>

                <div class="row g-4 mb-4">
                    <div class="col-xxl-4 col-md-6">
                        <div class="card dash-card mb-0">
                            <div class="card-body">
                                <h6 class="mb-2">{{ $t('payments.totalBilled') }}</h6>
                                <h3 class="mb-0">{{ money(totalBilled) }}</h3>
                            </div>
                        </div>
                    </div>
                    <div class="col-xxl-4 col-md-6">
                        <div class="card dash-card mb-0">
                            <div class="card-body">
                                <h6 class="mb-2">{{$t('payments.cashCollected') }}</h6>
                                <h3 class="mb-0 text-success">{{ money(totalPaid) }}</h3>
                            </div>
                        </div>
                    </div>
                    <div class="col-xxl-4 col-md-12">
                        <div class="card dash-card mb-0">
                            <div class="card-body">
                                <h6 class="mb-2">{{ $t('payments.outstandingBalance')}}</h6>
                                <h3 class="mb-0 text-danger">{{ money(totalBilled - totalPaid) }}</h3>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="d-flex align-items-center flex-wrap gap-3 justify-content-between mb-4">
                    <div class="dropdown">
                        <a href="javascript:void(0);" class="dropdown-toggle btn btn-white d-inline-flex align-items-center"
                            data-bs-toggle="dropdown">
                            <i class="icon-circle-dot text-dark me-2"></i>{{ statusFilter === 'All' ? $t('payments.allStatus') : statusLabel(statusFilter) }}
                        </a>
                        <ul class="dropdown-menu p-3">
                            <li v-for="s in statusOptions" :key="s">
                                <a href="javascript:void(0);" class="dropdown-item rounded" @click="setStatusFilter(s)">{{ s === 'All'? $t('payments.all'): statusLabel(s)}}</a>
                            </li>
                        </ul>
                    </div>
                    <div class="search-input">
                        <span class="btn-searchset"><i class="icon-search fs-14"></i></span>
                        <input type="search" class="form-control search-addon" :placeholder="$t('payments.searchCustomer')" v-model="searchQuery" />
                    </div>
                </div>

                <div class="table-responsive table-nowrap">
                    <a-table class="table mb-0 datatable" :columns="visibleColumns" :data-source="paginatedData"
                        :pagination="false">
                        <template #bodyCell="{ column, record }">
                            <template v-if="column.key === 'Payment'">
                                <h6 class="fs-14 fw-semibold mb-0">{{ record.id }}</h6>
                                <span class="fs-13">{{ record.customer }}</span>
                            </template>
                            <template v-if="column.key === 'Vehicle'">
                                <span>{{ record.vehicle }}</span>
                            <div class="fs-13 text-muted">{{ typeLabel(record.type) }} · {{ methodLabel(record.method) }}</div>
                            </template>
                            <template v-if="column.key === 'Total'">{{ money(record.total) }}</template>
                            <template v-if="column.key === 'Paid'">
                                <span class="text-success fw-semibold">{{ money(record.paid) }}</span>
                            </template>
                            <template v-if="column.key === 'Balance'">
                                <span :class="(record.total - record.paid) > 0 ? 'text-danger fw-semibold' : 'text-success fw-semibold'">
                                    {{ money(record.total - record.paid) }}
                                </span>
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
                                            <li v-if="record.status !== 'Paid'"><a href="javascript:void(0);" class="dropdown-item rounded d-flex align-items-center" @click="markPaid(record)"><i class="icon-check me-2"></i>{{$t('payments.markpaid')}}</a></li>
                                            <li><a href="javascript:void(0);" class="dropdown-item rounded d-flex align-items-center" @click="viewReceipt(record)"><i class="icon-file-text me-2"></i>{{$t('payments.viewReceipt')}}</a></li>
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

    <div class="offcanvas offcanvas-end" tabindex="-1" id="add_payment">
        <div class="offcanvas-header d-flex align-items-center justify-content-between">
            <h4 class="offcanvas-title mb-0">{{$t('payments.addRecord')}}</h4>
            <button type="button" class="btn-close btn-close-modal" data-bs-dismiss="offcanvas" aria-label="Close">
                <i class="icon-x"></i>
            </button>
        </div>
        <form class="d-flex flex-column overflow-y-auto h-100" @submit.prevent="addPayment">
            <div class="offcanvas-body pb-0">
                <div class="row gx-3">
                    <div class="col-md-12">
                        <div class="mb-3">
                            <label class="form-label">{{$t('payments.customer')}}<span class="text-danger"> *</span></label>
                            <vue-select :options="customerNames" v-model="form.customer" placeholder="Select" />
                        </div>
                    </div>
                    <div class="col-md-12">
                        <div class="mb-3">
                            <label class="form-label">{{$t('payments.vehicle')}}</label>
                            <input type="text" class="form-control" v-model="form.vehicle">
                        </div>
                    </div>
                    <div class="col-lg-6 col-md-12">
                        <div class="mb-3">
                            <label class="form-label">{{$t('payments.paymentType')}}</label>
                            <vue-select :options="['Cash', 'Financing']" v-model="form.type" placeholder="Select" />
                        </div>
                    </div>
                    <div class="col-lg-6 col-md-12">
                        <div class="mb-3">
                            <label class="form-label">{{$t('payments.method')}}</label>
                            <input type="text" class="form-control" v-model="form.method" :placeholder="$t('payments.methodPlaceholder')">
                        </div>
                    </div>
                    <div class="col-lg-6 col-md-12">
                        <div class="mb-3">
                            <label class="form-label">{{$t('payments.total')}}</label>
                            <input type="number" min="0.01" step="0.01" required class="form-control" v-model.number="form.total">
                        </div>
                    </div>
                    <div class="col-lg-6 col-md-12">
                        <div class="mb-3">
                            <label class="form-label">{{$t('payments.amountPaid')}}</label>
                            <input type="number" min="0" step="0.01" required class="form-control" v-model.number="form.paid">
                        </div>
                    </div>
                    <div class="col-md-12">
                        <div class="mb-3">
                            <label class="form-label">{{$t('payments.dueDate')}}</label>
                            <input type="date" class="form-control" v-model="form.dueDate">
                        </div>
                    </div>
                </div>
            </div>
            <div class="offcanvas-footer d-flex align-items-center gap-2 pt-2">
                <button type="button" class="btn btn-dark d-flex align-items-center w-100" data-bs-dismiss="offcanvas">
                    <i class="icon-x me-1"></i>{{$t('payments.cancel')}}
                </button>
                <button type="submit" class="btn btn-primary d-flex align-items-center w-100">
                    <i class="icon-circle-check me-1"></i>{{$t('payments.save')}}
                </button>
            </div>
        </form>
    </div>

    <!-- Professional Receipt -->
    <div class="modal fade" id="receipt_modal" tabindex="-1">
        <div class="modal-dialog modal-lg modal-dialog-centered modal-dialog-scrollable">
            <div class="modal-content receipt-modal">
                <div class="modal-header border-0 pb-0">
                    <h5 class="modal-title">Payment Receipt</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body" v-if="receipt">
                    <div class="receipt-paper" ref="receiptPaper">
                        <div class="receipt-head">
                            <div class="receipt-brand">
                                <img src="@/assets/img/car-logo.svg" class="receipt-logo" alt="logo">
                                <div>
                                    <h5 class="mb-0">Dreams Motors Co., Ltd.</h5>
                                    <p class="mb-0">No. 128, Preah Norodom Blvd, Phnom Penh, Cambodia</p>
                                    <p class="mb-0">Tel: +855 23 900 900 · sales@dreamsmotors.com.kh</p>
                                </div>
                            </div>
                            <div class="receipt-title">
                                <h3>RECEIPT</h3>
                                <p class="mb-0"><strong>{{ receiptNo }}</strong></p>
                                <p class="mb-0">{{ receiptDate }}</p>
                            </div>
                        </div>

                        <div class="receipt-grid">
                            <div>
                                <p class="receipt-label">Received From</p>
                                <h6 class="mb-1">{{ receipt.customer }}</h6>
                                <p class="mb-0">Customer Account</p>
                            </div>
                            <div>
                                <p class="receipt-label">Payment Method</p>
                                <h6 class="mb-1">{{ receipt.method }}</h6>
                                <p class="mb-0">{{ receipt.type }} Payment</p>
                            </div>
                            <div>
                                <p class="receipt-label">Reference</p>
                                <h6 class="mb-1">{{ receipt.id }}</h6>
                                <p class="mb-0">Due {{ receipt.dueDate }}</p>
                            </div>
                        </div>

                        <table class="receipt-table">
                            <thead>
                                <tr>
                                    <th>Description</th>
                                    <th class="text-end">Amount</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="line in receiptLines" :key="line.description">
                                    <td>
                                        <strong>{{ line.description }}</strong>
                                        <div class="receipt-sub">{{ line.detail }}</div>
                                    </td>
                                    <td class="text-end">{{ money(line.amount) }}</td>
                                </tr>
                            </tbody>
                        </table>

                        <div class="receipt-summary">
                            <div class="receipt-stamp" :class="stampClass">{{ receipt.status.toUpperCase() }}</div>
                            <div class="receipt-totals">
                                <div class="row"><span>Total Amount</span><span>{{ money(receipt.total) }}</span></div>
                                <div class="row"><span>Amount Paid</span><span class="text-success">{{ money(receipt.paid) }}</span></div>
                                <div class="row grand"><span>Balance Due</span><span>{{ money(receipt.total - receipt.paid) }}</span></div>
                            </div>
                        </div>

                        <div class="receipt-foot">
                            <div class="receipt-notes">
                                <p class="receipt-label">Notes</p>
                                <p class="mb-0">Thank you for your business. This receipt is generated electronically and is valid without a signature.</p>
                            </div>
                            <div class="receipt-sign">
                                <p class="mb-1">Authorized Signature</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="modal-footer border-0">
                    <button type="button" class="btn btn-light" data-bs-dismiss="modal"><i class="icon-x me-1"></i>Close</button>
                    <button type="button" class="btn btn-white" @click="downloadReceipt"><i class="icon-download me-1"></i>Save as PDF</button>
                    <button type="button" class="btn btn-primary" @click="printReceipt"><i class="icon-printer me-1"></i>Print Receipt</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import BasePagination from '@/components/BasePagination.vue';
import { payments, customers, money } from '@/data/crm'
import { hideOffcanvas } from '@/utils/offcanvas'
import { showModal } from '@/utils/modal'
import { notify } from '@/utils/ui'

const RECEIPT_PRINT_CSS = `
  * { box-sizing: border-box; }
  body { margin: 0; padding: 24px; font-family: 'Segoe UI', Arial, sans-serif; color: #1f2937; }
  @page { margin: 14mm; }
  .receipt-paper { background: #fff; color: #1f2937; max-width: 820px; margin: 0 auto; }
  .receipt-head { display: flex; justify-content: space-between; align-items: flex-start; border-bottom: 2px solid #0D76E1; padding-bottom: 20px; margin-bottom: 24px; }
  .receipt-brand { display: flex; gap: 12px; align-items: center; }
  .receipt-logo { width: 44px; height: 44px; }
  .receipt-brand h5 { margin: 0; font-size: 18px; }
  .receipt-brand p { margin: 0; font-size: 12px; color: #6b7280; }
  .receipt-title { text-align: right; }
  .receipt-title h3 { margin: 0 0 6px; letter-spacing: 3px; font-size: 22px; color: #0D76E1; }
  .receipt-title p { margin: 0; font-size: 12px; }
  .receipt-grid { display: flex; gap: 24px; margin-bottom: 24px; }
  .receipt-grid > div { flex: 1; }
  .receipt-grid h6 { margin: 0 0 2px; font-size: 14px; }
  .receipt-grid p { margin: 0; font-size: 12px; color: #6b7280; }
  .receipt-label { font-size: 11px; text-transform: uppercase; letter-spacing: 1px; color: #6b7280; margin: 0 0 4px; }
  .receipt-table { width: 100%; border-collapse: collapse; margin-bottom: 20px; }
  .receipt-table th { background: #f3f4f6; text-align: left; padding: 10px 12px; font-size: 11px; text-transform: uppercase; letter-spacing: .5px; }
  .receipt-table td { padding: 12px; border-bottom: 1px solid #e5e7eb; font-size: 13px; }
  .receipt-sub { font-size: 11px; color: #6b7280; margin-top: 2px; }
  .receipt-summary { display: flex; justify-content: space-between; align-items: flex-start; }
  .receipt-stamp { display: inline-block; border: 3px solid; padding: 6px 18px; border-radius: 8px; font-weight: 800; letter-spacing: 2px; transform: rotate(-8deg); font-size: 14px; }
  .receipt-stamp.paid { color: #16a34a; border-color: #16a34a; }
  .receipt-stamp.partial { color: #d97706; border-color: #d97706; }
  .receipt-stamp.overdue { color: #dc2626; border-color: #dc2626; }
  .receipt-totals { width: 280px; }
  .receipt-totals .row { display: flex; justify-content: space-between; padding: 8px 0; font-size: 13px; }
  .receipt-totals .grand { border-top: 2px solid #1f2937; font-weight: 700; font-size: 16px; margin-top: 4px; padding-top: 12px; }
  .receipt-foot { margin-top: 32px; border-top: 1px solid #e5e7eb; padding-top: 16px; display: flex; justify-content: space-between; align-items: flex-end; gap: 24px; }
  .receipt-notes { max-width: 460px; font-size: 12px; color: #6b7280; }
  .receipt-sign { border-top: 1px solid #9ca3af; width: 200px; text-align: center; padding-top: 6px; font-size: 12px; color: #374151; }
`

export default {
    name: 'CarCrmPayments',
    components: { BasePagination },
    data() {
        return {
            payments,
            money,
            searchQuery: "",
            statusFilter: 'All',
            statusOptions: ['All', 'Paid', 'Partial', 'Overdue'],
            customerNames: customers.map(c => c.name),
            currentPage: 1,
            pageSize: 10,
            pageSizeOptions: [5, 10, 25, 50, 100],
            form: this.emptyForm(),
            receipt: null,
            receiptDate: '',
        }
    },
    methods: {
        emptyForm() {
            return { customer: null, vehicle: '', type: null, method: '', total: '', paid: '', dueDate: '' }
        },
        statusLabel(status) {
            const key = { Paid: 'paid', Partial: 'partial', Overdue: 'overdue' }[status]
            return key ? this.$t(`payments.${key}`) : status
        },
        typeLabel(type) {
            return this.$t(`payments.${type === 'Financing' ? 'financing' : 'cash'}`)
        },
        methodLabel(method) {
            return method === 'Cash' ? this.$t('payments.cash') : method
        },
        statusClass(status) {
            if (status === 'Paid') return 'badge-soft-success text-dark'
            if (status === 'Partial') return 'badge-soft-warning text-dark'
            return 'badge-soft-danger text-dark'
        },
        setStatusFilter(status) {
            this.statusFilter = status
            this.currentPage = 1
        },
        markPaid(record) {
            record.paid = record.total
            record.status = 'Paid'
            notify(this.$t('payments.markedPaid', { id: record.id }))
        },
        viewReceipt(record) {
            this.receipt = { ...record }
            this.receiptDate = new Date().toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' })
            showModal('receipt_modal')
        },
        printReceipt() {
            const el = this.$refs.receiptPaper
            if (!el) return
            const win = window.open('', '_blank')
            if (!win) {
                notify(this.$t('payments.allowPopups'), 'warning')
                return
            }
            win.document.write(`<!doctype html><html><head><meta charset="utf-8"><title>Receipt ${this.receiptNo}</title><style>${RECEIPT_PRINT_CSS}</style></head><body>${el.outerHTML}</body></html>`)
            win.document.close()
            win.focus()
            setTimeout(() => win.print(), 300)
        },
        downloadReceipt() {
            this.printReceipt()
            notify(this.$t('payments.savePdfHint'), 'info')
        },
        addPayment() {
            const total = Number(this.form.total)
            const paid = Number(this.form.paid)
            if (!this.form.customer || !Number.isFinite(total) || total <= 0 || !Number.isFinite(paid) || paid < 0 || paid > total) {
                notify(this.$t('payments.invalidPayment'), 'warning')
                return
            }
            let status = 'Partial'
            if (paid >= total) status = 'Paid'
            else if (paid === 0) status = 'Overdue'
            this.payments.unshift({
                id: `PM-${Math.max(7700, ...this.payments.map(payment => Number(String(payment.id).replace(/^PM-/, '')) || 0)) + 1}`,
                customer: this.form.customer,
                vehicle: this.form.vehicle || '—',
                type: this.form.type || 'Cash',
                method: this.form.method,
                total,
                paid,
                dueDate: this.form.dueDate,
                status,
            })
            this.form = this.emptyForm()
            this.currentPage = 1
            hideOffcanvas('add_payment')
        },
        onPageChange(page) { this.currentPage = page },
        onPageSizeChange(size) { this.pageSize = Number(size); this.currentPage = 1 },
    },
    watch: {
        searchQuery() { this.currentPage = 1 },
    },
    computed: {
        columns() {
            return [
                { title: this.$t('payments.payment'), dataIndex: 'id', key: 'Payment', sorter: false, visible: true },
                { title: this.$t('payments.vehicle'), dataIndex: 'vehicle', key: 'Vehicle', sorter: false, visible: true },
                { title: this.$t('payments.total'), dataIndex: 'total', key: 'Total', sorter: false, visible: true },
                { title: this.$t('payments.amountPaid'), dataIndex: 'paid', key: 'Paid', sorter: false, visible: true },
                { title: this.$t('payments.balance'), dataIndex: 'balance', key: 'Balance', sorter: false, visible: true },
                { title: this.$t('payments.dueDate'), dataIndex: 'dueDate', key: 'dueDate', sorter: false, visible: true },
                { title: this.$t('payments.status'), dataIndex: 'status', key: 'Status', sorter: false, visible: true },
                { title: this.$t('payments.action'), dataIndex: 'Action', key: 'Action', sorter: false, visible: true },
            ]
        },
        receiptNo() {
            return this.receipt ? 'RCT-' + this.receipt.id : ''
        },
        receiptLines() {
            if (!this.receipt) return []
            return [{
                description: this.receipt.vehicle,
                detail: `${this.receipt.type} payment via ${this.receipt.method}`,
                amount: this.receipt.total,
            }]
        },
        stampClass() {
            if (!this.receipt) return ''
            const status = this.receipt.status.toLowerCase()
            if (status === 'paid') return 'paid'
            if (status === 'partial') return 'partial'
            return 'overdue'
        },
        totalBilled() {
            return this.payments.reduce((sum, p) => sum + p.total, 0)
        },
        totalPaid() {
            return this.payments.reduce((sum, p) => sum + p.paid, 0)
        },
        filteredPages() {
            const query = this.searchQuery.trim().toLowerCase()
            return this.payments.filter((record) => {
                const matchesQuery =
                    String(record.customer || '').toLowerCase().includes(query) ||
                    String(record.vehicle || '').toLowerCase().includes(query) ||
                    String(record.id || '').toLowerCase().includes(query)
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
.receipt-modal {
    border: 0;
}
.receipt-paper {
    background: #fff;
    color: #1f2937;
    padding: 32px;
    border-radius: 8px;
}
.receipt-head {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    border-bottom: 2px solid #0D76E1;
    padding-bottom: 20px;
    margin-bottom: 24px;
    gap: 16px;
    flex-wrap: wrap;
}
.receipt-brand {
    display: flex;
    gap: 12px;
    align-items: center;
}
.receipt-logo {
    width: 44px;
    height: 44px;
}
.receipt-brand h5 {
    font-size: 18px;
}
.receipt-brand p {
    font-size: 12px;
    color: #6b7280;
}
.receipt-title {
    text-align: right;
}
.receipt-title h3 {
    letter-spacing: 3px;
    font-size: 22px;
    color: #0D76E1;
    margin-bottom: 6px;
}
.receipt-title p {
    font-size: 12px;
}
.receipt-grid {
    display: flex;
    gap: 24px;
    margin-bottom: 24px;
    flex-wrap: wrap;
}
.receipt-grid > div {
    flex: 1;
    min-width: 140px;
}
.receipt-grid h6 {
    font-size: 14px;
}
.receipt-grid p {
    font-size: 12px;
    color: #6b7280;
}
.receipt-label {
    font-size: 11px;
    text-transform: uppercase;
    letter-spacing: 1px;
    color: #6b7280;
    margin-bottom: 4px;
}
.receipt-table {
    width: 100%;
    border-collapse: collapse;
    margin-bottom: 20px;
}
.receipt-table th {
    background: #f3f4f6;
    text-align: left;
    padding: 10px 12px;
    font-size: 11px;
    text-transform: uppercase;
    letter-spacing: 0.5px;
}
.receipt-table td {
    padding: 12px;
    border-bottom: 1px solid #e5e7eb;
    font-size: 13px;
}
.receipt-sub {
    font-size: 11px;
    color: #6b7280;
    margin-top: 2px;
}
.receipt-summary {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    gap: 16px;
    flex-wrap: wrap;
}
.receipt-stamp {
    display: inline-block;
    border: 3px solid;
    padding: 6px 18px;
    border-radius: 8px;
    font-weight: 800;
    letter-spacing: 2px;
    transform: rotate(-8deg);
    font-size: 14px;
}
.receipt-stamp.paid {
    color: #16a34a;
    border-color: #16a34a;
}
.receipt-stamp.partial {
    color: #d97706;
    border-color: #d97706;
}
.receipt-stamp.overdue {
    color: #dc2626;
    border-color: #dc2626;
}
.receipt-totals {
    width: 280px;
    max-width: 100%;
}
.receipt-totals .row {
    display: flex;
    justify-content: space-between;
    padding: 8px 0;
    font-size: 13px;
}
.receipt-totals .grand {
    border-top: 2px solid #1f2937;
    font-weight: 700;
    font-size: 16px;
    margin-top: 4px;
    padding-top: 12px;
}
.receipt-foot {
    margin-top: 32px;
    border-top: 1px solid #e5e7eb;
    padding-top: 16px;
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    gap: 24px;
    flex-wrap: wrap;
}
.receipt-notes {
    max-width: 460px;
    font-size: 12px;
    color: #6b7280;
}
.receipt-sign {
    border-top: 1px solid #9ca3af;
    width: 200px;
    text-align: center;
    padding-top: 6px;
    font-size: 12px;
    color: #374151;
}
</style>
