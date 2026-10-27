import { Modal } from 'bootstrap'

export function showModal(id) {
  const el = document.getElementById(id)
  if (!el) return
  const instance = Modal.getInstance(el) || new Modal(el)
  instance.show()
}

export function hideModal(id) {
  const el = document.getElementById(id)
  if (!el) return
  const instance = Modal.getInstance(el) || new Modal(el)
  instance.hide()
}
