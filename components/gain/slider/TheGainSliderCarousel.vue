<template>
  <Carousel class="gain-slider__container" :settings="settings" ref="Carousel">
    <template #slides>
      <Slide class="gain-slider__slide" v-for="(slide, slideIndex) in itemData" :key="slideIndex">
        <LazyImage class="gain-slider__img" :src-data="slide.img"/>
      </Slide>
    </template>
    <template #addons>
      <button @click="nextSlide" class="carousel__next">
        <img ariaLabel="arrowLeft" class="gain-slider__arrow" src="/img/right.png">
      </button>
      <button @click="prevSlide" class="carousel__prev">
        <img ariaLabel="arrowLeft" class="gain-slider__arrow" src="/img/left.png">
      </button>
    </template>
  </Carousel>
</template>

<script>
import LazyImage from "../../image/LazyImage";
import 'vue3-carousel/dist/carousel.css'
import {Carousel, Slide} from 'vue3-carousel'

export default {
  name: "TheGainSliderCarousel",
  components: {
    LazyImage,
    Carousel,
    Slide
  },
  props: {
    itemData: {
      type: Array,
      required: true,
    }
  },
  methods: {
    nextSlide() {
      this.$refs.Carousel.next()
    },
    prevSlide() {
      this.$refs.Carousel.prev()
    },
  },
  data() {
    return {
      settings: {
        itemsToShow: 1,
        wrapAround: false,
      },
      currentSlide: 0
    }
  }

}
</script>
