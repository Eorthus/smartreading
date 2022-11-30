<template>
    <div class="gain-slider" :class="{fullscreen:isFullscreen}">
        <div class="gain-slider__carousel">
            <TheGainSliderCarousel :item-data="slides"/>
        </div>
        <div class="gain-slider__fullscreen">
            <TheGainSliderFullscreen @isFullscreen="ScreenChange"/>
        </div>
    </div>
</template>

<script>
    import LazyImage from "../../image/LazyImage";
    import TheGainSliderFullscreen from "./TheGainSliderFullscreen";
    import {DeviceMixin} from "../../../mixins/deviceMixin";
    import TheGainSliderCarousel from "./TheGainSliderCarousel";

    export default {
        name: "TheGainSlider",
        components: {
            TheGainSliderCarousel,
            TheGainSliderFullscreen,
            LazyImage,
        },
        props: {
            itemData: {
                type: Object,
                required: true,
            },
        },
        mixins: [
            DeviceMixin
        ],
        methods: {
            ScreenChange(el) {
                this.isFullscreen = el
            },
        },
        mounted() {
            this.initDevice();
            const me = this;
            window.addEventListener( 'resize' ,  function () {
                me.initDevice()
            }, true);
        },

        computed:{
            slides(){
                if (this.isMobile){
                    return this.itemData.mobslider
                }
                return this.itemData.slider
            }
        },
        data() {
            return {
                isFullscreen: false,
            }
        },

    }
</script>

<style lang="scss" src="./TheGainSlider.scss">

</style>
