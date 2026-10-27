<template>
    <!-- Topbar Start -->
    <header class="navbar-header">
        <div class="topbar-menu">
            <div class="d-flex align-items-center gap-2">

                <!-- Logo -->
                <router-link :to="lp('/dashboard')" class="logo">

                    <!-- Logo Normal -->
                    <span class="logo-light">
                        <span class="logo-lg"><img src="@/assets/img/car-logo.svg" alt="logo"></span>
                        <span class="logo-sm"><img src="@/assets/img/car-logo-small.svg" alt="small logo"></span>
                    </span>

                    <!-- Logo Dark -->
                    <span class="logo-dark">
                        <span class="logo-lg"><img src="@/assets/img/car-logo-white.svg" alt="dark logo"></span>
                    </span>
                </router-link>

                <!-- Desktop Sidebar Toggle Button -->
                <button
                    type="button"
                    class="btn btn-icon topbar-link d-none d-lg-inline-flex me-2"
                    :title="isSidebarCollapsed ? 'Expand sidebar' : 'Collapse sidebar'"
                    @click="toggleSidebarDesktop"
                    aria-label="Toggle sidebar"
                >
                    <i class="fs-16" :class="isSidebarCollapsed ? 'icon-panel-left-open' : 'icon-panel-left-close'"></i>
                </button>

                <!-- Search / Breadcrumb -->
                <div class="d-flex align-items-center">
                    <h3 class="mb-0">{{ breadcrumb }}</h3>
                </div>

                <template
                    v-if="route.path.endsWith('/dashboard')">
                    <!-- Active Leads -->
                    <div class=" d-none d-lg-flex">
                        <router-link :to="lp('/crm/leads')" class="btn btn-num-orders">
                            <i class="icon-flame me-2"></i><span>{{ $t('header.activeLeads') }} : 8</span>
                        </router-link>
                    </div>
                </template>
            </div>

            <div class="d-flex align-items-center header-list">

                <div class="avatar-list-stacked avatar-group-sm d-none d-md-flex">
                    <span class="avatar avatar-rounded"><img class="border border-white"
                            src="@/assets/img/profiles/avatar-01.jpg" alt="user"></span>
                    <span class="avatar avatar-rounded"><img class="border border-white"
                            src="@/assets/img/profiles/avatar-02.jpg" alt="user"></span>
                    <a class="avatar bg-white avatar-rounded text-dark fs-16" href="javascript:void(0);"
                        @click="notifyAction('Invite team member')">+</a>
                </div>

                <!-- Notification Button -->
                <div class="header-item d-none d-md-flex">

                    <div class="dropdown dropend">
                        <a href="#" class="topbar-link btn btn-icon" data-bs-toggle="dropdown"
                            data-bs-auto-close="outside">
                            <i class="icon-bell fs-16"></i><span
                                class="position-absolute report-badge bg-success"></span>
                        </a>
                        <div class="dropdown-menu dropdown-menu-xl notification-dropdown">
                            <div class="d-flex align-items-center justify-content-between notification-header">
                                <h5 class="mb-0">{{ $t('header.notifications') }}</h5>
                                <a href="javascript:void(0);" class="link-primary" @click="markAllRead">{{ $t('header.markAllRead') }}</a>
                            </div>
                            <div class="notification-body" data-simplebar>
                                <simplebar id="scrollbar" ref="scrollbar" class="notification-body h-100"
                                    data-simplebar>

                                    <div class="tab-pane fade show active" id="all-notification">

                                        <div class="notification-list">
                                            <h6 class="fs-14 fw-semibold mb-3">Today</h6>

                                            <!-- Item-->
                                            <div class="notification-item">
                                                <div class="d-flex">
                                                    <div
                                                        class="me-2 avatar avatar-rounded flex-shrink-0 badge-soft-purple border border-purple">
                                                        <i class="icon-shopping-cart"></i>
                                                    </div>
                                                    <div class="flex-grow-1">
                                                        <p class="mb-1">New laundry order from<span
                                                                class="text-dark fw-medium">
                                                                David
                                                                Belcher</span> (5 items) pending.</p>
                                                        <p class="fs-13 mb-0 d-inline-flex align-items-center"><i
                                                                class="icon-clock me-1"></i>20 Min Ago</p>
                                                        <div class="d-flex align-items-center gap-2 mt-2">
                                                            <button type="button"
                                                                class="btn btn-sm btn-primary rounded" @click="notifyAction('Order accepted')">Accept</button>
                                                            <button type="button"
                                                                class="btn btn-sm btn-white rounded" @click="notifyAction('Order declined')">Decline</button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <!-- Item-->
                                            <div class="notification-item">
                                                <div class="d-flex">
                                                    <div
                                                        class="me-2 avatar avatar-rounded flex-shrink-0 badge-soft-orange border border-orange">
                                                        <i class="icon-shopping-basket"></i>
                                                    </div>
                                                    <div class="flex-grow-1">
                                                        <p class="mb-1"><span class="text-dark fw-medium">Order
                                                                #568</span>
                                                            washing
                                                            completed and moved to drying.</p>
                                                        <p class="fs-13 mb-0 d-inline-flex align-items-center"><i
                                                                class="icon-clock me-1"></i>35 Min Ago</p>
                                                    </div>
                                                </div>
                                                <div class="notification-action">
                                                    <a href="#" class="notification-read rounded-circle bg-success"
                                                        data-bs-toggle="tooltip" title=""
                                                        data-bs-original-title="Make as Read"
                                                        aria-label="Make as Read"></a>
                                                </div>
                                            </div>

                                            <!-- Item-->
                                            <div class="notification-item">
                                                <div class="d-flex">
                                                    <div
                                                        class="me-2 avatar avatar-rounded flex-shrink-0 badge-soft-primary border border-primary text-primary">
                                                        <i class="icon-badge-dollar-sign"></i>
                                                    </div>
                                                    <div class="flex-grow-1">
                                                        <p class="mb-1"><span class="text-dark fw-medium">₹1,200</span>
                                                            received via UPI
                                                            for Order<span class="text-dark fw-medium"> #566</span>.</p>
                                                        <p class="fs-13 mb-0 d-inline-flex align-items-center"><i
                                                                class="icon-clock me-1"></i>40 Min Ago</p>
                                                    </div>
                                                </div>
                                                <div class="notification-action">
                                                    <a href="#" class="notification-read rounded-circle bg-success"
                                                        data-bs-toggle="tooltip" title=""
                                                        data-bs-original-title="Make as Read"
                                                        aria-label="Make as Read"></a>
                                                </div>
                                            </div>

                                            <!-- Item-->
                                            <div class="notification-item">
                                                <div class="d-flex">
                                                    <div
                                                        class="me-2 avatar avatar-rounded flex-shrink-0 badge-soft-pink border border-pink">
                                                        <i class="icon-baggage-claim"></i>
                                                    </div>
                                                    <div class="flex-grow-1">
                                                        <p class="mb-1"><span class="text-dark fw-medium">Order
                                                                #562</span><span>
                                                                ready for delivery</span></p>
                                                        <p class="fs-13 mb-0 d-inline-flex align-items-center"><i
                                                                class="icon-clock me-1"></i>45 Min Ago</p>
                                                    </div>
                                                </div>
                                            </div>

                                        </div>
                                        <div class="notification-list">
                                            <h6 class="fs-14 fw-semibold mb-3">Yesterday</h6>

                                            <!-- Item-->
                                            <div class="notification-item">
                                                <div class="d-flex">
                                                    <div
                                                        class="me-2 avatar avatar-rounded flex-shrink-0 badge-soft-success border border-success text-success">
                                                        <i class="icon-shopping-bag"></i>
                                                    </div>
                                                    <div class="flex-grow-1">
                                                        <p class="mb-1"><span class="text-dark fw-medium">Order
                                                                #560</span>
                                                            delivered
                                                            successfully to customer.</p>
                                                        <p class="fs-13 mb-0 d-inline-flex align-items-center"><i
                                                                class="icon-clock me-1"></i>1 Day Ago</p>
                                                    </div>
                                                </div>
                                            </div>

                                            <!-- Item-->
                                            <div class="notification-item">
                                                <div class="d-flex">
                                                    <div
                                                        class="me-2 avatar avatar-rounded flex-shrink-0 badge-soft-indigo border border-indigo text-indigo">
                                                        <i class="icon-inbox"></i>
                                                    </div>
                                                    <div class="flex-grow-1">
                                                        <p class="mb-1"><span class="text-dark fw-medium">Order
                                                                #562</span>
                                                            ironing
                                                            completed and ready for packing.</p>
                                                        <p class="fs-13 mb-0 d-inline-flex align-items-center"><i
                                                                class="icon-clock me-1"></i>1 Day Ago</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                </simplebar>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Search Button -->
                <div class="header-item">
                    <router-link :to="lp('/settings')" class="topbar-link btn btn-icon d-none d-md-flex" aria-label="settings">
                        <i class="icon-settings fs-16"></i>
                    </router-link>
                </div>

                <!-- Language Button -->
                <div class="header-item">
                    <div class="dropdown">
                        <a href="javascript:void(0);" class="topbar-link btn btn-icon" data-bs-toggle="dropdown"
                            :aria-label="$t('header.language')">
                            <i class="icon-languages fs-16"></i>
                        </a>
                        <ul class="dropdown-menu dropdown-menu-end p-3">
                            <li v-for="l in locales" :key="l.code">
                                <a href="javascript:void(0);" class="dropdown-item rounded d-flex align-items-center gap-2"
                                    :class="{ active: l.code === currentLocale }" @click="changeLocale(l.code)">
                                    <span>{{ l.flag }}</span>{{ l.label }}
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                <!-- Light/Dark Mode Button -->
                <div class="header-item">
                    <button class="topbar-link btn btn-icon light-dark-mode" type="button" aria-label="light/dark mode"
                        @click="toggleDarkMode">
                        <i class="fs-16" :class="[isDarkMode ? 'icon-sun' : 'icon-moon']"></i>
                    </button>
                </div>

                <!-- User Dropdown -->
                <div class="dropdown profile-dropdown d-flex align-items-center justify-content-center">
                    <a class="topbar-link avatar avatar-sm dropdown-toggle drop-arrow-none" href="#"
                        data-bs-toggle="dropdown" data-bs-offset="0,22" aria-haspopup="false" aria-expanded="false">
                        <img src="@/assets/img/profiles/avatar-01.jpg" class="rounded-circle d-flex" alt="user-image">
                    </a>
                    <div class="dropdown-menu dropdown-menu-end dropdown-menu-md p-3">
                        <div class="d-flex align-items-center justify-content-between bg-light rounded mb-3 p-3">
                            <div class="d-flex align-items-center">
                                <span class="avatar avatar-sm flex-shrink-0">
                                    <img src="@/assets/img/profiles/avatar-01.jpg" class="rounded-circle" alt="user">
                                </span>
                                <div class="ms-2">
                                    <h5 class="mb-1 fs-14">Shaun Farley</h5>
                                    <span class="d-block fs-13">Manager</span>
                                </div>
                            </div>
                        </div>

                        <!-- Item-->
                        <router-link :to="lp('/login')" class="dropdown-item">
                            <i class="ti ti-logout me-1 fs-17 align-middle text-danger"></i>
                            <span class="align-middle text-danger">{{ $t('header.signOut') }}</span>
                        </router-link>
                    </div>
                </div>
                <!-- Sidebar Mobile Button -->
                <a id="mobile_btn" class="mobile-btn" href="#sidebar" @click="toggleSidebar">
                    <i class="icon-menu"></i>
                </a>

            </div>
        </div>
    </header>
    <!-- Topbar End -->
</template>

<script>
import { ref, onMounted } from "vue";
import { useRoute } from "vue-router";
import simplebar from "simplebar-vue";
import "simplebar-vue/dist/simplebar.min.css";
import { notify } from "@/utils/ui";
import { isSidebarCollapsed, toggleSidebarCollapsed } from "@/utils/sidebarState";
import { i18n, availableLocales } from "@/i18n";

export default {
    components: {
        simplebar,
    },
    data() {
        return {
            base: 'index', // example value
            locales: availableLocales,
        }
    },
    computed: {
        currentLocale() {
            return i18n.global.locale.value
        },
        breadcrumb() {
            // Derive breadcrumb from route name or path (do not use route.meta.title)
            const route = this.$route || {};

            // Strip the locale prefix (/en, /km, /zh)
            const path = (route.path || '').replace(/^\/(en|km|zh)(?=\/|$)/, '') || '/';

            // Use route.name if available, else fall back to last path segment
            const name = route.name ? String(route.name) : null;
            let base;

            if (name) {
                base = name.toLowerCase();
            } else {
                if (path === '/' || path === '') base = 'index';
                else {
                    const segments = path.split('/').filter(Boolean);
                    base = segments.length ? segments[segments.length - 1].toLowerCase() : 'index';
                }
            }

            // Map special cases
            if (base === 'index' || path === '/dashboard') return 'Dashboard';
            if (path.startsWith('/crm/leads')) return 'Leads & Opportunities';
            if (path.startsWith('/crm/pipeline')) return 'Sales Pipeline';
            if (path.startsWith('/crm/customers')) return 'Customers';
            if (path.startsWith('/vehicles/stock')) return 'Vehicle Inventory';
            if (path.startsWith('/vehicles/purchasing')) return 'Purchasing';
            if (path.startsWith('/sales/quotations')) return 'Quotations';
            if (path.startsWith('/sales/bookings')) return 'Bookings';
            if (path.startsWith('/sales/payments')) return 'Payments';
            if (path.startsWith('/targets/kpi')) return 'Targets & KPI';
            if (path.startsWith('/targets/commission-settings')) return 'Commission Settings';
            if (path.startsWith('/targets/commission')) return 'Commission & Closing';
            if (path.startsWith('/parts/inventory')) return 'Spare Parts';
            if (path.startsWith('/parts/orders')) return 'Parts Purchase Orders';
            if (path.startsWith('/workshop/jobs')) return 'Workshop & Job Cards';
            if (path.startsWith('/after-sales/warranty')) return 'Warranty';
            if (path.startsWith('/after-sales/packages')) return 'Service Packages';
            if (path.startsWith('/after-sales/checkups')) return 'Checkup Reminders';
            if (path.startsWith('/expansion/accounting')) return 'Accounting Integration';
            if (path.startsWith('/expansion/portal')) return 'Customer Portal';
            if (path.startsWith('/expansion/channels')) return 'Channel Integrations';
            if (path.startsWith('/reports/sales')) return 'Sales & Revenue';
            if (path.startsWith('/reports/kpi')) return 'Targets & KPI';
            if (path.startsWith('/reports/profit-cash')) return 'Profit & Cash';
            if (path.startsWith('/reports/receivables')) return 'Receivables & Payables';
            if (path.startsWith('/reports/leads-conversion')) return 'Leads & Conversion';
            if (path.startsWith('/reports/inventory-service')) return 'Inventory & Service';

            // Default: make readable (handle hyphens, underscores, camelCase) and capitalize
            const readable = base.replace(/[-_]/g, ' ').replace(/([a-z])([A-Z])/g, '$1 $2');
            return readable.replace(/\b\w/g, c => c.toUpperCase());
        }
    },
    setup() {
        const isDarkMode = ref(false);
        const route = useRoute();

        const setThemeAttribute = (enabled) => {
            document.documentElement.setAttribute("data-bs-theme", enabled ? "dark" : "light");
        };

        const toggleDarkMode = () => {
            isDarkMode.value = !isDarkMode.value;
            localStorage.setItem("dark", isDarkMode.value ? "enabled" : "disabled");
            setThemeAttribute(isDarkMode.value);
        };

        const initializeDarkMode = () => {
            const darkMode = localStorage.getItem("dark");
            isDarkMode.value = darkMode === "enabled";
            setThemeAttribute(isDarkMode.value);
        };

        onMounted(() => {
            initializeDarkMode();
        });

        return {
            isDarkMode,
            toggleDarkMode,
            route,
            isSidebarCollapsed
        };
    },
    methods: {
        toggleSidebar() {
            const body = document.body;
            body.classList.toggle("slide-nav");
        },
        toggleSidebarDesktop() {
            toggleSidebarCollapsed();
        },
        notifyAction(message) {
            notify(message);
        },
        markAllRead() {
            notify('All notifications marked as read', 'info');
        },
        changeLocale(code) {
            if (code === i18n.global.locale.value) return;
            const rest = (this.$route.path || '').replace(/^\/(en|km|zh)(?=\/|$)/, '') || '/dashboard';
            this.$router.push('/' + code + rest);
        }
    }
}
</script>