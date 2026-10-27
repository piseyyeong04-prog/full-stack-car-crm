<template>

    <!-- View Order -->
    <div class="modal fade" id="view_order">
        <div class="modal-dialog modal-xl modal-dialog-centered">
            <div class="modal-content">
                <div class="modal-header border-bottom p-4 pb-3">
                    <h4 class="modal-title">Order Details</h4>
                    <button type="button" class="btn-close btn-close-modal position-relative" data-bs-dismiss="modal" aria-label="Close"><i class="icon-x"></i></button>
                </div>
                                                
                <div class="modal-body p-4">   
                    <div class="mb-4">
                        <div class="row g-3">
                                <div class="col-lg-2 col-sm-4">
                                <span class="d-block fs-13 mb-1">Order ID</span>
                                <p class="fw-medium text-dark mb-0">OD1245</p>
                            </div>
                            <div class="col-lg-2 col-sm-4">
                                <span class="d-block fs-13 mb-1">Amount</span>
                                <p class="fw-medium text-dark mb-0">$565</p>
                            </div>
                            <div class="col-lg-2 col-sm-4">
                                <span class="d-block fs-13 mb-1">No of Items</span>
                                <p class="fw-medium text-dark mb-0">20</p>
                            </div>
                            <div class="col-lg-2 col-sm-4">
                                <span class="d-block fs-13 mb-1">Status</span>
                                <span class="badge badge-soft-info">Collected</span>
                            </div>
                            <div class="col-lg-2 col-sm-4">
                                <span class="d-block fs-13 mb-1">Order Date</span>
                                <p class="fw-medium text-dark mb-0">Dec 08, 2025 09:28 AM</p>
                            </div>                                    
                            <div class="col-lg-2 col-sm-4">
                                <div class="text-lg-end">
                                    <img src="@/assets/img/icons/paid.svg" alt="paid" class="img-fluid">
                                </div>
                            </div>
                        </div>

                    </div>

                    <div class="bg-light border rounded p-3 mb-4">
                        <div class="order-wizard position-relative row g-3 g-lg-0 row-cols-1 row-cols-lg-5">
                            <div class="order-item z-1 active text-center position-relative">
                                <div class="order-icon avatar avatar-rounded mb-2">
                                    <i class="icon-check fs-24"></i>
                                </div>
                                <div>
                                    <h6 class="fs-14 fw-semibold mb-2">Pending</h6>
                                    <p class="fs-13 mb-0">2025-12-08 09:28:15</p>
                                </div>
                            </div>
                            <div class="order-item z-1 active text-center position-relative">
                                <div class="order-icon avatar avatar-rounded mb-2">
                                    <i class="icon-check fs-24"></i>
                                </div>
                                <div>
                                    <h6 class="fs-14 fw-semibold mb-2">Approved</h6>
                                    <p class="fs-13 mb-0">2025-12-08 09:28:15</p>
                                </div>
                            </div>
                            <div class="order-item z-1 active text-center position-relative">
                                <div class="order-icon avatar avatar-rounded mb-2">
                                    <i class="icon-check fs-24"></i>
                                </div>
                                <div>
                                    <h6 class="fs-14 fw-semibold mb-2">Collected</h6>
                                    <p class="fs-13 mb-0">2025-12-08 09:28:15</p>
                                </div>
                            </div>
                            <div class="order-item z-1 text-center position-relative">
                                <div class="order-icon avatar avatar-rounded mb-2">
                                    <i class="icon-check fs-24"></i>
                                </div>
                                <div>
                                    <h6 class="fs-14 fw-semibold mb-0">Verified and Paid</h6>
                                </div>
                            </div>
                            <div class="order-item z-1 text-center position-relative">
                                <div class="order-icon avatar avatar-rounded mb-2">
                                    <i class="icon-check fs-24"></i>
                                </div>
                                <div>
                                    <h6 class="fs-14 fw-semibold mb-0">Delivered</h6>
                                </div>
                            </div>
                        </div>
                    </div>
                    <h5 class="mb-3">Order Items</h5>

                    <div class="row g-4">
                        <div class="col-lg-6">  
                            <div class="accordion accordion-bordered" id="orderAccordion">                                
                                <div class="accordion-item">
                                    <h2 class="accordion-header">
                                        <button class="accordion-button bg-transparent fw-bold fs-16" type="button" data-bs-toggle="collapse" data-bs-target="#cleaning" aria-expanded="true">
                                            Dry Cleaning
                                        </button>
                                    </h2>
                                    <div id="cleaning" class="accordion-collapse collapse show" data-bs-parent="#orderAccordion">
                                        <div class="accordion-body border-0 pt-0">
                                            <div class="mb-3">                            
                                                <p class="mb-2">Evening Dress × 1 <span class="fw-medium text-dark float-end">$30</span></p>
                                                <p class="mb-2">Jumpsuit × 1 <span class="fw-medium text-dark float-end">$11</span></p>
                                                <p class="mb-2">Long Coat × 3 <span class="fw-medium text-dark float-end">$11</span></p>
                                                <p class="mb-2">Dinner Suit × 3 <span class="fw-medium text-dark float-end">$11</span></p>
                                                <p class="mb-2">Down Jacket × 1 <span class="fw-medium text-dark float-end">$11</span></p>
                                                <h6 class="mb-0">Sub Total <span class="fw-medium text-dark float-end">$164</span></h6>
                                            </div>  
                                            <div class="mb-3">
                                                <h6 class="mb-3">Add Ons</h6>
                                                <div class="d-flex align-items-center gap-2 flex-wrap">
                                                    <span class="badge badge-soft-primary">Detergent  : Free</span>
                                                    <span class="badge badge-soft-primary">Softener  : Free</span>
                                                    <span class="badge badge-soft-primary">Dry  : High Hot</span>
                                                    <span class="badge badge-soft-primary">Dryer Sheet : Yes</span>
                                                    <span class="badge badge-soft-primary">Bleach  : Yes</span>
                                                    <span class="badge badge-soft-primary">Oxyclean  : Yes</span>
                                                    <span class="badge badge-soft-primary">Wash Seperately : Yes</span>
                                                </div>
                                            </div> 
                                            <div class="mb-0">
                                                <h6 class="mb-3">Special Instruction</h6>
                                                <p class="mb-0">Wash cold on temprature Between 30F and 60F</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="accordion-item">
                                    <h2 class="accordion-header">
                                        <button class="accordion-button bg-transparent fw-bold fs-16" type="button" data-bs-toggle="collapse" data-bs-target="#laundry" aria-expanded="true">
                                            Laundry
                                        </button>
                                    </h2>
                                    <div id="laundry" class="accordion-collapse collapse" data-bs-parent="#orderAccordion">
                                        <div class="accordion-body border-0 pt-0">
                                            <div class="mb-3">                            
                                                <p class="mb-2">Dress Shorten × 1 <span class="fw-medium text-dark float-end">$30</span></p>
                                                <p class="mb-2">Skirt × 1 <span class="fw-medium text-dark float-end">$11</span></p>
                                                <h6 class="mb-0">Sub Total <span class="fw-medium text-dark float-end">$41</span></h6>
                                            </div>  
                                            <div class="mb-3">
                                                <h6 class="mb-3">Add Ons</h6>
                                                <div class="d-flex align-items-center gap-2 flex-wrap">
                                                    <span class="badge badge-soft-primary">Detergent  : Free</span>
                                                    <span class="badge badge-soft-primary">Softener  : Free</span>
                                                    <span class="badge badge-soft-primary">Dry  : High Hot</span>
                                                    <span class="badge badge-soft-primary">Dryer Sheet : Yes</span>
                                                    <span class="badge badge-soft-primary">Bleach  : Yes</span>
                                                    <span class="badge badge-soft-primary">Oxyclean  : Yes</span>
                                                    <span class="badge badge-soft-primary">Wash Seperately : Yes</span>
                                                </div>
                                            </div> 
                                            <div class="mb-0">
                                                <h6 class="mb-3">Special Instruction</h6>
                                                <p class="mb-0">Wash cold on temprature Between 30F and 60F</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="accordion-item">
                                    <h2 class="accordion-header">
                                        <button class="accordion-button bg-transparent fw-bold fs-16" type="button" data-bs-toggle="collapse" data-bs-target="#wet" aria-expanded="true">
                                            Wet Cleaning
                                        </button>
                                    </h2>
                                    <div id="wet" class="accordion-collapse collapse" data-bs-parent="#orderAccordion">
                                        <div class="accordion-body border-0 pt-0">
                                            <div class="mb-3">                            
                                                <p class="mb-2">Pleated Skirt × 1 <span class="fw-medium text-dark float-end">$20</span></p>
                                                <h6 class="mb-0">Sub Total <span class="fw-medium text-dark float-end">$20</span></h6>
                                            </div>  
                                            <div class="mb-3">
                                                <h6 class="mb-3">Add Ons</h6>
                                                <div class="d-flex align-items-center gap-2 flex-wrap">
                                                    <span class="badge badge-soft-primary">Detergent  : Free</span>
                                                    <span class="badge badge-soft-primary">Softener  : Free</span>
                                                    <span class="badge badge-soft-primary">Dry  : High Hot</span>
                                                    <span class="badge badge-soft-primary">Dryer Sheet : Yes</span>
                                                    <span class="badge badge-soft-primary">Bleach  : Yes</span>
                                                    <span class="badge badge-soft-primary">Oxyclean  : Yes</span>
                                                    <span class="badge badge-soft-primary">Wash Seperately : Yes</span>
                                                </div>
                                            </div> 
                                            <div class="mb-0">
                                                <h6 class="mb-3">Special Instruction</h6>
                                                <p class="mb-0">Wash cold on temprature Between 30F and 60F</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="accordion-item">
                                    <h2 class="accordion-header">
                                        <button class="accordion-button bg-transparent fw-bold fs-16" type="button" data-bs-toggle="collapse" data-bs-target="#wash" aria-expanded="true">
                                            Wash & Iron
                                        </button>
                                    </h2>
                                    <div id="wash" class="accordion-collapse collapse" data-bs-parent="#orderAccordion">
                                        <div class="accordion-body border-0 pt-0">
                                            <div class="mb-3">                            
                                                <p class="mb-2">Silk Trouser × 1 <span class="fw-medium text-dark float-end">$30</span></p>
                                                <h6 class="mb-0">Sub Total <span class="fw-medium text-dark float-end">$30</span></h6>
                                            </div>  
                                            <div class="mb-3">
                                                <h6 class="mb-3">Add Ons</h6>
                                                <div class="d-flex align-items-center gap-2 flex-wrap">
                                                    <span class="badge badge-soft-primary">Detergent  : Free</span>
                                                    <span class="badge badge-soft-primary">Softener  : Free</span>
                                                    <span class="badge badge-soft-primary">Dry  : High Hot</span>
                                                    <span class="badge badge-soft-primary">Dryer Sheet : Yes</span>
                                                    <span class="badge badge-soft-primary">Bleach  : Yes</span>
                                                    <span class="badge badge-soft-primary">Oxyclean  : Yes</span>
                                                    <span class="badge badge-soft-primary">Wash Seperately : Yes</span>
                                                </div>
                                            </div> 
                                            <div class="mb-0">
                                                <h6 class="mb-3">Special Instruction</h6>
                                                <p class="mb-0">Wash cold on temprature Between 30F and 60F</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-6">
                            <div class="bg-warning-subtle rounded border border-warning p-3 mb-4">
                                <div class="d-flex align-items-center justify-content-between mb-2">
                                    <h5 class="mb-0">Order Notes</h5>
                                    <a href="#" class="btn btn-icon btn-md btn-white p-0"><i class="icon-pencil-line"></i></a>
                                </div>
                                <p class="mb-0">Use mild detergent only No bleach on any clothes & Separate whites & colored clothes, Steam press shirts only, Fold clothes, do not hang.</p>
                            </div>
                            <div class="bg-white rounded border p-3 mb-4">
                                <h5 class="mb-3">Customer</h5>
                                <div class="d-flex align-items-center justify-content-between pb-3 mb-3 border-bottom flex-wrap gap-3">
                                    <div class="d-flex align-items-center">
                                        <div class="avatar avatar-lg avatar-rounded me-2">
                                            <img src="@/assets/img/profiles/avatar-06.jpg" alt="customer" class="img-fluid">
                                        </div>
                                        <div>
                                            <h6 class="fs-14 fw-semibold mb-1">Kelley Davis</h6>
                                            <p class="fs-13 mb-0">No of Order : 12</p>
                                        </div>
                                    </div>
                                    <div class="d-flex align-items-center">
                                        <span class="avatar avatar-sm avatar-rounded bg-light border text-dark me-2">
                                            <i class="icon-phone fs-16"></i>
                                        </span>
                                        <p class="text-dark mb-0">+1 545698 54589</p>
                                    </div>
                                </div>
                                <div class="d-flex align-items-center justify-content-between mb-3">
                                    <h5 class="mb-0">Pickup / Delivery Address</h5>
                                    <a href="#" class="btn btn-icon btn-md btn-white p-0"><i class="icon-pencil-line"></i></a>
                                </div>
                                <div class="row g-4">
                                    <div class="col-md-6">
                                        <div class="d-flex align-items-center justify-content-between flex-wrap gap-1 mb-2">
                                            <h6 class="fs-14 fw-semibold mb-0">Pickup Address</h6>
                                            <a href="#" class="link-orange">View Map</a>
                                        </div>
                                        <div class="mb-2">
                                            <iframe class="rounded w-100" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2967.8862835683544!2d-73.98256668525309!3d41.93829486962529!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89dd0ee3286615b7%3A0x42bfa96cc2ce4381!2s132%20Kingston%20St%2C%20Kingston%2C%20NY%2012401%2C%20USA!5e0!3m2!1sen!2sin!4v1670922579281!5m2!1sen!2sin"  allowfullscreen loading="lazy" referrerpolicy="no-referrer-when-downgrade" title="Map"></iframe>
                                        </div>
                                        <p class="text-dark mb-1">742 Evergreen Terrace, IL 62704</p>
                                        <p class="mb-0">on Friday, Dec 2025, 11 AM - 12 PM </p>
                                    </div>
                                    <div class="col-md-6">
                                        <div class="d-flex align-items-center justify-content-between flex-wrap gap-1 mb-2">
                                            <h6 class="fs-14 fw-semibold mb-0">Delivery Address</h6>
                                            <a href="#" class="link-orange">View Map</a>
                                        </div>
                                        <div class="mb-2">
                                            <iframe class="rounded w-100" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2967.8862835683544!2d-73.98256668525309!3d41.93829486962529!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89dd0ee3286615b7%3A0x42bfa96cc2ce4381!2s132%20Kingston%20St%2C%20Kingston%2C%20NY%2012401%2C%20USA!5e0!3m2!1sen!2sin!4v1670922579281!5m2!1sen!2sin"  allowfullscreen loading="lazy" referrerpolicy="no-referrer-when-downgrade" title="Map"></iframe>
                                        </div>
                                        <p class="text-dark mb-1">1600 Pennsylvania NW, DC 20500</p>
                                        <p class="mb-0">on Sunday, Dec 2025, 01 PM - 02 PM </p>
                                    </div>
                                </div>
                            </div>
                            <div class="bg-white rounded border p-3 mb-0">
                                <h5 class="mb-3">Payment Details</h5>
                                <div class="row row-cols-lg-5 row-cols-2 g-2">
                                    <div>
                                        <p class="fs-13 mb-1">Payment Type</p>
                                        <p class="fw-medium text-dark mb-0">Card</p>
                                    </div>
                                    <div>
                                        <p class="fs-13 mb-1">Total</p>
                                        <p class="fw-medium text-dark mb-0">$164</p>
                                    </div>
                                    <div>
                                        <p class="fs-13 mb-1">Discount</p>
                                        <p class="fw-medium text-dark mb-0">$16</p>
                                    </div>
                                    <div>
                                        <p class="fs-13 mb-1">Tax</p>
                                        <p class="fw-medium text-dark mb-0">$5 (10%)</p>
                                    </div>
                                    <div>
                                        <p class="fs-13 mb-1">Coupon</p>
                                        <p class="fw-medium text-dark mb-0">$0</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- End View Order -->

    <!-- Add Orders -->
    <div class="offcanvas offcanvas-end" tabindex="-1" id="add_order">
        <div class="offcanvas-header d-flex align-items-center justify-content-between">
            <h4 class="offcanvas-title mb-0">New Order</h4>
            <button type="button" class="btn-close btn-close-modal" data-bs-dismiss="offcanvas" aria-label="Close"><i class="icon-x"></i></button>
        </div>
        <form @submit.prevent="submitForm" class="d-flex flex-column overflow-y-auto h-100">
            <div class="offcanvas-body pb-0 p-0">
                <div class="orders-tab d-flex align-items-start p-3">
                    <ul class="nav nav-pills w-100 d-flex gap-3 align-items-center flex-sm-nowrap flex-wrap">
                        <li>
                            <a href="#" class="nav-link d-flex align-items-center justify-content-center" data-bs-toggle="tab" data-bs-target="#driversTab"><i class="icon-bike me-2"></i>Drivers</a>
                        </li>
                        <li>
                            <a href="#" class="nav-link active d-flex align-items-center justify-content-center" data-bs-toggle="tab" data-bs-target="#add-new-driverTab"><i class="icon-plus me-2"></i>Add New</a>
                        </li>
                    </ul>
                </div>
                <div class="tab-content">
                    <div class="tab-pane fade show" id="driversTab">
                        <div class="gx-3 p-3 mb-2">
                            <div class="col-lg-12 col-md-12">
                                <label class="form-label fw-bold">All Drivers </label>
                                <div class="mb-4">
                                    <div class="page-search">
                                        <i class="icon-search fs-14"></i>
                                        <input type="search" class="form-control form-control-sm" placeholder="Search by name/Phone Number">
                                    </div>
                                </div>
                            </div>
                            
                        </div>
                        <div class="d-flex justify-content-between pb-3 px-3 mb-3 border-bottom">
                            <div class="d-flex align-items-center customer-radio-input">
                                <input type="radio" class="form-check-input rounded-circle me-3">
                                <div class="d-flex align-items-center">
                                    <a href="#" class="avatar avatar avatar-rounded flex-shrink-0 me-2">
                                        <img src="@/assets/img/profiles/avatar-18.jpg" alt="customer" class="img-fluid">
                                    </a>
                                    <div>
                                        <h6 class="fs-14 fw-semibold mb-0 mb-2"><a href="#">Adrian James</a></h6>
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
                        <div class="d-flex justify-content-between pb-3 px-3 mb-3 border-bottom">
                            <div class="d-flex align-items-center customer-radio-input">
                                <input type="radio" class="form-check-input rounded-circle me-3">
                                <div class="d-flex align-items-center">
                                    <a href="#" class="avatar avatar avatar-rounded flex-shrink-0 bg-light text-body me-2">
                                        <i class="icon-user fs-16"></i>
                                    </a>
                                    <div>
                                        <h6 class="fs-14 fw-semibold mb-0 mb-2"><a href="#">Adrian James</a></h6>
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
                        <div class="d-flex justify-content-between pb-3 px-3 mb-3 border-bottom">
                            <div class="d-flex align-items-center customer-radio-input">
                                <input type="radio" class="form-check-input rounded-circle me-3">
                                <div class="d-flex align-items-center">
                                    <a href="#" class="avatar avatar avatar-rounded flex-shrink-0 bg-light text-body me-2">
                                        <i class="icon-user fs-16"></i>
                                    </a>
                                    <div>
                                        <h6 class="fs-14 fw-semibold mb-0 mb-2"><a href="#">Adrian James</a></h6>
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
                        <div class="d-flex justify-content-between pb-3 px-3 mb-3 border-bottom">
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
                        <div class="d-flex justify-content-between pb-3 px-3 mb-3 border-bottom">
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
                        <div class="d-flex justify-content-between pb-3 px-3 mb-3 border-bottom">
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
                        <div class="d-flex justify-content-between pb-3 px-3 mb-3 border-bottom">
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
                        <div class="d-flex justify-content-between pb-3 px-3 mb-0">
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
                    <div class="tab-pane fade show active" id="add-new-driverTab">
                        <div class="px-2">
                            <div class="row gx-3 border-bottom pb-3 mb-3 p-3">
                                <div class="col-md-12">
                                    <label class="form-label fw-bold">Personal Info </label>
                                    <div class="mb-3 d-flex align-items-center flex-wrap gap-3">
                                        <div class="avatar avatar-3xl border bg-light">
                                            <i class="icon-images fs-28 text-dark"></i>
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
                                        <div class="input-group w-auto input-group-flat">
                                            <a-date-picker  v-model="valueOne"  class="form-control" placeholder="dd/mm/yyyy" />
                                            <span class="input-group-text">
                                                <i class="icon-calendar-fold"></i>
                                            </span>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-lg-12 col-md-12">
                                    <div class="mb-3">
                                        <label class="form-label">Gender</label>
                                        <vue-select 
                                            :options="Gender"
                                            v-model="selected"
                                            placeholder="Select Gender"
                                        />
                                    </div>
                                </div>
                                <div class="col-lg-12 col-md-12">
                                    <div class="mb-3">
                                        <label class="form-label">Address Line 2<span class="text-danger"> *</span></label>
                                        <input type="text" class="form-control">
                                    </div>
                                </div>
                                <div class="col-md-4">
                                    <div class="mb-3">
                                        <label class="form-label">County<span class="text-danger"> *</span></label>
                                        <input type="text" class="form-control" placeholder="">
                                    </div>
                                </div>
                                <div class="col-md-4">
                                    <div class="mb-3">
                                        <label class="form-label">Town/City<span class="text-danger"> *</span></label>
                                        <input type="text" class="form-control" placeholder="">
                                    </div>
                                </div>
                                <div class="col-md-4">
                                    <div class="mb-3">
                                        <label class="form-label">Postal Code<span class="text-danger"> *</span></label>
                                        <input type="text" class="form-control" placeholder="">
                                    </div>
                                </div>
                            </div>
                            <div class="row gx-3 border-bottom pb-3 mb-3 p-3">
                                <label class="form-label mb-3 fw-bold">Driver Details </label>
                                <div class="col-lg-6 col-md-12">
                                    <div class="mb-3">
                                        <label class="form-label">License No</label>
                                        <input type="text" class="form-control">
                                    </div>
                                </div>
                                <div class="col-lg-6 col-md-12">
                                    <div class="mb-3">
                                        <label class="form-label">License Expiry Date</label>
                                        <div class="input-group w-auto input-group-flat">
                                            <a-date-picker  v-model="valueTwo"  class="form-control" placeholder="dd/mm/yyyy" />
                                            <span class="input-group-text">
                                                <i class="icon-calendar-fold"></i>
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
                                        <div class="input-group w-auto input-group-flat">
                                            <a-date-picker  v-model="valueThree"  class="form-control" placeholder="dd/mm/yyyy" />
                                            <span class="input-group-text">
                                                <i class="icon-calendar-fold"></i>
                                            </span>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-lg-12 col-md-12">
                                    <div class="mb-3">
                                        <label class="form-label">Description</label>
                                        <textarea class="form-control rounded"></textarea>  
                                        <p class="fs-14 mt-1 mt-3">Add Minimum 200 Characters</p>   
                                    </div>
                                </div>
                            </div>
                            <div class="row gx-3 mb-3 p-3">
                                <label class="form-label mb-3 fw-bold">Login Details </label>
                                <div class="col-lg-6 col-md-12">
                                    <div class="mb-3">
                                        <label class="form-label">Email</label>
                                        <input type="email" class="form-control">
                                    </div>
                                </div>
                                <div class="col-lg-6 col-md-12">
                                    <div class="mb-3">
                                        <label class="form-label">Password<span class="text-danger"> *</span></label>
                                        <input type="text" class="form-control">
                                    </div>
                                </div>
                                <div class="col-lg-12 col-md-12">
                                    <div class="mb-3">
                                        <label class="form-label">Status</label>
                                        <vue-select 
                                            :options="Status"
                                            v-model="selectedOne"
                                            placeholder="Select Status"
                                        />
                                    </div>
                                </div>
                                <div class="offcanvas-footer d-flex align-items-center gap-2 pb-0 px-0">
                                    <button type="button" class="btn btn-dark d-flex align-items-center w-100"><i class="icon-x me-1"></i>Cancel</button>
                                    <button type="submit" class="btn btn-primary d-flex align-items-center w-100"><i class="icon-circle-check me-1"></i>Submit</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>            
        </form>
    </div>
    <!-- End Add Orders -->
</template>

<script>
import { ref } from "vue";
const valueOne = ref();
const valueTwo = ref();
const valueThree = ref();

export default {
    data() {
        return {
            valueOne,
            valueTwo,
            valueThree,
            selected: [],
            selectedOne: "Active",
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
        }
    },
    methods: {
        submitForm() {
            this.$router.push(this.lp("/orders"));
        },
    },
}
</script>