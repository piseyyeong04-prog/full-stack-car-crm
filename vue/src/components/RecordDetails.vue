<template>
    <!-- Record details offcanvas -->
    <div class="offcanvas offcanvas-end" tabindex="-1" id="global_record_details" ref="canvasRef">
        <div class="offcanvas-header d-flex align-items-center justify-content-between">
            <h4 class="offcanvas-title mb-0">{{ detailDialog.title || 'Details' }}</h4>
            <button type="button" class="btn-close btn-close-modal" data-bs-dismiss="offcanvas" aria-label="Close">
                <i class="icon-x"></i>
            </button>
        </div>
        <div class="offcanvas-body p-0" v-if="detailDialog.record">
            <div class="p-4">
                <div v-for="entry in entries" :key="entry.key"
                    class="d-flex align-items-start justify-content-between gap-3 py-3 border-bottom">
                    <span class="text-muted fs-13 flex-shrink-0">{{ entry.label }}</span>
                    <span class="text-end fw-medium">{{ entry.value }}</span>
                </div>
            </div>
        </div>
        <div class="offcanvas-footer d-flex align-items-center gap-2 pt-2">
            <button type="button" class="btn btn-dark w-100" data-bs-dismiss="offcanvas">
                <i class="icon-x me-1"></i>Close
            </button>
        </div>
    </div>

    <!-- Toast host -->
    <div class="toast-container position-fixed bottom-0 end-0 p-3" style="z-index: 1090;">
        <div v-for="t in toasts" :key="t.id"
            class="toast show align-items-center text-white border-0 mb-2"
            :class="'bg-' + t.type" role="alert">
            <div class="d-flex">
                <div class="toast-body d-flex align-items-center gap-2">
                    <i :class="toastIcon(t.type)"></i>{{ t.message }}
                </div>
                <button type="button" class="btn-close btn-close-white me-2 m-auto" @click="dismiss(t)"></button>
            </div>
        </div>
    </div>
</template>

<script>
import { Offcanvas } from 'bootstrap'
import { ref, watch, computed, onMounted, onBeforeUnmount } from 'vue'
import { detailDialog, closeDetail, toasts } from '@/utils/ui'

const MONEY_KEYS = ['price', 'cost', 'amount', 'total', 'paid', 'balance', 'deposit', 'budget', 'revenue', 'value', 'estimate', 'salary']

export default {
    name: 'RecordDetails',
    setup() {
        const canvasRef = ref(null)

        watch(() => detailDialog.visible, (visible) => {
            if (!canvasRef.value) return
            const instance = Offcanvas.getOrCreateInstance(canvasRef.value)
            if (visible) instance.show()
            else instance.hide()
        })

        const onHidden = () => { closeDetail() }

        onMounted(() => {
            if (canvasRef.value) {
                canvasRef.value.addEventListener('hidden.bs.offcanvas', onHidden)
            }
        })

        onBeforeUnmount(() => {
            if (canvasRef.value) {
                canvasRef.value.removeEventListener('hidden.bs.offcanvas', onHidden)
            }
        })

        const entries = computed(() => {
            const record = detailDialog.record
            if (!record) return []
            return Object.entries(record)
                .filter(([, value]) => typeof value !== 'object' || value === null)
                .map(([key, value]) => ({
                    key,
                    label: labelFor(key),
                    value: formatValue(key, value),
                }))
        })

        const labelFor = (key) =>
            key.replace(/([a-z])([A-Z])/g, '$1 $2').replace(/_/g, ' ').replace(/\b\w/g, (c) => c.toUpperCase())

        const formatValue = (key, value) => {
            if (value === null || value === undefined || value === '') return '—'
            if (typeof value === 'boolean') return value ? 'Yes' : 'No'
            if (MONEY_KEYS.some((k) => key.toLowerCase().includes(k)) && !isNaN(Number(value))) {
                return '$' + Number(value).toLocaleString('en-US')
            }
            return String(value)
        }

        const toastIcon = (type) => {
            if (type === 'danger') return 'icon-circle-alert'
            if (type === 'warning') return 'icon-triangle-alert'
            if (type === 'info') return 'icon-info'
            return 'icon-circle-check'
        }

        const dismiss = (t) => {
            const i = toasts.findIndex((x) => x.id === t.id)
            if (i > -1) toasts.splice(i, 1)
        }

        return { canvasRef, detailDialog, toasts, entries, toastIcon, dismiss, closeDetail }
    },
}
</script>
