<template>
    <div v-if="reportPreview.visible" class="report-preview-overlay">
        <div class="report-preview-toolbar">
            <div class="d-flex align-items-center gap-2">
                <i class="icon-file-text fs-16"></i>
                <strong>{{ reportPreview.title }}</strong>
            </div>
            <div class="d-flex align-items-center gap-2">
                <button type="button" class="btn btn-primary btn-sm" @click="print">
                    <i class="icon-printer me-1"></i>{{ $t('common.print') }}
                </button>
                <button type="button" class="btn btn-dark btn-sm" @click="close">
                    <i class="icon-x me-1"></i>{{ $t('common.close') }}
                </button>
            </div>
        </div>
        <iframe ref="frame" class="report-preview-frame" :srcdoc="reportPreview.html" title="Report preview"></iframe>
    </div>
</template>

<script>
import { reportPreview, closeReportPreview } from '@/utils/ui'

export default {
    name: 'ReportPreview',
    setup() {
        return { reportPreview }
    },
    methods: {
        close() {
            closeReportPreview()
        },
        print() {
            window.print()
        },
    },
}
</script>

<style>
.report-preview-overlay {
    position: fixed;
    inset: 0;
    z-index: 1085;
    background: rgba(15, 23, 42, 0.6);
    display: flex;
    flex-direction: column;
    padding: 16px;
}
.report-preview-toolbar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 8px;
    flex-wrap: wrap;
    background: var(--bs-body-bg);
    color: var(--bs-body-color);
    border: 1px solid var(--bs-border-color);
    border-radius: 10px;
    padding: 10px 14px;
    margin-bottom: 12px;
}
.report-preview-frame {
    flex: 1;
    width: 100%;
    min-height: 0;
    border: 0;
    border-radius: 10px;
    background: #fff;
}

@media print {
    body * {
        visibility: hidden;
    }
    .report-preview-overlay,
    .report-preview-overlay * {
        visibility: visible;
    }
    .report-preview-overlay {
        position: absolute;
        inset: 0;
        background: #fff;
        padding: 0;
    }
    .report-preview-toolbar {
        display: none !important;
    }
    .report-preview-frame {
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        border-radius: 0;
    }
}
</style>
