<template>
  <div class="feedback__container">
    <span class="feedback__title">
      {{ itemData.title }}
    </span>
    <div class="feedback__messages">
      <TheFeedbackMessage v-for="item in itemData.messages" :key="item.index" :item-data="item"/>
    </div>
    <div class="feedback_br">
      <div class="feedback__faq">
        <TheFeedbackFaq :item-data="faq"/>
      </div>
      <div class="feedback__contact">
        <TheFeedbackContact :item-data="contact"/>
      </div>
    </div>
  </div>
</template>

<script>
import TheFeedbackMessage from "./message/TheFeedbackMessage";
import TheFeedbackFaq from "./faq/TheFeedbackFaq";
import TheFeedbackFaqItem from "./faq/TheFeedbackFaqItem";
import TheFeedbackContact from "./contact/TheFeedbackContact";

export default {
  name: "TheFeedback",
  components: {TheFeedbackContact, TheFeedbackFaqItem, TheFeedbackFaq, TheFeedbackMessage},
  props: {
    itemData: {
      type: Object,
      required: true,
    }
  },
  mounted() {
    gsap.from('.feedback-message', {
      scrollTrigger: {
        trigger: '.feedback',
        start: "10% bottom",
        end: "40% bottom",
        scrub: true,
      },
      scale: 0.7,
      lazy: true,
    })
  },
  computed: {
    contact() {
      let contactData = {
        img_face: this.itemData.img_face,
        img_hand: this.itemData.img_hand,
        term: this.itemData.term,
        term_link: this.itemData.term_link,
        mail: this.itemData.mail,
      }
      return contactData
    },
    faq() {
      let faqData = {
        title: this.itemData.faq_title,
        questions: this.itemData.questions,
      }
      return faqData
    }
  }
}
</script>

<style lang="scss" src="./TheFeedback.scss"></style>
