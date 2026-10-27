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
                                <settings-sidebar />
                            </div>
                            <div class="col-lg-9">

                                <form>

                                    <!-- card start -->
                                    <div class="card mb-0">

                                        <div class="card-header">
                                            <h4 class="d-inline-flex align-items-center mb-0"><i
                                                    class="icon-warehouse me-2"></i>Store Settings</h4>
                                        </div>

                                        <div class="card-body">

                                            <!-- start row -->
                                            <div class="row">

                                                <div class="col-xl-12">
                                                    <div class="mb-3 d-flex align-items-center flex-wrap gap-3">
                                                        <div class="avatar avatar-3xl border bg-light">
                                                            <i class="icon-images fs-28 text-dark"></i>
                                                        </div>
                                                        <div>
                                                            <label class="form-label mb-1">Upload Store Image</label>
                                                            <p class="fs-13 mb-3">Image should be with in 5 MB</p>
                                                            <div class="d-flex align-items-center">
                                                                <div
                                                                    class="btn btn-icon btn-sm btn-white rounded-circle position-relative me-2">
                                                                    <input type="file"
                                                                        class="form-control position-absolute w-100 h-100 top-0 start-0 opacity-0">
                                                                    <i class="icon-pencil-line"></i>
                                                                </div>
                                                                <a href="#"
                                                                    class="btn btn-icon btn-sm btn-white rounded-circle text-danger"><i
                                                                        class="icon-trash-2"></i></a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div> <!-- end col -->

                                                <div class="col-md-12">
                                                    <div class="mb-3">
                                                        <label class="form-label">Store Name<span
                                                                class="text-danger ms-1">*</span></label>
                                                        <input type="text" class="form-control">
                                                    </div>
                                                </div> <!-- end col -->
                                                <div class="col-md-6">
                                                    <div class="mb-3">
                                                        <label class="form-label">Address 1<span
                                                                class="text-danger ms-1">*</span></label>
                                                        <input type="text" class="form-control">
                                                    </div>
                                                </div> <!-- end col -->

                                                <div class="col-md-6">
                                                    <div class="mb-3">
                                                        <label class="form-label">Address 2</label>
                                                        <input type="text" class="form-control">
                                                    </div>
                                                </div> <!-- end col -->

                                                <div class="col-md-3">
                                                    <div class="mb-3">
                                                        <label class="form-label">Country<span
                                                                class="text-danger ms-1">*</span></label>
                                                        <vue-select :options="Country" v-model="selected"
                                                            placeholder="Select" />
                                                    </div>
                                                </div> <!-- end col -->

                                                <div class="col-md-3">
                                                    <div class="mb-3">
                                                        <label class="form-label">State<span
                                                                class="text-danger ms-1">*</span></label>
                                                        <vue-select :options="State" v-model="selectedOne"
                                                            placeholder="Select" />
                                                    </div>
                                                </div> <!-- end col -->

                                                <div class="col-md-3">
                                                    <div class="mb-3">
                                                        <label class="form-label">City<span
                                                                class="text-danger ms-1">*</span></label>
                                                        <vue-select :options="City" v-model="selectedTwo"
                                                            placeholder="Select" />
                                                    </div>
                                                </div> <!-- end col -->

                                                <div class="col-md-3">
                                                    <div class="mb-3">
                                                        <label class="form-label">Pincode<span
                                                                class="text-danger ms-1">*</span></label>
                                                        <input type="text" class="form-control">
                                                    </div>
                                                </div> <!-- end col -->


                                                <div class="col-md-4">
                                                    <div class="mb-3">
                                                        <label class="form-label">Email<span
                                                                class="text-danger ms-1">*</span></label>
                                                        <input type="email" class="form-control">
                                                    </div>
                                                </div> <!-- end col -->

                                                <div class="col-md-4">
                                                    <div class="mb-3">
                                                        <label class="form-label">Phone<span
                                                                class="text-danger ms-1">*</span></label>
                                                        <input type="tel" class="form-control" id="phone" name="phone">
                                                    </div>
                                                </div> <!-- end col -->

                                                <div class="col-md-4">
                                                    <div class="mb-3">
                                                        <label class="form-label">Currency<span
                                                                class="text-danger ms-1">*</span></label>
                                                        <vue-select :options="Currency" v-model="selectedThree"
                                                            placeholder="Select" />
                                                    </div>
                                                </div> <!-- end col -->

                                                <div class="col-md-6">
                                                    <div class="mb-3">
                                                        <div class="form-check form-switch mb-3">
                                                            <input class="form-check-input" type="checkbox"
                                                                role="switch" id="switchCheckChecked" checked>
                                                            <label class="form-check-label"
                                                                for="switchCheckChecked">Enable QR Menu</label>
                                                        </div>
                                                        <div class="form-check form-switch mb-3">
                                                            <input class="form-check-input" type="checkbox"
                                                                role="switch" id="switchCheckChecked1" checked>
                                                            <label class="form-check-label"
                                                                for="switchCheckChecked1">Enable Take Away</label>
                                                        </div>
                                                        <div class="form-check form-switch mb-3">
                                                            <input class="form-check-input" type="checkbox"
                                                                role="switch" id="switchCheckChecked2" checked>
                                                            <label class="form-check-label"
                                                                for="switchCheckChecked2">Enable Dine In</label>
                                                        </div>
                                                        <div class="form-check form-switch mb-0">
                                                            <input class="form-check-input" type="checkbox"
                                                                role="switch" id="switchCheckChecked3">
                                                            <label class="form-check-label"
                                                                for="switchCheckChecked3">Enable Reservation</label>
                                                        </div>
                                                    </div>
                                                </div> <!-- end col -->

                                                <div class="col-md-6">
                                                    <div class="mb-0">
                                                        <div class="form-check form-switch mb-3">
                                                            <input class="form-check-input" type="checkbox"
                                                                role="switch" id="switchCheckChecked4" checked>
                                                            <label class="form-check-label"
                                                                for="switchCheckChecked4">Enable Order Via QR
                                                                Menu</label>
                                                        </div>
                                                        <div class="form-check form-switch mb-3">
                                                            <input class="form-check-input" type="checkbox"
                                                                role="switch" id="switchCheckChecked5" checked>
                                                            <label class="form-check-label"
                                                                for="switchCheckChecked5">Enable Delivery</label>
                                                        </div>
                                                        <div class="form-check form-switch mb-0">
                                                            <input class="form-check-input" type="checkbox"
                                                                role="switch" id="switchCheckChecked6" checked>
                                                            <label class="form-check-label"
                                                                for="switchCheckChecked6">Enable Table</label>
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

                    </div>
                    <!-- col end -->

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
            selectedOne: null,
            selectedTwo: null,
            selectedThree: null,
            Country: [
                { label: "Select", value: "Select" },
                { label: "United States", value: "United States" },
                { label: "Canada", value: "Canada" },
                { label: "Germany", value: "Germany" },
                { label: "France", value: "France" },
            ],
            State: [
                { label: "Select", value: "Select" },
                { label: "California", value: "California" },
                { label: "New York", value: "New York" },
                { label: "Texas", value: "Texas" },
                { label: "Florida", value: "Florida" },
            ],
            City: [
                { label: "Select", value: "Select" },
                { label: "Los Angeles", value: "Los Angeles" },
                { label: "San Diego", value: "San Diego" },
                { label: "Fresno", value: "Fresno" },
                { label: "San Francisco", value: "San Francisco" },
            ],
            Currency: [
                { label: "Select", value: "Select" },
                { label: "USD", value: "USD" },
                { label: "AED", value: "AED" },
                { label: "INR", value: "INR" },
            ],
        }
    }
}
</script>
