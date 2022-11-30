<template>
  <div class="description__book">
    <TheDescriptionBook :item-data="book"/>
  </div>
  <div class="description__about">
    <TheDescriptionAbout :item-data="about"/>
    <TheDescriptionRating :item-data="rating"/>
  </div>
  <div class="description__logo">
    <TheDescriptionLogo :item-data="logo"/>
  </div>
  <div class="description__cart">
    <TheDescriptionCart :item-data="cart"/>
  </div>
</template>

<script>
import TheDescriptionBook from "./book/TheDescriptionBook";
import TheDescriptionAbout from "./about/TheDescriptionAbout";
import TheDescriptionLogo from "./logo/TheDescriptionLogo";
import TheDescriptionCart from "./cart/TheDescriptionCart";
import TheDescriptionRating from "./rating/TheDescriptionRating";

export default {
  name: "TheDescription",
  components: {
    TheDescriptionRating,
    TheDescriptionCart, TheDescriptionLogo, TheDescriptionAbout, TheDescriptionBook
  },
  props: {
    itemData: {
      type: Object,
      required: true,
    }
  },
  computed: {
    book() {
      const itemData = {img: this.itemData.img, flag: this.itemData.flag, name: this.itemData.title};
      return itemData
    },
    about() {
      const itemData = {title: this.itemData.title, text: this.itemData.text};
      return itemData
    },
    logo() {
      const itemData = {logo: this.itemData.logo, name: this.itemData.title};
      return itemData
    },
    cart() {
      const itemData = {empty: this.itemData.cart, full: this.itemData.cart_hover};
      return itemData
    },
    rating() {
      const itemData = {
        rating: this.itemData.rating, percent: this.itemData.percent,
        empty: this.itemData.rating_empty, full: this.itemData.rating_full
      };
      return itemData
    }
  },
}
</script>

<style lang="scss" src="./TheDescriptions.scss"></style>
