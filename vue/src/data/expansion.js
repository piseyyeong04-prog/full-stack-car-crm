export const accounting = {
  provider: 'QuickBooks Online',
  status: 'Connected',
  company: 'Dreams Motors Co., Ltd.',
  lastSync: '07 Oct 2026 09:42',
  autoSync: true,
  syncFrequency: 'Every 6 hours',
  environment: 'Production',
}

export const accountMappings = [
  { id: 'AM-01', source: 'Vehicle Sales Revenue', glAccount: '4000 · Vehicle Sales', type: 'Revenue', status: 'Mapped' },
  { id: 'AM-02', source: 'Parts Revenue', glAccount: '4100 · Parts Sales', type: 'Revenue', status: 'Mapped' },
  { id: 'AM-03', source: 'Service Revenue', glAccount: '4200 · Service Income', type: 'Revenue', status: 'Mapped' },
  { id: 'AM-04', source: 'Cost of Vehicles', glAccount: '5000 · Cost of Goods Sold', type: 'Cost', status: 'Mapped' },
  { id: 'AM-05', source: 'Parts Cost', glAccount: '5100 · Parts Cost', type: 'Cost', status: 'Mapped' },
  { id: 'AM-06', source: 'Customer Deposits', glAccount: '2200 · Customer Deposits', type: 'Liability', status: 'Mapped' },
  { id: 'AM-07', source: 'Sales Commission', glAccount: '6100 · Commission Expense', type: 'Expense', status: 'Pending' },
  { id: 'AM-08', source: 'Warranty Cost', glAccount: '—', type: 'Expense', status: 'Unmapped' },
]

export const syncLog = [
  { id: 'SL-901', time: '07 Oct 2026 09:42', direction: 'Push', records: 48, status: 'Success' },
  { id: 'SL-902', time: '07 Oct 2026 03:42', direction: 'Push', records: 36, status: 'Success' },
  { id: 'SL-903', time: '06 Oct 2026 21:42', direction: 'Pull', records: 12, status: 'Success' },
  { id: 'SL-904', time: '06 Oct 2026 15:42', direction: 'Push', records: 51, status: 'Warning' },
  { id: 'SL-905', time: '06 Oct 2026 09:42', direction: 'Push', records: 0, status: 'Failed' },
]

export const recognitionRules = [
  { id: 'RR-01', name: 'Recognize revenue on delivery', basis: 'Delivery confirmation', status: 'Active' },
  { id: 'RR-02', name: 'Deposits held as liability', basis: 'Booking deposit', status: 'Active' },
  { id: 'RR-03', name: 'Package revenue deferred until used', basis: 'Job Card redemption', status: 'Active' },
  { id: 'RR-04', name: 'Cash collected reported separately', basis: 'Payment receipt', status: 'Active' },
]

export const channels = [
  {
    id: 'CH-01',
    name: 'Facebook Lead Ads',
    type: 'Social',
    icon: 'icon-facebook',
    status: 'Connected',
    campaigns: 3,
    leads: 46,
    conversion: 28,
    lastSync: '10 min ago',
  },
  {
    id: 'CH-02',
    name: 'TikTok Lead Gen',
    type: 'Social',
    icon: 'icon-music',
    status: 'Connected',
    campaigns: 2,
    leads: 31,
    conversion: 19,
    lastSync: '22 min ago',
  },
  {
    id: 'CH-03',
    name: 'Website Enquiry Form',
    type: 'Web',
    icon: 'icon-globe',
    status: 'Connected',
    campaigns: 1,
    leads: 24,
    conversion: 33,
    lastSync: '5 min ago',
  },
  {
    id: 'CH-04',
    name: 'Telegram Business',
    type: 'Messaging',
    icon: 'icon-send',
    status: 'Connected',
    campaigns: 0,
    leads: 18,
    conversion: 25,
    lastSync: '1 hour ago',
  },
  {
    id: 'CH-05',
    name: 'Google Ads',
    type: 'Search',
    icon: 'icon-search',
    status: 'Disconnected',
    campaigns: 0,
    leads: 0,
    conversion: 0,
    lastSync: '—',
  },
]

export const routingRules = [
  { id: 'RT-01', channel: 'Facebook Lead Ads', action: 'Round-robin to Team Alpha', status: 'Active' },
  { id: 'RT-02', channel: 'TikTok Lead Gen', action: 'Round-robin to Team Bravo', status: 'Active' },
  { id: 'RT-03', channel: 'Website Enquiry Form', action: 'Assign to Team Leader for review', status: 'Active' },
  { id: 'RT-04', channel: 'Telegram Business', action: 'Assign to Customer Care', status: 'Paused' },
]

export const portalProfiles = [
  {
    id: 'C-1001',
    name: 'Adrian James',
    phone: '+855 12 545 487',
    vehicles: [
      { model: 'Toyota Fortuner 2024', vin: 'MRHRW2850NP012345', plate: '', status: 'Active' },
    ],
    bookings: [
      { id: 'BK-6602', vehicle: 'Toyota Fortuner 2024', deposit: 5000, status: 'Pending' },
    ],
    packages: [
      { name: '5x Oil Change Package', used: 2, allowance: 5, expiry: '15 Jan 2028' },
    ],
    invoices: [
      { id: 'INV-2201', date: '05 Oct 2026', amount: 52000, paid: 20000, status: 'Partial' },
      { id: 'INV-2180', date: '15 Jul 2026', amount: 120, paid: 120, status: 'Paid' },
    ],
    serviceHistory: [
      { date: '15 Jul 2026', job: 'JC-6901', description: 'Oil change & 21-point check', amount: 120 },
      { date: '10 Apr 2026', job: 'JC-6712', description: 'First free service', amount: 0 },
    ],
  },
  {
    id: 'C-1002',
    name: 'Sue Allen',
    phone: '+855 45 478 588',
    vehicles: [
      { model: 'Ford Ranger Wildtrak', vin: 'MNBB2GDD0NW223344', plate: '', status: 'Active' },
    ],
    bookings: [
      { id: 'BK-6610', vehicle: 'Ford Ranger Wildtrak', deposit: 4200, status: 'Confirmed' },
    ],
    packages: [
      { name: 'Annual Maintenance Package', used: 1, allowance: 4, expiry: '02 Mar 2027' },
    ],
    invoices: [
      { id: 'INV-2205', date: '02 Oct 2026', amount: 42000, paid: 42000, status: 'Paid' },
    ],
    serviceHistory: [
      { date: '28 Sep 2026', job: 'JC-7002', description: '20,000 km scheduled service', amount: 178 },
      { date: '15 Apr 2026', job: 'JC-6820', description: 'Annual maintenance service', amount: 210 },
    ],
  },
  {
    id: 'C-1008',
    name: 'Andrea Aponte',
    phone: '+855 47 854 594',
    vehicles: [
      { model: 'Fleet: 4x Toyota Vios', vin: 'Multiple', plate: '', status: 'Active' },
    ],
    bookings: [
      { id: 'BK-6603', vehicle: 'Fleet: 4x Toyota Vios', deposit: 10000, status: 'Confirmed' },
    ],
    packages: [
      { name: 'Fleet Service Package', used: 7, allowance: 20, expiry: '01 Apr 2027' },
    ],
    invoices: [
      { id: 'INV-2199', date: '01 Oct 2026', amount: 96000, paid: 96000, status: 'Paid' },
    ],
    serviceHistory: [
      { date: '05 Sep 2026', job: 'JC-6990', description: 'Fleet routine service', amount: 640 },
    ],
  },
]
