<template>
  <div class="mt-3">
    <div class="dt-length d-flex">
      <label for="dt-length-0">
        <select class="form-select form-select-sm" :value="pageSize" @change="updatePageSize">
          <option v-for="size in pageSizeOptions" :key="size" :value="size">{{ size }}</option>
        </select>
        Rows per page
      </label>
    </div>
    <div class="dt-paging">
      <nav aria-label="pagination">
        <ul class="pagination">
          <li class="dt-paging-button page-item" :class="{ disabled: currentPage === 1 }">
            <button class="page-link first" type="button" @click="changePage(1)" :disabled="currentPage === 1">
              «
            </button>
          </li>
          <li class="dt-paging-button page-item" :class="{ disabled: currentPage === 1 }">
            <button class="page-link previous" type="button" @click="changePage(currentPage - 1)"
              :disabled="currentPage === 1">
              <i class="icon-chevron-left"></i>
            </button>
          </li>
          <li class="dt-paging-button page-item" :class="{ disabled: currentPage === totalPages }">
            <button class="page-link next" type="button" @click="changePage(currentPage + 1)"
              :disabled="currentPage === totalPages">
              <i class="icon-chevron-right"></i>
            </button>
          </li>
          <li class="dt-paging-button page-item" :class="{ disabled: currentPage === totalPages }">
            <button class="page-link last" type="button" @click="changePage(totalPages)"
              :disabled="currentPage === totalPages">
              »
            </button>
          </li>
        </ul>
      </nav>
    </div>
    <div class="dt-info" role="status" aria-live="polite">
      {{ startItem }} - {{ endItem }} of {{ totalItems }}
    </div>
    <div class="dt-autosize" style="width: 100%;height: 0px;"></div>
  </div>
</template>

<script>
export default {
  name: 'BasePagination',
  props: {
    currentPage: {
      type: Number,
      required: true,
    },
    pageSize: {
      type: Number,
      required: true,
    },
    pageSizeOptions: {
      type: Array,
      default: () => [5, 10, 25, 50, 100],
    },
    totalPages: {
      type: Number,
      required: true,
    },
    totalItems: {
      type: Number,
      default: 0,
    },
  },
  emits: ['update:currentPage', 'update:pageSize'],
  computed: {
    startItem() {
      if (this.totalItems === 0) return 0;
      return (this.currentPage - 1) * this.pageSize + 1;
    },
    endItem() {
      if (this.totalItems === 0) return 0;
      return Math.min(this.currentPage * this.pageSize, this.totalItems);
    },
    visiblePages() {
      const total = this.totalPages;
      const current = this.currentPage;
      const delta = 1;

      if (total <= 7) {
        return Array.from({ length: total }, (_, i) => i + 1);
      }

      const pages = [];
      const leftBound = current - delta;
      const rightBound = current + delta;
      const range = [];

      for (let i = 1; i <= total; i++) {
        if (i === 1 || i === total || (i >= leftBound && i <= rightBound)) {
          range.push(i);
        }
      }

      let l;
      for (const i of range) {
        if (l) {
          if (i - l === 2) {
            pages.push(l + 1);
          } else if (i - l !== 1) {
            pages.push('...');
          }
        }
        pages.push(i);
        l = i;
      }
      return pages;
    },
  },
  methods: {
    changePage(page) {
      if (page === '...' || page < 1 || page > this.totalPages || page === this.currentPage) return;
      this.$emit('update:currentPage', page);
    },
    updatePageSize(event) {
      const newSize = parseInt(event.target.value, 10);
      this.$emit('update:pageSize', newSize);
      this.$emit('update:currentPage', 1);
    },
  },
};
</script>
