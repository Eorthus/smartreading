<template>
  <div class="description-book">
    <div class="description-book__flag">
      <span class="description-book_span">{{ itemData.flag }}</span>
    </div>
    <div class="description-book__img">
      <LazyImage :src-data="itemData.img" :alt-data="itemData.name"/>
    </div>
  </div>
</template>

<script>
import LazyImage from "../../image/LazyImage";

export default {
  name: "TheDescriptionBook",
  components: {LazyImage},
  props: {
    itemData: {
      type: Object,
      required: true,
    }
  }
}
</script>

<style lang="scss" src="./TheDescriptionBook.scss"></style>
