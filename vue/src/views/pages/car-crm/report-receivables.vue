<template>
    <div class="page-wrapper">
        <div class="content">
            <layout-header></layout-header>

            <div class="content-wrap">
                <div class="d-flex align-items-center flex-wrap gap-3 border-bottom pb-4 mb-4">
                    <div class="flex-grow-1">
                        <h4 class="mb-1">{{ $t('reports.receivablesTitle') }}</h4>
                        <p class="text-muted mb-0">{{ $t('reports.receivablesSubtitle') }}</p>
                    </div>
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

                <div class="row g-4 mb-4">
                    <div class="col-xxl-3 col-md-6">
                        <div class="card dash-card mb-0">
                            <div class="card-body">
                                <h6 class="mb-2 text-muted">{{ $t('reports.outstanding') }}</h6>
                                <h3 class="mb-0 text-dark fw-bold">{{ money(totalReceivable) }}</h3>
                            </div>
                        </div>
                    </div>
                    <div class="col-xxl-3 col-md-6">
                        <div class="card dash-card mb-0">
                            <div class="card-body">
                                <h6 class="mb-2 text-muted">{{ $t('reports.overdue') }} ({{ $t('reports.outstanding') }})</h6>
                                <h3 class="mb-0 text-danger fw-bold">{{ money(overdueReceivable) }}</h3>
                            </div>
                        </div>
                    </div>
                    <div class="col-xxl-3 col-md-6">
                        <div class="card dash-card mb-0">
                            <div class="card-body">
                                <h6 class="mb-2 text-muted">{{ $t('reports.balance') }} (Supplier)</h6>
                                <h3 class="mb-0 text-dark fw-bold">{{ money(totalPayable) }}</h3>
                            </div>
                        </div>
                    </div>
                    <div class="col-xxl-3 col-md-6">
                        <div class="card dash-card mb-0">
                            <div class="card-body">
                                <h6 class="mb-2 text-muted">{{ $t('reports.overdue') }} (Supplier)</h6>
                                <h3 class="mb-0 text-warning fw-bold">{{ money(overduePayable) }}</h3>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="card mb-4">
                    <div class="card-body">
                        <div class="card-header pt-0 ps-0 pe-0 mb-4">
                            <h5 class="mb-0">Customer Receivables</h5>
                        </div>
                        <div class="table-responsive table-nowrap">
                            <table class="table mb-0">
                                <thead class="table-light">
                                    <tr>
                                        <th class="no-sort">{{ $t('common.customer') }}</th>
                                        <th>{{ $t('common.vehicle') }}</th>
                                        <th>{{ $t('common.total') }}</th>
                                        <th>{{ $t('common.paid') }}</th>
                                        <th>{{ $t('reports.balance') }}</th>
                                        <th>Due</th>
                                        <th class="no-sort">{{ $t('common.status') }}</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr v-for="r in receivables" :key="r.id">
                                        <td class="fw-semibold">{{ r.customer }}</td>
                                        <td>{{ r.vehicle }}</td>
                                        <td>{{ money(r.total) }}</td>
                                        <td class="text-success">{{ money(r.paid) }}</td>
                                        <td class="fw-semibold" :class="r.balance > 0 ? 'text-danger' : 'text-success'">{{ money(r.balance) }}</td>
                                        <td>{{ r.dueDate }}</td>
                                        <td>
                                            <span class="badge" :class="r.overdue ? 'badge-soft-danger text-dark' : 'badge-soft-success text-dark'">
                                                {{ r.overdue ? $t('reports.overdue') : $t('common.paid') }}
                                            </span>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>

                <div class="card">
                    <div class="card-body">
                        <div class="card-header pt-0 ps-0 pe-0 mb-4">
                            <h5 class="mb-0">Supplier Payables</h5>
                        </div>
                        <div class="table-responsive table-nowrap">
                            <table class="table mb-0">
                                <thead class="table-light">
                                    <tr>
                                        <th class="no-sort">Supplier</th>
                                        <th>Reference</th>
                                        <th>{{ $t('common.total') }}</th>
                                        <th>Paid / Deposit</th>
                                        <th>{{ $t('reports.balance') }}</th>
                                        <th class="no-sort">{{ $t('common.status') }}</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr v-for="p in payables" :key="p.id">
                                        <td class="fw-semibold">{{ p.supplier }}</td>
                                        <td>{{ p.id }}</td>
                                        <td>{{ money(p.total) }}</td>
                                        <td class="text-success">{{ money(p.paid) }}</td>
                                        <td class="fw-semibold text-warning">{{ money(p.total - p.paid) }}</td>
                                        <td><span class="badge bg-light text-dark">{{ p.status }}</span></td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { payments, purchases, money } from '@/data/crm'
import { partsOrders } from '@/data/after-sales'
import { exportReportPdf, exportReportXls } from '@/utils/report'
import { notify } from '@/utils/ui'

export default {
    name: 'ReportReceivables',
    data() {
        return { money }
    },
    computed: {
        receivables() {
            return payments.map((p) => ({
                ...p,
                balance: p.total - p.paid,
                overdue: p.status === 'Overdue' || p.status === 'Partial',
            }))
        },
        totalReceivable() {
            return this.receivables.reduce((s, r) => s + r.balance, 0)
        },
        overdueReceivable() {
            return this.receivables.filter((r) => r.overdue).reduce((s, r) => s + r.balance, 0)
        },
        payables() {
            const fromPurchases = purchases.map((p) => ({
                id: p.id,
                supplier: p.supplier,
                total: p.amount,
                paid: p.deposit,
                status: p.status,
                overdue: p.status === 'Pending Approval',
            }))
            const fromParts = partsOrders.map((p) => ({
                id: p.id,
                supplier: p.supplier,
                total: p.amount,
                paid: p.status === 'Received' ? p.amount : 0,
                status: p.status,
                overdue: p.status === 'Pending',
            }))
            return [...fromPurchases, ...fromParts].filter((p) => p.total - p.paid > 0)
        },
        totalPayable() {
            return this.payables.reduce((s, p) => s + (p.total - p.paid), 0)
        },
        overduePayable() {
            return this.payables.filter((p) => p.overdue).reduce((s, p) => s + (p.total - p.paid), 0)
        },
    },
    methods: {
        reportColumns() {
            return [
                { title: 'Customer', key: 'customer' },
                { title: 'Vehicle', key: 'vehicle' },
                { title: 'Total', key: 'total', type: 'money' },
                { title: 'Paid', key: 'paid', type: 'money' },
                { title: 'Balance', key: 'balance', type: 'money' },
                { title: 'Due', key: 'dueDate' },
            ]
        },
        reportSummary() {
            return [
                { label: this.$t('reports.outstanding'), value: this.money(this.totalReceivable) },
                { label: this.$t('reports.overdue'), value: this.money(this.overdueReceivable) },
                { label: 'Supplier Balance', value: this.money(this.totalPayable) },
                { label: 'Supplier Overdue', value: this.money(this.overduePayable) },
            ]
        },
        exportExcel() {
            exportReportXls({
                title: this.$t('reports.receivablesTitle'),
                subtitle: this.$t('reports.receivablesSubtitle'),
                columns: this.reportColumns(),
                rows: this.receivables,
                filename: 'receivables-report',
            })
            notify('Receivables report exported as Excel (.xls)')
        },
        exportPdf() {
            exportReportPdf({
                title: this.$t('reports.receivablesTitle'),
                subtitle: this.$t('reports.receivablesSubtitle'),
                summary: this.reportSummary(),
                columns: this.reportColumns(),
                rows: this.receivables,
            })
            notify('Receivables report opened for printing')
        },
    },
}
</script>
