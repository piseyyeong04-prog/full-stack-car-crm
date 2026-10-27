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
                                                    class="icon-bell me-2"></i>Notifications</h4>
                                        </div>

                                        <div class="card-body">

                                            <div class="card">
                                                <div class="card-body">
                                                    <div
                                                        class="form-check form-switch mb-3 d-flex align-items-center justify-content-between ps-0 pb-3 border-bottom">
                                                        <label class="form-check-label fw-medium text-dark"
                                                            for="switchCheckChecked">Mobile Push Notifications</label>
                                                        <input class="form-check-input" type="checkbox" role="switch"
                                                            id="switchCheckChecked" checked>
                                                    </div>
                                                    <div
                                                        class="form-check form-switch d-flex align-items-center justify-content-between ps-0">
                                                        <label class="form-check-label fw-medium text-dark"
                                                            for="switchCheckChecked2">Desktop Notifications</label>
                                                        <input class="form-check-input" type="checkbox" role="switch"
                                                            id="switchCheckChecked2" checked>
                                                    </div>
                                                </div><!-- card-body -->
                                            </div><!-- card end -->

                                            <h6 class="mb-3">General Notification</h6>

                                            <div class="card mb-0">
                                                <div class="card-body">
                                                    <div
                                                        class="d-flex align-items-center justify-content-between mb-3 border-bottom">
                                                        <h6 class="fs-14 fw-medium mb-3">Payment</h6>
                                                        <div class="d-flex align-items-center gap-4">
                                                            <div class="form-check form-switch mb-3">
                                                                <input class="form-check-input" type="checkbox"
                                                                    role="switch" id="switchCheckChecked3" checked>
                                                                <label class="form-check-label"
                                                                    for="switchCheckChecked3">Push</label>
                                                            </div>
                                                            <div class="form-check form-switch mb-3">
                                                                <input class="form-check-input" type="checkbox"
                                                                    role="switch" id="switchCheckChecked4" checked>
                                                                <label class="form-check-label"
                                                                    for="switchCheckChecked4">SMS</label>
                                                            </div>
                                                            <div class="form-check form-switch mb-3">
                                                                <input class="form-check-input" type="checkbox"
                                                                    role="switch" id="switchCheckChecked5" checked>
                                                                <label class="form-check-label"
                                                                    for="switchCheckChecked5">Email</label>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div
                                                        class="d-flex align-items-center justify-content-between mb-3 border-bottom">
                                                        <h6 class="fs-14 fw-medium mb-3">Transaction</h6>
                                                        <div class="d-flex align-items-center gap-4">
                                                            <div class="form-check form-switch mb-3">
                                                                <input class="form-check-input" type="checkbox"
                                                                    role="switch" id="switchCheckChecked6" checked>
                                                                <label class="form-check-label"
                                                                    for="switchCheckChecked6">Push</label>
                                                            </div>
                                                            <div class="form-check form-switch mb-3">
                                                                <input class="form-check-input" type="checkbox"
                                                                    role="switch" id="switchCheckChecked7" checked>
                                                                <label class="form-check-label"
                                                                    for="switchCheckChecked7">SMS</label>
                                                            </div>
                                                            <div class="form-check form-switch mb-3">
                                                                <input class="form-check-input" type="checkbox"
                                                                    role="switch" id="switchCheckChecked8">
                                                                <label class="form-check-label"
                                                                    for="switchCheckChecked8">Email</label>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div
                                                        class="d-flex align-items-center justify-content-between mb-3 border-bottom">
                                                        <h6 class="fs-14 fw-medium mb-3">Activity</h6>
                                                        <div class="d-flex align-items-center gap-4">
                                                            <div class="form-check form-switch mb-3">
                                                                <input class="form-check-input" type="checkbox"
                                                                    role="switch" id="switchCheckChecked9" checked>
                                                                <label class="form-check-label"
                                                                    for="switchCheckChecked9">Push</label>
                                                            </div>
                                                            <div class="form-check form-switch mb-3">
                                                                <input class="form-check-input" type="checkbox"
                                                                    role="switch" id="switchCheckChecked10" checked>
                                                                <label class="form-check-label"
                                                                    for="switchCheckChecked10">SMS</label>
                                                            </div>
                                                            <div class="form-check form-switch mb-3">
                                                                <input class="form-check-input" type="checkbox"
                                                                    role="switch" id="switchCheckChecked11" checked>
                                                                <label class="form-check-label"
                                                                    for="switchCheckChecked11">Email</label>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="d-flex align-items-center justify-content-between">
                                                        <h6 class="fs-14 fw-medium">Account</h6>
                                                        <div class="d-flex align-items-center gap-4">
                                                            <div class="form-check form-switch">
                                                                <input class="form-check-input" type="checkbox"
                                                                    role="switch" id="switchCheckChecked12" checked>
                                                                <label class="form-check-label"
                                                                    for="switchCheckChecked12">Push</label>
                                                            </div>
                                                            <div class="form-check form-switch">
                                                                <input class="form-check-input" type="checkbox"
                                                                    role="switch" id="switchCheckChecked13" checked>
                                                                <label class="form-check-label"
                                                                    for="switchCheckChecked13">SMS</label>
                                                            </div>
                                                            <div class="form-check form-switch">
                                                                <input class="form-check-input" type="checkbox"
                                                                    role="switch" id="switchCheckChecked14" checked>
                                                                <label class="form-check-label"
                                                                    for="switchCheckChecked14">Email</label>
                                                            </div>
                                                        </div>
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