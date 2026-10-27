import { createApp } from "vue";
import { router } from './router';
import { i18n } from './i18n';
import App from "./App.vue";
import Antd from 'ant-design-vue';
import VueSelect from 'vue-select'
import 'vue-select/dist/vue-select.css'
import VueApexCharts from "vue3-apexcharts";
import Multiselect from 'vue-multiselect'
import 'vue-multiselect/dist/vue-multiselect.css'

import "bootstrap/dist/css/bootstrap.min.css";
import * as bootstrap from 'bootstrap'
window.bootstrap = bootstrap
import "@fortawesome/fontawesome-free/css/fontawesome.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "ant-design-vue/dist/reset.css";
import "@/assets/icons/lucide/lucide.css"
import '@/assets/scss/main.scss'

// ---------- Layout Component ---------- //

import LayoutsSidebar from "@/views/layouts/layouts-sidebar.vue";
import LayoutsHeader from "@/views/layouts/layouts-header.vue";
import BasePagination from "@/components/BasePagination.vue";
import RecordDetails from "@/components/RecordDetails.vue";
import ReportPreview from "@/components/ReportPreview.vue";
import PosCounter from "@/components/pos-counter.vue";
import CounterIndex from "@/components/counter-index.vue";


// ---------- Pages Component ---------- //

import reportsTop from "@/views/pages/reports/reports-top.vue";
import settingsSidebar from "@/views/pages/settings/settings-sidebar.vue";
import productsTop from "@/views/pages/products/product-top.vue";
import ChooseService from "@/views/pages/pos/choose-service.vue";


// ---------- Modal Component ---------- //

import DashboardModal from "@/components/modal/dashboard-modal.vue";
import TaxSettingsModal from "@/components/modal/tax-settings-modal.vue";
import PermissionsSettingsModal from "@/components/modal/permissions-settings-modal.vue";
import StaffModal from "@/components/modal/staff-modal.vue";
import DriversModal from "@/components/modal/drivers-modal.vue";
import CustomersModal from "@/components/modal/customers-modal.vue";
import InvoicesModal from "@/components/modal/invoices-modal.vue";
import PosModal from "@/components/modal/pos-modal.vue";
import OrdersListModal from "@/components/modal/orders-list-modal.vue";
import ProductsModal from "@/components/modal/products-modal.vue";
import ServicesModal from "@/components/modal/services-modal.vue";
import CategoryModal from "@/components/modal/category-modal.vue";
import AddonModal from "@/components/modal/addon-modal.vue";


const app = createApp(App);

// Locale-aware link helper (prefixes app links with the active locale)
app.mixin({
  methods: {
    lp(path) {
      const locale = i18n.global.locale.value;
      if (typeof path !== 'string') return path;
      return '/' + locale + (path.startsWith('/') ? path : '/' + path);
    },
  },
});


// ---------- Layout Component ---------- //

app.component('layout-sidebar', LayoutsSidebar)
app.component('layout-header', LayoutsHeader)
app.component('base-pagination', BasePagination)
app.component('record-details', RecordDetails)
app.component('report-preview', ReportPreview)
app.component('pos-counter', PosCounter)
app.component('counter-index', CounterIndex)

// ---------- Pages Component ---------- //

app.component('reports-top', reportsTop)
app.component('settings-sidebar', settingsSidebar)
app.component('products-top', productsTop)
app.component('choose-service', ChooseService)


// ---------- Modal Component ---------- //

app.component('dashboard-modal', DashboardModal)
app.component('tax-settings-modal', TaxSettingsModal)
app.component('permissions-settings-modal', PermissionsSettingsModal)
app.component('staff-modal', StaffModal)
app.component('drivers-modal', DriversModal)
app.component('customers-modal', CustomersModal)
app.component('invoices-modal', InvoicesModal)
app.component('pos-modal', PosModal)
app.component('orders-list-modal', OrdersListModal)
app.component('products-modal', ProductsModal)
app.component('services-modal', ServicesModal)
app.component('category-modal', CategoryModal)
app.component('addon-modal', AddonModal)

app.use(Antd)
app.use(i18n)
app.use(VueApexCharts)
app.component('vue-multiselect', Multiselect);
app.component('vue-select', VueSelect)
app.use(router).mount('#app'); 
