<template>
    <div class="page-wrapper">
        <div class="content">
            <layout-header></layout-header>

            <div class="content-wrap">
                <div class="d-flex align-items-center flex-wrap gap-3 border-bottom pb-4 mb-4">
                    <div class="flex-grow-1">
                        <h4 class="mb-1">Targets &amp; KPI</h4>
                        <p class="text-muted mb-0">Policy-based targets, actual results and achievement.</p>
                    </div>
                    <div class="dropdown">
                        <a href="javascript:void(0);" class="dropdown-toggle btn btn-dark d-inline-flex align-items-center"
                            data-bs-toggle="dropdown">
                            <i class="icon-calendar me-1"></i>{{ selectedMonth }}
                        </a>
                        <ul class="dropdown-menu dropdown-menu-end p-3">
                            <li v-for="m in months" :key="m">
                                <a href="javascript:void(0);" class="dropdown-item rounded" @click="selectMonth(m)">{{ m }}</a>
                            </li>
                        </ul>
                    </div>
                </div>

                <div class="row g-4 mb-4">
                    <div class="col-xxl-3 col-md-6">
                        <div class="card dash-card mb-0">
                            <div class="card-body">
                                <h6 class="mb-2">Units Target</h6>
                                <h3 class="mb-1">{{ totals.target }} units</h3>
                                <span class="badge bg-soft-info text-dark">{{ totals.actual }} sold · {{ achievement(totals.actual, totals.target) }}%</span>
                            </div>
                        </div>
                    </div>
                    <div class="col-xxl-3 col-md-6">
                        <div class="card dash-card mb-0">
                            <div class="card-body">
                                <h6 class="mb-2">Revenue Target</h6>
                                <h3 class="mb-1">{{ money(totals.revenueTarget) }}</h3>
                                <span class="badge bg-soft-success text-dark">{{ achievement(totals.revenueActual, totals.revenueTarget) }}% achieved</span>
                            </div>
                        </div>
                    </div>
                    <div class="col-xxl-3 col-md-6">
                        <div class="card dash-card mb-0">
                            <div class="card-body">
                                <h6 class="mb-2">Cash Target</h6>
                                <h3 class="mb-1">{{ money(totals.cashTarget) }}</h3>
                                <span class="badge bg-soft-warning text-dark">{{ achievement(totals.cashActual, totals.cashTarget) }}% collected</span>
                            </div>
                        </div>
                    </div>
                    <div class="col-xxl-3 col-md-6">
                        <div class="card dash-card mb-0">
                            <div class="card-body">
                                <h6 class="mb-2">Avg. Conversion</h6>
                                <h3 class="mb-1">{{ totals.conversion }}%</h3>
                                <span class="badge bg-soft-success text-dark">Follow-up {{ totals.followUpRate }}%</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="row g-4 mb-4">
                    <div class="col-xxl-7">
                        <div class="card flex-fill mb-0">
                            <div class="card-body">
                                <div class="card-header pt-0 ps-0 pe-0 mb-4">
                                    <h5 class="mb-0">Target vs Actual</h5>
                                </div>
                                <apexchart type="bar" height="300" :options="targetChart.chartOptions"
                                    :series="targetChart.series"></apexchart>
                            </div>
                        </div>
                    </div>
                    <div class="col-xxl-5">
                        <div class="card flex-fill mb-0">
                            <div class="card-body">
                                <div class="card-header pt-0 ps-0 pe-0 mb-4">
                                    <h5 class="mb-0">Role KPI Measures</h5>
                                </div>
                                <div class="border rounded p-3 mb-3" v-for="role in roleKpis" :key="role.role">
                                    <div class="d-flex align-items-center justify-content-between mb-2">
                                        <h6 class="fs-14 fw-semibold mb-0">{{ role.role }}</h6>
                                        <span class="badge bg-light text-dark">{{ role.measures.split(', ').length }} KPIs</span>
                                    </div>
                                    <p class="fs-13 mb-0 text-muted">{{ role.measures }}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="card">
                    <div class="card-body">
                        <div class="card-header pt-0 ps-0 pe-0 mb-4 d-flex align-items-center justify-content-between">
                            <h5 class="mb-0">Individual Performance</h5>
                            <span class="badge bg-white text-dark border fw-medium">Targets keep version + effective date</span>
                        </div>
                        <div class="table-responsive table-nowrap">
                            <table class="table mb-0">
                                <thead class="table-light">
                                    <tr>
                                        <th class="no-sort">Salesperson</th>
                                        <th>Team</th>
                                        <th>Units</th>
                                        <th>Revenue</th>
                                        <th>Cash</th>
                                        <th>Conversion</th>
                                        <th class="no-sort">Achievement</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr v-for="t in targets" :key="t.name">
                                        <td>
                                            <div class="d-flex align-items-center">
                                                <span class="avatar avatar-sm avatar-rounded flex-shrink-0 me-2 bg-light">
                                                    <i class="icon-user fs-13"></i>
                                                </span>
                                                <h6 class="fs-14 fw-semibold mb-0">{{ t.name }}</h6>
                                            </div>
                                        </td>
                                        <td>{{ t.team }}</td>
                                        <td>{{ t.actual }} / {{ t.target }}</td>
                                        <td>{{ money(t.revenueActual) }}</td>
                                        <td>{{ money(t.cashActual) }}</td>
                                        <td>{{ t.conversion }}%</td>
                                        <td>
                                            <div class="d-flex align-items-center gap-2">
                                                <div class="progress flex-grow-1" style="height: 6px;">
                                                    <div class="progress-bar" :class="barClass(t.actual, t.target)"
                                                        :style="{ width: Math.min(achievement(t.actual, t.target), 100) + '%' }"></div>
                                                </div>
                                                <span class="fs-13 fw-semibold">{{ achievement(t.actual, t.target) }}%</span>
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
import { targets, money, achievement } from '@/data/crm'
import { notify } from '@/utils/ui'

export default {
    data() {
        return {
            targets,
            money,
            achievement,
            selectedMonth: 'October 2026',
            months: ['October 2026', 'September 2026', 'August 2026'],
            roleKpis: [
                { role: 'Sales Staff', measures: 'Vehicles sold, revenue, cash collected, conversion rate, on-time follow-up' },
                { role: 'Team Leader', measures: 'Team results, members meeting target, lead allocation, coaching' },
                { role: 'Sales Manager', measures: 'Sales target, gross profit, discounts, forecast accuracy' },
                { role: 'Director', measures: 'Total revenue and profit, growth, branch results, stock aging' },
                { role: 'Service Manager', measures: 'Service revenue, on-time work, repeat repairs, customer satisfaction' },
            ],
            targetChart: {
                series: [
                    { name: 'Target', data: [] },
                    { name: 'Actual', data: [] },
                ],
                chartOptions: {
                    chart: { type: 'bar', height: 300, toolbar: { show: false }, fontFamily: 'inherit' },
                    plotOptions: { bar: { borderRadius: 6, columnWidth: '50%' } },
                    colors: ['#cbd5e1', '#0D76E1'],
                    dataLabels: { enabled: false },
                    xaxis: {
                        categories: targets.map(t => t.name),
                        axisBorder: { show: false },
                        axisTicks: { show: false },
                        labels: { style: { fontSize: '11px' } },
                    },
                    grid: { borderColor: '#eaeaea', strokeDashArray: 4 },
                    legend: { position: 'top', horizontalAlign: 'right' },
                },
            },
        }
    },
    computed: {
        totals() {
            const target = this.targets.reduce((s, t) => s + t.target, 0)
            const actual = this.targets.reduce((s, t) => s + t.actual, 0)
            const revenueTarget = this.targets.reduce((s, t) => s + t.revenueTarget, 0)
            const revenueActual = this.targets.reduce((s, t) => s + t.revenueActual, 0)
            const cashTarget = this.targets.reduce((s, t) => s + t.cashTarget, 0)
            const cashActual = this.targets.reduce((s, t) => s + t.cashActual, 0)
            const conversion = Math.round(this.targets.reduce((s, t) => s + t.conversion, 0) / this.targets.length)
            const followUpRate = Math.round(this.targets.reduce((s, t) => s + t.followUpRate, 0) / this.targets.length)
            return { target, actual, revenueTarget, revenueActual, cashTarget, cashActual, conversion, followUpRate }
        },
    },
    created() {
        this.targetChart.series[0].data = this.targets.map(t => t.target)
        this.targetChart.series[1].data = this.targets.map(t => t.actual)
    },
    methods: {
        selectMonth(m) {
            this.selectedMonth = m
            notify(`Showing targets for ${m}`)
        },
        barClass(actual, target) {
            return this.achievement(actual, target) >= 100 ? 'bg-success' : 'bg-warning'
        },
    },
}
</script>
