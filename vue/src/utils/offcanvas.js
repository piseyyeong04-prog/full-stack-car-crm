import { Offcanvas } from 'bootstrap'

export function hideOffcanvas(id) {
  const el = document.getElementById(id)
  if (!el) return
  const instance = Offcanvas.getInstance(el) || new Offcanvas(el)
  instance.hide()
}

export function showOffcanvas(id) {
  const el = document.getElementById(id)
  if (!el) return
  const instance = Offcanvas.getInstance(el) || new Offcanvas(el)
  instance.show()
}
