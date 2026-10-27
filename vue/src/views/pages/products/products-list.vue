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
                                <i class="icon-box text-dark me-2"></i>All Products
                            </a>
                            <div class="dropdown-menu dropdown-menu-lg p-3">
                                <h6 class="fs-14 fw-semibold mb-3">Products</h6>
                                <div class="input-icon-end input-icon position-relative mb-3">
                                    <span class="input-icon-addon">
                                        <i class="icon-search text-dark"></i>
                                    </span>
                                    <input type="text" class="form-control form-control-md" placeholder="Search">
                                </div>
                                <ul class="list-unstyled mb-0">
                                    <li class="dropdown-item rounded">
                                        <label class="d-flex align-items-center">
                                            <input class="form-check-input m-0 me-2" type="checkbox" checked>Waistcoat
                                        </label>
                                    </li>
                                    <li class="dropdown-item rounded">
                                        <label class="d-flex align-items-center">
                                            <input class="form-check-input m-0 me-2" type="checkbox" checked>Evening
                                            Dress
                                        </label>
                                    </li>
                                    <li class="dropdown-item rounded">
                                        <label class="d-flex align-items-center">
                                            <input class="form-check-input m-0 me-2" type="checkbox">Blouse
                                        </label>
                                    </li>
                                    <li class="dropdown-item rounded">
                                        <label class="d-flex align-items-center">
                                            <input class="form-check-input m-0 me-2" type="checkbox">Silk Blouse
                                        </label>
                                    </li>
                                    <li class="dropdown-item rounded">
                                        <label class="d-flex align-items-center">
                                            <input class="form-check-input m-0 me-2" type="checkbox" checked>Blouse Iron
                                            Only
                                        </label>
                                    </li>
                                    <li class="dropdown-item rounded">
                                        <label class="d-flex align-items-center">
                                            <input class="form-check-input m-0 me-2" type="checkbox" checked>Silk Skirt
                                        </label>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div class="dropdown">
                            <a href="#"
                                class="dropdown-toggle btn btn-white d-flex align-items-center justify-content-between"
                                data-bs-toggle="dropdown" data-bs-auto-close="outside">
                                <i class="icon-zap text-dark me-2"></i>Category
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
                                            <input class="form-check-input m-0 me-2" type="checkbox">Suits
                                        </label>
                                    </li>
                                    <li class="dropdown-item rounded">
                                        <label class="d-flex align-items-center">
                                            <input class="form-check-input m-0 me-2" type="checkbox">Knitwear
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

                        <a href="#" data-bs-toggle="modal" data-bs-target="#add_product"
                            class="btn btn-primary d-inline-flex align-items-center"><i class="icon-plus me-2"></i>New
                            Product</a>

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
                            <template v-if="column.key === 'Product'">
                                <div class="d-flex align-items-center">
                                    <div class="avatar avatar-sm avatar-rounded flex-shrink-0 me-2">
                                        <img :src="getImageUrl(record.Image)" alt="product" class="img-fluid">
                                    </div>
                                    <h6 class="fs-14 fw-semibold mb-0">{{ record.Product }}</h6>
                                </div>
                            </template>
                            <template v-if="column.key === 'Price'">
                                <span class="fw-semibold">{{ record.Price }}</span>
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
                                                <a href="#" data-bs-toggle="modal" data-bs-target="#edit_product"
                                                    class="dropdown-item rounded d-flex align-items-center"><i
                                                        class="icon-pencil-line me-2"></i>Edit Product</a>
                                            </li>
                                            <li>
                                                <a href="#" class="dropdown-item rounded d-flex align-items-center"
                                                    data-bs-toggle="modal" data-bs-target="#delete_modal"
                                                    @click="setDelete(record)"><i class="icon-trash-2 me-2"></i>Delete
                                                    Product</a>
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

    <products-modal></products-modal>

</template>

<script>
import BasePagination from '@/components/BasePagination.vue';
import { VueDraggableNext } from 'vue-draggable-next';
import { ref } from 'vue';
const valueOne = ref();

const data = [
    {
        "Product": "Waistcoat",
        "Image": "product-01.svg",
        "Services": "Dry Cleaning, Ironing",
        "Category": "Accessories",
        "Price": "$25",
        "Status": "Active",
    },
    {
        "Product": "Evening Dress",
        "Image": "product-02.svg",
        "Services": "Laundry, Wet Cleaning, Wash & Iron +3",
        "Category": "Dresses",
        "Price": "$49",
        "Status": "Active",
    },
    {
        "Product": "Blouse",
        "Image": "product-03.svg",
        "Services": "Clothing, Ironing",
        "Category": "Dresses",
        "Price": "$38",
        "Status": "Active",
    },
    {
        "Product": "Silk Blouse",
        "Image": "product-04.svg",
        "Services": "Clothing",
        "Category": "Dresses",
        "Price": "$24",
        "Status": "Inactive",
    },
    {
        "Product": "Blouse Iron Only",
        "Image": "product-05.svg",
        "Services": "Laundry, Wet Cleaning",
        "Category": "Suits",
        "Price": "$33",
        "Status": "Active",
    },
    {
        "Product": "Silk Skirt",
        "Image": "product-06.svg",
        "Services": "Dry Cleaning, Ironing",
        "Category": "Knitwear",
        "Price": "$46",
        "Status": "Active",
    },
    {
        "Product": "Dress with Trims",
        "Image": "product-07.svg",
        "Services": "Laundry, Wash & Iron",
        "Category": "Knitwear",
        "Price": "$36",
        "Status": "Active",
    },
    {
        "Product": "Shirt",
        "Image": "product-08.svg",
        "Services": "Laundry, Ironing",
        "Category": "Dresses",
        "Price": "$24",
        "Status": "Active",
    },
    {
        "Product": "Jumpsuit",
        "Image": "product-09.svg",
        "Services": "Clothing",
        "Category": "Dresses",
        "Price": "$65",
        "Status": "Active",
    },
    {
        "Product": "Dress Shorten",
        "Image": "product-10.svg",
        "Services": "Clothing",
        "Category": "Dresses",
        "Price": "$12",
        "Status": "Active",
    }
]
const columns = [
    {
        title: "Product",
        dataIndex: "Product",
        key: "Product",
        sorter: {
            compare: (a, b) => (a.Product.toLowerCase() > b.Product.toLowerCase() ? -1 : 1),
        },
        visible: true,
    },
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
        title: "Category",
        dataIndex: "Category",
        key: "Category",
        sorter: {
            compare: (a, b) => (a.Category.toLowerCase() > b.Category.toLowerCase() ? -1 : 1),
        },
        visible: true,
    },
    {
        title: "Price",
        dataIndex: "Price",
        key: "Price",
        sorter: {
            compare: (a, b) => (a.Price.toLowerCase() > b.Price.toLowerCase() ? -1 : 1),
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
            return new URL(`/src/assets/img/products/${imageName}`, import.meta.url).href;
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
                    record.Product.toLowerCase().includes(query) ||
                    record.Services.toLowerCase().includes(query) ||
                    record.Category.toLowerCase().includes(query) ||
                    record.Price.toLowerCase().includes(query) ||
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