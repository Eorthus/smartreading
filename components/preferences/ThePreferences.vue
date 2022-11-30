<template>
  <div class="preference_container">
    <div class="animate-preference">
      <div class="preference-item animate-preference_container">
        <ThePreferencesItem :preference="preferences[0]"/>
      </div>
    </div>

    <div class="preference-item" v-for="n in 3">
      <ThePreferencesItem :preference="preferences[n]"/>
    </div>
  </div>

</template>
<script>
import ThePreferencesItem from "./ThePreferencesItem";
import {DeviceMixin} from "../../mixins/deviceMixin";

export default {
  name: "ThePreferences",
  components: {ThePreferencesItem},
  props: {
    itemData: {
      type: Array,
      required: true,
    }
  },
  mixins: [
    DeviceMixin
  ],
  mounted() {
    this.initDevice();
    const me = this;
    window.addEventListener('resize', function () {
      me.initDevice()
    }, true);

    if (this.isMobile) {
      gsap.from('.animate-preference_container', {
        scrollTrigger: {
          trigger: '.animate-preference',
          start: "60% bottom",
          end: "+=400",
          scrub: true,
        },
        yPercent: -70,
        rotate: 10,
        lazy: true,
      })
    } else {
      gsap.from('.animate-preference_container', {
        scrollTrigger: {
          trigger: '.animate-preference',
          start: "40% bottom",
          end: "140% bottom",
          scrub: true,
        },
        yPercent: -170,
        rotate: 10,
        lazy: true,
      })
    }
  },
  computed: {
    preferences() {
      return this.itemData
    }
  },
}
</script>

<style lang="scss" src="./ThePreferences.scss"></style>
