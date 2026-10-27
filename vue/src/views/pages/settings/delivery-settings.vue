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
                                                    class="icon-bike me-2"></i>Delivery</h4>
                                        </div>

                                        <div class="card-body">

                                            <div class="card">
                                                <div class="card-body">
                                                    <div
                                                        class="form-check form-switch mb-3 d-flex align-items-center justify-content-between ps-0">
                                                        <label class="form-check-label fs-16 fw-bold text-dark"
                                                            for="switchCheckChecked">Free Delivery</label>
                                                        <input class="form-check-input" type="checkbox" role="switch"
                                                            id="switchCheckChecked" checked>
                                                    </div>
                                                    <div class="mb-0">
                                                        <label class="form-label">Free Delivery Over ($)<span
                                                                class="text-danger ms-1">*</span></label>
                                                        <input type="text" class="form-control">
                                                    </div>
                                                </div><!-- card-body -->
                                            </div><!-- card end -->

                                            <div class="card">
                                                <div class="card-body">
                                                    <div
                                                        class="form-check form-switch mb-3 d-flex align-items-center justify-content-between ps-0">
                                                        <label class="form-check-label fs-16 fw-bold text-dark"
                                                            for="switchCheckChecked1">Fixed Delivery Charges</label>
                                                        <input class="form-check-input" type="checkbox" role="switch"
                                                            id="switchCheckChecked1" checked>
                                                    </div>
                                                    <div class="mb-0">
                                                        <label class="form-label">Fixed Delivery Amount ($)<span
                                                                class="text-danger ms-1">*</span></label>
                                                        <input type="text" class="form-control">
                                                    </div>
                                                </div><!-- card-body -->
                                            </div><!-- card end -->

                                            <div class="card mb-0">
                                                <div class="card-body">
                                                    <div
                                                        class="form-check form-switch mb-3 d-flex align-items-center justify-content-between ps-0">
                                                        <label class="form-check-label fs-16 fw-bold text-dark"
                                                            for="switchCheckChecked2">Kilometer Based Delivery
                                                            Charges</label>
                                                        <input class="form-check-input" type="checkbox" role="switch"
                                                            id="switchCheckChecked2" checked>
                                                    </div>
                                                    <div class="mb-3">
                                                        <label class="form-label">Per KM Delivery Charge ($)<span
                                                                class="text-danger ms-1">*</span></label>
                                                        <input type="text" class="form-control">
                                                    </div>
                                                    <div class="mb-3">
                                                        <label class="form-label">Minimum Delivery Over ($)<span
                                                                class="text-danger ms-1">*</span></label>
                                                        <input type="text" class="form-control">
                                                    </div>
                                                    <div class="mb-0">
                                                        <label class="form-label">Minimum Distance for Free Delivery
                                                            (KM)<span class="text-danger ms-1">*</span></label>
                                                        <input type="text" class="form-control">
                                                    </div>
                                                </div><!-- card-body -->
                                            </div><!-- card end -->

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