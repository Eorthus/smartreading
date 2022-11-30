<template>
  <div class="mobslider__container">
    <div class="mobslider-animation__title">
      <span class="mobslider__title">
        {{ itemData.title }}
      </span>
    </div>

    <div class="mobslider__content">
      <div class="mobslider__text">
        <TheMobSliderText v-for="item in itemData.text" :itemData="item" :key="item.index"/>
      </div>
      <div class="mobslider-animation__img">
        <div class="mobslider__img">
          <LazyImage :src-data="itemData.mob_img" :alt-data="itemData.title"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import LazyImage from "../image/LazyImage";
import TheMobSliderText from "./text/TheMobSliderText";

export default {
  name: "TheMobSlider",
  components: {TheMobSliderText, LazyImage},
  props: {
    itemData: {
      type: Object,
      required: true,
    },
  },
  mounted() {
  },
}
</script>

<style lang="scss" src="./TheMobSlider.scss"></style>
