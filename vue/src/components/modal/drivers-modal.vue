<template>

    <!-- Add drivers -->
    <div class="offcanvas offcanvas-end" tabindex="-1" id="add_driver">
        <div class="offcanvas-header d-flex align-items-center justify-content-between">
            <h4 class="offcanvas-title mb-0">Add New Driver</h4>
            <button type="button" class="btn-close btn-close-modal" data-bs-dismiss="offcanvas" aria-label="Close"><i
                    class="icon-x"></i></button>
        </div>
        <form class="d-flex flex-column overflow-y-auto h-100">
            <div class="offcanvas-body pb-0">
                <div class="row gx-3 pb-4 border-bottom mb-4">
                    <div class="col-md-12">
                        <h5 class="mb-3">Personal Info</h5>
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
                    <div class="col-lg-12">
                        <div class="mb-3">
                            <label class="form-label">Driver Name<span class="text-danger"> *</span></label>
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
                            <label class="form-label">Date Of Birth</label>
                            <div class="input-group input-group-flat w-auto">
                                <a-date-picker v-model="valueOne" class="form-control p-2" placeholder="Select Date" />
                                <span class="input-group-text">
                                    <i class="icon-calendar-days"></i>
                                </span>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-12">
                        <div class="mb-3">
                            <label class="form-label">Gender</label>
                            <vue-select :options="Gender" v-model="selected" placeholder="Select Gender" />
                        </div>
                    </div>
                    <div class="col-lg-12">
                        <div class="mb-3">
                            <label class="form-label">Address Line 1<span class="text-danger"> *</span></label>
                            <input type="text" class="form-control">
                        </div>
                    </div>
                    <div class="col-lg-12">
                        <div class="mb-3">
                            <label class="form-label">Address Line 2<span class="text-danger"> *</span></label>
                            <input type="text" class="form-control">
                        </div>
                    </div>
                    <div class="col-lg-6 col-md-12">
                        <div class="mb-3">
                            <label class="form-label">County</label>
                            <vue-select :options="County" v-model="selectedOne" placeholder="Select" />
                        </div>
                    </div>
                    <div class="col-lg-6 col-md-12">
                        <div class="mb-3">
                            <label class="form-label">State</label>
                            <vue-select :options="State" v-model="selectedTwo" placeholder="Select" />
                        </div>
                    </div>
                    <div class="col-lg-6 col-md-12">
                        <div class="mb-0">
                            <label class="form-label">City</label>
                            <vue-select :options="City" v-model="selectedThree" placeholder="Select" />
                        </div>
                    </div>
                    <div class="col-lg-6 col-md-12">
                        <div class="mb-0">
                            <label class="form-label">Postal Code<span class="text-danger"> *</span></label>
                            <input type="text" class="form-control" value="33128">
                        </div>
                    </div>
                </div>
                <div class="pb-3 border-bottom mb-3">
                    <h5 class="fs-18 fw-bold mb-3">Driver Details</h5>
                    <div class="row gx-3">
                        <div class="col-lg-6 col-md-12">
                            <div class="mb-3">
                                <label class="form-label">License No</label>
                                <input type="text" class="form-control">
                            </div>
                        </div>
                        <div class="col-lg-6 col-md-12">
                            <div class="mb-3">
                                <label class="form-label">License Expiry Date</label>
                                <div class="input-group input-group-flat w-auto">
                                    <a-date-picker v-model="valueTwo" class="form-control p-2"
                                        placeholder="Select Date" />
                                    <span class="input-group-text">
                                        <i class="icon-calendar-days"></i>
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-6 col-md-12">
                            <div class="mb-3">
                                <label class="form-label">Insurance Policy No</label>
                                <input type="text" class="form-control">
                            </div>
                        </div>
                        <div class="col-lg-6 col-md-12">
                            <div class="mb-3">
                                <label class="form-label">Insurance Expiry Date</label>
                                <div class="input-group input-group-flat w-auto">
                                    <a-date-picker v-model="valueThree" class="form-control p-2"
                                        placeholder="Select Date" />
                                    <span class="input-group-text">
                                        <i class="icon-calendar-days"></i>
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-12">
                            <div class="mb-0">
                                <label class="form-label">About Driver</label>
                                <textarea name="address_line_1" class="form-control rounded mb-2" id="about_driver"
                                    rows="4"></textarea>
                                <span>Add Minimum 200 Characters</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <h5 class="fs-18 fw-bold mb-3">Login Details</h5>
                    <div class="row gx-3">
                        <div class="col-lg-6 col-md-12">
                            <div class="mb-3">
                                <label class="form-label">Email<span class="text-danger"> *</span></label>
                                <input type="email" class="form-control">
                            </div>
                        </div>
                        <div class="col-lg-6 col-md-12">
                            <div class="mb-3">
                                <label class="form-label">Password<span class="text-danger"> *</span></label>
                                <div class="input-group input-group-flat pass-group w-auto">
                                    <input :type="showPassword ? 'text' : 'password'" v-model="password"
                                        class="form-control pass-input">
                                    <span class="input-group-text toggle-password" @click="togglePassword">
                                        <i :class="showPassword ? 'icon-eye' : 'icon-eye-off'"></i>
                                    </span>
                                </div>
                            </div>
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
    <!-- End Add drivers -->

    <!-- Edit drivers -->
    <div class="offcanvas offcanvas-end" tabindex="-1" id="edit_driver">
        <div class="offcanvas-header d-flex align-items-center justify-content-between">
            <h4 class="offcanvas-title mb-0">Edit Driver</h4>
            <button type="button" class="btn-close btn-close-modal" data-bs-dismiss="offcanvas" aria-label="Close"><i
                    class="icon-x"></i></button>
        </div>
        <form class="d-flex flex-column overflow-y-auto h-100">
            <div class="offcanvas-body pb-0">
                <div class="row gx-3 pb-4 border-bottom mb-4">
                    <div class="col-md-12">
                        <h5 class="mb-3">Personal Info</h5>
                        <div class="mb-3 d-flex align-items-center flex-wrap gap-3">
                            <div class="avatar avatar-3xl border bg-light">
                                <img src="@/assets/img/drivers/driver-01.jpg" alt="driver-01">
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
                    <div class="col-lg-12">
                        <div class="mb-3">
                            <label class="form-label">Driver Name<span class="text-danger"> *</span></label>
                            <input type="text" class="form-control" value="Benjamin Scott">
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
                            <label class="form-label">Date Of Birth</label>
                            <div class="input-group input-group-flat w-auto">
                                <a-date-picker v-model="valueFour" class="form-control p-2" placeholder="Select Date" />
                                <span class="input-group-text">
                                    <i class="icon-calendar-days"></i>
                                </span>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-12">
                        <div class="mb-3">
                            <label class="form-label">Gender</label>
                            <vue-select :options="Gender" v-model="selectedFour" placeholder="Male" />
                        </div>
                    </div>
                    <div class="col-lg-12">
                        <div class="mb-3">
                            <label class="form-label">Address Line 1<span class="text-danger"> *</span></label>
                            <input type="text" class="form-control" value="301 Market Street">
                        </div>
                    </div>
                    <div class="col-lg-12">
                        <div class="mb-3">
                            <label class="form-label">Address Line 2<span class="text-danger"> *</span></label>
                            <input type="text" class="form-control" value="Riverside Drive">
                        </div>
                    </div>
                    <div class="col-lg-6 col-md-12">
                        <div class="mb-3">
                            <label class="form-label">County</label>
                            <vue-select :options="County" v-model="selectedFive"
                                placeholder="Unites State of America" />
                        </div>
                    </div>
                    <div class="col-lg-6 col-md-12">
                        <div class="mb-3">
                            <label class="form-label">State</label>
                            <vue-select :options="State" v-model="selectedSix" placeholder="Florida" />
                        </div>
                    </div>
                    <div class="col-lg-6 col-md-12">
                        <div class="mb-0">
                            <label class="form-label">City</label>
                            <vue-select :options="City" v-model="selectedSeven" placeholder="Miami" />
                        </div>
                    </div>
                    <div class="col-lg-6 col-md-12">
                        <div class="mb-0">
                            <label class="form-label">Postal Code<span class="text-danger"> *</span></label>
                            <input type="text" class="form-control" value="33128">
                        </div>
                    </div>
                </div>
                <div class="pb-3 border-bottom mb-3">
                    <h5 class="fs-18 fw-bold mb-3">Driver Details</h5>
                    <div class="row gx-3">
                        <div class="col-lg-6 col-md-12">
                            <div class="mb-3">
                                <label class="form-label">License No</label>
                                <input type="text" class="form-control" value="DL56558">
                            </div>
                        </div>
                        <div class="col-lg-6 col-md-12">
                            <div class="mb-3">
                                <label class="form-label">License Expiry Date</label>
                                <div class="input-group input-group-flat w-auto">
                                    <a-date-picker v-model="valueFive" class="form-control p-2"
                                        placeholder="Select Date" />
                                    <span class="input-group-text">
                                        <i class="icon-calendar-days"></i>
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-6 col-md-12">
                            <div class="mb-3">
                                <label class="form-label">Insurance Policy No</label>
                                <input type="text" class="form-control" value="USPOL9834A72">
                            </div>
                        </div>
                        <div class="col-lg-6 col-md-12">
                            <div class="mb-3">
                                <label class="form-label">Insurance Expiry Date</label>
                                <div class="input-group input-group-flat w-auto">
                                    <a-date-picker v-model="valueSix" class="form-control p-2"
                                        placeholder="Select Date" />
                                    <span class="input-group-text">
                                        <i class="icon-calendar-days"></i>
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-12">
                            <div class="mb-0">
                                <label class="form-label">About Driver</label>
                                <textarea name="address_line_1" class="form-control rounded mb-2" id="about_driver"
                                    rows="4">Trained delivery driver known for fast, accurate, and safe deliveries. With strong navigation skills and a customer first attitude, he ensures every package reaches its destination on time.</textarea>
                                <span>Add Minimum 200 Characters</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <h5 class="fs-18 fw-bold mb-3">Login Details</h5>
                    <div class="row gx-3">
                        <div class="col-lg-6 col-md-12">
                            <div class="mb-3">
                                <label class="form-label">Email<span class="text-danger"> *</span></label>
                                <input type="email" class="form-control" value="benjamin@example.com">
                            </div>
                        </div>
                        <div class="col-lg-6 col-md-12">
                            <div class="mb-3">
                                <label class="form-label">Password<span class="text-danger"> *</span></label>
                                <div class="input-group input-group-flat pass-group w-auto">
                                    <input :type="showPassword ? 'text' : 'password'" v-model="password"
                                        class="form-control pass-input">
                                    <span class="input-group-text toggle-password" @click="togglePassword">
                                        <i :class="showPassword ? 'icon-eye' : 'icon-eye-off'"></i>
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-12">
                            <div class="mb-3">
                                <label class="form-label">Status</label>
                                <vue-select :options="Status" v-model="selectedEight" placeholder="Active" />
                            </div>
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
    <!-- End Edit drivers -->

    <!-- View Details -->
    <div class="offcanvas offcanvas-end" tabindex="-1" id="view_details">
        <div class="offcanvas-header d-flex align-items-center justify-content-between">
            <h4 class="offcanvas-title mb-0">Driver Details</h4>
            <button type="button" class="btn-close btn-close-modal" data-bs-dismiss="offcanvas" aria-label="Close"><i
                    class="icon-x"></i></button>
        </div>
        <form class="d-flex flex-column overflow-y-auto h-100">
            <div class="offcanvas-body p-0">
                <div class="border-bottom p-4">
                    <div class="mb-4 d-flex align-items-center justify-content-between gap-3">
                        <div class="d-flex align-items-center">
                            <span class="avatar avatar-xxl border me-3 flex-shrink-0">
                                <img src="@/assets/img/drivers/driver-01.jpg" alt="customer" class="img-fluid">
                            </span>
                            <div>
                                <h6 class="fs-14 fw-semibold mb-1">Benjamin Scott</h6>
                                <p class="fs-13 mb-1">DOB : 25 Jan 1991</p>
                                <a href="#" class="link-orange fw-semibold text-decoration-underline">Change
                                    Password</a>
                            </div>
                        </div>
                        <span class="badge badge-soft-success">Active</span>
                    </div>
                    <div>
                        <div class="d-flex align-items-center justify-content-between mb-3">
                            <span class="d-flex align-items-center"><i
                                    class="icon-mail text-gray-9 me-1"></i>Email</span>
                            <span class=" text-dark">benjamin@example.com</span>
                        </div>
                        <div class="d-flex align-items-center justify-content-between mb-3">
                            <span class="d-flex align-items-center"><i
                                    class="icon-phone text-gray-9 me-1"></i>Phone</span>
                            <span class=" text-dark"> +1 33658 54589</span>
                        </div>
                        <div class="d-flex align-items-center justify-content-between mb-3">
                            <span class="d-flex align-items-center"><i
                                    class="icon-map-pin-check-inside text-gray-9 me-1"></i>Address</span>
                            <span class="text-wrap-1 text-dark">301 Market Street, Riverside Drive, FL 33128, USA</span>
                        </div>
                        <div class="d-flex align-items-center justify-content-between">
                            <span class="d-flex align-items-center"><i
                                    class="icon-user text-gray-9 me-1"></i>Gender</span>
                            <span class=" text-dark">Male</span>
                        </div>
                    </div>
                </div>
                <div class="border-bottom p-4">
                    <h5 class="fw-bold mb-2">Driver Details</h5>
                    <div class="row">
                        <div class="col-lg-6">
                            <div>
                                <p class="fs-13 mb-1">License No</p>
                                <p class="fs-14 text-dark fw-medium">DL56558</p>
                            </div>
                        </div>
                        <div class="col-lg-6">
                            <div>
                                <p class="fs-13 mb-1">License Expiry Date</p>
                                <p class="fs-14 text-dark fw-medium">25 May 2026</p>
                            </div>
                        </div>
                        <div class="col-lg-6">
                            <div>
                                <p class="fs-13 mb-1">Insurance Policy No</p>
                                <p class="fs-14 text-dark fw-medium">USPOL9834A72</p>
                            </div>
                        </div>
                        <div class="col-lg-6">
                            <div>
                                <p class="fs-13 mb-1">Insurance Expiry Date</p>
                                <p class="fs-14 text-dark fw-medium">22 Apr 2029</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="p-4">
                    <h6 class="fw-bold fs-16 mb-2">
                        About Driver
                    </h6>
                    <p class="mb-0">
                        Trained delivery driver known for fast, accurate, and safe deliveries. With strong navigation
                        skills and a customer first attitude, he ensures every package reaches its destination on time.
                    </p>
                </div>
            </div>
            <div class="offcanvas-footer d-flex align-items-center gap-2 pt-2">
                <button type="button" class="btn btn-dark d-flex align-items-center w-100" data-bs-toggle="offcanvas"
                    data-bs-target="#edit_driver"><i class="icon-pencil-line me-1"></i>Edit Driver</button>
            </div>
        </form>
    </div>
    <!-- View Details -->
</template>

<script>
import { ref } from 'vue';
const valueOne = ref();
const valueTwo = ref();
const valueThree = ref();
const valueFour = ref();
const valueFive = ref();
const valueSix = ref();
export default {
    data() {
        return {
            valueOne,
            valueTwo,
            valueThree,
            valueFour,
            valueFive,
            valueSix,
            selected: null,
            selectedOne: null,
            selectedTwo: null,
            selectedThree: null,
            selectedFour: null,
            selectedFive: null,
            selectedSix: null,
            selectedSeven: null,
            selectedEight: null,
            password: '',
            showPassword: false,
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
        };
    },
    methods: {
        togglePassword() {
            this.showPassword = !this.showPassword;
        },
    },
};
</script>