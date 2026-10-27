<template>
    <Carousel :wrap-around="true" :settings="settings" :breakpoints="breakpoints">
        <Slide>
            <!-- item 1 -->
            <div class="slide-item w-100 me-3">
                <div class="services-card bg-soft-secondary" :class="{ active: activeCard === 'card1' }" @click="toggleActive('card1')">
                    <img src="@/assets/img/icons/pos-icon-1.svg" alt="icon" class="img-fluid icon-1">
                    <h6>Ironing</h6>
                    <span class="bg-secondary-3 circle"></span>
                    <span class="bg-secondary-3 circle two"></span>
                </div>
            </div>
        </Slide>
        <Slide>
            <!-- item 2 -->
            <div class="slide-item w-100 me-3">
                <div class="services-card bg-soft-info" :class="{ active: activeCard === 'card2' }" @click="toggleActive('card2')">
                    <img src="@/assets/img/icons/pos-icon-2.svg" alt="icon" class="img-fluid icon-1">
                    <h6>Laundry</h6>
                    <span class="bg-info-3 circle"></span>
                    <span class="bg-info-3 circle two"></span>
                </div>
            </div>
        </Slide>
        <Slide>
            <!-- item 3 -->
            <div class="slide-item w-100 me-3">
                <div class="services-card bg-soft-primary" :class="{ active: activeCard === 'card3' }" @click="toggleActive('card3')">
                    <img src="@/assets/img/icons/pos-icon-3.svg" alt="icon" class="img-fluid icon-1">
                    <h6>Dry Cleaning</h6>
                    <span class="bg-primary-3 circle"></span>
                    <span class="bg-primary-3 circle two"></span>
                </div>
            </div>
        </Slide>
        <Slide>
            <!-- item 4 -->
            <div class="slide-item w-100 me-3">
                <div class="services-card bg-soft-orange" :class="{ active: activeCard === 'card4' }" @click="toggleActive('card4')">
                    <img src="@/assets/img/icons/pos-icon-4.svg" alt="icon" class="img-fluid icon-1">
                    <h6>Wet Cleaning</h6>
                    <span class="bg-orange-3 circle"></span>
                    <span class="bg-orange-3 circle two"></span>
                </div>
            </div>
        </Slide>
        <Slide>
            <!-- item 5 -->
            <div class="slide-item w-100 me-3">
                <div class="services-card bg-soft-success" :class="{ active: activeCard === 'card5' }" @click="toggleActive('card5')">
                    <img src="@/assets/img/icons/pos-icon-5.svg" alt="icon" class="img-fluid icon-1">
                    <h6>Wash & Fold</h6>
                    <span class="bg-success-3 circle"></span>
                    <span class="bg-success-3 circle two"></span>
                </div>
            </div>
        </Slide>
        <Slide>
            <!-- item 6 -->
            <div class="slide-item w-100 me-3">
                <div class="services-card bg-soft-purple" :class="{ active: activeCard === 'card6' }" @click="toggleActive('card6')">
                    <img src="@/assets/img/icons/pos-icon-6.svg" alt="icon" class="img-fluid icon-1">
                    <h6>Clothing</h6>
                    <span class="bg-purple-3 circle"></span>
                    <span class="bg-purple-3 circle two"></span>
                </div>
            </div>
        </Slide>
    </Carousel>
</template>

<script>
import { Carousel, Slide } from "vue3-carousel";
import "vue3-carousel/dist/carousel.css";

export default {
    data(){
        return {
            activeCard: null,
            settings: {
                itemsToShow: 1,
                snapAlign: "center",
                loop: true,
            },
            breakpoints: {
                575: {
                    itemsToShow: 1,
                    snapAlign: "center",
                },
                767: {
                    itemsToShow: 2,
                    snapAlign: "center",
                },
                991: {
                    itemsToShow: 3,
                    snapAlign: "center",
                },
                1024: {
                    itemsToShow: 3,
                    snapAlign: "start",
                },
            },
        }
    },
    components: {
        Carousel,
        Slide,
    },
    methods: {
        toggleActive(card) {
            this.activeCard = this.activeCard === card ? null : card
        }
    }
}
</script>