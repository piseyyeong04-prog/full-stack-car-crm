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

                                <!-- card start -->
                                <div class="card mb-0">

                                    <div class="card-header">
                                        <h4 class="d-inline-flex align-items-center mb-0"><i
                                                class="icon-pin me-2"></i>Integrations / API</h4>
                                    </div>

                                    <div class="card-body">

                                        <!-- start row -->
                                        <div class="row">

                                            <div class="col-md-12">
                                                <div class="card payment-type flex-fill">
                                                    <div class="card-body">
                                                        <div
                                                            class="w-100 d-flex justify-content-between align-items-center">
                                                            <div class="d-flex align-items-center">
                                                                <div
                                                                    class="avatar avatar-lg bg-dark rounded-circle border p-2 me-2 flex-shrink-0">
                                                                    <img src="@/assets/img/icons/mail-icon.svg"
                                                                        alt="Img">
                                                                </div>
                                                                <div>
                                                                    <h6 class="fs-14 fw-semibold mb-1">Gmail</h6>
                                                                    <p class="mb-0">RESTful API you can use to send,
                                                                        receive, search, label, archive emails, <br>
                                                                        manage settings in Gmail mailboxes.</p>
                                                                </div>
                                                            </div>
                                                            <div class="d-flex align-items-center">
                                                                <div class="form-check form-switch mb-0">
                                                                    <label class="form-check-label"
                                                                        for="switchCheckChecked"></label>
                                                                    <input class="form-check-input" type="checkbox"
                                                                        role="switch" id="switchCheckChecked" checked>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div> <!-- end col -->

                                            <div class="col-md-12">
                                                <div class="card payment-type flex-fill">
                                                    <div class="card-body">
                                                        <div
                                                            class="w-100 d-flex justify-content-between align-items-center">
                                                            <div class="d-flex align-items-center">
                                                                <div
                                                                    class="avatar avatar-lg bg-dark rounded-circle border p-2 me-2 flex-shrink-0">
                                                                    <img src="@/assets/img/icons/gupshup.svg" alt="Img">
                                                                </div>
                                                                <div>
                                                                    <h6 class="fs-14 fw-semibold mb-1">Gupshup</h6>
                                                                    <p class="mb-0">Messaging platform (SMS, WhatsApp,
                                                                        RCS) with presence</p>
                                                                </div>
                                                            </div>
                                                            <div class="d-flex align-items-center">
                                                                <div class="form-check form-switch mb-0">
                                                                    <label class="form-check-label"
                                                                        for="switchCheckChecked2"></label>
                                                                    <input class="form-check-input" type="checkbox"
                                                                        role="switch" id="switchCheckChecked2">
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div> <!-- end col -->

                                            <div class="col-md-12">
                                                <div class="card payment-type flex-fill mb-0">
                                                    <div class="card-body">
                                                        <div
                                                            class="w-100 d-flex justify-content-between align-items-center">
                                                            <div class="d-flex align-items-center">
                                                                <div
                                                                    class="avatar avatar-lg bg-dark rounded-circle border p-2 me-2 flex-shrink-0">
                                                                    <img src="@/assets/img/icons/print-node.svg"
                                                                        alt="Img">
                                                                </div>
                                                                <div>
                                                                    <h6 class="fs-14 fw-semibold mb-1">PrintNode</h6>
                                                                    <p class="mb-0">Middleware agents for cloud-to-local
                                                                        printing.</p>
                                                                </div>
                                                            </div>
                                                            <div class="d-flex align-items-center">
                                                                <div class="form-check form-switch mb-0">
                                                                    <label class="form-check-label"
                                                                        for="switchCheckChecked3"></label>
                                                                    <input class="form-check-input" type="checkbox"
                                                                        role="switch" id="switchCheckChecked3" checked>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div> <!-- end col -->

                                        </div>
                                        <!-- end row -->

                                    </div> <!-- end card body -->

                                </div>
                                <!-- card end -->

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