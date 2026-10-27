<template>
    <!-- Add staffs -->
    <div class="offcanvas offcanvas-end" tabindex="-1" id="add_staffs">
        <div class="offcanvas-header d-flex align-items-center justify-content-between">
            <h4 class="offcanvas-title mb-0">Add New Staff</h4>
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
                    </div>
                    <div class="col-lg-6 col-md-12">
                        <div class="mb-3">
                            <label class="form-label">First Name<span class="text-danger"> *</span></label>
                            <input type="text" class="form-control">
                        </div>
                    </div>
                    <div class="col-lg-6 col-md-12">
                        <div class="mb-3">
                            <label class="form-label">Last Name<span class="text-danger"> *</span></label>
                            <input type="text" class="form-control">
                        </div>
                    </div>
                    <div class="col-lg-6 col-md-12">
                        <div class="mb-3">
                            <label class="form-label">Gender</label>
                            <vue-select :options="Gender" v-model="selected" placeholder="Select" />
                        </div>
                    </div>
                    <div class="col-lg-6 col-md-12">
                        <div class="mb-3">
                            <label class="form-label">Status</label>
                            <vue-select :options="Status" v-model="selectedOne" placeholder="Select" />
                        </div>
                    </div>
                    <div class="col-lg-12 col-md-12">
                        <div class="mb-3">
                            <label class="form-label">Role<span class="text-danger"> *</span></label>
                            <vue-select :options="Role" v-model="selectedTwo" placeholder="Select" />
                        </div>
                    </div>
                    <div class="col-md-12">
                        <div class="mb-3">
                            <label class="form-label">Phone Number<span class="text-danger"> *</span></label>
                            <input type="text" class="form-control">
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
                            <label class="form-label">Address Line 2</label>
                            <input type="text" class="form-control">
                        </div>
                    </div>
                    <div class="col-lg-6 col-md-12">
                        <div class="mb-3">
                            <label class="form-label">County</label>
                            <vue-select :options="County" v-model="selectedThree" placeholder="Select" />
                        </div>
                    </div>
                    <div class="col-lg-6 col-md-12">
                        <div class="mb-3">
                            <label class="form-label">State</label>
                            <vue-select :options="State" v-model="selectedFour" placeholder="Select" />
                        </div>
                    </div>
                    <div class="col-lg-6 col-md-12">
                        <div class="mb-3">
                            <label class="form-label">City</label>
                            <vue-select :options="City" v-model="selectedFive" placeholder="Select" />
                        </div>
                    </div>
                    <div class="col-lg-6 col-md-12">
                        <div class="mb-3">
                            <label class="form-label">Postal Code<span class="text-danger"> *</span></label>
                            <input type="text" class="form-control" value="33128">
                        </div>
                    </div>
                    <div class="col-md-12">
                        <div class="mb-3">
                            <label class="form-label">About Staff</label>
                            <textarea name="address_line_1" class="form-control rounded mb-2" id=""></textarea>
                            <span>Add Minimum 200 Characters</span>
                        </div>
                    </div>


                </div>
            </div>
            <div class="offcanvas-footer d-flex align-items-center gap-2 pt-2">
                <button type="button" class="btn btn-dark d-flex align-items-center w-100"><i
                        class="icon-x me-1"></i>Cancel</button>
                <button type="submit" class="btn btn-primary d-flex align-items-center w-100"><i
                        class="icon-circle-check me-1"></i>Submit</button>
            </div>
        </form>
    </div>
    <!-- End Add staffs -->

    <!-- Edit staffs -->
    <div class="offcanvas offcanvas-end" tabindex="-1" id="edit_staff">
        <div class="offcanvas-header d-flex align-items-center justify-content-between">
            <h4 class="offcanvas-title mb-0">Edit Staff</h4>
            <button type="button" class="btn-close btn-close-modal" data-bs-dismiss="offcanvas" aria-label="Close"><i
                    class="icon-x"></i></button>
        </div>
        <form class="d-flex flex-column overflow-y-auto h-100">
            <div class="offcanvas-body pb-0">
                <div class="row gx-3">
                    <div class="col-md-12">
                        <div class="mb-3 d-flex align-items-center flex-wrap gap-3">
                            <div class="avatar avatar-3xl border bg-light">
                                <img src="@/assets/img/staffs/staff-02.jpg" alt="staff-01">
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
                    </div>
                    <div class="col-lg-6 col-md-12">
                        <div class="mb-3">
                            <label class="form-label">First Name<span class="text-danger"> *</span></label>
                            <input type="text" class="form-control" value="Jason">
                        </div>
                    </div>
                    <div class="col-lg-6 col-md-12">
                        <div class="mb-3">
                            <label class="form-label">Last Name<span class="text-danger"> *</span></label>
                            <input type="text" class="form-control" value="Miller">
                        </div>
                    </div>
                    <div class="col-lg-6 col-md-12">
                        <div class="mb-3">
                            <label class="form-label">Gender</label>
                            <vue-select :options="Gender" v-model="selectedSix" placeholder="Male" />
                        </div>
                    </div>
                    <div class="col-lg-6 col-md-12">
                        <div class="mb-3">
                            <label class="form-label">Status</label>
                            <vue-select :options="Status" v-model="selectedSeven" placeholder="Active" />
                        </div>
                    </div>
                    <div class="col-lg-12 col-md-12">
                        <div class="mb-3">
                            <label class="form-label">Role<span class="text-danger"> *</span></label>
                            <vue-select :options="Role" v-model="selectedEight" placeholder="Admin" />
                        </div>
                    </div>
                    <div class="col-md-12">
                        <div class="mb-3">
                            <label class="form-label">Phone Number<span class="text-danger"> *</span></label>
                            <input type="text" class="form-control" value="+1 54544 54587">
                        </div>
                    </div>
                    <div class="col-md-12">
                        <div class="mb-3">
                            <label class="form-label">Address Line 1</label>
                            <input type="text" class="form-control" value="301 Riverside Drive">
                        </div>
                    </div>
                    <div class="col-md-12">
                        <div class="mb-3">
                            <label class="form-label">Address Line 2</label>
                            <input type="text" class="form-control">
                        </div>
                    </div>
                    <div class="col-lg-6 col-md-12">
                        <div class="mb-3">
                            <label class="form-label">County</label>
                            <vue-select :options="County" v-model="selectedThree" placeholder="Select" />
                        </div>
                    </div>
                    <div class="col-lg-6 col-md-12">
                        <div class="mb-3">
                            <label class="form-label">State</label>
                            <vue-select :options="State" v-model="selectedFour" placeholder="Select" />
                        </div>
                    </div>
                    <div class="col-lg-6 col-md-12">
                        <div class="mb-3">
                            <label class="form-label">City</label>
                            <vue-select :options="City" v-model="selectedFive" placeholder="Select" />
                        </div>
                    </div>
                    <div class="col-lg-6 col-md-12">
                        <div class="mb-3">
                            <label class="form-label">Postal Code<span class="text-danger"> *</span></label>
                            <input type="text" class="form-control" value="33128">
                        </div>
                    </div>
                    <div class="col-md-12">
                        <div class="mb-3">
                            <label class="form-label">About Staff</label>
                            <textarea name="address_line_1" class="form-control rounded mb-2" id=""></textarea>
                            <span>Add Minimum 200 Characters</span>
                        </div>
                    </div>


                </div>
            </div>
            <div class="offcanvas-footer d-flex align-items-center gap-2 pt-2">
                <button type="button" class="btn btn-dark d-flex align-items-center w-100"><i
                        class="icon-x me-1"></i>Cancel</button>
                <button type="submit" class="btn btn-primary d-flex align-items-center w-100"><i
                        class="icon-circle-check me-1"></i>Save Changes</button>
            </div>
        </form>
    </div>
    <!-- End Edit staffs -->

    <!-- View Details -->
    <div class="offcanvas offcanvas-end" tabindex="-1" id="view_details">
        <div class="offcanvas-header d-flex align-items-center justify-content-between">
            <h4 class="offcanvas-title mb-0">Staff Details</h4>
            <button type="button" class="btn-close btn-close-modal" data-bs-dismiss="offcanvas" aria-label="Close"><i
                    class="icon-x"></i></button>
        </div>
        <form class="d-flex flex-column overflow-y-auto h-100">
            <div class="offcanvas-body p-0">
                <div class="border-bottom p-4">
                    <div class="mb-4 d-flex align-items-center justify-content-between gap-3">
                        <div class="d-flex align-items-center">
                            <span class="avatar avatar-xxl border me-3 flex-shrink-0">
                                <img src="@/assets/img/staffs/staff-02.jpg" alt="customer" class="img-fluid">
                            </span>
                            <div>
                                <h6 class="fs-14 fw-semibold mb-1">Sarah Thompson</h6>
                                <p class="fs-13 mb-1">DOB : 25 Jan 1991</p>
                            </div>
                        </div>
                        <span class="badge badge-white border-gray d-inline-flex align-items-center"><span
                                class="badge-dot bg-warning me-1"></span> Biller</span>
                    </div>
                    <div>
                        <div class="d-flex align-items-center justify-content-between mb-3">
                            <span class="d-flex align-items-center"><i
                                    class="icon-mail text-gray-9 me-1"></i>Email</span>
                            <span>sarah@example.com</span>
                        </div>
                        <div class="d-flex align-items-center justify-content-between mb-3">
                            <span class="d-flex align-items-center"><i
                                    class="icon-phone text-gray-9 me-1"></i>Phone</span>
                            <span>+1 98778 12388</span>
                        </div>
                        <div class="d-flex align-items-center justify-content-between mb-3">
                            <span class="d-flex align-items-center"><i
                                    class="icon-map-pin-check-inside text-gray-9 me-1"></i>Address</span>
                            <span class="text-wrap-1">123 Elm Road, Springfield, NY 12345, USA</span>
                        </div>
                        <div class="d-flex align-items-center justify-content-between">
                            <span class="d-flex align-items-center"><i
                                    class="icon-user text-gray-9 me-1"></i>Gender</span>
                            <span>Female</span>
                        </div>
                    </div>
                </div>
                <div class="p-4">
                    <h6 class="fw-bold fs-16 mb-2">
                        About Staff
                    </h6>
                    <p class="mb-0">
                        Reliable billing executive known for fast and error free transactions. Handles payments,
                        discounts, refunds, and POS entries with precision while offering friendly, customer-first
                        service at the counter.
                    </p>
                </div>
            </div>
            <div class="offcanvas-footer d-flex align-items-center gap-2 pt-2">
                <button type="button" class="btn btn-dark d-flex align-items-center w-100" data-bs-toggle="offcanvas"
                    data-bs-target="#edit_staff"><i class="icon-pencil-line me-1"></i>Edit Staff</button>
            </div>
        </form>
    </div>
    <!-- View Details -->
</template>
<script>
export default {
    data() {
        return {
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
            Role: [
                { label: 'Select', value: 'Select' },
                { label: 'Admin', value: 'Admin' },
                { label: 'Billing', value: 'Billing' },
                { label: 'Washer Operator', value: 'Washer Operator' },
                { label: 'Dryer Operator', value: 'Dryer Operator' },
                { label: 'Ironing Staff', value: 'Ironing Staff' },
            ],
            County: [
                { label: 'Select', value: 'Select' },
                { label: 'Unites State of America', value: 'Unites State of America' },
                { label: 'Australia', value: 'Australia' },
                { label: 'Canada', value: 'Canada' },
            ],
            State: [
                { label: 'Select', value: 'Select' },
                { label: 'Florida', value: 'Florida' },
                { label: 'Queensland', value: 'Queensland' },
                { label: 'Ontario', value: 'Ontario' },
            ],
            City: [
                { label: 'Select', value: 'Select' },
                { label: 'Miami', value: 'Miami' },
                { label: 'Brisbane', value: 'Brisbane' },
                { label: 'Toronto', value: 'Toronto' },
            ],

            selected: null,
            selectedOne: null,
            selectedTwo: null,
            selectedThree: null,
            selectedFour: null,
            selectedFive: null,
            selectedSix: null,
            selectedSeven: null,
            selectedEight: null,
        };
    },
};
</script>
