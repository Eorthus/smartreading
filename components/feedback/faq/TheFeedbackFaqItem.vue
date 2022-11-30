<template>
  <div class="feedback-faq__question">
    <AccordionItem>
      <template #summary>
        <span class="feedback-faq_p" :id="feedback_summary">
          {{ itemData.title }}
        </span>
      </template>

      <span class="feedback-faq__about" :id="feedback_details">
        {{ itemData.description }}
      </span>
    </AccordionItem>
  </div>
</template>

<script>
import {AccordionItem} from "vue3-rich-accordion";

export default {
  name: "TheFeedbackFaqItem",
  components: {AccordionItem},
  props: {
    itemData: {
      type: Object,
      required: true,
    }
  },
  computed: {
    feedback_summary() {
      return 'feedback-spoiler__head' + this.itemData.index
    },
    feedback_details() {
      return 'feedback-spoiler__body' + this.itemData.index
    },

  }
}
</script>
