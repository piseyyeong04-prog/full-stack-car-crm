<template>
    <div class="page-wrapper">
        <div class="content">
            <layout-header></layout-header>

            <div class="content-wrap">
                <div class="d-flex align-items-center flex-wrap gap-3 border-bottom pb-4 mb-4">
                    <div class="flex-grow-1">
                        <h4 class="mb-1">Commission Settings</h4>
                        <p class="text-muted mb-0">Configure commission rate, targets and bonus policy for each seller.</p>
                    </div>
                    <div class="d-flex align-items-center gap-2">
                        <router-link :to="lp('/targets/commission')" class="btn btn-white d-inline-flex align-items-center">
                            <i class="icon-arrow-left me-1"></i>Back to Commission
                        </router-link>
                        <button class="btn btn-primary d-inline-flex align-items-center" data-bs-toggle="offcanvas"
                            data-bs-target="#config_seller" @click="openCreate">
                            <i class="icon-plus me-1"></i>Add Seller Config
                        </button>
                    </div>
                </div>

                <div class="alert alert-warning d-flex align-items-start gap-2">
                    <i class="icon-info mt-1"></i>
                    <div class="fs-13">
                        Each policy keeps an effective date and version, so changing a rate or target now does not alter
                        closed monthly results. Commission rate is a percentage of recognized sale value.
                    </div>
                </div>

                <div class="row g-4 mb-4">
                    <div class="col-xxl-3 col-md-6">
                        <div class="card dash-card mb-0">
                            <div class="card-body">
                                <h6 class="mb-2">Sellers Configured</h6>
                                <h3 class="mb-0">{{ commissionConfig.length }}</h3>
                            </div>
                        </div>
                    </div>
                    <div class="col-xxl-3 col-md-6">
                        <div class="card dash-card mb-0">
                            <div class="card-body">
                                <h6 class="mb-2">Avg. Commission Rate</h6>
                                <h3 class="mb-0">{{ avgRate.toFixed(2) }}%</h3>
                            </div>
                        </div>
                    </div>
                    <div class="col-xxl-3 col-md-6">
                        <div class="card dash-card mb-0">
                            <div class="card-body">
                                <h6 class="mb-2">Total Unit Target</h6>
                                <h3 class="mb-0">{{ totalUnitTarget }}</h3>
                            </div>
                        </div>
                    </div>
                    <div class="col-xxl-3 col-md-6">
                        <div class="card dash-card mb-0">
                            <div class="card-body">
                                <h6 class="mb-2">Active Policies</h6>
                                <h3 class="mb-0 text-success">{{ activeCount }}</h3>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="card">
                    <div class="card-body">
                        <div class="card-header pt-0 ps-0 pe-0 mb-4 d-flex align-items-center justify-content-between flex-wrap gap-2">
                            <h5 class="mb-0">Seller Commission Policy</h5>
                            <div class="search-input">
                                <span class="btn-searchset"><i class="icon-search fs-14"></i></span>
                                <input type="text" class="form-control search-addon" placeholder="Search seller" v-model="searchQuery" />
                            </div>
                        </div>
                        <div class="table-responsive table-nowrap">
                            <table class="table mb-0">
                                <thead class="table-light">
                                    <tr>
                                        <th class="no-sort">Seller</th>
                                        <th>Rate</th>
                                        <th>Unit Target</th>
                                        <th>Revenue Target</th>
                                        <th>Cash Target</th>
                                        <th>Target Bonus</th>
                                        <th>Bonus / Extra</th>
                                        <th>Effective</th>
                                        <th>Version</th>
                                        <th class="no-sort">Status</th>
                                        <th class="no-sort text-end">Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr v-for="c in filteredConfig" :key="c.name">
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
                                                {{ c.active ? 'Active' : 'Inactive' }}
                                            </span>
                                        </td>
                                        <td class="text-end">
                                            <div class="dropstart">
                                                <button class="btn btn-icon btn-white" type="button" data-bs-toggle="dropdown"
                                                    aria-label="Actions">
                                                    <i class="icon-ellipsis-vertical"></i>
                                                </button>
                                                <ul class="dropdown-menu p-3">
                                                    <li><a href="javascript:void(0);" class="dropdown-item rounded d-flex align-items-center" @click="openEdit(c)"><i class="icon-pencil-line me-2"></i>Edit Policy</a></li>
                                                    <li><a href="javascript:void(0);" class="dropdown-item rounded d-flex align-items-center" @click="toggleActive(c)"><i class="icon-power me-2"></i>{{ c.active ? 'Deactivate' : 'Activate' }}</a></li>
                                                    <li><a href="javascript:void(0);" class="dropdown-item rounded d-flex align-items-center text-danger" @click="removeConfig(c)"><i class="icon-trash-2 me-2"></i>Delete</a></li>
                                                </ul>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr v-if="!filteredConfig.length">
                                        <td colspan="11" class="text-center text-muted py-4">No seller configuration found.</td>
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
            <h4 class="offcanvas-title mb-0">{{ editingName ? 'Edit Seller Config' : 'Add Seller Config' }}</h4>
            <button type="button" class="btn-close btn-close-modal" data-bs-dismiss="offcanvas" aria-label="Close">
                <i class="icon-x"></i>
            </button>
        </div>
        <form class="d-flex flex-column overflow-y-auto h-100" @submit.prevent="saveConfig">
            <div class="offcanvas-body pb-0">
                <div class="row gx-3">
                    <div class="col-md-12">
                        <div class="mb-3">
                            <label class="form-label">Seller Name<span class="text-danger"> *</span></label>
                            <input type="text" class="form-control" v-model="form.name" required :disabled="!!editingName">
                        </div>
                    </div>
                    <div class="col-lg-6 col-md-12">
                        <div class="mb-3">
                            <label class="form-label">Team</label>
                            <vue-select :options="teams" v-model="form.team" placeholder="Select" />
                        </div>
                    </div>
                    <div class="col-lg-6 col-md-12">
                        <div class="mb-3">
                            <label class="form-label">Commission Rate (%)</label>
                            <input type="number" step="0.1" class="form-control" v-model="form.commissionRate">
                        </div>
                    </div>
                    <div class="col-lg-6 col-md-12">
                        <div class="mb-3">
                            <label class="form-label">Unit Target</label>
                            <input type="number" class="form-control" v-model="form.unitTarget">
                        </div>
                    </div>
                    <div class="col-lg-6 col-md-12">
                        <div class="mb-3">
                            <label class="form-label">Revenue Target</label>
                            <input type="number" class="form-control" v-model="form.revenueTarget">
                        </div>
                    </div>
                    <div class="col-lg-6 col-md-12">
                        <div class="mb-3">
                            <label class="form-label">Cash Target</label>
                            <input type="number" class="form-control" v-model="form.cashTarget">
                        </div>
                    </div>
                    <div class="col-lg-6 col-md-12">
                        <div class="mb-3">
                            <label class="form-label">Target Bonus</label>
                            <input type="number" class="form-control" v-model="form.targetBonus">
                        </div>
                    </div>
                    <div class="col-lg-6 col-md-12">
                        <div class="mb-3">
                            <label class="form-label">Bonus per Extra Unit</label>
                            <input type="number" class="form-control" v-model="form.bonusPerExtra">
                        </div>
                    </div>
                    <div class="col-lg-6 col-md-12">
                        <div class="mb-3">
                            <label class="form-label">Effective Date</label>
                            <input type="date" class="form-control" v-model="form.effectiveDate">
                        </div>
                    </div>
                    <div class="col-lg-6 col-md-12">
                        <div class="mb-3">
                            <label class="form-label">Version</label>
                            <input type="text" class="form-control" v-model="form.version" placeholder="e.g. v3">
                        </div>
                    </div>
                    <div class="col-md-12">
                        <div class="form-check form-switch mb-3">
                            <input class="form-check-input" type="checkbox" id="cfg_active" v-model="form.active">
                            <label class="form-check-label" for="cfg_active">Policy active</label>
                        </div>
                    </div>
                </div>
            </div>
            <div class="offcanvas-footer d-flex align-items-center gap-2 pt-2">
                <button type="button" class="btn btn-dark d-flex align-items-center w-100" data-bs-dismiss="offcanvas">
                    <i class="icon-x me-1"></i>Cancel
                </button>
                <button type="submit" class="btn btn-primary d-flex align-items-center w-100">
                    <i class="icon-circle-check me-1"></i>{{ editingName ? 'Save Changes' : 'Add Policy' }}
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
            teams: ['Team Alpha', 'Team Bravo'],
            form: defaultCommissionConfig(),
        }
    },
    computed: {
        filteredConfig() {
            const query = this.searchQuery.toLowerCase()
            return this.commissionConfig.filter((c) =>
                c.name.toLowerCase().includes(query) || c.team.toLowerCase().includes(query)
            )
        },
        avgRate() {
            if (!this.commissionConfig.length) return 0
            return this.commissionConfig.reduce((s, c) => s + c.commissionRate, 0) / this.commissionConfig.length
        },
        totalUnitTarget() {
            return this.commissionConfig.reduce((s, c) => s + c.unitTarget, 0)
        },
        activeCount() {
            return this.commissionConfig.filter((c) => c.active).length
        },
    },
    methods: {
        openCreate() {
            this.editingName = null
            this.form = defaultCommissionConfig()
        },
        openEdit(c) {
            this.editingName = c.name
            this.form = { ...c }
            showOffcanvas('config_seller')
        },
        saveConfig() {
            const payload = {
                ...this.form,
                commissionRate: Number(this.form.commissionRate) || 0,
                unitTarget: Number(this.form.unitTarget) || 0,
                revenueTarget: Number(this.form.revenueTarget) || 0,
                cashTarget: Number(this.form.cashTarget) || 0,
                targetBonus: Number(this.form.targetBonus) || 0,
                bonusPerExtra: Number(this.form.bonusPerExtra) || 0,
            }
            if (this.editingName) {
                const record = this.commissionConfig.find((c) => c.name === this.editingName)
                if (record) Object.assign(record, payload)
                notify(`Commission policy updated for ${this.editingName}`)
            } else {
                if (this.commissionConfig.some((c) => c.name === payload.name)) {
                    notify('A policy for this seller already exists', 'warning')
                    return
                }
                this.commissionConfig.unshift(payload)
                notify(`Commission policy added for ${payload.name}`)
            }
            this.editingName = null
            this.form = defaultCommissionConfig()
            hideOffcanvas('config_seller')
        },
        toggleActive(c) {
            c.active = !c.active
            notify(`${c.name} policy ${c.active ? 'activated' : 'deactivated'}`)
        },
        removeConfig(c) {
            const i = this.commissionConfig.findIndex((x) => x.name === c.name)
            if (i > -1) {
                this.commissionConfig.splice(i, 1)
                notify(`${c.name} policy removed`)
            }
        },
    },
}
</script>
