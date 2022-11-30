<template>
  <div class="preference-item_container">
    <img class="preference-item__img" :src="preference.img">
    <span class="preference-item__text">
      {{ preference.text }}
    </span>
  </div>

</template>

<script>
export default {
  name: "ThePreferencesItem",
  props: {
    preference: Object,
  }
}
</script>
