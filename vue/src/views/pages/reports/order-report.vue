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
                <reports-top></reports-top>
                <!-- End Reports Nav -->

                <div class="d-flex align-items-center flex-wrap gap-3 justify-content-between mb-4">
                    <!-- Date and Customer dropdown -->
                    <div class="d-flex align-items-center gap-3">
                        <div class="input-group input-group-flat">
                            <span class="input-group-text">
                                <i class="icon-calendar-days"></i>
                            </span>
                            <a-date-picker v-model="valueOne" class="form-control p-2" placeholder="Select Date" />
                            <span class="input-group-text">
                                <i class="icon-chevron-down text-dark"></i>
                            </span>
                        </div>
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
                                            <input class="form-check-input m-0 me-2" type="checkbox" checked>Adrian
                                            James
                                        </label>
                                    </li>
                                    <li class="dropdown-item rounded">
                                        <label class="d-flex align-items-center">
                                            <input class="form-check-input m-0 me-2" type="checkbox" checked>Sue Allen
                                        </label>
                                    </li>
                                    <li class="dropdown-item rounded">
                                        <label class="d-flex align-items-center">
                                            <input class="form-check-input m-0 me-2" type="checkbox" checked>Frank
                                            Barrett
                                        </label>
                                    </li>
                                    <li class="dropdown-item rounded">
                                        <label class="d-flex align-items-center">
                                            <input class="form-check-input m-0 me-2" type="checkbox">Kelley Davis
                                        </label>
                                    </li>
                                    <li class="dropdown-item rounded">
                                        <label class="d-flex align-items-center">
                                            <input class="form-check-input m-0 me-2" type="checkbox" checked>Jim Vickers
                                        </label>
                                    </li>
                                    <li class="dropdown-item rounded">
                                        <label class="d-flex align-items-center">
                                            <input class="form-check-input m-0 me-2" type="checkbox" checked>Nancy
                                            Chapman
                                        </label>
                                    </li>
                                </ul>
                            </div>
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

                    </div>
                </div>

                <!-- table start -->
                <div class="table-responsive table-nowrap">
                    <div class="dt-container dt-bootstrap5 dt-empty-footer table-responsive ">
                        <a-table class="table mb-0 datatable" :columns="visibleColumns"
                            :data-source="paginatedData" :pagination="false">
                            <template #bodyCell="{ column, record }">
                                <template v-if="column.key === 'OrderID'">
                                    <td><a href="#" class="text-info">OD1245</a></td>
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
                                <template v-if="column.key === 'Items'">
                                    <p class="mb-0 fw-medium">{{ record.Items }}</p>
                                </template>
                                <template v-if="column.key === 'GrandTotal'">
                                    <p class="mb-0 fw-medium">{{ record.GrandTotal }}</p>
                                </template>
                                <template v-if="column.key === 'Status'">
                                    <span class="badge badge-soft-success">{{ record.Status }}</span>
                                </template>
                            </template>
                        </a-table>
                        <BasePagination :currentPage="currentPage" :pageSize="pageSize"
                            :pageSizeOptions="pageSizeOptions" :totalPages="totalPages"
                            :totalItems="filteredPages.length" @update:currentPage="onPageChange"
                            @update:pageSize="onPageSizeChange" />
                    </div>
                </div>

                <!-- table end -->

            </div>

            <!-- End Content Wrap -->

        </div>
        <!-- End Content -->

    </div>
    <!-- ========================
        End Page Content
    ========================= -->
</template>
<script>
import BasePagination from '@/components/BasePagination.vue';
import { VueDraggableNext } from 'vue-draggable-next';
import { ref } from 'vue';
const valueOne = ref();

const data = [
    {
        "OrderID": "OD1245",
        "Date": "01 Nov 2025",
        "Image": "avatar-01.jpg",
        "Customer": "Adrian James",
        "Items": "24",
        "GrandTotal": "$34.50",
        "PaymentMethod": "Credit Card",
        "Status": "Paid"
    },
    {
        "OrderID": "OD5678",
        "Date": "01 Nov 2025",
        "Image": "avatar-02.jpg",
        "Customer": "Sue Allen",
        "Items": "12",
        "GrandTotal": "$78.20",
        "PaymentMethod": "Cash",
        "Status": "Paid"
    },
    {
        "OrderID": "OD9012",
        "Date": "01 Nov 2025",
        "Image": "avatar-03.jpg",
        "Customer": "Frank Barrett",
        "Items": "10",
        "GrandTotal": "$45.10",
        "PaymentMethod": "PayPal",
        "Status": "Cancelled"
    },
    {
        "OrderID": "OD3456",
        "Date": "01 Nov 2025",
        "Image": "avatar-04.jpg",
        "Customer": "Kelley Davis",
        "Items": "12",
        "GrandTotal": "$92.80",
        "PaymentMethod": "Credit Card",
        "Status": "Paid"
    },
    {
        "OrderID": "OD7890",
        "Date": "01 Nov 2025",
        "Image": "avatar-05.jpg",
        "Customer": "Jim Vickers",
        "Items": "14",
        "GrandTotal": "$61.40",
        "PaymentMethod": "Cash",
        "Status": "Paid"
    },
    {
        "OrderID": "OD2345",
        "Date": "01 Nov 2025",
        "Image": "avatar-06.jpg",
        "Customer": "Nancy Chapman",
        "Items": "16",
        "GrandTotal": "$57.20",
        "PaymentMethod": "PayPal",
        "Status": "Paid"
    },
    {
        "OrderID": "OD6789",
        "Date": "31 Oct 2025",
        "Image": "avatar-07.jpg",
        "Customer": "Ron Jude",
        "Items": "8",
        "GrandTotal": "$45.30",
        "PaymentMethod": "Cash",
        "Status": "Paid"
    },
    {
        "OrderID": "OD0123",
        "Date": "31 Oct 2025",
        "Image": "avatar-08.jpg",
        "Customer": "Andrea Aponte",
        "Items": "19",
        "GrandTotal": "$72.60",
        "PaymentMethod": "Credit Card",
        "Status": "Paid"
    },
    {
        "OrderID": "OD1357",
        "Date": "31 Oct 2025",
        "Image": "avatar-09.jpg",
        "Customer": "David Belcher",
        "Items": "16",
        "GrandTotal": "$32.10",
        "PaymentMethod": "Cash",
        "Status": "Paid"
    },
    {
        "OrderID": "OD6564",
        "Date": "31 Oct 2025",
        "Image": "avatar-10.jpg",
        "Customer": "Julie Kangas",
        "Items": "14",
        "GrandTotal": "$30.40",
        "PaymentMethod": "Cash",
        "Status": "Paid"
    }
]

const columns = [
    {
        title: "Order ID",
        dataIndex: "OrderID",
        key: "OrderID",
        sorter: {
            compare: (a, b) => (a.OrderID.toLowerCase() > b.OrderID.toLowerCase() ? -1 : 1),
        },
        visible: true,
    },
    {
        title: "Date",
        dataIndex: "Date",
        key: "Date",
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
        title: "Items",
        dataIndex: "Items",
        key: "Items",
        sorter: false,
        visible: true,
    },
    {
        title: "Grand Total",
        dataIndex: "GrandTotal",
        key: "GrandTotal",
        sorter: false,
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
                    record.OrderID.toLowerCase().includes(query) ||
                    record.Date.toLowerCase().includes(query) ||
                    record.Customer.toLowerCase().includes(query) ||
                    record.Items.toLowerCase().includes(query) ||
                    record.GrandTotal.toLowerCase().includes(query) ||
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