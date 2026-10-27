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

                <!-- row start -->
                <div class="row justify-content-center">

                    <div class="col-xl-10">

                        <!-- row start -->
                        <div class="row justify-content-center">
                            <div class="col-lg-3">
                                <settings-sidebar></settings-sidebar>
                            </div>
                            <div class="col-lg-9">

                                <form>

                                    <!-- card start -->
                                    <div class="card mb-0">

                                        <div class="card-header">
                                            <h4 class="d-inline-flex align-items-center mb-0"><i
                                                    class="icon-printer me-2"></i>Payment Types</h4>
                                        </div>

                                        <div class="card-body">

                                            <!-- start row -->
                                            <div class="row">

                                                <div class="col-md-6 col-lg-4">
                                                    <div class="card flex-fill">
                                                        <div class="card-body">
                                                            <div
                                                                class="w-100 d-flex justify-content-between align-items-center">
                                                                <div class="d-flex align-items-center">
                                                                    <div
                                                                        class="avatar avatar-md bg-dark p-2 me-2 flex-shrink-0">
                                                                        <i
                                                                            class="icon-badge-dollar-sign fs-20 text-primary"></i>
                                                                    </div>
                                                                    <p class="mb-0 text-dark">Cash</p>
                                                                </div>
                                                                <div class="d-flex align-items-center">
                                                                    <div class="form-check form-switch mb-0">
                                                                        <label class="form-check-label"
                                                                            for="switchCheckChecked"></label>
                                                                        <input class="form-check-input" type="checkbox"
                                                                            role="switch" id="switchCheckChecked"
                                                                            checked>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div> <!-- end col -->

                                                <div class="col-md-6 col-lg-4">
                                                    <div class="card flex-fill">
                                                        <div class="card-body">
                                                            <div
                                                                class="w-100 d-flex justify-content-between align-items-center">
                                                                <div class="d-flex align-items-center">
                                                                    <div
                                                                        class="avatar avatar-md bg-dark p-2 me-2 flex-shrink-0">
                                                                        <i
                                                                            class="icon-credit-card fs-20 text-primary"></i>
                                                                    </div>
                                                                    <p class="mb-0 text-dark">Card</p>
                                                                </div>
                                                                <div class="d-flex align-items-center">
                                                                    <div class="form-check form-switch mb-0">
                                                                        <label class="form-check-label"
                                                                            for="switchCheckChecked1"></label>
                                                                        <input class="form-check-input" type="checkbox"
                                                                            role="switch" id="switchCheckChecked1"
                                                                            checked>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div> <!-- end col -->

                                                <div class="col-md-6 col-lg-4">
                                                    <div class="card flex-fill">
                                                        <div class="card-body">
                                                            <div
                                                                class="w-100 d-flex justify-content-between align-items-center">
                                                                <div class="d-flex align-items-center">
                                                                    <div
                                                                        class="avatar avatar-md bg-dark p-2 me-2 flex-shrink-0">
                                                                        <i class="icon-wallet fs-20 text-primary"></i>
                                                                    </div>
                                                                    <p class="mb-0 text-dark">Wallet</p>
                                                                </div>
                                                                <div class="d-flex align-items-center">
                                                                    <div class="form-check form-switch mb-0">
                                                                        <label class="form-check-label"
                                                                            for="switchCheckChecked2"></label>
                                                                        <input class="form-check-input" type="checkbox"
                                                                            role="switch" id="switchCheckChecked2"
                                                                            checked>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div> <!-- end col -->

                                                <div class="col-md-6 col-lg-4">
                                                    <div class="card flex-fill">
                                                        <div class="card-body">
                                                            <div
                                                                class="w-100 d-flex justify-content-between align-items-center">
                                                                <div class="d-flex align-items-center">
                                                                    <div
                                                                        class="avatar avatar-md bg-dark p-2 me-2 flex-shrink-0">
                                                                        <i
                                                                            class="icon-russian-ruble fs-20 text-primary"></i>
                                                                    </div>
                                                                    <p class="mb-0 text-dark">Paypal</p>
                                                                </div>
                                                                <div class="d-flex align-items-center">
                                                                    <div class="form-check form-switch mb-0">
                                                                        <label class="form-check-label"
                                                                            for="switchCheckChecked3"></label>
                                                                        <input class="form-check-input" type="checkbox"
                                                                            role="switch" id="switchCheckChecked3"
                                                                            checked>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div> <!-- end col -->

                                                <div class="col-md-6 col-lg-4">
                                                    <div class="card flex-fill">
                                                        <div class="card-body">
                                                            <div
                                                                class="w-100 d-flex justify-content-between align-items-center">
                                                                <div class="d-flex align-items-center">
                                                                    <div
                                                                        class="avatar avatar-md bg-dark p-2 me-2 flex-shrink-0">
                                                                        <i class="icon-qr-code fs-20 text-primary"></i>
                                                                    </div>
                                                                    <p class="mb-0 text-dark">QR Reader</p>
                                                                </div>
                                                                <div class="d-flex align-items-center">
                                                                    <div class="form-check form-switch mb-0">
                                                                        <label class="form-check-label"
                                                                            for="switchCheckChecked4"></label>
                                                                        <input class="form-check-input" type="checkbox"
                                                                            role="switch" id="switchCheckChecked4"
                                                                            checked>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div> <!-- end col -->

                                                <div class="col-md-6 col-lg-4">
                                                    <div class="card flex-fill">
                                                        <div class="card-body">
                                                            <div
                                                                class="w-100 d-flex justify-content-between align-items-center">
                                                                <div class="d-flex align-items-center">
                                                                    <div
                                                                        class="avatar avatar-md bg-dark p-2 me-2 flex-shrink-0">
                                                                        <i
                                                                            class="icon-receipt-text fs-20 text-primary"></i>
                                                                    </div>
                                                                    <p class="mb-0 text-dark">Card Reader</p>
                                                                </div>
                                                                <div class="d-flex align-items-center">
                                                                    <div class="form-check form-switch mb-0">
                                                                        <label class="form-check-label"
                                                                            for="switchCheckChecked5"></label>
                                                                        <input class="form-check-input" type="checkbox"
                                                                            role="switch" id="switchCheckChecked5"
                                                                            checked>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div> <!-- end col -->

                                                <div class="col-md-6 col-lg-4">
                                                    <div class="card flex-fill mb-0">
                                                        <div class="card-body">
                                                            <div
                                                                class="w-100 d-flex justify-content-between align-items-center">
                                                                <div class="d-flex align-items-center">
                                                                    <div
                                                                        class="avatar avatar-md bg-dark p-2 me-2 flex-shrink-0">
                                                                        <i class="icon-landmark fs-20 text-primary"></i>
                                                                    </div>
                                                                    <p class="mb-0 text-dark">Bank</p>
                                                                </div>
                                                                <div class="d-flex align-items-center">
                                                                    <div class="form-check form-switch mb-0">
                                                                        <label class="form-check-label"
                                                                            for="switchCheckChecked6"></label>
                                                                        <input class="form-check-input" type="checkbox"
                                                                            role="switch" id="switchCheckChecked6"
                                                                            checked>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div> <!-- end col -->

                                            </div>
                                            <!-- end row -->

                                        </div> <!-- end card body -->

                                        <div class="card-footer">
                                            <div class="d-flex align-items-center justify-content-end gap-2 pt-1">
                                                <button type="button" class="btn btn-dark"><i
                                                        class="icon-x me-1"></i>Cancel</button>
                                                <button type="submit" class="btn btn-primary"><i
                                                        class="icon-circle-check me-1"></i>Submit</button>
                                            </div>
                                        </div>
                                    </div>
                                    <!-- card end -->
                                </form>

                            </div>
                        </div>
                        <!-- row end -->

                    </div><!-- col-end -->

                </div>
                <!-- row end -->

            </div>
            <!-- End Content Wrap -->

        </div>
        <!-- End Content -->

    </div>
    <!-- ========================
        End Page Content
    ========================= -->
</template>