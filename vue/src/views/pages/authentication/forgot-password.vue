<template>
    <!-- ========================
        Start Page Content
    ========================= -->

    <div class="container-fuild">

        <!-- Start Content -->
        <div class="w-100 overflow-hidden position-relative flex-wrap d-block vh-100 auth-page">

            <!-- start row -->
            <div class="row g-2">

                <div class="col-lg-6">
                    <div
                        class="position-relative d-lg-flex align-items-center justify-content-center d-none flex-wrap vh-100 p-0 ps-0">
                        <div class="w-100 position-relative h-100 bg-primary z-1 overflow-hidden">
                            <img src="@/assets/img/authentication/authentication-bg-01.png"
                                class="img-fluid position-absolute end-0 z-n1 auth-bg-01" alt="bg">
                            <img src="@/assets/img/authentication/authentication-bg-01.png"
                                class="img-fluid position-absolute top-0 end-0 z-n1 auth-bg-02" alt="bg">
                            <div class="px-4 rounded-3 h-100 d-flex flex-column align-items-center auth-wrap">
                                <div class="text-center z-2">
                                    <h1 class="text-white mb-2">Complete Control of your <br> Dealership With Ease</h1>
                                    <p class="text-white mb-0">From billing to inventory access everything you need in a single powerful dashboard,<br/> Analyze sales, track your best-selling Clothes.</p>
                                </div>
                                <div class="text-center auth-img position-absolute bottom-0">
                                    <img src="@/assets/img/authentication/login.png"
                                        class="img-fluid position-relative z-1" alt="user">
                                </div>
                            </div>
                        </div>
                    </div>
                </div> <!-- end col -->

                <div class="col-lg-6 col-md-12 col-sm-12 p-3">

                    <!-- start row -->
                    <div class="row justify-content-center align-items-center overflow-auto flex-wrap auth-vh vh-100">

                        <div class="col-xl-8 col-lg-10 col-md-8 col-sm-10 mx-auto">
                            <form @submit.prevent="submitForm">
                                <div v-if="errorType === 'incorrect'"
                                    class="alert alert-danger border-0 border-danger border-bottom alert-dismissible pe-5"
                                    role="alert">
                                    <p class="fw-medium mb-0 d-inline-flex align-items-center">
                                        <span
                                            class="btn btn-icon btn-xs rounded-circle bg-danger d-flex align-items-center justify-content-center pe-none me-2">
                                            <i class="icon-x fs-16 text-white"></i>
                                        </span>
                                        Entered Incorrect Email
                                    </p>
                                    <button type="button"
                                        class="btn-close btn-custom-close top-50 translate-middle-y link-danger"
                                        @click="clearError">
                                    </button>
                                </div>

                                <!-- Invalid Email -->
                                <div v-if="errorType === 'invalid'"
                                    class="alert alert-danger border-0 border-danger border-bottom alert-dismissible pe-5"
                                    role="alert">
                                    <p class="fw-medium mb-0 d-inline-flex align-items-center">
                                        <span
                                            class="btn btn-icon btn-xs rounded-circle bg-danger d-flex align-items-center justify-content-center pe-none me-2">
                                            <i class="icon-x fs-16 text-white"></i>
                                        </span>
                                        Email ID is Invalid
                                    </p>
                                    <button type="button"
                                        class="btn-close btn-custom-close top-50 translate-middle-y link-danger"
                                        @click="clearError">
                                    </button>
                                </div>
                                <div class="d-flex flex-column justify-content-between p-3">
                                    <div class="mb-5">
                                        <router-link :to="lp('/dashboard')"><img src="@/assets/img/car-logo.svg" class="img-fluid"
                                                alt="Logo"></router-link>
                                    </div>

                                    <div>
                                        <div class="mb-4">
                                            <h3 class="mb-2">Forgot Password</h3>
                                            <p class="mb-0">Please enter your email address to receive a verification
                                                code</p>
                                        </div>

                                        <div class="mb-4">
                                            <label class="form-label">Email<span class="text-danger"> *</span></label>
                                            <input type="text" class="form-control" v-model="email"
                                                placeholder="Enter your email" />
                                        </div>

                                        <div class="mb-4">
                                            <button type="submit" class="btn btn-primary w-100">Send Email</button>
                                        </div>

                                        <div class="text-center mt-4">
                                            <p class="fw-normal mb-0">Back to <router-link :to="lp('/login')"
                                                    class="link-primary">
                                                    Sign In</router-link></p>
                                        </div>

                                    </div>
                                </div>

                            </form>
                        </div> <!-- end col -->

                    </div>
                    <!-- end row -->

                </div> <!-- end col -->

            </div>
            <!-- end row -->


            <!-- Alert -->
            <div class="alert alert-danger border-0 border-danger border-bottom alert-dismissible pe-5 d-none"
                role="alert">
                <p class="fw-medium mb-0 d-inline-flex align-items-center">
                    <span
                        class="btn btn-icon btn-xs rounded-circle bg-danger d-flex align-items-center justify-content-center pe-none me-2 "><i
                            class="icon-x fs-16 text-white"></i></span>Entered Incorrect Email
                </p>
                <button type="button" class="btn-close btn-custom-close top-50 translate-middle-y link-danger"
                    data-bs-dismiss="alert" aria-label="Close"><i class="icon-x"></i></button>
            </div>

            <!-- Alert -->
            <div class="alert alert-danger border-0 border-danger border-bottom alert-dismissible pe-5 d-none"
                role="alert">
                <p class="fw-medium mb-0 d-inline-flex align-items-center">
                    <span
                        class="btn btn-icon btn-xs rounded-circle bg-danger d-flex align-items-center justify-content-center pe-none me-2 "><i
                            class="icon-x fs-16 text-white"></i></span>Email ID is Invalid
                </p>
                <button type="button" class="btn-close btn-custom-close top-50 translate-middle-y link-danger"
                    data-bs-dismiss="alert" aria-label="Close"><i class="icon-x"></i></button>
            </div>

        </div>
        <!-- End Content -->

    </div>

    <!-- ========================
        End Page Content
    ========================= -->
</template>

<script>
import { defineComponent, onMounted, onBeforeUnmount } from "vue";

export default defineComponent({
    data() {
        return {
            email: "",
            errorType: null, // 'incorrect' | 'invalid' | null
        };
    },
    methods: {
        submitForm() {
            this.clearError();

            if (this.email === "") {
                this.errorType = "incorrect";
                return;
            }

            if (!this.isValidEmail(this.email)) {
                this.errorType = "invalid";
                return;
            }

            // SUCCESS
            this.$router.push(this.lp("/email-verification"));
        },

        isValidEmail(email) {
            const regex =
                /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            return regex.test(email);
        },
        clearError() {
            this.errorType = null;
        },
    },
    setup() {
        onMounted(() => {
            document.body.classList.add("bg-white");
            document.documentElement.setAttribute("data-bs-theme", "light");
        });
        onBeforeUnmount(() => {
            document.body.classList.remove("bg-white");
            document.documentElement.removeAttribute("data-bs-theme");
        });
    },
});

</script>