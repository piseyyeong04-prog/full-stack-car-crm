<template>
    <!-- ========================
        Start Page Content
    ========================= -->

    <div class="container-fuild">

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

                                <div class="d-flex flex-column justify-content-between p-3">
                                    <div class="mb-5">
                                        <router-link :to="lp('/dashboard')"><img src="@/assets/img/car-logo.svg" class="img-fluid"
                                                alt="Logo"></router-link>
                                    </div>

                                    <div>
                                        <div class="mb-4">
                                            <h3 class="mb-2">Reset Password</h3>
                                            <p class="mb-0">Your new password must be different from previous used
                                                passwords.</p>
                                        </div>

                                        <div class="mb-3">
                                            <label class="form-label">Password <span class="text-danger">
                                                    *</span></label>
                                            <div class="input-group input-group-flat pass-group w-100">
                                                <input :type="showPassword ? 'text' : 'password'" v-model="password"
                                                    class="form-control pass-input">
                                                <span class="input-group-text toggle-password" @click="togglePassword">
                                                    <i :class="showPassword ? 'icon-eye' : 'icon-eye-off'"></i>
                                                </span>
                                            </div>
                                        </div>

                                        <div class="mb-4">
                                            <label class="form-label">Confirm Password <span class="text-danger">
                                                    *</span></label>
                                            <div class="input-group input-group-flat pass-group w-100">
                                                <input :type="showConfirmPassword ? 'text' : 'password'"
                                                    v-model="confirmPassword" class="form-control pass-input">
                                                <span class="input-group-text toggle-password"
                                                    @click="toggleConfirmPassword">
                                                    <i :class="showConfirmPassword ? 'icon-eye' : 'icon-eye-off'"></i>
                                                </span>
                                            </div>
                                        </div>

                                        <div class="mb-4">
                                            <button type="submit" class="btn btn-primary w-100">Submit</button>
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

        </div>

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
            password: '',
            confirmPassword: '',
            showPassword: false,
            showConfirmPassword: false
        }
    },
    methods: {
        submitForm() {
            this.$router.push(this.lp("/login"));
        },
        togglePassword() {
            this.showPassword = !this.showPassword;
        },
        toggleConfirmPassword() {
            this.showConfirmPassword = !this.showConfirmPassword;
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