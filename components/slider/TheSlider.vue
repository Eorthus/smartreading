<template>
  <div class="slider__container">
    <div class="slider-animation__title">
      <span class="slider__title">
        {{ itemData.title }}
      </span>
    </div>

    <div class="slider__content">
      <div class="slider__text">
        <TheSliderText v-for="(text, text_index) in itemData.text" :itemData="text" :key="text_index"/>
      </div>
      <div class="slider-animation__img">
        <div class="slider__img">
          <LazyImage :src-data="itemData.img" :alt-data="itemData.title"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import LazyImage from "../image/LazyImage";
import TheSliderText from "./text/TheSliderText";

export default {
  name: "TheSlider",
  components: {LazyImage, TheSliderText},
  props: {
    itemData: {
      type: Object,
      required: true,
    },
  },
  mounted() {
    ScrollTrigger.create({
      trigger: ".slider",
      pin: ".slider__title",
      start: "top top",
      end: "70% top"
    });
    ScrollTrigger.create({
      trigger: ".slider",
      pin: ".slider__img",
      start: "top top",
      end: "70% top"
    });
  },
}
</script>

<style lang="scss" src="./TheSlider.scss"></style>
