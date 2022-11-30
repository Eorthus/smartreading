<template>
  <div class="description-logo">
    <LazyImage :src-data="itemData.logo" :alt-data="itemData.name"/>
  </div>
</template>

<script>
import LazyImage from "../../image/LazyImage";

export default {
  name: "TheDescriptionLogo",
  components: {LazyImage},
  props: {
    itemData: {
      type: Object,
      required: true,
    }
  }
}
</script>
