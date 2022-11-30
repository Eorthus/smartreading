<template>
  <div class="description-rating">
    <div class="description-rating__img">
      <div class="description-rating__empty"></div>
      <div class="description-rating__full"></div>
      <div></div>
    </div>
    <span class="description-rating__number">{{ itemData.rating }}</span>
  </div>
</template>

<script>
export default {
  name: "TheDescriptionRating",
  props: {
    itemData: {
      type: Object,
      required: true,
    }
  },
  mounted() {
    document.querySelector('.description-rating__full').style.width = `${this.itemData.percent}%`
    document.querySelector('.description-rating__full').style.backgroundImage = `url(${this.itemData.full})`
    document.querySelector('.description-rating__empty').style.backgroundImage = `url(${this.itemData.empty})`
  }
}
</script>

<style lang="scss" src="./TheDescriptionRating.scss"></style>
