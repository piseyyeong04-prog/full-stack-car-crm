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
            <div class="content-wrap pos-design">

                <!-- Start row -->
                <div class="row g-4">
                    <div class="col-lg-7 pos-left">

                        <!-- Start Search -->
                        <div class="d-flex align-items-center justify-content-between gap-2 flex-wrap mb-3 pb-3 border-bottom">
                            <div class="input-group input-group-flat search-input">
                                <span class="input-group-text">
                                    <i class="icon-search"></i>
                                </span>
                                <input type="text" class="form-control">
                            </div>
                            <div class="d-flex align-items-center gap-2 flex-wrap">
                                <!-- sort by -->
                                <div class="dropdown">
                                    <a href="javascript:void(0);" class="dropdown-toggle btn btn-white d-inline-flex align-items-center fw-normal" data-bs-toggle="dropdown">
                                        Sort by : Lowest Price
                                    </a>
                                    <div class="dropdown-menu dropdown-menu-end p-3">
                                        <h6 class="fs-14 fw-semibold mb-3">Sort By</h6>
                                        <ul class="list-unstyled mb-0">
                                            <li>
                                                <a href="javascript:void(0);" class="dropdown-item rounded">Newest</a>
                                            </li>
                                            <li>
                                                <a href="javascript:void(0);" class="dropdown-item rounded">Oldest</a>
                                            </li>
                                            <li>
                                                <a href="javascript:void(0);" class="dropdown-item rounded">Ascending</a>
                                            </li>
                                            <li>
                                                <a href="javascript:void(0);" class="dropdown-item rounded">Descending</a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <!-- new order -->
                            </div>
                        </div>
                        <!-- End search -->

                        <!-- Start Services -->
                        <div class="services mb-4">
                            <div class="pos-title">
                                <h5 class="mb-0 title">Choose Services</h5>
                            </div>
                            <div class="services-slider">
                                <choose-service></choose-service>
                            </div>
                        </div>
                        <!-- End Services -->

                        <!-- Start Categories -->
                        <div class="categories">
                            <div class="pos-title d-flex align-items-center justify-content-between flex-wrap gap-2">
                                <h5 class="mb-0 title">Categories</h5>
                                <div class="d-flex align-items-center gap-2">
                                    <button type="button" class="slick-arrow category-prev" @click="movePrev"><i class="icon-arrow-left"></i></button>
                                    <button type="button" class="slick-arrow category-next" @click="moveNext"><i class="icon-arrow-right"></i></button>
                                </div>
                            </div>

                            <!-- Tab Slider-->
                            <ul class="nav nav-tabs nav-tabs-solid category-tab border-0 category-slider mb-4 slick-initialized slick-slider" role="tablist">
                                <div class="slick-list draggable">
                                    <div class="slick-track">
                                        <Carousel :settings="settingsOne" :breakpoints="breakpointsOne" ref="categoryCarousel">
                                            <Slide>
                                                <li class="nav-item w-100 me-2">                                             
                                                    <a href="#all-menu" class="nav-link active" data-bs-toggle="tab">
                                                        All <span class="badge">200</span>
                                                    </a>
                                                </li>
                                            </Slide>
                                            <Slide>
                                                <li class="nav-item w-100 me-2">
                                                    <a href="#accessories-menu" class="nav-link" data-bs-toggle="tab">
                                                        Accessories <span class="badge">45</span>
                                                    </a>
                                                </li>
                                            </Slide>
                                            <Slide>
                                                <li class="nav-item w-100 me-2">
                                                    <a href="#scarf-menu" class="nav-link" data-bs-toggle="tab">
                                                        Scarf <span class="badge">33</span>
                                                    </a>
                                                </li>
                                            </Slide>
                                            <Slide>
                                                <li class="nav-item w-100 me-2">
                                                    <a href="#dresses-menu" class="nav-link" data-bs-toggle="tab">
                                                        Dresses <span class="badge">42</span>
                                                    </a>
                                                </li>
                                            </Slide>
                                            <Slide>
                                                <li class="nav-item w-100 me-2">
                                                    <a href="#coats-menu" class="nav-link" data-bs-toggle="tab">
                                                        Coats <span class="badge">0</span>
                                                    </a>
                                                </li>
                                            </Slide>
                                            <Slide>
                                                <li class="nav-item w-100 me-2">
                                                    <a href="#suits-menu" class="nav-link" data-bs-toggle="tab">
                                                        Suits <span class="badge">45</span>
                                                    </a>
                                                </li>
                                            </Slide>
                                            <Slide>
                                                <li class="nav-item w-100 me-2">
                                                    <a href="#knitwear-menu" class="nav-link" data-bs-toggle="tab">
                                                        Knitwear <span class="badge">75</span>
                                                    </a>
                                                </li>
                                            </Slide>
                                        </Carousel>
                                    </div>
                                </div>
                            </ul> 


                            <div class="tab-content">

                                <!-- Tab Item  -->
                                <div class="tab-pane fade show active" id="all-menu">
                                    <div class="row g-3">

                                        <!-- Item -->
                                        <div class="col-xl-3 col-lg-4 col-md-4 col-sm-6">
                                            <div class="pos-card" :class="{ active: activeCard === 1 }" @click="setActive(1)">
                                                <a href="#" class="pos-img">
                                                    <img src="@/assets/img/products/product-01.svg" alt="pos" class="img-fluid img-1">
                                                </a>
                                                <div class="p-2 position-relative">
                                                    <h6 class="fs-12 fw-semibold mb-1"><a href="#"> Waistcoat</a></h6>
                                                    <p class="fs-12 fw-medium text-orange mb-2">$15</p>
                                                    <pos-counter></pos-counter>
                                                </div>
                                            </div>
                                        </div>

                                        <!-- Item -->
                                        <div class="col-xl-3 col-lg-4 col-md-4 col-sm-6">
                                            <div class="pos-card" :class="{ active: activeCard === 2 }" @click="setActive(2)">
                                                <a href="#" class="pos-img">
                                                    <img src="@/assets/img/products/product-02.svg" alt="pos" class="img-fluid img-1">
                                                </a>
                                                <div class="p-2 position-relative">
                                                    <h6 class="fs-12 fw-semibold mb-1"><a href="#">Evening Dress</a></h6>
                                                    <p class="fs-12 fw-medium text-orange mb-2">$30</p>
                                                    <counter-index></counter-index>
                                                </div>
                                            </div>
                                        </div>

                                        <!-- Item -->
                                        <div class="col-xl-3 col-lg-4 col-md-4 col-sm-6">
                                            <div class="pos-card" :class="{ active: activeCard === 3 }" @click="setActive(3)">
                                                <a href="#" class="pos-img">
                                                    <img src="@/assets/img/products/product-03.svg" alt="pos" class="img-fluid img-1">
                                                </a>
                                                <div class="p-2 position-relative">
                                                    <h6 class="fs-12 fw-semibold mb-1"><a href="#">Blouse</a></h6>
                                                    <p class="fs-12 fw-medium text-orange mb-2">$22</p>
                                                    <pos-counter></pos-counter>
                                                </div>
                                            </div>
                                        </div>

                                        <!-- Item -->
                                        <div class="col-xl-3 col-lg-4 col-md-4 col-sm-6">
                                            <div class="pos-card" :class="{ active: activeCard === 4 }" @click="setActive(4)">
                                                <a href="#" class="pos-img">
                                                    <img src="@/assets/img/products/product-04.svg" alt="pos" class="img-fluid img-1">
                                                </a>
                                                <div class="p-2 position-relative">
                                                    <h6 class="fs-12 fw-semibold mb-1"><a href="#">Silk Blouse</a></h6>
                                                    <p class="fs-12 fw-medium text-orange mb-2">$15</p>
                                                    <pos-counter></pos-counter>
                                                </div>
                                            </div>
                                        </div>

                                        <!-- Item -->
                                        <div class="col-xl-3 col-lg-4 col-md-4 col-sm-6">
                                            <div class="pos-card" :class="{ active: activeCard === 5 }" @click="setActive(5)">
                                                <a href="#" class="pos-img">
                                                    <img src="@/assets/img/products/product-05.svg" alt="pos" class="img-fluid img-1">
                                                </a>
                                                <div class="p-2 position-relative">
                                                    <h6 class="fs-12 fw-semibold mb-1"><a href="#">Blouse Iron Only</a></h6>
                                                    <p class="fs-12 fw-medium text-orange mb-2">$36</p>
                                                    <pos-counter></pos-counter>
                                                </div>
                                            </div>
                                        </div>

                                        <!-- Item -->
                                        <div class="col-xl-3 col-lg-4 col-md-4 col-sm-6">
                                            <div class="pos-card" :class="{ active: activeCard === 6 }" @click="setActive(6)">
                                                <a href="#" class="pos-img">
                                                    <img src="@/assets/img/products/product-06.svg" alt="pos" class="img-fluid img-1">
                                                </a>
                                                <div class="p-2 position-relative">
                                                    <h6 class="fs-12 fw-semibold mb-1"><a href="#">Silk Skirt</a></h6>
                                                    <p class="fs-12 fw-medium text-orange mb-2">$14</p>
                                                    <pos-counter></pos-counter>
                                                </div>
                                            </div>
                                        </div>

                                        <!-- Item -->
                                        <div class="col-xl-3 col-lg-4 col-md-4 col-sm-6">
                                            <div class="pos-card" :class="{ active: activeCard === 7 }" @click="setActive(7)">
                                                <a href="#" class="pos-img">
                                                    <img src="@/assets/img/products/product-07.svg" alt="pos" class="img-fluid img-1">
                                                </a>
                                                <div class="p-2 position-relative">
                                                    <h6 class="fs-12 fw-semibold mb-1"><a href="#">Dress with Trims</a></h6>
                                                    <p class="fs-12 fw-medium text-orange mb-2">$12</p>
                                                    <pos-counter></pos-counter>
                                                </div>
                                            </div>
                                        </div>

                                        <!-- Item -->
                                        <div class="col-xl-3 col-lg-4 col-md-4 col-sm-6">
                                            <div class="pos-card" :class="{ active: activeCard === 8 }" @click="setActive(8)">
                                                <a href="#" class="pos-img">
                                                    <img src="@/assets/img/products/product-08.svg" alt="pos" class="img-fluid img-1">
                                                </a>
                                                <div class="p-2 position-relative">
                                                    <h6 class="fs-12 fw-semibold mb-1"><a href="#">Shirt</a></h6>
                                                    <p class="fs-12 fw-medium text-orange mb-2">$5</p>
                                                    <pos-counter></pos-counter>
                                                </div>
                                            </div>
                                        </div>

                                        <!-- Item -->
                                        <div class="col-xl-3 col-lg-4 col-md-4 col-sm-6">
                                            <div class="pos-card" :class="{ active: activeCard === 9 }" @click="setActive(9)">
                                                <a href="#" class="pos-img">
                                                    <img src="@/assets/img/products/product-09.svg" alt="pos" class="img-fluid img-1">
                                                </a>
                                                <div class="p-2 position-relative">
                                                    <h6 class="fs-12 fw-semibold mb-1"><a href="#">Jumpsuit</a></h6>
                                                    <p class="fs-12 fw-medium text-orange mb-2">$11</p>
                                                    <counter-index></counter-index>
                                                </div>
                                            </div>
                                        </div>

                                        <!-- Item -->
                                        <div class="col-xl-3 col-lg-4 col-md-4 col-sm-6">
                                            <div class="pos-card" :class="{ active: activeCard === 10 }" @click="setActive(10)">
                                                <a href="#" class="pos-img">
                                                    <img src="@/assets/img/products/product-10.svg" alt="pos" class="img-fluid img-1">
                                                </a>
                                                <div class="p-2 position-relative">
                                                    <h6 class="fs-12 fw-semibold mb-1"><a href="#">Dress Shorten</a></h6>
                                                    <p class="fs-12 fw-medium text-orange mb-2">$10</p>
                                                    <pos-counter></pos-counter>
                                                </div>
                                            </div>
                                        </div>

                                        <!-- Item -->
                                        <div class="col-xl-3 col-lg-4 col-md-4 col-sm-6">
                                            <div class="pos-card" :class="{ active: activeCard === 11 }" @click="setActive(11)">
                                                <a href="#" class="pos-img">
                                                    <img src="@/assets/img/products/product-11.svg" alt="pos" class="img-fluid img-1">
                                                </a>
                                                <div class="p-2 position-relative">
                                                    <h6 class="fs-12 fw-semibold mb-1"><a href="#">Skirt</a></h6>
                                                    <p class="fs-12 fw-medium text-orange mb-2">$16</p>
                                                    <pos-counter></pos-counter>
                                                </div>
                                            </div>
                                        </div>

                                        <!-- Item -->
                                        <div class="col-xl-3 col-lg-4 col-md-4 col-sm-6">
                                            <div class="pos-card" :class="{ active: activeCard === 12 }" @click="setActive(12)">
                                                <a href="#" class="pos-img">
                                                    <img src="@/assets/img/products/product-12.svg" alt="pos" class="img-fluid img-1">
                                                </a>
                                                <div class="p-2 position-relative">
                                                    <h6 class="fs-12 fw-semibold mb-1"><a href="#">Silk Dress</a></h6>
                                                    <p class="fs-12 fw-medium text-orange mb-2">$12</p>
                                                    <counter-index></counter-index>
                                                </div>
                                            </div>
                                        </div>

                                        <!-- Item -->
                                        <div class="col-xl-3 col-lg-4 col-md-4 col-sm-6">
                                            <div class="pos-card" :class="{ active: activeCard === 13 }" @click="setActive(13)">
                                                <a href="#" class="pos-img">
                                                    <img src="@/assets/img/products/product-13.svg" alt="pos" class="img-fluid img-1">
                                                </a>
                                                <div class="p-2 position-relative">
                                                    <h6 class="fs-12 fw-semibold mb-1"><a href="#">Blazer</a></h6>
                                                    <p class="fs-12 fw-medium text-orange mb-2">$7</p>
                                                    <pos-counter></pos-counter>
                                                </div>
                                            </div>
                                        </div>

                                        <!-- Item -->
                                        <div class="col-xl-3 col-lg-4 col-md-4 col-sm-6">
                                            <div class="pos-card" :class="{ active: activeCard === 14 }" @click="setActive(14)">
                                                <a href="#" class="pos-img">
                                                    <img src="@/assets/img/products/product-14.svg" alt="pos" class="img-fluid img-1">
                                                </a>
                                                <div class="p-2 position-relative">
                                                    <h6 class="fs-12 fw-semibold mb-1"><a href="#">Down Jacket</a></h6>
                                                    <p class="fs-12 fw-medium text-orange mb-2">$6</p>
                                                    <pos-counter></pos-counter>
                                                </div>
                                            </div>
                                        </div>

                                        <!-- Item -->
                                        <div class="col-xl-3 col-lg-4 col-md-4 col-sm-6">
                                            <div class="pos-card" :class="{ active: activeCard === 15 }" @click="setActive(15)">
                                                <a href="#" class="pos-img">
                                                    <img src="@/assets/img/products/product-15.svg" alt="pos" class="img-fluid img-1">
                                                </a>
                                                <div class="p-2 position-relative">
                                                    <h6 class="fs-12 fw-semibold mb-1"><a href="#">Suit 2pc</a></h6>
                                                    <p class="fs-12 fw-medium text-orange mb-2">$14</p>
                                                    <pos-counter></pos-counter>
                                                </div>
                                            </div>
                                        </div>

                                        <!-- Item -->
                                        <div class="col-xl-3 col-lg-4 col-md-4 col-sm-6">
                                            <div class="pos-card" :class="{ active: activeCard === 16 }" @click="setActive(16)">
                                                <a href="#" class="pos-img">
                                                    <img src="@/assets/img/products/product-16.svg" alt="pos" class="img-fluid img-1">
                                                </a>
                                                <div class="p-2 position-relative">
                                                    <h6 class="fs-12 fw-semibold mb-1"><a href="#">Dress Shorten</a></h6>
                                                    <p class="fs-12 fw-medium text-orange mb-2">$10</p>
                                                    <pos-counter></pos-counter>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                </div>

                                    <!-- Tab Item  -->
                                <div class="tab-pane fade" id="accessories-menu">
                                    <div class="row g-3">

                                        <!-- Item -->
                                        <div class="col-xl-3 col-lg-4 col-md-4 col-sm-6">
                                            <div class="pos-card" :class="{ active: activeCard === 17 }" @click="setActive(17)">
                                                <a href="#" class="pos-img">
                                                    <img src="@/assets/img/products/product-02.svg" alt="pos" class="img-fluid img-1">
                                                </a>
                                                <div class="p-2 position-relative">
                                                    <h6 class="fs-12 fw-semibold mb-1"><a href="#">Evening Dress</a></h6>
                                                    <p class="fs-12 fw-medium text-orange mb-2">$30</p>
                                                    <pos-counter></pos-counter>
                                                </div>
                                            </div>
                                        </div>

                                        <!-- Item -->
                                        <div class="col-xl-3 col-lg-4 col-md-4 col-sm-6">
                                            <div class="pos-card" :class="{ active: activeCard === 18 }" @click="setActive(18)">
                                                <a href="#" class="pos-img">
                                                    <img src="@/assets/img/products/product-04.svg" alt="pos" class="img-fluid img-1">
                                                </a>
                                                <div class="p-2 position-relative">
                                                    <h6 class="fs-12 fw-semibold mb-1"><a href="#">Silk Blouse</a></h6>
                                                    <p class="fs-12 fw-medium text-orange mb-2">$15</p>
                                                    <pos-counter></pos-counter>
                                                </div>
                                            </div>
                                        </div>

                                        <!-- Item -->
                                        <div class="col-xl-3 col-lg-4 col-md-4 col-sm-6">
                                            <div class="pos-card" :class="{ active: activeCard === 19 }" @click="setActive(19)">
                                                <a href="#" class="pos-img">
                                                    <img src="@/assets/img/products/product-05.svg" alt="pos" class="img-fluid img-1">
                                                </a>
                                                <div class="p-2 position-relative">
                                                    <h6 class="fs-12 fw-semibold mb-1"><a href="#">Blouse Iron Only</a></h6>
                                                    <p class="fs-12 fw-medium text-orange mb-2">$36</p>
                                                    <pos-counter></pos-counter>
                                                </div>
                                            </div>
                                        </div>

                                        <!-- Item -->
                                        <div class="col-xl-3 col-lg-4 col-md-4 col-sm-6">
                                            <div class="pos-card" :class="{ active: activeCard === 20 }" @click="setActive(20)">
                                                <a href="#" class="pos-img">
                                                    <img src="@/assets/img/products/product-09.svg" alt="pos" class="img-fluid img-1">
                                                </a>
                                                <div class="p-2 position-relative">
                                                    <h6 class="fs-12 fw-semibold mb-1"><a href="#">Jumpsuit</a></h6>
                                                    <p class="fs-12 fw-medium text-orange mb-2">$11</p>
                                                    <pos-counter></pos-counter>
                                                </div>
                                            </div>
                                        </div>

                                        <!-- Item -->
                                        <div class="col-xl-3 col-lg-4 col-md-4 col-sm-6">
                                            <div class="pos-card" :class="{ active: activeCard === 21 }" @click="setActive(21)">
                                                <a href="#" class="pos-img">
                                                    <img src="@/assets/img/products/product-07.svg" alt="pos" class="img-fluid img-1">
                                                </a>
                                                <div class="p-2 position-relative">
                                                    <h6 class="fs-12 fw-semibold mb-1"><a href="#">Dress with Trims</a></h6>
                                                    <p class="fs-12 fw-medium text-orange mb-2">$12</p>
                                                    <pos-counter></pos-counter>
                                                </div>
                                            </div>
                                        </div>

                                        <!-- Item -->
                                        <div class="col-xl-3 col-lg-4 col-md-4 col-sm-6">
                                            <div class="pos-card" :class="{ active: activeCard === 22 }" @click="setActive(22)">
                                                <a href="#" class="pos-img">
                                                    <img src="@/assets/img/products/product-08.svg" alt="pos" class="img-fluid img-1">
                                                </a>
                                                <div class="p-2 position-relative">
                                                    <h6 class="fs-12 fw-semibold mb-1"><a href="#">Shirt</a></h6>
                                                    <p class="fs-12 fw-medium text-orange mb-2">$5</p>
                                                    <pos-counter></pos-counter>
                                                </div>
                                            </div>
                                        </div>

                                        <!-- Item -->
                                        <div class="col-xl-3 col-lg-4 col-md-4 col-sm-6">
                                            <div class="pos-card" :class="{ active: activeCard === 23 }" @click="setActive(23)">
                                                <a href="#" class="pos-img">
                                                    <img src="@/assets/img/products/product-10.svg" alt="pos" class="img-fluid img-1">
                                                </a>
                                                <div class="p-2 position-relative">
                                                    <h6 class="fs-12 fw-semibold mb-1"><a href="#">Dress Shorten</a></h6>
                                                    <p class="fs-12 fw-medium text-orange mb-2">$10</p>
                                                    <pos-counter></pos-counter>
                                                </div>
                                            </div>
                                        </div>

                                        <!-- Item -->
                                        <div class="col-xl-3 col-lg-4 col-md-4 col-sm-6">
                                            <div class="pos-card" :class="{ active: activeCard === 24 }" @click="setActive(24)">
                                                <a href="#" class="pos-img">
                                                    <img src="@/assets/img/products/product-12.svg" alt="pos" class="img-fluid img-1">
                                                </a>
                                                <div class="p-2 position-relative">
                                                    <h6 class="fs-12 fw-semibold mb-1"><a href="#">Silk Dress</a></h6>
                                                    <p class="fs-12 fw-medium text-orange mb-2">$12</p>
                                                    <pos-counter></pos-counter>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                </div>

                                <!-- Tab Item  -->
                                <div class="tab-pane fade" id="scarf-menu">
                                    <div class="row g-3">

                                        <!-- Item -->
                                        <div class="col-xl-3 col-lg-4 col-md-4 col-sm-6">
                                            <div class="pos-card" :class="{ active: activeCard === 25 }" @click="setActive(25)">
                                                <a href="#" class="pos-img">
                                                    <img src="@/assets/img/products/product-01.svg" alt="pos" class="img-fluid img-1">
                                                </a>
                                                <div class="p-2 position-relative">
                                                    <h6 class="fs-12 fw-semibold mb-1"><a href="#"> Waistcoat</a></h6>
                                                    <p class="fs-12 fw-medium text-orange mb-2">$15</p>
                                                    <pos-counter></pos-counter>
                                                </div>
                                            </div>
                                        </div>

                                        <!-- Item -->
                                        <div class="col-xl-3 col-lg-4 col-md-4 col-sm-6">
                                            <div class="pos-card" :class="{ active: activeCard === 26 }" @click="setActive(26)">
                                                <a href="#" class="pos-img">
                                                    <img src="@/assets/img/products/product-02.svg" alt="pos" class="img-fluid img-1">
                                                </a>
                                                <div class="p-2 position-relative">
                                                    <h6 class="fs-12 fw-semibold mb-1"><a href="#">Evening Dress</a></h6>
                                                    <p class="fs-12 fw-medium text-orange mb-2">$30</p>
                                                    <pos-counter></pos-counter>
                                                </div>
                                            </div>
                                        </div>

                                        <!-- Item -->
                                        <div class="col-xl-3 col-lg-4 col-md-4 col-sm-6">
                                            <div class="pos-card" :class="{ active: activeCard === 27 }" @click="setActive(27)">
                                                <a href="#" class="pos-img">
                                                    <img src="@/assets/img/products/product-03.svg" alt="pos" class="img-fluid img-1">
                                                </a>
                                                <div class="p-2 position-relative">
                                                    <h6 class="fs-12 fw-semibold mb-1"><a href="#">Blouse</a></h6>
                                                    <p class="fs-12 fw-medium text-orange mb-2">$22</p>
                                                    <pos-counter></pos-counter>
                                                </div>
                                            </div>
                                        </div>

                                        <!-- Item -->
                                        <div class="col-xl-3 col-lg-4 col-md-4 col-sm-6">
                                            <div class="pos-card" :class="{ active: activeCard === 28 }" @click="setActive(28)">
                                                <a href="#" class="pos-img">
                                                    <img src="@/assets/img/products/product-04.svg" alt="pos" class="img-fluid img-1">
                                                </a>
                                                <div class="p-2 position-relative">
                                                    <h6 class="fs-12 fw-semibold mb-1"><a href="#">Silk Blouse</a></h6>
                                                    <p class="fs-12 fw-medium text-orange mb-2">$15</p>
                                                    <pos-counter></pos-counter>
                                                </div>
                                            </div>
                                        </div>

                                        <!-- Item -->
                                        <div class="col-xl-3 col-lg-4 col-md-4 col-sm-6">
                                            <div class="pos-card" :class="{ active: activeCard === 29 }" @click="setActive(29)">
                                                <a href="#" class="pos-img">
                                                    <img src="@/assets/img/products/product-05.svg" alt="pos" class="img-fluid img-1">
                                                </a>
                                                <div class="p-2 position-relative">
                                                    <h6 class="fs-12 fw-semibold mb-1"><a href="#">Blouse Iron Only</a></h6>
                                                    <p class="fs-12 fw-medium text-orange mb-2">$36</p>
                                                    <pos-counter></pos-counter>
                                                </div>
                                            </div>
                                        </div>

                                        <!-- Item -->
                                        <div class="col-xl-3 col-lg-4 col-md-4 col-sm-6">
                                            <div class="pos-card" :class="{ active: activeCard === 30 }" @click="setActive(30)">
                                                <a href="#" class="pos-img">
                                                    <img src="@/assets/img/products/product-09.svg" alt="pos" class="img-fluid img-1">
                                                </a>
                                                <div class="p-2 position-relative">
                                                    <h6 class="fs-12 fw-semibold mb-1"><a href="#">Jumpsuit</a></h6>
                                                    <p class="fs-12 fw-medium text-orange mb-2">$11</p>
                                                    <pos-counter></pos-counter>
                                                </div>
                                            </div>
                                        </div>

                                        <!-- Item -->
                                        <div class="col-xl-3 col-lg-4 col-md-4 col-sm-6">
                                            <div class="pos-card" :class="{ active: activeCard === 31 }" @click="setActive(31)">
                                                <a href="#" class="pos-img">
                                                    <img src="@/assets/img/products/product-13.svg" alt="pos" class="img-fluid img-1">
                                                </a>
                                                <div class="p-2 position-relative">
                                                    <h6 class="fs-12 fw-semibold mb-1"><a href="#">Blazer</a></h6>
                                                    <p class="fs-12 fw-medium text-orange mb-2">$7</p>
                                                    <pos-counter></pos-counter>
                                                </div>
                                            </div>
                                        </div>

                                        <!-- Item -->
                                        <div class="col-xl-3 col-lg-4 col-md-4 col-sm-6">
                                            <div class="pos-card" :class="{ active: activeCard === 32 }" @click="setActive(32)">
                                                <a href="#" class="pos-img">
                                                    <img src="@/assets/img/products/product-14.svg" alt="pos" class="img-fluid img-1">
                                                </a>
                                                <div class="p-2 position-relative">
                                                    <h6 class="fs-12 fw-semibold mb-1"><a href="#">Down Jacket</a></h6>
                                                    <p class="fs-12 fw-medium text-orange mb-2">$6</p>
                                                    <pos-counter></pos-counter>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                </div>

                                <!-- Tab Item  -->
                                <div class="tab-pane fade" id="dresses-menu">
                                    <div class="row g-3">

                                        <!-- Item -->
                                        <div class="col-xl-3 col-lg-4 col-md-4 col-sm-6">
                                            <div class="pos-card" :class="{ active: activeCard === 33 }" @click="setActive(33)">
                                                <a href="#" class="pos-img">
                                                    <img src="@/assets/img/products/product-02.svg" alt="pos" class="img-fluid img-1">
                                                </a>
                                                <div class="p-2 position-relative">
                                                    <h6 class="fs-12 fw-semibold mb-1"><a href="#">Evening Dress</a></h6>
                                                    <p class="fs-12 fw-medium text-orange mb-2">$30</p>
                                                    <pos-counter></pos-counter>
                                                </div>
                                            </div>
                                        </div>

                                        <!-- Item -->
                                        <div class="col-xl-3 col-lg-4 col-md-4 col-sm-6">
                                            <div class="pos-card" :class="{ active: activeCard === 34 }" @click="setActive(34)">
                                                <a href="#" class="pos-img">
                                                    <img src="@/assets/img/products/product-03.svg" alt="pos" class="img-fluid img-1">
                                                </a>
                                                <div class="p-2 position-relative">
                                                    <h6 class="fs-12 fw-semibold mb-1"><a href="#">Blouse</a></h6>
                                                    <p class="fs-12 fw-medium text-orange mb-2">$22</p>
                                                    <pos-counter></pos-counter>
                                                </div>
                                            </div>
                                        </div>

                                        <!-- Item -->
                                        <div class="col-xl-3 col-lg-4 col-md-4 col-sm-6">
                                            <div class="pos-card" :class="{ active: activeCard === 35 }" @click="setActive(35)">
                                                <a href="#" class="pos-img">
                                                    <img src="@/assets/img/products/product-04.svg" alt="pos" class="img-fluid img-1">
                                                </a>
                                                <div class="p-2 position-relative">
                                                    <h6 class="fs-12 fw-semibold mb-1"><a href="#">Silk Blouse</a></h6>
                                                    <p class="fs-12 fw-medium text-orange mb-2">$15</p>
                                                    <pos-counter></pos-counter>
                                                </div>
                                            </div>
                                        </div>

                                        <!-- Item -->
                                        <div class="col-xl-3 col-lg-4 col-md-4 col-sm-6">
                                            <div class="pos-card" :class="{ active: activeCard === 36 }" @click="setActive(36)">
                                                <a href="#" class="pos-img">
                                                    <img src="@/assets/img/products/product-06.svg" alt="pos" class="img-fluid img-1">
                                                </a>
                                                <div class="p-2 position-relative">
                                                    <h6 class="fs-12 fw-semibold mb-1"><a href="#">Silk Skirt</a></h6>
                                                    <p class="fs-12 fw-medium text-orange mb-2">$14</p>
                                                    <pos-counter></pos-counter>
                                                </div>
                                            </div>
                                        </div>

                                        <!-- Item -->
                                        <div class="col-xl-3 col-lg-4 col-md-4 col-sm-6">
                                            <div class="pos-card" :class="{ active: activeCard === 37 }" @click="setActive(37)">
                                                <a href="#" class="pos-img">
                                                    <img src="@/assets/img/products/product-07.svg" alt="pos" class="img-fluid img-1">
                                                </a>
                                                <div class="p-2 position-relative">
                                                    <h6 class="fs-12 fw-semibold mb-1"><a href="#">Dress with Trims</a></h6>
                                                    <p class="fs-12 fw-medium text-orange mb-2">$12</p>
                                                    <pos-counter></pos-counter>
                                                </div>
                                            </div>
                                        </div>

                                        <!-- Item -->
                                        <div class="col-xl-3 col-lg-4 col-md-4 col-sm-6">
                                            <div class="pos-card" :class="{ active: activeCard === 38 }" @click="setActive(38)">
                                                <a href="#" class="pos-img">
                                                    <img src="@/assets/img/products/product-11.svg" alt="pos" class="img-fluid img-1">
                                                </a>
                                                <div class="p-2 position-relative">
                                                    <h6 class="fs-12 fw-semibold mb-1"><a href="#">Skirt</a></h6>
                                                    <p class="fs-12 fw-medium text-orange mb-2">$16</p>
                                                    <pos-counter></pos-counter>
                                                </div>
                                            </div>
                                        </div>

                                        <!-- Item -->
                                        <div class="col-xl-3 col-lg-4 col-md-4 col-sm-6">
                                            <div class="pos-card" :class="{ active: activeCard === 39 }" @click="setActive(39)">
                                                <a href="#" class="pos-img">
                                                    <img src="@/assets/img/products/product-12.svg" alt="pos" class="img-fluid img-1">
                                                </a>
                                                <div class="p-2 position-relative">
                                                    <h6 class="fs-12 fw-semibold mb-1"><a href="#">Silk Dress</a></h6>
                                                    <p class="fs-12 fw-medium text-orange mb-2">$12</p>
                                                    <pos-counter></pos-counter>
                                                </div>
                                            </div>
                                        </div>

                                        <!-- Item -->
                                        <div class="col-xl-3 col-lg-4 col-md-4 col-sm-6">
                                            <div class="pos-card" :class="{ active: activeCard === 40 }" @click="setActive(40)">
                                                <a href="#" class="pos-img">
                                                    <img src="@/assets/img/products/product-13.svg" alt="pos" class="img-fluid img-1">
                                                </a>
                                                <div class="p-2 position-relative">
                                                    <h6 class="fs-12 fw-semibold mb-1"><a href="#">Blazer</a></h6>
                                                    <p class="fs-12 fw-medium text-orange mb-2">$7</p>
                                                    <pos-counter></pos-counter>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                </div>

                                <!-- Tab Item  -->
                                <div class="tab-pane fade" id="coats-menu">
                                    <div class="row g-3">

                                        <!-- Item -->
                                        <div class="col-xl-3 col-lg-4 col-md-4 col-sm-6">
                                            <div class="pos-card" :class="{ active: activeCard === 41 }" @click="setActive(41)">
                                                <a href="#" class="pos-img">
                                                    <img src="@/assets/img/products/product-01.svg" alt="pos" class="img-fluid img-1">
                                                </a>
                                                <div class="p-2 position-relative">
                                                    <h6 class="fs-12 fw-semibold mb-1"><a href="#"> Waistcoat</a></h6>
                                                    <p class="fs-12 fw-medium text-orange mb-2">$15</p>
                                                    <pos-counter></pos-counter>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                </div>

                                <!-- Tab Item  -->
                                <div class="tab-pane fade" id="suits-menu">
                                    <div class="row g-3">

                                        <!-- Item -->
                                        <div class="col-xl-3 col-lg-4 col-md-4 col-sm-6">
                                            <div class="pos-card" :class="{ active: activeCard === 42 }" @click="setActive(42)">
                                                <a href="#" class="pos-img">
                                                    <img src="@/assets/img/products/product-15.svg" alt="pos" class="img-fluid img-1">
                                                </a>
                                                <div class="p-2 position-relative">
                                                    <h6 class="fs-12 fw-semibold mb-1"><a href="#">Suit 2pc</a></h6>
                                                    <p class="fs-12 fw-medium text-orange mb-2">$14</p>
                                                    <pos-counter></pos-counter>
                                                </div>
                                            </div>
                                        </div>

                                        <!-- Item -->
                                        <div class="col-xl-3 col-lg-4 col-md-4 col-sm-6">
                                            <div class="pos-card" :class="{ active: activeCard === 43 }" @click="setActive(43)">
                                                <a href="#" class="pos-img">
                                                    <img src="@/assets/img/products/product-16.svg" alt="pos" class="img-fluid img-1">
                                                </a>
                                                <div class="p-2 position-relative">
                                                    <h6 class="fs-12 fw-semibold mb-1"><a href="#">Dress Shorten</a></h6>
                                                    <p class="fs-12 fw-medium text-orange mb-2">$10</p>
                                                    <pos-counter></pos-counter>
                                                </div>
                                            </div>
                                        </div>

                                    </div>

                                </div>

                                    <!-- Tab Item  -->
                                <div class="tab-pane fade" id="knitwear-menu">
                                    <div class="row g-3">

                                        <!-- Item -->
                                        <div class="col-xl-3 col-lg-4 col-md-4 col-sm-6">
                                            <div class="pos-card" :class="{ active: activeCard === 44 }" @click="setActive(44)">
                                                <a href="#" class="pos-img">
                                                    <img src="@/assets/img/products/product-08.svg" alt="pos" class="img-fluid img-1">
                                                </a>
                                                <div class="p-2 position-relative">
                                                    <h6 class="fs-12 fw-semibold mb-1"><a href="#">Shirt</a></h6>
                                                    <p class="fs-12 fw-medium text-orange mb-2">$5</p>
                                                    <pos-counter></pos-counter>
                                                </div>
                                            </div>
                                        </div>

                                        <!-- Item -->
                                        <div class="col-xl-3 col-lg-4 col-md-4 col-sm-6">
                                            <div class="pos-card" :class="{ active: activeCard === 45 }" @click="setActive(45)">
                                                <a href="#" class="pos-img">
                                                    <img src="@/assets/img/products/product-09.svg" alt="pos" class="img-fluid img-1">
                                                </a>
                                                <div class="p-2 position-relative">
                                                    <h6 class="fs-12 fw-semibold mb-1"><a href="#">Jumpsuit</a></h6>
                                                    <p class="fs-12 fw-medium text-orange mb-2">$11</p>
                                                    <pos-counter></pos-counter>
                                                </div>
                                            </div>
                                        </div>

                                        <!-- Item -->
                                        <div class="col-xl-3 col-lg-4 col-md-4 col-sm-6">
                                            <div class="pos-card" :class="{ active: activeCard === 46 }" @click="setActive(46)">
                                                <a href="#" class="pos-img">
                                                    <img src="@/assets/img/products/product-10.svg" alt="pos" class="img-fluid img-1">
                                                </a>
                                                <div class="p-2 position-relative">
                                                    <h6 class="fs-12 fw-semibold mb-1"><a href="#">Dress Shorten</a></h6>
                                                    <p class="fs-12 fw-medium text-orange mb-2">$10</p>
                                                    <pos-counter></pos-counter>
                                                </div>
                                            </div>
                                        </div>
                                        
                                        <!-- Item -->
                                        <div class="col-xl-3 col-lg-4 col-md-4 col-sm-6">
                                            <div class="pos-card" :class="{ active: activeCard === 47 }" @click="setActive(47)">
                                                <a href="#" class="pos-img">
                                                    <img src="@/assets/img/products/product-05.svg" alt="pos" class="img-fluid img-1">
                                                </a>
                                                <div class="p-2 position-relative">
                                                    <h6 class="fs-12 fw-semibold mb-1"><a href="#">Blouse Iron Only</a></h6>
                                                    <p class="fs-12 fw-medium text-orange mb-2">$36</p>
                                                    <pos-counter></pos-counter>
                                                </div>
                                            </div>
                                        </div>

                                    </div>

                                </div>

                            </div>
                        </div>
                        <!-- end categories -->
                    </div>

                    <!-- Pos Right -->
                    <div class="col-lg-5 pos-right position-relative">
                        <div class="card mb-0 position-relative overflow-hidden">
                            <div class="card-body p-3">

                                <!-- Start Order -->
                                <div class="mb-4 pb-4 border-bottom">
                                    <div class="d-flex align-items-center justify-content-between flex-wrap gap-2 mb-3">
                                        <div class="d-flex align-items-center gap-3">
                                            <a href="#" class="btn btn-icon bg-primary rounded-circle fw-medium flex-shrink-0"><i class="icon-arrow-right-to-line text-white"></i></a>
                                            <div>
                                                <h5 class="mb-1 d-flex align-items-center gap-2">Order #56998 <span class="badge bg-soft-warning text-dark">Inprogress</span></h5>
                                                <p class="mb-0">08 Oct, 2025, 12:44 PM</p>
                                            </div>
                                        </div>
                                        <a href="#" class="btn btn-white shadow d-flex align-items-center text-danger"><i class="icon-x me-1"></i> Clear</a>
                                    </div>

                                    <div class="select-input">
                                        <div class="input-item d-flex align-items-center gap-2 flex-grow-1">
                                            <vue-select 
                                                class="w-100"
                                                :options="Order"
                                                v-model="selected"
                                                placeholder="Select"
                                            />
                                            <button class="btn btn-primary btn-icon" data-bs-toggle="offcanvas" data-bs-target="#add_order"><i class="icon-plus"></i></button>
                                        </div>
                                        <button class="btn btn-icon btn-dark fs-14 fw-normal" data-bs-toggle="offcanvas" data-bs-target="#edit_order"><i class="icon-pencil-line"></i></button>
                                    </div>
                                </div>
                                <!-- End Order -->

                                <!-- Start Details -->
                                <div class="details">  
                                    <div class="pos-title d-flex align-items-center justify-content-between flex-wrap gap-2 mb-3">
                                        <h5 class="mb-0 title d-flex align-items-center gap-2">Order Details <router-link :to="lp('/reports/order-report')" class="text-danger text-decoration-underline fs-13 fw-semibold" data-bs-toggle="offcanvas" data-bs-target="#filter-offcanvas-3">View Details</router-link> </h5>
                                        <p class="d-flex align-items-center gap-1 text-dark mb-0">Total Items : <span class="badge bg-light rounded-icon">9</span></p>
                                    </div>
                                    
                                    <div class="accordion pos-accordion" id="faq-details">

                                        <!-- FAQ Item -->
                                        <div class="accordion-item">
                                            <h3 class="accordion-header" id="headingEleven">
                                                <a href="#" class="accordion-button collapsed" data-bs-toggle="collapse" data-bs-target="#collapseSeven" aria-controls="collapseSeven">
                                                    Dry Cleaning <button href="#" class="text-danger add-btn fw-semibold fs-13 p-0 border-0 text-decoration-underline" data-bs-toggle="offcanvas" data-bs-target="#filter-offcanvas-2"> Add Items</button>
                                                </a>
                                            </h3>
                                            <div id="collapseSeven" class="accordion-collapse collapse" data-bs-parent="#faq-details">
                                                <div class="accordion-body">
                                                    <div class="accordion-content">

                                                        <!-- Item 1 -->
                                                        <div class="clean-item">
                                                            <h6>Evening Dress</h6>
                                                            <div class="clean">
                                                                <counter-index></counter-index>
                                                                <div class="total">
                                                                    Total :  <span> $30</span>
                                                                </div>
                                                                <div class="action">
                                                                    <div class="d-flex align-items-center">
                                                                        <a class="btn btn-icon btn-sm btn-light rounded-circle position-relative me-2"  data-bs-toggle="modal" data-bs-target="#edit_evening_dress">
                                                                            <i class="icon-pencil-line"></i>
                                                                        </a>
                                                                        <a href="#" class="btn btn-icon btn-danger rounded-circle" data-bs-toggle="modal" data-bs-target="#delete_modal"><i class="icon-trash-2"></i></a>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>

                                                        <!-- Item 2 -->
                                                        <div class="clean-item">
                                                            <h6>Jumpsuit</h6>
                                                            <div class="clean">
                                                                <counter-index></counter-index>
                                                                <div class="total">
                                                                    Total :  <span> $11</span>
                                                                </div>
                                                                <div class="action">
                                                                    <div class="d-flex align-items-center">
                                                                        <a class="btn btn-icon btn-sm btn-light rounded-circle position-relative me-2"  data-bs-toggle="modal" data-bs-target="#edit_evening_dress">
                                                                            <i class="icon-pencil-line"></i>
                                                                        </a>
                                                                        <a href="#" class="btn btn-icon btn-danger rounded-circle" data-bs-toggle="modal" data-bs-target="#delete_modal"><i class="icon-trash-2"></i></a>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>

                                                        <!-- Item 3 -->
                                                        <div class="clean-item">
                                                            <h6>Long Coat</h6>
                                                            <div class="clean">
                                                                <counter-index></counter-index>
                                                                <div class="total">
                                                                    Total :  <span> $50</span>
                                                                </div>
                                                                <div class="action">
                                                                    <div class="d-flex align-items-center">
                                                                        <a class="btn btn-icon btn-sm btn-light rounded-circle position-relative me-2"  data-bs-toggle="modal" data-bs-target="#edit_evening_dress">
                                                                            <i class="icon-pencil-line"></i>
                                                                        </a>
                                                                        <a href="#" class="btn btn-icon btn-danger rounded-circle" data-bs-toggle="modal" data-bs-target="#delete_modal"><i class="icon-trash-2"></i></a>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>

                                                        <!-- Item 4 -->
                                                        <div class="clean-item">
                                                            <h6>Dinner Suit</h6>
                                                            <div class="clean">
                                                                <counter-index></counter-index>
                                                                <div class="total">
                                                                    Total :  <span> $60</span>
                                                                </div>
                                                                <div class="action">
                                                                    <div class="d-flex align-items-center">
                                                                        <a class="btn btn-icon btn-sm btn-light rounded-circle position-relative me-2"  data-bs-toggle="modal" data-bs-target="#edit_evening_dress">
                                                                            <i class="icon-pencil-line"></i>
                                                                        </a>
                                                                        <a href="#" class="btn btn-icon btn-danger rounded-circle" data-bs-toggle="modal" data-bs-target="#delete_modal"><i class="icon-trash-2"></i></a>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>

                                                        <!-- Item 5 -->
                                                        <div class="clean-item mb-3">
                                                            <h6>Down Jacket</h6>
                                                            <div class="clean">
                                                                <counter-index></counter-index>
                                                                <div class="total">
                                                                    Total :  <span> $10</span>
                                                                </div>
                                                                <div class="action">
                                                                    <div class="d-flex align-items-center">
                                                                        <a class="btn btn-icon btn-sm btn-light rounded-circle position-relative me-2"  data-bs-toggle="modal" data-bs-target="#edit_evening_dress">
                                                                            <i class="icon-pencil-line"></i>
                                                                        </a>
                                                                        <a href="#" class="btn btn-icon btn-danger rounded-circle" data-bs-toggle="modal" data-bs-target="#delete_modal"><i class="icon-trash-2"></i></a>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <!-- Add Ones -->
                                                        <div class="card bg-light mb-0">
                                                            <div class="card-body p-3">
                                                                <div class="d-flex align-items-center justify-content-between gap-2 flex-xxl-nowrap flex-wrap">
                                                                    <div>
                                                                        <h6 class="fs-14 fw-semibold mb-2">Add ons</h6>
                                                                        <div class="d-flex align-items-center gap-2 flex-wrap">
                                                                            <span class="badge bg-white text-dark">Detergent  : Free</span>
                                                                            <span class="badge bg-white text-dark">Softener  : Free</span>
                                                                        </div>
                                                                    </div>
                                                                    <button class="btn btn-icon btn-dark fs-14 fw-normal" data-bs-toggle="offcanvas" data-bs-target="#filter-offcanvas-2"><i class="icon-pencil-line"></i></button>
                                                                </div>
                                                            </div>
                                                        </div>

                                                    </div> 
                                                </div>
                                            </div>
                                        </div>
                                        <!-- /FAQ Item -->

                                        <!-- FAQ Item -->
                                        <div class="accordion-item">
                                            <h3 class="accordion-header" id="headingEight">
                                                <a href="#" class="accordion-button collapsed" data-bs-toggle="collapse" data-bs-target="#collapseeight" aria-controls="collapseeight">
                                                    Laundry <button href="#" class="text-danger add-btn fw-semibold fs-13 p-0 border-0 text-decoration-underline"> Add Items</button>
                                                </a>
                                            </h3>
                                            <div id="collapseeight" class="accordion-collapse collapse" data-bs-parent="#faq-details">
                                                <div class="accordion-body">
                                                    <div class="accordion-content">

                                                        <!-- Item 1 -->
                                                        <div class="clean-item">
                                                            <h6>Down Coat</h6>
                                                            <div class="clean">
                                                                <counter-index></counter-index>
                                                                <div class="total">
                                                                    Total :  <span> $30</span>
                                                                </div>
                                                                <div class="action">
                                                                    <div class="d-flex align-items-center">
                                                                        <a class="btn btn-icon btn-sm btn-light rounded-circle position-relative me-2"  data-bs-toggle="modal" data-bs-target="#edit_evening_dress">
                                                                            <i class="icon-pencil-line"></i>
                                                                        </a>
                                                                        <a href="#" class="btn btn-icon btn-danger rounded-circle" data-bs-toggle="modal" data-bs-target="#delete_modal"><i class="icon-trash-2"></i></a>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>

                                                        <!-- Item 2 -->
                                                        <div class="clean-item">
                                                            <h6>Trousers</h6>
                                                            <div class="clean">
                                                                <counter-index></counter-index>
                                                                <div class="total">
                                                                    Total :  <span> $11</span>
                                                                </div>
                                                                <div class="action">
                                                                    <div class="d-flex align-items-center">
                                                                        <a class="btn btn-icon btn-sm btn-light rounded-circle position-relative me-2"  data-bs-toggle="modal" data-bs-target="#edit_evening_dress">
                                                                            <i class="icon-pencil-line"></i>
                                                                        </a>
                                                                        <a href="#" class="btn btn-icon btn-danger rounded-circle" data-bs-toggle="modal" data-bs-target="#delete_modal"><i class="icon-trash-2"></i></a>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>

                                                        <!-- Add Ones -->
                                                        <div class="card bg-light mb-0">
                                                            <div class="card-body p-3">
                                                                <div class="d-flex align-items-center justify-content-between gap-2 flex-xxl-nowrap flex-wrap">
                                                                    <div>
                                                                        <h6 class="fs-14 fw-semibold mb-2">Add ons</h6>
                                                                        <div class="d-flex align-items-center gap-2 flex-wrap">
                                                                            <span class="badge bg-white text-dark">Detergent  : Free</span>
                                                                            <span class="badge bg-white text-dark">Softener  : Free</span>
                                                                        </div>
                                                                    </div>
                                                                    <button class="btn btn-icon btn-dark fs-14 fw-normal" data-bs-toggle="modal" data-bs-target="#edit_evening_dress"><i class="icon-pencil-line"></i></button>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div> 
                                                </div>
                                            </div>
                                        </div>
                                        <!-- /FAQ Item -->

                                        <!-- FAQ Item -->
                                        <div class="accordion-item bg-light border-0">
                                            <h3 class="accordion-header" id="headingTen">
                                                <a href="#" class="accordion-button d-flex align-items-center justify-content-between" data-bs-toggle="collapse" data-bs-target="#collapseSix" aria-expanded="true">
                                                    Payment Summary
                                                </a>
                                            </h3>
                                            <div id="collapseSix" class="accordion-collapse collapse show" data-bs-parent="#faq-details">
                                                <div class="accordion-body">
                                                    <div class="accordion-content">
                                                        <h6 class="mb-3 d-flex align-items-center justify-content-between gap-1 fs-14 fw-semibold text-body"> <span class="d-flex align-items-center"> Sub Total</span> <span class="text-dark">$128</span> </h6>
                                                        <h6 class="mb-3 d-flex align-items-center justify-content-between gap-1 fs-14 fw-semibold text-body"> <span class="d-flex align-items-center"> Tax (10%)   <button class="text-dark fs-14 fw-normal p-0 border-0 bg-transparent ms-1"><i class="icon-pencil-line"></i></button> </span> <span class="text-dark">$10</span> </h6>
                                                        <h6 class="mb-3 d-flex align-items-center justify-content-between gap-1 fs-14 fw-semibold text-body"> <span class="d-flex align-items-center"> Discount (12%)   <button class="text-dark fs-14 fw-normal p-0 border-0 bg-transparent ms-1"><i class="icon-pencil-line"></i></button> </span> <span class="text-danger">$12</span> </h6>
                                                        <h6 class="mb-3 d-flex align-items-center justify-content-between gap-1 fs-14 fw-semibold text-body"> <span class="d-flex align-items-center"> Coupoun   <button class="text-dark fs-14 fw-normal p-0 border-0 bg-transparent ms-1"><i class="icon-pencil-line"></i></button> </span> <span class="text-dark">$0</span> </h6>
                                                        <div class="pt-3 mt-3 border-top">
                                                            <h5 class="d-flex align-items-center justify-content-between gap-1 fs-18 fw-bold mb-0">Amount to be Paid   <span>$0</span></h5>
                                                        </div>
                                                    </div> 
                                                </div>
                                            </div>
                                        </div>
                                        <!-- /FAQ Item -->
                                        
                                    </div>
                                </div>
                                <!-- End Details -->

                                <!-- Start Delivery -->
                                <div class="delivery-item">
                                    <div class="delivery-wrap flex-grow-1">
                                        <span class="d-flex align-items-center gap-2 time"><i class="icon-clock"></i> Pickup and Delivery</span>
                                        <div class="select-item">
                                            <a href="#" data-bs-toggle="modal" data-bs-target="#pickup_delivery" class="d-flex align-items-center"> <span class="text-decoration-underline">Select</span>  <i class="icon-chevron-right ms-1"></i></a>
                                        </div>
                                    </div>
                                    <button class="btn btn-icon btn-dark menu-option-show p-0 border-0" @click="showMenu"> <i class="icon-settings-2"></i></button>
                                </div>
                                <!-- End Delivery -->

                                <!-- Start Creadit -->
                                <div class="credit-item">
                                    <div class="credit-wrap">
                                        <span class="d-flex align-items-center justify-content-center gap-1 text-white fw-semibold"><i class="icon-badge-dollar-sign text-secondary"></i> Credit Card</span>
                                        <a href="#" class="text-white link d-flex align-items-center gap-1" data-bs-toggle="modal" data-bs-target="#select_payment"> <span class="text-decoration-underline">Change</span>  <i class="icon-chevron-right"></i></a>
                                    </div>
                                    <a href="#" class="btn btn-light w-100" data-bs-toggle="modal" data-bs-target="#order_created">Pay Now $164</a>
                                </div>
                                <!-- End Creadit -->

                            </div>

                            <!-- Start Menu  -->
                            <div v-show="isMenuVisible" class="menu-option">
                                <h5 class="d-flex align-items-center justify-content-between mb-4 fs-20">Options  <button class="hide-menu-option" @click="hideMenu">Hide</button></h5>
                                <div class="row row-gap-3">
                                    <div class="col-sm-4">
                                        <a href="#" class="d-flex align-items-center gap-2 btn btn-dark" > <i class="icon-printer"></i> Print</a>
                                    </div>
                                    <div class="col-sm-4">
                                        <a href="#" class="d-flex align-items-center gap-2 btn btn-dark" data-bs-toggle="modal" data-bs-target="#view_invoices"> <i class="icon-file-chart-column"></i>Invoice</a>
                                    </div>
                                    <div class="col-sm-4">
                                        <a href="#" class="d-flex align-items-center gap-2 btn btn-dark" > <i class="icon-files"></i> Draft </a>
                                    </div>
                                    <div class="col-sm-4">
                                        <a href="#" class="d-flex align-items-center gap-2 btn btn-dark"> <i class="icon-x"></i> Cancel</a> 
                                    </div>
                                    <div class="col-sm-4">
                                        <a href="#" class="d-flex align-items-center gap-2 btn btn-dark" > <i class="icon-zap"></i>Void</a>
                                    </div>
                                    <div class="col-sm-4">
                                        <a href="#" class="d-flex align-items-center gap-2 btn btn-dark"> <i class="icon-file-chart-line"></i> Transactions</a>
                                    </div>
                                </div>
                            </div>
                            <!-- End Menu  -->
                        </div>
                    </div>
                </div>

                <!-- end row -->
            </div>

        </div>
        <!-- End Content Wrap -->
                        
    </div>
    <!-- End Content -->
    <!-- ========================
        End Page Content
    ========================= -->

    <pos-modal></pos-modal>
</template>

<script>
import { defineComponent, onMounted, onBeforeUnmount } from "vue";
import { Carousel, Slide } from "vue3-carousel";
import "vue3-carousel/dist/carousel.css";

export default defineComponent({    
    components: {
        Carousel,
        Slide,
    },
    data(){
        return {
            activeCard: null,
            isMenuVisible: false,
            selected: [],
            Order: [
                { label: 'Select', value: 'Select' },
                { label: 'Sue Allen', value: 'Sue Allen' },
                { label: 'Frank Barrett', value: 'Frank Barrett' },
                { label: 'Jim Vickers', value: 'Jim Vickers' }
            ],
            settingsOne: {
                itemsToShow: 6,
                snapAlign: "center",
                loop: true,
            },
            breakpointsOne: {
                575: {
                    itemsToShow: 1,
                    snapAlign: "center",
                },
                767: {
                    itemsToShow: 2,
                    snapAlign: "center",
                },
                991: {
                    itemsToShow: 4,
                    snapAlign: "center",
                },
                1024: {
                    itemsToShow: 4.5,
                    snapAlign: "start",
                },
            },
        }
    },
    methods: {
        moveNext() {
            this.$refs.categoryCarousel.next();
        },
        movePrev() {
            this.$refs.categoryCarousel.prev();
        },
        showMenu() {
            this.isMenuVisible = true
        },
        hideMenu() {
            this.isMenuVisible = false
        },
        setActive(id) {
            this.activeCard = this.activeCard === id ? null : id
        }
    },
    setup() {
        onMounted(() => {
            document.body.classList.add("pos-page");
        });
        onBeforeUnmount(() => {
            document.body.classList.remove("pos-page");
        });
    },
});
</script>