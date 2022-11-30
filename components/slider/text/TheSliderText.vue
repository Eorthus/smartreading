<template>
  <div class="slider-text" :class="slider_class.class">
    <span class="slider-text__title" :class="item_class.class">
      {{ itemData.title }}
    </span>
    <span class="slider-text__subtitle">
      {{ itemData.subtitle }}
    </span>
  </div>
</template>

<script>
export default {
  name: "TheSliderText",
  props: {
    itemData: {
      type: Object,
      required: true,
    },
  },
  mounted() {
    gsap.from(this.item_class.selector, {
      scrollTrigger: {
        trigger: this.slider_class.selector,
        start: "70% bottom",
        end: "100% bottom",
        scrub: true,
      },
      yPercent: -50,
      lazy: true,
    })
  },
  computed: {
    slider_class() {
      let item = {
        class: 'slider-animation' + this.itemData.index,
        selector: '.slider-animation' + this.itemData.index
      }
      return item
    },
    item_class() {
      let item = {
        class: 'slider-animation__item' + this.itemData.index,
        selector: '.slider-animation__item' + this.itemData.index
      }
      return item
    }
  },

}
</script>

<style lang="scss" src="./TheSliderText.scss"></style>
