<template>
    <div class="page-wrapper">
        <div class="content">
            <layout-header></layout-header>

            <div class="content-wrap">
                <div class="d-flex align-items-center flex-wrap gap-3 border-bottom pb-4 mb-4">
                    <div class="flex-grow-1">
                        <h4 class="mb-1">{{ $t('Warranty.title') }}</h4>
                        <p class="text-muted mb-0">{{ $t('Warranty.subtitle') }}</p>
                    </div>
                    <div class="d-flex align-items-center gap-2">
                        <a href="#" class="btn btn-white d-inline-flex align-items-center" data-bs-toggle="offcanvas"
                            data-bs-target="#add_warranty"><i class="icon-shield-plus me-1"></i>{{ $t('Warranty.newWarranty') }}</a>
                        <a href="#" class="btn btn-primary d-inline-flex align-items-center" data-bs-toggle="offcanvas"
                            data-bs-target="#add_claim"><i class="icon-plus me-1"></i>{{ $t('Warranty.newClaim') }}</a>
                    </div>
                </div>

                <div class="row g-4 mb-4">
                    <div class="col-xxl-3 col-md-6">
                        <div class="card dash-card mb-0">
                            <div class="card-body">
                                <h6 class="mb-2">{{ $t('Warranty.activeWarranties') }}</h6>
                                <h3 class="mb-0">{{ statusCount('Active') }}</h3>
                            </div>
                        </div>
                    </div>
                    <div class="col-xxl-3 col-md-6">
                        <div class="card dash-card mb-0">
                            <div class="card-body">
                                <h6 class="mb-2">{{ $t('Warranty.expired') }}</h6>
                                <h3 class="mb-0 text-muted">{{ statusCount('Expired') }}</h3>
                            </div>
                        </div>
                    </div>
                    <div class="col-xxl-3 col-md-6">
                        <div class="card dash-card mb-0">
                            <div class="card-body">
                                <h6 class="mb-2">{{ $t('Warranty.openClaims') }}</h6>
                                <h3 class="mb-0 text-warning">{{ claimCount('Pending') }}</h3>
                            </div>
                        </div>
                    </div>
                    <div class="col-xxl-3 col-md-6">
                        <div class="card dash-card mb-0">
                            <div class="card-body">
                                <h6 class="mb-2">{{ $t('Warranty.claimValue') }}</h6>
                                <h3 class="mb-0">{{ money(claimValue) }}</h3>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Tabs -->
                <ul class="nav nav-tabs mb-4">
                    <li class="nav-item">
                        <a href="javascript:void(0);" class="nav-link" :class="{ active: tab === 'records' }" @click="tab = 'records'">
                            <i class="icon-shield-check me-1"></i>{{ $t('Warranty.recordsTab') }}
                        </a>
                    </li>
                    <li class="nav-item">
                        <a href="javascript:void(0);" class="nav-link" :class="{ active: tab === 'claims' }" @click="tab = 'claims'">
                            <i class="icon-file-warning me-1"></i>{{ $t('Warranty.claimsTab') }}
                        </a>
                    </li>
                </ul>

                <!-- Records -->
                <div class="table-responsive table-nowrap" v-if="tab === 'records'">
                    <a-table class="table mb-0 datatable" :columns="warrantyColumns" :data-source="warranties"
                        :pagination="false">
                        <template #bodyCell="{ column, record }">
                            <template v-if="column.key === 'Warranty'">
                                <h6 class="fs-14 fw-semibold mb-0">{{ record.id }}</h6>
                                <span class="fs-13">{{ record.customer }}</span>
                            </template>
                            <template v-if="column.key === 'Vehicle'">
                                <span class="fw-medium">{{ record.vehicle }}</span>
                                <div class="fs-13 text-muted">{{ record.vin }}</div>
                            </template>
                            <template v-if="column.key === 'Coverage'">
                                <span class="fs-13">{{ record.coveredItems }}</span>
                                <div class="fs-13 text-muted">{{ $t('Warranty.exclusionsShort') }}: {{ record.exclusions }}</div>
                            </template>
                            <template v-if="column.key === 'Terms'">
                                <span class="fs-13">{{ record.durationMonths }} {{ $t('Warranty.months') }}</span>
                                <div class="fs-13 text-muted">{{ record.mileageLimit.toLocaleString() }} km</div>
                            </template>
                            <template v-if="column.key === 'Status'">
                                <span class="badge" :class="record.status === 'Active' ? 'badge-soft-success text-dark' : 'badge-soft-secondary text-dark'">
                                    {{ statusLabel(record.status) }}
                                </span>
                            </template>
                        </template>
                    </a-table>
                </div>

                <!-- Claims -->
                <div class="table-responsive table-nowrap" v-else>
                    <a-table class="table mb-0 datatable" :columns="claimColumns" :data-source="warrantyClaims"
                        :pagination="false">
                        <template #bodyCell="{ column, record }">
                            <template v-if="column.key === 'Claim'">
                                <h6 class="fs-14 fw-semibold mb-0">{{ record.id }}</h6>
                                <span class="fs-13">{{ record.warrantyId }}</span>
                            </template>
                            <template v-if="column.key === 'Customer'">
                                <span class="fw-medium">{{ record.customer }}</span>
                                <div class="fs-13 text-muted">{{ record.vehicle }}</div>
                            </template>
                            <template v-if="column.key === 'Evidence'">
                                <span class="fs-13">{{ record.evidence }}</span>
                            </template>
                            <template v-if="column.key === 'Decision'">
                                <span class="badge" :class="decisionClass(record.decision)">{{ decisionLabel(record.decision) }}</span>
                            </template>
                            <template v-if="column.key === 'Cost'">
                                <span class="fs-13">{{ costResponsibilityLabel(record.costResponsibility) }}</span>
                            </template>
                            <template v-if="column.key === 'Amount'">{{ money(record.amount) }}</template>
                            <template v-if="column.key === 'Action'">
                                <div class="text-end">
                                    <div class="dropstart">
                                        <button class="btn btn-icon btn-white" type="button" data-bs-toggle="dropdown"
                                            :aria-label="$t('Warranty.actions')">
                                            <i class="icon-ellipsis-vertical"></i>
                                        </button>
                                        <ul class="dropdown-menu p-3">
                                            <li><a href="javascript:void(0);" class="dropdown-item rounded d-flex align-items-center" @click="decide(record, 'Approved')"><i class="icon-check me-2"></i>{{ $t('Warranty.approveClaim') }}</a></li>
                                            <li><a href="javascript:void(0);" class="dropdown-item rounded d-flex align-items-center" @click="decide(record, 'Rejected')"><i class="icon-x me-2"></i>{{ $t('Warranty.rejectClaim') }}</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </template>
                        </template>
                    </a-table>
                </div>
            </div>
        </div>
    </div>

    <!-- New warranty -->
    <div class="offcanvas offcanvas-end" tabindex="-1" id="add_warranty">
        <div class="offcanvas-header d-flex align-items-center justify-content-between">
            <h4 class="offcanvas-title mb-0">{{ $t('Warranty.newWarranty') }}</h4>
            <button type="button" class="btn-close btn-close-modal" data-bs-dismiss="offcanvas" :aria-label="$t('Warranty.close')">
                <i class="icon-x"></i>
            </button>
        </div>
        <form class="d-flex flex-column overflow-y-auto h-100" @submit.prevent="addWarranty">
            <div class="offcanvas-body pb-0">
                <div class="row gx-3">
                    <div class="col-lg-6 col-md-12">
                        <div class="mb-3">
                            <label class="form-label">{{ $t('Warranty.customer') }}<span class="text-danger"> *</span></label>
                            <input type="text" class="form-control" v-model="warrantyForm.customer" required>
                        </div>
                    </div>
                    <div class="col-lg-6 col-md-12">
                        <div class="mb-3">
                            <label class="form-label">{{ $t('Warranty.vehicle') }}</label>
                            <input type="text" class="form-control" v-model="warrantyForm.vehicle">
                        </div>
                    </div>
                    <div class="col-md-12">
                        <div class="mb-3">
                            <label class="form-label">{{ $t('Warranty.vin') }}</label>
                            <input type="text" class="form-control" v-model="warrantyForm.vin">
                        </div>
                    </div>
                    <div class="col-lg-6 col-md-12">
                        <div class="mb-3">
                            <label class="form-label">{{ $t('Warranty.startDate') }}</label>
                            <input type="date" class="form-control" v-model="warrantyForm.startDate">
                        </div>
                    </div>
                    <div class="col-lg-6 col-md-12">
                        <div class="mb-3">
                            <label class="form-label">{{ $t('Warranty.durationMonths') }}</label>
                            <input type="number" class="form-control" v-model="warrantyForm.durationMonths">
                        </div>
                    </div>
                    <div class="col-lg-6 col-md-12">
                        <div class="mb-3">
                            <label class="form-label">{{ $t('Warranty.mileageLimit') }} (km)</label>
                            <input type="number" class="form-control" v-model="warrantyForm.mileageLimit">
                        </div>
                    </div>
                    <div class="col-md-12">
                        <div class="mb-3">
                            <label class="form-label">{{ $t('Warranty.coveredItems') }}</label>
                            <input type="text" class="form-control" v-model="warrantyForm.coveredItems">
                        </div>
                    </div>
                    <div class="col-md-12">
                        <div class="mb-3">
                            <label class="form-label">{{ $t('Warranty.exclusions') }}</label>
                            <input type="text" class="form-control" v-model="warrantyForm.exclusions">
                        </div>
                    </div>
                </div>
            </div>
            <div class="offcanvas-footer d-flex align-items-center gap-2 pt-2">
                <button type="button" class="btn btn-dark d-flex align-items-center w-100" data-bs-dismiss="offcanvas">
                    <i class="icon-x me-1"></i>{{ $t('Warranty.cancel') }}
                </button>
                <button type="submit" class="btn btn-primary d-flex align-items-center w-100">
                    <i class="icon-circle-check me-1"></i>{{ $t('Warranty.save') }}
                </button>
            </div>
        </form>
    </div>

    <!-- New claim -->
    <div class="offcanvas offcanvas-end" tabindex="-1" id="add_claim">
        <div class="offcanvas-header d-flex align-items-center justify-content-between">
            <h4 class="offcanvas-title mb-0">{{ $t('Warranty.newWarrantyClaim') }}</h4>
            <button type="button" class="btn-close btn-close-modal" data-bs-dismiss="offcanvas" :aria-label="$t('Warranty.close')">
                <i class="icon-x"></i>
            </button>
        </div>
        <form class="d-flex flex-column overflow-y-auto h-100" @submit.prevent="addClaim">
            <div class="offcanvas-body pb-0">
                <div class="row gx-3">
                    <div class="col-md-12">
                        <div class="mb-3">
                            <label class="form-label">{{ $t('Warranty.warranty') }}<span class="text-danger"> *</span></label>
                            <vue-select :options="warrantyIds" v-model="claimForm.warrantyId" :placeholder="$t('Warranty.select')" />
                        </div>
                    </div>
                    <div class="col-md-12">
                        <div class="mb-3">
                            <label class="form-label">{{ $t('Warranty.issue') }}<span class="text-danger"> *</span></label>
                            <input type="text" class="form-control" v-model="claimForm.issue" required>
                        </div>
                    </div>
                    <div class="col-md-12">
                        <div class="mb-3">
                            <label class="form-label">{{ $t('Warranty.evidence') }}</label>
                            <input type="text" class="form-control" v-model="claimForm.evidence" :placeholder="$t('Warranty.evidencePlaceholder')">
                        </div>
                    </div>
                    <div class="col-lg-6 col-md-12">
                        <div class="mb-3">
                            <label class="form-label">{{ $t('Warranty.claimAmount') }}</label>
                            <input type="number" class="form-control" v-model="claimForm.amount">
                        </div>
                    </div>
                    <div class="col-lg-6 col-md-12">
                        <div class="mb-3">
                            <label class="form-label">{{ $t('Warranty.costResponsibility') }}</label>
                            <vue-select :options="costResponsibilityOptions" label="label" :reduce="option => option.value" v-model="claimForm.costResponsibility" :placeholder="$t('Warranty.select')" />
                        </div>
                    </div>
                </div>
            </div>
            <div class="offcanvas-footer d-flex align-items-center gap-2 pt-2">
                <button type="button" class="btn btn-dark d-flex align-items-center w-100" data-bs-dismiss="offcanvas">
                    <i class="icon-x me-1"></i>{{ $t('Warranty.cancel') }}
                </button>
                <button type="submit" class="btn btn-primary d-flex align-items-center w-100">
                    <i class="icon-circle-check me-1"></i>{{ $t('Warranty.submitClaim') }}
                </button>
            </div>
        </form>
    </div>
</template>

<script>
import { warranties, warrantyClaims } from '@/data/after-sales'
import { money } from '@/data/crm'
import { hideOffcanvas } from '@/utils/offcanvas'
import { notify } from '@/utils/ui'

export default {
    name: 'WarrantyPage',
    data() {
        return {
            warranties,
            warrantyClaims,
            money,
            tab: 'records',
            warrantyIds: warranties.map(w => w.id),
            warrantyForm: {
                customer: '', vehicle: '', vin: '', startDate: '',
                durationMonths: '', mileageLimit: '', coveredItems: '', exclusions: '',
            },
            claimForm: {
                warrantyId: null, issue: '', evidence: '', amount: '', costResponsibility: null,
            },
        }
    },
    methods: {
        statusLabel(status) {
            return this.$t(status === 'Active' ? 'Warranty.statusActive' : 'Warranty.statusExpired')
        },
        decisionLabel(decision) {
            const key = { Pending: 'pending', Approved: 'approved', Rejected: 'rejected' }[decision]
            return key ? this.$t(`Warranty.decisions.${key}`) : decision
        },
        costResponsibilityLabel(responsibility) {
            const key = { Company: 'company', Supplier: 'supplier', Customer: 'customer' }[responsibility]
            return key ? this.$t(`Warranty.responsibilities.${key}`) : responsibility
        },
        statusCount(status) {
            return this.warranties.filter(w => w.status === status).length
        },
        claimCount(decision) {
            return this.warrantyClaims.filter(c => c.decision === decision).length
        },
        decisionClass(decision) {
            if (decision === 'Approved') return 'badge-soft-success text-dark'
            if (decision === 'Rejected') return 'badge-soft-danger text-dark'
            return 'badge-soft-warning text-dark'
        },
        decide(record, decision) {
            record.decision = decision
            if (decision === 'Approved' && record.costResponsibility === '—') record.costResponsibility = 'Company'
            notify(this.$t('Warranty.claimDecisionRecorded', { id: record.id, decision: this.decisionLabel(decision) }))
        },
        addWarranty() {
            this.warranties.unshift({
                id: 'WR-' + (6005 + this.warranties.length),
                customer: this.warrantyForm.customer,
                vehicle: this.warrantyForm.vehicle,
                vin: this.warrantyForm.vin,
                startDate: this.warrantyForm.startDate,
                durationMonths: Number(this.warrantyForm.durationMonths) || 12,
                mileageLimit: Number(this.warrantyForm.mileageLimit) || 0,
                coveredItems: this.warrantyForm.coveredItems,
                exclusions: this.warrantyForm.exclusions,
                status: 'Active',
                claims: 0,
            })
            this.warrantyForm = {
                customer: '', vehicle: '', vin: '', startDate: '',
                durationMonths: '', mileageLimit: '', coveredItems: '', exclusions: '',
            }
            notify(this.$t('Warranty.recordCreated'))
            hideOffcanvas('add_warranty')
        },
        addClaim() {
            const warranty = this.warranties.find(w => w.id === this.claimForm.warrantyId)
            const today = new Date().toISOString().slice(0, 10)
            this.warrantyClaims.unshift({
                id: 'WC-' + (5104 + this.warrantyClaims.length),
                warrantyId: this.claimForm.warrantyId || '—',
                customer: warranty ? warranty.customer : '—',
                vehicle: warranty ? warranty.vehicle : '—',
                issue: this.claimForm.issue,
                evidence: this.claimForm.evidence || '—',
                decision: 'Pending',
                costResponsibility: this.claimForm.costResponsibility || '—',
                amount: Number(this.claimForm.amount) || 0,
                date: today,
            })
            if (warranty) warranty.claims += 1
            this.claimForm = { warrantyId: null, issue: '', evidence: '', amount: '', costResponsibility: null }
            notify(this.$t('Warranty.claimSubmitted'))
            hideOffcanvas('add_claim')
        },
    },
    computed: {
        warrantyColumns() {
            return [
                { title: this.$t('Warranty.warranty'), dataIndex: 'id', key: 'Warranty', sorter: false, visible: true },
                { title: this.$t('Warranty.vehicle'), dataIndex: 'vehicle', key: 'Vehicle', sorter: false, visible: true },
                { title: this.$t('Warranty.terms'), dataIndex: 'durationMonths', key: 'Terms', sorter: false, visible: true },
                { title: this.$t('Warranty.coverage'), dataIndex: 'coveredItems', key: 'Coverage', sorter: false, visible: true },
                { title: this.$t('Warranty.start'), dataIndex: 'startDate', key: 'startDate', sorter: false, visible: true },
                { title: this.$t('Warranty.claims'), dataIndex: 'claims', key: 'claims', sorter: false, visible: true },
                { title: this.$t('Warranty.status'), dataIndex: 'status', key: 'Status', sorter: false, visible: true },
            ]
        },
        claimColumns() {
            return [
                { title: this.$t('Warranty.claim'), dataIndex: 'id', key: 'Claim', sorter: false, visible: true },
                { title: this.$t('Warranty.customer'), dataIndex: 'customer', key: 'Customer', sorter: false, visible: true },
                { title: this.$t('Warranty.issue'), dataIndex: 'issue', key: 'issue', sorter: false, visible: true },
                { title: this.$t('Warranty.evidence'), dataIndex: 'evidence', key: 'Evidence', sorter: false, visible: true },
                { title: this.$t('Warranty.decision'), dataIndex: 'decision', key: 'Decision', sorter: false, visible: true },
                { title: this.$t('Warranty.cost'), dataIndex: 'costResponsibility', key: 'Cost', sorter: false, visible: true },
                { title: this.$t('Warranty.amount'), dataIndex: 'amount', key: 'Amount', sorter: false, visible: true },
                { title: this.$t('Warranty.date'), dataIndex: 'date', key: 'date', sorter: false, visible: true },
                { title: this.$t('Warranty.action'), dataIndex: 'Action', key: 'Action', sorter: false, visible: true },
            ]
        },
        costResponsibilityOptions() {
            return ['Company', 'Supplier', 'Customer'].map((value) => ({
                value,
                label: this.costResponsibilityLabel(value),
            }))
        },
        claimValue() {
            return this.warrantyClaims.reduce((sum, c) => sum + c.amount, 0)
        },
    },
}
</script>
