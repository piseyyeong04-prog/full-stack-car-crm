<template>
    <div class="page-wrapper">
        <div class="content">
            <layout-header></layout-header>

            <div class="content-wrap">
                <div class="d-flex align-items-center flex-wrap gap-3 border-bottom pb-4 mb-4">
                    <div class="flex-grow-1">
                        <h4 class="mb-1">Warranty</h4>
                        <p class="text-muted mb-0">Coverage terms, claims, evidence and cost responsibility.</p>
                    </div>
                    <div class="d-flex align-items-center gap-2">
                        <a href="#" class="btn btn-white d-inline-flex align-items-center" data-bs-toggle="offcanvas"
                            data-bs-target="#add_warranty"><i class="icon-shield-plus me-1"></i>New Warranty</a>
                        <a href="#" class="btn btn-primary d-inline-flex align-items-center" data-bs-toggle="offcanvas"
                            data-bs-target="#add_claim"><i class="icon-plus me-1"></i>New Claim</a>
                    </div>
                </div>

                <div class="row g-4 mb-4">
                    <div class="col-xxl-3 col-md-6">
                        <div class="card dash-card mb-0">
                            <div class="card-body">
                                <h6 class="mb-2">Active Warranties</h6>
                                <h3 class="mb-0">{{ statusCount('Active') }}</h3>
                            </div>
                        </div>
                    </div>
                    <div class="col-xxl-3 col-md-6">
                        <div class="card dash-card mb-0">
                            <div class="card-body">
                                <h6 class="mb-2">Expired</h6>
                                <h3 class="mb-0 text-muted">{{ statusCount('Expired') }}</h3>
                            </div>
                        </div>
                    </div>
                    <div class="col-xxl-3 col-md-6">
                        <div class="card dash-card mb-0">
                            <div class="card-body">
                                <h6 class="mb-2">Open Claims</h6>
                                <h3 class="mb-0 text-warning">{{ claimCount('Pending') }}</h3>
                            </div>
                        </div>
                    </div>
                    <div class="col-xxl-3 col-md-6">
                        <div class="card dash-card mb-0">
                            <div class="card-body">
                                <h6 class="mb-2">Claim Value</h6>
                                <h3 class="mb-0">{{ money(claimValue) }}</h3>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Tabs -->
                <ul class="nav nav-tabs mb-4">
                    <li class="nav-item">
                        <a href="javascript:void(0);" class="nav-link" :class="{ active: tab === 'records' }" @click="tab = 'records'">
                            <i class="icon-shield-check me-1"></i>Warranty Records
                        </a>
                    </li>
                    <li class="nav-item">
                        <a href="javascript:void(0);" class="nav-link" :class="{ active: tab === 'claims' }" @click="tab = 'claims'">
                            <i class="icon-file-warning me-1"></i>Claims
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
                                <div class="fs-13 text-muted">Excl: {{ record.exclusions }}</div>
                            </template>
                            <template v-if="column.key === 'Terms'">
                                <span class="fs-13">{{ record.durationMonths }} months</span>
                                <div class="fs-13 text-muted">{{ record.mileageLimit.toLocaleString() }} km</div>
                            </template>
                            <template v-if="column.key === 'Status'">
                                <span class="badge" :class="record.status === 'Active' ? 'badge-soft-success text-dark' : 'badge-soft-secondary text-dark'">
                                    {{ record.status }}
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
                                <span class="badge" :class="decisionClass(record.decision)">{{ record.decision }}</span>
                            </template>
                            <template v-if="column.key === 'Cost'">
                                <span class="fs-13">{{ record.costResponsibility }}</span>
                            </template>
                            <template v-if="column.key === 'Amount'">{{ money(record.amount) }}</template>
                            <template v-if="column.key === 'Action'">
                                <div class="text-end">
                                    <div class="dropstart">
                                        <button class="btn btn-icon btn-white" type="button" data-bs-toggle="dropdown"
                                            aria-label="Actions">
                                            <i class="icon-ellipsis-vertical"></i>
                                        </button>
                                        <ul class="dropdown-menu p-3">
                                            <li><a href="javascript:void(0);" class="dropdown-item rounded d-flex align-items-center" @click="decide(record, 'Approved')"><i class="icon-check me-2"></i>Approve Claim</a></li>
                                            <li><a href="javascript:void(0);" class="dropdown-item rounded d-flex align-items-center" @click="decide(record, 'Rejected')"><i class="icon-x me-2"></i>Reject Claim</a></li>
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
            <h4 class="offcanvas-title mb-0">New Warranty</h4>
            <button type="button" class="btn-close btn-close-modal" data-bs-dismiss="offcanvas" aria-label="Close">
                <i class="icon-x"></i>
            </button>
        </div>
        <form class="d-flex flex-column overflow-y-auto h-100" @submit.prevent="addWarranty">
            <div class="offcanvas-body pb-0">
                <div class="row gx-3">
                    <div class="col-lg-6 col-md-12">
                        <div class="mb-3">
                            <label class="form-label">Customer<span class="text-danger"> *</span></label>
                            <input type="text" class="form-control" v-model="warrantyForm.customer" required>
                        </div>
                    </div>
                    <div class="col-lg-6 col-md-12">
                        <div class="mb-3">
                            <label class="form-label">Vehicle</label>
                            <input type="text" class="form-control" v-model="warrantyForm.vehicle">
                        </div>
                    </div>
                    <div class="col-md-12">
                        <div class="mb-3">
                            <label class="form-label">VIN</label>
                            <input type="text" class="form-control" v-model="warrantyForm.vin">
                        </div>
                    </div>
                    <div class="col-lg-6 col-md-12">
                        <div class="mb-3">
                            <label class="form-label">Start Date</label>
                            <input type="date" class="form-control" v-model="warrantyForm.startDate">
                        </div>
                    </div>
                    <div class="col-lg-6 col-md-12">
                        <div class="mb-3">
                            <label class="form-label">Duration (months)</label>
                            <input type="number" class="form-control" v-model="warrantyForm.durationMonths">
                        </div>
                    </div>
                    <div class="col-lg-6 col-md-12">
                        <div class="mb-3">
                            <label class="form-label">Mileage Limit (km)</label>
                            <input type="number" class="form-control" v-model="warrantyForm.mileageLimit">
                        </div>
                    </div>
                    <div class="col-md-12">
                        <div class="mb-3">
                            <label class="form-label">Covered Items</label>
                            <input type="text" class="form-control" v-model="warrantyForm.coveredItems">
                        </div>
                    </div>
                    <div class="col-md-12">
                        <div class="mb-3">
                            <label class="form-label">Exclusions</label>
                            <input type="text" class="form-control" v-model="warrantyForm.exclusions">
                        </div>
                    </div>
                </div>
            </div>
            <div class="offcanvas-footer d-flex align-items-center gap-2 pt-2">
                <button type="button" class="btn btn-dark d-flex align-items-center w-100" data-bs-dismiss="offcanvas">
                    <i class="icon-x me-1"></i>Cancel
                </button>
                <button type="submit" class="btn btn-primary d-flex align-items-center w-100">
                    <i class="icon-circle-check me-1"></i>Save
                </button>
            </div>
        </form>
    </div>

    <!-- New claim -->
    <div class="offcanvas offcanvas-end" tabindex="-1" id="add_claim">
        <div class="offcanvas-header d-flex align-items-center justify-content-between">
            <h4 class="offcanvas-title mb-0">New Warranty Claim</h4>
            <button type="button" class="btn-close btn-close-modal" data-bs-dismiss="offcanvas" aria-label="Close">
                <i class="icon-x"></i>
            </button>
        </div>
        <form class="d-flex flex-column overflow-y-auto h-100" @submit.prevent="addClaim">
            <div class="offcanvas-body pb-0">
                <div class="row gx-3">
                    <div class="col-md-12">
                        <div class="mb-3">
                            <label class="form-label">Warranty<span class="text-danger"> *</span></label>
                            <vue-select :options="warrantyIds" v-model="claimForm.warrantyId" placeholder="Select" />
                        </div>
                    </div>
                    <div class="col-md-12">
                        <div class="mb-3">
                            <label class="form-label">Issue<span class="text-danger"> *</span></label>
                            <input type="text" class="form-control" v-model="claimForm.issue" required>
                        </div>
                    </div>
                    <div class="col-md-12">
                        <div class="mb-3">
                            <label class="form-label">Evidence</label>
                            <input type="text" class="form-control" v-model="claimForm.evidence" placeholder="Photos, reports...">
                        </div>
                    </div>
                    <div class="col-lg-6 col-md-12">
                        <div class="mb-3">
                            <label class="form-label">Claim Amount</label>
                            <input type="number" class="form-control" v-model="claimForm.amount">
                        </div>
                    </div>
                    <div class="col-lg-6 col-md-12">
                        <div class="mb-3">
                            <label class="form-label">Cost Responsibility</label>
                            <vue-select :options="['Company', 'Supplier', 'Customer']" v-model="claimForm.costResponsibility" placeholder="Select" />
                        </div>
                    </div>
                </div>
            </div>
            <div class="offcanvas-footer d-flex align-items-center gap-2 pt-2">
                <button type="button" class="btn btn-dark d-flex align-items-center w-100" data-bs-dismiss="offcanvas">
                    <i class="icon-x me-1"></i>Cancel
                </button>
                <button type="submit" class="btn btn-primary d-flex align-items-center w-100">
                    <i class="icon-circle-check me-1"></i>Submit Claim
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
            warrantyColumns: [
                { title: "Warranty", dataIndex: "id", key: "Warranty", sorter: false, visible: true },
                { title: "Vehicle", dataIndex: "vehicle", key: "Vehicle", sorter: false, visible: true },
                { title: "Terms", dataIndex: "durationMonths", key: "Terms", sorter: false, visible: true },
                { title: "Coverage", dataIndex: "coveredItems", key: "Coverage", sorter: false, visible: true },
                { title: "Start", dataIndex: "startDate", key: "startDate", sorter: false, visible: true },
                { title: "Claims", dataIndex: "claims", key: "claims", sorter: false, visible: true },
                { title: "Status", dataIndex: "status", key: "Status", sorter: false, visible: true },
            ],
            claimColumns: [
                { title: "Claim", dataIndex: "id", key: "Claim", sorter: false, visible: true },
                { title: "Customer", dataIndex: "customer", key: "Customer", sorter: false, visible: true },
                { title: "Issue", dataIndex: "issue", key: "issue", sorter: false, visible: true },
                { title: "Evidence", dataIndex: "evidence", key: "Evidence", sorter: false, visible: true },
                { title: "Decision", dataIndex: "decision", key: "Decision", sorter: false, visible: true },
                { title: "Cost", dataIndex: "costResponsibility", key: "Cost", sorter: false, visible: true },
                { title: "Amount", dataIndex: "amount", key: "Amount", sorter: false, visible: true },
                { title: "Date", dataIndex: "date", key: "date", sorter: false, visible: true },
                { title: "Action", dataIndex: "Action", key: "Action", sorter: false, visible: true },
            ],
        }
    },
    methods: {
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
            notify(`Claim ${record.id} ${decision.toLowerCase()}`)
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
            notify('Warranty record created')
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
            notify('Warranty claim submitted')
            hideOffcanvas('add_claim')
        },
    },
    computed: {
        claimValue() {
            return this.warrantyClaims.reduce((sum, c) => sum + c.amount, 0)
        },
    },
}
</script>
