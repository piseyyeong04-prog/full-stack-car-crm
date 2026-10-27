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
                                                    class="icon-printer me-2"></i>Print Settings</h4>
                                        </div>

                                        <div class="card-body">

                                            <!-- start row -->
                                            <div class="row">

                                                <div class="col-md-12">
                                                    <div class="mb-3">
                                                        <div
                                                            class="form-check form-switch mb-3 d-flex align-items-center justify-content-between ps-0">
                                                            <label class="form-check-label"
                                                                for="switchCheckChecked">Enable Print</label>
                                                            <input class="form-check-input" type="checkbox"
                                                                role="switch" id="switchCheckChecked" checked>
                                                        </div>
                                                        <div
                                                            class="form-check form-switch mb-3 d-flex align-items-center justify-content-between ps-0">
                                                            <label class="form-check-label"
                                                                for="switchCheckChecked2">Show Store Details</label>
                                                            <input class="form-check-input" type="checkbox"
                                                                role="switch" id="switchCheckChecked2" checked>
                                                        </div>
                                                        <div
                                                            class="form-check form-switch mb-3 d-flex align-items-center justify-content-between ps-0">
                                                            <label class="form-check-label"
                                                                for="switchCheckChecked3">Show Customer Details</label>
                                                            <input class="form-check-input" type="checkbox"
                                                                role="switch" id="switchCheckChecked3" checked>
                                                        </div>
                                                    </div>
                                                </div> <!-- end col -->

                                                <div class="col-md-12">
                                                    <div class="mb-3">
                                                        <label class="form-label">Format (Page Sizes)<span
                                                                class="text-danger ms-1">*</span></label>
                                                        <vue-select :options="Format" v-model="selected"
                                                            placeholder="Select" />
                                                    </div>
                                                </div> <!-- end col -->

                                                <div class="col-md-12">
                                                    <div class="mb-3">
                                                        <label class="form-label">Header</label>
                                                        <textarea class="form-control rounded"></textarea>
                                                    </div>
                                                </div> <!-- end col -->

                                                <div class="col-md-12">
                                                    <div class="mb-3">
                                                        <label class="form-label">Footer</label>
                                                        <textarea class="form-control rounded"></textarea>
                                                    </div>
                                                </div> <!-- end col -->

                                                <div class="col-md-12">
                                                    <div class="mb-3">
                                                        <div
                                                            class="form-check form-switch d-flex align-items-center justify-content-between mb-3 ps-0">
                                                            <label class="form-check-label"
                                                                for="switchCheckChecked4">Show Notes</label>
                                                            <input class="form-check-input" type="checkbox"
                                                                role="switch" id="switchCheckChecked4" checked>
                                                        </div>
                                                        <div
                                                            class="form-check form-switch d-flex align-items-center justify-content-between mb-3 ps-0">
                                                            <label class="form-check-label"
                                                                for="switchCheckChecked5">Print Tokens</label>
                                                            <input class="form-check-input" type="checkbox"
                                                                role="switch" id="switchCheckChecked5" checked>
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
<script>
export default {
    data() {
        return {
            selected: null,
            Format: [
                { label: 'Select', value: 'Select' },
                { label: 'A1', value: 'A1' },
                { label: 'A2', value: 'A2' },
                { label: 'A3', value: 'A3' },
                { label: 'A4', value: 'A4' },
                { label: 'A5', value: 'A5' },
            ],
        };
    },
};
</script>