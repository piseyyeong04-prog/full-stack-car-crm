export function toCsvValue(value) {
  const s = value === null || value === undefined ? '' : String(value)
  if (/[",\n]/.test(s)) return '"' + s.replace(/"/g, '""') + '"'
  return s
}

export function exportCsv(filename, columns, rows) {
  const headers = columns.map((c) => c.title)
  const keys = columns.map((c) => c.key)
  const lines = [headers.map(toCsvValue).join(',')]
  rows.forEach((row) => {
    lines.push(keys.map((k) => toCsvValue(row[k])).join(','))
  })
  const csv = '\uFEFF' + lines.join('\n')
  const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' })
  const url = URL.createObjectURL(blob)
  const a = document.createElement('a')
  a.href = url
  a.download = filename.endsWith('.csv') ? filename : filename + '.csv'
  document.body.appendChild(a)
  a.click()
  document.body.removeChild(a)
  URL.revokeObjectURL(url)
}

export function exportPdf(title, columns, rows) {
  const headers = columns.map((c) => `<th>${c.title}</th>`).join('')
  const body = rows
    .map((row) => '<tr>' + columns.map((c) => `<td>${row[c.key] ?? ''}</td>`).join('') + '</tr>')
    .join('')
  const html = `<!doctype html><html><head><meta charset="utf-8"><title>${title}</title>
  <style>body{font-family:Arial,sans-serif;padding:24px;color:#1f2937}h2{margin:0 0 16px}
  table{width:100%;border-collapse:collapse;font-size:12px}
  th,td{border:1px solid #d1d5db;padding:6px 8px;text-align:left}th{background:#f3f4f6}</style>
  </head><body><h2>${title}</h2><table><thead><tr>${headers}</tr></thead><tbody>${body}</tbody></table></body></html>`
  const win = window.open('', '_blank')
  if (!win) return false
  win.document.write(html)
  win.document.close()
  win.focus()
  win.print()
  return true
}
