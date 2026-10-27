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
                    <div class="dropdown d-flex align-items-center flex-wrap gap-3">
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
                        <div class="dropdown">
                            <a href="javascript:void(0);" class="dropdown-toggle btn btn-white d-flex align-items-center justify-content-between" data-bs-toggle="dropdown" data-bs-auto-close="outside">
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
                                            <input class="form-check-input m-0 me-2" type="checkbox" checked>Adrian James
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
                        <div class="dropdown">
                            <a href="javascript:void(0);" class="dropdown-toggle btn btn-white d-flex align-items-center justify-content-between" data-bs-toggle="dropdown" data-bs-auto-close="outside">
                                <i class="icon-user-pen text-dark me-2"></i>Created By
                            </a>
                            <div class="dropdown-menu dropdown-menu-lg p-3">
                                <h6 class="fs-14 fw-semibold mb-3">Created By</h6>  
                                <ul class="list-unstyled mb-0">
                                    <li class="dropdown-item rounded">
                                        <label class="d-flex align-items-center">
                                            <input class="form-check-input m-0 me-2" type="checkbox" checked>Customer
                                        </label>
                                    </li>
                                    <li class="dropdown-item rounded">
                                        <label class="d-flex align-items-center">
                                            <input class="form-check-input m-0 me-2" type="checkbox">Laundry Shop
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
                            <a href="javascript:void(0);" class="dropdown-toggle btn btn-white d-inline-flex align-items-center" data-bs-toggle="dropdown">
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

                        <router-link :to="lp('/pos-create')" class="btn btn-primary d-inline-flex align-items-center"><i class="icon-plus me-1"></i>New Order</router-link>
                        <div class="gap-3 d-flex align-items-center flex-wrap">
                            <div class="dropdown">
                                <a href="javascript:void(0);" class="dropdown-toggle btn btn-dark d-inline-flex align-items-center" data-bs-toggle="dropdown">
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
                </div>

                <!-- table start -->
                <div class="table-responsive table-nowrap">
                    <a-table class="table mb-0 datatable" :columns="visibleColumns" :data-source="paginatedData"
                        :pagination="false">
                        <template #bodyCell="{ column, record }">
                            <template v-if="column.key === 'Orders'">
                                <div>
                                    <a href="#" data-bs-toggle="modal" data-bs-target="#view_order" class="text-info">{{record.Orders}}</a>
                                </div>
                            </template>
                            <template v-if="column.key === 'Customer'">
                                <div class="d-flex align-items-center">
                                    <a href="#" class="avatar avatar-sm avatar-rounded flex-shrink-0 me-2">
                                        <img :src="getImageUrl(record.Customer_img)" alt="orders" class="img-fluid">
                                    </a>
                                    <h6 class="fs-14 fw-semibold mb-0"><a href="#">{{record.Customer}}</a></h6>
                                </div>
                            </template>
                            <template v-if="column.key === 'Status'">
                                <div class="dropstart">
                                    <button class="badge text-dark border-0"
                                        :class="[
                                            { 
                                                'badge-soft-warning': record.Status === 'Pending', 
                                                'badge-soft-info': record.Status === 'Collected',
                                                'badge-soft-danger': record.Status === 'Rejected',
                                                'badge-soft-success': record.Status === 'Approved',
                                                'badge-soft-purple': record.Status === 'Verified',
                                                'badge-soft-cyan': record.Status === 'Delivered',
                                            },
                                        ]"
                                    type="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false" aria-label="Actions">
                                        {{record.Status}}
                                    </button>
                                    <ul class="dropdown-menu p-3">
                                        <li>
                                            <a href="#" class="dropdown-item rounded d-flex align-items-center"><span class="badge badge-soft-success me-2 p-1 d-block p-2 h-2"></span> Approved</a>
                                        </li>
                                        <li>
                                            <a href="#" class="dropdown-item rounded d-flex align-items-center"><span class="badge badge-soft-warning me-2 p-1 d-block p-2 h-2"></span>Pending</a>
                                        </li>
                                        <li>
                                            <a href="#" class="dropdown-item rounded d-flex align-items-center"><span class="badge badge-soft-info me-2 p-1 d-block p-2 h-2"></span>Collected</a>
                                        </li>                                        
                                        <li>
                                            <a href="#" class="dropdown-item rounded d-flex align-items-center"><span class="badge badge-soft-danger me-2 p-1 d-block p-2 h-2"></span>Rejected</a>
                                        </li>
                                        <li>
                                            <a href="#" class="dropdown-item rounded d-flex align-items-center"><span class="badge badge-soft-purple me-2 p-1 d-block p-2 h-2"></span>Verified</a>
                                        </li>
                                        <li>
                                            <a href="#" class="dropdown-item rounded d-flex align-items-center"><span class="badge badge-soft-cyan me-2 p-1 d-block p-2 h-2"></span>Delivered</a>
                                        </li>
                                    </ul>
                                </div>
                            </template>
                            <template v-if="column.key === 'Driver'">
                                <template v-if="record.Status === 'Pending'">
                                    <a-tooltip placement="top">
                                        <template #title>Assign Driver</template>
                                        <div class="d-inline-flex align-items-center">
                                            <a href="javascript:void(0)" class="avatar avatar-sm avatar-rounded flex-shrink-0 bg-light text-body" data-bs-toggle="offcanvas" data-bs-target="#add_order">
                                                <i class="icon-user-plus fs-16"></i>
                                            </a>
                                        </div>
                                    </a-tooltip>                                    
                                </template>
                                <template v-else>
                                    <a-tooltip placement="top">
                                        <template #title>Edit Driver</template>
                                        <div class="d-inline-flex align-items-center">
                                            <a href="#" class="avatar avatar-sm avatar-rounded flex-shrink-0 me-2" data-bs-toggle="offcanvas" data-bs-target="#edit_driver">
                                                <img :src="getImageUrl(record.Driver)" alt="orders" class="img-fluid">
                                            </a>
                                        </div>
                                    </a-tooltip>
                                </template>
                            </template>
                            <template v-if="column.key === 'Action'">
                                <div class="text-end">
                                    <div class="dropstart">
                                        <button class="btn btn-icon btn-white" type="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false" aria-label="Actions">
                                            <i class="icon-ellipsis-vertical"></i>
                                        </button>
                                        <ul class="dropdown-menu p-3">
                                            <li>
                                                <router-link :to="lp('/pos')" class="dropdown-item rounded d-flex align-items-center"><i class="icon-pencil-line me-2"></i>Edit Order</router-link>
                                            </li>
                                            <li>
                                                <a href="#" data-bs-toggle="modal" data-bs-target="#view_order" class="dropdown-item rounded d-flex align-items-center"><i class="icon-eye me-2"></i>View Order</a>
                                            </li>
                                            <li>
                                                <a href="#" class="dropdown-item rounded d-flex align-items-center"><i class="icon-printer me-2"></i>Print (Customer Copy)</a>
                                            </li>                                        
                                            <li>
                                                <a href="#" class="dropdown-item rounded d-flex align-items-center"><i class="icon-printer-check me-2"></i>Print (Main Copy)</a>
                                            </li>
                                            <li>
                                                <a href="#" class="dropdown-item rounded d-flex align-items-center"><i class="icon-download me-2"></i>Download</a>
                                            </li>
                                            <li>
                                                <a href="#" class="dropdown-item rounded d-flex align-items-center"><i class="icon-mails me-2"></i>Email</a>
                                            </li>
                                            <li>
                                                <a href="#" class="dropdown-item rounded d-flex align-items-center" data-bs-toggle="modal" data-bs-target="#delete_modal" @click="setDelete(record)"><i class="icon-trash-2 me-2"></i>Delete Order </a>
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
                        <a href="#" class="btn btn-danger w-100" data-bs-dismiss="modal" @click="deleteItem">Delete</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- End Delete Modal  -->   

    <orders-list-modal></orders-list-modal>
</template>

<script>
import BasePagination from '@/components/BasePagination.vue';
import { VueDraggableNext } from 'vue-draggable-next';
import { ref } from 'vue';
const valueOne = ref();

const data = [
 {
   "Orders": "OD1245",
   "Order_Date": "25 Dec 2025",
   "Customer_img": "avatar-01.jpg",
   "Customer": "Adrian James",
   "Mobile": "+1 54544 54587",
   "Post_Code": "48104",
   "Pickup": "12 Jan 2026",
   "Delivery": "14 Jan 2026",
   "Qty": "12",
   "Price": "$350",
   "Status": "Pending",
   "Created_By": "Laundry Shop"
 },
 {
   "Orders": "OD5678",
   "Order_Date": "12 Nov 2025",
   "Customer_img": "avatar-02.jpg",
   "Customer": "Sue Allen",
   "Mobile": "+1 45478 54588",
   "Post_Code": "90210",
   "Pickup": "03 Feb 2026",
   "Delivery": "06 Feb 2026",
   "Qty": "16",
   "Price": "$420",
   "Status": "Pending",
   "Created_By": "Laundry Shop"
 },
 {
   "Orders": "OD9012",
   "Order_Date": "03 Nov 2025",
   "Customer_img": "avatar-03.jpg",
   "Customer": "Frank Barrett",
   "Mobile": "+1 33658 54589",
   "Post_Code": "10001",
   "Pickup": "14 Mar 2026",
   "Delivery": "16 Mar 2026",
   "Qty": "14",
   "Price": "$965",
   "Status": "Collected",
   "Driver": "avatar-18.jpg",
   "Created_By": "Laundry Shop"
 },
 {
   "Orders": "OD3456",
   "Order_Date": "18 Oct 2025",
   "Customer_img": "avatar-04.jpg",
   "Customer": "Kelley Davis",
   "Mobile": "+1 47854 54590",
   "Post_Code": "60611",
   "Pickup": "25 Apr 2026",
   "Delivery": "28 Apr 2026",
   "Qty": "12",
   "Price": "$458",
   "Status": "Rejected",
   "Driver": "avatar-19.jpg",
   "Created_By": "Customer"
 },
 {
   "Orders": "OD7890",
   "Order_Date": "29 Sep 2025",
   "Customer_img": "avatar-05.jpg",
   "Customer": "Jim Vickers",
   "Mobile": "+1 58974 54591",
   "Post_Code": "77002",
   "Pickup": "06 May 2026",
   "Delivery": "08 May 2026",
   "Qty": "6",
   "Price": "$320",
   "Status": "Approved",
   "Driver": "avatar-12.jpg",
   "Created_By": "Customer"
 },
 {
   "Orders": "OD2345",
   "Order_Date": "15 Sep 2025",
   "Customer_img": "avatar-06.jpg",
   "Customer": "Nancy Chapman",
   "Mobile": "+1 96587 54592",
   "Post_Code": "30303",
   "Pickup": "17 Jun 2026",
   "Delivery": "19 Jun 2026",
   "Qty": "5",
   "Price": "$360",
   "Status": "Approved",
   "Driver": "avatar-13.jpg",
   "Created_By": "Customer"
 },
 {
   "Orders": "OD6789",
   "Order_Date": "07 Sep 2025",
   "Customer_img": "avatar-07.jpg",
   "Customer": "Ron Jude",
   "Mobile": "+1 31245 54593",
   "Post_Code": "20005",
   "Pickup": "28 Jul 2026",
   "Delivery": "29 Jul 2026",
   "Qty": "15",
   "Price": "$365",
   "Status": "Approved",
   "Driver": "avatar-14.jpg",
   "Created_By": "Customer"
 },
 {
   "Orders": "OD0123",
   "Order_Date": "22 Aug 2025",
   "Customer_img": "avatar-08.jpg",
   "Customer": "Andrea Aponte",
   "Mobile": "+1 47854 54594",
   "Post_Code": "19102",
   "Pickup": "08 Aug 2026",
   "Delivery": "09 Aug 2026",
   "Qty": "8",
   "Price": "$478",
   "Status": "Verified",
   "Driver": "avatar-15.jpg",
   "Created_By": "Customer"
 },
 {
   "Orders": "OD4567",
   "Order_Date": "11 Aug 2025",
   "Customer_img": "avatar-09.jpg",
   "Customer": "David Belcher",
   "Mobile": "+1 14524 54595",
   "Post_Code": "94105",
   "Pickup": "19 Sep 2026",
   "Delivery": "21 Sep 2026",
   "Qty": "14",
   "Price": "$336",
   "Status": "Delivered",
   "Driver": "avatar-16.jpg",
   "Created_By": "Customer"
 },
 {
   "Orders": "OD6564",
   "Order_Date": "30 Aug 2025",
   "Customer_img": "avatar-10.jpg",
   "Customer": "Julie Kangas",
   "Mobile": "+1 22145 54596",
   "Post_Code": "2110",
   "Pickup": "30 Oct 2026",
   "Delivery": "31 Oct 2026",
   "Qty": "12",
   "Price": "$408",
   "Status": "Rejected",
   "Driver": "avatar-17.jpg",
   "Created_By": "Customer"
 }
]
const columns = [
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
        title: "Order Date",
        dataIndex: "Order_Date",
        sorter: {
            compare: (a, b) => (a.Order_Date.toLowerCase() > b.Order_Date.toLowerCase() ? -1 : 1),
        },
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
        title: "Mobile",
        dataIndex: "Mobile",
        sorter: true,
        visible: true,
    },
    {
        title: "Post Code",
        dataIndex: "Post_Code",
        sorter: true,
        visible: true,
    },
    {
        title: "Pickup",
        dataIndex: "Pickup",
        sorter: true,
        visible: true,
    },
    {
        title: "Delivery",
        dataIndex: "Delivery",
        sorter: true,
        visible: true,
    },
    {
        title: "Qty",
        dataIndex: "Qty",
        sorter: true,
        visible: true,
    },
    {
        title: "Price",
        dataIndex: "Price",
        sorter: true,
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
        title: "Driver",
        dataIndex: "Driver",
        key: "Driver",
        sorter: false,
        visible: true,
    },
    {
        title: "Created_By",
        dataIndex: "Created_By",
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
                    record.Orders.toLowerCase().includes(query) ||
                    record.Order_Date.toLowerCase().includes(query) ||
                    record.Customer.toLowerCase().includes(query) ||
                    record.Mobile.toLowerCase().includes(query) ||
                    record.Post_Code.toLowerCase().includes(query) ||
                    record.Pickup.toLowerCase().includes(query) ||
                    record.Delivery.toLowerCase().includes(query) ||
                    record.Qty.toLowerCase().includes(query) ||
                    record.Price.toLowerCase().includes(query) ||
                    record.Status.toLowerCase().includes(query) ||
                    record.Created_By.toLowerCase().includes(query)
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