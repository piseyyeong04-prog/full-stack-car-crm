import { chartData } from '@/data/crm'

const salesTrend = {
  series: chartData.salesTrend.series,
  chartOptions: {
    chart: {
      height: 280,
      type: 'area',
      toolbar: { show: false },
      zoom: { enabled: false },
      fontFamily: 'inherit',
    },
    colors: ['#0D76E1', '#13B5C9'],
    dataLabels: { enabled: false },
    stroke: { curve: 'smooth', width: 2 },
    fill: {
      type: 'gradient',
      gradient: { shadeIntensity: 1, opacityFrom: 0.35, opacityTo: 0, stops: [0, 90, 100] },
    },
    grid: { borderColor: '#eaeaea', strokeDashArray: 4, xaxis: { lines: { show: true } } },
    xaxis: {
      categories: chartData.salesTrend.categories,
      axisBorder: { show: false },
      axisTicks: { show: false },
    },
    legend: { show: false },
    tooltip: { shared: true, intersect: false },
  },
}

const pipelineChart = {
  series: chartData.pipeline.series,
  chartOptions: {
    chart: { height: 280, type: 'bar', toolbar: { show: false }, fontFamily: 'inherit' },
    plotOptions: {
      bar: { borderRadius: 8, borderRadiusApplication: 'around', columnWidth: '55%', distributed: true },
    },
    colors: ['#0D76E1', '#13B5C9', '#14B51D', '#F9C126', '#FF7EE9', '#8b5cf6', '#f97316', '#64748b'],
    dataLabels: { enabled: false },
    legend: { show: false },
    xaxis: {
      categories: chartData.pipeline.categories,
      axisBorder: { show: false },
      axisTicks: { show: false },
      labels: { style: { fontSize: '11px' } },
    },
    grid: { borderColor: '#eaeaea', strokeDashArray: 4, yaxis: { lines: { show: true } } },
  },
}

const sourceChart = {
  series: chartData.sources,
  chartOptions: {
    chart: { type: 'donut', height: 280, fontFamily: 'inherit' },
    labels: ['Facebook', 'TikTok', 'Website', 'Referral', 'Walk-in', 'Other'],
    colors: ['#0D76E1', '#13B5C9', '#F9C126', '#14B51D', '#FF7EE9', '#94a3b8'],
    legend: { show: false },
    dataLabels: { enabled: false },
    plotOptions: { pie: { donut: { size: '72%' } } },
    stroke: { colors: ['#fff'], width: 2 },
  },
}

const stockChart = {
  series: [{ name: 'Vehicles', data: [3, 2, 1, 4, 1, 1, 1] }],
  chartOptions: {
    chart: { height: 240, type: 'bar', toolbar: { show: false }, fontFamily: 'inherit' },
    plotOptions: { bar: { borderRadius: 6, horizontal: true, barHeight: '55%' } },
    colors: ['#13B5C9'],
    dataLabels: { enabled: false },
    xaxis: {
      categories: ['Ordered', 'In Transit', 'Inspection', 'Available', 'Reserved', 'Sold', 'Delivered'],
      axisBorder: { show: false },
      axisTicks: { show: false },
    },
    grid: { borderColor: '#eaeaea', strokeDashArray: 4 },
  },
}

export { salesTrend, pipelineChart, sourceChart, stockChart }
