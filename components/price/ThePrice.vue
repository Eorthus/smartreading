<template>
  <div class="price_container">
    <button class="price__buy" @click="buy_click">
      <span class="price__buy_center">{{ button }}</span>
    </button>
    <div class="price__time">
      <span class="price__percent">{{ percent }}%</span>
      <span class="price__timer"></span>
      <span class="price__old">${{ old_price }}</span>
    </div>
    <div class="price__number">
      <span class="price__number_center">${{ actual_price }}</span>
    </div>
    <div class="price__background"></div>
    <teleport to="#cart_counter" v-if="itemData.count>0">
      {{ itemData.count }}
    </teleport>
  </div>
</template>

<script>
export default {
  name: "ThePrice",
  props: {
    itemData: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      count: this.itemData.count,
      actual_price: this.itemData.new_price,
    }
  },
  methods: {
    //timer
    startTimer(duration, display) {
      let timer = duration, minutes, seconds;
      setInterval(function () {
        minutes = parseInt(timer / 60, 10);
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.textContent = minutes + ":" + seconds;

        if (--timer < 0) {
          timer = duration;
        }
      }, 1000);
    },

    buy_click() {
      let count = this.itemData.count
      count++
      this.$emit('price_counter', count)

      gsap.to('.bin', {
        xPercent: -100,
        lazy: true,
      })
      gsap.to('.bin__cross', {
        opacity: 1,
        lazy: true,
        duration: 0.2
      })
    },
  },
  computed: {
    old_price() {
      return this.itemData.old_price
    },
    new_price() {
      return this.itemData.new_price
    },
    minutes() {
      return this.itemData.minutes
    },
    percent() {
      return this.itemData.percent
    },
    button() {
      return this.itemData.button
    },
  },
  mounted() {
    //params for timer
    let time = this.minutes * 60,
        display = document.querySelector('.price__timer');
    this.startTimer(time, display);

    //hide after time
    let end = this.minutes * 60 * 1000 + 2000;
    setTimeout(() => {
      this.actual_price = this.old_price;
      this.$emit('price_actual', this.actual_price)
      document.querySelector('.price__time').style.display = 'none';
    }, end)


    gsap.to('.price__background', {
      scrollTrigger: {
        trigger: '.description',
        start: '100% bottom',
        end: '+=300',
        scrub: true,
      },
      opacity: 0,
      lazy: true,
    })
  }
}
</script>

<style lang="scss" src="./ThePrice.scss"></style>
