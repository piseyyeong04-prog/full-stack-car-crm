<template>
    <div class="page-wrapper">
        <div class="content">
            <layout-header></layout-header>

            <div class="content-wrap">
                <div class="d-flex align-items-center flex-wrap gap-3 border-bottom pb-4 mb-4">
                    <div class="flex-grow-1">
                        <h4 class="mb-1">Customer Portal</h4>
                        <p class="text-muted mb-0">Preview what a customer sees for vehicles, services, packages and invoices.</p>
                    </div>
                    <div style="min-width: 240px;">
                        <vue-select :options="portalNames" v-model="selectedName" placeholder="Select customer" />
                    </div>
                </div>

                <div v-if="profile">
                    <!-- Portal header -->
                    <div class="card mb-4">
                        <div class="card-body d-flex align-items-center justify-content-between gap-3 flex-wrap">
                            <div class="d-flex align-items-center gap-3">
                                <span class="avatar avatar-xl rounded-circle bg-light">
                                    <i class="icon-user fs-24"></i>
                                </span>
                                <div>
                                    <h4 class="mb-1">{{ profile.name }}</h4>
                                    <p class="mb-0 fs-13">{{ profile.id }} · {{ profile.phone }}</p>
                                </div>
                            </div>
                            <div class="d-flex align-items-center gap-2">
                                <span class="badge badge-soft-success text-dark">
                                    <span class="dot bg-success me-1"></span>Portal Active
                                </span>
                            </div>
                        </div>
                    </div>

                    <!-- Summary -->
                    <div class="row g-4 mb-4">
                        <div class="col-xxl-3 col-md-6">
                            <div class="card dash-card mb-0">
                                <div class="card-body">
                                    <h6 class="mb-2">My Vehicles</h6>
                                    <h3 class="mb-0">{{ profile.vehicles.length }}</h3>
                                </div>
                            </div>
                        </div>
                        <div class="col-xxl-3 col-md-6">
                            <div class="card dash-card mb-0">
                                <div class="card-body">
                                    <h6 class="mb-2">Active Packages</h6>
                                    <h3 class="mb-0">{{ profile.packages.length }}</h3>
                                </div>
                            </div>
                        </div>
                        <div class="col-xxl-3 col-md-6">
                            <div class="card dash-card mb-0">
                                <div class="card-body">
                                    <h6 class="mb-2">Outstanding</h6>
                                    <h3 class="mb-0 text-danger">{{ money(outstanding) }}</h3>
                                </div>
                            </div>
                        </div>
                        <div class="col-xxl-3 col-md-6">
                            <div class="card dash-card mb-0">
                                <div class="card-body">
                                    <h6 class="mb-2">Service Visits</h6>
                                    <h3 class="mb-0">{{ profile.serviceHistory.length }}</h3>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="row g-4">
                        <!-- Vehicles -->
                        <div class="col-xl-6">
                            <div class="card flex-fill mb-0">
                                <div class="card-body">
                                    <div class="card-header pt-0 ps-0 pe-0 mb-4">
                                        <h5 class="mb-0">My Vehicles</h5>
                                    </div>
                                    <div v-for="v in profile.vehicles" :key="v.vin"
                                        class="border rounded p-3 mb-3">
                                        <div class="d-flex align-items-center justify-content-between mb-2">
                                            <h6 class="fs-14 fw-semibold mb-0">{{ v.model }}</h6>
                                            <span class="badge badge-soft-success text-dark">{{ v.status }}</span>
                                        </div>
                                        <p class="fs-13 mb-0">VIN: {{ v.vin }}</p>
                                    </div>
                                    <div v-for="b in profile.bookings" :key="b.id"
                                        class="border rounded p-3 mb-3">
                                        <div class="d-flex align-items-center justify-content-between mb-2">
                                            <h6 class="fs-14 fw-semibold mb-0">Booking {{ b.id }}</h6>
                                            <span class="badge" :class="b.status === 'Confirmed' ? 'badge-soft-success text-dark' : 'badge-soft-warning text-dark'">
                                                {{ b.status }}
                                            </span>
                                        </div>
                                        <p class="fs-13 mb-0">{{ b.vehicle }} · Deposit {{ money(b.deposit) }}</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <!-- Packages -->
                        <div class="col-xl-6">
                            <div class="card flex-fill mb-0">
                                <div class="card-body">
                                    <div class="card-header pt-0 ps-0 pe-0 mb-4">
                                        <h5 class="mb-0">Service Packages</h5>
                                    </div>
                                    <div v-for="p in profile.packages" :key="p.name" class="border rounded p-3 mb-3">
                                        <div class="d-flex align-items-center justify-content-between mb-2">
                                            <h6 class="fs-14 fw-semibold mb-0">{{ p.name }}</h6>
                                            <span class="badge bg-light text-dark">{{ p.allowance - p.used }} left</span>
                                        </div>
                                        <div class="progress mb-2" style="height: 6px;">
                                            <div class="progress-bar bg-primary"
                                                :style="{ width: Math.round((p.used / p.allowance) * 100) + '%' }"></div>
                                        </div>
                                        <p class="fs-13 mb-0">{{ p.used }} of {{ p.allowance }} used · expires {{ p.expiry }}</p>
                                    </div>
                                    <p v-if="!profile.packages.length" class="text-muted fs-13">No active packages.</p>
                                </div>
                            </div>
                        </div>

                        <!-- Invoices -->
                        <div class="col-xl-6">
                            <div class="card flex-fill mb-0">
                                <div class="card-body">
                                    <div class="card-header pt-0 ps-0 pe-0 mb-4">
                                        <h5 class="mb-0">Invoices</h5>
                                    </div>
                                    <div class="table-responsive table-nowrap">
                                        <table class="table mb-0">
                                            <thead class="table-light">
                                                <tr>
                                                    <th>Invoice</th>
                                                    <th>Date</th>
                                                    <th>Amount</th>
                                                    <th class="no-sort">Status</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr v-for="inv in profile.invoices" :key="inv.id">
                                                    <td class="fw-medium">{{ inv.id }}</td>
                                                    <td>{{ inv.date }}</td>
                                                    <td>{{ money(inv.amount) }}</td>
                                                    <td>
                                                        <span class="badge" :class="inv.status === 'Paid' ? 'badge-soft-success text-dark' : 'badge-soft-warning text-dark'">
                                                            {{ inv.status }}
                                                        </span>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <!-- Service history -->
                        <div class="col-xl-6">
                            <div class="card flex-fill mb-0">
                                <div class="card-body">
                                    <div class="card-header pt-0 ps-0 pe-0 mb-4">
                                        <h5 class="mb-0">Service History</h5>
                                    </div>
                                    <div v-for="s in profile.serviceHistory" :key="s.job"
                                        class="d-flex align-items-center justify-content-between gap-2 mb-4 flex-wrap">
                                        <div class="d-flex align-items-center gap-2">
                                            <span class="avatar border bg-light rounded-circle flex-shrink-0">
                                                <i class="icon-wrench fs-14 text-info"></i>
                                            </span>
                                            <div>
                                                <h6 class="fs-14 fw-semibold mb-1">{{ s.description }}</h6>
                                                <span class="fs-13">{{ s.job }} · {{ s.date }}</span>
                                            </div>
                                        </div>
                                        <span class="fw-semibold">{{ money(s.amount) }}</span>
                                    </div>
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
import { portalProfiles } from '@/data/expansion'
import { money } from '@/data/crm'

export default {
    name: 'CustomerPortal',
    data() {
        return {
            portalProfiles,
            money,
            selectedName: portalProfiles[0].name,
        }
    },
    computed: {
        portalNames() {
            return this.portalProfiles.map(p => p.name)
        },
        profile() {
            return this.portalProfiles.find(p => p.name === this.selectedName)
        },
        outstanding() {
            if (!this.profile) return 0
            return this.profile.invoices.reduce((sum, inv) => sum + (inv.amount - inv.paid), 0)
        },
    },
}
</script>
