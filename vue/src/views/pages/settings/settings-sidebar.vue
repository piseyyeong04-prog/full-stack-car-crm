<template>
    <div class="settings-sidebar d-flex align-items-start">
        <ul class="nav flex-column nav-pills w-100">
            <li>
                <router-link :to="lp('/settings/store-settings')" class="nav-link"><i class="icon-warehouse me-2"></i>Store
                    Settings</router-link>
            </li>
            <li>
                <router-link :to="lp('/settings/tax-settings')" class="nav-link"><i
                        class="icon-diamond-percent me-2"></i>Tax</router-link>
            </li>
            <li>
                <router-link :to="lp('/settings/print-settings')" class="nav-link"><i
                        class="icon-printer me-2"></i>Print</router-link>
            </li>
            <li>
                <router-link :to="lp('/settings/payment-settings')" class="nav-link"><i
                        class="icon-circle-dollar-sign me-2"></i>Payment
                    Types</router-link>
            </li>
            <li>
                <router-link :to="lp('/settings/delivery-settings')" class="nav-link"><i
                        class="icon-bike me-2"></i>Delivery</router-link>
            </li>
            <li>
                <router-link :to="lp('/settings/permissions-settings')" class="nav-link" :class="isActive ? 'active' : ''">
                    <i class="icon-user-cog me-2"></i>
                    Roles & Permissions
                </router-link>
            </li>
            <li>
                <router-link :to="lp('/settings/notifications-settings')" class="nav-link"><i
                        class="icon-bell me-2"></i>Notifications</router-link>
            </li>
            <li>
                <router-link :to="lp('/settings/integrations-settings')" class="nav-link mb-0"><i
                        class="icon-pin me-2"></i>Integrations /
                    API</router-link>
            </li>
        </ul>
    </div>
</template>
<script>
export default {
    computed: {
        isActive() {
            return [
                '/settings/permissions-settings',
                '/settings/roles-permissions'
            ].includes(this.$route.path)
        }
    }
}
</script>
