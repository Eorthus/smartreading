<template>
  <div class="feedback-contact">
    <div class="feedback-contact__face">
      <LazyImage :src-data="itemData.img_face"/>
    </div>
    <div class="feedback-contact__hand">
      <LazyImage :src-data="itemData.img_hand"/>
    </div>
    <div class="feedback-contact__links">
      <a class="feedback-contact__term" :href="itemData.term_link" target="_blank">
        {{ itemData.term }}
      </a>
      <a class="feedback-contact__mail" :href="mailto" target="_blank">
        {{ itemData.mail }}
      </a>
    </div>
  </div>
</template>

<script>
import LazyImage from "../../image/LazyImage";

export default {
  name: "TheFeedbackContact",
  components: {LazyImage},
  props: {
    itemData: {
      type: Object,
      required: true,
    }
  },
  computed: {
    mailto() {
      return 'mailto:' + this.itemData.mail
    }
  }

}
</script>

<style lang="scss" src="./TheFeedbackContact.scss"></style>
