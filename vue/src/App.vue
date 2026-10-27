<template>
  <div class="main-wrapper">
    <template v-if="shouldShowHeaderAndSidebar">
      <layout-sidebar />
    </template>

    <router-view />
    <record-details />
    <report-preview />
  </div>
</template>

<script>
export default {
  computed: {
    // Hide header and sidebar on login/register pages
    shouldShowHeaderAndSidebar() {
      const path = this.$route.path
      return !(
        path === '/' ||
        path.includes('/login') ||
        path.includes('/register') ||
        path.includes('/forgot-password') ||
        path.includes('/email-verification') ||
        path.includes('/otp') ||
        path.includes('/reset-password') ||
        path.includes('/main-menu/pos')
      )
    },
  },
}
</script>
