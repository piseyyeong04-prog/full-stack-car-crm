<template>
    <div class="page-wrapper">
        <div class="content">
            <layout-header></layout-header>

            <div class="content-wrap">
                <div class="d-flex align-items-center flex-wrap gap-3 border-bottom pb-4 mb-4">
                    <div class="flex-grow-1">
                        <h4 class="mb-1">{{ $t('reports.inventoryTitle') }}</h4>
                        <p class="text-muted mb-0">{{ $t('reports.inventorySubtitle') }}</p>
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
                                <h6 class="mb-2 text-muted">{{ $t('reports.stockValue') }}</h6>
                                <h3 class="mb-0 text-dark fw-bold">{{ money(stockValue) }}</h3>
                            </div>
                        </div>
                    </div>
                    <div class="col-xxl-3 col-md-6">
                        <div class="card dash-card mb-0">
                            <div class="card-body">
                                <h6 class="mb-2 text-muted">{{ $t('reports.aging') }} &gt; 45 {{ $t('dashboard.days') }}</h6>
                                <h3 class="mb-0 text-danger fw-bold">{{ agingCount }}</h3>
                            </div>
                        </div>
                    </div>
                    <div class="col-xxl-3 col-md-6">
                        <div class="card dash-card mb-0">
                            <div class="card-body">
                                <h6 class="mb-2 text-muted">{{ $t('reports.delayedJobs') }}</h6>
                                <h3 class="mb-0 text-warning fw-bold">{{ openJobs }}</h3>
                            </div>
                        </div>
                    </div>
                    <div class="col-xxl-3 col-md-6">
                        <div class="card dash-card mb-0">
                            <div class="card-body">
                                <h6 class="mb-2 text-muted">{{ $t('reports.serviceRevenue') }}</h6>
                                <h3 class="mb-0 text-success fw-bold">{{ money(serviceRevenue) }}</h3>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="row g-4 mb-4">
                    <div class="col-xxl-7">
                        <div class="card flex-fill mb-0">
                            <div class="card-body">
                                <div class="card-header pt-0 ps-0 pe-0 mb-4">
                                    <h5 class="mb-0">{{ $t('reports.stockValue') }} by {{ $t('common.status') }}</h5>
                                </div>
                                <apexchart type="bar" height="300" :options="chart.chartOptions" :series="chart.series"></apexchart>
                            </div>
                        </div>
                    </div>
                    <div class="col-xxl-5">
                        <div class="card flex-fill mb-0">
                            <div class="card-body">
                                <div class="card-header pt-0 ps-0 pe-0 mb-4 d-flex align-items-center justify-content-between">
                                    <h5 class="mb-0">{{ $t('reports.dueCheckups') }}</h5>
                                    <router-link :to="lp('/after-sales/checkups')" class="link text-decoration-underline fw-semibold fs-14">{{ $t('dashboard.viewAll') }}</router-link>
                                </div>
                                <div v-for="c in dueCheckups" :key="c.id" class="d-flex align-items-center justify-content-between gap-2 mb-3 flex-wrap">
                                    <div>
                                        <h6 class="fs-14 fw-semibold mb-1">{{ c.customer }}</h6>
                                        <span class="fs-13">{{ c.vehicle }}</span>
                                    </div>
                                    <span class="badge" :class="c.status === 'Overdue' ? 'badge-soft-danger text-dark' : 'badge-soft-warning text-dark'">{{ c.status }}</span>
                                </div>
                                <p v-if="!dueCheckups.length" class="text-muted fs-13 mb-0">No checkups due.</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="card mb-4">
                    <div class="card-body">
                        <div class="card-header pt-0 ps-0 pe-0 mb-4">
                            <h5 class="mb-0">{{ $t('reports.aging') }}</h5>
                        </div>
                        <div class="table-responsive table-nowrap">
                            <table class="table mb-0">
                                <thead class="table-light">
                                    <tr>
                                        <th class="no-sort">{{ $t('common.vehicle') }}</th>
                                        <th>{{ $t('common.status') }}</th>
                                        <th>Location</th>
                                        <th>{{ $t('reports.cost') }}</th>
                                        <th class="text-end">{{ $t('reports.aging') }} ({{ $t('dashboard.days') }})</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr v-for="v in agingStock" :key="v.id">
                                        <td>
                                            <h6 class="fs-14 fw-semibold mb-0">{{ v.brand }} {{ v.model }} {{ v.year }}</h6>
                                            <span class="fs-13">{{ v.vin }}</span>
                                        </td>
                                        <td><span class="badge bg-light text-dark">{{ v.status }}</span></td>
                                        <td>{{ v.location }}</td>
                                        <td>{{ money(v.cost) }}</td>
                                        <td class="text-end"><span class="badge badge-soft-danger text-dark">{{ v.ageDays }}</span></td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>

                <div class="card">
                    <div class="card-body">
                        <div class="card-header pt-0 ps-0 pe-0 mb-4">
                            <h5 class="mb-0">{{ $t('reports.delayedJobs') }}</h5>
                        </div>
                        <div class="table-responsive table-nowrap">
                            <table class="table mb-0">
                                <thead class="table-light">
                                    <tr>
                                        <th class="no-sort">Job Card</th>
                                        <th>{{ $t('common.customer') }}</th>
                                        <th>{{ $t('common.vehicle') }}</th>
                                        <th>{{ $t('common.status') }}</th>
                                        <th class="text-end">Expected</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr v-for="j in openJobList" :key="j.id">
                                        <td class="fw-semibold">{{ j.id }}</td>
                                        <td>{{ j.customer }}</td>
                                        <td>{{ j.vehicle }}</td>
                                        <td><span class="badge bg-light text-dark">{{ j.status }}</span></td>
                                        <td class="text-end">{{ j.expected }}</td>
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
import { vehicles, money } from '@/data/crm'
import { jobCards, checkups } from '@/data/after-sales'
import { exportReportPdf, exportReportXls } from '@/utils/report'
import { notify } from '@/utils/ui'

export default {
    name: 'ReportInventoryService',
    data() {
        return { money }
    },
    computed: {
        stockValue() {
            return vehicles
                .filter((v) => !['Sold', 'Delivered'].includes(v.status))
                .reduce((s, v) => s + v.cost, 0)
        },
        agingCount() {
            return vehicles.filter((v) => v.ageDays >= 45 && !['Sold', 'Delivered'].includes(v.status)).length
        },
        agingStock() {
            return vehicles
                .filter((v) => v.ageDays >= 30 && !['Sold', 'Delivered'].includes(v.status))
                .sort((a, b) => b.ageDays - a.ageDays)
        },
        openJobList() {
            return jobCards.filter((j) => !['Ready', 'Handover', 'Invoiced'].includes(j.status))
        },
        openJobs() {
            return this.openJobList.length
        },
        serviceRevenue() {
            return jobCards.reduce((s, j) => s + (j.actualParts || 0) + (j.actualLabor || 0), 0)
        },
        dueCheckups() {
            return checkups.filter((c) => ['Due', 'Overdue'].includes(c.status))
        },
        byStatus() {
            const map = {}
            vehicles.forEach((v) => {
                if (['Sold', 'Delivered'].includes(v.status)) return
                map[v.status] = (map[v.status] || 0) + v.cost
            })
            return Object.entries(map).sort((a, b) => b[1] - a[1])
        },
        chart() {
            return {
                series: [{ name: this.$t('reports.stockValue'), data: this.byStatus.map((x) => x[1]) }],
                chartOptions: {
                    chart: { type: 'bar', height: 300, toolbar: { show: false }, fontFamily: 'inherit' },
                    plotOptions: { bar: { borderRadius: 6, columnWidth: '50%' } },
                    colors: ['#13B5C9'],
                    dataLabels: { enabled: false },
                    xaxis: {
                        categories: this.byStatus.map((x) => x[0]),
                        axisBorder: { show: false },
                        axisTicks: { show: false },
                        labels: { style: { fontSize: '11px' } },
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
                { title: 'Location', key: 'location' },
                { title: 'Cost', key: 'cost', type: 'money' },
                { title: 'Aging (days)', key: 'ageDays' },
            ]
        },
        reportRows() {
            return this.agingStock.map((v) => ({
                vehicle: `${v.brand} ${v.model}`,
                status: v.status,
                location: v.location,
                cost: v.cost,
                ageDays: v.ageDays,
            }))
        },
        reportSummary() {
            return [
                { label: this.$t('reports.stockValue'), value: this.money(this.stockValue) },
                { label: this.$t('reports.aging'), value: String(this.agingCount) },
                { label: this.$t('reports.delayedJobs'), value: String(this.openJobs) },
                { label: this.$t('reports.serviceRevenue'), value: this.money(this.serviceRevenue) },
            ]
        },
        exportExcel() {
            exportReportXls({
                title: this.$t('reports.inventoryTitle'),
                subtitle: this.$t('reports.inventorySubtitle'),
                columns: this.reportColumns(),
                rows: this.reportRows(),
                filename: 'inventory-service-report',
            })
            notify('Inventory report exported as Excel (.xls)')
        },
        exportPdf() {
            exportReportPdf({
                title: this.$t('reports.inventoryTitle'),
                subtitle: this.$t('reports.inventorySubtitle'),
                summary: this.reportSummary(),
                columns: this.reportColumns(),
                rows: this.reportRows(),
            })
            notify('Inventory report opened for printing')
        },
    },
}
</script>
