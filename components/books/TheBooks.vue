<template>
  <div class="books__container">
    <span class="books__title">{{ itemData.title }}</span>
    <span class="books__subtitle">{{ itemData.subtitle }}</span>
    <div class="books__list">
      <TheBooksItem v-for="item in itemData.list" :key="item" :item-data="item"/>
    </div>
    <div class="books__modal">
      <TheBooksModal :item-data="modal"/>
    </div>
  </div>
</template>

<script>
import TheBooksItem from "./item/TheBooksItem";
import TheBooksModal from "./modal/TheBooksModal";

export default {
  name: "TheBooks",
  components: {TheBooksModal, TheBooksItem},
  props: {
    itemData: {
      type: Object,
      required: true,
    }
  },
  computed: {
    modal() {
      const computedData = {
        img: this.itemData.modal_img,
        cross: this.itemData.cross,
        title: this.itemData.modal_title,
        mobile: this.itemData.mobile_img
      };
      return computedData
    },
  },
  mounted() {
    gsap.from('.books__subtitle', {
      scrollTrigger: {
        trigger: '.books__list',
        start: "0% bottom",
        end: "50% bottom",
        scrub: true,
      },
      opacity: 0,
      lazy: true,
    })
  },
}
</script>

<style lang="scss" src="./TheBooks.scss">

</style>
