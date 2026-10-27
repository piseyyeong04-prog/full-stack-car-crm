<template>
    <div class="page-wrapper">
        <div class="content">
            <layout-header></layout-header>

            <div class="content-wrap">
                <div class="d-flex align-items-center flex-wrap gap-3 border-bottom pb-4 mb-4">
                    <div class="flex-grow-1">
                        <h4 class="mb-1">{{ $t('reports.salesTitle') }}</h4>
                        <p class="text-muted mb-0">{{ $t('reports.salesSubtitle') }}</p>
                    </div>
                    <div class="d-flex align-items-center gap-2">
                        <div class="dropdown">
                            <a href="javascript:void(0);" class="dropdown-toggle btn btn-white d-inline-flex align-items-center"
                                data-bs-toggle="dropdown">
                                <i class="icon-calendar me-1"></i>{{ $t('reports.' + period) }}
                            </a>
                            <ul class="dropdown-menu dropdown-menu-end p-3">
                                <li v-for="p in periods" :key="p">
                                    <a href="javascript:void(0);" class="dropdown-item rounded" @click="period = p">{{ $t('reports.' + p) }}</a>
                                </li>
                            </ul>
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
                </div>

                <div class="row g-4 mb-4">
                    <div class="col-xxl-3 col-md-6">
                        <div class="card dash-card mb-0">
                            <div class="card-body">
                                <h6 class="mb-2 text-muted">{{ $t('reports.salesAmount') }}</h6>
                                <h3 class="mb-0 text-dark fw-bold">{{ money(totalSales) }}</h3>
                            </div>
                        </div>
                    </div>
                    <div class="col-xxl-3 col-md-6">
                        <div class="card dash-card mb-0">
                            <div class="card-body">
                                <h6 class="mb-2 text-muted">{{ $t('reports.units') }}</h6>
                                <h3 class="mb-0 text-dark fw-bold">{{ units }}</h3>
                            </div>
                        </div>
                    </div>
                    <div class="col-xxl-3 col-md-6">
                        <div class="card dash-card mb-0">
                            <div class="card-body">
                                <h6 class="mb-2 text-muted">{{ $t('reports.collected') }}</h6>
                                <h3 class="mb-0 text-success fw-bold">{{ money(collected) }}</h3>
                            </div>
                        </div>
                    </div>
                    <div class="col-xxl-3 col-md-6">
                        <div class="card dash-card mb-0">
                            <div class="card-body">
                                <h6 class="mb-2 text-muted">{{ $t('reports.outstanding') }}</h6>
                                <h3 class="mb-0 text-danger fw-bold">{{ money(outstanding) }}</h3>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="row g-4 mb-4">
                    <div class="col-xxl-8">
                        <div class="card flex-fill mb-0">
                            <div class="card-body">
                                <div class="card-header pt-0 ps-0 pe-0 mb-4">
                                    <h5 class="mb-0">{{ $t('reports.salesAmount') }}</h5>
                                </div>
                                <apexchart type="bar" height="300" :options="chart.chartOptions" :series="chart.series"></apexchart>
                            </div>
                        </div>
                    </div>
                    <div class="col-xxl-4">
                        <div class="card flex-fill mb-0">
                            <div class="card-body">
                                <div class="card-header pt-0 ps-0 pe-0 mb-4">
                                    <h5 class="mb-0">{{ $t('reports.leadSource') }}</h5>
                                </div>
                                <apexchart type="donut" height="300" :options="typeChart.chartOptions" :series="typeChart.series"></apexchart>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="card">
                    <div class="card-body">
                        <div class="card-header pt-0 ps-0 pe-0 mb-4">
                            <h5 class="mb-0">{{ $t('common.seller') }}</h5>
                        </div>
                        <div class="table-responsive table-nowrap">
                            <table class="table mb-0">
                                <thead class="table-light">
                                    <tr>
                                        <th class="no-sort">{{ $t('common.seller') }}</th>
                                        <th>Team</th>
                                        <th>{{ $t('reports.units') }}</th>
                                        <th>{{ $t('reports.salesAmount') }}</th>
                                        <th>Share</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr v-for="s in bySeller" :key="s.name">
                                        <td class="fw-semibold">{{ s.name }}</td>
                                        <td>{{ s.team }}</td>
                                        <td>{{ s.units }}</td>
                                        <td>{{ money(s.amount) }}</td>
                                        <td>
                                            <div class="d-flex align-items-center gap-2">
                                                <div class="progress flex-grow-1" style="height: 6px;">
                                                    <div class="progress-bar bg-primary" :style="{ width: s.share + '%' }"></div>
                                                </div>
                                                <span class="fs-13 fw-semibold">{{ s.share }}%</span>
                                            </div>
                                        </td>
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
import { commissionSales, payments, money } from '@/data/crm'
import { exportReportPdf, exportReportXls } from '@/utils/report'
import { notify } from '@/utils/ui'

export default {
    name: 'ReportSales',
    data() {
        return {
            money,
            period: 'monthly',
            periods: ['daily', 'weekly', 'monthly', 'yearly'],
        }
    },
    computed: {
        totalSales() {
            return commissionSales.reduce((s, x) => s + x.amount, 0)
        },
        units() {
            return commissionSales.length
        },
        collected() {
            return payments.reduce((s, p) => s + p.paid, 0)
        },
        outstanding() {
            return payments.reduce((s, p) => s + (p.total - p.paid), 0)
        },
        monthly() {
            const map = {}
            commissionSales.forEach((s) => {
                const m = s.date.split(' ')[1]
                map[m] = (map[m] || 0) + s.amount
            })
            const order = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
            const cats = order.filter((m) => map[m])
            return { cats, data: cats.map((m) => map[m]) }
        },
        bySeller() {
            const map = {}
            commissionSales.forEach((s) => {
                if (!map[s.owner]) map[s.owner] = { name: s.owner, team: s.team, units: 0, amount: 0 }
                map[s.owner].units += 1
                map[s.owner].amount += s.amount
            })
            const arr = Object.values(map).sort((a, b) => b.amount - a.amount)
            const total = arr.reduce((x, y) => x + y.amount, 0) || 1
            return arr.map((r) => ({ ...r, share: Math.round((r.amount / total) * 100) }))
        },
        chart() {
            return {
                series: [{ name: this.$t('reports.salesAmount'), data: this.monthly.data }],
                chartOptions: {
                    chart: { type: 'bar', height: 300, toolbar: { show: false }, fontFamily: 'inherit' },
                    plotOptions: { bar: { borderRadius: 6, columnWidth: '50%' } },
                    colors: ['#0D76E1'],
                    dataLabels: { enabled: false },
                    xaxis: {
                        categories: this.monthly.cats.map((c) => this.$t('dashboard.months.' + c)),
                        axisBorder: { show: false },
                        axisTicks: { show: false },
                    },
                    grid: { borderColor: 'var(--bs-border-color)', strokeDashArray: 4 },
                },
            }
        },
        typeChart() {
            const cash = commissionSales.filter((s) => s.type === 'Cash').length
            const fin = commissionSales.filter((s) => s.type === 'Financing').length
            return {
                series: [cash, fin],
                chartOptions: {
                    chart: { type: 'donut', height: 300, fontFamily: 'inherit' },
                    labels: ['Cash', 'Financing'],
                    colors: ['#0D76E1', '#13B5C9'],
                    legend: { position: 'bottom' },
                    dataLabels: { enabled: false },
                    plotOptions: { pie: { donut: { size: '70%' } } },
                    stroke: { colors: ['var(--bs-body-bg)'], width: 2 },
                },
            }
        },
    },
    methods: {
        reportColumns() {
            return [
                { title: 'Seller', key: 'name' },
                { title: 'Team', key: 'team' },
                { title: 'Units', key: 'units' },
                { title: 'Sales Amount', key: 'amount', type: 'money' },
                { title: 'Share %', key: 'share' },
            ]
        },
        reportSummary() {
            return [
                { label: this.$t('reports.salesAmount'), value: this.money(this.totalSales) },
                { label: this.$t('reports.units'), value: String(this.units) },
                { label: this.$t('reports.collected'), value: this.money(this.collected) },
                { label: this.$t('reports.outstanding'), value: this.money(this.outstanding) },
            ]
        },
        exportExcel() {
            exportReportXls({
                title: this.$t('reports.salesTitle'),
                subtitle: this.$t('reports.salesSubtitle'),
                columns: this.reportColumns(),
                rows: this.bySeller,
                filename: 'sales-revenue-report',
            })
            notify('Sales report exported as Excel (.xls)')
        },
        exportPdf() {
            exportReportPdf({
                title: this.$t('reports.salesTitle'),
                subtitle: this.$t('reports.salesSubtitle'),
                summary: this.reportSummary(),
                columns: this.reportColumns(),
                rows: this.bySeller,
                meta: { Period: this.$t('reports.' + this.period) },
            })
            notify('Sales report opened for printing')
        },
    },
}
</script>
