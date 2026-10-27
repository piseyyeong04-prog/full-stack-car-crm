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
                                class="px-3 py-1 fw-semibold d-inline-flex align-items-center rounded-pill"><i
                                    class="icon-list me-2"></i>List View</router-link>
                            <router-link :to="lp('/drivers/drivers-grid')"
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
                            data-bs-target="#add_driver"><i class="icon-plus me-1"></i>New Driver</a>
                    </div>
                </div>
                <!-- End Page Header -->

                <!-- Grid start -->
                <div class="row row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4 row-cols-xxl-5">
                    <div class="col">
                        <div class="card flex-fill">
                            <div class="card-body p-0">
                                <div class="d-flex align-items-center justify-content-between flex-wrap">
                                    <img src="@/assets/img/drivers/driver-01.jpg" class="img-fluid rounded w-100"
                                        alt="img">
                                </div>
                                <div class="p-3">
                                    <div class="mb-3 d-flex align-items-center justify-content-between">
                                        <div class="ms-2">
                                            <h6 class="fw-semibold mb-1 fs-14"><a href="#" class="text-dark"
                                                    data-bs-toggle="offcanvas" data-bs-target="#view_details">Benjamin
                                                    Scott</a></h6>
                                            <p class="fs-13 mb-0 d-flex align-items-center"><i
                                                    class="icon-phone me-1"></i>+1 54544 54587</p>
                                        </div>
                                        <span class="badge badge-soft-success">Active</span>
                                    </div>
                                    <div class="d-flex align-items-center justify-content-between">
                                        <span
                                            class="badge badge-white border-gray d-inline-flex align-items-center"><span
                                                class="badge-dot bg-success me-1"></span>Online</span>
                                        <div class="dropstart">
                                            <button class="btn btn-icon btn-white" type="button"
                                                data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false"
                                                aria-label="Actions">
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
                                                        data-bs-toggle="modal" data-bs-target="#delete_modal"><i
                                                            class="icon-trash-2 me-2"></i>Delete Driver </a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card flex-fill">
                            <div class="card-body p-0">
                                <div class="d-flex align-items-center justify-content-between flex-wrap">
                                    <img src="@/assets/img/drivers/driver-02.jpg" class="img-fluid rounded w-100"
                                        alt="img">
                                </div>
                                <div class="p-3">
                                    <div class="mb-3 d-flex align-items-center justify-content-between">
                                        <div class="ms-2">
                                            <h6 class="fw-semibold mb-1 fs-14"><a href="#" class="text-dark"
                                                    data-bs-toggle="offcanvas" data-bs-target="#view_details">Matthew
                                                    Parker</a></h6>
                                            <p class="fs-13 mb-0 d-flex align-items-center"><i
                                                    class="icon-phone me-1"></i>+1 45478 54588</p>
                                        </div>
                                        <span class="badge badge-soft-success">Active</span>
                                    </div>
                                    <div class="d-flex align-items-center justify-content-between">
                                        <span
                                            class="badge badge-white border-gray d-inline-flex align-items-center"><span
                                                class="badge-dot bg-success me-1"></span>Online</span>
                                        <div class="dropstart">
                                            <button class="btn btn-icon btn-white" type="button"
                                                data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false"
                                                aria-label="Actions">
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
                                                        data-bs-toggle="modal" data-bs-target="#delete_modal"><i
                                                            class="icon-trash-2 me-2"></i>Delete Driver </a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card flex-fill">
                            <div class="card-body p-0">
                                <div class="d-flex align-items-center justify-content-between flex-wrap">
                                    <img src="@/assets/img/drivers/driver-03.jpg" class="img-fluid rounded w-100"
                                        alt="img">
                                </div>
                                <div class="p-3">
                                    <div class="mb-3 d-flex align-items-center justify-content-between">
                                        <div class="ms-2">
                                            <h6 class="fw-semibold mb-1 fs-14"><a href="#" class="text-dark"
                                                    data-bs-toggle="offcanvas" data-bs-target="#view_details">Samuel
                                                    Harris</a></h6>
                                            <p class="fs-13 mb-0 d-flex align-items-center"><i
                                                    class="icon-phone me-1"></i>+1 33658 54589</p>
                                        </div>
                                        <span class="badge badge-soft-success">Active</span>
                                    </div>
                                    <div class="d-flex align-items-center justify-content-between">
                                        <span
                                            class="badge badge-white border-gray d-inline-flex align-items-center"><span
                                                class="badge-dot bg-success me-1"></span>Online</span>
                                        <div class="dropstart">
                                            <button class="btn btn-icon btn-white" type="button"
                                                data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false"
                                                aria-label="Actions">
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
                                                        data-bs-toggle="modal" data-bs-target="#delete_modal"><i
                                                            class="icon-trash-2 me-2"></i>Delete Driver </a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card flex-fill">
                            <div class="card-body p-0">
                                <div class="d-flex align-items-center justify-content-between flex-wrap">
                                    <img src="@/assets/img/drivers/driver-04.jpg" class="img-fluid rounded w-100"
                                        alt="img">
                                </div>
                                <div class="p-3">
                                    <div class="mb-3 d-flex align-items-center justify-content-between">
                                        <div class="ms-2">
                                            <h6 class="fw-semibold mb-1 fs-14"><a href="#" class="text-dark"
                                                    data-bs-toggle="offcanvas" data-bs-target="#view_details">Riley
                                                    Cooper</a></h6>
                                            <p class="fs-13 mb-0 d-flex align-items-center"><i
                                                    class="icon-phone me-1"></i>+1 47854 54590</p>
                                        </div>
                                        <span class="badge badge-soft-success">Active</span>
                                    </div>
                                    <div class="d-flex align-items-center justify-content-between">
                                        <span
                                            class="badge badge-white border-gray d-inline-flex align-items-center"><span
                                                class="badge-dot bg-success me-1"></span>Online</span>
                                        <div class="dropstart">
                                            <button class="btn btn-icon btn-white" type="button"
                                                data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false"
                                                aria-label="Actions">
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
                                                        data-bs-toggle="modal" data-bs-target="#delete_modal"><i
                                                            class="icon-trash-2 me-2"></i>Delete Driver </a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card flex-fill">
                            <div class="card-body p-0">
                                <div class="d-flex align-items-center justify-content-between flex-wrap">
                                    <img src="@/assets/img/drivers/driver-05.jpg" class="img-fluid rounded w-100"
                                        alt="img">
                                </div>
                                <div class="p-3">
                                    <div class="mb-3 d-flex align-items-center justify-content-between">
                                        <div class="ms-2">
                                            <h6 class="fw-semibold mb-1 fs-14"><a href="#" class="text-dark"
                                                    data-bs-toggle="offcanvas" data-bs-target="#view_details">Avery
                                                    Parker</a></h6>
                                            <p class="fs-13 mb-0 d-flex align-items-center"><i
                                                    class="icon-phone me-1"></i>+1 58974 54591</p>
                                        </div>
                                        <span class="badge badge-soft-success">Active</span>
                                    </div>
                                    <div class="d-flex align-items-center justify-content-between">
                                        <span
                                            class="badge badge-white border-gray d-inline-flex align-items-center"><span
                                                class="badge-dot bg-danger me-1"></span>Offline</span>
                                        <div class="dropstart">
                                            <button class="btn btn-icon btn-white" type="button"
                                                data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false"
                                                aria-label="Actions">
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
                                                        data-bs-toggle="modal" data-bs-target="#delete_modal"><i
                                                            class="icon-trash-2 me-2"></i>Delete Driver </a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card flex-fill">
                            <div class="card-body p-0">
                                <div class="d-flex align-items-center justify-content-between flex-wrap">
                                    <img src="@/assets/img/drivers/driver-06.jpg" class="img-fluid rounded w-100"
                                        alt="img">
                                </div>
                                <div class="p-3">
                                    <div class="mb-3 d-flex align-items-center justify-content-between">
                                        <div class="ms-2">
                                            <h6 class="fw-semibold mb-1 fs-14"><a href="#" class="text-dark"
                                                    data-bs-toggle="offcanvas" data-bs-target="#view_details">Quinn
                                                    Bailey</a></h6>
                                            <p class="fs-13 mb-0 d-flex align-items-center"><i
                                                    class="icon-phone me-1"></i>+1 96587 54592</p>
                                        </div>
                                        <span class="badge badge-soft-success">Active</span>
                                    </div>
                                    <div class="d-flex align-items-center justify-content-between">
                                        <span
                                            class="badge badge-white border-gray d-inline-flex align-items-center"><span
                                                class="badge-dot bg-success me-1"></span>Online</span>
                                        <div class="dropstart">
                                            <button class="btn btn-icon btn-white" type="button"
                                                data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false"
                                                aria-label="Actions">
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
                                                        data-bs-toggle="modal" data-bs-target="#delete_modal"><i
                                                            class="icon-trash-2 me-2"></i>Delete Driver </a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card flex-fill">
                            <div class="card-body p-0">
                                <div class="d-flex align-items-center justify-content-between flex-wrap">
                                    <img src="@/assets/img/drivers/driver-07.jpg" class="img-fluid rounded w-100"
                                        alt="img">
                                </div>
                                <div class="p-3">
                                    <div class="mb-3 d-flex align-items-center justify-content-between">
                                        <div class="ms-2">
                                            <h6 class="fw-semibold mb-1 fs-14"><a href="#" class="text-dark"
                                                    data-bs-toggle="offcanvas" data-bs-target="#view_details">Cameron
                                                    Lee</a></h6>
                                            <p class="fs-13 mb-0 d-flex align-items-center"><i
                                                    class="icon-phone me-1"></i>+1 31245 54593</p>
                                        </div>
                                        <span class="badge badge-soft-success">Active</span>
                                    </div>
                                    <div class="d-flex align-items-center justify-content-between">
                                        <span
                                            class="badge badge-white border-gray d-inline-flex align-items-center"><span
                                                class="badge-dot bg-success me-1"></span>Online</span>
                                        <div class="dropstart">
                                            <button class="btn btn-icon btn-white" type="button"
                                                data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false"
                                                aria-label="Actions">
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
                                                        data-bs-toggle="modal" data-bs-target="#delete_modal"><i
                                                            class="icon-trash-2 me-2"></i>Delete Driver </a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card flex-fill">
                            <div class="card-body p-0">
                                <div class="d-flex align-items-center justify-content-between flex-wrap">
                                    <img src="@/assets/img/drivers/driver-08.jpg" class="img-fluid rounded w-100"
                                        alt="img">
                                </div>
                                <div class="p-3">
                                    <div class="mb-3 d-flex align-items-center justify-content-between">
                                        <div class="ms-2">
                                            <h6 class="fw-semibold mb-1 fs-14"><a href="#" class="text-dark"
                                                    data-bs-toggle="offcanvas" data-bs-target="#view_details">Jamie
                                                    Brooks</a></h6>
                                            <p class="fs-13 mb-0 d-flex align-items-center"><i
                                                    class="icon-phone me-1"></i>+1 47854 54594</p>
                                        </div>
                                        <span class="badge badge-soft-success">Active</span>
                                    </div>
                                    <div class="d-flex align-items-center justify-content-between">
                                        <span
                                            class="badge badge-white border-gray d-inline-flex align-items-center"><span
                                                class="badge-dot bg-success me-1"></span>Online</span>
                                        <div class="dropstart">
                                            <button class="btn btn-icon btn-white" type="button"
                                                data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false"
                                                aria-label="Actions">
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
                                                        data-bs-toggle="modal" data-bs-target="#delete_modal"><i
                                                            class="icon-trash-2 me-2"></i>Delete Driver </a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card flex-fill">
                            <div class="card-body p-0">
                                <div class="d-flex align-items-center justify-content-between flex-wrap">
                                    <img src="@/assets/img/drivers/driver-09.jpg" class="img-fluid rounded w-100"
                                        alt="img">
                                </div>
                                <div class="p-3">
                                    <div class="mb-3 d-flex align-items-center justify-content-between">
                                        <div class="ms-2">
                                            <h6 class="fw-semibold mb-1 fs-14"><a href="#" class="text-dark"
                                                    data-bs-toggle="offcanvas" data-bs-target="#view_details">Alex
                                                    Campbell</a></h6>
                                            <p class="fs-13 mb-0 d-flex align-items-center"><i
                                                    class="icon-phone me-1"></i>+1 14524 54595</p>
                                        </div>
                                        <span class="badge badge-soft-success">Active</span>
                                    </div>
                                    <div class="d-flex align-items-center justify-content-between">
                                        <span
                                            class="badge badge-white border-gray d-inline-flex align-items-center"><span
                                                class="badge-dot bg-success me-1"></span>Online</span>
                                        <div class="dropstart">
                                            <button class="btn btn-icon btn-white" type="button"
                                                data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false"
                                                aria-label="Actions">
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
                                                        data-bs-toggle="modal" data-bs-target="#delete_modal"><i
                                                            class="icon-trash-2 me-2"></i>Delete Driver </a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card flex-fill">
                            <div class="card-body p-0">
                                <div class="d-flex align-items-center justify-content-between flex-wrap">
                                    <img src="@/assets/img/drivers/driver-10.jpg" class="img-fluid rounded w-100"
                                        alt="img">
                                </div>
                                <div class="p-3">
                                    <div class="mb-3 d-flex align-items-center justify-content-between">
                                        <div class="ms-2">
                                            <h6 class="fw-semibold mb-1 fs-14"><a href="#" class="text-dark"
                                                    data-bs-toggle="offcanvas" data-bs-target="#view_details">Casey
                                                    Adams</a></h6>
                                            <p class="fs-13 mb-0 d-flex align-items-center"><i
                                                    class="icon-phone me-1"></i>+1 22145 54596</p>
                                        </div>
                                        <span class="badge badge-soft-success">Active</span>
                                    </div>
                                    <div class="d-flex align-items-center justify-content-between">
                                        <span
                                            class="badge badge-white border-gray d-inline-flex align-items-center"><span
                                                class="badge-dot bg-success me-1"></span>Offline</span>
                                        <div class="dropstart">
                                            <button class="btn btn-icon btn-white" type="button"
                                                data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false"
                                                aria-label="Actions">
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
                                                        data-bs-toggle="modal" data-bs-target="#delete_modal"><i
                                                            class="icon-trash-2 me-2"></i>Delete Driver </a>
                                                </li>
                                            </ul>
                                        </div>
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
                        <router-link :to="lp('/drivers/drivers-grid')" class="btn btn-danger w-100">Delete</router-link>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- End Delete Modal  -->
    <drivers-modal></drivers-modal>
</template>