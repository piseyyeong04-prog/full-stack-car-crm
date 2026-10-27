<template>
    <ul class="nav nav-tabs nav-bordered border-0 report-tabs mb-4">
        <li class="nav-item">
            <router-link :to="lp('/reports/earning-report')" class="nav-link">
                <span class="d-flex align-items-center"><i class="icon-dollar-sign me-1"></i>Earning
                    Report</span>
            </router-link>
        </li>
        <li class="nav-item">
            <router-link :to="lp('/reports/order-report')" class="nav-link">
                <span class="d-flex align-items-center"><i class="icon-shopping-bag me-1"></i>Order
                    Report</span>
            </router-link>
        </li>
        <li class="nav-item">
            <router-link :to="lp('/reports/sales-report')" class="nav-link">
                <span class="d-flex align-items-center"><i class="icon-chart-bar-big me-1"></i>Sales
                    Report</span>
            </router-link>
        </li>
        <li class="nav-item">
            <router-link :to="lp('/reports/customer-report')" class="nav-link">
                <span class="d-flex align-items-center"><i class="icon-user me-1"></i>Customer Report</span>
            </router-link>
        </li>
    </ul>
</template>