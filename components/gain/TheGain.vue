<template>
  <div class="gain_container">
    <span class="gain__h">{{ title }}</span>
    <div class="gain__preferences">
      <TheGainPreferences :item-data="preferences"/>
    </div>
    <div class="gain__slider js_gain-slider">
      <TheGainSlider :item-data="slider"/>
    </div>
  </div>
</template>

<script>
import TheGainPreferences from "./preferences/TheGainPreferences";
import TheGainSlider from "./slider/TheGainSlider";

export default {
  name: "TheGain",
  components: {TheGainSlider, TheGainPreferences},
  props: {
    itemData: {
      type: Object,
      required: true,
    }
  },
  computed: {
    title() {
      return this.itemData.title;
    },
    preferences() {
      return this.itemData.preferences;
    },
    slider() {
      return {slider: this.itemData.slider, mobslider: this.itemData.mobslider};
    },
  },
}
</script>

<style lang="scss" src="./TheGain.scss"></style>
