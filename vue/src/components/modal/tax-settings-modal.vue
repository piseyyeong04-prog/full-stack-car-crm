<template>
    <!-- Add Category -->
    <div class="modal fade" id="add_tax">
        <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content">
                <div class="modal-header bg-colored border-0 p-4 pb-3">
                    <img src="@/assets/img/icons/tax-modal-icon.svg" alt="modal-icon" class="">
                    <button type="button" class="btn-close btn-close-modal" data-bs-dismiss="modal"
                        aria-label="Close"><i class="icon-x"></i></button>
                </div>
                <form>
                    <div class="modal-body">
                        <div class="mb-3">
                            <h4 class="modal-title">Create New Tax</h4>
                        </div>
                        <div class="row">
                            <div class="col-md-6">
                                <div class="mb-3">
                                    <label class="form-label">Title<span class="text-danger"> *</span></label>
                                    <input type="text" class="form-control">
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="mb-3">
                                    <label class="form-label">Tax Rate (%)<span class="text-danger"> *</span></label>
                                    <input type="text" class="form-control">
                                </div>
                            </div>
                            <div class="col-md-9">
                                <div class="mb-3">
                                    <label class="form-label">Tax Type<span class="text-danger"> *</span></label>
                                    <vue-select :options="Tax" v-model="selected" placeholder="Select" />
                                </div>
                            </div>
                        </div>
                        <div class="d-flex align-items-center justify-content-between gap-2 pt-1">
                            <button type="button" class="btn btn-dark w-100" data-bs-dismiss="modal"><i
                                    class="icon-x me-1"></i>Cancel</button>
                            <button type="submit" class="btn btn-primary w-100"><i
                                    class="icon-circle-check me-1"></i>Submit</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>
    <!-- Add Category End -->

    <!-- Edit Category -->
    <div class="modal fade" id="edit_tax">
        <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content">
                <div class="modal-header bg-colored border-0 p-4 pb-3">
                    <img src="@/assets/img/icons/tax-modal-icon.svg" alt="modal-icon" class="">
                    <button type="button" class="btn-close btn-close-modal" data-bs-dismiss="modal"
                        aria-label="Close"><i class="icon-x"></i></button>
                </div>
                <form>
                    <div class="modal-body">
                        <div class="mb-3">
                            <h4 class="modal-title">Edit Tax</h4>
                        </div>
                        <div class="row">
                            <div class="col-md-6">
                                <div class="mb-3">
                                    <label class="form-label">Title<span class="text-danger"> *</span></label>
                                    <input type="text" class="form-control" value="Inclusive / Exclusive">
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="mb-3">
                                    <label class="form-label">Tax Rate (%)<span class="text-danger"> *</span></label>
                                    <input type="text" class="form-control" value="9%">
                                </div>
                            </div>
                            <div class="col-md-9">
                                <div class="mb-3">
                                    <label class="form-label">Tax Type<span class="text-danger"> *</span></label>
                                    <vue-select :options="Tax" v-model="selectedOne" placeholder="GST" />
                                </div>
                            </div>
                        </div>
                        <div class="d-flex align-items-center justify-content-between gap-2 pt-1">
                            <button type="button" class="btn btn-dark w-100" data-bs-dismiss="modal"><i
                                    class="icon-x me-1"></i>Cancel</button>
                            <button type="submit" class="btn btn-primary w-100"><i
                                    class="icon-circle-check me-1"></i>Save</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>
    <!-- Edit Category End -->

    <!-- Start Modal  -->
    <div class="modal fade" id="delete_modal">
        <div class="modal-dialog modal-dialog-centered modal-sm">
            <div class="modal-content">
                <div class="modal-body text-center p-4">
                    <div class="mb-4">
                        <span class="avatar avatar-xxl rounded-circle bg-danger-subtle">
                            <img src="@/assets/img/icons/trash-icon.svg" alt="trash" class="img-fluid w-auto h-auto">
                        </span>
                    </div>
                    <h4 class="mb-1">Delete Confirmation</h4>
                    <p class="mb-4">Are you sure you want to delete?</p>
                    <div class="d-flex justify-content-center gap-2">
                        <a href="#" class="btn btn-dark w-100" data-bs-dismiss="modal">Close</a>
                        <a href="javascript:void(0);" class="btn btn-danger w-100" data-bs-dismiss="modal">Delete</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- End Modal  -->
</template>
<script>
    export default {
        data() {
            return {
                selected: null,
                selectedOne: null,
                Tax: [
                    { label: 'Select', value: 'Select' },
                    { label: 'CGST', value: 'CGST' },
                    { label: 'SGST', value: 'SGST' },
                    { label: 'IGST', value: 'IGST' },
                    { label: 'VAT', value: 'VAT' },
                    { label: 'Service Tax', value: 'Service Tax' },
                ],
            };
        },
    };
</script>