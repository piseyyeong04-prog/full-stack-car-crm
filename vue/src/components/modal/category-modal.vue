<template>
    <!-- Add Category -->
    <div class="modal fade" id="add_category">
        <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content">
                <div class="modal-header border-0 pb-1">
                    <h4 class="modal-title">Create Category</h4>
                    <button type="button" class="btn-close btn-close-modal position-relative" data-bs-dismiss="modal"
                        aria-label="Close"><i class="icon-x"></i></button>
                </div>
                <form>
                    <div class="modal-body">
                        <div class="row">
                            <div class="col-md-12">
                                <div class="mb-3">
                                    <label class="form-label">Name<span class="text-danger"> *</span></label>
                                    <input type="text" class="form-control">
                                </div>
                                <div class="mb-3">
                                    <label class="form-label">Status<span class="text-danger"> *</span></label>
                                    <vue-select :options="Status" v-model="selected" placeholder="Select" />
                                </div>
                            </div>
                        </div>
                        <div class="d-flex align-items-center justify-content-between gap-2 pt-1">
                            <button type="button" class="btn btn-dark w-100" data-bs-dismiss="modal"><i
                                    class="icon-x me-1"></i>Cancel</button>
                            <button type="submit" class="btn btn-primary w-100"><i
                                    class="icon-circle-check me-1"></i>Create New</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>
    <!-- Add Category End -->

    <!-- Edit Category -->
    <div class="modal fade" id="edit_category">
        <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content">
                <div class="modal-header border-0 pb-1">
                    <h4 class="modal-title">Edit Category</h4>
                    <button type="button" class="btn-close btn-close-modal position-relative" data-bs-dismiss="modal"
                        aria-label="Close"><i class="icon-x"></i></button>
                </div>
                <form>
                    <div class="modal-body">
                        <div class="row">
                            <div class="col-md-12">
                                <div class="mb-3">
                                    <label class="form-label">Name<span class="text-danger"> *</span></label>
                                    <input type="text" class="form-control" value="Accessories">
                                </div>
                                <div class="mb-3">
                                    <label class="form-label">Status<span class="text-danger"> *</span></label>
                                    <vue-select :options="Status" v-model="selectedOne" placeholder="Active" />
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
</template>
<script>
export default {
    data() {
        return {
            selected: null,
            selectedOne: null,
            Status: [
                { label: 'Select', value: 'Select' },
                { label: 'Active', value: 'Active' },
                { label: 'Inactive', value: 'Inactive' },
            ],
        };
    },
};
</script>