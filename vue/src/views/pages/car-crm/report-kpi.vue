<template>
    <div class="page-wrapper">
        <div class="content">
            <layout-header></layout-header>

            <div class="content-wrap">
                <div class="d-flex align-items-center flex-wrap gap-3 border-bottom pb-4 mb-4">
                    <div class="flex-grow-1">
                        <h4 class="mb-1">{{ $t('reports.kpiTitle') }}</h4>
                        <p class="text-muted mb-0">{{ $t('reports.kpiSubtitle') }}</p>
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
                                <h6 class="mb-2 text-muted">{{ $t('common.target') }} ({{ $t('reports.units') }})</h6>
                                <h3 class="mb-0 text-dark fw-bold">{{ totals.target }}</h3>
                            </div>
                        </div>
                    </div>
                    <div class="col-xxl-3 col-md-6">
                        <div class="card dash-card mb-0">
                            <div class="card-body">
                                <h6 class="mb-2 text-muted">{{ $t('common.actual') }} ({{ $t('reports.units') }})</h6>
                                <h3 class="mb-0 text-dark fw-bold">{{ totals.actual }}</h3>
                            </div>
                        </div>
                    </div>
                    <div class="col-xxl-3 col-md-6">
                        <div class="card dash-card mb-0">
                            <div class="card-body">
                                <h6 class="mb-2 text-muted">Achievement</h6>
                                <h3 class="mb-0 fw-bold" :class="achievement(totals.actual, totals.target) >= 100 ? 'text-success' : 'text-danger'">
                                    {{ achievement(totals.actual, totals.target) }}%
                                </h3>
                            </div>
                        </div>
                    </div>
                    <div class="col-xxl-3 col-md-6">
                        <div class="card dash-card mb-0">
                            <div class="card-body">
                                <h6 class="mb-2 text-muted">{{ $t('common.commission') }} + {{ $t('common.bonus') }}</h6>
                                <h3 class="mb-0 text-success fw-bold">{{ money(totalPayout) }}</h3>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="card mb-4">
                    <div class="card-body">
                        <div class="card-header pt-0 ps-0 pe-0 mb-4">
                            <h5 class="mb-0">{{ $t('common.target') }} vs {{ $t('common.actual') }}</h5>
                        </div>
                        <apexchart type="bar" height="320" :options="chart.chartOptions" :series="chart.series"></apexchart>
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
                                        <th>{{ $t('common.target') }}</th>
                                        <th>{{ $t('common.actual') }}</th>
                                        <th>Achievement</th>
                                        <th>{{ $t('common.commission') }}</th>
                                        <th>{{ $t('common.bonus') }}</th>
                                        <th class="text-end">{{ $t('common.payout') }}</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr v-for="s in sellers" :key="s.name">
                                        <td>
                                            <h6 class="fs-14 fw-semibold mb-0">{{ s.name }}</h6>
                                            <span class="fs-13">{{ s.team }}</span>
                                        </td>
                                        <td>{{ s.target }}</td>
                                        <td>{{ s.actual }}</td>
                                        <td>
                                            <span class="badge" :class="achievement(s.actual, s.target) >= 100 ? 'badge-soft-success text-dark' : 'badge-soft-danger text-dark'">
                                                {{ achievement(s.actual, s.target) }}%
                                            </span>
                                        </td>
                                        <td>{{ money(commissionOf(s)) }}</td>
                                        <td>{{ money(bonusOf(s)) }}</td>
                                        <td class="text-end fw-semibold">{{ money(commissionOf(s) + bonusOf(s)) }}</td>
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
import { targets, money, achievement } from '@/data/crm'
import { commissionConfig } from '@/data/commissionConfig'
import { exportReportPdf, exportReportXls } from '@/utils/report'
import { notify } from '@/utils/ui'

export default {
    name: 'ReportKpi',
    data() {
        return { money, achievement }
    },
    computed: {
        sellers() {
            return targets.map((t) => {
                const c = commissionConfig.find((x) => x.name === t.name && x.active) || {}
                return {
                    ...t,
                    target: c.unitTarget ?? t.target,
                    commissionRate: c.commissionRate ?? 1.0,
                    targetBonus: c.targetBonus ?? 200,
                    bonusPerExtra: c.bonusPerExtra ?? 100,
                }
            })
        },
        totals() {
            return {
                target: this.sellers.reduce((s, t) => s + t.target, 0),
                actual: this.sellers.reduce((s, t) => s + t.actual, 0),
            }
        },
        totalPayout() {
            return this.sellers.reduce((s, t) => s + this.commissionOf(t) + this.bonusOf(t), 0)
        },
        chart() {
            return {
                series: [
                    { name: this.$t('common.target'), data: this.sellers.map((t) => t.target) },
                    { name: this.$t('common.actual'), data: this.sellers.map((t) => t.actual) },
                ],
                chartOptions: {
                    chart: { type: 'bar', height: 320, toolbar: { show: false }, fontFamily: 'inherit' },
                    plotOptions: { bar: { borderRadius: 6, columnWidth: '55%' } },
                    colors: ['#cbd5e1', '#0D76E1'],
                    dataLabels: { enabled: false },
                    xaxis: {
                        categories: this.sellers.map((t) => t.name),
                        axisBorder: { show: false },
                        axisTicks: { show: false },
                        labels: { style: { fontSize: '11px' } },
                    },
                    grid: { borderColor: 'var(--bs-border-color)', strokeDashArray: 4 },
                    legend: { position: 'top', horizontalAlign: 'right' },
                },
            }
        },
    },
    methods: {
        commissionOf(s) {
            return Math.round(s.revenueActual * (s.commissionRate / 100))
        },
        bonusOf(s) {
            if (s.actual < s.target) return 0
            return (s.targetBonus ?? 200) + Math.max(0, s.actual - s.target) * (s.bonusPerExtra ?? 100)
        },
        reportColumns() {
            return [
                { title: 'Seller', key: 'name' },
                { title: 'Team', key: 'team' },
                { title: 'Target', key: 'target' },
                { title: 'Actual', key: 'actual' },
                { title: 'Commission', key: 'commission', type: 'money' },
                { title: 'Bonus', key: 'bonus', type: 'money' },
            ]
        },
        reportRows() {
            return this.sellers.map((s) => ({
                name: s.name,
                team: s.team,
                target: s.target,
                actual: s.actual,
                commission: this.commissionOf(s),
                bonus: this.bonusOf(s),
            }))
        },
        reportSummary() {
            return [
                { label: this.$t('common.target'), value: String(this.totals.target) },
                { label: this.$t('common.actual'), value: String(this.totals.actual) },
                { label: 'Achievement', value: this.achievement(this.totals.actual, this.totals.target) + '%' },
                { label: this.$t('common.payout'), value: this.money(this.totalPayout) },
            ]
        },
        exportExcel() {
            exportReportXls({
                title: this.$t('reports.kpiTitle'),
                subtitle: this.$t('reports.kpiSubtitle'),
                columns: this.reportColumns(),
                rows: this.reportRows(),
                filename: 'targets-kpi-report',
            })
            notify('KPI report exported as Excel (.xls)')
        },
        exportPdf() {
            exportReportPdf({
                title: this.$t('reports.kpiTitle'),
                subtitle: this.$t('reports.kpiSubtitle'),
                summary: this.reportSummary(),
                columns: this.reportColumns(),
                rows: this.reportRows(),
            })
            notify('KPI report opened for printing')
        },
    },
}
</script>
