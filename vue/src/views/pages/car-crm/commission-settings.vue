<template>
    <div class="page-wrapper">
        <div class="content">
            <layout-header></layout-header>

            <div class="content-wrap">
                <div class="d-flex align-items-center flex-wrap gap-3 border-bottom pb-4 mb-4">
                    <div class="flex-grow-1">
                        <h4 class="mb-1">{{ $t('commissionSettings.title') }}</h4>
                        <p class="text-muted mb-0">{{ $t('commissionSettings.subtitle') }}</p>
                    </div>
                    <div class="d-flex align-items-center gap-2">
                        <router-link :to="lp('/targets/commission')" class="btn btn-white d-inline-flex align-items-center">
                            <i class="icon-arrow-left me-1"></i>{{ $t('commissionSettings.backCommission') }}
                        </router-link>
                        <button class="btn btn-primary d-inline-flex align-items-center" data-bs-toggle="offcanvas"
                            data-bs-target="#config_seller" @click="openCreate">
                            <i class="icon-plus me-1"></i>{{ $t('commissionSettings.addSeller') }}
                        </button>
                    </div>
                </div>

                <div class="alert alert-warning d-flex align-items-start gap-2">
                    <i class="icon-info mt-1"></i>
                    <div class="fs-13">
                        {{ $t('commissionSettings.policyNote') }}
                    </div>
                </div>

                <div class="row g-4 mb-4">
                    <div class="col-xxl-3 col-md-6">
                        <div class="card dash-card mb-0">
                            <div class="card-body">
                                <h6 class="mb-2">{{ $t('commissionSettings.sellersConfigured') }}</h6>
                                <h3 class="mb-0">{{ configuredSellerCount }}</h3>
                            </div>
                        </div>
                    </div>
                    <div class="col-xxl-3 col-md-6">
                        <div class="card dash-card mb-0">
                            <div class="card-body">
                                <h6 class="mb-2">{{ $t('commissionSettings.avgCommissionRate') }}</h6>
                                <h3 class="mb-0">{{ avgRate.toFixed(2) }}%</h3>
                            </div>
                        </div>
                    </div>
                    <div class="col-xxl-3 col-md-6">
                        <div class="card dash-card mb-0">
                            <div class="card-body">
                                <h6 class="mb-2">{{ $t('commissionSettings.totalUnitTarget') }}</h6>
                                <h3 class="mb-0">{{ totalUnitTarget }}</h3>
                            </div>
                        </div>
                    </div>
                    <div class="col-xxl-3 col-md-6">
                        <div class="card dash-card mb-0">
                            <div class="card-body">
                                <h6 class="mb-2">{{ $t('commissionSettings.activePolicies') }}</h6>
                                <h3 class="mb-0 text-success">{{ activeCount }}</h3>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="card">
                    <div class="card-body">
                        <div class="card-header pt-0 ps-0 pe-0 mb-4 d-flex align-items-center justify-content-between flex-wrap gap-2">
                            <h5 class="mb-0">{{ $t('commissionSettings.sellerCommissionPolicy') }}</h5>
                            <div class="search-input">
                                <span class="btn-searchset"><i class="icon-search fs-14"></i></span>
                                <input type="search" class="form-control search-addon" :placeholder="$t('commissionSettings.searchSeller')" v-model="searchQuery" />
                            </div>
                        </div>
                        <div class="table-responsive table-nowrap">
                            <table class="table mb-0">
                                <thead class="table-light">
                                    <tr>
                                        <th class="no-sort">{{ $t('commissionSettings.seller') }}</th>
                                        <th>{{ $t('commissionSettings.rate') }}</th>
                                        <th>{{ $t('commissionSettings.unitTarget') }}</th>
                                        <th>{{ $t('commissionSettings.revenueTarget') }}</th>
                                        <th>{{ $t('commissionSettings.cashTarget') }}</th>
                                        <th>{{ $t('commissionSettings.targetBonus') }}</th>
                                        <th>{{ $t('commissionSettings.bonusExtra') }}</th>
                                        <th>{{ $t('commissionSettings.effective') }}</th>
                                        <th>{{ $t('commissionSettings.version') }}</th>
                                        <th class="no-sort">{{ $t('commissionSettings.status') }}</th>
                                        <th class="no-sort text-end">{{ $t('commissionSettings.action') }}</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr v-for="c in filteredConfig" :key="`${c.name}-${c.version}`">
                                        <td>
                                            <div class="d-flex align-items-center">
                                                <span class="avatar avatar-sm avatar-rounded flex-shrink-0 me-2 bg-light">
                                                    <i class="icon-user fs-13"></i>
                                                </span>
                                                <div>
                                                    <h6 class="fs-14 fw-semibold mb-0">{{ c.name }}</h6>
                                                    <span class="fs-13">{{ c.team }}</span>
                                                </div>
                                            </div>
                                        </td>
                                        <td><span class="badge badge-soft-info text-dark">{{ c.commissionRate.toFixed(1) }}%</span></td>
                                        <td>{{ c.unitTarget }}</td>
                                        <td>{{ money(c.revenueTarget) }}</td>
                                        <td>{{ money(c.cashTarget) }}</td>
                                        <td>{{ money(c.targetBonus) }}</td>
                                        <td>{{ money(c.bonusPerExtra) }}</td>
                                        <td>{{ c.effectiveDate }}</td>
                                        <td><span class="badge bg-light text-dark">{{ c.version }}</span></td>
                                        <td>
                                            <span class="badge" :class="c.active ? 'badge-soft-success text-dark' : 'badge-soft-secondary text-dark'">
                                                {{ c.active ? $t('commissionSettings.active') : $t('commissionSettings.inactive') }}
                                            </span>
                                        </td>
                                        <td class="text-end">
                                            <div class="dropstart">
                                                <button class="btn btn-icon btn-white" type="button" data-bs-toggle="dropdown"
                                                    aria-label="Actions">
                                                    <i class="icon-ellipsis-vertical"></i>
                                                </button>
                                                <ul class="dropdown-menu p-3">
                                                    <li><a href="javascript:void(0);" class="dropdown-item rounded d-flex align-items-center" @click="openEdit(c)"><i class="icon-pencil-line me-2"></i>{{ $t('commissionSettings.editPolicy') }}</a></li>
                                                    <li><a href="javascript:void(0);" class="dropdown-item rounded d-flex align-items-center" @click="toggleActive(c)"><i class="icon-power me-2"></i>{{ c.active ? $t('commissionSettings.deactivate') : $t('commissionSettings.activate') }}</a></li>
                                                    <li><a href="javascript:void(0);" class="dropdown-item rounded d-flex align-items-center text-danger" @click="removeConfig(c)"><i class="icon-trash-2 me-2"></i>{{ $t('commissionSettings.delete') }}</a></li>
                                                </ul>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr v-if="!filteredConfig.length">
                                        <td colspan="11" class="text-center text-muted py-4">{{ $t('commissionSettings.empty') }}</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <!-- Add / Edit seller config -->
    <div class="offcanvas offcanvas-end" tabindex="-1" id="config_seller">
        <div class="offcanvas-header d-flex align-items-center justify-content-between">
            <h4 class="offcanvas-title mb-0">{{ editingName ? $t('commissionSettings.editSellerConfig') : $t('commissionSettings.addSeller') }}</h4>
            <button type="button" class="btn-close btn-close-modal" data-bs-dismiss="offcanvas" aria-label="Close">
                <i class="icon-x"></i>
            </button>
        </div>
        <form class="d-flex flex-column overflow-y-auto h-100" @submit.prevent="saveConfig">
            <div class="offcanvas-body pb-0">
                <div class="row gx-3">
                    <div class="col-md-12">
                        <div class="mb-3">
                            <label class="form-label">{{ $t('commissionSettings.sellerName') }}<span class="text-danger"> *</span></label>
                            <input type="text" class="form-control" v-model="form.name" required :disabled="!!editingName">
                        </div>
                    </div>
                    <div class="col-lg-6 col-md-12">
                        <div class="mb-3">
                            <label class="form-label">{{ $t('commissionSettings.team') }}</label>
                            <vue-select :options="teams" v-model="form.team" :placeholder="$t('commissionSettings.select')" />
                        </div>
                    </div>
                    <div class="col-lg-6 col-md-12">
                        <div class="mb-3">
                            <label class="form-label">{{ $t('commissionSettings.commissionRate') }} (%)</label>
                            <input type="number" min="0" max="100" step="0.1" class="form-control" v-model.number="form.commissionRate" required>
                        </div>
                    </div>
                    <div class="col-lg-6 col-md-12">
                        <div class="mb-3">
                            <label class="form-label">{{ $t('commissionSettings.unitTarget') }}</label>
                            <input type="number" min="0" step="1" class="form-control" v-model.number="form.unitTarget" required>
                        </div>
                    </div>
                    <div class="col-lg-6 col-md-12">
                        <div class="mb-3">
                            <label class="form-label">{{ $t('commissionSettings.revenueTarget') }}</label>
                            <input type="number" min="0" step="0.01" class="form-control" v-model.number="form.revenueTarget" required>
                        </div>
                    </div>
                    <div class="col-lg-6 col-md-12">
                        <div class="mb-3">
                            <label class="form-label">{{ $t('commissionSettings.cashTarget') }}</label>
                            <input type="number" min="0" step="0.01" class="form-control" v-model.number="form.cashTarget" required>
                        </div>
                    </div>
                    <div class="col-lg-6 col-md-12">
                        <div class="mb-3">
                            <label class="form-label">{{ $t('commissionSettings.targetBonus') }}</label>
                            <input type="number" min="0" step="0.01" class="form-control" v-model.number="form.targetBonus" required>
                        </div>
                    </div>
                    <div class="col-lg-6 col-md-12">
                        <div class="mb-3">
                            <label class="form-label">{{ $t('commissionSettings.bonusperExtraUnit') }}</label>
                            <input type="number" min="0" step="0.01" class="form-control" v-model.number="form.bonusPerExtra" required>
                        </div>
                    </div>
                    <div class="col-lg-6 col-md-12">
                        <div class="mb-3">
                            <label class="form-label">{{ $t('commissionSettings.effectiveDate') }}</label>
                            <input type="date" class="form-control" v-model="form.effectiveDate" required>
                        </div>
                    </div>
                    <div class="col-lg-6 col-md-12">
                        <div class="mb-3">
                            <label class="form-label">{{ $t('commissionSettings.version') }}</label>
                            <input type="text" class="form-control" v-model="form.version" readonly>
                        </div>
                    </div>
                    <div class="col-md-12">
                        <div class="form-check form-switch mb-3">
                            <input class="form-check-input" type="checkbox" id="cfg_active" v-model="form.active">
                            <label class="form-check-label" for="cfg_active">{{ $t('commissionSettings.policyActive') }}</label>
                        </div>
                    </div>
                </div>
            </div>
            <div class="offcanvas-footer d-flex align-items-center gap-2 pt-2">
                <button type="button" class="btn btn-dark d-flex align-items-center w-100" data-bs-dismiss="offcanvas">
                    <i class="icon-x me-1"></i>{{ $t('commissionSettings.cancel') }}
                </button>
                <button type="submit" class="btn btn-primary d-flex align-items-center w-100">
                    <i class="icon-circle-check me-1"></i>{{ editingName ? $t('commissionSettings.saveChanges') : $t('commissionSettings.addPolicy') }}
                </button>
            </div>
        </form>
    </div>
</template>

<script>
import { commissionConfig, defaultCommissionConfig } from '@/data/commissionConfig'
import { money } from '@/data/crm'
import { hideOffcanvas, showOffcanvas } from '@/utils/offcanvas'
import { notify } from '@/utils/ui'

export default {
    name: 'CommissionSettings',
    data() {
        return {
            commissionConfig,
            money,
            searchQuery: "",
            editingName: null,
            editingPolicy: null,
            teams: ['Team Alpha', 'Team Bravo'],
            form: defaultCommissionConfig(),
        }
    },
    computed: {
        filteredConfig() {
            const query = this.searchQuery.trim().toLowerCase()
            return this.commissionConfig.filter((c) =>
                String(c.name || '').toLowerCase().includes(query) || String(c.team || '').toLowerCase().includes(query)
            )
        },
        configuredSellerCount() {
            return new Set(this.commissionConfig.map((policy) => String(policy.name || '').trim().toLowerCase()).filter(Boolean)).size
        },
        avgRate() {
            const activePolicies = this.commissionConfig.filter((policy) => policy.active)
            if (!activePolicies.length) return 0
            return activePolicies.reduce((sum, policy) => sum + Number(policy.commissionRate || 0), 0) / activePolicies.length
        },
        totalUnitTarget() {
            return this.commissionConfig.filter((policy) => policy.active)
                .reduce((sum, policy) => sum + Number(policy.unitTarget || 0), 0)
        },
        activeCount() {
            return this.commissionConfig.filter((c) => c.active).length
        },
    },
    methods: {
        openCreate() {
            this.editingName = null
            this.editingPolicy = null
            this.form = defaultCommissionConfig()
        },
        openEdit(c) {
            this.editingName = c.name
            this.editingPolicy = c
            this.form = { ...c, version: this.nextPolicyVersion(c.name) }
            showOffcanvas('config_seller')
        },
        nextPolicyVersion(name) {
            const latestVersion = this.commissionConfig
                .filter((policy) => policy.name === name)
                .reduce((maxVersion, policy) => {
                    const versionNumber = Number(String(policy.version).match(/\d+/)?.[0]) || 0
                    return Math.max(maxVersion, versionNumber)
                }, 0)
            return `v${latestVersion + 1}`
        },
        saveConfig() {
            const sellerName = String(this.form.name || '').trim()
            const numericFields = ['commissionRate', 'unitTarget', 'revenueTarget', 'cashTarget', 'targetBonus', 'bonusPerExtra']
            const hasInvalidNumber = numericFields.some((field) =>
                this.form[field] === '' || this.form[field] === null || !Number.isFinite(Number(this.form[field])) || Number(this.form[field]) < 0
            )
            if (!sellerName || hasInvalidNumber || Number(this.form.commissionRate) > 100 || !this.form.effectiveDate) {
                notify(this.$t('commissionSettings.invalidPolicy'), 'warning')
                return
            }
            const payload = {
                ...this.form,
                name: sellerName,
                team: String(this.form.team || '').trim() || 'Team Alpha',
                commissionRate: Number(this.form.commissionRate),
                unitTarget: Number(this.form.unitTarget),
                revenueTarget: Number(this.form.revenueTarget),
                cashTarget: Number(this.form.cashTarget),
                targetBonus: Number(this.form.targetBonus),
                bonusPerExtra: Number(this.form.bonusPerExtra),
            }
            if (this.editingName) {
                const record = this.editingPolicy
                if (!record) {
                    notify(this.$t('commissionSettings.policyNotFound'), 'warning')
                    return
                }
                this.commissionConfig.filter((policy) => policy.name === this.editingName)
                    .forEach((policy) => { policy.active = false })
                this.commissionConfig.unshift({ ...payload, version: this.nextPolicyVersion(this.editingName) })
                notify(this.$t('commissionSettings.versionCreated', { name: this.editingName }))
            } else {
                if (this.commissionConfig.some((c) => String(c.name || '').trim().toLowerCase() === payload.name.toLowerCase())) {
                    notify(this.$t('commissionSettings.duplicateSeller'), 'warning')
                    return
                }
                this.commissionConfig.unshift(payload)
                notify(this.$t('commissionSettings.policyAdded', { name: payload.name }))
            }
            this.editingName = null
            this.editingPolicy = null
            this.form = defaultCommissionConfig()
            hideOffcanvas('config_seller')
        },
        toggleActive(c) {
            if (!c.active) {
                this.commissionConfig
                    .filter((policy) => policy.name === c.name && policy !== c)
                    .forEach((policy) => { policy.active = false })
            }
            c.active = !c.active
            notify(this.$t(c.active ? 'commissionSettings.policyActivated' : 'commissionSettings.policyDeactivated', { name: c.name }))
        },
        removeConfig(c) {
            const i = this.commissionConfig.indexOf(c)
            if (i > -1) {
                this.commissionConfig.splice(i, 1)
                notify(this.$t('commissionSettings.policyRemoved', { name: c.name }))
            }
        },
    },
}
</script>
