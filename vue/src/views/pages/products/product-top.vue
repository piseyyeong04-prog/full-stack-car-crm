<template>
    <ul class="nav nav-tabs nav-tab-solid nav-solid-dark nav-tabs-rounded gap-2 mb-4">
        <li class="nav-item">
            <router-link :to="lp('/product/products-list')" class="nav-link d-flex align-items-center">
                <i class="icon-box me-2"></i>Products
            </router-link>
        </li>
        <li class="nav-item">
            <router-link :to="lp('/product/services')" class="nav-link d-flex align-items-center">
                <i class="icon-sparkles me-2"></i>Services
            </router-link>
        </li>
        <li class="nav-item">
            <router-link :to="lp('/product/category')" class="nav-link d-flex align-items-center">
                <i class="icon-circle-check-big me-2"></i>Categories
            </router-link>
        </li>
        <li class="nav-item">
            <router-link :to="lp('/product/addons')" class="nav-link d-flex align-items-center">
                <i class="icon-washing-machine me-2"></i>Add Ons
            </router-link>
        </li>
    </ul>
</template>