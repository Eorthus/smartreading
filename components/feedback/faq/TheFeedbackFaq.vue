<template>
  <div class="feedback-faq">
    <span class="feedback-faq__title">
      {{ itemData.title }}
    </span>
    <div class="feedback-faq__content">
      <AccordionList>
        <TheFeedbackFaqItem v-for="item in itemData.questions" :key="item" :item-data="item"/>
      </AccordionList>
    </div>
  </div>
</template>

<script>
import TheFeedbackFaqItem from "./TheFeedbackFaqItem";
import {AccordionList} from "vue3-rich-accordion";

export default {
  name: "TheFeedbackFaq",
  components: {TheFeedbackFaqItem, AccordionList},
  props: {
    itemData: {
      type: Object,
      required: true,
    }
  },
}
</script>

<style lang="scss" src="./TheFeedbackFaq.scss"></style>
