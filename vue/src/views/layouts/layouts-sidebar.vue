<template>
    <!-- Sidenav Menu Start -->
    <aside 
        class="sidebar crm-sidebar" 
        :class="{ 'is-collapsed': isSidebarCollapsed }"
        aria-label="Main Navigation"
    >
        <div class="crm-sidebar-inner">
            <!-- Brand / Header -->
            <div class="crm-sidebar-header">
                <router-link :to="lp('/dashboard')" class="crm-brand" title="Car CRM">
                    <div class="crm-brand-logo">
                        <img src="@/assets/img/car-logo-small.svg" alt="Car CRM Logo" />
                    </div>
                    <div class="crm-brand-info">
                        <span class="crm-brand-name">{{ $t('app.name') }}</span>
                        <span class="crm-brand-badge">Dealer Suite</span>
                    </div>
                </router-link>

                <!-- Collapse / Expand Toggle Button -->
                <button
                    type="button"
                    class="crm-collapse-btn"
                    :title="isSidebarCollapsed ? 'Expand sidebar' : 'Collapse sidebar'"
                    @click="toggleSidebar"
                    :aria-label="isSidebarCollapsed ? 'Expand sidebar' : 'Collapse sidebar'"
                >
                    <i :class="isSidebarCollapsed ? 'icon-panel-left-open' : 'icon-panel-left-close'"></i>
                </button>
            </div>

            <!-- Navigation Body -->
            <div class="crm-sidebar-body">
                <simplebar id="scrollbar" ref="scrollbar" class="crm-sidebar-scroll">
                    <nav class="crm-nav">
                        <!-- Group 1: CRM & Sales -->
                        <div class="crm-nav-group">
                            <div class="crm-group-title">{{ $t('nav.groupSales') }}</div>
                            <div class="crm-group-divider" v-if="isSidebarCollapsed"></div>

                            <router-link :to="lp('/dashboard')" class="crm-nav-item" :title="$t('nav.dashboard')">
                                <span class="nav-icon"><i class="icon-layout-dashboard"></i></span>
                                <span class="nav-text">{{ $t('nav.dashboard') }}</span>
                            </router-link>
                            <router-link :to="lp('/crm/leads')" class="crm-nav-item" :title="$t('nav.leads')">
                                <span class="nav-icon"><i class="icon-flame"></i></span>
                                <span class="nav-text">{{ $t('nav.leads') }}</span>
                            </router-link>
                            <router-link :to="lp('/crm/pipeline')" class="crm-nav-item" :title="$t('nav.pipeline')">
                                <span class="nav-icon"><i class="icon-kanban"></i></span>
                                <span class="nav-text">{{ $t('nav.pipeline') }}</span>
                            </router-link>
                            <router-link :to="lp('/crm/customers')" class="crm-nav-item" :title="$t('nav.customers')">
                                <span class="nav-icon"><i class="icon-user"></i></span>
                                <span class="nav-text">{{ $t('nav.customers') }}</span>
                            </router-link>
                            <router-link :to="lp('/vehicles/stock')" class="crm-nav-item" :title="$t('nav.vehicles')">
                                <span class="nav-icon"><i class="icon-car"></i></span>
                                <span class="nav-text">{{ $t('nav.vehicles') }}</span>
                            </router-link>
                            <router-link :to="lp('/vehicles/purchasing')" class="crm-nav-item" :title="$t('nav.purchasing')">
                                <span class="nav-icon"><i class="icon-truck"></i></span>
                                <span class="nav-text">{{ $t('nav.purchasing') }}</span>
                            </router-link>
                            <router-link :to="lp('/sales/quotations')" class="crm-nav-item" :title="$t('nav.quotations')">
                                <span class="nav-icon"><i class="icon-file-text"></i></span>
                                <span class="nav-text">{{ $t('nav.quotations') }}</span>
                            </router-link>
                            <router-link :to="lp('/sales/bookings')" class="crm-nav-item" :title="$t('nav.bookings')">
                                <span class="nav-icon"><i class="icon-calendar-check"></i></span>
                                <span class="nav-text">{{ $t('nav.bookings') }}</span>
                            </router-link>
                            <router-link :to="lp('/sales/payments')" class="crm-nav-item" :title="$t('nav.payments')">
                                <span class="nav-icon"><i class="icon-badge-dollar-sign"></i></span>
                                <span class="nav-text">{{ $t('nav.payments') }}</span>
                            </router-link>
                            <router-link :to="lp('/targets/kpi')" class="crm-nav-item" :title="$t('nav.targetsKpi')">
                                <span class="nav-icon"><i class="icon-target"></i></span>
                                <span class="nav-text">{{ $t('nav.targetsKpi') }}</span>
                            </router-link>
                            <router-link :to="lp('/targets/commission')" class="crm-nav-item" :title="$t('nav.commission')">
                                <span class="nav-icon"><i class="icon-hand-coins"></i></span>
                                <span class="nav-text">{{ $t('nav.commission') }}</span>
                            </router-link>
                            <router-link :to="lp('/targets/commission-settings')" class="crm-nav-item" :title="$t('nav.commissionSettings')">
                                <span class="nav-icon"><i class="icon-sliders-horizontal"></i></span>
                                <span class="nav-text">{{ $t('nav.commissionSettings') }}</span>
                            </router-link>
                        </div>

                        <!-- Group 2: Workshop & Parts -->
                        <div class="crm-nav-group">
                            <div class="crm-group-title">{{ $t('nav.groupWorkshop') }}</div>
                            <div class="crm-group-divider" v-if="isSidebarCollapsed"></div>

                            <router-link :to="lp('/parts/inventory')" class="crm-nav-item" :title="$t('nav.parts')">
                                <span class="nav-icon"><i class="icon-cog"></i></span>
                                <span class="nav-text">{{ $t('nav.parts') }}</span>
                            </router-link>
                            <router-link :to="lp('/parts/orders')" class="crm-nav-item" :title="$t('nav.partOrders')">
                                <span class="nav-icon"><i class="icon-package-search"></i></span>
                                <span class="nav-text">{{ $t('nav.partOrders') }}</span>
                            </router-link>
                            <router-link :to="lp('/workshop/jobs')" class="crm-nav-item" :title="$t('nav.workshop')">
                                <span class="nav-icon"><i class="icon-wrench"></i></span>
                                <span class="nav-text">{{ $t('nav.workshop') }}</span>
                            </router-link>
                            <router-link :to="lp('/after-sales/warranty')" class="crm-nav-item" :title="$t('nav.warranty')">
                                <span class="nav-icon"><i class="icon-shield-check"></i></span>
                                <span class="nav-text">{{ $t('nav.warranty') }}</span>
                            </router-link>
                            <router-link :to="lp('/after-sales/packages')" class="crm-nav-item" :title="$t('nav.packages')">
                                <span class="nav-icon"><i class="icon-package"></i></span>
                                <span class="nav-text">{{ $t('nav.packages') }}</span>
                            </router-link>
                            <router-link :to="lp('/after-sales/checkups')" class="crm-nav-item" :title="$t('nav.checkups')">
                                <span class="nav-icon"><i class="icon-calendar-clock"></i></span>
                                <span class="nav-text">{{ $t('nav.checkups') }}</span>
                            </router-link>
                        </div>

                        <!-- Group 3: Reports -->
                        <div class="crm-nav-group">
                            <div class="crm-group-title">{{ $t('nav.groupReports') }}</div>
                            <div class="crm-group-divider" v-if="isSidebarCollapsed"></div>

                            <router-link :to="lp('/reports/sales')" class="crm-nav-item" :title="$t('nav.repSales')">
                                <span class="nav-icon"><i class="icon-chart-bar-big"></i></span>
                                <span class="nav-text">{{ $t('nav.repSales') }}</span>
                            </router-link>
                            <router-link :to="lp('/reports/kpi')" class="crm-nav-item" :title="$t('nav.repKpi')">
                                <span class="nav-icon"><i class="icon-target"></i></span>
                                <span class="nav-text">{{ $t('nav.repKpi') }}</span>
                            </router-link>
                            <router-link :to="lp('/reports/profit-cash')" class="crm-nav-item" :title="$t('nav.repProfit')">
                                <span class="nav-icon"><i class="icon-coins"></i></span>
                                <span class="nav-text">{{ $t('nav.repProfit') }}</span>
                            </router-link>
                            <router-link :to="lp('/reports/receivables')" class="crm-nav-item" :title="$t('nav.repReceivables')">
                                <span class="nav-icon"><i class="icon-receipt-text"></i></span>
                                <span class="nav-text">{{ $t('nav.repReceivables') }}</span>
                            </router-link>
                            <router-link :to="lp('/reports/leads-conversion')" class="crm-nav-item" :title="$t('nav.repLeads')">
                                <span class="nav-icon"><i class="icon-funnel"></i></span>
                                <span class="nav-text">{{ $t('nav.repLeads') }}</span>
                            </router-link>
                            <router-link :to="lp('/reports/inventory-service')" class="crm-nav-item" :title="$t('nav.repInventory')">
                                <span class="nav-icon"><i class="icon-warehouse"></i></span>
                                <span class="nav-text">{{ $t('nav.repInventory') }}</span>
                            </router-link>
                        </div>
                    </nav>
                </simplebar>
            </div>

            <!-- Footer / Logout -->
            <div class="crm-sidebar-footer">
                <router-link :to="lp('/login')" class="crm-logout-link" :title="$t('header.signOut')">
                    <span class="nav-icon"><i class="icon-log-out"></i></span>
                    <span class="nav-text">{{ $t('header.signOut') }}</span>
                </router-link>
            </div>
        </div>
    </aside>
    <!-- Sidenav Menu End -->
</template>

<script>
import simplebar from "simplebar-vue";
import "simplebar-vue/dist/simplebar.min.css";
import { isSidebarCollapsed, toggleSidebarCollapsed } from "@/utils/sidebarState";

export default {
    name: "LayoutsSidebar",
    components: {
        simplebar,
    },
    setup() {
        return {
            isSidebarCollapsed,
        };
    },
    methods: {
        toggleSidebar() {
            toggleSidebarCollapsed();
        },
    },
};
</script>
