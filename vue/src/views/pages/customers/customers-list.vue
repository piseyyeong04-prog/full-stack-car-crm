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
                            <router-link :to="lp('/customer/customers-list')"
                                class="px-3 py-1 fw-semibold d-inline-flex align-items-center rounded-pill bg-white"><i
                                    class="icon-list me-2"></i>List View</router-link>
                            <router-link :to="lp('/customer/customers-grid')"
                                class="px-3 py-1 fw-semibold d-inline-flex align-items-center rounded-pill"><i
                                    class="icon-layout-panel-left me-2"></i>Grid View</router-link>
                        </div>
                    </div>
                    <div class="gap-3 d-flex align-items-center flex-wrap">
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
                <!-- End Page Header -->

                <div class="d-flex align-items-center flex-wrap gap-3 justify-content-between mb-4">

                    <!-- customers dropdown -->
                    <div class="dropdown">
                        <a href="javascript:void(0);"
                            class="dropdown-toggle btn btn-white d-flex align-items-center justify-content-between"
                            data-bs-toggle="dropdown" data-bs-auto-close="outside">
                            <i class="icon-user text-dark me-2"></i>All Customers
                        </a>
                        <div class="dropdown-menu dropdown-menu-lg p-3">
                            <h6 class="fs-14 fw-semibold mb-3">Customers</h6>
                            <div class="input-icon-end input-icon position-relative mb-3">
                                <span class="input-icon-addon">
                                    <i class="icon-search text-dark"></i>
                                </span>
                                <input type="text" class="form-control form-control-md" placeholder="Search">
                            </div>
                            <ul class="list-unstyled mb-0">
                                <li class="dropdown-item rounded">
                                    <label class="d-flex align-items-center">
                                        <input class="form-check-input m-0 me-2" type="checkbox">Adrian James
                                    </label>
                                </li>
                                <li class="dropdown-item rounded">
                                    <label class="d-flex align-items-center">
                                        <input class="form-check-input m-0 me-2" type="checkbox">Sue Allen
                                    </label>
                                </li>
                                <li class="dropdown-item rounded">
                                    <label class="d-flex align-items-center">
                                        <input class="form-check-input m-0 me-2" type="checkbox">Frank Barrett
                                    </label>
                                </li>
                                <li class="dropdown-item rounded">
                                    <label class="d-flex align-items-center">
                                        <input class="form-check-input m-0 me-2" type="checkbox">Kelley Davis
                                    </label>
                                </li>
                                <li class="dropdown-item rounded">
                                    <label class="d-flex align-items-center">
                                        <input class="form-check-input m-0 me-2" type="checkbox">Jim Vickers
                                    </label>
                                </li>
                                <li class="dropdown-item rounded">
                                    <label class="d-flex align-items-center">
                                        <input class="form-check-input m-0 me-2" type="checkbox">Nancy Chapman
                                    </label>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div class="d-flex align-items-center gap-3 flex-wrap">

                        <!-- column -->
                        <div class="dropdown">
                            <a href="javascript:void(0);" class="btn btn-icon btn-white" data-bs-toggle="dropdown"
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
                            <a href="javascript:void(0);"
                                class="dropdown-toggle btn btn-white d-inline-flex align-items-center"
                                data-bs-toggle="dropdown">
                                Sort by : Newest
                            </a>
                            <div class="dropdown-menu dropdown-menu-end p-3">
                                <h6 class="fs-14 fw-semibold mb-3">Sort By</h6>
                                <ul class="list-unstyled mb-0">
                                    <li>
                                        <a href="javascript:void(0);" class="dropdown-item rounded">Newest</a>
                                    </li>
                                    <li>
                                        <a href="javascript:void(0);" class="dropdown-item rounded">Oldest</a>
                                    </li>
                                    <li>
                                        <a href="javascript:void(0);" class="dropdown-item rounded">Ascending</a>
                                    </li>
                                    <li>
                                        <a href="javascript:void(0);" class="dropdown-item rounded">Descending</a>
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
                            data-bs-target="#add_customer"><i class="icon-plus me-1"></i>New Customer</a>

                    </div>
                </div>

                <!-- table start -->
                <div class="table-responsive table-nowrap">
                    <a-table class="table mb-0 datatable" :columns="visibleColumns" :data-source="paginatedData"
                        :pagination="false">
                        <template #bodyCell="{ column, record }">
                            <template v-if="column.key === 'Customer'">
                                <div class="d-flex align-items-center">
                                    <a href="#" data-bs-toggle="offcanvas" data-bs-target="#view_details"
                                        class="avatar avatar-sm avatar-rounded flex-shrink-0 me-2">
                                        <img :src="getImageUrl(record.Image)" alt="customer" class="img-fluid">
                                    </a>
                                    <h6 class="fs-14 fw-semibold mb-0"><a href="#" data-bs-toggle="offcanvas"
                                            data-bs-target="#view_details">{{ record.Customer }}</a></h6>
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
                                                <a href="#" data-bs-toggle="offcanvas" data-bs-target="#view_details"
                                                    class="dropdown-item rounded d-flex align-items-center"><i
                                                        class="icon-users-round me-2"></i>View Details</a>
                                            </li>
                                            <li>
                                                <a href="#" class="dropdown-item rounded d-flex align-items-center"
                                                    data-bs-toggle="offcanvas" data-bs-target="#edit_customer"><i
                                                        class="icon-pencil-line me-2"></i>Edit Customer</a>
                                            </li>
                                            <li>
                                                <a href="javascript:void(0);"
                                                    class="dropdown-item rounded d-flex align-items-center"
                                                    data-bs-toggle="modal" data-bs-target="#delete_modal"
                                                    @click="setDelete(record)"><i class="icon-trash-2 me-2"></i>Delete
                                                    Customer</a>
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
    <customers-modal></customers-modal>
</template>
<script>
import BasePagination from '@/components/BasePagination.vue';
import { VueDraggableNext } from 'vue-draggable-next';
import { ref } from 'vue';
const valueOne = ref();

const data = [
    {
        "Customer": "Adrian James",
        "Mobile": "+1 54544 54587",
        "Image": "avatar-01.jpg",
        "Email": "adrian@example.com",
        "PostCode": "48104",
        "Orders": "12",
        "TotalOrder": "$3150",
        "LastLogin": "25 Dec 2025",
        "Status": "Active",
    },
    {
        "Customer": "Sue Allen",
        "Mobile": "+1 45478 54588",
        "Image": "avatar-02.jpg",
        "Email": "sue@example.com",
        "PostCode": "90210",
        "Orders": "16",
        "TotalOrder": "$4420",
        "LastLogin": "12 Nov 2025",
        "Status": "Active",
    },
    {
        "Customer": "Frank Barrett",
        "Mobile": "+1 33658 54589",
        "Image": "avatar-03.jpg",
        "Email": "frank@example.com",
        "PostCode": "10001",
        "Orders": "14",
        "TotalOrder": "$9465",
        "LastLogin": "03 Nov 2025",
        "Status": "Active",
    },
    {
        "Customer": "Kelley Davis",
        "Mobile": "+1 47854 54590",
        "Image": "avatar-04.jpg",
        "Email": "kelly@example.com",
        "PostCode": "60611",
        "Orders": "12",
        "TotalOrder": "$4558",
        "LastLogin": "18 Oct 2025",
        "Status": "Inactive",
    },
    {
        "Customer": "Jim Vickers",
        "Mobile": "+1 58974 54591",
        "Image": "avatar-05.jpg",
        "Email": "jim@example.com",
        "PostCode": "77002",
        "Orders": "06",
        "TotalOrder": "$3620",
        "LastLogin": "29 Sep 2025",
        "Status": "Active",
    },
    {
        "Customer": "Nancy Chapman",
        "Mobile": "+1 96587 54592",
        "Image": "avatar-06.jpg",
        "Email": "nancy@example.com",
        "PostCode": "30303",
        "Orders": "05",
        "TotalOrder": "$3160",
        "LastLogin": "15 Sep 2025",
        "Status": "Active",
    },
    {
        "Customer": "Ron Jude",
        "Mobile": "+1 31245 54593",
        "Image": "avatar-07.jpg",
        "Email": "ron@example.com",
        "PostCode": "20005",
        "Orders": "15",
        "TotalOrder": "$3665",
        "LastLogin": "07 Sep 2025",
        "Status": "Active",
    },
    {
        "Customer": "Andrea Aponte",
        "Mobile": "+1 47854 54594",
        "Image": "avatar-08.jpg",
        "Email": "andr@example.com",
        "PostCode": "19102",
        "Orders": "08",
        "TotalOrder": "$4178",
        "LastLogin": "22 Aug 2025",
        "Status": "Active",
    },
    {
        "Customer": "David Belcher",
        "Mobile": "+1 14524 54595",
        "Image": "avatar-09.jpg",
        "Email": "david@example.com",
        "PostCode": "94105",
        "Orders": "14",
        "TotalOrder": "$3136",
        "LastLogin": "11 Aug 2025",
        "Status": "Active",
    },
    {
        "Customer": "Julie Kangas",
        "Mobile": "+1 22145 54596",
        "Image": "avatar-10.jpg",
        "Email": "julie@example.com",
        "PostCode": "02110",
        "Orders": "12",
        "TotalOrder": "4108",
        "LastLogin": "30 Aug 2025",
        "Status": "Active",
    }
]
const columns = [
    {
        title: "Customer",
        dataIndex: "Customer",
        key: "Customer",
        sorter: false,
        visible: true,
    },
    {
        title: "Mobile",
        dataIndex: "Mobile",
        key: "Mobile",
        sorter: false,
        visible: true,
    },
    {
        title: "Email",
        dataIndex: "Email",
        key: "Email",
        sorter: false,
        visible: true,
    },
    {
        title: "Post Code",
        dataIndex: "PostCode",
        key: "PostCode",
        sorter: false,
        visible: true,
    },
    {
        title: "Orders",
        dataIndex: "Orders",
        key: "Orders",
        sorter: {
            compare: (a, b) => (a.Orders.toLowerCase() > b.Orders.toLowerCase() ? -1 : 1),
        },
        visible: true,
    },
    {
        title: "Total Order",
        dataIndex: "TotalOrder",
        key: "TotalOrder",
        sorter: {
            compare: (a, b) => (a.TotalOrder.toLowerCase() > b.TotalOrder.toLowerCase() ? -1 : 1),
        },
        visible: true,
    },
    {
        title: "Last Login",
        dataIndex: "LastLogin",
        key: "LastLogin",
        sorter: {
            compare: (a, b) => (a.LastLogin.toLowerCase() > b.LastLogin.toLowerCase() ? -1 : 1),
        },
        visible: true,
    },
    {
        title: "Status",
        dataIndex: "Status",
        key: "Status",
        sorter: false,
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
            return new URL(`/src/assets/img/profiles/${imageName}`, import.meta.url).href;
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
                    record.Customer.toLowerCase().includes(query) ||
                    record.Mobile.toLowerCase().includes(query) ||
                    record.Email.toLowerCase().includes(query) ||
                    record.PostCode.toLowerCase().includes(query) ||
                    record.Orders.toLowerCase().includes(query) ||
                    record.TotalOrder.toLowerCase().includes(query) ||
                    record.LastLogin.toLowerCase().includes(query) ||
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