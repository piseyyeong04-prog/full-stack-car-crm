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

                <!-- roe start -->
                <div class="row justify-content-center">

                    <div class="col-xl-10">
                        <!-- row start -->
                        <div class="row justify-content-center">
                            <div class="col-lg-3">
                                <settings-sidebar></settings-sidebar>
                            </div>
                            <div class="col-lg-9">

                                <!-- card start -->
                                <div class="card mb-0">

                                    <div class="card-header">
                                        <div class="d-flex align-items-center justify-content-between">
                                            <h4 class="d-inline-flex align-items-center mb-0"><i
                                                    class="icon-user-cog me-2"></i>Roles & Permissions</h4>
                                            <a href="#" class="btn btn-primary d-inline-flex align-items-center"
                                                data-bs-toggle="modal" data-bs-target="#add_role"><i
                                                    class="icon-plus me-1"></i>New Role</a>
                                        </div>
                                    </div>

                                    <div class="card-body">

                                        <div class="d-flex align-items-sm-center flex-sm-row flex-column gap-2 mb-4">
                                            <div class="flex-grow-1">
                                                <h5 class="fs-16 fw-bold mb-0"><router-link
                                                        :to="lp('/settings/permissions-settings')"
                                                        class="d-inline-flex align-items-center"><i
                                                            class="icon-arrow-left me-2"></i>Role : Admin</router-link>
                                                </h5>
                                            </div>
                                            <div class="form-check form-check-md">
                                                <input class="form-check-input" type="checkbox" id="select-all"
                                                    v-model="selectAll" @change="toggleAll">
                                                <label for="select-all">Revert All</label>
                                            </div>
                                        </div>

                                        <div class="card">
                                            <div class="card-body">

                                                <!-- table start -->
                                                <div class="table-responsive">
                                                    <table class="table m-0 table-nowrap bg-white">
                                                        <thead>
                                                            <tr>
                                                                <th>Module</th>
                                                                <th v-for="action in actions" :key="action">{{ action }}
                                                                </th>
                                                            </tr>
                                                        </thead>

                                                        <tbody>
                                                            <tr v-for="(module, index) in permissions"
                                                                :key="module.name">
                                                                <td class="text-dark fw-medium">{{ module.name }}</td>

                                                                <td v-for="action in actions" :key="action">
                                                                    <div class="form-check form-check-md">
                                                                        <input class="form-check-input" type="checkbox"
                                                                            v-model="permissions[index][action]">
                                                                    </div>
                                                                </td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                </div>
                                                <!-- table end -->

                                            </div><!-- card body -->
                                        </div><!-- card-->

                                        <div class="d-flex align-items-center justify-content-end gap-2 pt-1">
                                            <button type="button" class="btn btn-dark"><i
                                                    class="icon-x me-1"></i>Cancel</button>
                                            <button type="submit" class="btn btn-primary"><i
                                                    class="icon-circle-check me-1"></i>Save Changes</button>
                                        </div>

                                    </div> <!-- end card body -->

                                </div>
                                <!-- card end -->

                            </div>
                        </div>
                        <!-- row end -->
                    </div><!-- col end -->

                </div>
                <!-- end row -->



            </div>
            <!-- End Content Wrap -->

        </div>
        <!-- End Content -->
        <permissions-settings></permissions-settings>
    </div>
    <!-- ========================
        End Page Content
    ========================= -->
</template>
<script>
export default {
    data() {
        return {
            selectAll: false,

            actions: ['view', 'add', 'edit', 'delete', 'export', 'approve'],

            permissions: [
                { name: 'Dashboard', view: false, add: false, edit: false, delete: false, export: false, approve: false },
                { name: 'POS', view: false, add: false, edit: false, delete: false, export: false, approve: false },
                { name: 'Orders', view: false, add: false, edit: false, delete: false, export: false, approve: false },
                { name: 'Drivers', view: false, add: false, edit: false, delete: false, export: false, approve: false },
                { name: 'Staffs', view: false, add: false, edit: false, delete: false, export: false, approve: false },
                { name: 'Customers', view: false, add: false, edit: false, delete: false, export: false, approve: false },
                { name: 'Reports', view: false, add: false, edit: false, delete: false, export: false, approve: false },
                { name: 'Settings', view: false, add: false, edit: false, delete: false, export: false, approve: false }
            ]
        }
    },
    methods: {
        toggleAll() {
            this.permissions.forEach(module => {
                this.actions.forEach(action => {
                    module[action] = this.selectAll
                })
            })
        }
    }
}
</script>
