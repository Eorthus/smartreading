<template>
  <div class="slider-text" :class="slider_class.class">
    <span class="slider-text__title">
      {{ itemData.title }}
    </span>
    <span class="slider-text__subtitle" :class="item_class.class">
      {{ itemData.subtitle }}
    </span>
  </div>
</template>

<script>
export default {
  name: "TheMobSliderText",
  props: {
    itemData: {
      type: Object,
      required: true,
    },
  },
  mounted() {
    gsap.to(this.item_class.selector, {
      scrollTrigger: {
        trigger: this.slider_class.selector,
        start: "150% bottom",
        end: "+=300",
        scrub: true,
      },
      opacity: 1,
      lazy: true,
    })
  },
  computed: {
    slider_class() {
      let item = {
        class: 'mobslider-animation' + this.itemData.index,
        selector: '.mobslider-animation' + this.itemData.index
      }
      return item
    },
    item_class() {
      let item = {
        class: 'mobslider-animation__item' + this.itemData.index,
        selector: '.mobslider-animation__item' + this.itemData.index
      }
      return item
    }
  },

}
</script>

<style lang="scss" src="./TheMobSliderText.scss"></style>
