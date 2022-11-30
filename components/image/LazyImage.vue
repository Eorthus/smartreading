<script>
export default {
  name: 'LazyImage',
  props: {
    isLazy:{
      type:Boolean,
      default:true,
    },
    srcData: {
      type: String,
      required: true
    },

    altData: {
      type: String,
      default: ''
    }
  },
  computed:{
    lazy(){
      if (this.isLazy) return 'lazy'
      return ''
    }
  }
}
</script>

<template>
  <nuxt-img :loading="lazy" :src="srcData" :alt="altData" />
</template>
