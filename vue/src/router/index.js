import { createRouter, createWebHistory } from 'vue-router'
import { i18n, setLocale, availableLocales } from '@/i18n'

const locales = availableLocales.map((l) => l.code)

const children = [
  { path: '', redirect: 'dashboard' },
  {
    path: 'login',
    name: 'login',
    component: () => import('@/views/pages/authentication/login.vue'),
    meta: { title: 'Login | Car Dealership CRM' },
  },
  {
    path: 'register',
    name: 'register',
    component: () => import('@/views/pages/authentication/register.vue'),
    meta: { title: 'Register | Car Dealership CRM' },
  },
  {
    path: 'forgot-password',
    name: 'forgot-password',
    component: () => import('@/views/pages/authentication/forgot-password.vue'),
    meta: { title: 'Forgot Password | Car Dealership CRM' },
  },
  {
    path: 'email-verification',
    name: 'email-verification',
    component: () => import('@/views/pages/authentication/email-verification.vue'),
    meta: { title: 'Email Verification | Car Dealership CRM' },
  },
  {
    path: 'otp',
    name: 'otp',
    component: () => import('@/views/pages/authentication/otp.vue'),
    meta: { title: 'OTP | Car Dealership CRM' },
  },
  {
    path: 'reset-password',
    name: 'reset-password',
    component: () => import('@/views/pages/authentication/reset-password.vue'),
    meta: { title: 'Reset Password | Car Dealership CRM' },
  },
  {
    path: 'dashboard',
    name: 'dashboard',
    component: () => import('@/views/pages/dashboard/dashboard.vue'),
    meta: { title: 'Dashboard | Car Dealership CRM' },
  },
  {
    path: 'crm/leads',
    name: 'crm-leads',
    component: () => import('@/views/pages/car-crm/leads-list.vue'),
    meta: { title: 'Leads & Opportunities | Car Dealership CRM' },
  },
  {
    path: 'crm/pipeline',
    name: 'crm-pipeline',
    component: () => import('@/views/pages/car-crm/pipeline.vue'),
    meta: { title: 'Sales Pipeline | Car Dealership CRM' },
  },
  {
    path: 'crm/customers',
    name: 'crm-customers',
    component: () => import('@/views/pages/car-crm/customers-list.vue'),
    meta: { title: 'Customers | Car Dealership CRM' },
  },
  {
    path: 'vehicles/stock',
    name: 'vehicle-stock',
    component: () => import('@/views/pages/car-crm/vehicle-stock.vue'),
    meta: { title: 'Vehicle Inventory | Car Dealership CRM' },
  },
  {
    path: 'vehicles/purchasing',
    name: 'vehicle-purchasing',
    component: () => import('@/views/pages/car-crm/purchasing.vue'),
    meta: { title: 'Purchasing | Car Dealership CRM' },
  },
  {
    path: 'sales/quotations',
    name: 'sales-quotations',
    component: () => import('@/views/pages/car-crm/quotations.vue'),
    meta: { title: 'Quotations | Car Dealership CRM' },
  },
  {
    path: 'sales/bookings',
    name: 'sales-bookings',
    component: () => import('@/views/pages/car-crm/bookings.vue'),
    meta: { title: 'Bookings | Car Dealership CRM' },
  },
  {
    path: 'sales/payments',
    name: 'sales-payments',
    component: () => import('@/views/pages/car-crm/payments.vue'),
    meta: { title: 'Payments | Car Dealership CRM' },
  },
  {
    path: 'targets/kpi',
    name: 'targets-kpi',
    component: () => import('@/views/pages/car-crm/targets-kpi.vue'),
    meta: { title: 'Targets & KPI | Car Dealership CRM' },
  },
  {
    path: 'targets/commission',
    name: 'targets-commission',
    component: () => import('@/views/pages/car-crm/commission.vue'),
    meta: { title: 'Commission & Closing | Car Dealership CRM' },
  },
  {
    path: 'targets/commission-settings',
    name: 'commission-settings',
    component: () => import('@/views/pages/car-crm/commission-settings.vue'),
    meta: { title: 'Commission Settings | Car Dealership CRM' },
  },
  {
    path: 'parts/inventory',
    name: 'parts-inventory',
    component: () => import('@/views/pages/car-crm/parts-list.vue'),
    meta: { title: 'Spare Parts | Car Dealership CRM' },
  },
  {
    path: 'parts/orders',
    name: 'parts-orders',
    component: () => import('@/views/pages/car-crm/parts-orders.vue'),
    meta: { title: 'Parts Purchase Orders | Car Dealership CRM' },
  },
  {
    path: 'workshop/jobs',
    name: 'workshop-jobs',
    component: () => import('@/views/pages/car-crm/workshop-jobs.vue'),
    meta: { title: 'Workshop & Job Cards | Car Dealership CRM' },
  },
  {
    path: 'after-sales/warranty',
    name: 'warranty',
    component: () => import('@/views/pages/car-crm/warranty.vue'),
    meta: { title: 'Warranty | Car Dealership CRM' },
  },
  {
    path: 'after-sales/packages',
    name: 'service-packages',
    component: () => import('@/views/pages/car-crm/service-packages.vue'),
    meta: { title: 'Service Packages | Car Dealership CRM' },
  },
  {
    path: 'after-sales/checkups',
    name: 'checkup-reminders',
    component: () => import('@/views/pages/car-crm/checkup-reminders.vue'),
    meta: { title: 'Checkup Reminders | Car Dealership CRM' },
  },
  {
    path: 'expansion/accounting',
    name: 'accounting-integration',
    component: () => import('@/views/pages/car-crm/accounting-integration.vue'),
    meta: { title: 'Accounting Integration | Car Dealership CRM' },
  },
  {
    path: 'expansion/portal',
    name: 'customer-portal',
    component: () => import('@/views/pages/car-crm/customer-portal.vue'),
    meta: { title: 'Customer Portal | Car Dealership CRM' },
  },
  {
    path: 'expansion/channels',
    name: 'channel-integrations',
    component: () => import('@/views/pages/car-crm/channel-integrations.vue'),
    meta: { title: 'Channel Integrations | Car Dealership CRM' },
  },
  {
    path: 'reports/sales',
    name: 'report-sales',
    component: () => import('@/views/pages/car-crm/report-sales.vue'),
    meta: { title: 'Sales & Revenue Report | Car Dealership CRM' },
  },
  {
    path: 'reports/kpi',
    name: 'report-kpi',
    component: () => import('@/views/pages/car-crm/report-kpi.vue'),
    meta: { title: 'Targets & KPI Report | Car Dealership CRM' },
  },
  {
    path: 'reports/profit-cash',
    name: 'report-profit-cash',
    component: () => import('@/views/pages/car-crm/report-profit-cash.vue'),
    meta: { title: 'Profit & Cash Report | Car Dealership CRM' },
  },
  {
    path: 'reports/receivables',
    name: 'report-receivables',
    component: () => import('@/views/pages/car-crm/report-receivables.vue'),
    meta: { title: 'Receivables & Payables Report | Car Dealership CRM' },
  },
  {
    path: 'reports/leads-conversion',
    name: 'report-leads-conversion',
    component: () => import('@/views/pages/car-crm/report-leads-conversion.vue'),
    meta: { title: 'Leads & Conversion Report | Car Dealership CRM' },
  },
  {
    path: 'reports/inventory-service',
    name: 'report-inventory-service',
    component: () => import('@/views/pages/car-crm/report-inventory-service.vue'),
    meta: { title: 'Inventory & Service Report | Car Dealership CRM' },
  },
]

const routes = [
  { path: '/', redirect: () => `/${i18n.global.locale.value}/dashboard` },
  {
    path: `/:locale(${locales.join('|')})`,
    component: () => import('@/views/layouts/locale-layout.vue'),
    children,
  },
  {
    path: '/:pathMatch(.*)*',
    redirect: (to) => {
      const locale = i18n.global.locale.value
      const alreadyLocalized = new RegExp(`^/(${locales.join('|')})(/|$)`).test(to.path)
      return alreadyLocalized ? `/${locale}/dashboard` : `/${locale}${to.path}`
    },
  },
]

export const router = createRouter({
  history: createWebHistory('/'),
  linkActiveClass: 'active',
  routes,
})

router.beforeEach((to) => {
  const locale = to.params.locale
  if (locale && locales.includes(locale) && i18n.global.locale.value !== locale) {
    setLocale(locale)
  }
  document.title = to.meta.title || 'Car Dealership CRM'
  window.scrollTo({ top: 0, behavior: 'smooth' })
})
