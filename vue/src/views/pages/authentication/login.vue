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
                        <div class="w-100 position-relative h-100 z-1 overflow-hidden crm-auth-hero">
                            <!-- Background Image with Overlay -->
                            <div class="crm-hero-bg">
                                <img src="@/assets/img/authentication/dealership-crm-team.jpg"
                                    class="crm-hero-img" alt="Car Dealership CRM Team">
                                <div class="crm-hero-overlay"></div>
                            </div>

                            <!-- Content Overlay -->
                            <div class="crm-auth-content">
                                <div>
                                    <span class="crm-hero-badge">
                                        <i class="icon-car"></i> Automotive Dealership CRM
                                    </span>
                                    <h1 class="text-white fw-bold mb-3">Complete Control of your<br>Dealership With Ease</h1>
                                    <p class="text-white-50 fs-16 mb-0" style="max-width: 480px;">
                                        From lead pipeline and vehicle inventory to quotation approvals, bookings, and workshop repair orders — all in one unified platform.
                                    </p>
                                </div>

                                <div class="crm-hero-footer d-flex align-items-center gap-3 flex-wrap">
                                    <div class="crm-hero-pill">
                                        <i class="icon-gauge text-primary fs-16"></i>
                                        <span>Live Sales KPI</span>
                                    </div>
                                    <div class="crm-hero-pill">
                                        <i class="icon-car text-primary fs-16"></i>
                                        <span>Vehicle Stock</span>
                                    </div>
                                    <div class="crm-hero-pill">
                                        <i class="icon-wrench text-primary fs-16"></i>
                                        <span>Workshop Jobs</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div> <!-- end col -->

                <div class="col-lg-6 col-md-12 col-sm-12 p-3">

                    <!-- start row -->
                    <div class="row justify-content-center align-items-center overflow-auto flex-wrap auth-vh vh-100">

                        <div class="col-xl-8 col-lg-10 col-md-8 col-sm-10 mx-auto">
                            <form @submit.prevent="handleLogin">

                                <div v-if="errorMessage" class="mb-3">
                                    <div class="alert alert-danger border-0 border-danger border-bottom alert-dismissible"
                                        role="alert">
                                        <p class="fw-medium mb-0 d-inline-flex align-items-center">
                                            <i class="icon-circle-x fs-20 me-2"></i>
                                            {{ errorMessage }}
                                        </p>
                                        <a href="#" class="ms-3 top-50 translate-middle-y link-danger"
                                            data-bs-dismiss="alert" aria-label="Close">
                                        </a>
                                    </div>
                                </div>

                                <div class="d-flex flex-column justify-content-between">
                                    <div class="mb-5">
                                        <router-link :to="lp('/dashboard')"><img src="@/assets/img/car-logo.svg" class="img-fluid"
                                                alt="Logo"></router-link>
                                    </div>

                                    <div>
                                        <div class="mb-4">
                                            <h3 class="mb-2">Hi, Welcome Back !!!</h3>
                                            <p class="mb-0">Please enter your credentials to sign in!</p>
                                        </div>

                                        <div class="mb-3">
                                            <label class="form-label">Email<span class="text-danger"> *</span></label>
                                            <input type="email" v-model="email" class="form-control">
                                        </div>

                                        <div class="mb-3">
                                            <label class="form-label">Password<span class="text-danger">
                                                    *</span></label>
                                            <div class="input-group input-group-flat pass-group w-100">
                                                <input :type="showPassword ? 'text' : 'password'" v-model="password"
                                                    class="form-control pass-input">
                                                <span class="input-group-text toggle-password" @click="togglePassword">
                                                    <i :class="showPassword ? 'icon-eye' : 'icon-eye-off'"></i>
                                                </span>
                                            </div>
                                        </div>

                                        <div class="d-flex align-items-center justify-content-between mb-4">
                                            <div class="d-flex align-items-center">
                                                <div class="form-check form-check-md mb-0">
                                                    <input class="form-check-input" id="remember_me" type="checkbox"
                                                        v-model="rememberMe">
                                                    <label for="remember_me"
                                                        class="form-check-label text-dark mt-0">Remember Me</label>
                                                </div>
                                            </div>
                                            <div class="text-end">
                                                <router-link :to="lp('/forgot-password')" class="link-primary">Forgot
                                                    Password?</router-link>
                                            </div>
                                        </div>

                                        <div class="mb-3">
                                            <button type="submit" class="btn btn-primary w-100 py-2 fs-15" :disabled="isLoading">
                                                <span v-if="isLoading">Signing In...</span>
                                                <span v-else>Sign In</span>
                                            </button>
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

            <div class="alert alert-danger border-0 border-danger border-bottom alert-dismissible pe-5 d-none"
                role="alert">
                <p class="fw-medium mb-0 d-inline-flex align-items-center">
                    <span
                        class="btn btn-icon btn-xs rounded-circle bg-danger d-flex align-items-center justify-content-center pe-none me-2 "><i
                            class="icon-x fs-16 text-white"></i></span>Please enter your user name
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
    name: 'AuthLogin',
    data() {
        return {
            email: 'admin@example.com',
            password: '123456',
            rememberMe: false,
            errorMessage: '',
            isLoading: false,
            showPassword: false
        };
    },
    mounted() {
        // Check if email is passed as query parameter from registration
        if (this.$route.query.email) {
            this.email = this.$route.query.email;
        }
    },
    methods: {
        togglePassword() {
            this.showPassword = !this.showPassword;
        },
        handleLogin() {
            // Clear previous error
            this.errorMessage = '';
            this.isLoading = true;
            // Simulate API delay
            setTimeout(() => {
                let isAuthenticated = false;

                // Check default admin credentials
                if (this.email === 'admin@example.com' && this.password === '123456') {
                    isAuthenticated = true;
                } else {
                    // Check registered users from localStorage
                    const registeredUsers = JSON.parse(localStorage.getItem('registeredUsers') || '[]');
                    const user = registeredUsers.find(
                        user => user.email === this.email.trim() && user.password === this.password
                    );

                    if (user) {
                        isAuthenticated = true;
                    }
                }
                if (isAuthenticated) {
                    // Success - redirect to dashboard
                    this.$router.push(this.lp('/dashboard'));
                } else {
                    // Show error message
                    this.errorMessage = 'Invalid email or password. Please try again.';
                    this.isLoading = false;
                }
            }, 1000);
        }
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

<style scoped>
.crm-auth-hero {
    position: relative;
    background: #071416;
}

.crm-hero-bg {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
}

.crm-hero-img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center 30%;
    filter: brightness(0.95);
}

.crm-hero-overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(
        180deg,
        rgba(7, 20, 22, 0.82) 0%,
        rgba(7, 20, 22, 0.35) 45%,
        rgba(7, 20, 22, 0.92) 100%
    );
}

.crm-auth-content {
    position: relative;
    z-index: 2;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 60px 48px;
}

.crm-hero-badge {
    display: inline-flex;
    align-items: center;
    gap: 6px;
    background: rgba(19, 181, 201, 0.18);
    border: 1px solid rgba(19, 181, 201, 0.45);
    color: #13B5C9;
    font-size: 12px;
    font-weight: 600;
    padding: 6px 14px;
    border-radius: 50px;
    margin-bottom: 20px;
    backdrop-filter: blur(8px);
}

.crm-hero-pill {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    background: rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(10px);
    border: 1px solid rgba(255, 255, 255, 0.15);
    padding: 8px 16px;
    border-radius: 8px;
    color: #ffffff;
    font-size: 13px;
    font-weight: 500;
}
</style>
