<template>
    <!-- Add Product -->
    <div class="modal fade" id="add_product">
        <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content">
                <div class="modal-header border-0 pb-1">
                    <h4 class="modal-title">Create Product</h4>
                    <button type="button" class="btn-close btn-close-modal position-relative position-relative"
                        data-bs-dismiss="modal" aria-label="Close"><i class="icon-x"></i></button>
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
                                    <label class="form-label">Product Name<span class="text-danger"> *</span></label>
                                    <input type="text" class="form-control">
                                </div>
                                <div class="mb-3">
                                    <label class="form-label">Services<span class="text-danger"> *</span></label>
                                    <vue-multiselect
                                        v-model="selectOne"
                                        :options="Services"
                                        :multiple="true"
                                        label="name"
                                        class="multiple-img"
                                        track-by="id"
                                        />
                                </div>
                                <div class="mb-3">
                                    <label class="form-label">Category<span class="text-danger"> *</span></label>
                                    <vue-multiselect
                                        v-model="selectTwo"
                                        :options="Category"
                                        :multiple="true"
                                        label="name"
                                        class="multiple-img"
                                        track-by="id"
                                        />
                                </div>
                                <div class="mb-3">
                                    <label class="form-label">Price<span class="text-danger"> *</span></label>
                                    <input type="text" class="form-control">
                                </div>
                                <div class="mb-3">
                                    <label class="form-label">Offer Price<span class="text-danger"> *</span></label>
                                    <input type="text" class="form-control">
                                </div>
                                <div class="mb-3">
                                    <label class="form-label">Status<span class="text-danger"> *</span></label>
                                    <vue-select :options="Status" v-model="selected" placeholder="Select" />
                                </div>
                                <div class="form-check form-switch mb-3">
                                    <input class="form-check-input" type="checkbox" role="switch"
                                        id="switchCheckChecked" checked>
                                    <label class="form-check-label" for="switchCheckChecked">Change Price on Add
                                        Producty</label>
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
    <!-- Add Product End -->

    <!-- Edit Product -->
    <div class="modal fade" id="edit_product">
        <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content">
                <div class="modal-header border-0 pb-1">
                    <h4 class="modal-title">Edit Product</h4>
                    <button type="button" class="btn-close btn-close-modal position-relative" data-bs-dismiss="modal"
                        aria-label="Close"><i class="icon-x"></i></button>
                </div>
                <form>
                    <div class="modal-body">
                        <div class="row">
                            <div class="col-md-12">
                                <div class="mb-4 d-flex align-items-center flex-wrap gap-3">
                                    <div class="avatar avatar-3xl border bg-light">
                                        <img src="@/assets/img/products/product-03.svg" alt="item"
                                            class="img-fluid rounded">
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
                                    <label class="form-label">Product Name<span class="text-danger"> *</span></label>
                                    <input type="text" class="form-control" value="Waistcoat">
                                </div>
                                <div class="mb-3">
                                    <label class="form-label">Services<span class="text-danger"> *</span></label>
                                    <vue-multiselect
                                        v-model="selectOne"
                                        :options="Services"
                                        :multiple="true"
                                        label="name"
                                        class="select-multiple multiple-img"
                                        track-by="id"
                                        />
                                </div>
                                <div class="mb-3">
                                    <label class="form-label">Category<span class="text-danger"> *</span></label>
                                    <vue-multiselect
                                        v-model="selectTwo"
                                        :options="Category"
                                        :multiple="true"
                                        label="name"
                                        class="select-multiple multiple-img"
                                        track-by="id"
                                        />
                                </div>
                                <div class="mb-3">
                                    <label class="form-label">Price<span class="text-danger"> *</span></label>
                                    <input type="text" class="form-control" value="$25">
                                </div>
                                <div class="mb-3">
                                    <label class="form-label">Offer Price<span class="text-danger"> *</span></label>
                                    <input type="text" class="form-control" value="$25">
                                </div>
                                <div class="mb-3">
                                    <label class="form-label">Status<span class="text-danger"> *</span></label>
                                    <vue-select :options="Status" v-model="selectedOne" placeholder="Active" />
                                </div>
                                <div class="form-check form-switch mb-3">
                                    <input class="form-check-input" type="checkbox" role="switch"
                                        id="switchCheckChecked" checked>
                                    <label class="form-check-label" for="switchCheckChecked">Change Price on Add
                                        Producty</label>
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
    <!-- Edit Product End -->
</template>
<script>
export default {
    data() {
        return {
            selected: null,
            selectedOne: null,
            selectOne: [],
            selectTwo: [],
            Status: [
                { label: 'Select', value: 'Select' },
                { label: 'Active', value: 'Active' },
                { label: 'Inactive', value: 'Inactive' },
            ],
            Services: [
                { id: 1, name: "Select" },
                { id: 2, name: "Clothing" },
                { id: 3, name: "Ironing" },
                { id: 4, name: "Laundry" },
            ],
            Category: [
                { id: 1, name: "Select" },
                { id: 2, name: "Dresses" },
                { id: 3, name: "Suits" },
                { id: 4, name: "Knitwear" },
                { id: 5, name: "Accessories" },
            ],
        };
    },
};
</script>