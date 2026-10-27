<template>
    <div class="page-wrapper">
        <div class="content">
            <layout-header></layout-header>

            <div class="content-wrap">
                <div class="d-flex align-items-center flex-wrap gap-3 border-bottom pb-4 mb-4">
                    <div class="flex-grow-1">
                        <h4 class="mb-1">Commission &amp; Monthly Closing</h4>
                        <p class="text-muted mb-0">Review, adjust, approve and lock monthly results and rewards.</p>
                    </div>
                    <div class="d-flex align-items-center gap-2">
                        <router-link :to="lp('/targets/commission-settings')" class="btn btn-white d-inline-flex align-items-center">
                            <i class="icon-sliders-horizontal me-1"></i>Configure
                        </router-link>
                        <div class="dropdown">
                            <a href="javascript:void(0);" class="dropdown-toggle btn btn-dark d-inline-flex align-items-center"
                                data-bs-toggle="dropdown">
                                <i class="icon-calendar me-1"></i>{{ selectedMonth }}
                            </a>
                            <ul class="dropdown-menu dropdown-menu-end p-3">
                                <li v-for="m in months" :key="m">
                                    <a href="javascript:void(0);" class="dropdown-item rounded" @click="selectMonth(m)">{{ m }}</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <!-- Closing workflow -->
                <div class="card mb-4">
                    <div class="card-body">
                        <div class="d-flex align-items-center justify-content-between flex-wrap gap-3">
                            <div class="d-flex align-items-center gap-3 flex-wrap">
                                <div v-for="(step, i) in workflow" :key="step" class="d-flex align-items-center gap-3">
                                    <div class="d-flex align-items-center gap-2">
                                        <span class="avatar avatar-sm rounded-circle"
                                            :class="i <= closingStep ? 'bg-primary text-white' : 'bg-light text-dark'">{{ i + 1 }}</span>
                                        <span class="fw-semibold" :class="i <= closingStep ? 'text-dark' : 'text-muted'">{{ step }}</span>
                                    </div>
                                    <i v-if="i < workflow.length - 1" class="icon-chevron-right text-muted"></i>
                                </div>
                            </div>
                            <div class="d-flex align-items-center gap-2">
                                <button class="btn btn-white" :disabled="closingStep === 0" @click="closingStep--">
                                    <i class="icon-undo-2 me-1"></i>Back
                                </button>
                                <button class="btn btn-primary" :disabled="closingStep >= workflow.length - 1" @click="closingStep++">
                                    {{ closingStep === workflow.length - 1 ? 'Locked' : workflow[closingStep + 1] }}
                                    <i class="icon-chevron-right ms-1"></i>
                                </button>
                            </div>
                        </div>
                        <div class="alert alert-warning mt-4 mb-0 d-flex align-items-start gap-2">
                            <i class="icon-info mt-1"></i>
                            <div class="fs-13">
                                Policy values (commission rate, bonus levels, split, refund adjustments) are configurable.
                                Reopening a locked month requires permission and a recorded history.
                            </div>
                        </div>
                    </div>
                </div>

                <div class="row g-4 mb-4">
                    <div class="col-xxl-4 col-md-6">
                        <div class="card dash-card mb-0">
                            <div class="card-body">
                                <h6 class="mb-2">Total Commission</h6>
                                <h3 class="mb-0">{{ money(totalCommission) }}</h3>
                            </div>
                        </div>
                    </div>
                    <div class="col-xxl-4 col-md-6">
                        <div class="card dash-card mb-0">
                            <div class="card-body">
                                <h6 class="mb-2">Total Bonus</h6>
                                <h3 class="mb-0">{{ money(totalBonus) }}</h3>
                            </div>
                        </div>
                    </div>
                    <div class="col-xxl-4 col-md-12">
                        <div class="card dash-card mb-0">
                            <div class="card-body">
                                <h6 class="mb-2">Payout</h6>
                                <h3 class="mb-0 text-success">{{ money(totalCommission + totalBonus) }}</h3>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="card">
                    <div class="card-body">
                        <div class="card-header pt-0 ps-0 pe-0 mb-4 d-flex align-items-center justify-content-between">
                            <h5 class="mb-0">Monthly Results</h5>
                            <span class="badge" :class="closingStep >= 3 ? 'badge-soft-success text-dark' : 'badge-soft-warning text-dark'">
                                {{ workflow[closingStep] }}
                            </span>
                        </div>
                        <div class="table-responsive table-nowrap">
                            <table class="table mb-0">
                                <thead class="table-light">
                                    <tr>
                                        <th class="no-sort">Salesperson</th>
                                        <th>Target</th>
                                        <th>Actual</th>
                                        <th>Achievement</th>
                                        <th>Commission</th>
                                        <th>Bonus</th>
                                        <th class="text-end">Total Payout</th>
                                        <th class="no-sort text-end">Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr v-for="s in sellers" :key="s.name">
                                        <td>
                                            <div class="d-flex align-items-center">
                                                <span class="avatar avatar-sm avatar-rounded flex-shrink-0 me-2 bg-light">
                                                    <i class="icon-user fs-13"></i>
                                                </span>
                                                <div>
                                                    <h6 class="fs-14 fw-semibold mb-0">{{ s.name }}</h6>
                                                    <span class="fs-13">{{ s.team }} · {{ s.commissionRate.toFixed(1) }}%</span>
                                                </div>
                                            </div>
                                        </td>
                                        <td>{{ s.target }}</td>
                                        <td>{{ s.actual }}</td>
                                        <td>
                                            <span class="badge" :class="achievement(s.actual, s.target) >= 100 ? 'badge-soft-success text-dark' : 'badge-soft-danger text-dark'">
                                                {{ achievement(s.actual, s.target) }}%
                                            </span>
                                        </td>
                                        <td>{{ money(commissionOf(s)) }}</td>
                                        <td>{{ money(bonusOf(s)) }}</td>
                                        <td class="text-end fw-semibold">{{ money(commissionOf(s) + bonusOf(s)) }}</td>
                                        <td class="text-end">
                                            <button class="btn btn-sm btn-white d-inline-flex align-items-center" @click="viewStatement(s)">
                                                <i class="icon-file-text me-1"></i>Statement
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

    <!-- Professional Commission Statement -->
    <div class="modal fade" id="commission_modal" tabindex="-1">
        <div class="modal-dialog modal-lg modal-dialog-centered modal-dialog-scrollable">
            <div class="modal-content comm-modal">
                <div class="modal-header border-0 pb-0">
                    <h5 class="modal-title">Commission Statement</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body" v-if="statement">
                    <div class="comm-paper" ref="commPaper">
                        <div class="comm-head">
                            <div class="comm-brand">
                                <img src="@/assets/img/car-logo.svg" class="comm-logo" alt="logo">
                                <div>
                                    <h5 class="mb-0">Dreams Motors Co., Ltd.</h5>
                                    <p class="mb-0">No. 128, Preah Norodom Blvd, Phnom Penh, Cambodia</p>
                                    <p class="mb-0">Tel: +855 23 900 900 · sales@dreamsmotors.com.kh</p>
                                </div>
                            </div>
                            <div class="comm-title">
                                <h3>COMMISSION</h3>
                                <p class="mb-0"><strong>{{ statementNo }}</strong></p>
                                <p class="mb-0">Period: {{ selectedMonth }}</p>
                                <p class="mb-0">Issued: {{ statementDate }}</p>
                            </div>
                        </div>

                        <div class="comm-grid">
                            <div>
                                <p class="comm-label">Salesperson</p>
                                <h6 class="mb-1">{{ statement.name }}</h6>
                                <p class="mb-0">{{ statement.team }}</p>
                            </div>
                            <div>
                                <p class="comm-label">Sales Target</p>
                                <h6 class="mb-1">{{ statement.actual }} / {{ statement.target }} units</h6>
                                <p class="mb-0">{{ achievement(statement.actual, statement.target) }}% achieved</p>
                            </div>
                            <div>
                                <p class="comm-label">Commission Rate</p>
                                <h6 class="mb-1">{{ statementRate.toFixed(1) }}%</h6>
                                <p class="mb-0">of sale value</p>
                            </div>
                        </div>

                        <table class="comm-table">
                            <thead>
                                <tr>
                                    <th>Date</th>
                                    <th>Ref</th>
                                    <th>Customer / Vehicle</th>
                                    <th class="text-end">Sale Amount</th>
                                    <th class="text-end">Rate</th>
                                    <th class="text-end">Commission</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="s in statementSales" :key="s.id">
                                    <td>{{ s.date }}</td>
                                    <td>{{ s.id }}</td>
                                    <td>
                                        <strong>{{ s.customer }}</strong>
                                        <div class="comm-sub">{{ s.vehicle }}</div>
                                    </td>
                                    <td class="text-end">{{ money(s.amount) }}</td>
                                    <td class="text-end">{{ statementRate.toFixed(1) }}%</td>
                                    <td class="text-end">{{ money(s.commission) }}</td>
                                </tr>
                                <tr v-if="!statementSales.length">
                                    <td colspan="6" class="text-center text-muted py-4">No sales recorded for this period.</td>
                                </tr>
                            </tbody>
                        </table>

                        <div class="comm-summary">
                            <div class="comm-stamp" :class="statementStampClass">{{ statementStampText }}</div>
                            <div class="comm-totals">
                                <div class="row"><span>Total Sales ({{ statementSales.length }} units)</span><span>{{ money(statementTotalSales) }}</span></div>
                                <div class="row"><span>Sales Commission ({{ statementRate.toFixed(1) }}%)</span><span>{{ money(statementTotalCommission) }}</span></div>
                                <div class="row"><span>Target Bonus</span><span>{{ money(bonusOf(statement)) }}</span></div>
                                <div class="row grand"><span>Net Payout</span><span>{{ money(statementTotalCommission + bonusOf(statement)) }}</span></div>
                            </div>
                        </div>

                        <div class="comm-terms">
                            <p class="comm-label">Notes</p>
                            <ul class="mb-0">
                                <li>Commission is calculated at {{ statementRate.toFixed(1) }}% of the recognized sale value.</li>
                                <li>Bonus applies when the unit target is met; each extra unit adds a further reward.</li>
                                <li>Adjustments for refunds or cancelled sales follow the approved closing policy.</li>
                            </ul>
                        </div>

                        <div class="comm-foot">
                            <div class="comm-sign"><p class="mb-1">Prepared By</p></div>
                            <div class="comm-sign"><p class="mb-1">Approved By</p></div>
                            <div class="comm-sign"><p class="mb-1">Received By</p></div>
                        </div>
                    </div>
                </div>
                <div class="modal-footer border-0">
                    <button type="button" class="btn btn-light" data-bs-dismiss="modal"><i class="icon-x me-1"></i>Close</button>
                    <button type="button" class="btn btn-white" @click="downloadStatement"><i class="icon-download me-1"></i>Save as PDF</button>
                    <button type="button" class="btn btn-primary" @click="printStatement"><i class="icon-printer me-1"></i>Print Statement</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { targets, money, achievement, commissionSales } from '@/data/crm'
import { commissionConfig } from '@/data/commissionConfig'
import { showModal } from '@/utils/modal'
import { notify } from '@/utils/ui'


const COMM_PRINT_CSS = `
  * { box-sizing: border-box; }
  body { margin: 0; padding: 24px; font-family: 'Segoe UI', Arial, sans-serif; color: #1f2937; }
  @page { margin: 14mm; }
  .comm-paper { background: #fff; color: #1f2937; max-width: 860px; margin: 0 auto; }
  .comm-head { display: flex; justify-content: space-between; align-items: flex-start; border-bottom: 2px solid #0D76E1; padding-bottom: 20px; margin-bottom: 24px; }
  .comm-brand { display: flex; gap: 12px; align-items: center; }
  .comm-logo { width: 44px; height: 44px; }
  .comm-brand h5 { margin: 0; font-size: 18px; }
  .comm-brand p { margin: 0; font-size: 12px; color: #6b7280; }
  .comm-title { text-align: right; }
  .comm-title h3 { margin: 0 0 6px; letter-spacing: 3px; font-size: 22px; color: #0D76E1; }
  .comm-title p { margin: 0; font-size: 12px; }
  .comm-grid { display: flex; gap: 24px; margin-bottom: 20px; }
  .comm-grid > div { flex: 1; }
  .comm-grid h6 { margin: 0 0 2px; font-size: 14px; }
  .comm-grid p { margin: 0; font-size: 12px; color: #6b7280; }
  .comm-label { font-size: 11px; text-transform: uppercase; letter-spacing: 1px; color: #6b7280; margin: 0 0 4px; }
  .comm-table { width: 100%; border-collapse: collapse; margin-bottom: 20px; }
  .comm-table th { background: #f3f4f6; text-align: left; padding: 9px 10px; font-size: 11px; text-transform: uppercase; letter-spacing: .5px; }
  .comm-table td { padding: 10px; border-bottom: 1px solid #e5e7eb; font-size: 12px; }
  .comm-sub { font-size: 11px; color: #6b7280; margin-top: 2px; }
  .comm-summary { display: flex; justify-content: space-between; align-items: flex-start; }
  .comm-stamp { display: inline-block; border: 3px solid; padding: 6px 18px; border-radius: 8px; font-weight: 800; letter-spacing: 2px; transform: rotate(-8deg); font-size: 14px; }
  .comm-stamp.achieved { color: #16a34a; border-color: #16a34a; }
  .comm-stamp.ontrack { color: #d97706; border-color: #d97706; }
  .comm-stamp.below { color: #dc2626; border-color: #dc2626; }
  .comm-totals { width: 320px; }
  .comm-totals .row { display: flex; justify-content: space-between; padding: 7px 0; font-size: 13px; }
  .comm-totals .grand { border-top: 2px solid #1f2937; font-weight: 700; font-size: 16px; margin-top: 4px; padding-top: 12px; }
  .comm-terms { margin-top: 28px; font-size: 12px; color: #4b5563; }
  .comm-terms ul { margin: 6px 0 0; padding-left: 18px; }
  .comm-terms li { margin-bottom: 3px; }
  .comm-foot { margin-top: 40px; display: flex; justify-content: space-between; gap: 20px; }
  .comm-sign { border-top: 1px solid #9ca3af; width: 200px; text-align: center; padding-top: 6px; font-size: 12px; color: #374151; }
`

export default {
    name: 'CarCrmCommission',
    data() {
        return {
            targets,
            money,
            achievement,
            workflow: ['Review', 'Adjust', 'Approve', 'Lock'],
            closingStep: 0,
            selectedMonth: 'October 2026',
            months: ['October 2026', 'September 2026', 'August 2026'],
            statement: null,
            statementDate: '',
            statementNo: '',
        }
    },
    methods: {
        selectMonth(m) {
            this.selectedMonth = m
            notify(`Showing closing results for ${m}`)
        },
        commissionOf(s) {
            return Math.round(s.revenueActual * (s.commissionRate / 100))
        },
        bonusOf(s) {
            if (s.actual < s.target) return 0
            return (s.targetBonus ?? 200) + Math.max(0, s.actual - s.target) * (s.bonusPerExtra ?? 100)
        },
        viewStatement(t) {
            this.statement = t
            this.statementDate = new Date().toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' })
            const initials = t.name.split(' ').map((w) => w[0]).join('')
            const monthCode = this.selectedMonth.split(' ')[0].slice(0, 3).toUpperCase()
            this.statementNo = `CS-${initials}-${monthCode}`
            showModal('commission_modal')
        },
        printStatement() {
            const el = this.$refs.commPaper
            if (!el) return
            const win = window.open('', '_blank')
            if (!win) {
                notify('Please allow pop-ups to print the statement', 'warning')
                return
            }
            win.document.write(`<!doctype html><html><head><meta charset="utf-8"><title>Commission Statement ${this.statementNo}</title><style>${COMM_PRINT_CSS}</style></head><body>${el.outerHTML}</body></html>`)
            win.document.close()
            win.focus()
            setTimeout(() => win.print(), 300)
        },
        downloadStatement() {
            this.printStatement()
            notify('Choose "Save as PDF" in the print dialog', 'info')
        },
    },
    computed: {
        sellers() {
            return this.targets.map((t) => {
                const c = commissionConfig.find((x) => x.name === t.name) || {}
                return {
                    ...t,
                    target: c.unitTarget ?? t.target,
                    commissionRate: c.commissionRate ?? 1.0,
                    targetBonus: c.targetBonus ?? 200,
                    bonusPerExtra: c.bonusPerExtra ?? 100,
                }
            })
        },
        statementRate() {
            return this.statement ? this.statement.commissionRate : 1.0
        },
        statementSales() {
            if (!this.statement) return []
            return commissionSales
                .filter((s) => s.owner === this.statement.name)
                .map((s) => ({ ...s, commission: Math.round(s.amount * (this.statementRate / 100)) }))
        },
        statementTotalSales() {
            return this.statementSales.reduce((sum, s) => sum + s.amount, 0)
        },
        statementTotalCommission() {
            return this.statementSales.reduce((sum, s) => sum + s.commission, 0)
        },
        statementStampClass() {
            if (!this.statement) return ''
            const pct = this.achievement(this.statement.actual, this.statement.target)
            if (pct >= 100) return 'achieved'
            if (pct >= 75) return 'ontrack'
            return 'below'
        },
        statementStampText() {
            if (!this.statement) return ''
            const pct = this.achievement(this.statement.actual, this.statement.target)
            if (pct >= 100) return 'TARGET MET'
            if (pct >= 75) return 'ON TRACK'
            return 'BELOW TARGET'
        },
        totalCommission() {
            return this.sellers.reduce((s, t) => s + this.commissionOf(t), 0)
        },
        totalBonus() {
            return this.sellers.reduce((s, t) => s + this.bonusOf(t), 0)
        },
    },
}
</script>

<style scoped>
.comm-modal {
    border: 0;
}
.comm-paper {
    background: #fff;
    color: #1f2937;
    padding: 32px;
    border-radius: 8px;
}
.comm-head {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    border-bottom: 2px solid #0D76E1;
    padding-bottom: 20px;
    margin-bottom: 24px;
    gap: 16px;
    flex-wrap: wrap;
}
.comm-brand {
    display: flex;
    gap: 12px;
    align-items: center;
}
.comm-logo {
    width: 44px;
    height: 44px;
}
.comm-brand h5 {
    font-size: 18px;
}
.comm-brand p {
    font-size: 12px;
    color: #6b7280;
}
.comm-title {
    text-align: right;
}
.comm-title h3 {
    letter-spacing: 3px;
    font-size: 22px;
    color: #0D76E1;
    margin-bottom: 6px;
}
.comm-title p {
    font-size: 12px;
}
.comm-grid {
    display: flex;
    gap: 24px;
    margin-bottom: 20px;
    flex-wrap: wrap;
}
.comm-grid > div {
    flex: 1;
    min-width: 150px;
}
.comm-grid h6 {
    font-size: 14px;
}
.comm-grid p {
    font-size: 12px;
    color: #6b7280;
}
.comm-label {
    font-size: 11px;
    text-transform: uppercase;
    letter-spacing: 1px;
    color: #6b7280;
    margin-bottom: 4px;
}
.comm-table {
    width: 100%;
    border-collapse: collapse;
    margin-bottom: 20px;
}
.comm-table th {
    background: #f3f4f6;
    text-align: left;
    padding: 9px 10px;
    font-size: 11px;
    text-transform: uppercase;
    letter-spacing: 0.5px;
}
.comm-table td {
    padding: 10px;
    border-bottom: 1px solid #e5e7eb;
    font-size: 12px;
}
.comm-sub {
    font-size: 11px;
    color: #6b7280;
    margin-top: 2px;
}
.comm-summary {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    gap: 16px;
    flex-wrap: wrap;
}
.comm-stamp {
    display: inline-block;
    border: 3px solid;
    padding: 6px 18px;
    border-radius: 8px;
    font-weight: 800;
    letter-spacing: 2px;
    transform: rotate(-8deg);
    font-size: 14px;
}
.comm-stamp.achieved {
    color: #16a34a;
    border-color: #16a34a;
}
.comm-stamp.ontrack {
    color: #d97706;
    border-color: #d97706;
}
.comm-stamp.below {
    color: #dc2626;
    border-color: #dc2626;
}
.comm-totals {
    width: 320px;
    max-width: 100%;
}
.comm-totals .row {
    display: flex;
    justify-content: space-between;
    padding: 7px 0;
    font-size: 13px;
}
.comm-totals .grand {
    border-top: 2px solid #1f2937;
    font-weight: 700;
    font-size: 16px;
    margin-top: 4px;
    padding-top: 12px;
}
.comm-terms {
    margin-top: 28px;
    font-size: 12px;
    color: #4b5563;
}
.comm-terms ul {
    margin: 6px 0 0;
    padding-left: 18px;
}
.comm-terms li {
    margin-bottom: 3px;
}
.comm-foot {
    margin-top: 40px;
    display: flex;
    justify-content: space-between;
    gap: 20px;
    flex-wrap: wrap;
}
.comm-sign {
    border-top: 1px solid #9ca3af;
    width: 200px;
    text-align: center;
    padding-top: 6px;
    font-size: 12px;
    color: #374151;
}
</style>
