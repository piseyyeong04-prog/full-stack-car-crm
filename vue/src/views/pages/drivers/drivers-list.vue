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

                <!-- Page Header -->
                <div class="d-flex align-items-center flex-wrap gap-3 border-bottom pb-4 mb-4">
                    <div class="flex-grow-1">
                        <div class="d-inline-flex align-items-center p-1 bg-light border rounded-pill">
                            <router-link :to="lp('/drivers/drivers-list')"
                                class="px-3 py-1 fw-semibold d-inline-flex align-items-center rounded-pill bg-white"><i
                                    class="icon-list me-2"></i>List View</router-link>
                            <router-link :to="lp('/drivers/drivers-grid')"
                                class="px-3 py-1 fw-semibold d-inline-flex align-items-center rounded-pill"><i
                                    class="icon-layout-panel-left me-2"></i>Grid View</router-link>
                        </div>
                    </div>
                    <div class="gap-3 d-flex align-items-center flex-wrap">
                        <div class="dropdown">
                            <a href="#" class="dropdown-toggle btn btn-dark d-inline-flex align-items-center"
                                data-bs-toggle="dropdown">
                                <i class="icon-arrow-down-to-line me-1"></i>Export
                            </a>
                            <ul class="dropdown-menu dropdown-menu-end p-3">
                                <li>
                                    <a href="#" class="dropdown-item rounded">Export as PDF</a>
                                </li>
                                <li>
                                    <a href="#" class="dropdown-item rounded">Export as Excel</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <!-- End Page Header -->

                <div class="d-flex align-items-center flex-wrap gap-3 justify-content-between mb-4">

                    <!-- customers dropdown -->
                    <div class="dropdown">
                        <a href="#"
                            class="dropdown-toggle btn btn-white d-flex align-items-center justify-content-between"
                            data-bs-toggle="dropdown" data-bs-auto-close="outside">
                            <i class="icon-user text-dark me-2"></i>All Drivers
                        </a>
                        <div class="dropdown-menu dropdown-menu-lg p-3">
                            <h6 class="fs-14 fw-semibold mb-3">Drivers</h6>
                            <div class="input-icon-end input-icon position-relative mb-3">
                                <span class="input-icon-addon">
                                    <i class="icon-search text-dark"></i>
                                </span>
                                <input type="text" class="form-control form-control-md" placeholder="Search">
                            </div>
                            <ul class="list-unstyled mb-0">
                                <li class="dropdown-item rounded">
                                    <label class="d-flex align-items-center">
                                        <input class="form-check-input m-0 me-2" type="checkbox">Benjamin Scott
                                    </label>
                                </li>
                                <li class="dropdown-item rounded">
                                    <label class="d-flex align-items-center">
                                        <input class="form-check-input m-0 me-2" type="checkbox">Matthew Parker
                                    </label>
                                </li>
                                <li class="dropdown-item rounded">
                                    <label class="d-flex align-items-center">
                                        <input class="form-check-input m-0 me-2" type="checkbox">Samuel Harris
                                    </label>
                                </li>
                                <li class="dropdown-item rounded">
                                    <label class="d-flex align-items-center">
                                        <input class="form-check-input m-0 me-2" type="checkbox">Olivia Carter
                                    </label>
                                </li>
                                <li class="dropdown-item rounded">
                                    <label class="d-flex align-items-center">
                                        <input class="form-check-input m-0 me-2" type="checkbox">Riley Cooper
                                    </label>
                                </li>
                                <li class="dropdown-item rounded">
                                    <label class="d-flex align-items-center">
                                        <input class="form-check-input m-0 me-2" type="checkbox">Avery Parker
                                    </label>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div class="d-flex align-items-center gap-3 flex-wrap">

                        <!-- column -->
                        <div class="dropdown">
                            <a href="#" class="btn btn-icon btn-white" data-bs-toggle="dropdown"
                                data-bs-auto-close="outside" aria-label="column"><i class="icon-columns-3"></i></a>
                            <div class="dropdown-menu dropdown-menu-start dropdown-menu-lg p-3">
                                <h6 class="fs-14 fw-semibold mb-3">Column</h6>
                                <div class="input-icon-end input-icon position-relative mb-3">
                                    <span class="input-icon-addon">
                                        <i class="icon-search text-dark"></i>
                                    </span>
                                    <input type="text" class="form-control form-control-md" placeholder="Search">
                                </div>
                                <draggable v-model="columns" @start="drag = true" @end="drag = false" item-key="key">
                                    <div class="mb-3" v-for="element in columns" :key="element.key">
                                        <label class="d-flex align-items-center">
                                            <i class="icon-grip-vertical me-2"></i>
                                            <input class="form-check-input m-0 me-2" type="checkbox"
                                                v-model="element.visible">
                                            {{ element.title }}
                                        </label>
                                    </div>
                                </draggable>
                            </div>
                        </div>

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

                        <a href="#" class="btn btn-primary d-inline-flex align-items-center" data-bs-toggle="offcanvas"
                            data-bs-target="#add_driver"><i class="icon-plus me-1"></i>New Driver</a>

                    </div>
                </div>

                <!-- table start -->
                <div class="table-responsive table-nowrap">
                    <a-table class="table mb-0 datatable" :columns="visibleColumns" :data-source="paginatedData"
                        :pagination="false">
                        <template #bodyCell="{ column, record }">
                            <template v-if="column.key === 'Driver'">
                                <div class="d-flex align-items-center">
                                    <a href="#" class="avatar online avatar-rounded" data-bs-toggle="offcanvas" data-bs-target="#view_details">
                                        <img :src="getImageUrl(record.Image)" class="img-fluid" alt="img">
                                    </a>
                                    <div class="ms-2">
                                        <h6 class="fw-semibold mb-1 fs-14"><a href="#" class="text-dark" data-bs-toggle="offcanvas" data-bs-target="#view_details">{{
                                            record.Driver }}</a></h6>
                                    </div>
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
                                                <a href="#" class="dropdown-item rounded d-flex align-items-center"
                                                    data-bs-toggle="offcanvas" data-bs-target="#view_details"><i
                                                        class="icon-users me-2"></i>View Details</a>
                                            </li>
                                            <li>
                                                <a href="#" class="dropdown-item rounded d-flex align-items-center"
                                                    data-bs-toggle="offcanvas" data-bs-target="#edit_driver"><i
                                                        class="icon-pencil-line me-2"></i>Edit Driver</a>
                                            </li>
                                            <li>
                                                <a href="#" class="dropdown-item rounded d-flex align-items-center"
                                                    data-bs-toggle="modal" data-bs-target="#delete_modal"
                                                    @click="setDelete(record)"><i class="icon-trash-2 me-2"></i>Delete
                                                    Driver </a>
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
                            <a href="#" class="btn btn-light w-100" data-bs-dismiss="modal">Close</a>
                            <a href="javascript:void(0);" class="btn btn-danger w-100" data-bs-dismiss="modal"
                                @click="deleteItem">Delete</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    <!-- End Delete Modal  -->

    <drivers-modal></drivers-modal>
</template>
<script>
import BasePagination from '@/components/BasePagination.vue';
import { VueDraggableNext } from 'vue-draggable-next';
import { ref } from 'vue';
const valueOne = ref();

const data = [
    {
        "Driver": "Benjamin Scott",
        "Email": "benjamin@example.com",
        "Image": "driver-01.jpg",
        "Mobile": "+1 58544 78987",
        "Status": "Active",
    },
    {
        "Driver": "Matthew Parker",
        "Email": "mat@example.com",
        "Image": "driver-02.jpg",
        "Mobile": "+1 45478 54588",
        "Status": "Active",
    },
    {
        "Driver": "Samuel Harris",
        "Email": "sam@example.com",
        "Image": "driver-03.jpg",
        "Mobile": "+1 33658 54589",
        "Status": "Active",
    },
    {
        "Driver": "Riley Cooper",
        "Email": "riley@example.com",
        "Image": "driver-04.jpg",
        "Mobile": "+1 47854 54590",
        "Status": "Inactive",
    },
    {
        "Driver": "Avery Parker",
        "Email": "avery@example.com",
        "Image": "driver-05.jpg",
        "Mobile": "+1 58974 54591",
        "Status": "Active",
    },
    {
        "Driver": "Quinn Bailey",
        "Email": "quinn@example.com",
        "Image": "driver-06.jpg",
        "Mobile": "+1 96587 54592",
        "Status": "Active",
    },
    {
        "Driver": "Cameron Lee",
        "Email": "cameron@example.com",
        "Image": "driver-07.jpg",
        "Mobile": "+1 31245 54593",
        "Status": "Active",
    },
    {
        "Driver": "Jamie Brooks",
        "Email": "jamie@example.com",
        "Image": "driver-08.jpg",
        "Mobile": "+1 47854 54594",
        "Status": "Active",
    },
    {
        "Driver": "Alex Campbell",
        "Email": "alex@example.com",
        "Image": "driver-09.jpg",
        "Mobile": "+1 14524 54595",
        "Status": "Active",
    },
    {
        "Driver": "Casey Adams",
        "Email": "casey@example.com",
        "Image": "driver-10.jpg",
        "Mobile": "+1 22145 54596",
        "Status": "Active",
    }
]
const columns = [
    {
        title: "Driver",
        dataIndex: "Driver",
        key: "Driver",
        sorter: {
            compare: (a, b) => (a.Driver.toLowerCase() > b.Driver.toLowerCase() ? -1 : 1),
        },
        visible: true,
    },
    {
        title: "Email",
        dataIndex: "Email",
        key: "Email",
        sorter: {
            compare: (a, b) => (a.Email.toLowerCase() > b.Email.toLowerCase() ? -1 : 1),
        },
        visible: true,
    },
    {
        title: "Mobile",
        dataIndex: "Mobile",
        key: "Mobile",
        sorter: {
            compare: (a, b) => (a.Mobile.toLowerCase() > b.Mobile.toLowerCase() ? -1 : 1),
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
        getImageUrl(imageName) {
            return new URL(`/src/assets/img/drivers/${imageName}`, import.meta.url).href;
        },
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
                    record.Driver.toLowerCase().includes(query) ||
                    record.Email.toLowerCase().includes(query) ||
                    record.Mobile.toLowerCase().includes(query) ||
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