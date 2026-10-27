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

                <!-- roe start -->
                <div class="row justify-content-center">

                    <div class="col-xl-10">
                        <!-- row start -->
                        <div class="row justify-content-center">
                            <div class="col-lg-3">
                                <settings-sidebar></settings-sidebar>
                            </div>
                            <div class="col-lg-9">

                                <!-- card start -->
                                <div class="card mb-0">

                                    <div class="card-header">
                                        <div class="d-flex align-items-center justify-content-between">
                                            <h4 class="d-inline-flex align-items-center mb-0"><i
                                                    class="icon-diamond-percent me-2"></i>Tax</h4>
                                            <a href="#" class="btn btn-primary d-inline-flex align-items-center"
                                                data-bs-toggle="modal" data-bs-target="#add_tax"><i
                                                    class="icon-circle-plus me-1"></i>New Tax</a>
                                        </div>
                                    </div>

                                    <div class="card-body">

                                        <!-- table start -->
                                        <div class="table-responsive table-nowrap">
                                            <table class="table mb-0 border">
                                                <thead>
                                                    <tr>
                                                        <th>Tax Name</th>
                                                        <th>Rate</th>
                                                        <th>Type</th>
                                                        <th></th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <td>
                                                            <h6 class="fs-14 fw-semibold">CGST</h6>
                                                        </td>
                                                        <td>9%</td>
                                                        <td>Inclusive / Exclusive</td>
                                                        <td class="text-end">
                                                            <div class="dropstart">
                                                                <button class="btn btn-icon btn-white" type="button"
                                                                    data-bs-toggle="dropdown" aria-haspopup="true"
                                                                    aria-expanded="false" aria-label="Actions">
                                                                    <i class="icon-ellipsis-vertical"></i>
                                                                </button>
                                                                <ul class="dropdown-menu p-3">
                                                                    <li>
                                                                        <a href="#"
                                                                            class="dropdown-item rounded d-flex align-items-center"
                                                                            data-bs-toggle="modal"
                                                                            data-bs-target="#edit_tax"><i
                                                                                class="icon-pencil-line me-2"></i>Edit
                                                                            Tax</a>
                                                                    </li>
                                                                    <li>
                                                                        <a href="#"
                                                                            class="dropdown-item rounded d-flex align-items-center"
                                                                            data-bs-toggle="modal"
                                                                            data-bs-target="#delete_modal"><i
                                                                                class="icon-trash-2 me-2"></i>Delete
                                                                            Tax</a>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>
                                                            <h6 class="fs-14 fw-semibold">SGST</h6>
                                                        </td>
                                                        <td>9%</td>
                                                        <td>Inclusive / Exclusive</td>
                                                        <td class="text-end">
                                                            <div class="dropstart">
                                                                <button class="btn btn-icon btn-white" type="button"
                                                                    data-bs-toggle="dropdown" aria-haspopup="true"
                                                                    aria-expanded="false" aria-label="Actions">
                                                                    <i class="icon-ellipsis-vertical"></i>
                                                                </button>
                                                                <ul class="dropdown-menu p-3">
                                                                    <li>
                                                                        <a href="#"
                                                                            class="dropdown-item rounded d-flex align-items-center"
                                                                            data-bs-toggle="modal"
                                                                            data-bs-target="#edit_tax"><i
                                                                                class="icon-pencil-line me-2"></i>Edit
                                                                            Tax</a>
                                                                    </li>
                                                                    <li>
                                                                        <a href="#"
                                                                            class="dropdown-item rounded d-flex align-items-center"
                                                                            data-bs-toggle="modal"
                                                                            data-bs-target="#delete_modal"><i
                                                                                class="icon-trash-2 me-2"></i>Delete
                                                                            Tax</a>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>
                                                            <h6 class="fs-14 fw-semibold">IGST</h6>
                                                        </td>
                                                        <td>18%</td>
                                                        <td>Inclusive / Exclusive</td>
                                                        <td class="text-end">
                                                            <div class="dropstart">
                                                                <button class="btn btn-icon btn-white" type="button"
                                                                    data-bs-toggle="dropdown" aria-haspopup="true"
                                                                    aria-expanded="false" aria-label="Actions">
                                                                    <i class="icon-ellipsis-vertical"></i>
                                                                </button>
                                                                <ul class="dropdown-menu p-3">
                                                                    <li>
                                                                        <a href="#"
                                                                            class="dropdown-item rounded d-flex align-items-center"
                                                                            data-bs-toggle="modal"
                                                                            data-bs-target="#edit_tax"><i
                                                                                class="icon-pencil-line me-2"></i>Edit
                                                                            Tax</a>
                                                                    </li>
                                                                    <li>
                                                                        <a href="#"
                                                                            class="dropdown-item rounded d-flex align-items-center"
                                                                            data-bs-toggle="modal"
                                                                            data-bs-target="#delete_modal"><i
                                                                                class="icon-trash-2 me-2"></i>Delete
                                                                            Tax</a>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>
                                                            <h6 class="fs-14 fw-semibold">VAT</h6>
                                                        </td>
                                                        <td>10%</td>
                                                        <td>Type</td>
                                                        <td class="text-end">
                                                            <div class="dropstart">
                                                                <button class="btn btn-icon btn-white" type="button"
                                                                    data-bs-toggle="dropdown" aria-haspopup="true"
                                                                    aria-expanded="false" aria-label="Actions">
                                                                    <i class="icon-ellipsis-vertical"></i>
                                                                </button>
                                                                <ul class="dropdown-menu p-3">
                                                                    <li>
                                                                        <a href="#"
                                                                            class="dropdown-item rounded d-flex align-items-center"
                                                                            data-bs-toggle="modal"
                                                                            data-bs-target="#edit_tax"><i
                                                                                class="icon-pencil-line me-2"></i>Edit
                                                                            Tax</a>
                                                                    </li>
                                                                    <li>
                                                                        <a href="#"
                                                                            class="dropdown-item rounded d-flex align-items-center"
                                                                            data-bs-toggle="modal"
                                                                            data-bs-target="#delete_modal"><i
                                                                                class="icon-trash-2 me-2"></i>Delete
                                                                            Tax</a>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>
                                                            <h6 class="fs-14 fw-semibold">Service Tax</h6>
                                                        </td>
                                                        <td>15%</td>
                                                        <td>Exclusive</td>
                                                        <td class="text-end">
                                                            <div class="dropstart">
                                                                <button class="btn btn-icon btn-white" type="button"
                                                                    data-bs-toggle="dropdown" aria-haspopup="true"
                                                                    aria-expanded="false" aria-label="Actions">
                                                                    <i class="icon-ellipsis-vertical"></i>
                                                                </button>
                                                                <ul class="dropdown-menu p-3">
                                                                    <li>
                                                                        <a href="#"
                                                                            class="dropdown-item rounded d-flex align-items-center"
                                                                            data-bs-toggle="modal"
                                                                            data-bs-target="#edit_tax"><i
                                                                                class="icon-pencil-line me-2"></i>Edit
                                                                            Tax</a>
                                                                    </li>
                                                                    <li>
                                                                        <a href="#"
                                                                            class="dropdown-item rounded d-flex align-items-center"
                                                                            data-bs-toggle="modal"
                                                                            data-bs-target="#delete_modal"><i
                                                                                class="icon-trash-2 me-2"></i>Delete
                                                                            Tax</a>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                        <!-- table end -->

                                    </div> <!-- end card body -->
                                </div>
                                <!-- card end -->

                            </div>
                        </div>
                        <!-- row end -->
                    </div><!-- col end -->

                </div>
                <!-- end row -->



            </div>
            <!-- End Content Wrap -->

        </div>
        <!-- End Content -->

    </div>
    <!-- ========================
        End Page Content
    ========================= -->
    <tax-settings-modal></tax-settings-modal>
</template>