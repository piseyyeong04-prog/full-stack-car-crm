<template>
    <div class="page-wrapper">
        <div class="content">
            <layout-header></layout-header>

            <div class="content-wrap">
                <!-- Page header -->
                <div class="d-flex align-items-center justify-content-between gap-2 flex-wrap mb-4">
                    <div>
                        <h4 class="mb-1">{{ $t('dashboard.title') }}</h4>
                        <p class="text-muted mb-0">{{ $t('dashboard.subtitle') }}</p>
                    </div>
                    <div class="d-flex align-items-center gap-3 flex-wrap">
                        <div class="input-icon input-icon-start position-relative">
                            <span class="input-icon-addon text-dark">
                                <i class="icon-calendar-fold text-dark fs-14 me-2"></i>
                            </span>
                            <input type="text" class="form-control" ref="dateRangeInput" />
                        </div>
                        <div class="dropdown">
                            <a href="#" class="dropdown-toggle btn btn-dark d-inline-flex align-items-center"
                                data-bs-toggle="dropdown">
                                <i class="icon-arrow-down-to-line me-2"></i>{{ $t('common.export') }}
                            </a>
                            <ul class="dropdown-menu dropdown-menu-end p-3">
                                <li><a href="javascript:void(0);" class="dropdown-item rounded" @click="exportPdf">{{ $t('common.exportPdf') }}</a></li>
                                <li><a href="javascript:void(0);" class="dropdown-item rounded" @click="exportExcel">{{ $t('common.exportExcel') }}</a></li>
                            </ul>
                        </div>
                        <router-link :to="lp('/crm/leads')" class="btn btn-primary d-inline-flex align-items-center">
                            <i class="icon-plus me-2 fw-semibold"></i>{{ $t('dashboard.newOpportunity') }}
                        </router-link>
                    </div>
                </div>

                <!-- KPI cards: Dealership Executive Summary -->
                <div class="row g-4 mb-4">
                    <!-- 1. Recognized Revenue -->
                    <div class="col-xxl-3 col-xl-6 col-lg-6">
                        <router-link :to="lp('/targets/commission')" class="text-decoration-none">
                            <div class="card dash-card mb-0 h-100">
                                <div class="card-body d-flex align-items-center justify-content-between gap-2">
                                    <div>
                                        <h6 class="mb-3 text-muted">{{ $t('dashboard.recognizedRevenue') }}</h6>
                                        <h3 class="mb-2 text-dark fw-bold">{{ money(revenue) }}</h3>
                                        <span class="badge bg-soft-success text-dark">+18% {{ $t('dashboard.vsLastMonth') }}</span>
                                    </div>
                                    <div class="avatar avatar-lg rounded-circle bg-primary text-white shadow-sm">
                                        <i class="icon-badge-dollar-sign"></i>
                                    </div>
                                </div>
                            </div>
                        </router-link>
                    </div>

                    <!-- 2. Vehicles Sold -->
                    <div class="col-xxl-3 col-xl-6 col-lg-6">
                        <router-link :to="lp('/vehicles/stock')" class="text-decoration-none">
                            <div class="card dash-card mb-0 h-100">
                                <div class="card-body d-flex align-items-center justify-content-between gap-2">
                                    <div>
                                        <h6 class="mb-3 text-muted">{{ $t('dashboard.vehiclesSold') }}</h6>
                                        <h3 class="mb-2 text-dark fw-bold">{{ vehiclesSold }}</h3>
                                        <span class="badge bg-soft-info text-dark">{{ achievement(vehiclesSold, targetUnits) }}% {{ $t('dashboard.ofTarget') }}</span>
                                    </div>
                                    <div class="avatar avatar-lg rounded-circle bg-info text-white shadow-sm">
                                        <i class="icon-car"></i>
                                    </div>
                                </div>
                            </div>
                        </router-link>
                    </div>

                    <!-- 3. Active Leads -->
                    <div class="col-xxl-3 col-xl-6 col-lg-6">
                        <router-link :to="lp('/crm/leads')" class="text-decoration-none">
                            <div class="card dash-card mb-0 h-100">
                                <div class="card-body d-flex align-items-center justify-content-between gap-2">
                                    <div>
                                        <h6 class="mb-3 text-muted">{{ $t('dashboard.activeLeads') }}</h6>
                                        <h3 class="mb-2 text-dark fw-bold">{{ activeLeads }}</h3>
                                        <span class="badge bg-soft-danger text-dark">{{ hotLeads }} {{ $t('dashboard.hot') }} {{ $t('dashboard.prospects') }}</span>
                                    </div>
                                    <div class="avatar avatar-lg rounded-circle bg-danger text-white shadow-sm">
                                        <i class="icon-flame"></i>
                                    </div>
                                </div>
                            </div>
                        </router-link>
                    </div>

                    <!-- 4. Stock Value -->
                    <div class="col-xxl-3 col-xl-6 col-lg-6">
                        <router-link :to="lp('/vehicles/stock')" class="text-decoration-none">
                            <div class="card dash-card mb-0 h-100">
                                <div class="card-body d-flex align-items-center justify-content-between gap-2">
                                    <div>
                                        <h6 class="mb-3 text-muted">{{ $t('dashboard.stockValue') }}</h6>
                                        <h3 class="mb-2 text-dark fw-bold">{{ money(stockValue) }}</h3>
                                        <span class="badge bg-soft-warning text-dark">{{ stockUnits }} {{ $t('dashboard.inStock') }}</span>
                                    </div>
                                    <div class="avatar avatar-lg rounded-circle bg-warning text-white shadow-sm">
                                        <i class="icon-warehouse"></i>
                                    </div>
                                </div>
                            </div>
                        </router-link>
                    </div>

                    <!-- 5. Confirmed Bookings -->
                    <div class="col-xxl-3 col-xl-6 col-lg-6">
                        <router-link :to="lp('/sales/bookings')" class="text-decoration-none">
                            <div class="card dash-card mb-0 h-100">
                                <div class="card-body d-flex align-items-center justify-content-between gap-2">
                                    <div>
                                        <h6 class="mb-3 text-muted">{{ $t('dashboard.confirmedBookings') }}</h6>
                                        <h3 class="mb-2 text-dark fw-bold">{{ activeBookingsCount }} <span class="fs-14 fw-normal text-muted">{{ $t('dashboard.units') }}</span></h3>
                                        <span class="badge bg-soft-success text-dark">{{ money(confirmedDeposits) }} {{ $t('dashboard.deposits') }}</span>
                                    </div>
                                    <div class="avatar avatar-lg rounded-circle bg-success text-white shadow-sm">
                                        <i class="icon-calendar-check"></i>
                                    </div>
                                </div>
                            </div>
                        </router-link>
                    </div>

                    <!-- 6. Workshop Job Cards -->
                    <div class="col-xxl-3 col-xl-6 col-lg-6">
                        <router-link :to="lp('/workshop/jobs')" class="text-decoration-none">
                            <div class="card dash-card mb-0 h-100">
                                <div class="card-body d-flex align-items-center justify-content-between gap-2">
                                    <div>
                                        <h6 class="mb-3 text-muted">{{ $t('dashboard.workshopJobCards') }}</h6>
                                        <h3 class="mb-2 text-dark fw-bold">{{ activeJobsCount }} <span class="fs-14 fw-normal text-muted">{{ $t('dashboard.active') }}</span></h3>
                                        <span class="badge bg-soft-info text-dark">{{ readyJobsCount }} {{ $t('dashboard.readyForHandover') }}</span>
                                    </div>
                                    <div class="avatar avatar-lg rounded-circle bg-indigo text-white shadow-sm">
                                        <i class="icon-wrench"></i>
                                    </div>
                                </div>
                            </div>
                        </router-link>
                    </div>

                    <!-- 7. Spare Parts Inventory -->
                    <div class="col-xxl-3 col-xl-6 col-lg-6">
                        <router-link :to="lp('/parts/inventory')" class="text-decoration-none">
                            <div class="card dash-card mb-0 h-100">
                                <div class="card-body d-flex align-items-center justify-content-between gap-2">
                                    <div>
                                        <h6 class="mb-3 text-muted">{{ $t('dashboard.sparePartsInventory') }}</h6>
                                        <h3 class="mb-2 text-dark fw-bold">{{ money(partsTotalValue) }}</h3>
                                        <span class="badge bg-soft-warning text-dark">{{ lowStockPartsCount }} {{ $t('dashboard.reorderAlerts') }}</span>
                                    </div>
                                    <div class="avatar avatar-lg rounded-circle bg-teal text-white shadow-sm">
                                        <i class="icon-cog"></i>
                                    </div>
                                </div>
                            </div>
                        </router-link>
                    </div>

                    <!-- 8. Pending Receivables -->
                    <div class="col-xxl-3 col-xl-6 col-lg-6">
                        <router-link :to="lp('/sales/payments')" class="text-decoration-none">
                            <div class="card dash-card mb-0 h-100">
                                <div class="card-body d-flex align-items-center justify-content-between gap-2">
                                    <div>
                                        <h6 class="mb-3 text-muted">{{ $t('dashboard.pendingReceivables') }}</h6>
                                        <h3 class="mb-2 text-dark fw-bold">{{ money(outstandingReceivables) }}</h3>
                                        <span class="badge bg-soft-danger text-dark">{{ overdueInvoicesCount }} {{ $t('dashboard.openBalances') }}</span>
                                    </div>
                                    <div class="avatar avatar-lg rounded-circle bg-dark text-white shadow-sm">
                                        <i class="icon-hand-coins"></i>
                                    </div>
                                </div>
                            </div>
                        </router-link>
                    </div>
                </div>

                <!-- Charts -->
                <div class="row g-4 mb-4">
                    <div class="col-xxl-8 col-xl-7">
                        <div class="card flex-fill mb-0">
                            <div class="card-body">
                                <div class="card-header pt-0 ps-0 pe-0 mb-4 d-flex align-items-center justify-content-between gap-2 flex-wrap">
                                    <h5 class="mb-0">{{ $t('dashboard.salesLeadTrend') }}</h5>
                                    <span class="badge bg-white text-dark border fw-medium">{{ $t('dashboard.last7Months') }}</span>
                                </div>
                                <apexchart type="area" height="280" :options="salesTrendLocalized.chartOptions"
                                    :series="salesTrendLocalized.series"></apexchart>
                            </div>
                        </div>
                    </div>
                    <div class="col-xxl-4 col-xl-5">
                        <div class="card flex-fill mb-0">
                            <div class="card-body">
                                <div class="card-header pt-0 ps-0 pe-0 mb-4 d-flex align-items-center justify-content-between gap-2 flex-wrap">
                                    <h5 class="mb-0">{{ $t('dashboard.leadSources') }}</h5>
                                    <router-link :to="lp('/crm/leads')" class="link text-decoration-underline fw-semibold">{{ $t('dashboard.viewAll') }}</router-link>
                                </div>
                                <apexchart type="donut" height="280" :options="sourceChart.chartOptions"
                                    :series="sourceChart.series"></apexchart>
                                <div class="d-flex align-items-center justify-content-center flex-wrap gap-3 mt-3">
                                    <p class="order-color d-flex align-items-center gap-2 mb-0"><span class="bg-primary round"></span>{{ $t('dashboard.srcFacebook') }}</p>
                                    <p class="order-color d-flex align-items-center gap-2 mb-0"><span class="bg-info round"></span>{{ $t('dashboard.srcTiktok') }}</p>
                                    <p class="order-color d-flex align-items-center gap-2 mb-0"><span class="bg-warning round"></span>{{ $t('dashboard.srcWebsite') }}</p>
                                    <p class="order-color d-flex align-items-center gap-2 mb-0"><span class="bg-success round"></span>{{ $t('dashboard.srcReferral') }}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="row g-4 mb-4">
                    <div class="col-xxl-8 col-xl-7">
                        <div class="card flex-fill mb-0">
                            <div class="card-body">
                                <div class="card-header pt-0 ps-0 pe-0 mb-4">
                                    <h5 class="mb-0">{{ $t('dashboard.salesPipeline') }}</h5>
                                </div>
                                <apexchart type="bar" height="280" :options="pipelineChartLocalized.chartOptions"
                                    :series="pipelineChartLocalized.series"></apexchart>
                            </div>
                        </div>
                    </div>
                    <div class="col-xxl-4 col-xl-5">
                        <div class="card flex-fill mb-0">
                            <div class="card-body">
                                <div class="card-header pt-0 ps-0 pe-0 mb-4 d-flex align-items-center justify-content-between gap-2 flex-wrap">
                                    <h5 class="mb-0">{{ $t('dashboard.stockByStatus') }}</h5>
                                    <router-link :to="lp('/vehicles/stock')" class="link text-decoration-underline fw-semibold">{{ $t('dashboard.viewAll') }}</router-link>
                                </div>
                                <apexchart type="bar" height="240" :options="stockChartLocalized.chartOptions"
                                    :series="stockChartLocalized.series"></apexchart>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Tables -->
                <div class="row g-4">
                    <div class="col-xxl-8 col-xl-7">
                        <div class="card flex-fill mb-0">
                            <div class="card-body">
                                <div class="card-header pt-0 ps-0 pe-0 mb-4">
                                    <h5 class="mb-0 d-flex align-items-center justify-content-between w-100">
                                        {{ $t('dashboard.recentOpportunities') }}
                                        <router-link :to="lp('/crm/leads')" class="text-decoration-underline fs-14 fw-semibold">{{ $t('dashboard.viewAll') }}</router-link>
                                    </h5>
                                </div>
                                <div class="table-responsive table-nowrap">
                                    <table class="table mb-0">
                                        <thead class="table-light">
                                            <tr>
                                                <th>{{ $t('common.id') }}</th>
                                                <th class="no-sort">{{ $t('common.customer') }}</th>
                                                <th>{{ $t('common.interest') }}</th>
                                                <th>{{ $t('common.owner') }}</th>
                                                <th>{{ $t('common.stage') }}</th>
                                                <th class="no-sort">{{ $t('common.priority') }}</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr v-for="op in recentOpportunities" :key="op.id">
                                                <td><span class="text-dark fw-semibold">{{ op.id }}</span></td>
                                                <td>
                                                    <div class="d-flex align-items-center">
                                                        <span class="avatar avatar-sm avatar-rounded flex-shrink-0 me-2 bg-light">
                                                            <i class="icon-user fs-13"></i>
                                                        </span>
                                                        <h6 class="fs-14 fw-semibold mb-0">{{ op.customer }}</h6>
                                                    </div>
                                                </td>
                                                <td>{{ op.interest }}</td>
                                                <td>{{ op.owner }}</td>
                                                <td><span class="badge badge-soft-info text-dark">{{ op.stage }}</span></td>
                                                <td>
                                                    <span class="badge" :class="priorityClass(op.priority)">{{ op.priority }}</span>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="col-xxl-4 col-xl-5">
                        <div class="card flex-fill mb-0 mb-4">
                            <div class="card-body">
                                <div class="card-header pt-0 ps-0 pe-0 mb-4 d-flex align-items-center justify-content-between w-100">
                                    <h5 class="mb-0">{{ $t('dashboard.followUpsDue') }}</h5>
                                    <router-link :to="lp('/crm/leads')" class="text-decoration-underline fs-14 fw-semibold">{{ $t('dashboard.viewAll') }}</router-link>
                                </div>
                                <div v-for="op in followUps" :key="op.id"
                                    class="d-flex align-items-center justify-content-between gap-2 mb-4 flex-wrap">
                                    <div class="d-flex align-items-center gap-2">
                                        <span class="avatar border bg-light rounded-circle flex-shrink-0">
                                            <i class="icon-clock fs-16 text-warning"></i>
                                        </span>
                                        <div>
                                            <h6 class="fs-14 fw-semibold mb-1">{{ op.customer }}</h6>
                                            <span class="fs-13">{{ op.nextAction }}</span>
                                        </div>
                                    </div>
                                    <span class="badge badge-white border text-dark">{{ op.dueDate }}</span>
                                </div>
                            </div>
                        </div>

                        <div class="card flex-fill mb-0">
                            <div class="card-body">
                                <div class="card-header pt-0 ps-0 pe-0 mb-4 d-flex align-items-center justify-content-between w-100">
                                    <h5 class="mb-0">{{ $t('dashboard.stockAgingAlerts') }}</h5>
                                    <router-link :to="lp('/vehicles/stock')" class="text-decoration-underline fs-14 fw-semibold">{{ $t('dashboard.viewAll') }}</router-link>
                                </div>
                                <div v-for="v in agingStock" :key="v.id"
                                    class="d-flex align-items-center justify-content-between gap-2 mb-3 flex-wrap">
                                    <div>
                                        <h6 class="fs-14 fw-semibold mb-1">{{ v.brand }} {{ v.model }} {{ v.year }}</h6>
                                        <span class="fs-13">{{ v.vin }}</span>
                                    </div>
                                    <span class="badge badge-soft-danger text-dark">{{ v.ageDays }} {{ $t('dashboard.days') }}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import "daterangepicker/daterangepicker.css";
import "daterangepicker/daterangepicker.js";
import { ref, onMounted } from "vue";
import moment from "moment";
import DateRangePicker from "daterangepicker";
import { salesTrend, pipelineChart, sourceChart, stockChart } from './data'
import { opportunities, vehicles, targets, money, achievement, bookings, payments } from '@/data/crm'
import { jobCards, parts } from '@/data/after-sales'
import { accounting } from '@/data/expansion'
import { exportCsv, exportPdf } from '@/utils/export'
import { notify } from '@/utils/ui'

export default {
    name: 'CarCrmDashboard',
    data() {
        return {
            salesTrend,
            pipelineChart,
            sourceChart,
            stockChart,
            opportunities,
            vehicles,
            bookings,
            payments,
            jobCards,
            parts,
            accounting,
            money,
            achievement,
        }
    },
    computed: {
        salesTrendLocalized() {
            const base = this.salesTrend.chartOptions
            return {
                series: this.salesTrend.series,
                chartOptions: {
                    ...base,
                    xaxis: {
                        ...base.xaxis,
                        categories: base.xaxis.categories.map((c) => this.$t('dashboard.months.' + c)),
                    },
                },
            }
        },
        pipelineChartLocalized() {
            const base = this.pipelineChart.chartOptions
            return {
                series: this.pipelineChart.series,
                chartOptions: {
                    ...base,
                    xaxis: {
                        ...base.xaxis,
                        categories: [
                            this.$t('dashboard.stageNew'),
                            this.$t('dashboard.stageContacted'),
                            this.$t('dashboard.stageQualified'),
                            this.$t('dashboard.stageAppt'),
                            this.$t('dashboard.stageQuote'),
                            this.$t('dashboard.stageNegotiation'),
                            this.$t('dashboard.stageBooking'),
                            this.$t('dashboard.stageContract'),
                        ],
                    },
                },
            }
        },
        stockChartLocalized() {
            const base = this.stockChart.chartOptions
            return {
                series: this.stockChart.series,
                chartOptions: {
                    ...base,
                    xaxis: {
                        ...base.xaxis,
                        categories: [
                            this.$t('dashboard.stOrdered'),
                            this.$t('dashboard.stInTransit'),
                            this.$t('dashboard.stInspection'),
                            this.$t('dashboard.stAvailable'),
                            this.$t('dashboard.stReserved'),
                            this.$t('dashboard.stSold'),
                            this.$t('dashboard.stDelivered'),
                        ],
                    },
                },
            }
        },
        activeOpps() {
            return this.opportunities.filter(o => o.status === 'Active')
        },
        activeLeads() {
            return this.activeOpps.length
        },
        hotLeads() {
            return this.activeOpps.filter(o => o.priority === 'Hot').length
        },
        vehiclesSold() {
            return targets.reduce((sum, t) => sum + t.actual, 0)
        },
        targetUnits() {
            return targets.reduce((sum, t) => sum + t.target, 0)
        },
        revenue() {
            return targets.reduce((sum, t) => sum + t.revenueActual, 0)
        },
        stockUnits() {
            return this.vehicles.filter(v => !['Sold', 'Delivered'].includes(v.status)).length
        },
        stockValue() {
            return this.vehicles
                .filter(v => !['Sold', 'Delivered'].includes(v.status))
                .reduce((sum, v) => sum + v.cost, 0)
        },
        activeBookingsCount() {
            return (this.bookings || []).filter(b => !['Delivered', 'Cancelled'].includes(b.status)).length
        },
        confirmedDeposits() {
            return (this.bookings || []).filter(b => b.status === 'Confirmed').reduce((sum, b) => sum + (b.deposit || 0), 0)
        },
        activeJobsCount() {
            return (this.jobCards || []).filter(j => !['Handover', 'Invoiced'].includes(j.status)).length
        },
        readyJobsCount() {
            return (this.jobCards || []).filter(j => j.status === 'Ready' || j.status === 'Quality Check').length
        },
        partsTotalValue() {
            return (this.parts || []).reduce((sum, p) => sum + (p.stock * p.cost), 0)
        },
        lowStockPartsCount() {
            return (this.parts || []).filter(p => p.stock <= p.minStock).length
        },
        outstandingReceivables() {
            if (this.accounting && this.accounting.receivables) return this.accounting.receivables
            return (this.payments || []).reduce((sum, p) => sum + Math.max(0, p.total - p.paid), 0)
        },
        overdueInvoicesCount() {
            return (this.payments || []).filter(p => p.status === 'Overdue' || p.status === 'Partial').length
        },
        recentOpportunities() {
            return this.activeOpps.slice(0, 6)
        },
        followUps() {
            return this.activeOpps.slice(0, 4)
        },
        agingStock() {
            return this.vehicles.filter(v => v.ageDays >= 45).slice(0, 4)
        },
    },
    setup() {
        const dateRangeInput = ref(null);

        function booking_range(start, end) {
            return start.format("M/D/YYYY") + " - " + end.format("M/D/YYYY");
        }
        onMounted(() => {
            if (dateRangeInput.value) {
                const start = moment().subtract(6, "days");
                const end = moment();
                new DateRangePicker(
                    dateRangeInput.value,
                    {
                        startDate: start,
                        endDate: end,
                        ranges: {
                            Today: [moment(), moment()],
                            Yesterday: [moment().subtract(1, "days"), moment().subtract(1, "days")],
                            "Last 7 Days": [moment().subtract(6, "days"), moment()],
                            "Last 30 Days": [moment().subtract(29, "days"), moment()],
                            "This Month": [moment().startOf("month"), moment().endOf("month")],
                            "Last Month": [
                                moment().subtract(1, "month").startOf("month"),
                                moment().subtract(1, "month").endOf("month"),
                            ],
                        },
                    },
                    booking_range
                );
                booking_range(start, end);
            }
        });
        return { dateRangeInput };
    },
    methods: {
        priorityClass(priority) {
            if (priority === 'Hot') return 'badge-soft-danger text-dark'
            if (priority === 'Warm') return 'badge-soft-warning text-dark'
            return 'badge-soft-info text-dark'
        },
        exportColumns() {
            return [
                { title: 'ID', key: 'id' },
                { title: 'Customer', key: 'customer' },
                { title: 'Interest', key: 'interest' },
                { title: 'Owner', key: 'owner' },
                { title: 'Stage', key: 'stage' },
                { title: 'Priority', key: 'priority' },
                { title: 'Status', key: 'status' },
            ]
        },
        exportExcel() {
            exportCsv('dashboard-opportunities', this.exportColumns(), this.opportunities)
            notify('Dashboard exported as Excel (CSV)')
        },
        exportPdf() {
            exportPdf('Sales Dashboard', this.exportColumns(), this.opportunities)
            notify('Dashboard export opened for printing')
        },
    },
};
</script>
