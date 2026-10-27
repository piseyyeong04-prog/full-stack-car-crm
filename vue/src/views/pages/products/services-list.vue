<template>
    <!-- ========================
        Start Page Content
    ========================= -->
    <div class="page-wrapper">

        <!-- Start Content -->
        <div class="content">

            <!-- Topbar Start -->
            <layout-header></layout-header>
            <!-- Topbar End -->

            <!-- Start Content Wrap -->
            <div class="content-wrap">

                <!-- Reports Nav -->
                <products-top></products-top>
                <!-- End Reports Nav -->

                <div class="d-flex align-items-center flex-wrap gap-3 justify-content-between mb-4">
                    <div class="d-flex align-items-center flex-wrap gap-3">
                        <div class="dropdown">
                            <a href="#"
                                class="dropdown-toggle btn btn-white d-flex align-items-center justify-content-between"
                                data-bs-toggle="dropdown" data-bs-auto-close="outside">
                                <i class="icon-sparkles text-dark me-2"></i>All Services
                            </a>
                            <div class="dropdown-menu dropdown-menu-lg p-3">
                                <h6 class="fs-14 fw-semibold mb-3">Services</h6>
                                <div class="input-icon-end input-icon position-relative mb-3">
                                    <span class="input-icon-addon">
                                        <i class="icon-search text-dark"></i>
                                    </span>
                                    <input type="text" class="form-control form-control-md" placeholder="Search">
                                </div>
                                <ul class="list-unstyled mb-0">
                                    <li class="dropdown-item rounded">
                                        <label class="d-flex align-items-center">
                                            <input class="form-check-input m-0 me-2" type="checkbox" checked>Wash & Fold
                                        </label>
                                    </li>
                                    <li class="dropdown-item rounded">
                                        <label class="d-flex align-items-center">
                                            <input class="form-check-input m-0 me-2" type="checkbox" checked>Wash & Iron
                                        </label>
                                    </li>
                                    <li class="dropdown-item rounded">
                                        <label class="d-flex align-items-center">
                                            <input class="form-check-input m-0 me-2" type="checkbox">Dry Cleaning
                                        </label>
                                    </li>
                                    <li class="dropdown-item rounded">
                                        <label class="d-flex align-items-center">
                                            <input class="form-check-input m-0 me-2" type="checkbox">Steam Press /
                                            Ironing
                                        </label>
                                    </li>
                                    <li class="dropdown-item rounded">
                                        <label class="d-flex align-items-center">
                                            <input class="form-check-input m-0 me-2" type="checkbox">Stain Removal
                                        </label>
                                    </li>
                                    <li class="dropdown-item rounded">
                                        <label class="d-flex align-items-center">
                                            <input class="form-check-input m-0 me-2" type="checkbox">Curtain Cleaning
                                        </label>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div class="d-flex align-items-center gap-3 flex-wrap">

                        <!-- sort by -->
                        <div class="dropdown">
                            <a href="#" class="dropdown-toggle btn btn-white d-inline-flex align-items-center"
                                data-bs-toggle="dropdown">
                                Sort by : Newest
                            </a>
                            <div class="dropdown-menu dropdown-menu-end p-3">
                                <h6 class="fs-14 fw-semibold mb-3">Sort By</h6>
                                <ul class="list-unstyled mb-0">
                                    <li>
                                        <a href="#" class="dropdown-item rounded">Newest</a>
                                    </li>
                                    <li>
                                        <a href="#" class="dropdown-item rounded">Oldest</a>
                                    </li>
                                    <li>
                                        <a href="#" class="dropdown-item rounded">Ascending</a>
                                    </li>
                                    <li>
                                        <a href="#" class="dropdown-item rounded">Descending</a>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <!-- table search -->
                        <div class="search-input">
                            <span class="btn-searchset"><i class="icon-search fs-14"></i></span>
                            <input type="text" class="form-control search-addon" placeholder="Search"
                                v-model="searchQuery" />
                        </div>

                        <a href="#" data-bs-toggle="modal" data-bs-target="#add_service"
                            class="btn btn-primary d-inline-flex align-items-center"><i class="icon-plus me-2"></i>New
                            Service</a>

                        <div class="dropdown">
                            <a href="javascript:void(0);"
                                class="dropdown-toggle btn btn-dark d-inline-flex align-items-center"
                                data-bs-toggle="dropdown">
                                <i class="icon-arrow-down-to-line me-1"></i>Export
                            </a>
                            <ul class="dropdown-menu dropdown-menu-end p-3">
                                <li>
                                    <a href="javascript:void(0);" class="dropdown-item rounded">Export as PDF</a>
                                </li>
                                <li>
                                    <a href="javascript:void(0);" class="dropdown-item rounded">Export as Excel</a>
                                </li>
                            </ul>
                        </div>

                    </div>
                </div>

                <!-- table start -->
                <div class="table-responsive table-nowrap">
                    <a-table class="table mb-0 datatable" :columns="visibleColumns" :data-source="paginatedData"
                        :pagination="false">
                        <template #bodyCell="{ column, record }">
                            <template v-if="column.key === 'Services'">
                                <div>
                                    <h6 class="fs-14 fw-semibold mb-0">{{ record.Services }}</h6>
                                </div>
                            </template>
                            <template v-if="column.key === 'Status'">
                                <span class="badge" :class="[
                                    record.Status === 'Active' ? 'badge-soft-success'
                                        : 'badge-soft-danger',
                                    ' me-1',
                                ]">{{ record.Status }}</span>
                            </template>
                            <template v-if="column.key === 'Action'">
                                <div class="text-end">
                                    <div class="dropstart">
                                        <button class="btn btn-icon btn-white" type="button" data-bs-toggle="dropdown"
                                            aria-haspopup="true" aria-expanded="false" aria-label="Actions">
                                            <i class="icon-ellipsis-vertical"></i>
                                        </button>
                                        <ul class="dropdown-menu p-3">
                                            <li>
                                                <a href="#" data-bs-toggle="modal" data-bs-target="#edit_service"
                                                    class="dropdown-item rounded d-flex align-items-center"><i
                                                        class="icon-pencil-line me-2"></i>Edit Service</a>
                                            </li>
                                            <li>
                                                <a href="#" class="dropdown-item rounded d-flex align-items-center"
                                                    data-bs-toggle="modal" data-bs-target="#delete_modal"
                                                    @click="setDelete(record)"><i class="icon-trash-2 me-2"></i>Delete
                                                    Service</a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </template>
                        </template>
                    </a-table>
                </div>
                <!-- table end -->
                <BasePagination :currentPage="currentPage" :pageSize="pageSize" :pageSizeOptions="pageSizeOptions"
                    :totalPages="totalPages" :totalItems="filteredPages.length" @update:currentPage="onPageChange"
                    @update:pageSize="onPageSizeChange" />
            </div>
            <!-- End Content Wrap -->

        </div>
        <!-- End Content -->

    </div>
    <!-- ========================
        End Page Content
    ========================= -->

    <!-- Delete Modal  -->
    <div class="modal fade" id="delete_modal">
        <div class="modal-dialog modal-dialog-centered modal-sm">
            <div class="modal-content">
                <div class="modal-body text-center p-4">
                    <div class="mb-4">
                        <span class="avatar avatar-lg rounded-circle bg-danger">
                            <i class="icon-trash fs-24"></i>
                        </span>
                    </div>
                    <h4 class="mb-1">Delete Confirmation</h4>
                    <p class="mb-4">Are you sure you want to delete? </p>
                    <div class="d-flex justify-content-center gap-2">
                        <a href="javascript:void(0);" class="btn btn-light w-100" data-bs-dismiss="modal">Close</a>
                        <a href="javascript:void(0);" class="btn btn-danger w-100" data-bs-dismiss="modal"
                            @click="deleteItem">Delete</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- End Delete Modal  -->

    <services-modal></services-modal>

</template>

<script>
import BasePagination from '@/components/BasePagination.vue';
import { VueDraggableNext } from 'vue-draggable-next';
import { ref } from 'vue';
const valueOne = ref();

const data = [
    {
        "Services": "Wash & Fold",
        "Status": "Active",
    },
    {
        "Services": "Wash & Iron",
        "Status": "Active",
    },
    {
        "Services": "Dry Cleaning",
        "Status": "Active",
    },
    {
        "Services": "Steam Press / Ironing",
        "Status": "Inactive",
    },
    {
        "Services": "Stain Removal",
        "Status": "Active",
    },
    {
        "Services": "Curtain Cleaning",
        "Status": "Active",
    },
    {
        "Services": "Bed Linen Cleaning",
        "Status": "Active",
    },
    {
        "Services": "Quilt Cleaning",
        "Status": "Active",
    },
    {
        "Services": "Ethnic Wear Cleaning",
        "Status": "Active",
    },
    {
        "Services": "Suit Cleaning",
        "Status": "Active",
    }
]

const columns = [
    {
        title: "Services",
        dataIndex: "Services",
        key: "Services",
        sorter: {
            compare: (a, b) => (a.Services.toLowerCase() > b.Services.toLowerCase() ? -1 : 1),
        },
        visible: true,
    },
    {
        title: "Status",
        dataIndex: "Status",
        key: "Status",
        sorter: {
            compare: (a, b) => (a.Status.toLowerCase() > b.Status.toLowerCase() ? -1 : 1),
        },
        visible: true,
    },
    {
        title: "Action",
        dataIndex: "Action",
        key: "Action",
        sorter: false,
        visible: true,
    },
]

export default {
    components: {
        BasePagination,
        draggable: VueDraggableNext,
    },
    data() {
        return {
            searchQuery: "",
            data,
            valueOne,
            columns,
            currentPage: 1,
            pageSize: 10,
            pageSize: 10,
            pageSizeOptions: [5, 10, 25, 50, 100],
            itemToDelete: null,
            drag: false,
        }
    },
    methods: {
        onPageChange(page) {
            this.currentPage = page;
        },
        onPageSizeChange(size) {
            this.pageSize = Number(size);
            this.currentPage = 1;
        },
        setDelete(record) {
            this.itemToDelete = record;
        },
        deleteItem() {
            if (this.itemToDelete) {
                this.data = this.data.filter(item => item !== this.itemToDelete);
                this.itemToDelete = null;
            }
        },
    },
    computed: {
        filteredPages() {
            const query = this.searchQuery.toLowerCase();
            return this.data.filter((record) => {
                return (
                    record.Services.toLowerCase().includes(query) ||
                    record.Status.toLowerCase().includes(query)
                );
            });
        },
        paginatedData() {
            const start = (this.currentPage - 1) * this.pageSize;
            return this.filteredPages.slice(start, start + this.pageSize);
        },
        totalPages() {
            return Math.ceil(this.filteredPages.length / this.pageSize) || 1;
        },
        visibleColumns() {
            return this.columns.filter((column) => column.visible);
        },
    },
}
</script>