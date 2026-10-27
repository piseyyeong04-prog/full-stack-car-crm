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
                                class="px-3 py-1 fw-semibold d-inline-flex align-items-center rounded-pill"><i
                                    class="icon-list me-2"></i>List View</router-link>
                            <router-link :to="lp('/staff/staff-grid')"
                                class="px-3 py-1 fw-semibold d-inline-flex align-items-center rounded-pill bg-white"><i
                                    class="icon-layout-panel-left me-2"></i>Grid View</router-link>
                        </div>
                    </div>
                    <div class="gap-3 d-flex align-items-center flex-wrap">
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
                        <div class="input-group w-auto input-group-flat">
                            <input type="text" class="form-control" placeholder="Search Keyword">
                            <span class="input-group-text"><i class="icon-search"></i></span>
                        </div>
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
                        <a href="#" class="btn btn-primary d-inline-flex align-items-center" data-bs-toggle="offcanvas"
                            data-bs-target="#add_staffs"><i class="icon-plus me-1"></i>New Staff</a>
                    </div>
                </div>
                <!-- End Page Header -->

                <!-- Grid start -->
                <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 row-cols-xl-5 g-4 row-gap-1 mb-4">
                    <div class="col">
                        <div class="card flex-fill my-0">
                            <div class="card-body p-3">
                                <div
                                    class="d-flex align-items-center justify-content-between flex-wrap mb-3 pb-3 border-bottom rounded">
                                    <div class="d-flex align-items-center gap-2 flex-wrap flex-xl-nowrap">
                                        <a href="#" class="avatar avatar-rounded flex-shrink-0">
                                            <img src="@/assets/img/staffs/staff-01.jpg" data-bs-toggle="offcanvas" data-bs-target="#view_details" class="img-fluid" alt="img">
                                        </a>
                                        <div class="w-100">
                                            <a href="#" data-bs-toggle="offcanvas" data-bs-target="#view_details" class="mb-1 fw-medium">Jason Miller</a>
                                            <p class="mb-0 fs-13 text-body">+1 54544 54587</p>
                                        </div>
                                    </div>
                                </div>
                                <div class="d-flex align-items-center justify-content-between">
                                    <span class="badge badge-white border-gray d-inline-flex align-items-center"><span
                                            class="badge-dot bg-success me-1"></span> Admin</span>
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
                                                    data-bs-toggle="modal" data-bs-target="#delete_modal"><i
                                                        class="icon-trash-2 me-2"></i>Delete Staff </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card flex-fill my-0">
                            <div class="card-body p-3">
                                <div
                                    class="d-flex align-items-center justify-content-between flex-wrap mb-3 pb-3 border-bottom rounded">
                                    <div class="d-flex align-items-center gap-2 flex-wrap flex-xl-nowrap">
                                        <a href="#" class="avatar avatar-rounded flex-shrink-0">
                                            <img src="@/assets/img/staffs/staff-02.jpg" data-bs-toggle="offcanvas" data-bs-target="#view_details" class="img-fluid" alt="img">
                                        </a>
                                        <div class="w-100">
                                            <a href="#" data-bs-toggle="offcanvas" data-bs-target="#view_details" class="mb-1 fw-medium">Sarah Thompson</a>
                                            <p class="mb-0 fs-13 text-body">+1 98778 12388</p>
                                        </div>
                                    </div>
                                </div>
                                <div class="d-flex align-items-center justify-content-between">
                                    <span class="badge badge-white border-gray d-inline-flex align-items-center"><span
                                            class="badge-dot bg-warning me-1"></span>Billing</span>
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
                                                    data-bs-toggle="modal" data-bs-target="#delete_modal"><i
                                                        class="icon-trash-2 me-2"></i>Delete Staff </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card flex-fill my-0">
                            <div class="card-body p-3">
                                <div
                                    class="d-flex align-items-center justify-content-between flex-wrap mb-3 pb-3 border-bottom rounded">
                                    <div class="d-flex align-items-center gap-2 flex-wrap flex-xl-nowrap">
                                        <a href="#" class="avatar avatar-rounded flex-shrink-0">
                                            <img src="@/assets/img/staffs/staff-03.jpg" data-bs-toggle="offcanvas" data-bs-target="#view_details" class="img-fluid" alt="img">
                                        </a>
                                        <div class="w-100">
                                            <a href="#" data-bs-toggle="offcanvas" data-bs-target="#view_details" class="mb-1 fw-medium">Michael Roberts</a>
                                            <p class="mb-0 fs-13 text-body">+1 65458 96389</p>
                                        </div>
                                    </div>
                                </div>
                                <div class="d-flex align-items-center justify-content-between">
                                    <span class="badge badge-white border-gray d-inline-flex align-items-center"><span
                                            class="badge-dot bg-info me-1"></span>Attendant</span>
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
                                                    data-bs-toggle="modal" data-bs-target="#delete_modal"><i
                                                        class="icon-trash-2 me-2"></i>Delete Staff </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card flex-fill my-0">
                            <div class="card-body p-3">
                                <div
                                    class="d-flex align-items-center justify-content-between flex-wrap mb-3 pb-3 border-bottom rounded">
                                    <div class="d-flex align-items-center gap-2 flex-wrap flex-xl-nowrap">
                                        <a href="#" class="avatar avatar-rounded flex-shrink-0">
                                            <img src="@/assets/img/staffs/staff-04.jpg" data-bs-toggle="offcanvas" data-bs-target="#view_details" class="img-fluid" alt="img">
                                        </a>
                                        <div class="w-100">
                                            <a href="#" data-bs-toggle="offcanvas" data-bs-target="#view_details" class="mb-1 fw-medium">Olivia Carter</a>
                                            <p class="mb-0 fs-13 text-body">+1 12354 74190</p>
                                        </div>
                                    </div>
                                </div>
                                <div class="d-flex align-items-center justify-content-between">
                                    <span class="badge badge-white border-gray d-inline-flex align-items-center"><span
                                            class="badge-dot bg-orange me-1"></span>Operator</span>
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
                                                    data-bs-toggle="modal" data-bs-target="#delete_modal"><i
                                                        class="icon-trash-2 me-2"></i>Delete Staff </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card flex-fill my-0">
                            <div class="card-body p-3">
                                <div
                                    class="d-flex align-items-center justify-content-between flex-wrap mb-3 pb-3 border-bottom rounded">
                                    <div class="d-flex align-items-center gap-2 flex-wrap flex-xl-nowrap">
                                        <a href="#" class="avatar avatar-rounded flex-shrink-0">
                                            <img src="@/assets/img/staffs/staff-05.jpg" data-bs-toggle="offcanvas" data-bs-target="#view_details" class="img-fluid" alt="img">
                                        </a>
                                        <div class="w-100">
                                            <a href="#" data-bs-toggle="offcanvas" data-bs-target="#view_details" class="mb-1 fw-medium">Sophia Hayes</a>
                                            <p class="mb-0 fs-13 text-body">+1 45674 85291</p>
                                        </div>
                                    </div>
                                </div>
                                <div class="d-flex align-items-center justify-content-between">
                                    <span class="badge badge-white border-gray d-inline-flex align-items-center"><span
                                            class="badge-dot bg-purple me-1"></span>Dryer Operator</span>
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
                                                    data-bs-toggle="modal" data-bs-target="#delete_modal"><i
                                                        class="icon-trash-2 me-2"></i>Delete Staff </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card flex-fill my-0">
                            <div class="card-body p-3">
                                <div
                                    class="d-flex align-items-center justify-content-between flex-wrap mb-3 pb-3 border-bottom rounded">
                                    <div class="d-flex align-items-center gap-2 flex-wrap flex-xl-nowrap">
                                        <a href="#" class="avatar avatar-rounded flex-shrink-0">
                                            <img src="@/assets/img/staffs/staff-06.jpg" data-bs-toggle="offcanvas" data-bs-target="#view_details" class="img-fluid" alt="img">
                                        </a>
                                        <div class="w-100">
                                            <a href="#" data-bs-toggle="offcanvas" data-bs-target="#view_details" class="mb-1 fw-medium">Hannah Lewis</a>
                                            <p class="mb-0 fs-13 text-body">+1 78987 36992</p>
                                        </div>
                                    </div>
                                </div>
                                <div class="d-flex align-items-center justify-content-between">
                                    <span class="badge badge-white border-gray d-inline-flex align-items-center"><span
                                            class="badge-dot bg-indigo me-1"></span>Ironing Staff</span>
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
                                                    data-bs-toggle="modal" data-bs-target="#delete_modal"><i
                                                        class="icon-trash-2 me-2"></i>Delete Staff </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card flex-fill my-0">
                            <div class="card-body p-3">
                                <div
                                    class="d-flex align-items-center justify-content-between flex-wrap mb-3 pb-3 border-bottom rounded">
                                    <div class="d-flex align-items-center gap-2 flex-wrap flex-xl-nowrap">
                                        <a href="#" class="avatar avatar-rounded flex-shrink-0">
                                            <img src="@/assets/img/staffs/staff-07.jpg" data-bs-toggle="offcanvas" data-bs-target="#view_details" class="img-fluid" alt="img">
                                        </a>
                                        <div class="w-100">
                                            <a href="#" data-bs-toggle="offcanvas" data-bs-target="#view_details" class="mb-1 fw-medium">Charlotte Evans</a>
                                            <p class="mb-0 fs-13 text-body">+1 32145 15993</p>
                                        </div>
                                    </div>
                                </div>
                                <div class="d-flex align-items-center justify-content-between">
                                    <span class="badge badge-white border-gray d-inline-flex align-items-center"><span
                                            class="badge-dot bg-cyan me-1"></span>Removal Expert</span>
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
                                                    data-bs-toggle="modal" data-bs-target="#delete_modal"><i
                                                        class="icon-trash-2 me-2"></i>Delete Staff </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card flex-fill my-0">
                            <div class="card-body p-3">
                                <div
                                    class="d-flex align-items-center justify-content-between flex-wrap mb-3 pb-3 border-bottom rounded">
                                    <div class="d-flex align-items-center gap-2 flex-wrap flex-xl-nowrap">
                                        <a href="#" class="avatar avatar-rounded flex-shrink-0">
                                            <img src="@/assets/img/staffs/staff-08.jpg" data-bs-toggle="offcanvas" data-bs-target="#view_details" class="img-fluid" alt="img">
                                        </a>
                                        <div class="w-100">
                                            <a href="#" data-bs-toggle="offcanvas" data-bs-target="#view_details" class="mb-1 fw-medium">Aiden Murphy</a>
                                            <p class="mb-0 fs-13 text-body">+1 65454 75394</p>
                                        </div>
                                    </div>
                                </div>
                                <div class="d-flex align-items-center justify-content-between">
                                    <span class="badge badge-white border-gray d-inline-flex align-items-center"><span
                                            class="badge-dot bg-danger me-1"></span>Supervisor</span>
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
                                                    data-bs-toggle="modal" data-bs-target="#delete_modal"><i
                                                        class="icon-trash-2 me-2"></i>Delete Staff </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card flex-fill my-0">
                            <div class="card-body p-3">
                                <div
                                    class="d-flex align-items-center justify-content-between flex-wrap mb-3 pb-3 border-bottom rounded">
                                    <div class="d-flex align-items-center gap-2 flex-wrap flex-xl-nowrap">
                                        <a href="#" class="avatar avatar-rounded flex-shrink-0">
                                            <img src="@/assets/img/staffs/staff-09.jpg" data-bs-toggle="offcanvas" data-bs-target="#view_details" class="img-fluid" alt="img">
                                        </a>
                                        <div class="w-100">
                                            <a href="#" data-bs-toggle="offcanvas" data-bs-target="#view_details" class="mb-1 fw-medium">David Harris</a>
                                            <p class="mb-0 fs-13 text-body">+1 98724 84695</p>
                                        </div>
                                    </div>
                                </div>
                                <div class="d-flex align-items-center justify-content-between">
                                    <span class="badge badge-white border-gray d-inline-flex align-items-center"><span
                                            class="badge-dot bg-pink me-1"></span> Branch Manager</span>
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
                                                    data-bs-toggle="modal" data-bs-target="#delete_modal"><i
                                                        class="icon-trash-2 me-2"></i>Delete Staff </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card flex-fill my-0">
                            <div class="card-body p-3">
                                <div
                                    class="d-flex align-items-center justify-content-between flex-wrap mb-3 pb-3 border-bottom rounded">
                                    <div class="d-flex align-items-center gap-2 flex-wrap flex-xl-nowrap">
                                        <a href="#" class="avatar avatar-rounded flex-shrink-0">
                                            <img src="@/assets/img/staffs/staff-10.jpg" data-bs-toggle="offcanvas" data-bs-target="#view_details" class="img-fluid" alt="img">
                                        </a>
                                        <div class="w-100">
                                            <a href="#" data-bs-toggle="offcanvas" data-bs-target="#view_details" class="mb-1 fw-medium">Micheal Stewart</a>
                                            <p class="mb-0 fs-13 text-body">+1 25845 95196</p>
                                        </div>
                                    </div>
                                </div>
                                <div class="d-flex align-items-center justify-content-between">
                                    <span class="badge badge-white border-gray d-inline-flex align-items-center"><span
                                            class="badge-dot bg-success me-1"></span>Technician</span>
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
                                                    data-bs-toggle="modal" data-bs-target="#delete_modal"><i
                                                        class="icon-trash-2 me-2"></i>Delete Staff </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card flex-fill my-0">
                            <div class="card-body p-3">
                                <div
                                    class="d-flex align-items-center justify-content-between flex-wrap mb-3 pb-3 border-bottom rounded">
                                    <div class="d-flex align-items-center gap-2 flex-wrap flex-xl-nowrap">
                                        <a href="#" class="avatar avatar-rounded flex-shrink-0">
                                            <img src="@/assets/img/staffs/staff-11.jpg" data-bs-toggle="offcanvas" data-bs-target="#view_details" class="img-fluid" alt="img">
                                        </a>
                                        <div class="w-100">
                                            <a href="#" data-bs-toggle="offcanvas" data-bs-target="#view_details" class="mb-1 fw-medium">Emily Carter</a>
                                            <p class="mb-0 fs-13 text-body">+1 65432 98765</p>
                                        </div>
                                    </div>
                                </div>
                                <div class="d-flex align-items-center justify-content-between">
                                    <span class="badge badge-white border-gray d-inline-flex align-items-center"><span
                                            class="badge-dot bg-danger me-1"></span>Operator</span>
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
                                                    data-bs-toggle="modal" data-bs-target="#delete_modal"><i
                                                        class="icon-trash-2 me-2"></i>Delete Staff </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card flex-fill my-0">
                            <div class="card-body p-3">
                                <div
                                    class="d-flex align-items-center justify-content-between flex-wrap mb-3 pb-3 border-bottom rounded">
                                    <div class="d-flex align-items-center gap-2 flex-wrap flex-xl-nowrap">
                                        <a href="#" class="avatar avatar-rounded flex-shrink-0">
                                            <img src="@/assets/img/staffs/staff-12.jpg" data-bs-toggle="offcanvas" data-bs-target="#view_details" class="img-fluid" alt="img">
                                        </a>
                                        <div class="w-100">
                                            <a href="#" data-bs-toggle="offcanvas" data-bs-target="#view_details" class="mb-1 fw-medium">Michael Johnson</a>
                                            <p class="mb-0 fs-13 text-body">+1 78901 23456</p>
                                        </div>
                                    </div>
                                </div>
                                <div class="d-flex align-items-center justify-content-between">
                                    <span class="badge badge-white border-gray d-inline-flex align-items-center"><span
                                            class="badge-dot bg-indigo me-1"></span>Ironing Staff</span>
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
                                                    data-bs-toggle="modal" data-bs-target="#delete_modal"><i
                                                        class="icon-trash-2 me-2"></i>Delete Staff </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card flex-fill my-0">
                            <div class="card-body p-3">
                                <div
                                    class="d-flex align-items-center justify-content-between flex-wrap mb-3 pb-3 border-bottom rounded">
                                    <div class="d-flex align-items-center gap-2 flex-wrap flex-xl-nowrap">
                                        <a href="#" class="avatar avatar-rounded flex-shrink-0">
                                            <img src="@/assets/img/staffs/staff-13.jpg" data-bs-toggle="offcanvas" data-bs-target="#view_details" class="img-fluid" alt="img">
                                        </a>
                                        <div class="w-100">
                                            <a href="#" data-bs-toggle="offcanvas" data-bs-target="#view_details" class="mb-1 fw-medium">Sophia Turner</a>
                                            <p class="mb-0 fs-13 text-body">+1 56789 12345</p>
                                        </div>
                                    </div>
                                </div>
                                <div class="d-flex align-items-center justify-content-between">
                                    <span class="badge badge-white border-gray d-inline-flex align-items-center"><span
                                            class="badge-dot bg-success me-1"></span>Marketing</span>
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
                                                    data-bs-toggle="modal" data-bs-target="#delete_modal"><i
                                                        class="icon-trash-2 me-2"></i>Delete Staff </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card flex-fill my-0">
                            <div class="card-body p-3">
                                <div
                                    class="d-flex align-items-center justify-content-between flex-wrap mb-3 pb-3 border-bottom rounded">
                                    <div class="d-flex align-items-center gap-2 flex-wrap flex-xl-nowrap">
                                        <a href="#" class="avatar avatar-rounded flex-shrink-0">
                                            <img src="@/assets/img/staffs/staff-14.jpg" class="img-fluid" alt="img" data-bs-toggle="offcanvas" data-bs-target="#view_details">
                                        </a>
                                        <div class="w-100">
                                            <a href="#" data-bs-toggle="offcanvas" data-bs-target="#view_details" class="mb-1 fw-medium">Daniel Brown</a>
                                            <p class="mb-0 fs-13 text-body">+1 43210 67890</p>
                                        </div>
                                    </div>
                                </div>
                                <div class="d-flex align-items-center justify-content-between">
                                    <span class="badge badge-white border-gray d-inline-flex align-items-center"><span
                                            class="badge-dot bg-info me-1"></span>Attendant</span>
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
                                                    data-bs-toggle="modal" data-bs-target="#delete_modal"><i
                                                        class="icon-trash-2 me-2"></i>Delete Staff </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card flex-fill my-0">
                            <div class="card-body p-3">
                                <div
                                    class="d-flex align-items-center justify-content-between flex-wrap mb-3 pb-3 border-bottom rounded">
                                    <div class="d-flex align-items-center gap-2 flex-wrap flex-xl-nowrap">
                                        <a href="#" class="avatar avatar-rounded flex-shrink-0">
                                            <img src="@/assets/img/staffs/staff-15.jpg" data-bs-toggle="offcanvas" data-bs-target="#view_details" class="img-fluid" alt="img">
                                        </a>
                                        <div class="w-100">
                                            <a href="#" data-bs-toggle="offcanvas" data-bs-target="#view_details" class="mb-1 fw-medium">Olivia Smith</a>
                                            <p class="mb-0 fs-13 text-body">+1 98765 43210</p>
                                        </div>
                                    </div>
                                </div>
                                <div class="d-flex align-items-center justify-content-between">
                                    <span class="badge badge-white border-gray d-inline-flex align-items-center"><span
                                            class="badge-dot bg-info me-1"></span>Removal Expert</span>
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
                                                    data-bs-toggle="modal" data-bs-target="#delete_modal"><i
                                                        class="icon-trash-2 me-2"></i>Delete Staff </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="d-flex justify-content-center"><button type="button"
                        class="btn btn-primary d-flex align-items-center"> <i class="icon-loader me-1"></i>Load
                        More</button></div>
                <!-- Grid end -->

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
     
    <staff-modal></staff-modal>
</template>