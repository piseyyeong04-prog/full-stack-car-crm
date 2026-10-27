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
                                <i class="icon-shopping-cart text-dark me-2"></i>All Category
                            </a>
                            <div class="dropdown-menu dropdown-menu-lg p-3">
                                <h6 class="fs-14 fw-semibold mb-3">Category</h6>
                                <div class="input-icon-end input-icon position-relative mb-3">
                                    <span class="input-icon-addon">
                                        <i class="icon-search text-dark"></i>
                                    </span>
                                    <input type="text" class="form-control form-control-md" placeholder="Search">
                                </div>
                                <ul class="list-unstyled mb-0">
                                    <li class="dropdown-item rounded">
                                        <label class="d-flex align-items-center">
                                            <input class="form-check-input m-0 me-2" type="checkbox" checked>Accessories
                                        </label>
                                    </li>
                                    <li class="dropdown-item rounded">
                                        <label class="d-flex align-items-center">
                                            <input class="form-check-input m-0 me-2" type="checkbox" checked>Dresses
                                        </label>
                                    </li>
                                    <li class="dropdown-item rounded">
                                        <label class="d-flex align-items-center">
                                            <input class="form-check-input m-0 me-2" type="checkbox" checked>Bedding
                                        </label>
                                    </li>
                                    <li class="dropdown-item rounded">
                                        <label class="d-flex align-items-center">
                                            <input class="form-check-input m-0 me-2" type="checkbox">Knitwear
                                        </label>
                                    </li>
                                    <li class="dropdown-item rounded">
                                        <label class="d-flex align-items-center">
                                            <input class="form-check-input m-0 me-2" type="checkbox">Suits
                                        </label>
                                    </li>
                                    <li class="dropdown-item rounded">
                                        <label class="d-flex align-items-center">
                                            <input class="form-check-input m-0 me-2" type="checkbox">Bed Sets
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
                    <a-table class="table mb-0 datatable" :columns="visibleColumns" :data-source="paginatedData"
                        :pagination="false">
                        <template #bodyCell="{ column, record }">
                            <template v-if="column.key === 'SaleID'">
                                <div><a href="#" class="text-info">{{ record.SaleID }}</a></div>
                            </template>
                            <template v-if="column.key === 'Category'">
                                <div>
                                    <h6 class="fs-14 fw-semibold mb-0">{{ record.Category }}</h6>
                                </div>
                            </template>
                            <template v-if="column.key === 'Items'">
                                <p class="mb-0 fw-medium">{{ record.Items }}</p>
                            </template>
                            <template v-if="column.key === 'TotalOrders'">
                                <p class="mb-0 fw-medium">{{ record.TotalOrders }}</p>
                            </template>
                            <template v-if="column.key === 'GrandTotal'">
                                <p class="mb-0 fw-medium">{{ record.GrandTotal }}</p>
                            </template>
                            <template v-if="column.key === 'Status'">
                                <span class="badge badge-soft-success">{{ record.Status }}</span>
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
</template>

<script>
import BasePagination from '@/components/BasePagination.vue';
import { VueDraggableNext } from 'vue-draggable-next';
import { ref } from 'vue';
const valueOne = ref();

const data = [
    {
        "SaleID": "#SA0016",
        "Date": "01 Nov 2025",
        "Category": "Accessories",
        "Items": "24",
        "TotalOrders": "24",
        "GrandTotal": "$34.50",
        "PaymentMethod": "Credit Card",
        "Status": "Completed"
    },
    {
        "SaleID": "#SA0015",
        "Date": "01 Nov 2025",
        "Category": "Scarf",
        "Items": "12",
        "TotalOrders": "12",
        "GrandTotal": "$78.20",
        "PaymentMethod": "Cash",
        "Status": "Completed"
    },
    {
        "SaleID": "#SA0014",
        "Date": "01 Nov 2025",
        "Category": "Dresses",
        "Items": "16",
        "TotalOrders": "16",
        "GrandTotal": "$45.10",
        "PaymentMethod": "PayPal",
        "Status": "Completed"
    },
    {
        "SaleID": "#SA0013",
        "Date": "01 Nov 2025",
        "Category": "Ironed and hung",
        "Items": "12",
        "TotalOrders": "12",
        "GrandTotal": "$92.80",
        "PaymentMethod": "Credit Card",
        "Status": "Completed"
    },
    {
        "SaleID": "#SA0012",
        "Date": "01 Nov 2025",
        "Category": "Coats",
        "Items": "14",
        "TotalOrders": "14",
        "GrandTotal": "$61.40",
        "PaymentMethod": "Cash",
        "Status": "Completed"
    },
    {
        "SaleID": "#SA0010",
        "Date": "01 Nov 2025",
        "Category": "Jackets",
        "Items": "16",
        "TotalOrders": "16",
        "GrandTotal": "$57.20",
        "PaymentMethod": "PayPal",
        "Status": "Completed"
    },
    {
        "SaleID": "#SA0009",
        "Date": "31 Oct 2025",
        "Category": "Suits",
        "Items": "8",
        "TotalOrders": "8",
        "GrandTotal": "$45.30",
        "PaymentMethod": "Cash",
        "Status": "Completed"
    },
    {
        "SaleID": "#SA0008",
        "Date": "31 Oct 2025",
        "Category": "Knitwear",
        "Items": "19",
        "TotalOrders": "19",
        "GrandTotal": "$72.60",
        "PaymentMethod": "Credit Card",
        "Status": "Completed"
    },
    {
        "SaleID": "#SA0007",
        "Date": "31 Oct 2025",
        "Category": "Bedding",
        "Items": "16",
        "TotalOrders": "16",
        "GrandTotal": "$32.10",
        "PaymentMethod": "Cash",
        "Status": "Completed"
    },
    {
        "SaleID": "#SA0006",
        "Date": "31 Oct 2025",
        "Category": "Bed Sets",
        "Items": "14",
        "TotalOrders": "14",
        "GrandTotal": "$30.40",
        "PaymentMethod": "Cash",
        "Status": "Completed"
    }
]

const columns = [
    {
        title: "Sale ID",
        dataIndex: "SaleID",
        key: "SaleID",
        sorter: {
            compare: (a, b) => (a.SaleID.toLowerCase() > b.SaleID.toLowerCase() ? -1 : 1),
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
        title: "Category",
        dataIndex: "Category",
        key: "Category",
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
        title: "Total Orders",
        dataIndex: "TotalOrders",
        key: "TotalOrders",
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
                    record.SaleID.toLowerCase().includes(query) ||
                    record.Date.toLowerCase().includes(query) ||
                    record.Category.toLowerCase().includes(query) ||
                    record.Items.toLowerCase().includes(query) ||
                    record.TotalOrders.toLowerCase().includes(query) ||
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