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

                <div class="d-flex align-items-center flex-wrap gap-3 justify-content-between mb-4">

                    <div class="d-flex align-items-center gap-3 flex-wrap">

                        <!-- Date Picker -->
                        <div class="input-group input-group-flat">
                            <span class="input-group-text">
                                <i class="icon-calendar-days"></i>
                            </span>
                            <a-date-picker v-model="valueOne" class="form-control" placeholder="Select Date" />
                            <span class="input-group-text">
                                <i class="icon-chevron-down text-dark"></i>
                            </span>
                        </div>

                        <!-- customers dropdown -->
                        <div class="dropdown">
                            <a href="#"
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

                        <!-- Payment Method -->
                        <div class="dropdown">
                            <a href="#"
                                class="dropdown-toggle btn btn-white d-flex align-items-center justify-content-between"
                                data-bs-toggle="dropdown" data-bs-auto-close="outside">
                                <i class="icon-user text-dark me-2"></i>Payment Method
                            </a>
                            <div class="dropdown-menu dropdown-menu-lg p-3">
                                <h6 class="fs-14 fw-semibold mb-3">Payment</h6>
                                <div class="input-icon-end input-icon position-relative mb-3">
                                    <span class="input-icon-addon">
                                        <i class="icon-search text-dark"></i>
                                    </span>
                                    <input type="text" class="form-control form-control-md" placeholder="Search">
                                </div>
                                <ul class="list-unstyled mb-0">
                                    <li class="dropdown-item rounded">
                                        <label class="d-flex align-items-center">
                                            <input class="form-check-input m-0 me-2" type="checkbox">Cash
                                        </label>
                                    </li>
                                    <li class="dropdown-item rounded">
                                        <label class="d-flex align-items-center">
                                            <input class="form-check-input m-0 me-2" type="checkbox">PayPal
                                        </label>
                                    </li>
                                    <li class="dropdown-item rounded">
                                        <label class="d-flex align-items-center">
                                            <input class="form-check-input m-0 me-2" type="checkbox">Credit Card
                                        </label>
                                    </li>
                                </ul>
                            </div>
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
                </div>

                <!-- table start -->
                <div class="table-responsive table-nowrap">
                    <a-table class="table mb-0 datatable" :columns="visibleColumns" :data-source="paginatedData"
                        :pagination="false">
                        <template #bodyCell="{ column, record }">
                            <template v-if="column.key === 'EarningID'">
                                <td><a href="#" class="fw-semibold text-info" data-bs-toggle="modal" data-bs-target="#view_invoices">{{ record.EarningID }}</a></td>
                            </template>
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
                                <span class="badge badge-soft-success">{{ record.Status }}</span>
                            </template>
                            <template v-if="column.key === 'Action'">
                                <div class="dropstart">
                                    <button class="btn btn-icon btn-white" type="button" data-bs-toggle="dropdown"
                                        aria-haspopup="true" aria-expanded="false" aria-label="Actions">
                                        <i class="icon-ellipsis-vertical"></i>
                                    </button>
                                    <ul class="dropdown-menu p-3">
                                        <li>
                                            <a href="#" class="dropdown-item rounded d-flex align-items-center"><i
                                                    class="icon-download me-2"></i>Download</a>
                                        </li>
                                        <li>
                                            <a href="#" class="dropdown-item rounded d-flex align-items-center"
                                                data-bs-toggle="modal" data-bs-target="#view_invoices"><i
                                                    class="icon-eye me-2"></i>View Details</a>
                                        </li>
                                        <li>
                                            <a href="#" class="dropdown-item rounded d-flex align-items-center"
                                                data-bs-toggle="modal" data-bs-target="#delete_modal"
                                                @click="setDelete(record)"><i class="icon-trash-2 me-2"></i>Delete</a>
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
    <invoices-modal />
</template>
<script>
import BasePagination from '@/components/BasePagination.vue';
import { VueDraggableNext } from 'vue-draggable-next';
import { ref } from 'vue';
const valueOne = ref();

const data = [
    {
        "EarningID": "#INV0016",
        "Customer": "Adrian James",
        "Image": "avatar-01.jpg",
        "Amount": "$3150",
        "Date": "25 Dec 2025",
        "PaymentMethod": "Credit Card",
        "Status": "Paid",
    },
    {
        "EarningID": "#INV0015",
        "Customer": "Sue Allen",
        "Image": "avatar-02.jpg",
        "Amount": "$4420",
        "Date": "12 Nov 2025",
        "PaymentMethod": "Cash",
        "Status": "Paid",
    },
    {
        "EarningID": "#INV0014",
        "Customer": "Frank Barrett",
        "Image": "avatar-03.jpg",
        "Amount": "$9465",
        "Date": "03 Nov 2025",
        "PaymentMethod": "PayPal",
        "Status": "Paid",
    },
    {
        "EarningID": "#INV0013",
        "Customer": "Kelley Davis",
        "Image": "avatar-04.jpg",
        "Amount": "$4558",
        "Date": "18 Oct 2025",
        "PaymentMethod": "Credit Card",
        "Status": "Paid",
    },
    {
        "EarningID": "#INV0012",
        "Customer": "Jim Vickers",
        "Image": "avatar-05.jpg",
        "Amount": "$3620",
        "Date": "29 Sep 2025",
        "PaymentMethod": "Cash",
        "Status": "Paid",
    },
    {
        "EarningID": "#INV0011",
        "Customer": "Nancy Chapman",
        "Image": "avatar-06.jpg",
        "Amount": "$3160",
        "Date": "15 Sep 2025",
        "PaymentMethod": "PayPal",
        "Status": "Paid",
    },
    {
        "EarningID": "#INV0010",
        "Customer": "Ron Jude",
        "Image": "avatar-07.jpg",
        "Amount": "$3665",
        "Date": "07 Sep 2025",
        "PaymentMethod": "Cash",
        "Status": "Paid",
    },
    {
        "EarningID": "#INV0009",
        "Customer": "Andrea Aponte",
        "Image": "avatar-08.jpg",
        "Amount": "$4178",
        "Date": "22 Aug 2025",
        "PaymentMethod": "Credit Card",
        "Status": "Paid",
    },
    {
        "EarningID": "#INV0008",
        "Customer": "David Belcher",
        "Image": "avatar-09.jpg",
        "Amount": "$3136",
        "Date": "11 Aug 2025",
        "PaymentMethod": "Cash",
        "Status": "Paid",
    },
    {
        "EarningID": "#INV0007",
        "Customer": "Julie Kangas",
        "Image": "avatar-10.jpg",
        "Amount": "$4108",
        "Date": "30 Aug 2025",
        "PaymentMethod": "Cash",
        "Status": "Paid",
    }
]
const columns = [
    {
        title: "Earning ID",
        dataIndex: "EarningID",
        key: "EarningID",
        sorter: false,
        visible: true,
    },
    {
        title: "Customer",
        dataIndex: "Customer",
        key: "Customer",
        sorter: false,
        visible: true,
    },
    {
        title: "Amount",
        dataIndex: "Amount",
        key: "Amount",
        sorter: {
            compare: (a, b) => (a.Amount.toLowerCase() > b.Amount.toLowerCase() ? -1 : 1),
        },
        visible: true,
    },
    {
        title: "Date",
        dataIndex: "Date",
        key: "Date",
        sorter: {
            compare: (a, b) => (a.Date.toLowerCase() > b.Date.toLowerCase() ? -1 : 1),
        },
        visible: true,
    },
    {
        title: "Payment Method",
        dataIndex: "PaymentMethod",
        key: "PaymentMethod",
        sorter: false,
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
                    record.EarningID.toLowerCase().includes(query) ||
                    record.Customer.toLowerCase().includes(query) ||
                    record.Amount.toLowerCase().includes(query) ||
                    record.Date.toLowerCase().includes(query) ||
                    record.PaymentMethod.toLowerCase().includes(query) ||
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