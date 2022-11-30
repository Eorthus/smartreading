<template>
  <div class="books-modal">
    <button class="books-modal__link" @click="isModal=!isModal">
      {{ itemData.title }}
    </button>
    <teleport to="body">
      <div class="books-modal__container" v-if="isModal">
        <div class="books-modal_position">
          <div class="books-modal__img" v-if="!isMobile">
            <LazyImage :src-data="itemData.img"/>
          </div>
          <div class="books-modal__img" v-if="isMobile">
            <LazyImage :src-data="itemData.mobile"/>
          </div>
          <button class="books-modal__cross" @click="isModal=!isModal">
            <LazyImage :src-data="itemData.cross"/>
          </button>
        </div>

        <div class="books-modal__overflow" @click="isModal=!isModal"></div>
      </div>
    </teleport>
  </div>
</template>

<script>
import LazyImage from "../../image/LazyImage";
import {DeviceMixin} from "../../../mixins/deviceMixin";

export default {
  name: "TheBooksModal",
  components: {LazyImage},
  props: {
    itemData: {
      type: Object,
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
  },
  data() {
    return {
      isModal: false,
    }
  }
}
</script>

<style lang="scss" src="./TheBooksModal.scss"></style>
