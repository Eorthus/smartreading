<template>
  <div class="description-cart" @mouseover="toggleCartHover(true)" @mouseleave="toggleCartHover(false)">
    <img class="description-cart__img" :src="itemData.empty">
    <span class="description-cart__counter" id="cart_counter"></span>
  </div>
</template>

<script>
import LazyImage from "../../image/LazyImage";

export default {
  name: "TheDescriptionCart",
  components: {LazyImage},
  props: {
    itemData: {
      type: Object,
      required: true,
    }
  },
  methods: {
    toggleCartHover(flag) {
      let item = document.querySelector('.description-cart__img')
      if (flag) {
        item.setAttribute('src', this.itemData.full)
      } else {
        item.setAttribute('src', this.itemData.empty)
      }
    },
  },
}
</script>
<style src="./TheDescriptionCart.scss" lang="scss"></style>
