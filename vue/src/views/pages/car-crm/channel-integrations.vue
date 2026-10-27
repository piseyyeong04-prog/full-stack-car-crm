<template>
    <div class="page-wrapper">
        <div class="content">
            <layout-header></layout-header>

            <div class="content-wrap">
                <div class="d-flex align-items-center flex-wrap gap-3 border-bottom pb-4 mb-4">
                    <div class="flex-grow-1">
                        <h4 class="mb-1">Channel Integrations</h4>
                        <p class="text-muted mb-0">External lead sources, campaign sync and lead routing rules.</p>
                    </div>
                </div>

                <div class="row g-4 mb-4">
                    <div class="col-xxl-4 col-md-4">
                        <div class="card dash-card mb-0">
                            <div class="card-body">
                                <h6 class="mb-2">Connected Channels</h6>
                                <h3 class="mb-0">{{ connectedCount }} / {{ channels.length }}</h3>
                            </div>
                        </div>
                    </div>
                    <div class="col-xxl-4 col-md-4">
                        <div class="card dash-card mb-0">
                            <div class="card-body">
                                <h6 class="mb-2">Leads Received</h6>
                                <h3 class="mb-0">{{ totalLeads }}</h3>
                            </div>
                        </div>
                    </div>
                    <div class="col-xxl-4 col-md-4">
                        <div class="card dash-card mb-0">
                            <div class="card-body">
                                <h6 class="mb-2">Avg. Conversion</h6>
                                <h3 class="mb-0">{{ avgConversion }}%</h3>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Channel cards -->
                <div class="row g-4 mb-4">
                    <div class="col-xxl-4 col-md-6" v-for="ch in channels" :key="ch.id">
                        <div class="card mb-0 h-100">
                            <div class="card-body d-flex flex-column">
                                <div class="d-flex align-items-center justify-content-between mb-3">
                                    <span class="avatar avatar-md rounded-circle bg-light">
                                        <i :class="ch.icon" class="fs-18"></i>
                                    </span>
                                    <span class="badge" :class="ch.status === 'Connected' ? 'badge-soft-success text-dark' : 'badge-soft-secondary text-dark'">
                                        <span class="dot me-1" :class="ch.status === 'Connected' ? 'bg-success' : 'bg-secondary'"></span>
                                        {{ ch.status }}
                                    </span>
                                </div>
                                <h6 class="fs-15 fw-semibold mb-1">{{ ch.name }}</h6>
                                <p class="fs-13 mb-3 text-muted">{{ ch.type }} · Last sync {{ ch.lastSync }}</p>
                                <div class="row g-2 mb-3">
                                    <div class="col-4">
                                        <p class="mb-0 fs-12 text-muted">Campaigns</p>
                                        <h6 class="mb-0">{{ ch.campaigns }}</h6>
                                    </div>
                                    <div class="col-4">
                                        <p class="mb-0 fs-12 text-muted">Leads</p>
                                        <h6 class="mb-0">{{ ch.leads }}</h6>
                                    </div>
                                    <div class="col-4">
                                        <p class="mb-0 fs-12 text-muted">Conv.</p>
                                        <h6 class="mb-0">{{ ch.conversion }}%</h6>
                                    </div>
                                </div>
                                <button class="btn w-100 mt-auto"
                                    :class="ch.status === 'Connected' ? 'btn-white' : 'btn-primary'"
                                    @click="toggleChannel(ch)">
                                    <i :class="ch.status === 'Connected' ? 'icon-unplug' : 'icon-plug'" class="me-1"></i>
                                    {{ ch.status === 'Connected' ? 'Disconnect' : 'Connect' }}
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Routing rules -->
                <div class="card">
                    <div class="card-body">
                        <div class="card-header pt-0 ps-0 pe-0 mb-4 d-flex align-items-center justify-content-between">
                            <h5 class="mb-0">Lead Routing Rules</h5>
                            <span class="badge bg-white text-dark border fw-medium">Assignment + ownership</span>
                        </div>
                        <div class="table-responsive table-nowrap">
                            <table class="table mb-0">
                                <thead class="table-light">
                                    <tr>
                                        <th>Rule</th>
                                        <th>Channel</th>
                                        <th>Action</th>
                                        <th class="no-sort">Status</th>
                                        <th class="no-sort">Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr v-for="rule in routingRules" :key="rule.id">
                                        <td class="fw-medium">{{ rule.id }}</td>
                                        <td>{{ rule.channel }}</td>
                                        <td>{{ rule.action }}</td>
                                        <td>
                                            <span class="badge" :class="rule.status === 'Active' ? 'badge-soft-success text-dark' : 'badge-soft-warning text-dark'">
                                                {{ rule.status }}
                                            </span>
                                        </td>
                                        <td>
                                            <button class="btn btn-sm btn-white" @click="toggleRule(rule)">
                                                {{ rule.status === 'Active' ? 'Pause' : 'Activate' }}
                                            </button>
                                        </td>
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
import { channels, routingRules } from '@/data/expansion'
import { notify } from '@/utils/ui'

export default {
    name: 'ChannelIntegrations',
    data() {
        return {
            channels,
            routingRules,
        }
    },
    computed: {
        connectedCount() {
            return this.channels.filter(c => c.status === 'Connected').length
        },
        totalLeads() {
            return this.channels.reduce((sum, c) => sum + c.leads, 0)
        },
        avgConversion() {
            const active = this.channels.filter(c => c.status === 'Connected')
            if (!active.length) return 0
            return Math.round(active.reduce((sum, c) => sum + c.conversion, 0) / active.length)
        },
    },
    methods: {
        toggleChannel(ch) {
            ch.status = ch.status === 'Connected' ? 'Disconnected' : 'Connected'
            if (ch.status === 'Connected' && ch.lastSync === '—') ch.lastSync = 'just now'
            notify(`${ch.name} ${ch.status.toLowerCase()}`)
        },
        toggleRule(rule) {
            rule.status = rule.status === 'Active' ? 'Paused' : 'Active'
            notify(`${rule.id} ${rule.status.toLowerCase()}`)
        },
    },
}
</script>

<style scoped>
.fs-12 { font-size: 12px; }
.fs-15 { font-size: 15px; }
.fs-18 { font-size: 18px; }
</style>
