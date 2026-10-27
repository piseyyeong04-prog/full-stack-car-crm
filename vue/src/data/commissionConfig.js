import { reactive } from 'vue'

export const commissionConfig = reactive([
  { name: 'Vibol Meas', team: 'Team Alpha', commissionRate: 1.0, unitTarget: 6, revenueTarget: 240000, cashTarget: 200000, targetBonus: 200, bonusPerExtra: 100, effectiveDate: '2026-10-01', version: 'v3', active: true },
  { name: 'Chenda Kim', team: 'Team Alpha', commissionRate: 1.0, unitTarget: 5, revenueTarget: 200000, cashTarget: 180000, targetBonus: 200, bonusPerExtra: 100, effectiveDate: '2026-10-01', version: 'v2', active: true },
  { name: 'Pisey Long', team: 'Team Bravo', commissionRate: 1.0, unitTarget: 5, revenueTarget: 180000, cashTarget: 160000, targetBonus: 200, bonusPerExtra: 100, effectiveDate: '2026-10-01', version: 'v2', active: true },
  { name: 'Kanha Ros', team: 'Team Bravo', commissionRate: 1.0, unitTarget: 4, revenueTarget: 150000, cashTarget: 140000, targetBonus: 200, bonusPerExtra: 100, effectiveDate: '2026-10-01', version: 'v1', active: true },
  { name: 'Sophea Chan', team: 'Team Alpha', commissionRate: 1.2, unitTarget: 10, revenueTarget: 440000, cashTarget: 380000, targetBonus: 300, bonusPerExtra: 150, effectiveDate: '2026-10-01', version: 'v4', active: true },
  { name: 'Rithy Nou', team: 'Team Bravo', commissionRate: 1.0, unitTarget: 9, revenueTarget: 330000, cashTarget: 300000, targetBonus: 250, bonusPerExtra: 120, effectiveDate: '2026-10-01', version: 'v2', active: true },
])

export const defaultCommissionConfig = () => ({
  name: '',
  team: 'Team Alpha',
  commissionRate: 1.0,
  unitTarget: 5,
  revenueTarget: 200000,
  cashTarget: 180000,
  targetBonus: 200,
  bonusPerExtra: 100,
  effectiveDate: new Date().toISOString().slice(0, 10),
  version: 'v1',
  active: true,
})
