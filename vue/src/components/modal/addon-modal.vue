<template>
    <!-- Add Add On -->
    <div class="modal fade" id="add_addon">
        <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content">
                <div class="modal-header border-0 pb-1">
                    <h4 class="modal-title">Create Add On</h4>
                    <button type="button" class="btn-close btn-close-modal position-relative" data-bs-dismiss="modal"
                        aria-label="Close"><i class="icon-x"></i></button>
                </div>
                <form>
                    <div class="modal-body">
                        <div class="row">
                            <div class="col-md-12">
                                <div class="mb-4 d-flex align-items-center flex-wrap gap-3">
                                    <div class="avatar avatar-3xl border bg-light">
                                        <i class="icon-images fs-28 text-dark"></i>
                                    </div>
                                    <div>
                                        <label class="form-label">Upload Product Image</label>
                                        <p class="fs-13 mb-3">Image should be with in 5 MB</p>
                                        <div class="d-flex align-items-center">
                                            <div
                                                class="btn btn-icon btn-sm btn-white rounded-circle position-relative me-2">
                                                <input type="file"
                                                    class="form-control position-absolute w-100 h-100 top-0 start-0 opacity-0">
                                                <i class="icon-upload"></i>
                                            </div>
                                            <a href="#"
                                                class="btn btn-icon btn-sm btn-white rounded-circle text-danger"><i
                                                    class="icon-trash-2"></i></a>
                                        </div>
                                    </div>
                                </div>
                                <div class="mb-3">
                                    <label class="form-label">Type<span class="text-danger"> *</span></label>
                                    <div class="d-flex align-items-center flex-wrap gap-3">
                                        <div class="btn-radio position-relative">
                                            <input type="radio"
                                                class="btn-check top-50 translate-middle-y form-check-input me-2"
                                                name="type" id="detergent" checked>
                                            <label class="btn btn-light rounded p-3 fs-16 fw-medium"
                                                for="detergent">Detergent</label>
                                        </div>
                                        <div class="btn-radio position-relative">
                                            <input type="radio"
                                                class="btn-check top-50 translate-middle-y form-check-input me-2"
                                                name="type" id="softener">
                                            <label class="btn btn-light rounded p-3 fs-16 fw-medium"
                                                for="softener">Softener</label>
                                        </div>
                                        <div class="btn-radio position-relative">
                                            <input type="radio"
                                                class="btn-check top-50 translate-middle-y form-check-input me-2"
                                                name="type" id="dry">
                                            <label class="btn btn-light rounded p-3 fs-16 fw-medium"
                                                for="dry">Dry</label>
                                        </div>
                                    </div>
                                </div>
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
    <!-- Add Add On End -->

    <!-- Edit Add On -->
    <div class="modal fade" id="edit_addon">
        <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content">
                <div class="modal-header border-0 pb-1">
                    <h4 class="modal-title">Edit Add On</h4>
                    <button type="button" class="btn-close btn-close-modal position-relative" data-bs-dismiss="modal"
                        aria-label="Close"><i class="icon-x"></i></button>
                </div>
                <form>
                    <div class="modal-body">
                        <div class="row">
                            <div class="col-md-12">
                                <div class="mb-4 d-flex align-items-center flex-wrap gap-3">
                                    <div class="avatar avatar-3xl border bg-light">
                                        <img src="@/assets/img/addon/addon-01.svg" alt="add on" class="img-fluid">
                                    </div>
                                    <div>
                                        <label class="form-label">Upload Product Image</label>
                                        <p class="fs-13 mb-3">Image should be with in 5 MB</p>
                                        <div class="d-flex align-items-center">
                                            <div
                                                class="btn btn-icon btn-sm btn-white rounded-circle position-relative me-2">
                                                <input type="file"
                                                    class="form-control position-absolute w-100 h-100 top-0 start-0 opacity-0">
                                                <i class="icon-pencil-line"></i>
                                            </div>
                                            <a href="#"
                                                class="btn btn-icon btn-sm btn-white rounded-circle text-danger"><i
                                                    class="icon-trash-2"></i></a>
                                        </div>
                                    </div>
                                </div>
                                <div class="mb-3">
                                    <label class="form-label">Type<span class="text-danger"> *</span></label>
                                    <div class="d-flex align-items-center flex-wrap gap-3">
                                        <div class="btn-radio position-relative">
                                            <input type="radio"
                                                class="btn-check top-50 translate-middle-y form-check-input me-2"
                                                name="type" id="detergent1" checked>
                                            <label class="btn btn-light rounded p-3 fs-16 fw-medium"
                                                for="detergent1">Detergent</label>
                                        </div>
                                        <div class="btn-radio position-relative">
                                            <input type="radio"
                                                class="btn-check top-50 translate-middle-y form-check-input me-2"
                                                name="type" id="softener2">
                                            <label class="btn btn-light rounded p-3 fs-16 fw-medium"
                                                for="softener2">Softener</label>
                                        </div>
                                        <div class="btn-radio position-relative">
                                            <input type="radio"
                                                class="btn-check top-50 translate-middle-y form-check-input me-2"
                                                name="type" id="dry3">
                                            <label class="btn btn-light rounded p-3 fs-16 fw-medium"
                                                for="dry3">Dry</label>
                                        </div>
                                    </div>
                                </div>
                                <div class="mb-3">
                                    <label class="form-label">Name<span class="text-danger"> *</span></label>
                                    <input type="text" class="form-control" value="Free">
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
    <!-- Edit Add On End -->
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