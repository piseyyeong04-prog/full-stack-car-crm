<template>
    <!-- Add Orders -->
    <div class="offcanvas offcanvas-end" tabindex="-1" id="add_order">
        <div class="offcanvas-header d-flex align-items-center justify-content-between">
            <h4 class="offcanvas-title mb-0">Customers</h4>
            <button type="button" class="btn-close btn-close-modal" data-bs-dismiss="offcanvas" aria-label="Close"><i class="icon-x"></i></button>
        </div>
        <form action="#" class="d-flex flex-column overflow-y-auto h-100">
            <div class="offcanvas-body pb-0 p-0">
                <div class="orders-tab d-flex align-items-start p-3">
                    <ul class="nav nav-pills w-100 d-flex gap-3 align-items-center flex-sm-nowrap flex-wrap">
                        <li>
                            <a href="#" class="nav-link active d-flex align-items-center justify-content-center" data-bs-toggle="tab" data-bs-target="#driversTab"><i class="icon-users-round me-2"></i>Existing Customer</a>
                        </li>
                        <li>
                            <a href="#" class="nav-link d-flex align-items-center justify-content-center" data-bs-toggle="tab" data-bs-target="#add-new-driverTab"><i class="icon-plus me-2"></i>Add New Customer</a>
                        </li>
                    </ul>
                </div>
                <div class="tab-content">
                    <div class="tab-pane fade show active" id="driversTab">
                        <div class="gx-3 p-3 mb-2 pt-0">
                            <div class="col-lg-12 col-md-12">
                                <div class="mb-0">
                                    <div class="page-search">
                                        <i class="icon-search fs-14"></i>
                                        <input type="search" class="form-control form-control-sm" placeholder="Search by name/Phone Number">
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="d-flex justify-content-between p-3 mb-3 border-top border-bottom order-select-card">
                            <div class="d-flex align-items-center customer-radio-input">
                                <input type="radio" name="customer" class="form-check-input rounded-circle me-3">
                                <div class="d-flex align-items-center">
                                    <a href="#" class="avatar avatar-rounded flex-shrink-0 me-2">
                                        <img src="@/assets/img/profiles/avatar-15.jpg" alt="customer" class="img-fluid rounded-circle" style="width: 40px;">
                                    </a>
                                    <div>
                                        <h6 class="fs-14 fw-bold mb-1">David Belcher</h6>
                                        <p class="fs-14 text-dark mb-0">+1 23456 78901</p>
                                    </div>
                                </div>
                            </div>
                            <div class="d-flex align-items-center">
                                <span class="badge badge-soft-success">Available</span>
                            </div>
                        </div>
                        <div class="d-flex justify-content-between pb-3 px-3 mb-3 border-bottom order-select-card">
                            <div class="d-flex align-items-center customer-radio-input">
                                <input type="radio" class="form-check-input rounded-circle me-3">
                                <div class="d-flex align-items-center">
                                    <a href="#" class="avatar avatar avatar-rounded flex-shrink-0 bg-light text-body me-2">
                                        <i class="icon-user fs-16"></i>
                                    </a>
                                    <div>
                                        <h6 class="fs-14 fw-semibold mb-0 mb-2"><a href="#">Daniel Brooks</a></h6>
                                        <h6 class="fs-14 fw-normal mb-0"><a href="#">+1 14524 54595</a></h6>
                                    </div>
                                </div>
                            </div>
                            <div class="d-flex align-items-center customer-radio-input">
                                <div>
                                    <span class="badge badge-soft-success">Available</span>
                                </div>
                            </div>
                        </div>
                        <div class="d-flex justify-content-between pb-3 px-3 mb-3 border-bottom order-select-card">
                            <div class="d-flex align-items-center customer-radio-input">
                                <input type="radio" class="form-check-input rounded-circle me-3">
                                <div class="d-flex align-items-center">
                                    <a href="#" class="avatar avatar avatar-rounded flex-shrink-0 bg-light text-body me-2">
                                        <i class="icon-user fs-16"></i>
                                    </a>
                                    <div>
                                        <h6 class="fs-14 fw-semibold mb-0 mb-2"><a href="#">Adrian James</a></h6>
                                        <h6 class="fs-14 fw-normal mb-0"><a href="#">+1 42367 12345</a></h6>
                                    </div>
                                </div>
                            </div>
                            <div class="d-flex align-items-center customer-radio-input">
                                <div>
                                    <span class="badge badge-soft-success">Available</span>
                                </div>
                            </div>
                        </div>
                        <div class="d-flex justify-content-between pb-3 px-3 mb-3 border-bottom order-select-card">
                            <div class="d-flex align-items-center customer-radio-input">
                                <input type="radio" class="form-check-input rounded-circle me-3" checked>
                                <div class="d-flex align-items-center">
                                    <a href="#" class="avatar avatar avatar-rounded flex-shrink-0 me-2">
                                        <img src="@/assets/img/profiles/avatar-19.jpg" alt="customer" class="img-fluid">
                                    </a>
                                    <div>
                                        <h6 class="fs-14 fw-semibold mb-0 mb-2"><a href="#">Noah Sullivan</a></h6>
                                        <h6 class="fs-14 fw-normal mb-0"><a href="#">+1 78901 45678</a></h6>
                                    </div>
                                </div>
                            </div>
                            <div class="d-flex align-items-center customer-radio-input">
                                <div>
                                    <span class="badge badge-soft-success">Available</span>
                                </div>
                            </div>
                        </div>
                        <div class="d-flex justify-content-between pb-3 px-3 mb-3 border-bottom order-select-card">
                            <div class="d-flex align-items-center customer-radio-input">
                                <input type="radio" class="form-check-input rounded-circle me-3">
                                <div class="d-flex align-items-center">
                                    <a href="#" class="avatar avatar avatar-rounded flex-shrink-0 me-2">
                                        <img src="@/assets/img/profiles/avatar-13.jpg" alt="customer" class="img-fluid">
                                    </a>
                                    <div>
                                        <h6 class="fs-14 fw-semibold mb-0 mb-2"><a href="#">Mia Roberts</a></h6>
                                        <h6 class="fs-14 fw-normal mb-0"><a href="#">+1 13579 24680</a></h6>
                                    </div>
                                </div>
                            </div>
                            <div class="d-flex align-items-center customer-radio-input">
                                <div>
                                    <span class="badge badge-soft-danger">Unavailable</span>
                                </div>
                            </div>
                        </div>
                        <div class="d-flex justify-content-between pb-3 px-3 mb-3 border-bottom order-select-card">
                            <div class="d-flex align-items-center customer-radio-input">
                                <input type="radio" class="form-check-input rounded-circle me-3">
                                <div class="d-flex align-items-center">
                                    <a href="#" class="avatar avatar avatar-rounded flex-shrink-0 me-2">
                                        <img src="@/assets/img/profiles/avatar-14.jpg" alt="customer" class="img-fluid">
                                    </a>
                                    <div>
                                        <h6 class="fs-14 fw-semibold mb-0 mb-2"><a href="#">Ethan Hughes</a></h6>
                                        <h6 class="fs-14 fw-normal mb-0"><a href="#">+1 24680 13579</a></h6>
                                    </div>
                                </div>
                            </div>
                            <div class="d-flex align-items-center customer-radio-input">
                                <div>
                                    <span class="badge badge-soft-danger">Unavailable</span>
                                </div>
                            </div>
                        </div>
                        <div class="d-flex justify-content-between pb-3 px-3 mb-3 border-bottom order-select-card">
                            <div class="d-flex align-items-center customer-radio-input">
                                <input type="radio" class="form-check-input rounded-circle me-3">
                                <div class="d-flex align-items-center">
                                    <a href="#" class="avatar avatar avatar-rounded flex-shrink-0 me-2">
                                        <img src="@/assets/img/profiles/avatar-15.jpg" alt="customer" class="img-fluid">
                                    </a>
                                    <div>
                                        <h6 class="fs-14 fw-semibold mb-0 mb-2"><a href="#">Ava Martin</a></h6>
                                        <h6 class="fs-14 fw-normal mb-0"><a href="#">+1 35791 86420</a></h6>
                                    </div>
                                </div>
                            </div>
                            <div class="d-flex align-items-center customer-radio-input">
                                <div>
                                    <span class="badge badge-soft-danger">Unavailable</span>
                                </div>
                            </div>
                        </div>
                        <div class="d-flex justify-content-between pb-3 px-3 mb-3 order-select-card">
                            <div class="d-flex align-items-center customer-radio-input">
                                <input type="radio" class="form-check-input rounded-circle me-3">
                                <div class="d-flex align-items-center">
                                    <a href="#" class="avatar avatar avatar-rounded flex-shrink-0 me-2">
                                        <img src="@/assets/img/profiles/avatar-16.jpg" alt="customer" class="img-fluid">
                                    </a>
                                    <div>
                                        <h6 class="fs-14 fw-semibold mb-0 mb-2"><a href="#">Oliver Evans</a></h6>
                                        <h6 class="fs-14 fw-normal mb-0"><a href="#">+1 86420 57913</a></h6>
                                    </div>
                                </div>
                            </div>
                            <div class="d-flex align-items-center customer-radio-input">
                                <div>
                                    <span class="badge badge-soft-danger">Unavailable</span>
                                </div>
                            </div>
                        </div>
                        <div class="offcanvas-footer d-flex align-items-center gap-2">
                            <button type="button" class="btn btn-dark d-flex align-items-center w-100"><i class="icon-x me-1"></i>Cancel</button>
                            <button type="submit" class="btn btn-primary d-flex align-items-center w-100"><i class="icon-circle-check me-1"></i>Submit</button>
                        </div>
                    </div>
                    <div class="tab-pane fade show" id="add-new-driverTab">
                        <div class="px-2">
                            <div class="row gx-3 p-3 pt-0">
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
                                                    <input type="file" class="form-control position-absolute w-100 h-100 top-0 start-0 opacity-0">
                                                    <i class="icon-pencil-line"></i>
                                                </div>
                                                <a href="#" class="btn btn-icon btn-sm btn-white rounded-circle text-danger" data-bs-toggle="modal" data-bs-target="#delete_modal"><i class="icon-trash-2"></i></a>
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
                                <div class="col-lg-12 col-md-12">
                                    <div class="mb-3">
                                        <label class="form-label">Address Line 1<span class="text-danger"> *</span></label>
                                        <input type="text" class="form-control">
                                    </div>
                                </div>                                    
                                <div class="col-lg-12 col-md-12">
                                    <div class="mb-3">
                                        <label class="form-label">Address Line 2</label>
                                        <input type="text" class="form-control">
                                    </div>
                                </div>
                                <div class="col-lg-6 col-md-12">
                                    <div class="mb-3">
                                        <label class="form-label">County</label>
                                        <vue-select 
                                            :options="County"
                                            v-model="selected"
                                            placeholder="Select"
                                        />
                                    </div>
                                </div>
                                <div class="col-lg-6 col-md-12">
                                    <div class="mb-3">
                                        <label class="form-label">State</label>
                                        <vue-select 
                                            :options="State"
                                            v-model="selectedOne"
                                            placeholder="Select"
                                        />
                                    </div>
                                </div>
                                <div class="col-lg-6 col-md-12">
                                    <div class="mb-3">
                                        <label class="form-label">City</label>
                                        <vue-select 
                                            :options="City"
                                            v-model="selectedTwo"
                                            placeholder="Select"
                                        />
                                    </div>
                                </div>
                               
                                <div class="col-lg-6 col-md-12">
                                    <div class="mb-3">
                                        <label class="form-label">Postal Code<span class="text-danger"> *</span></label>
                                        <input type="text" class="form-control">
                                    </div>
                                </div>
                                
                                <div class="col-lg-6 col-md-12">
                                    <div class="mb-0">
                                        <label class="form-label">Gender</label>
                                        <vue-select 
                                            :options="Gender"
                                            v-model="selectedThree"
                                            placeholder="Select"
                                        />
                                    </div>
                                </div>                                 
                                <div class="col-lg-6 col-md-12">
                                    <div class="mb-0">
                                        <label class="form-label">Status</label>
                                        <vue-select 
                                            :options="Status"
                                            v-model="selectedFour"
                                            placeholder="Select"
                                        />
                                    </div>
                                </div>
                            </div>
                            <div class="offcanvas-footer d-flex align-items-center gap-2 pt-0 px-3">
                                <button type="button" class="btn btn-dark d-flex align-items-center w-100"><i class="icon-x me-1"></i>Cancel</button>
                                <button type="submit" class="btn btn-primary d-flex align-items-center w-100"><i class="icon-circle-check me-1"></i>Submit</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>            
        </form>
    </div>
    <!-- End Add Orders -->

    <!-- Edit Orders -->
    <div class="offcanvas offcanvas-end" tabindex="-1" id="edit_order">
        <div class="offcanvas-header d-flex align-items-center justify-content-between">
            <h4 class="offcanvas-title mb-0">Customers</h4>
            <button type="button" class="btn-close btn-close-modal" data-bs-dismiss="offcanvas" aria-label="Close"><i class="icon-x"></i></button>
        </div>
        <form action="#" class="d-flex flex-column overflow-y-auto h-100">
            <div class="offcanvas-body pb-0 p-0">
                <div class="px-2">
                    <div class="row gx-3 p-3">
                        <div class="col-md-12">
                            <div class="mb-3 d-flex align-items-center flex-wrap gap-3">
                                <div class="avatar avatar-3xl border bg-light">
                                    <img src="@/assets/img/profiles/avatar-01.jpg" alt="item" class="img-fluid rounded">
                                </div>
                                <div>
                                    <label class="form-label">Profile Photo<span class="text-danger"> *</span></label>
                                    <p class="fs-13 mb-3">Image should be with in 5 MB</p>
                                    <div class="d-flex align-items-center">
                                        <div class="btn btn-icon btn-sm btn-white rounded-circle position-relative me-2">
                                            <input type="file" class="form-control position-absolute w-100 h-100 top-0 start-0 opacity-0">
                                            <i class="icon-pencil-line"></i>
                                        </div>
                                        <a href="#" class="btn btn-icon btn-sm btn-white rounded-circle text-danger" data-bs-toggle="modal" data-bs-target="#delete_modal"><i class="icon-trash-2"></i></a>
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
                        <div class="col-lg-12 col-md-12">
                            <div class="mb-3">
                                <label class="form-label">Address Line 1<span class="text-danger"> *</span></label>
                                <input type="text" class="form-control" value="301 Market Street">
                            </div>
                        </div>                                    
                        <div class="col-lg-12 col-md-12">
                            <div class="mb-3">
                                <label class="form-label">Address Line 2</label>
                                <input type="text" class="form-control" value="Riverside Drive">
                            </div>
                        </div>
                        <div class="col-lg-6 col-md-12">
                            <div class="mb-3">
                                <label class="form-label">County</label>
                                <vue-select 
                                    :options="County"
                                    v-model="selectedFive"
                                    placeholder="Select"
                                />
                            </div>
                        </div>
                        <div class="col-lg-6 col-md-12">
                            <div class="mb-3">
                                <label class="form-label">State</label>
                                <vue-select 
                                    :options="State"
                                    v-model="selectedSix"
                                    placeholder="Select"
                                />
                            </div>
                        </div>
                        <div class="col-lg-6 col-md-12">
                            <div class="mb-3">
                                <label class="form-label">City</label>
                                <vue-select 
                                    :options="City"
                                    v-model="selectedSeven"
                                    placeholder="Select"
                                />
                            </div>
                        </div>
                        
                        <div class="col-lg-6 col-md-12">
                            <div class="mb-3">
                                <label class="form-label">Postal Code<span class="text-danger"> *</span></label>
                                <input type="text" class="form-control" value="33128">
                            </div>
                        </div>
                        
                        <div class="col-lg-6 col-md-12">
                            <div class="mb-0">
                                <label class="form-label">Gender</label>
                                <vue-select 
                                    :options="Gender"
                                    v-model="selectedEight"
                                    placeholder="Select"
                                />
                            </div>
                        </div>                                 
                        <div class="col-lg-6 col-md-12">
                            <div class="mb-0">
                                <label class="form-label">Status</label>
                                <vue-select 
                                    :options="Status"
                                    v-model="selectedNine"
                                    placeholder="Select"
                                />
                            </div>
                        </div>
                    </div>
                    <div class="offcanvas-footer d-flex align-items-center gap-2 pt-0 px-3">
                        <button type="button" class="btn btn-dark d-flex align-items-center w-100"><i class="icon-x me-1"></i>Cancel</button>
                        <button type="submit" class="btn btn-primary d-flex align-items-center w-100"><i class="icon-circle-check me-1"></i>Submit</button>
                    </div>
                </div>
            </div>            
        </form>
    </div>
    <!-- End Edit Orders -->

    <!-- Start Filter -->
    <div class="offcanvas offcanvas-end" tabindex="-1" id="filter-offcanvas-2">
        <div class="offcanvas-header pb-0">
            <div class="border-bottom d-flex align-items-center justify-content-between w-100 pb-3">
                <h4 class="offcanvas-title mb-0">Update Bag - Dry Cleaning</h4>
                <button type="button" class="btn-close btn-close-modal" data-bs-dismiss="offcanvas" aria-label="Close"><i class="icon-x"></i></button>
            </div>
        </div>
        <div class="offcanvas-body d-flex flex-column pt-3 pb-2">
            <h6 class="title mb-3 fw-bold">Detergent</h6>

            <!-- Item 1 -->
            <div class="row mb-4 g-3">
                <div class="col-lg-6">
                    <div class="plan-card active">
                        <img src="@/assets/img/icons/brand-icon-1.svg" alt="icon-1" class="img-fluid img-1">
                        <h6><a href="#">Free</a></h6>
                        <p class="price">$0</p>
                    </div>
                </div>
                <div class="col-lg-6">
                    <div class="plan-card">
                        <img src="@/assets/img/icons/brand-icon-2.svg" alt="icon-1" class="img-fluid img-1">
                        <h6><a href="">Premium</a></h6>
                        <p class="price">$40</p>
                    </div>
                </div>
            </div>

            <h6 class="title mb-3 fw-bold">Softener</h6>
            <!-- Item 2 -->
            <div class="row g-3 mb-4">
                <div class="col-lg-4">
                    <div class="plan-card">
                        <img src="@/assets/img/icons/brand-icon-3.svg" alt="icon-1" class="img-fluid img-1">
                        <h6><a href="#">Free</a></h6>
                        <p class="price">$50</p>
                    </div>
                </div>
                
                <div class="col-lg-4">
                    <div class="plan-card">
                        <img src="@/assets/img/icons/brand-icon-4.svg" alt="icon-1" class="img-fluid img-1">
                        <h6><a href="">Premium</a></h6>
                        <p class="price">$100</p>
                    </div>
                </div>

                <div class="col-lg-4">
                    <div class="plan-card">
                        <img src="@/assets/img/icons/brand-icon-5.svg" alt="icon-1" class="img-fluid img-1">
                        <h6><a href="">No</a></h6>
                        <p class="price">$0</p>
                    </div>
                </div>
            </div>

            <h6 class="title mb-3 fw-bold">Dry</h6>
            <!-- Item 3 -->
            <div class="row g-3 mb-4">
                <div class="col-lg-4">
                    <div class="plan-card ">
                        <img src="@/assets/img/icons/brand-icon-6.svg" alt="icon-1" class="img-fluid img-1">
                        <h6 class="mb-0"><a href="#">High Hot</a></h6>
                    </div>
                </div>
                
                <div class="col-lg-4">
                    <div class="plan-card">
                        <img src="@/assets/img/icons/brand-icon-7.svg" alt="icon-1" class="img-fluid img-1">
                        <h6 class="mb-0"><a href="#">Premium</a></h6>
                    </div>
                </div>

                <div class="col-lg-4">
                    <div class="plan-card">
                        <img src="@/assets/img/icons/brand-icon-8.svg" alt="icon-1" class="img-fluid img-1">
                        <h6 class="mb-0"><a href="#">No</a></h6>
                    </div>
                </div>
            </div>

            <!-- DRY  -->
            <div class="card mb-4">
                <div class="card-body p-3">
                    <!-- Item 1 -->
                    <div class="d-flex align-items-center justify-content-between gap-2 flex-wrap mb-3 pb-3 border-bottom">
                        <label class="mb-0 fs-14 fw-medium text-dark" for="switchCheckChecked">Dry Sheets</label>
                        <div class="form-check form-switch mb-0">
                            <input class="form-check-input" type="checkbox" role="switch" id="switchCheckChecked" checked>
                        </div>
                    </div>
                    <!-- Item 2 -->
                    <div class="d-flex align-items-center justify-content-between gap-2 flex-wrap mb-3 pb-3 border-bottom">
                        <label class="mb-0 fs-14 fw-medium text-dark" for="switchCheckChecked-1">Bleach</label>
                        <div class="form-check form-switch mb-0">
                            <input class="form-check-input" type="checkbox" role="switch" id="switchCheckChecked-1">
                        </div>
                    </div>
                    <!-- Item 3 -->
                    <div class="d-flex align-items-center justify-content-between gap-2 flex-wrap mb-3 pb-3 border-bottom">
                        <label class="mb-0 fs-14 fw-medium text-dark" for="switchCheckChecked-2">Oxiclean</label>
                        <div class="form-check form-switch mb-0">
                            <input class="form-check-input" type="checkbox" role="switch" id="switchCheckChecked-2">
                        </div>
                    </div>
                    <!-- Item 4 -->
                    <div class="d-flex align-items-center justify-content-between gap-2 flex-wrap">
                        <label class="mb-0 fs-14 fw-medium text-dark" for="switchCheckChecked-3">Wash Seperately</label>
                        <div class="form-check form-switch mb-0">
                            <input class="form-check-input" type="checkbox" role="switch" id="switchCheckChecked-3">
                        </div>
                    </div>
                   
                </div>
            </div>

            <!-- instructions  -->
            <div class="mb-04">
                <h6 class="title mb-2 fw-bold">Special instructions if any...</h6>
                <textarea class="form-control rounded" rows="4"></textarea>
                <span class="pt-1">Add Minimum 200 Characters</span>
            </div>

        </div>
        <div class="offcanvas-footer d-flex align-items-center gap-2 mt-auto border-0">
            <a href="#" class="btn btn-dark w-100 d-flex align-items-center gap-2" data-bs-dismiss="offcanvas"><i class="icon-x"></i> Cancel</a>
            <a href="#" class="btn btn-primary w-100 d-flex align-items-center gap-2"><i class="icon-circle-check"></i>Update</a>
        </div>
    </div>
    <!-- End Filter -->

    <!-- Start Order deatils -->
    <div class="offcanvas offcanvas-end" tabindex="-1" id="filter-offcanvas-3">
        <div class="offcanvas-header pb-0">
            <div class="border-bottom d-flex align-items-center justify-content-between w-100 pb-3">
                <h4 class="offcanvas-title mb-0">Order Details</h4>
                <button type="button" class="btn-close btn-close-modal" data-bs-dismiss="offcanvas" aria-label="Close"><i class="icon-x"></i></button>
            </div>
        </div>
        <div class="offcanvas-body d-flex flex-column pt-3">
            
            <div class="accordion pos-accordion" id="faq-details-1">

                <!-- FAQ Item -->
                <div class="accordion-item">
                    <h3 class="accordion-header" id="heading-1">
                        <a href="#" class="accordion-button collapsed" data-bs-toggle="collapse" data-bs-target="#collapse-1" aria-controls="collapse-1">
                            Dry Cleaning
                        </a>
                    </h3>
                    <div id="collapse-1" class="accordion-collapse collapse show" data-bs-parent="#faq-details-1">
                        <div class="accordion-body">
                            <div class="accordion-content">
                                <div>
                                    <p class="d-flex align-items-center justify-content-between mb-2 text-dark">Evening Dress × 1  <span class="fw-semibold">$30</span></p>
                                    <p class="d-flex align-items-center justify-content-between mb-2 text-dark">Jumpsuit × 1  <span class="fw-semibold">$11</span></p>
                                    <p class="d-flex align-items-center justify-content-between mb-2 text-dark">Long Coat × 3  <span class="fw-semibold">$76</span></p>
                                    <p class="d-flex align-items-center justify-content-between mb-2 text-dark">Dinner Suit × 3  <span class="fw-semibold">$67</span></p>
                                    <p class="d-flex align-items-center justify-content-between mb-0 text-dark">Down Jacket × 1 <span class="fw-semibold">$37</span></p>
                                    <h6 class="d-flex align-items-center justify-content-between mt-3">Subtotal <span class="fw-bold">$134</span> </h6>
                                </div>
                                <!-- Add Ones -->
                                <div class="mt-4 mb-4">
                                    <div>
                                        <h6 class="mb-2">Add ons</h6>
                                        <div class="d-flex align-items-center gap-2 flex-wrap">
                                            <span class="badge bg-primary-1 text-dark">Detergent  : Free</span>
                                            <span class="badge bg-primary-1 text-dark">Softener  : Free</span>
                                            <span class="badge bg-primary-1 text-dark">Dry  : High Hot</span>
                                            <span class="badge bg-primary-1 text-dark">Dryer Sheet : Yes</span>
                                            <span class="badge bg-primary-1 text-dark">Bleach  : Yes</span>
                                            <span class="badge bg-primary-1 text-dark">Oxyclean  : Yes</span>
                                            <span class="badge bg-primary-1 text-dark">Wash Seperately : Yes</span>
                                        </div>
                                    </div>
                                </div>

                                <div>
                                    <h6 class="mb-2">Special Instruction</h6>
                                    <p class="mb-0">Wash cold on temprature Between 30F and 60F</p>
                                </div>
                            </div> 
                        </div>
                    </div>
                </div>
                <!-- /FAQ Item -->

                <!-- FAQ Item -->
                <div class="accordion-item">
                    <h3 class="accordion-header" id="heading-2">
                        <a href="#" class="accordion-button collapsed" data-bs-toggle="collapse" data-bs-target="#collapse-2" aria-controls="collapse-2">
                            Laundry 
                        </a>
                    </h3>
                    <div id="collapse-2" class="accordion-collapse collapse show" data-bs-parent="#faq-details-2">
                        <div class="accordion-body">
                            <div class="accordion-content">

                                <div>
                                    <p class="d-flex align-items-center justify-content-between mb-2 text-dark">Evening Dress × 1  <span class="fw-semibold">$30</span></p>
                                    <p class="d-flex align-items-center justify-content-between mb-0 text-dark">Down Jacket × 1 <span class="fw-semibold">$37</span></p>
                                    <h6 class="d-flex align-items-center justify-content-between mt-3">Subtotal <span class="fw-bold text-dark">$134</span> </h6>
                                </div>

                                <!-- Add Ones -->
                                <div class="mt-4">
                                    <h6 class="mb-2">Add ons</h6>
                                    <div class="d-flex align-items-center gap-2 flex-wrap">
                                        <span class="badge bg-primary-1 text-dark">Detergent  : Free</span>
                                        <span class="badge bg-primary-1 text-dark">Softener  : Free</span>
                                        <span class="badge bg-primary-1 text-dark">Dry  : High Hot</span>
                                        <span class="badge bg-primary-1 text-dark">Dryer Sheet : Yes</span>
                                        <span class="badge bg-primary-1 text-dark">Bleach  : Yes</span>
                                        <span class="badge bg-primary-1 text-dark">Oxyclean  : Yes</span>
                                        <span class="badge bg-primary-1 text-dark">Wash Seperately : Yes</span>
                                    </div>
                                </div>

                            </div> 
                        </div>
                    </div>
                </div>
                <!-- /FAQ Item -->

                <!-- FAQ Item -->
                <div class="accordion-item border-0 mb-0">
                    <h3 class="accordion-header" id="heading-3">
                        <a href="#" class="accordion-button d-flex align-items-center justify-content-between" data-bs-toggle="collapse" data-bs-target="#collapse-3" aria-expanded="true">
                            Payment Summary
                        </a>
                    </h3>
                    <div id="collapse-3" class="accordion-collapse collapse show" data-bs-parent="#faq-details-2">
                        <div class="accordion-body">
                            <div class="accordion-content">
                                <div>
                                    <p class="d-flex align-items-center justify-content-between mb-2 text-dark">Tax (10%)  <span class="fw-semibold">$5</span></p>
                                    <p class="d-flex align-items-center justify-content-between mb-2 text-dark">Discount (12%) <span class="fw-semibold text-danger">-$16</span></p>
                                    <p class="d-flex align-items-center justify-content-between mb-0 text-dark">Coupon <span class="fw-semibold ">$0</span></p>
                                    <h5 class="d-flex align-items-center justify-content-between mt-4 mb-0">Amount to be Paid <span class="fw-bold text-dark">$164</span> </h5>
                                </div>

                            </div> 
                        </div>
                    </div>
                </div>
                <!-- /FAQ Item -->
                
            </div>
        </div>
    </div>
    <!-- End  Order deatils -->

    <!-- Start Add  -->
    <div class="modal fade" id="evening_dress">
        <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content">
                <div class="modal-header bg-colored border-0 p-4 pb-3">
                    <img src="@/assets/img/icons/tax-modal-icon.svg" alt="modal-icon">
                    <button type="button" class="btn-close btn-close-modal" data-bs-dismiss="modal" aria-label="Close"><i class="icon-x"></i></button>
                </div>
                <form action="#">                             
                    <div class="modal-body">
                        <h4 class="modal-title mb-4">Update Evening Dress</h4>
                        
                        <!-- start row -->
                        <div class="row g-3">
                            <div class="col-md-6">
                                <div>
                                    <label class="form-label">Current Price <span class="text-danger"> *</span></label>
                                    <input type="text" class="form-control">
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div>
                                    <label class="form-label">New Price <span class="text-danger"> *</span></label>
                                    <input type="text" class="form-control">
                                </div>
                            </div>
                            <div class="col-md-12">
                                <div>
                                    <label class="form-label">Note</label>
                                    <textarea class="form-control rounded" rows="4"></textarea>
                                    <span class="d-block pt-1">Add Minimum 200 Characters</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="modal-footer d-flex align-items-center justify-content-between gap-2 pt-1 border-0 flex-nowrap">
                        <button type="button" class="btn btn-dark w-100" data-bs-dismiss="modal"><i class="icon-x me-1"></i>Cancel</button>
                        <button type="submit" class="btn btn-primary w-100"><i class="icon-circle-check me-1"></i>Create New</button>
                    </div>
                </form>      
            </div>
        </div>
    </div>
    <!-- End Add -->

    <!-- Start Add  -->
    <div class="modal fade" id="edit_evening_dress">
        <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content">
                <div class="modal-header bg-colored border-0 p-4 pb-3">
                    <img src="@/assets/img/icons/tax-modal-icon.svg" alt="modal-icon">
                    <button type="button" class="btn-close btn-close-modal" data-bs-dismiss="modal" aria-label="Close"><i class="icon-x"></i></button>
                </div>
                <form action="#">                             
                    <div class="modal-body">
                        <h4 class="modal-title mb-4">Edit Evening Dress</h4>
                        
                        <!-- start row -->
                        <div class="row g-3">
                            <div class="col-md-6">
                                <div>
                                    <label class="form-label">Current Price <span class="text-danger"> *</span></label>
                                    <input type="text" class="form-control"  value="30.00">
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div>
                                    <label class="form-label">New Price <span class="text-danger"> *</span></label>
                                    <input type="text" class="form-control"  value="30.00">
                                </div>
                            </div>
                            <div class="col-md-12">
                                <div>
                                    <label class="form-label">Note</label>
                                    <textarea class="form-control rounded" rows="4"></textarea>
                                    <span class="d-block pt-1">Add Minimum 200 Characters</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="modal-footer d-flex align-items-center justify-content-between gap-2 pt-1 border-0 flex-nowrap">
                        <button type="button" class="btn btn-dark w-100" data-bs-dismiss="modal"><i class="icon-x me-1"></i>Cancel</button>
                        <button type="submit" class="btn btn-primary w-100"><i class="icon-circle-check me-1"></i>Update</button>
                    </div>
                </form>      
            </div>
        </div>
    </div>
    <!-- End Add -->

    <!-- Start Payment Method -->
    <div class="modal fade" id="select_payment">
        <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content">
                <div class="modal-header bg-colored border-0 p-4 pb-3">
                    <img src="@/assets/img/icons/tax-modal-icon.svg" alt="modal-icon">
                    <button type="button" class="btn-close btn-close-modal" data-bs-dismiss="modal" aria-label="Close"><i class="icon-x"></i></button>
                </div>
                <form action="#">                             
                    <div class="modal-body">
                        <h4 class="modal-title mb-4">Select Payment Method</h4>

                        <div class="card select-payment-card">
                            <label for="cash" class="d-flex align-items-center justify-content-between">
                                <h6 class="mb-0"> <img src="@/assets/img/icons/pay-icon-1.svg" alt="icon-1" class="img-fluid img-1"> Cash</h6>
                                <input type="radio" name="paymentMethod" id="cash" class="payment-radio" checked>
                                <span class="custom-radio"></span>
                            </label>
                        </div>
                        
                        <div class="card select-payment-card">
                            <label for="credit-card" class="d-flex align-items-center justify-content-between">
                                <h6 class="mb-0"> <img src="@/assets/img/icons/pay-icon-2.svg" alt="icon-1" class="img-fluid img-1"> Credit Card</h6>
                                <input type="radio" name="paymentMethod" id="credit-card" class="payment-radio">
                                <span class="custom-radio"></span>
                            </label>
                        </div>

                        <div class="card select-payment-card">
                            <label for="collect-delivery" class="d-flex align-items-center justify-content-between">
                                <h6 class="mb-0"> <img src="@/assets/img/icons/pay-icon-3.svg" alt="icon-1" class="img-fluid img-1"> Collect  / Delivery </h6>
                                <input type="radio" name="paymentMethod" id="collect-delivery" class="payment-radio">
                                <span class="custom-radio"></span>
                            </label>
                        </div>

                        <div class="card select-payment-card">
                            <label for="bank" class="d-flex align-items-center justify-content-between">
                                <h6 class="mb-0"> <img src="@/assets/img/icons/pay-icon-4.svg" alt="icon-1" class="img-fluid img-1"> Bank</h6>
                                <input type="radio" name="paymentMethod" id="bank" class="payment-radio">
                                <span class="custom-radio"></span>
                            </label>
                        </div>

                        <div class="card select-payment-card mb-0">
                            <label for="cheque" class="d-flex align-items-center justify-content-between">
                                <h6 class="mb-0"> <img src="@/assets/img/icons/pay-icon-5.svg" alt="icon-1" class="img-fluid img-1"> Cheque </h6>
                                <input type="radio" name="paymentMethod" id="cheque" class="payment-radio">
                                <span class="custom-radio"></span>
                            </label>
                        </div>


                    </div>
                    <div class="modal-footer d-flex align-items-center justify-content-between gap-2 pt-1 border-0 flex-nowrap">
                        <button type="button" class="btn btn-dark w-100" data-bs-dismiss="modal"><i class="icon-x me-1"></i>Cancel</button>
                        <button type="submit" class="btn btn-primary w-100"><i class="icon-circle-check me-1"></i>Create Order</button>
                    </div>
                </form>     
            </div>
        </div>
    </div>
    <!-- End Payment Method -->

    <!-- Start Pickup Delivery -->
    <div class="modal fade" id="pickup_delivery">
        <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content">
                <div class="modal-header bg-colored border-0 p-4 pb-3">
                    <img src="@/assets/img/addon/pos-header-img-3.png" alt="modal-icon" class="">
                    <button type="button" class="btn-close btn-close-modal" data-bs-dismiss="modal" aria-label="Close"><i class="icon-x"></i></button>
                </div>
                <form action="#">                             
                    <div class="modal-body">
                        <h4 class="modal-title mb-4">Pickup and Delivery</h4>

                        <!-- start row -->
                        <div class="row g-3">
                            <div class="col-md-12">
                                <div>
                                    <label class="form-label">Customer Address <span class="text-danger"> *</span></label>
                                    <vue-select 
                                        :options="Customer"
                                        v-model="selectedTen"
                                        placeholder="Select"
                                    />
                                </div>
                            </div>
                            <div class="col-md-12">
                                <div>
                                    <label class="form-label">Pickup Date and Time <span class="text-danger"> *</span></label>
                                    <div class="d-flex align-items-center justify-content-between gap-3">
                                        <div class="input-group w-100 input-group-flat">
                                            <a-date-picker v-model="valueOne" class="form-control" placeholder="dd/mm/yyyy" />
                                            <span class="input-group-text">
                                                <i class="icon-calendar-fold"></i>
                                            </span>
                                        </div>
    
                                        <div class="input-group w-100 input-group-flat">
                                            <a-time-picker v-model:value="value3" class="form-control" />
                                            <span class="input-group-text">
                                                <i class="icon-clock"></i>
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-12">
                                <div>
                                    <label class="form-label">Delivery Date and Time <span class="text-danger"> *</span></label>
                                    <div class="d-flex align-items-center justify-content-between gap-3">
                                        <div class="input-group w-100 input-group-flat">
                                            <a-date-picker v-model="valueTwo" class="form-control" placeholder="26/01/2026" />
                                            <span class="input-group-text">
                                                <i class="icon-calendar-fold"></i>
                                            </span>
                                        </div>    
                                        <div class="input-group w-100 input-group-flat">
                                            <a-time-picker v-model:value="value2" class="form-control" />
                                            <span class="input-group-text">
                                                <i class="icon-clock"></i>
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-12">
                                <div>
                                    <label class="form-label">Order / Delivery instructions if any...</label>
                                    <textarea class="form-control rounded" rows="4"></textarea>
                                    <span class="d-block pt-1">Add Minimum 200 Characters</span>
                                </div>
                            </div>
                        </div>
                        <!-- end row -->

                    </div>
                    <div class="modal-footer d-flex align-items-center justify-content-between gap-2 pt-1 border-0 flex-nowrap">
                        <button type="button" class="btn btn-dark w-100" data-bs-dismiss="modal"><i class="icon-x me-1"></i>Cancel</button>
                        <button type="submit" class="btn btn-primary w-100"><i class="icon-circle-check me-1"></i>Update</button>
                    </div>
                </form>     
            </div>
        </div>
    </div>
    <!-- End Pickup Delivery -->

    <!-- Start Order Created -->
    <div class="modal fade" id="order_created">
        <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content select-order-item">
                <form action="#">                             
                    <div class="modal-body">

                        <div class="avatar">
                            <img src="@/assets/img/icons/tick-circle.svg" alt="tick-circle" class="img-fluid img-1">
                        </div>

                        <div class="mb-4 pb-4 border-bottom text-center">
                            <h3 class="mb-2">Order Created</h3>
                            <p class="mb-0">Order Created Successfully. Reference: <span class="text-dark">#OD2ED</span> </p>
                        </div>

                        <div class="mb-4 text-center">
                            <p class="mb-2">Total Payment</p>
                            <h4 class="mb-0">$164</h4>
                        </div>

                        <div class="row row-gap-3">
                            <!-- Item 1 -->
                            <div class="col-sm-6">
                                <div class="card mb-0">
                                    <div class="card-body text-center p-3">
                                        <p class="mb-1 fs-13">Ref Number</p>
                                        <h6 class="mb-0 fs-14 fw-semibold">000085752257</h6>
                                    </div>
                                </div>
                            </div>
                            <!-- Item 2 -->
                            <div class="col-sm-6">
                                <div class="card mb-0">
                                    <div class="card-body text-center p-3">
                                        <p class="mb-1 fs-13">Payment Time</p>
                                        <h6 class="mb-0 fs-14 fw-semibold">25 Feb 2025, 13:22</h6>
                                    </div>
                                </div>
                            </div>
                            <!-- Item 3 -->
                            <div class="col-sm-6">
                                <div class="card mb-0">
                                    <div class="card-body text-center p-3">
                                        <p class="mb-1 fs-13">Payment Method</p>
                                        <h6 class="mb-0 fs-14 fw-semibold">Bank Transfer</h6>
                                    </div>
                                </div>
                            </div>
                            <!-- Item 4 -->
                            <div class="col-sm-6">
                                <div class="card mb-0">
                                    <div class="card-body text-center p-3">
                                        <p class="mb-1 fs-13">Customer Name</p>
                                        <h6 class="mb-0 fs-14 fw-semibold">Antonio Roberto</h6>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="row row-gap-3 mt-4 pt-4 border-top">
                            <div class="col-md-4 col-sm-6">
                                <a href="#" class="d-flex align-items-center gap-2 btn btn-outline-white"> <i class="icon-printer"></i> Print Tags</a>
                            </div>
                            <div class="col-md-4 col-sm-6">
                                <a href="#" class="d-flex align-items-center gap-2 btn btn-outline-white" data-bs-toggle="modal" data-bs-target="#view_invoices"> <i class="icon-file-chart-column"></i> View Invoice</a>
                            </div>
                            <div class="col-md-4 col-sm-6">
                                <a href="#" class="d-flex align-items-center gap-2 btn btn-outline-white"> <i class="icon-files"></i> Download </a>
                            </div>
                            <div class="col-md-4 col-sm-6">
                                <a href="#" class="d-flex align-items-center gap-2 btn btn-primary"> <i class="icon-users-round"></i> Customer Copy</a>
                            </div>
                            <div class="col-md-4 col-sm-6">
                                <a href="#" class="d-flex align-items-center gap-2 btn btn-secondary"> <i class="icon-ungroup"></i> Main Copy</a>
                            </div>
                            <div class="col-md-4 col-sm-6">
                                <a href="#" class="d-flex align-items-center gap-2 btn btn-dark" data-bs-dismiss="modal"> <i class="icon-x"></i> Close</a>
                            </div>
                        </div>

                    </div>
                </form>      
            </div>
        </div>
    </div>
    <!-- End Order Created -->

    <!-- Delete Modal  -->
    <div class="modal fade" id="delete_modal">
        <div class="modal-dialog modal-dialog-centered modal-sm">
            <div class="modal-content">
                <div class="modal-body text-center p-4">
                    <div class="mb-4">
                        <span class="avatar avatar-lg rounded-circle bg-danger">
                            <i class="icon-trash fs-24"></i>
                        </span>
                    </div>
                    <h4 class="mb-1">Delete Confirmation</h4>
                    <p class="mb-4">Are you sure you want to delete? </p>
                    <div class="d-flex justify-content-center gap-2">
                        <a href="#" class="btn btn-light w-100" data-bs-dismiss="modal">Close</a>
                        <router-link :to="lp('/pos')" class="btn btn-danger w-100">Delete</router-link>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- End Delete Modal  -->  

    <!-- View Invoices -->
    <div class="modal fade" id="view_invoices">
        <div class="modal-dialog modal-lg modal-dialog-centered">
            <div class="modal-content">
                <div class="modal-header border-0 p-4 pb-3">
                    <h5 class="modal-title fw-normal">Invoice</h5>
                    <button type="button" class="btn-close btn-close-modal" data-bs-dismiss="modal" aria-label="Close"><i class="icon-x"></i></button>
                </div>
                                                
                <div class="modal-body p-4 pt-1">             
                    <div class="card mb-3">
                        <div class="card-body">
                            <div class="mb-4">
                                <div class="row justify-content-between align-items-center border-bottom pb-4">
                                    <div class="col-md-4">
                                        <div class="mb-2 invoice-logo">
                                            <img src="@/assets/img/car-logo.svg" width="130" class="img-fluid logo" alt="logo">
                                            <img src="@/assets/img/car-logo-white.svg" width="130" class="img-fluid logo-white d-none" alt="logo">
                                        </div>
                                    </div>
                                    <div class="col-md-4">
                                    <div class="d-flex align-items-center justify-content-center">
                                            <img src="@/assets/img/invoices/paid-invoices.svg" alt="paid-invoices-img">
                                    </div>
                                    </div>
                                    <div class="col-md-4 text-end">
                                        <h6 class="mb-2">#INV5465</h6>
                                        <p class="mb-0 text-dark">GST / Tax ID:54665589</p>
                                    </div>
                                </div>
                            </div>
                            <div class="mb-4">
                                <div class="row align-items-center border-bottom pb-4">
                                    <div class="col-md-4">
                                        <h6 class="mb-2">Invoice From</h6>
                                        <p class="text-dark fw-semibold mb-2">DreamsPOS</p>
                                        <p class="mb-2">15 Hodges Mews, <br> High Wycombe HP12 3JL, <br> United Kingdom</p>
                                        <p class="mb-0">Phone : +1 45659 96566</p>
                                    </div>
                                    <div class="col-md-4">
                                        <h6 class="mb-2">Bill To </h6>
                                        <p class="text-dark fw-semibold mb-2">Andrew Fletcher</p>
                                        <p class="mb-2">1147 Rohan Drive Suite,Burlington, VT / 8202115 <br> United Kingdom</p>
                                        <p class="mb-0">Phone : +1 45659 96566</p>
                                    </div>
                                </div>
                            </div>
                            <div class="mb-4">
                                <h6 class="mb-3">Order Details</h6>
                                <div class="table-responsive table-nowrap border rounded">
                                    <table class="table mb-0">
                                        <thead class="thead-light">
                                            <tr>
                                                <th>#</th>
                                                <th>Item Details</th>
                                                <th>Quantity</th>
                                                <th>Rate</th>
                                                <th>Amount</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>1</td>
                                                <td>
                                                    <div>
                                                        <h6 class="fs-14 fw-semibold mb-1">Evening Dress <span class="fw-normal text-body">(Washed, ironed)</span></h6>
                                                        <p class="mb-0">Notes : Washed, ironed</p>
                                                    </div>
                                                </td>
                                                <td>2</td>
                                                <td>$200.00</td>
                                                <td>$396.00</td>
                                            </tr>
                                            <tr>
                                                <td>2</td>
                                                <td>
                                                    <div>
                                                        <h6 class="fs-14 fw-semibold mb-1">Jumpsuit <span class="fw-normal text-body">(Washed, ironed & hung)</span></h6>
                                                        <p class="mb-0">Notes : Washed, ironed</p>
                                                    </div>
                                                </td>
                                                <td>1</td>
                                                <td>$350.00</td>
                                                <td>$365.75</td>
                                            </tr>
                                            <tr>
                                                <td>3</td>
                                                <td>
                                                    <div>
                                                        <h6 class="fs-14 fw-semibold mb-1">Dinner Suit <span class="fw-normal text-body">(Washed, ironed)</span></h6>
                                                        <p class="mb-0">Notes : Washed, ironed</p>
                                                    </div>
                                                </td>
                                                <td>1</td>
                                                <td>$399.00</td>
                                                <td>$398.90</td>
                                            </tr>
                                            <tr>
                                                <td>4</td>
                                                <td>
                                                    <div>
                                                        <h6 class="fs-14 fw-semibold mb-1">Down Jacket <span class="fw-normal text-body">(Washed, tumble)</span></h6>
                                                        <p class="mb-0">Notes : Washed, ironed</p>
                                                    </div>
                                                </td>
                                                <td>4</td>
                                                <td>$100.00</td>
                                                <td>$396.00</td>
                                            </tr>
                                            
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                            <div class="mb-0">
                                <div class="row justify-content-center align-items-center">
                                    <div class="col-md-6">
                                        <h6 class="mb-2">Terms and Conditions</h6>
                                        <div class="mb-4">
                                            <p class="mb-0">1. Goods once sold cannot be taken back or exchanged.</p>
                                            <p class="mb-0">2. We are not the manufacturers the company provides warranty</p>
                                        </div>
                                        <div class="px-3 py-2 bg-light">
                                            <p class="text-dark mb-0">Note : Please ensure payment is made within 7 days of invoice date.</p>
                                        </div>
                                    </div>
                                    <div class="col-md-6">
                                        <div class="mb-3">
                                            <div class="row align-items-center pb-3 border-bottom">
                                                <div class="col-md-6">
                                                    <p class="text-dark fw-semibold mb-3">Amount</p>
                                                    <p class="text-dark fw-semibold mb-3">CGST (9%)</p>
                                                    <p class="text-dark fw-semibold mb-3">SGST (9%)</p>
                                                    <p class="text-dark fw-semibold mb-3">Discount (25%)</p>
                                                </div>
                                                <div class="col-md-6 text-end">
                                                    <p class="text-dark fw-semibold mb-3">$1,793.12</p>
                                                    <p class="text-dark fw-semibold mb-3">$18</p>
                                                    <p class="text-dark fw-semibold mb-3">$18</p>
                                                    <p class="text-danger fw-semibold">- $18</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="d-flex justify-content-between algin-item-center">
                                            <h6>Total ($)</h6>
                                            <h6>$1,972.43</h6>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="d-flex justify-content-center algin-item-center">
                        <div class="d-flex justify-content-center algin-item-center gap-3">
                            <button type="button" class="btn btn-dark d-inline-flex align-items-center"><i class="icon-download me-1"></i>Download PDF</button>
                            <button type="button" class="btn btn-white d-inline-flex align-items-center"><i class="icon-printer me-1"></i>Print</button>
                        </div>
                    </div>
                </div>
                
            </div>
        </div>
    </div>
    <!-- View Invoices End -->

    <!-- Customer Details -->
    <div class="offcanvas offcanvas-end" tabindex="-1" id="customer_view_details">
        <div class="offcanvas-header d-flex align-items-center justify-content-between">
            <h4 class="offcanvas-title mb-0">Customer Details</h4>
            <button type="button" class="btn-close btn-close-modal" data-bs-dismiss="offcanvas" aria-label="Close"><i class="icon-x"></i></button>
        </div>
        <form @submit.prevent="submitForm" class="d-flex flex-column overflow-y-auto h-100">
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
                        <span class="d-flex align-items-center"><i class="icon-mail text-gray-9 me-1"></i>Email</span>
                        <span class="text-gray-9">david@example.com</span>
                    </div>
                    <div class="d-flex align-items-center justify-content-between mb-3">
                        <span class="d-flex align-items-center"><i class="icon-phone text-gray-9 me-1"></i>Phone</span>
                        <span class="text-gray-9">+1 14524 54595</span>
                    </div>
                    <div class="d-flex align-items-center justify-content-between mb-3">
                        <span class="d-flex align-items-center"><i class="icon-map-pin-check-inside text-gray-9 me-1"></i>Address</span>
                        <span class="text-wrap-1 text-gray-9">301 Market Street, Riverside Drive, FL 33128, USA</span>
                    </div>
                    <div class="d-flex align-items-center justify-content-between">
                        <span class="d-flex align-items-center"><i class="icon-user text-gray-9 me-1"></i>Gender</span>
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
                        <div class="d-flex align-items-center justify-content-between border-bottom flex-wrap row-gap-3 pb-3 mb-3">
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
                                <p class="mb-1">Deliver  Date & Time</p>
                                <span class="text-gray-9 fw-medium">19 Jun 2026, 05 AM - 06 PM</span>
                            </div>
                        </div>
                    </div>
                    <div class="border p-3 rounded">
                        <div class="d-flex align-items-center justify-content-between border-bottom flex-wrap row-gap-3 pb-3 mb-3">
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
                                <p class="mb-1">Deliver  Date & Time</p>
                                <span class="text-gray-9 fw-medium">13 Jun 2026, 08 AM - 09 PM</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="offcanvas-footer d-flex align-items-center gap-2 pt-2">
                <button type="button" class="btn btn-dark d-flex align-items-center w-100" data-bs-toggle="offcanvas" data-bs-target="#edit_customer"><i class="icon-pencil-line me-1"></i>Edit Customer</button>
            </div>            
        </form>
    </div>
    <!-- End Customer Details -->

    <!-- Edit Customer -->
    <div class="offcanvas offcanvas-end" tabindex="-1" id="edit_customer">
        <div class="offcanvas-header d-flex align-items-center justify-content-between">
            <h4 class="offcanvas-title mb-0">Edit Customer</h4>
            <button type="button" class="btn-close btn-close-modal" data-bs-dismiss="offcanvas" aria-label="Close"><i class="icon-x"></i></button>
        </div>
        <form @submit.prevent="submitForm" class="d-flex flex-column overflow-y-auto h-100">
            <div class="offcanvas-body pb-0">
                <div class="row gx-3">
                    <div class="col-md-12">
                        <div class="mb-3 d-flex align-items-center flex-wrap gap-3">
                            <div class="avatar avatar-3xl border bg-light flex-shrink-0">
                                <img src="@/assets/img/profiles/avatar-01.jpg" alt="customer" class="img-fluid">
                            </div>
                            <div>
                                <label class="form-label">Category Image<span class="text-danger"> *</span></label>
                                <p class="fs-13 mb-3">Image should be with in 5 MB</p>
                                <div class="d-flex align-items-center">
                                    <div class="btn btn-icon btn-sm btn-white rounded-circle position-relative me-2">
                                        <input type="file" class="form-control position-absolute w-100 h-100 top-0 start-0 opacity-0">
                                        <i class="icon-pencil-line"></i>
                                    </div>
                                    <a href="#" class="btn btn-icon btn-sm btn-white rounded-circle text-danger"><i class="icon-trash-2"></i></a>
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
                                v-model="selectedEleven"
                                placeholder="Select"
                            />
                        </div>
                    </div>
                    <div class="col-lg-6 col-md-12">
                        <div class="mb-3">
                            <label class="form-label">Status</label>
                            <vue-select 
                                :options="Status"
                                v-model="selectedTwelve"
                                placeholder="Select"
                            />
                        </div>
                    </div>
                </div>
            </div>
            <div class="offcanvas-footer d-flex align-items-center gap-2 pt-2">
                <button type="button" class="btn btn-dark d-flex align-items-center w-100" data-bs-dismiss="offcanvas"><i class="icon-x me-1"></i>Cancel</button>
                <button type="submit" class="btn btn-primary d-flex align-items-center w-100"><i class="icon-circle-check me-1"></i>Save Changes</button>
            </div>            
        </form>
    </div>
    <!-- End Edit Customer -->
</template>

<script>
import { ref } from "vue";
const valueOne = ref();
const valueTwo = ref();
const value2 = ref(null);
const value3 = ref(null);

export default {
    data() {
        return {
            valueOne,
            valueTwo,
            value2,
            value3,
            selected: [],
            selectedOne: [],
            selectedTwo: [],
            selectedThree: [],
            selectedFour: [],
            selectedFive: "USA",
            selectedSix: "Florida",
            selectedSeven: "Miami",
            selectedEight: "Male",
            selectedNine: "Active",
            selectedTen: "Andrew Merkel",
            selectedEleven: "Male",
            selectedTwelve: "Active",
            County: [
                { label: 'Select', value: 'Select' },
                { label: 'USA', value: 'USA' },
                { label: 'Canada', value: 'Canada' },
                { label: 'Australia', value: 'Australia' },
                { label: 'India', value: 'India' },
                { label: 'United Kingdom', value: 'United Kingdom' },
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
            Customer: [
                { label: 'Andrew Merkel', value: 'Andrew Merkel' },
                { label: 'Noah Sullivan', value: 'Noah Sullivan' },
                { label: 'Mia Roberts', value: 'Mia Roberts' },
            ],
        }
    },
    methods: {
        submitForm() {
            this.$router.push(this.lp("/customer/customers-list"));
        },
    },
}
</script>