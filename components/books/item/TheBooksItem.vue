<template>
  <div class="books-item">
    <LazyImage class="books-item__img" :src-data="itemData.img" :alt-data="itemData.title"/>
    <div class="books-item_container">
      <span class="books-item__tag">{{ itemData.tag }}</span>
      <span class="books-item__title">{{ itemData.title }}</span>
      <span class="books-item__author">{{ itemData.author }}</span>
    </div>
  </div>
</template>

<script>
import LazyImage from "../../image/LazyImage";

export default {
  name: "TheBooksItem",
  components: {LazyImage},
  props: {
    itemData: {
      type: Object,
      required: true,
    }
  }
}
</script>

<style lang="scss" src="./TheBooksItem.scss"></style>
