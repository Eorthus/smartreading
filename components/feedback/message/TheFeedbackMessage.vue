<template>
  <div class="feedback-message" :class="message_class.class">
    <span class="feedback-message__text">
      {{ itemData.text }}
    </span>
    <span class="feedback-message__author">
      {{ itemData.author }}
    </span>
  </div>
</template>

<script>
export default {
  name: "TheFeedbackMessage",
  props: {
    itemData: {
      type: Object,
      required: true,
    }
  },
  mounted() {
    gsap.from(this.message_class.selector, {
      scrollTrigger: {
        trigger: this.message_class.selector,
        start: "150% bottom",
        end: "+=300",
        scrub: true,
      },
      scale: 0.7,
      lazy: true,
    })
  },
  computed: {
    message_class() {
      let item = {
        class: 'message-animation' + this.itemData.index,
        selector: '.message-animation' + this.itemData.index
      }
      return item
    },
  },

}
</script>

<style lang="scss" src="./TheFeedbackMessage.scss"></style>
