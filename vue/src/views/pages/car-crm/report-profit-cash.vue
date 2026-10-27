<template>
    <div class="page-wrapper">
        <div class="content">
            <layout-header></layout-header>

            <div class="content-wrap">
                <div class="d-flex align-items-center flex-wrap gap-3 border-bottom pb-4 mb-4">
                    <div class="flex-grow-1">
                        <h4 class="mb-1">{{ $t('reports.profitTitle') }}</h4>
                        <p class="text-muted mb-0">{{ $t('reports.profitSubtitle') }}</p>
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
                                <h6 class="mb-2 text-muted">{{ $t('reports.salesAmount') }}</h6>
                                <h3 class="mb-0 text-dark fw-bold">{{ money(revenue) }}</h3>
                            </div>
                        </div>
                    </div>
                    <div class="col-xxl-3 col-md-6">
                        <div class="card dash-card mb-0">
                            <div class="card-body">
                                <h6 class="mb-2 text-muted">{{ $t('reports.cost') }}</h6>
                                <h3 class="mb-0 text-dark fw-bold">{{ money(cost) }}</h3>
                            </div>
                        </div>
                    </div>
                    <div class="col-xxl-3 col-md-6">
                        <div class="card dash-card mb-0">
                            <div class="card-body">
                                <h6 class="mb-2 text-muted">{{ $t('reports.profit') }}</h6>
                                <h3 class="mb-0 text-success fw-bold">{{ money(profit) }}</h3>
                            </div>
                        </div>
                    </div>
                    <div class="col-xxl-3 col-md-6">
                        <div class="card dash-card mb-0">
                            <div class="card-body">
                                <h6 class="mb-2 text-muted">{{ $t('reports.cashCollected') }}</h6>
                                <h3 class="mb-0 text-success fw-bold">{{ money(cashCollected) }}</h3>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="row g-4 mb-4">
                    <div class="col-xxl-7">
                        <div class="card flex-fill mb-0">
                            <div class="card-body">
                                <div class="card-header pt-0 ps-0 pe-0 mb-4">
                                    <h5 class="mb-0">{{ $t('reports.profit') }} by Model</h5>
                                </div>
                                <apexchart type="bar" height="300" :options="chart.chartOptions" :series="chart.series"></apexchart>
                            </div>
                        </div>
                    </div>
                    <div class="col-xxl-5">
                        <div class="card flex-fill mb-0">
                            <div class="card-body">
                                <div class="card-header pt-0 ps-0 pe-0 mb-4">
                                    <h5 class="mb-0">Summary</h5>
                                </div>
                                <div class="d-flex align-items-center justify-content-between mb-3">
                                    <span>{{ $t('reports.salesAmount') }}</span><span class="fw-semibold">{{ money(revenue) }}</span>
                                </div>
                                <div class="d-flex align-items-center justify-content-between mb-3">
                                    <span>{{ $t('reports.cost') }}</span><span class="fw-semibold text-danger">-{{ money(cost) }}</span>
                                </div>
                                <div class="d-flex align-items-center justify-content-between mb-3 border-top pt-3">
                                    <span class="fw-semibold">{{ $t('reports.profit') }}</span><span class="fw-semibold text-success">{{ money(profit) }}</span>
                                </div>
                                <div class="d-flex align-items-center justify-content-between mb-3">
                                    <span>{{ $t('reports.margin') }}</span>
                                    <span class="badge bg-soft-success text-dark">{{ margin }}%</span>
                                </div>
                                <div class="d-flex align-items-center justify-content-between">
                                    <span>{{ $t('reports.cashCollected') }}</span><span class="fw-semibold">{{ money(cashCollected) }}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="card">
                    <div class="card-body">
                        <div class="card-header pt-0 ps-0 pe-0 mb-4">
                            <h5 class="mb-0">{{ $t('common.vehicle') }}</h5>
                        </div>
                        <div class="table-responsive table-nowrap">
                            <table class="table mb-0">
                                <thead class="table-light">
                                    <tr>
                                        <th class="no-sort">{{ $t('common.vehicle') }}</th>
                                        <th>{{ $t('common.status') }}</th>
                                        <th>{{ $t('reports.cost') }}</th>
                                        <th>{{ $t('reports.salesAmount') }}</th>
                                        <th>{{ $t('reports.profit') }}</th>
                                        <th class="text-end">{{ $t('reports.margin') }}</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr v-for="v in rows" :key="v.id">
                                        <td>
                                            <h6 class="fs-14 fw-semibold mb-0">{{ v.brand }} {{ v.model }}</h6>
                                            <span class="fs-13">{{ v.vin }}</span>
                                        </td>
                                        <td><span class="badge bg-light text-dark">{{ v.status }}</span></td>
                                        <td>{{ money(v.cost) }}</td>
                                        <td>{{ money(v.price) }}</td>
                                        <td class="text-success fw-semibold">{{ money(v.price - v.cost) }}</td>
                                        <td class="text-end">{{ v.margin }}%</td>
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
import { vehicles, payments, money } from '@/data/crm'
import { exportReportPdf, exportReportXls } from '@/utils/report'
import { notify } from '@/utils/ui'

export default {
    name: 'ReportProfitCash',
    data() {
        return { money }
    },
    computed: {
        rows() {
            return vehicles.map((v) => ({
                ...v,
                margin: v.price ? Math.round(((v.price - v.cost) / v.price) * 100) : 0,
            }))
        },
        revenue() {
            return this.rows.reduce((s, v) => s + v.price, 0)
        },
        cost() {
            return this.rows.reduce((s, v) => s + v.cost, 0)
        },
        profit() {
            return this.revenue - this.cost
        },
        margin() {
            return this.revenue ? Math.round((this.profit / this.revenue) * 100) : 0
        },
        cashCollected() {
            return payments.reduce((s, p) => s + p.paid, 0)
        },
        byModel() {
            const map = {}
            this.rows.forEach((v) => {
                const key = `${v.brand} ${v.model}`
                map[key] = (map[key] || 0) + (v.price - v.cost)
            })
            return Object.entries(map).sort((a, b) => b[1] - a[1])
        },
        chart() {
            return {
                series: [{ name: this.$t('reports.profit'), data: this.byModel.map((x) => x[1]) }],
                chartOptions: {
                    chart: { type: 'bar', height: 300, toolbar: { show: false }, fontFamily: 'inherit' },
                    plotOptions: { bar: { borderRadius: 6, horizontal: true, barHeight: '55%' } },
                    colors: ['#14B51D'],
                    dataLabels: { enabled: false },
                    xaxis: {
                        categories: this.byModel.map((x) => x[0]),
                        axisBorder: { show: false },
                        axisTicks: { show: false },
                    },
                    grid: { borderColor: 'var(--bs-border-color)', strokeDasharray: 4 },
                },
            }
        },
    },
    methods: {
        reportColumns() {
            return [
                { title: 'Vehicle', key: 'vehicle' },
                { title: 'Status', key: 'status' },
                { title: 'Cost', key: 'cost', type: 'money' },
                { title: 'Price', key: 'price', type: 'money' },
                { title: 'Profit', key: 'profit', type: 'money' },
                { title: 'Margin %', key: 'margin' },
            ]
        },
        reportRows() {
            return this.rows.map((v) => ({
                vehicle: `${v.brand} ${v.model}`,
                status: v.status,
                cost: v.cost,
                price: v.price,
                profit: v.price - v.cost,
                margin: v.margin,
            }))
        },
        reportSummary() {
            return [
                { label: this.$t('reports.salesAmount'), value: this.money(this.revenue) },
                { label: this.$t('reports.cost'), value: this.money(this.cost) },
                { label: this.$t('reports.profit'), value: this.money(this.profit) },
                { label: this.$t('reports.cashCollected'), value: this.money(this.cashCollected) },
            ]
        },
        exportExcel() {
            exportReportXls({
                title: this.$t('reports.profitTitle'),
                subtitle: this.$t('reports.profitSubtitle'),
                columns: this.reportColumns(),
                rows: this.reportRows(),
                filename: 'profit-cash-report',
            })
            notify('Profit report exported as Excel (.xls)')
        },
        exportPdf() {
            exportReportPdf({
                title: this.$t('reports.profitTitle'),
                subtitle: this.$t('reports.profitSubtitle'),
                summary: this.reportSummary(),
                columns: this.reportColumns(),
                rows: this.reportRows(),
            })
            notify('Profit report opened for printing')
        },
    },
}
</script>
