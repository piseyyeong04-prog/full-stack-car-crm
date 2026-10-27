<template>

    <!-- Add Customer -->
    <div class="offcanvas offcanvas-end" tabindex="-1" id="add_customer">
        <div class="offcanvas-header d-flex align-items-center justify-content-between">
            <h4 class="offcanvas-title mb-0">Create Customer</h4>
            <button type="button" class="btn-close btn-close-modal" data-bs-dismiss="offcanvas" aria-label="Close"><i
                    class="icon-x"></i></button>
        </div>
        <form class="d-flex flex-column overflow-y-auto h-100">
            <div class="offcanvas-body pb-0">
                <div class="row gx-3">
                    <div class="col-md-12">
                        <div class="mb-3 d-flex align-items-center flex-wrap gap-3">
                            <div class="avatar avatar-3xl border bg-light">
                                <i class="icon-images fs-28 text-dark"></i>
                            </div>
                            <div>
                                <label class="form-label">Profile Photo<span class="text-danger"> *</span></label>
                                <p class="fs-13 mb-3">Image should be with in 5 MB</p>
                                <div class="d-flex align-items-center">
                                    <div class="btn btn-icon btn-sm btn-white rounded-circle position-relative me-2">
                                        <input type="file"
                                            class="form-control position-absolute w-100 h-100 top-0 start-0 opacity-0">
                                        <i class="icon-pencil-line"></i>
                                    </div>
                                    <a href="#" class="btn btn-icon btn-sm btn-white rounded-circle text-danger"><i
                                            class="icon-trash-2"></i></a>
                                </div>
                            </div>
                        </div>
                        <div class="mb-3">
                            <label class="form-label">Customer Name<span class="text-danger"> *</span></label>
                            <input type="text" class="form-control">
                        </div>
                    </div>
                    <div class="col-lg-6 col-md-12">
                        <div class="mb-3">
                            <label class="form-label">Phone</label>
                            <input type="text" class="form-control">
                        </div>
                    </div>
                    <div class="col-lg-6 col-md-12">
                        <div class="mb-3">
                            <label class="form-label">Email</label>
                            <input type="email" class="form-control">
                        </div>
                    </div>
                    <div class="col-md-12">
                        <div class="mb-3">
                            <label class="form-label">Address Line 1<span class="text-danger"> *</span></label>
                            <input type="text" class="form-control">
                        </div>
                    </div>
                    <div class="col-md-12">
                        <div class="mb-3">
                            <label class="form-label">Address Line 2<span class="text-danger"> *</span></label>
                            <input type="text" class="form-control">
                        </div>
                    </div>
                    <div class="col-md-12">
                        <div class="mb-3">
                            <label class="form-label">Postal Code<span class="text-danger"> *</span></label>
                            <input type="text" class="form-control">
                        </div>
                    </div>
                    <div class="col-lg-6 col-md-12">
                        <div class="mb-3">
                            <label class="form-label">Gender</label>
                            <vue-select 
                                :options="Gender"
                                v-model="selected"
                                placeholder="Select"
                            />
                        </div>
                    </div>
                    <div class="col-lg-6 col-md-12">
                        <div class="mb-3">
                            <label class="form-label">Status</label>
                            <vue-select 
                                :options="Status"
                                v-model="selectedOne"
                                placeholder="Select"
                            />
                        </div>
                    </div>
                </div>
            </div>
            <div class="offcanvas-footer d-flex align-items-center gap-2 pt-2">
                <button type="button" class="btn btn-dark d-flex align-items-center w-100"
                    data-bs-dismiss="offcanvas"><i class="icon-x me-1"></i>Cancel</button>
                <button type="submit" class="btn btn-primary d-flex align-items-center w-100"><i
                        class="icon-circle-check me-1"></i>Submit</button>
            </div>
        </form>
    </div>
    <!-- End Add Customer -->

    <!-- Edit Customer -->
    <div class="offcanvas offcanvas-end" tabindex="-1" id="edit_customer">
        <div class="offcanvas-header d-flex align-items-center justify-content-between">
            <h4 class="offcanvas-title mb-0">Edit Customer</h4>
            <button type="button" class="btn-close btn-close-modal" data-bs-dismiss="offcanvas" aria-label="Close"><i
                    class="icon-x"></i></button>
        </div>
        <form class="d-flex flex-column overflow-y-auto h-100">
            <div class="offcanvas-body pb-0">
                <div class="row gx-3">
                    <div class="col-md-12">
                        <div class="mb-3 d-flex align-items-center flex-wrap gap-3">
                            <div class="avatar avatar-3xl border bg-light flex-shrink-0">
                                <img src="@/assets/img/profiles/avatar-01.jpg" alt="customer" class="img-fluid">
                            </div>
                            <div>
                                <label class="form-label">Profile Photo<span class="text-danger"> *</span></label>
                                <p class="fs-13 mb-3">Image should be with in 5 MB</p>
                                <div class="d-flex align-items-center">
                                    <div class="btn btn-icon btn-sm btn-white rounded-circle position-relative me-2">
                                        <input type="file"
                                            class="form-control position-absolute w-100 h-100 top-0 start-0 opacity-0">
                                        <i class="icon-pencil-line"></i>
                                    </div>
                                    <a href="#" class="btn btn-icon btn-sm btn-white rounded-circle text-danger"><i
                                            class="icon-trash-2"></i></a>
                                </div>
                            </div>
                        </div>
                        <div class="mb-3">
                            <label class="form-label">Customer Name<span class="text-danger"> *</span></label>
                            <input type="text" class="form-control" value="Adrian James">
                        </div>
                    </div>
                    <div class="col-lg-6 col-md-12">
                        <div class="mb-3">
                            <label class="form-label">Phone</label>
                            <input type="text" class="form-control" value="+1 54544 54587">
                        </div>
                    </div>
                    <div class="col-lg-6 col-md-12">
                        <div class="mb-3">
                            <label class="form-label">Email</label>
                            <input type="email" class="form-control" value="adrian@example.com">
                        </div>
                    </div>
                    <div class="col-md-12">
                        <div class="mb-3">
                            <label class="form-label">Address Line 1<span class="text-danger"> *</span></label>
                            <input type="text" class="form-control" value="301 Market Street">
                        </div>
                    </div>
                    <div class="col-md-12">
                        <div class="mb-3">
                            <label class="form-label">Address Line 2<span class="text-danger"> *</span></label>
                            <input type="text" class="form-control" value="Riverside Drive">
                        </div>
                    </div>
                    <div class="col-md-12">
                        <div class="mb-3">
                            <label class="form-label">Postal Code<span class="text-danger"> *</span></label>
                            <input type="text" class="form-control" value="48104">
                        </div>
                    </div>
                    <div class="col-lg-6 col-md-12">
                        <div class="mb-3">
                            <label class="form-label">Gender</label>
                            <vue-select 
                                :options="Gender"
                                v-model="selectedTwo"
                                placeholder="Male"
                            />
                        </div>
                    </div>
                    <div class="col-lg-6 col-md-12">
                        <div class="mb-3">
                            <label class="form-label">Status</label>
                            <vue-select 
                                :options="Status"
                                v-model="selectedThree"
                                placeholder="Active"
                            />
                        </div>
                    </div>
                </div>
            </div>
            <div class="offcanvas-footer d-flex align-items-center gap-2 pt-2">
                <button type="button" class="btn btn-dark d-flex align-items-center w-100"
                    data-bs-dismiss="offcanvas"><i class="icon-x me-1"></i>Cancel</button>
                <button type="submit" class="btn btn-primary d-flex align-items-center w-100"><i
                        class="icon-circle-check me-1"></i>Save Changes</button>
            </div>
        </form>
    </div>
    <!-- End Add Customer -->

    <!-- Customer Details -->
    <div class="offcanvas offcanvas-end" tabindex="-1" id="view_details">
        <div class="offcanvas-header d-flex align-items-center justify-content-between">
            <h4 class="offcanvas-title mb-0">Customer Details</h4>
            <button type="button" class="btn-close btn-close-modal" data-bs-dismiss="offcanvas" aria-label="Close"><i
                    class="icon-x"></i></button>
        </div>
        <form class="d-flex flex-column overflow-y-auto h-100">
            <div class="offcanvas-body p-0">
                <div class="border-bottom p-4">
                    <div class="mb-4 d-flex align-items-center justify-content-between gap-3">
                        <div class="d-flex align-items-center">
                            <span class="avatar avatar-xxl border me-3 flex-shrink-0">
                                <img src="@/assets/img/profiles/avatar-09.jpg" alt="customer" class="img-fluid">
                            </span>
                            <div>
                                <h6 class="fs-14 fw-semibold mb-0">David Belcher</h6>
                                <p class="fs-13 mb-0">Last Login : 25 Jan 2025</p>
                            </div>
                        </div>
                        <span class="badge badge-soft-success">Active</span>
                    </div>
                    <div>
                        <div class="d-flex align-items-center justify-content-between mb-3">
                            <span class="d-flex align-items-center"><i
                                    class="icon-mail text-gray-9 me-1"></i>Email</span>
                            <span class="text-gray-9">david@example.com</span>
                        </div>
                        <div class="d-flex align-items-center justify-content-between mb-3">
                            <span class="d-flex align-items-center"><i
                                    class="icon-phone text-gray-9 me-1"></i>Phone</span>
                            <span class="text-gray-9">+1 14524 54595</span>
                        </div>
                        <div class="d-flex align-items-center justify-content-between mb-3">
                            <span class="d-flex align-items-center"><i
                                    class="icon-map-pin-check-inside text-gray-9 me-1"></i>Address</span>
                            <span class="text-wrap-1 text-gray-9">301 Market Street, Riverside Drive, FL 33128,
                                USA</span>
                        </div>
                        <div class="d-flex align-items-center justify-content-between">
                            <span class="d-flex align-items-center"><i
                                    class="icon-user text-gray-9 me-1"></i>Gender</span>
                            <span class="text-gray-9">Male</span>
                        </div>
                    </div>
                </div>
                <div class="p-4">
                    <div class="d-flex align-items-center justify-content-between mb-3">
                        <h5>Orders</h5>
                        <span class="badge bg-light text-gray-9 fw-semibold">No of Orders : 02</span>
                    </div>
                    <div class="border p-3 rounded mb-3">
                        <div
                            class="d-flex align-items-center justify-content-between border-bottom flex-wrap row-gap-3 pb-3 mb-3">
                            <div>
                                <h6 class="text-info fw-semibold mb-1">OD6EEG</h6>
                                <span>Order On : 15 Sep 2025</span>
                            </div>
                            <div>
                                <p class="mb-1">Order total</p>
                                <span class="text-gray-9 fw-medium">$350</span>
                            </div>
                            <span class="badge bg-soft-info text-gray-9 fw-medium">Pending</span>
                        </div>
                        <div class="d-flex align-items-center justify-content-between">
                            <div>
                                <p class="mb-1">Pickup Date & Time</p>
                                <span class="text-gray-9 fw-medium">17 Jun 2026, 11 AM - 12 PM</span>
                            </div>
                            <div>
                                <p class="mb-1">Deliver Date & Time</p>
                                <span class="text-gray-9 fw-medium">19 Jun 2026, 05 AM - 06 PM</span>
                            </div>
                        </div>
                    </div>
                    <div class="border p-3 rounded">
                        <div
                            class="d-flex align-items-center justify-content-between border-bottom flex-wrap row-gap-3 pb-3 mb-3">
                            <div>
                                <h6 class="text-info fw-semibold mb-1">OD4567</h6>
                                <span>Order On : 10 Sep 2025</span>
                            </div>
                            <div>
                                <p class="mb-1">Order total</p>
                                <span class="text-gray-9 fw-medium">$200</span>
                            </div>
                            <span class="badge bg-soft-success text-gray-9 fw-medium">Delivered</span>
                        </div>
                        <div class="d-flex align-items-center justify-content-between">
                            <div>
                                <p class="mb-1">Pickup Date & Time</p>
                                <span class="text-gray-9 fw-medium">11 Jun 2026, 09 AM - 10 AM</span>
                            </div>
                            <div>
                                <p class="mb-1">Deliver Date & Time</p>
                                <span class="text-gray-9 fw-medium">13 Jun 2026, 08 AM - 09 PM</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="offcanvas-footer d-flex align-items-center gap-2 pt-2">
                <button type="button" class="btn btn-dark d-flex align-items-center w-100" data-bs-toggle="offcanvas"
                    data-bs-target="#edit_customer"><i class="icon-pencil-line me-1"></i>Edit Customer</button>
            </div>
        </form>
    </div>
    <!-- End Customer Details -->
</template>
<script>
    export default {
        data() {
            return {
                selected: null,
                selectedOne: null,
                selectedTwo: null,
                selectedThree: null,
                Gender: [
                    { label: 'Select', value: 'Select' },
                    { label: 'Male', value: 'Male' },
                    { label: 'Female', value: 'Female' },
                ],
                Status: [
                    { label: 'Select', value: 'Select' },
                    { label: 'Active', value: 'Active' },
                    { label: 'Inactive', value: 'Inactive' },
                ],
            };
        },
    };
</script>