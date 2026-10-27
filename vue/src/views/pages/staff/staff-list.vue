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
                            <router-link :to="lp('/staff/staff-list')"
                                class="px-3 py-1 fw-semibold d-inline-flex align-items-center rounded-pill bg-white"><i
                                    class="icon-list me-2"></i>List View</router-link>
                            <router-link :to="lp('/staff/staff-grid')"
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
                            <i class="icon-user text-dark me-2"></i>All Satffs
                        </a>
                        <div class="dropdown-menu dropdown-menu-lg p-3">
                            <h6 class="fs-14 fw-semibold mb-3">Satffs</h6>
                            <div class="input-icon-end input-icon position-relative mb-3">
                                <span class="input-icon-addon">
                                    <i class="icon-search text-dark"></i>
                                </span>
                                <input type="text" class="form-control form-control-md" placeholder="Search">
                            </div>
                            <ul class="list-unstyled mb-0">
                                <li class="dropdown-item rounded">
                                    <label class="d-flex align-items-center">
                                        <input class="form-check-input m-0 me-2" type="checkbox">Jason Miller
                                    </label>
                                </li>
                                <li class="dropdown-item rounded">
                                    <label class="d-flex align-items-center">
                                        <input class="form-check-input m-0 me-2" type="checkbox">Sarah Thompson
                                    </label>
                                </li>
                                <li class="dropdown-item rounded">
                                    <label class="d-flex align-items-center">
                                        <input class="form-check-input m-0 me-2" type="checkbox">Michael Roberts
                                    </label>
                                </li>
                                <li class="dropdown-item rounded">
                                    <label class="d-flex align-items-center">
                                        <input class="form-check-input m-0 me-2" type="checkbox">Olivia Carter
                                    </label>
                                </li>
                                <li class="dropdown-item rounded">
                                    <label class="d-flex align-items-center">
                                        <input class="form-check-input m-0 me-2" type="checkbox">Sophia Hayes
                                    </label>
                                </li>
                                <li class="dropdown-item rounded">
                                    <label class="d-flex align-items-center">
                                        <input class="form-check-input m-0 me-2" type="checkbox">Hannah Lewis
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
                            data-bs-target="#add_staffs"><i class="icon-plus me-1"></i>New Staff</a>

                    </div>
                </div>

                <!-- table start -->
                <div class="table-responsive table-nowrap">
                    <a-table class="table mb-0 datatable" :columns="visibleColumns" :data-source="paginatedData"
                        :pagination="false">
                        <template #bodyCell="{ column, record }">
                            <template v-if="column.key === 'Staff'">
                                <div class="d-flex align-items-center">
                                    <a href="#" data-bs-toggle="offcanvas" data-bs-target="#view_details"
                                        class="avatar avatar-sm avatar-rounded flex-shrink-0 me-2">
                                        <img :src="getImageUrl(record.Image)" alt="customer" class="img-fluid">
                                    </a>
                                    <h6 class="fs-14 fw-semibold mb-0"><a href="#" data-bs-toggle="offcanvas"
                                            data-bs-target="#view_details">{{ record.Staff }}</a></h6>
                                </div>
                            </template>
                            <template v-if="column.key === 'Role'">
                                <span class="badge badge-white border-gray d-inline-flex align-items-center">
                                    <span class="badge-dot me-1" :class="[
                                        record.Role === 'Admin' || record.Role === 'Technician'
                                            ? 'bg-success'
                                            : record.Role === 'Supervisor'
                                                ? 'bg-danger'
                                                : record.Role === 'Removal Expert'
                                                    ? 'bg-cyan'
                                                    : record.Role === 'Branch Manager'
                                                        ? 'bg-pink'
                                                        : record.Role === 'Ironing Staff'
                                                            ? 'bg-indigo'
                                                            : record.Role === 'Operator' || record.Role === 'Biller'
                                                                ? 'bg-orange'
                                                                : 'bg-purple'
                                    ]"></span>
                                    {{ record.Role }}
                                </span>
                            </template>

                            <template v-if="column.key === 'Status'">
                                <span class="badge" :class="[
                                    record.Status === 'Active' ? 'badge-soft-success'
                                        : 'badge-soft-danger',
                                    ' me-1',
                                ]">{{ record.Status }}</span>
                            </template>
                            <template v-if="column.key === 'Action'">
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
                                                data-bs-toggle="offcanvas" data-bs-target="#edit_staff"><i
                                                    class="icon-pencil-line me-2"></i>Edit Staff</a>
                                        </li>
                                        <li>
                                            <a href="#" class="dropdown-item rounded d-flex align-items-center"
                                                data-bs-toggle="modal" data-bs-target="#delete_modal"
                                                @click="setDelete(record)"><i class="icon-trash-2 me-2"></i>Delete Staff
                                            </a>
                                        </li>
                                    </ul>
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

    <staff-modal></staff-modal>

</template>
<script>
import BasePagination from '@/components/BasePagination.vue';
import { VueDraggableNext } from 'vue-draggable-next';
import { ref } from 'vue';
const valueOne = ref();

const data = [
    {
        "Staff": "Jason Miller",
        "Role": "Admin",
        "Image": "staff-01.jpg",
        "Mobile": "+1 58544 78987",
        "Status": "Active",
    },
    {
        "Staff": "Sarah Thompson",
        "Role": "Biller",
        "Image": "staff-02.jpg",
        "Mobile": "+1 98778 12388",
        "Status": "Active",
    },
    {
        "Staff": "Michael Roberts",
        "Role": "Attendant",
        "Image": "staff-03.jpg",
        "Mobile": "+1 65458 96389",
        "Status": "Active",
    },
    {
        "Staff": "Olivia Carter",
        "Role": "Operator",
        "Image": "staff-04.jpg",
        "Mobile": "+1 12354 74190",
        "Status": "Inactive",
    },
    {
        "Staff": "Sophia Hayes",
        "Role": "Dryer Operator",
        "Image": "staff-05.jpg",
        "Mobile": "+1 45674 85291",
        "Status": "Active",
    },
    {
        "Staff": "Hannah Lewis",
        "Role": "Ironing Staff",
        "Image": "staff-06.jpg",
        "Mobile": "+1 78987 36992",
        "Status": "Active",
    },
    {
        "Staff": "Charlotte Evans",
        "Role": "Removal Expert",
        "Image": "staff-07.jpg",
        "Mobile": "+1 32145 15993",
        "Status": "Active",
    },
    {
        "Staff": "Aiden Murphy",
        "Role": "Supervisor",
        "Image": "staff-08.jpg",
        "Mobile": "+1 65454 75394",
        "Status": "Active",
    },
    {
        "Staff": "David Harris",
        "Role": "Branch Manager",
        "Image": "staff-09.jpg",
        "Mobile": "+1 98724 84695",
        "Status": "Active",
    },
    {
        "Staff": "Micheal Stewart",
        "Role": "Technician",
        "Image": "staff-10.jpg",
        "Mobile": "+1 25845 95196",
        "Status": "Active",
    }
]
const columns = [
    {
        title: "Staff",
        dataIndex: "Staff",
        key: "Staff",
        sorter: {
            compare: (a, b) => (a.Staff.toLowerCase() > b.Staff.toLowerCase() ? -1 : 1),
        },
        visible: true,
    },
    {
        title: "Role",
        dataIndex: "Role",
        key: "Role",
        sorter: {
            compare: (a, b) => (a.Role.toLowerCase() > b.Role.toLowerCase() ? -1 : 1),
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
            return new URL(`/src/assets/img/staffs/${imageName}`, import.meta.url).href;
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
                    record.Staff.toLowerCase().includes(query) ||
                    record.Role.toLowerCase().includes(query) ||
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