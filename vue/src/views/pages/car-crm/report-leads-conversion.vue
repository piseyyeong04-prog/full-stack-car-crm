<template>
    <div class="page-wrapper">
        <div class="content">
            <layout-header></layout-header>

            <div class="content-wrap">
                <div class="d-flex align-items-center flex-wrap gap-3 border-bottom pb-4 mb-4">
                    <div class="flex-grow-1">
                        <h4 class="mb-1">{{ $t('reports.leadsTitle') }}</h4>
                        <p class="text-muted mb-0">{{ $t('reports.leadsSubtitle') }}</p>
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
                                <h6 class="mb-2 text-muted">{{ $t('reports.leads') }}</h6>
                                <h3 class="mb-0 text-dark fw-bold">{{ totalLeads }}</h3>
                            </div>
                        </div>
                    </div>
                    <div class="col-xxl-3 col-md-6">
                        <div class="card dash-card mb-0">
                            <div class="card-body">
                                <h6 class="mb-2 text-muted">{{ $t('reports.won') }}</h6>
                                <h3 class="mb-0 text-success fw-bold">{{ won }}</h3>
                            </div>
                        </div>
                    </div>
                    <div class="col-xxl-3 col-md-6">
                        <div class="card dash-card mb-0">
                            <div class="card-body">
                                <h6 class="mb-2 text-muted">{{ $t('reports.lost') }}</h6>
                                <h3 class="mb-0 text-danger fw-bold">{{ lost }}</h3>
                            </div>
                        </div>
                    </div>
                    <div class="col-xxl-3 col-md-6">
                        <div class="card dash-card mb-0">
                            <div class="card-body">
                                <h6 class="mb-2 text-muted">{{ $t('reports.conversion') }}</h6>
                                <h3 class="mb-0 text-info fw-bold">{{ conversion }}%</h3>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="row g-4 mb-4">
                    <div class="col-xxl-7">
                        <div class="card flex-fill mb-0">
                            <div class="card-body">
                                <div class="card-header pt-0 ps-0 pe-0 mb-4">
                                    <h5 class="mb-0">{{ $t('reports.leads') }} by {{ $t('reports.leadSource') }}</h5>
                                </div>
                                <apexchart type="bar" height="300" :options="chart.chartOptions" :series="chart.series"></apexchart>
                            </div>
                        </div>
                    </div>
                    <div class="col-xxl-5">
                        <div class="card flex-fill mb-0">
                            <div class="card-body">
                                <div class="card-header pt-0 ps-0 pe-0 mb-4">
                                    <h5 class="mb-0">{{ $t('reports.lost') }} Reasons</h5>
                                </div>
                                <div v-for="r in lostReasons" :key="r.reason" class="d-flex align-items-center justify-content-between mb-3">
                                    <span>{{ r.reason }}</span>
                                    <span class="badge badge-soft-danger text-dark">{{ r.count }}</span>
                                </div>
                                <p v-if="!lostReasons.length" class="text-muted fs-13 mb-0">No lost reasons recorded.</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="card">
                    <div class="card-body">
                        <div class="card-header pt-0 ps-0 pe-0 mb-4">
                            <h5 class="mb-0">{{ $t('reports.leadSource') }}</h5>
                        </div>
                        <div class="table-responsive table-nowrap">
                            <table class="table mb-0">
                                <thead class="table-light">
                                    <tr>
                                        <th class="no-sort">{{ $t('reports.leadSource') }}</th>
                                        <th>{{ $t('reports.leads') }}</th>
                                        <th>{{ $t('reports.won') }}</th>
                                        <th>{{ $t('reports.lost') }}</th>
                                        <th class="text-end">{{ $t('reports.conversion') }}</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr v-for="s in bySource" :key="s.source">
                                        <td class="fw-semibold">{{ sourceLabel(s.source) }}</td>
                                        <td>{{ s.leads }}</td>
                                        <td class="text-success">{{ s.won }}</td>
                                        <td class="text-danger">{{ s.lost }}</td>
                                        <td class="text-end fw-semibold">{{ s.conversion }}%</td>
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
import { opportunities } from '@/data/crm'
import { exportReportPdf, exportReportXls } from '@/utils/report'
import { notify } from '@/utils/ui'

const WON_STAGES = ['Booking', 'Contract', 'Payment', 'Delivery', 'After Sales']

export default {
    name: 'ReportLeadsConversion',
    computed: {
        totalLeads() {
            return opportunities.length
        },
        won() {
            return opportunities.filter((o) => WON_STAGES.includes(o.stage)).length
        },
        lost() {
            return opportunities.filter((o) => o.status === 'Lost').length
        },
        conversion() {
            return this.totalLeads ? Math.round((this.won / this.totalLeads) * 100) : 0
        },
        bySource() {
            const map = {}
            opportunities.forEach((o) => {
                if (!map[o.source]) map[o.source] = { source: o.source, leads: 0, won: 0, lost: 0 }
                map[o.source].leads += 1
                if (WON_STAGES.includes(o.stage)) map[o.source].won += 1
                if (o.status === 'Lost') map[o.source].lost += 1
            })
            return Object.values(map)
                .map((r) => ({ ...r, conversion: r.leads ? Math.round((r.won / r.leads) * 100) : 0 }))
                .sort((a, b) => b.leads - a.leads)
        },
        lostReasons() {
            const map = {}
            opportunities.filter((o) => o.status === 'Lost').forEach((o) => {
                const r = o.lostReason || 'Other'
                map[r] = (map[r] || 0) + 1
            })
            return Object.entries(map).map(([reason, count]) => ({ reason, count })).sort((a, b) => b.count - a.count)
        },
        chart() {
            return {
                series: [
                    { name: this.$t('reports.leads'), data: this.bySource.map((s) => s.leads) },
                    { name: this.$t('reports.won'), data: this.bySource.map((s) => s.won) },
                ],
                chartOptions: {
                    chart: { type: 'bar', height: 300, toolbar: { show: false }, fontFamily: 'inherit' },
                    plotOptions: { bar: { borderRadius: 6, columnWidth: '55%' } },
                    colors: ['#0D76E1', '#14B51D'],
                    dataLabels: { enabled: false },
                    xaxis: {
                        categories: this.bySource.map((s) => this.sourceLabel(s.source)),
                        axisBorder: { show: false },
                        axisTicks: { show: false },
                        labels: { style: { fontSize: '11px' } },
                    },
                    grid: { borderColor: 'var(--bs-border-color)', strokeDasharray: 4 },
                    legend: { position: 'top', horizontalAlign: 'right' },
                },
            }
        },
    },
    methods: {
        sourceLabel(s) {
            const map = {
                Facebook: 'srcFacebook',
                TikTok: 'srcTiktok',
                Website: 'srcWebsite',
                'Walk-in': 'srcWalkin',
                'Phone Call': 'srcPhoneCall',
                Referral: 'srcReferral',
                'Direct Visit': 'srcDirectVisit',
            }
            return map[s] ? this.$t('customers.' + map[s]) : s
        },
        reportColumns() {
            return [
                { title: 'Source', key: 'sourceLabel' },
                { title: 'Leads', key: 'leads' },
                { title: 'Won', key: 'won' },
                { title: 'Lost', key: 'lost' },
                { title: 'Conversion %', key: 'conversion' },
            ]
        },
        reportRows() {
            return this.bySource.map((s) => ({ ...s, sourceLabel: this.sourceLabel(s.source) }))
        },
        reportSummary() {
            return [
                { label: this.$t('reports.leads'), value: String(this.totalLeads) },
                { label: this.$t('reports.won'), value: String(this.won) },
                { label: this.$t('reports.lost'), value: String(this.lost) },
                { label: this.$t('reports.conversion'), value: this.conversion + '%' },
            ]
        },
        exportExcel() {
            exportReportXls({
                title: this.$t('reports.leadsTitle'),
                subtitle: this.$t('reports.leadsSubtitle'),
                columns: this.reportColumns(),
                rows: this.reportRows(),
                filename: 'leads-conversion-report',
            })
            notify('Leads report exported as Excel (.xls)')
        },
        exportPdf() {
            exportReportPdf({
                title: this.$t('reports.leadsTitle'),
                subtitle: this.$t('reports.leadsSubtitle'),
                summary: this.reportSummary(),
                columns: this.reportColumns(),
                rows: this.reportRows(),
            })
            notify('Leads report opened for printing')
        },
    },
}
</script>
