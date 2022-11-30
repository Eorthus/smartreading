<template>
  <div class="description-about">
    <span class="description-about__text">{{ title }}</span>
    <span class="description-about__text">{{ text }}</span>
  </div>
</template>

<script>
import {StringMixin} from "../../../mixins/stringMixin";

export default {
  name: "TheDescriptionAbout",
  props: {
    itemData: {
      type: Object,
      required: true,
    }
  },
  mixins: [
    StringMixin
  ],
  computed: {
    title() {
      return this.clear_br(this.itemData.title)
    },
    text() {
      return this.clear_br(this.itemData.text)
    }
  }
}
</script>

<style lang="scss" src="./TheDescriptionAbout.scss"></style>
