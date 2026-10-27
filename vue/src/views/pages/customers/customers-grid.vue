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
                <div class="d-flex align-items-center flex-wrap gap-3 pb-4 mb-4">
                    <div class="flex-grow-1">
                        <div class="d-inline-flex align-items-center p-1 bg-light border rounded-pill">
                            <router-link :to="lp('/customer/customers-list')"
                                class="px-3 py-1 fw-semibold d-inline-flex align-items-center rounded-pill"><i
                                    class="icon-list me-2"></i>List View</router-link>
                            <router-link :to="lp('/customer/customers-grid')"
                                class="px-3 py-1 fw-semibold d-inline-flex align-items-center rounded-pill bg-white"><i
                                    class="icon-layout-panel-left me-2"></i>Grid View</router-link>
                        </div>
                    </div>
                    <div class="gap-3 d-flex align-items-center flex-wrap">
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
                            <input type="search" class="form-control form-control-sm" id="dt-search-0"
                                placeholder="Search" aria-controls="DataTables_Table_0">
                        </div>
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
                        <a href="#" class="btn btn-primary d-inline-flex align-items-center" data-bs-toggle="offcanvas"
                            data-bs-target="#add_customer"><i class="icon-plus me-1"></i>New Customer</a>
                    </div>
                </div>
                <!-- End Page Header -->

                <!-- Grid View -->
                <div class="row">
                    <div class="col-xl-3 col-lg-4 col-md-6">
                        <div class="card">
                            <div class="card-body">
                                <div class="d-flex align-items-center justify-content-between mb-3">
                                    <div class="d-flex align-items-center gap-2">
                                        <a href="#"
                                            class="avatar avatar-md border bg-light rounded-circle flex-shrink-0"
                                            data-bs-toggle="offcanvas" data-bs-target="#view_details">
                                            <img src="@/assets/img/profiles/avatar-01.jpg" alt="customer"
                                                class="img-fluid rounded-circle">
                                        </a>
                                        <h6 class="fs-14 fw-semibold mb-0"><a href="#" data-bs-toggle="offcanvas"
                                                data-bs-target="#view_details">Adrian James</a></h6>
                                    </div>
                                    <div class="dropstart">
                                        <button class="btn btn-icon btn-white" type="button" data-bs-toggle="dropdown"
                                            aria-haspopup="true" aria-expanded="false" aria-label="Actions">
                                            <i class="icon-ellipsis-vertical"></i>
                                        </button>
                                        <ul class="dropdown-menu dropdown-menu-right p-3">
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
                                                    data-bs-toggle="modal" data-bs-target="#delete_modal"><i
                                                        class="icon-trash-2 me-2"></i>Delete Customer</a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div class="pb-3 border-bottom mb-3">
                                    <span class="d-flex align-items-center mb-2"><i
                                            class="icon-mail text-gray-9 me-1"></i>Email : adrian@example.com</span>
                                    <span class="d-flex align-items-center"><i
                                            class="icon-phone text-gray-9 me-1"></i>Phone : +1 54544 54587</span>
                                </div>
                                <div class="d-flex align-items-center justify-content-between gap-2">
                                    <span class="d-flex align-items-center"><i
                                            class="icon-calendar-clock text-gray-9 me-1"></i>25 Dec 2025</span>
                                    <span class="badge badge-soft-success">Active</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-xl-3 col-lg-4 col-md-6">
                        <div class="card">
                            <div class="card-body">
                                <div class="d-flex align-items-center justify-content-between mb-3">
                                    <div class="d-flex align-items-center gap-2">
                                        <a href="#"
                                            class="avatar avatar-md border bg-light rounded-circle flex-shrink-0"
                                            data-bs-toggle="offcanvas" data-bs-target="#view_details">
                                            <img src="@/assets/img/profiles/avatar-02.jpg" alt="customer"
                                                class="img-fluid rounded-circle">
                                        </a>
                                        <h6 class="fs-14 fw-semibold mb-0"><a href="#" data-bs-toggle="offcanvas"
                                                data-bs-target="#view_details">Sue Allen</a></h6>
                                    </div>
                                    <div class="dropstart">
                                        <button class="btn btn-icon btn-white" type="button" data-bs-toggle="dropdown"
                                            aria-haspopup="true" aria-expanded="false" aria-label="Actions">
                                            <i class="icon-ellipsis-vertical"></i>
                                        </button>
                                        <ul class="dropdown-menu dropdown-menu-right p-3">
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
                                                    data-bs-toggle="modal" data-bs-target="#delete_modal"><i
                                                        class="icon-trash-2 me-2"></i>Delete Customer</a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div class="pb-3 border-bottom mb-3">
                                    <span class="d-flex align-items-center mb-2"><i
                                            class="icon-mail text-gray-9 me-1"></i>Email : sue@example.com</span>
                                    <span class="d-flex align-items-center"><i
                                            class="icon-phone text-gray-9 me-1"></i>Phone : +1 45478 54588</span>
                                </div>
                                <div class="d-flex align-items-center justify-content-between gap-2">
                                    <span class="d-flex align-items-center"><i
                                            class="icon-calendar-clock text-gray-9 me-1"></i>12 Nov 2025</span>
                                    <span class="badge badge-soft-success">Active</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-xl-3 col-lg-4 col-md-6">
                        <div class="card">
                            <div class="card-body">
                                <div class="d-flex align-items-center justify-content-between mb-3">
                                    <div class="d-flex align-items-center gap-2">
                                        <a href="#"
                                            class="avatar avatar-md border bg-light rounded-circle flex-shrink-0"
                                            data-bs-toggle="offcanvas" data-bs-target="#view_details">
                                            <img src="@/assets/img/profiles/avatar-03.jpg" alt="customer"
                                                class="img-fluid rounded-circle">
                                        </a>
                                        <h6 class="fs-14 fw-semibold mb-0"><a href="#" data-bs-toggle="offcanvas"
                                                data-bs-target="#view_details">Frank Barrett</a></h6>
                                    </div>
                                    <div class="dropstart">
                                        <button class="btn btn-icon btn-white" type="button" data-bs-toggle="dropdown"
                                            aria-haspopup="true" aria-expanded="false" aria-label="Actions">
                                            <i class="icon-ellipsis-vertical"></i>
                                        </button>
                                        <ul class="dropdown-menu dropdown-menu-right p-3">
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
                                                    data-bs-toggle="modal" data-bs-target="#delete_modal"><i
                                                        class="icon-trash-2 me-2"></i>Delete Customer</a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div class="pb-3 border-bottom mb-3">
                                    <span class="d-flex align-items-center mb-2"><i
                                            class="icon-mail text-gray-9 me-1"></i>Email : frank@example.com</span>
                                    <span class="d-flex align-items-center"><i
                                            class="icon-phone text-gray-9 me-1"></i>Phone : +1 33658 54589</span>
                                </div>
                                <div class="d-flex align-items-center justify-content-between gap-2">
                                    <span class="d-flex align-items-center"><i
                                            class="icon-calendar-clock text-gray-9 me-1"></i>03 Nov 2025</span>
                                    <span class="badge badge-soft-success">Active</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-xl-3 col-lg-4 col-md-6">
                        <div class="card">
                            <div class="card-body">
                                <div class="d-flex align-items-center justify-content-between mb-3">
                                    <div class="d-flex align-items-center gap-2">
                                        <a href="#"
                                            class="avatar avatar-md border bg-light rounded-circle flex-shrink-0"
                                            data-bs-toggle="offcanvas" data-bs-target="#view_details">
                                            <img src="@/assets/img/profiles/avatar-04.jpg" alt="customer"
                                                class="img-fluid rounded-circle">
                                        </a>
                                        <h6 class="fs-14 fw-semibold mb-0"><a href="#" data-bs-toggle="offcanvas"
                                                data-bs-target="#view_details">Kelley Davis</a></h6>
                                    </div>
                                    <div class="dropstart">
                                        <button class="btn btn-icon btn-white" type="button" data-bs-toggle="dropdown"
                                            aria-haspopup="true" aria-expanded="false" aria-label="Actions">
                                            <i class="icon-ellipsis-vertical"></i>
                                        </button>
                                        <ul class="dropdown-menu dropdown-menu-right p-3">
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
                                                    data-bs-toggle="modal" data-bs-target="#delete_modal"><i
                                                        class="icon-trash-2 me-2"></i>Delete Customer</a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div class="pb-3 border-bottom mb-3">
                                    <span class="d-flex align-items-center mb-2"><i
                                            class="icon-mail text-gray-9 me-1"></i>Email : kelly@example.com</span>
                                    <span class="d-flex align-items-center"><i
                                            class="icon-phone text-gray-9 me-1"></i>Phone : +1 47854 54590</span>
                                </div>
                                <div class="d-flex align-items-center justify-content-between gap-2">
                                    <span class="d-flex align-items-center"><i
                                            class="icon-calendar-clock text-gray-9 me-1"></i>18 Oct 2025</span>
                                    <span class="badge badge-soft-success">Active</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-xl-3 col-lg-4 col-md-6">
                        <div class="card">
                            <div class="card-body">
                                <div class="d-flex align-items-center justify-content-between mb-3">
                                    <div class="d-flex align-items-center gap-2">
                                        <a href="#"
                                            class="avatar avatar-md border bg-light rounded-circle flex-shrink-0"
                                            data-bs-toggle="offcanvas" data-bs-target="#view_details">
                                            <img src="@/assets/img/profiles/avatar-05.jpg" alt="customer"
                                                class="img-fluid rounded-circle">
                                        </a>
                                        <h6 class="fs-14 fw-semibold mb-0"><a href="#" data-bs-toggle="offcanvas"
                                                data-bs-target="#view_details">Jim Vickers</a></h6>
                                    </div>
                                    <div class="dropstart">
                                        <button class="btn btn-icon btn-white" type="button" data-bs-toggle="dropdown"
                                            aria-haspopup="true" aria-expanded="false" aria-label="Actions">
                                            <i class="icon-ellipsis-vertical"></i>
                                        </button>
                                        <ul class="dropdown-menu dropdown-menu-right p-3">
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
                                                    data-bs-toggle="modal" data-bs-target="#delete_modal"><i
                                                        class="icon-trash-2 me-2"></i>Delete Customer</a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div class="pb-3 border-bottom mb-3">
                                    <span class="d-flex align-items-center mb-2"><i
                                            class="icon-mail text-gray-9 me-1"></i>Email : jim@example.com</span>
                                    <span class="d-flex align-items-center"><i
                                            class="icon-phone text-gray-9 me-1"></i>Phone : +1 58974 54591</span>
                                </div>
                                <div class="d-flex align-items-center justify-content-between gap-2">
                                    <span class="d-flex align-items-center"><i
                                            class="icon-calendar-clock text-gray-9 me-1"></i>29 Sep 2025</span>
                                    <span class="badge badge-soft-danger">Inactive</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-xl-3 col-lg-4 col-md-6">
                        <div class="card">
                            <div class="card-body">
                                <div class="d-flex align-items-center justify-content-between mb-3">
                                    <div class="d-flex align-items-center gap-2">
                                        <a href="#"
                                            class="avatar avatar-md border bg-soft-danger rounded-circle flex-shrink-0"
                                            data-bs-toggle="offcanvas" data-bs-target="#view_details">
                                            <span class=" text-danger rounded-circle">NC</span>
                                        </a>
                                        <h6 class="fs-14 fw-semibold mb-0"><a href="#" data-bs-toggle="offcanvas"
                                                data-bs-target="#view_details">Nancy Chapman</a></h6>
                                    </div>
                                    <div class="dropstart">
                                        <button class="btn btn-icon btn-white" type="button" data-bs-toggle="dropdown"
                                            aria-haspopup="true" aria-expanded="false" aria-label="Actions">
                                            <i class="icon-ellipsis-vertical"></i>
                                        </button>
                                        <ul class="dropdown-menu dropdown-menu-right p-3">
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
                                                    data-bs-toggle="modal" data-bs-target="#delete_modal"><i
                                                        class="icon-trash-2 me-2"></i>Delete Customer</a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div class="pb-3 border-bottom mb-3">
                                    <span class="d-flex align-items-center mb-2"><i
                                            class="icon-mail text-gray-9 me-1"></i>Email : nancy@example.com</span>
                                    <span class="d-flex align-items-center"><i
                                            class="icon-phone text-gray-9 me-1"></i>Phone : +1 96587 54592</span>
                                </div>
                                <div class="d-flex align-items-center justify-content-between gap-2">
                                    <span class="d-flex align-items-center"><i
                                            class="icon-calendar-clock text-gray-9 me-1"></i>15 Sep 2025</span>
                                    <span class="badge badge-soft-success">Active</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-xl-3 col-lg-4 col-md-6">
                        <div class="card">
                            <div class="card-body">
                                <div class="d-flex align-items-center justify-content-between mb-3">
                                    <div class="d-flex align-items-center gap-2">
                                        <a href="#"
                                            class="avatar avatar-md border bg-light rounded-circle flex-shrink-0"
                                            data-bs-toggle="offcanvas" data-bs-target="#view_details">
                                            <img src="@/assets/img/profiles/avatar-07.jpg" alt="customer"
                                                class="img-fluid rounded-circle">
                                        </a>
                                        <h6 class="fs-14 fw-semibold mb-0"><a href="#" data-bs-toggle="offcanvas"
                                                data-bs-target="#view_details">Ron Jude</a></h6>
                                    </div>
                                    <div class="dropstart">
                                        <button class="btn btn-icon btn-white" type="button" data-bs-toggle="dropdown"
                                            aria-haspopup="true" aria-expanded="false" aria-label="Actions">
                                            <i class="icon-ellipsis-vertical"></i>
                                        </button>
                                        <ul class="dropdown-menu dropdown-menu-right p-3">
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
                                                    data-bs-toggle="modal" data-bs-target="#delete_modal"><i
                                                        class="icon-trash-2 me-2"></i>Delete Customer</a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div class="pb-3 border-bottom mb-3">
                                    <span class="d-flex align-items-center mb-2"><i
                                            class="icon-mail text-gray-9 me-1"></i>Email : ron@example.com</span>
                                    <span class="d-flex align-items-center"><i
                                            class="icon-phone text-gray-9 me-1"></i>Phone : +1 31245 54593</span>
                                </div>
                                <div class="d-flex align-items-center justify-content-between gap-2">
                                    <span class="d-flex align-items-center"><i
                                            class="icon-calendar-clock text-gray-9 me-1"></i>07 Sep 2025</span>
                                    <span class="badge badge-soft-success">Active</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-xl-3 col-lg-4 col-md-6">
                        <div class="card">
                            <div class="card-body">
                                <div class="d-flex align-items-center justify-content-between mb-3">
                                    <div class="d-flex align-items-center gap-2">
                                        <a href="#"
                                            class="avatar avatar-md border bg-light rounded-circle flex-shrink-0"
                                            data-bs-toggle="offcanvas" data-bs-target="#view_details">
                                            <img src="@/assets/img/profiles/avatar-08.jpg" alt="customer"
                                                class="img-fluid rounded-circle">
                                        </a>
                                        <h6 class="fs-14 fw-semibold mb-0"><a href="#" data-bs-toggle="offcanvas"
                                                data-bs-target="#view_details">Andrea Aponte</a></h6>
                                    </div>
                                    <div class="dropstart">
                                        <button class="btn btn-icon btn-white" type="button" data-bs-toggle="dropdown"
                                            aria-haspopup="true" aria-expanded="false" aria-label="Actions">
                                            <i class="icon-ellipsis-vertical"></i>
                                        </button>
                                        <ul class="dropdown-menu dropdown-menu-right p-3">
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
                                                    data-bs-toggle="modal" data-bs-target="#delete_modal"><i
                                                        class="icon-trash-2 me-2"></i>Delete Customer</a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div class="pb-3 border-bottom mb-3">
                                    <span class="d-flex align-items-center mb-2"><i
                                            class="icon-mail text-gray-9 me-1"></i>Email : andr@example.com</span>
                                    <span class="d-flex align-items-center"><i
                                            class="icon-phone text-gray-9 me-1"></i>Phone : +1 47854 54594</span>
                                </div>
                                <div class="d-flex align-items-center justify-content-between gap-2">
                                    <span class="d-flex align-items-center"><i
                                            class="icon-calendar-clock text-gray-9 me-1"></i>22 Aug 2025</span>
                                    <span class="badge badge-soft-success">Active</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-xl-3 col-lg-4 col-md-6">
                        <div class="card">
                            <div class="card-body">
                                <div class="d-flex align-items-center justify-content-between mb-3">
                                    <div class="d-flex align-items-center gap-2">
                                        <a href="#"
                                            class="avatar avatar-md border bg-light rounded-circle flex-shrink-0"
                                            data-bs-toggle="offcanvas" data-bs-target="#view_details">
                                            <img src="@/assets/img/profiles/avatar-09.jpg" alt="customer"
                                                class="img-fluid rounded-circle">
                                        </a>
                                        <h6 class="fs-14 fw-semibold mb-0"><a href="#" data-bs-toggle="offcanvas"
                                                data-bs-target="#view_details">David Belcher</a></h6>
                                    </div>
                                    <div class="dropstart">
                                        <button class="btn btn-icon btn-white" type="button" data-bs-toggle="dropdown"
                                            aria-haspopup="true" aria-expanded="false" aria-label="Actions">
                                            <i class="icon-ellipsis-vertical"></i>
                                        </button>
                                        <ul class="dropdown-menu dropdown-menu-right p-3">
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
                                                    data-bs-toggle="modal" data-bs-target="#delete_modal"><i
                                                        class="icon-trash-2 me-2"></i>Delete Customer</a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div class="pb-3 border-bottom mb-3">
                                    <span class="d-flex align-items-center mb-2"><i
                                            class="icon-mail text-gray-9 me-1"></i>Email : david@example.com</span>
                                    <span class="d-flex align-items-center"><i
                                            class="icon-phone text-gray-9 me-1"></i>Phone : +1 14524 54595</span>
                                </div>
                                <div class="d-flex align-items-center justify-content-between gap-2">
                                    <span class="d-flex align-items-center"><i
                                            class="icon-calendar-clock text-gray-9 me-1"></i>11 Aug 2025</span>
                                    <span class="badge badge-soft-success">Active</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-xl-3 col-lg-4 col-md-6">
                        <div class="card">
                            <div class="card-body">
                                <div class="d-flex align-items-center justify-content-between mb-3">
                                    <div class="d-flex align-items-center gap-2">
                                        <a href="#"
                                            class="avatar avatar-md border bg-light rounded-circle flex-shrink-0"
                                            data-bs-toggle="offcanvas" data-bs-target="#view_details">
                                            <img src="@/assets/img/profiles/avatar-10.jpg" alt="customer"
                                                class="img-fluid rounded-circle">
                                        </a>
                                        <h6 class="fs-14 fw-semibold mb-0"><a href="#" data-bs-toggle="offcanvas"
                                                data-bs-target="#view_details">Julie Kangas</a></h6>
                                    </div>
                                    <div class="dropstart">
                                        <button class="btn btn-icon btn-white" type="button" data-bs-toggle="dropdown"
                                            aria-haspopup="true" aria-expanded="false" aria-label="Actions">
                                            <i class="icon-ellipsis-vertical"></i>
                                        </button>
                                        <ul class="dropdown-menu dropdown-menu-right p-3">
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
                                                    data-bs-toggle="modal" data-bs-target="#delete_modal"><i
                                                        class="icon-trash-2 me-2"></i>Delete Customer</a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div class="pb-3 border-bottom mb-3">
                                    <span class="d-flex align-items-center mb-2"><i
                                            class="icon-mail text-gray-9 me-1"></i>Email : julie@example.com</span>
                                    <span class="d-flex align-items-center"><i
                                            class="icon-phone text-gray-9 me-1"></i>Phone : +1 22145 54596</span>
                                </div>
                                <div class="d-flex align-items-center justify-content-between gap-2">
                                    <span class="d-flex align-items-center"><i
                                            class="icon-calendar-clock text-gray-9 me-1"></i>30 Aug 2025</span>
                                    <span class="badge badge-soft-success">Active</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-xl-3 col-lg-4 col-md-6">
                        <div class="card">
                            <div class="card-body">
                                <div class="d-flex align-items-center justify-content-between mb-3">
                                    <div class="d-flex align-items-center gap-2">
                                        <a href="#"
                                            class="avatar avatar-md border bg-soft-info rounded-circle flex-shrink-0"
                                            data-bs-toggle="offcanvas" data-bs-target="#view_details">
                                            <span class="text-info rounded-circle flex-shrink-0">MA</span>
                                        </a>
                                        <h6 class="fs-14 fw-semibold mb-0"><a href="#" data-bs-toggle="offcanvas"
                                                data-bs-target="#view_details">Micheal Angela</a></h6>
                                    </div>
                                    <div class="dropstart">
                                        <button class="btn btn-icon btn-white" type="button" data-bs-toggle="dropdown"
                                            aria-haspopup="true" aria-expanded="false" aria-label="Actions">
                                            <i class="icon-ellipsis-vertical"></i>
                                        </button>
                                        <ul class="dropdown-menu dropdown-menu-right p-3">
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
                                                    data-bs-toggle="modal" data-bs-target="#delete_modal"><i
                                                        class="icon-trash-2 me-2"></i>Delete Customer</a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div class="pb-3 border-bottom mb-3">
                                    <span class="d-flex align-items-center mb-2"><i
                                            class="icon-mail text-gray-9 me-1"></i>Email : mich@example.com</span>
                                    <span class="d-flex align-items-center"><i
                                            class="icon-phone text-gray-9 me-1"></i>Phone : +1 33658 54597</span>
                                </div>
                                <div class="d-flex align-items-center justify-content-between gap-2">
                                    <span class="d-flex align-items-center"><i
                                            class="icon-calendar-clock text-gray-9 me-1"></i>25 Dec 2025</span>
                                    <span class="badge badge-soft-success">Active</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-xl-3 col-lg-4 col-md-6">
                        <div class="card">
                            <div class="card-body">
                                <div class="d-flex align-items-center justify-content-between mb-3">
                                    <div class="d-flex align-items-center gap-2">
                                        <a href="#"
                                            class="avatar avatar-md border bg-light rounded-circle flex-shrink-0"
                                            data-bs-toggle="offcanvas" data-bs-target="#view_details">
                                            <img src="@/assets/img/profiles/avatar-11.jpg" alt="customer"
                                                class="img-fluid rounded-circle">
                                        </a>
                                        <h6 class="fs-14 fw-semibold mb-0"><a href="#" data-bs-toggle="offcanvas"
                                                data-bs-target="#view_details">Cameron Lee</a></h6>
                                    </div>
                                    <div class="dropstart">
                                        <button class="btn btn-icon btn-white" type="button" data-bs-toggle="dropdown"
                                            aria-haspopup="true" aria-expanded="false" aria-label="Actions">
                                            <i class="icon-ellipsis-vertical"></i>
                                        </button>
                                        <ul class="dropdown-menu dropdown-menu-right p-3">
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
                                                    data-bs-toggle="modal" data-bs-target="#delete_modal"><i
                                                        class="icon-trash-2 me-2"></i>Delete Customer</a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div class="pb-3 border-bottom mb-3">
                                    <span class="d-flex align-items-center mb-2"><i
                                            class="icon-mail text-gray-9 me-1"></i>Email : came@example.com</span>
                                    <span class="d-flex align-items-center"><i
                                            class="icon-phone text-gray-9 me-1"></i>Phone : +1 33658 54598</span>
                                </div>
                                <div class="d-flex align-items-center justify-content-between gap-2">
                                    <span class="d-flex align-items-center"><i
                                            class="icon-calendar-clock text-gray-9 me-1"></i>25 Dec 2025</span>
                                    <span class="badge badge-soft-success">Active</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="text-center">
                    <a href="#" class="btn btn-primary m-auto"><i class="icon-loader me-1"></i>Load More</a>
                </div>
                <!-- Grid View End-->

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
                        <a href="javascript:void(0);" class="btn btn-danger w-100" data-bs-dismiss="modal">Delete</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- End Delete Modal  -->
    <customers-modal></customers-modal>
</template>