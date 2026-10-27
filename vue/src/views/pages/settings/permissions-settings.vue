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

                                        <!-- table start -->
                                        <div class="table-responsive table-nowrap">
                                            <table class="table mb-0 border">
                                                <thead class="thead-light">
                                                    <tr>
                                                        <th class="fs-16">Roles</th>
                                                        <th class="fs-16">Status</th>
                                                        <th class="fs-16"></th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <td><router-link :to="lp('/settings/roles-permissions')"
                                                                class="fs-14 fw-semibold">Admin</router-link></td>
                                                        <td><span class="badge badge-soft-success">Active</span></td>
                                                        <td class="text-end">
                                                            <div class="dropstart">
                                                                <button class="btn btn-icon btn-white" type="button"
                                                                    data-bs-toggle="dropdown" aria-haspopup="true"
                                                                    aria-expanded="false" aria-label="Actions">
                                                                    <i class="icon-ellipsis-vertical"></i>
                                                                </button>
                                                                <ul class="dropdown-menu p-3">
                                                                    <li>
                                                                        <a href="#"
                                                                            class="dropdown-item rounded d-flex align-items-center"
                                                                            data-bs-toggle="modal"
                                                                            data-bs-target="#edit_role"><i
                                                                                class="icon-pencil-line me-2"></i>Edit
                                                                            Role</a>
                                                                    </li>
                                                                    <li>
                                                                        <a href="#"
                                                                            class="dropdown-item rounded d-flex align-items-center"
                                                                            data-bs-toggle="modal"
                                                                            data-bs-target="#delete_modal"><i
                                                                                class="icon-trash-2 me-2"></i>Delete
                                                                            Role</a>
                                                                    </li>
                                                                    <li>
                                                                        <router-link :to="lp('/settings/roles-permissions')"
                                                                            class="dropdown-item rounded d-flex align-items-center"><i
                                                                                class="icon-shield me-2"></i>View
                                                                            Permissions</router-link>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td><router-link :to="lp('/settings/roles-permissions')"
                                                                class="fs-14 fw-semibold">Billing</router-link></td>
                                                        <td><span class="badge badge-soft-success">Active</span></td>
                                                        <td class="text-end">
                                                            <div class="dropstart">
                                                                <button class="btn btn-icon btn-white" type="button"
                                                                    data-bs-toggle="dropdown" aria-haspopup="true"
                                                                    aria-expanded="false" aria-label="Actions">
                                                                    <i class="icon-ellipsis-vertical"></i>
                                                                </button>
                                                                <ul class="dropdown-menu p-3">
                                                                    <li>
                                                                        <a href="#"
                                                                            class="dropdown-item rounded d-flex align-items-center"
                                                                            data-bs-toggle="modal"
                                                                            data-bs-target="#edit_role"><i
                                                                                class="icon-pencil-line me-2"></i>Edit
                                                                            Role</a>
                                                                    </li>
                                                                    <li>
                                                                        <a href="#"
                                                                            class="dropdown-item rounded d-flex align-items-center"
                                                                            data-bs-toggle="modal"
                                                                            data-bs-target="#delete_modal"><i
                                                                                class="icon-trash-2 me-2"></i>Delete
                                                                            Role</a>
                                                                    </li>
                                                                    <li>
                                                                        <router-link :to="lp('/settings/roles-permissions')"
                                                                            class="dropdown-item rounded d-flex align-items-center"><i
                                                                                class="icon-shield me-2"></i>View
                                                                            Permissions</router-link>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td><router-link :to="lp('/settings/roles-permissions')"
                                                                class="fs-14 fw-semibold">Laundry
                                                                Attendant</router-link></td>
                                                        <td><span class="badge badge-soft-success">Active</span></td>
                                                        <td class="text-end">
                                                            <div class="dropstart">
                                                                <button class="btn btn-icon btn-white" type="button"
                                                                    data-bs-toggle="dropdown" aria-haspopup="true"
                                                                    aria-expanded="false" aria-label="Actions">
                                                                    <i class="icon-ellipsis-vertical"></i>
                                                                </button>
                                                                <ul class="dropdown-menu p-3">
                                                                    <li>
                                                                        <a href="#"
                                                                            class="dropdown-item rounded d-flex align-items-center"
                                                                            data-bs-toggle="modal"
                                                                            data-bs-target="#edit_role"><i
                                                                                class="icon-pencil-line me-2"></i>Edit
                                                                            Role</a>
                                                                    </li>
                                                                    <li>
                                                                        <a href="#"
                                                                            class="dropdown-item rounded d-flex align-items-center"
                                                                            data-bs-toggle="modal"
                                                                            data-bs-target="#delete_modal"><i
                                                                                class="icon-trash-2 me-2"></i>Delete
                                                                            Role</a>
                                                                    </li>
                                                                    <li>
                                                                        <router-link :to="lp('/settings/roles-permissions')"
                                                                            class="dropdown-item rounded d-flex align-items-center"><i
                                                                                class="icon-shield me-2"></i>View
                                                                            Permissions</router-link>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td><router-link :to="lp('/settings/roles-permissions')"
                                                                class="fs-14 fw-semibold">Washer Operator</router-link>
                                                        </td>
                                                        <td><span class="badge badge-soft-danger">Inactive</span></td>
                                                        <td class="text-end">
                                                            <div class="dropstart">
                                                                <button class="btn btn-icon btn-white" type="button"
                                                                    data-bs-toggle="dropdown" aria-haspopup="true"
                                                                    aria-expanded="false" aria-label="Actions">
                                                                    <i class="icon-ellipsis-vertical"></i>
                                                                </button>
                                                                <ul class="dropdown-menu p-3">
                                                                    <li>
                                                                        <a href="#"
                                                                            class="dropdown-item rounded d-flex align-items-center"
                                                                            data-bs-toggle="modal"
                                                                            data-bs-target="#edit_role"><i
                                                                                class="icon-pencil-line me-2"></i>Edit
                                                                            Role</a>
                                                                    </li>
                                                                    <li>
                                                                        <a href="#"
                                                                            class="dropdown-item rounded d-flex align-items-center"
                                                                            data-bs-toggle="modal"
                                                                            data-bs-target="#delete_modal"><i
                                                                                class="icon-trash-2 me-2"></i>Delete
                                                                            Role</a>
                                                                    </li>
                                                                    <li>
                                                                        <router-link :to="lp('/settings/roles-permissions')"
                                                                            class="dropdown-item rounded d-flex align-items-center"><i
                                                                                class="icon-shield me-2"></i>View
                                                                            Permissions</router-link>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td><router-link :to="lp('/settings/roles-permissions')"
                                                                class="fs-14 fw-semibold">Dryer Operator</router-link>
                                                        </td>
                                                        <td><span class="badge badge-soft-success">Active</span></td>
                                                        <td class="text-end">
                                                            <div class="dropstart">
                                                                <button class="btn btn-icon btn-white" type="button"
                                                                    data-bs-toggle="dropdown" aria-haspopup="true"
                                                                    aria-expanded="false" aria-label="Actions">
                                                                    <i class="icon-ellipsis-vertical"></i>
                                                                </button>
                                                                <ul class="dropdown-menu p-3">
                                                                    <li>
                                                                        <a href="#"
                                                                            class="dropdown-item rounded d-flex align-items-center"
                                                                            data-bs-toggle="modal"
                                                                            data-bs-target="#edit_role"><i
                                                                                class="icon-pencil-line me-2"></i>Edit
                                                                            Role</a>
                                                                    </li>
                                                                    <li>
                                                                        <a href="#"
                                                                            class="dropdown-item rounded d-flex align-items-center"
                                                                            data-bs-toggle="modal"
                                                                            data-bs-target="#delete_modal"><i
                                                                                class="icon-trash-2 me-2"></i>Delete
                                                                            Role</a>
                                                                    </li>
                                                                    <li>
                                                                        <router-link :to="lp('/settings/roles-permissions')"
                                                                            class="dropdown-item rounded d-flex align-items-center"><i
                                                                                class="icon-shield me-2"></i>View
                                                                            Permissions</router-link>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td><router-link :to="lp('/settings/roles-permissions')"
                                                                class="fs-14 fw-semibold">Ironing Staff</router-link>
                                                        </td>
                                                        <td><span class="badge badge-soft-success">Active</span></td>
                                                        <td class="text-end">
                                                            <div class="dropstart">
                                                                <button class="btn btn-icon btn-white" type="button"
                                                                    data-bs-toggle="dropdown" aria-haspopup="true"
                                                                    aria-expanded="false" aria-label="Actions">
                                                                    <i class="icon-ellipsis-vertical"></i>
                                                                </button>
                                                                <ul class="dropdown-menu p-3">
                                                                    <li>
                                                                        <a href="#"
                                                                            class="dropdown-item rounded d-flex align-items-center"
                                                                            data-bs-toggle="modal"
                                                                            data-bs-target="#edit_role"><i
                                                                                class="icon-pencil-line me-2"></i>Edit
                                                                            Role</a>
                                                                    </li>
                                                                    <li>
                                                                        <a href="#"
                                                                            class="dropdown-item rounded d-flex align-items-center"
                                                                            data-bs-toggle="modal"
                                                                            data-bs-target="#delete_modal"><i
                                                                                class="icon-trash-2 me-2"></i>Delete
                                                                            Role</a>
                                                                    </li>
                                                                    <li>
                                                                        <router-link :to="lp('/settings/roles-permissions')"
                                                                            class="dropdown-item rounded d-flex align-items-center"><i
                                                                                class="icon-shield me-2"></i>View
                                                                            Permissions</router-link>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td><router-link :to="lp('/settings/roles-permissions')"
                                                                class="fs-14 fw-semibold">Stain Removal
                                                                Expert</router-link></td>
                                                        <td><span class="badge badge-soft-success">Active</span></td>
                                                        <td class="text-end">
                                                            <div class="dropstart">
                                                                <button class="btn btn-icon btn-white" type="button"
                                                                    data-bs-toggle="dropdown" aria-haspopup="true"
                                                                    aria-expanded="false" aria-label="Actions">
                                                                    <i class="icon-ellipsis-vertical"></i>
                                                                </button>
                                                                <ul class="dropdown-menu p-3">
                                                                    <li>
                                                                        <a href="#"
                                                                            class="dropdown-item rounded d-flex align-items-center"
                                                                            data-bs-toggle="modal"
                                                                            data-bs-target="#edit_role"><i
                                                                                class="icon-pencil-line me-2"></i>Edit
                                                                            Role</a>
                                                                    </li>
                                                                    <li>
                                                                        <a href="#"
                                                                            class="dropdown-item rounded d-flex align-items-center"
                                                                            data-bs-toggle="modal"
                                                                            data-bs-target="#delete_modal"><i
                                                                                class="icon-trash-2 me-2"></i>Delete
                                                                            Role</a>
                                                                    </li>
                                                                    <li>
                                                                        <router-link :to="lp('/settings/roles-permissions')"
                                                                            class="dropdown-item rounded d-flex align-items-center"><i
                                                                                class="icon-shield me-2"></i>View
                                                                            Permissions</router-link>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td><router-link :to="lp('/settings/roles-permissions')"
                                                                class="fs-14 fw-semibold">Quality
                                                                Supervisor</router-link></td>
                                                        <td><span class="badge badge-soft-success">Active</span></td>
                                                        <td class="text-end">
                                                            <div class="dropstart">
                                                                <button class="btn btn-icon btn-white" type="button"
                                                                    data-bs-toggle="dropdown" aria-haspopup="true"
                                                                    aria-expanded="false" aria-label="Actions">
                                                                    <i class="icon-ellipsis-vertical"></i>
                                                                </button>
                                                                <ul class="dropdown-menu p-3">
                                                                    <li>
                                                                        <a href="#"
                                                                            class="dropdown-item rounded d-flex align-items-center"
                                                                            data-bs-toggle="modal"
                                                                            data-bs-target="#edit_role"><i
                                                                                class="icon-pencil-line me-2"></i>Edit
                                                                            Role</a>
                                                                    </li>
                                                                    <li>
                                                                        <a href="#"
                                                                            class="dropdown-item rounded d-flex align-items-center"
                                                                            data-bs-toggle="modal"
                                                                            data-bs-target="#delete_modal"><i
                                                                                class="icon-trash-2 me-2"></i>Delete
                                                                            Role</a>
                                                                    </li>
                                                                    <li>
                                                                        <router-link :to="lp('/settings/roles-permissions')"
                                                                            class="dropdown-item rounded d-flex align-items-center"><i
                                                                                class="icon-shield me-2"></i>View
                                                                            Permissions</router-link>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td><router-link :to="lp('/settings/roles-permissions')"
                                                                class="fs-14 fw-semibold">
                                                                Branch Manager</router-link></td>
                                                        <td><span class="badge badge-soft-success">Active</span></td>
                                                        <td class="text-end">
                                                            <div class="dropstart">
                                                                <button class="btn btn-icon btn-white" type="button"
                                                                    data-bs-toggle="dropdown" aria-haspopup="true"
                                                                    aria-expanded="false" aria-label="Actions">
                                                                    <i class="icon-ellipsis-vertical"></i>
                                                                </button>
                                                                <ul class="dropdown-menu p-3">
                                                                    <li>
                                                                        <a href="#"
                                                                            class="dropdown-item rounded d-flex align-items-center"
                                                                            data-bs-toggle="modal"
                                                                            data-bs-target="#edit_role"><i
                                                                                class="icon-pencil-line me-2"></i>Edit
                                                                            Role</a>
                                                                    </li>
                                                                    <li>
                                                                        <a href="#"
                                                                            class="dropdown-item rounded d-flex align-items-center"
                                                                            data-bs-toggle="modal"
                                                                            data-bs-target="#delete_modal"><i
                                                                                class="icon-trash-2 me-2"></i>Delete
                                                                            Role</a>
                                                                    </li>
                                                                    <li>
                                                                        <router-link :to="lp('/settings/roles-permissions')"
                                                                            class="dropdown-item rounded d-flex align-items-center"><i
                                                                                class="icon-shield me-2"></i>View
                                                                            Permissions</router-link>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td><router-link :to="lp('/settings/roles-permissions')"
                                                                class="fs-14 fw-semibold">Technician</router-link></td>
                                                        <td><span class="badge badge-soft-success">Active</span></td>
                                                        <td class="text-end">
                                                            <div class="dropstart">
                                                                <button class="btn btn-icon btn-white" type="button"
                                                                    data-bs-toggle="dropdown" aria-haspopup="true"
                                                                    aria-expanded="false" aria-label="Actions">
                                                                    <i class="icon-ellipsis-vertical"></i>
                                                                </button>
                                                                <ul class="dropdown-menu p-3">
                                                                    <li>
                                                                        <a href="#"
                                                                            class="dropdown-item rounded d-flex align-items-center"
                                                                            data-bs-toggle="modal"
                                                                            data-bs-target="#edit_role"><i
                                                                                class="icon-pencil-line me-2"></i>Edit
                                                                            Role</a>
                                                                    </li>
                                                                    <li>
                                                                        <a href="#"
                                                                            class="dropdown-item rounded d-flex align-items-center"
                                                                            data-bs-toggle="modal"
                                                                            data-bs-target="#delete_modal"><i
                                                                                class="icon-trash-2 me-2"></i>Delete
                                                                            Role</a>
                                                                    </li>
                                                                    <li>
                                                                        <router-link :to="lp('/settings/roles-permissions')"
                                                                            class="dropdown-item rounded d-flex align-items-center"><i
                                                                                class="icon-shield me-2"></i>View
                                                                            Permissions</router-link>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                        <!-- table end -->

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

    </div>
    <!-- ========================
        End Page Content
    ========================= -->
    
    <permissions-settings-modal></permissions-settings-modal>
</template>