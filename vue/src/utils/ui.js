import { reactive } from 'vue'

export const detailDialog = reactive({
  visible: false,
  title: '',
  record: null,
})

export function openDetail(title, record) {
  detailDialog.title = title
  detailDialog.record = record
  detailDialog.visible = true
}

export function closeDetail() {
  detailDialog.visible = false
}

export const toasts = reactive([])

export function notify(message, type = 'success') {
  const id = Date.now() + Math.random()
  toasts.push({ id, message, type })
  setTimeout(() => {
    const i = toasts.findIndex((t) => t.id === id)
    if (i > -1) toasts.splice(i, 1)
  }, 3200)
}

export const reportPreview = reactive({
  visible: false,
  html: '',
  title: 'Report',
})

export function openReportPreview({ html, title = 'Report' }) {
  reportPreview.html = html
  reportPreview.title = title
  reportPreview.visible = true
}

export function closeReportPreview() {
  reportPreview.visible = false
}

