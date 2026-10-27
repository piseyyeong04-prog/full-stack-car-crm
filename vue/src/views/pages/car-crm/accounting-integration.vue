<template>
    <div class="page-wrapper">
        <div class="content">
            <layout-header></layout-header>

            <div class="content-wrap">
                <div class="d-flex align-items-center flex-wrap gap-3 border-bottom pb-4 mb-4">
                    <div class="flex-grow-1">
                        <h4 class="mb-1">Accounting Integration</h4>
                        <p class="text-muted mb-0">Connect the accounting system, map accounts and sync transactions.</p>
                    </div>
                    <div class="d-flex align-items-center gap-2">
                        <button class="btn btn-white d-inline-flex align-items-center" @click="syncing = true" :disabled="syncing">
                            <i class="icon-refresh-cw me-1" :class="{ 'spin': syncing }"></i>{{ syncing ? 'Syncing...' : 'Sync Now' }}
                        </button>
                        <button class="btn btn-primary d-inline-flex align-items-center" data-bs-toggle="offcanvas"
                            data-bs-target="#connect_accounting">
                            <i class="icon-plug me-1"></i>Connection Settings
                        </button>
                    </div>
                </div>

                <div class="row g-4 mb-4">
                    <div class="col-xxl-4 col-md-6">
                        <div class="card dash-card mb-0">
                            <div class="card-body">
                                <div class="d-flex align-items-center justify-content-between mb-3">
                                    <h6 class="mb-0">Status</h6>
                                    <span class="badge badge-soft-success text-dark">
                                        <span class="dot bg-success me-1"></span>{{ accounting.status }}
                                    </span>
                                </div>
                                <h4 class="mb-1">{{ accounting.provider }}</h4>
                                <p class="mb-0 fs-13">{{ accounting.company }}</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-xxl-4 col-md-6">
                        <div class="card dash-card mb-0">
                            <div class="card-body">
                                <h6 class="mb-3">Last Sync</h6>
                                <h4 class="mb-1">{{ accounting.lastSync }}</h4>
                                <p class="mb-0 fs-13">{{ accounting.syncFrequency }} · {{ accounting.environment }}</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-xxl-4 col-md-12">
                        <div class="card dash-card mb-0">
                            <div class="card-body">
                                <h6 class="mb-3">Mapped Accounts</h6>
                                <h4 class="mb-1">{{ mappedCount }} / {{ accountMappings.length }}</h4>
                                <p class="mb-0 fs-13">{{ pendingMappings }} pending mapping</p>
                            </div>
                        </div>
                    </div>
                </div>

                <ul class="nav nav-tabs mb-4">
                    <li class="nav-item">
                        <a href="javascript:void(0);" class="nav-link" :class="{ active: tab === 'mapping' }" @click="tab = 'mapping'">
                            <i class="icon-link me-1"></i>Account Mapping
                        </a>
                    </li>
                    <li class="nav-item">
                        <a href="javascript:void(0);" class="nav-link" :class="{ active: tab === 'rules' }" @click="tab = 'rules'">
                            <i class="icon-scale me-1"></i>Recognition Rules
                        </a>
                    </li>
                    <li class="nav-item">
                        <a href="javascript:void(0);" class="nav-link" :class="{ active: tab === 'log' }" @click="tab = 'log'">
                            <i class="icon-history me-1"></i>Sync Log
                        </a>
                    </li>
                </ul>

                <div class="table-responsive table-nowrap" v-if="tab === 'mapping'">
                    <table class="table mb-0">
                        <thead class="table-light">
                            <tr>
                                <th>Source</th>
                                <th>GL Account</th>
                                <th>Type</th>
                                <th class="no-sort">Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="m in accountMappings" :key="m.id">
                                <td class="fw-medium">{{ m.source }}</td>
                                <td>{{ m.glAccount }}</td>
                                <td><span class="badge bg-light text-dark">{{ m.type }}</span></td>
                                <td>
                                    <span class="badge" :class="m.status === 'Mapped' ? 'badge-soft-success text-dark' : m.status === 'Pending' ? 'badge-soft-warning text-dark' : 'badge-soft-danger text-dark'">
                                        {{ m.status }}
                                    </span>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <div class="row g-4" v-else-if="tab === 'rules'">
                    <div class="col-md-6" v-for="rule in recognitionRules" :key="rule.id">
                        <div class="card mb-0">
                            <div class="card-body d-flex align-items-start justify-content-between gap-3">
                                <div>
                                    <h6 class="fs-14 fw-semibold mb-1">{{ rule.name }}</h6>
                                    <p class="fs-13 mb-0 text-muted">Basis: {{ rule.basis }}</p>
                                </div>
                                <span class="badge" :class="rule.status === 'Active' ? 'badge-soft-success text-dark' : 'badge-soft-secondary text-dark'">
                                    {{ rule.status }}
                                </span>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="table-responsive table-nowrap" v-else>
                    <table class="table mb-0">
                        <thead class="table-light">
                            <tr>
                                <th>Log ID</th>
                                <th>Time</th>
                                <th>Direction</th>
                                <th>Records</th>
                                <th class="no-sort">Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="log in syncLog" :key="log.id">
                                <td class="fw-medium">{{ log.id }}</td>
                                <td>{{ log.time }}</td>
                                <td>
                                    <span class="badge bg-light text-dark">
                                        <i :class="log.direction === 'Push' ? 'icon-arrow-up-right' : 'icon-arrow-down-left'" class="me-1"></i>
                                        {{ log.direction }}
                                    </span>
                                </td>
                                <td>{{ log.records }}</td>
                                <td>
                                    <span class="badge" :class="logStatusClass(log.status)">{{ log.status }}</span>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>

    <div class="offcanvas offcanvas-end" tabindex="-1" id="connect_accounting">
        <div class="offcanvas-header d-flex align-items-center justify-content-between">
            <h4 class="offcanvas-title mb-0">Connection Settings</h4>
            <button type="button" class="btn-close btn-close-modal" data-bs-dismiss="offcanvas" aria-label="Close">
                <i class="icon-x"></i>
            </button>
        </div>
        <form class="d-flex flex-column overflow-y-auto h-100" @submit.prevent="saveSettings">
            <div class="offcanvas-body pb-0">
                <div class="row gx-3">
                    <div class="col-md-12">
                        <div class="mb-3">
                            <label class="form-label">Provider</label>
                            <vue-select :options="providers" v-model="form.provider" placeholder="Select" />
                        </div>
                    </div>
                    <div class="col-md-12">
                        <div class="mb-3">
                            <label class="form-label">Company</label>
                            <input type="text" class="form-control" v-model="form.company">
                        </div>
                    </div>
                    <div class="col-lg-6 col-md-12">
                        <div class="mb-3">
                            <label class="form-label">Environment</label>
                            <vue-select :options="['Production', 'Sandbox']" v-model="form.environment" placeholder="Select" />
                        </div>
                    </div>
                    <div class="col-lg-6 col-md-12">
                        <div class="mb-3">
                            <label class="form-label">Sync Frequency</label>
                            <vue-select :options="['Real-time', 'Every hour', 'Every 6 hours', 'Daily']" v-model="form.syncFrequency" placeholder="Select" />
                        </div>
                    </div>
                    <div class="col-md-12">
                        <div class="form-check form-switch mb-3">
                            <input class="form-check-input" type="checkbox" id="auto_sync" v-model="form.autoSync">
                            <label class="form-check-label" for="auto_sync">Automatic sync</label>
                        </div>
                    </div>
                </div>
            </div>
            <div class="offcanvas-footer d-flex align-items-center gap-2 pt-2">
                <button type="button" class="btn btn-dark d-flex align-items-center w-100" data-bs-dismiss="offcanvas">
                    <i class="icon-x me-1"></i>Cancel
                </button>
                <button type="submit" class="btn btn-primary d-flex align-items-center w-100">
                    <i class="icon-circle-check me-1"></i>Save Settings
                </button>
            </div>
        </form>
    </div>
</template>

<script>
import { accounting, accountMappings, recognitionRules, syncLog } from '@/data/expansion'
import { hideOffcanvas } from '@/utils/offcanvas'
import { notify } from '@/utils/ui'

export default {
    name: 'AccountingIntegration',
    data() {
        return {
            accounting,
            accountMappings,
            recognitionRules,
            syncLog,
            tab: 'mapping',
            syncing: false,
            providers: ['QuickBooks Online', 'Xero', 'Sage', 'Microsoft Dynamics'],
            form: {
                provider: accounting.provider,
                company: accounting.company,
                environment: accounting.environment,
                syncFrequency: accounting.syncFrequency,
                autoSync: accounting.autoSync,
            },
        }
    },
    computed: {
        mappedCount() {
            return this.accountMappings.filter(m => m.status === 'Mapped').length
        },
        pendingMappings() {
            return this.accountMappings.filter(m => m.status !== 'Mapped').length
        },
    },
    methods: {
        logStatusClass(status) {
            if (status === 'Success') return 'badge-soft-success text-dark'
            if (status === 'Warning') return 'badge-soft-warning text-dark'
            return 'badge-soft-danger text-dark'
        },
        saveSettings() {
            this.accounting.provider = this.form.provider
            this.accounting.company = this.form.company
            this.accounting.environment = this.form.environment
            this.accounting.syncFrequency = this.form.syncFrequency
            this.accounting.autoSync = this.form.autoSync
            notify('Accounting connection settings saved')
            hideOffcanvas('connect_accounting')
        },
    },
    watch: {
        syncing(value) {
            if (value) {
                notify('Syncing with ' + this.accounting.provider + '...', 'info')
                setTimeout(() => {
                    this.syncing = false
                    notify('Sync completed successfully')
                }, 1500)
            }
        },
    },
}
</script>

<style scoped>
.spin {
    animation: spin 1s linear infinite;
}
@keyframes spin {
    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); }
}
</style>
