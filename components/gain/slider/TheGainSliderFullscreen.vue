<template>
    <button class="gain-slider__open" @click="changeScreen()">
        <IconOpen v-if="!isFullscreen"/>
        <IconClose v-if="isFullscreen"/>
    </button>
</template>

<script>
    import IconOpen from "../../icon/IconOpen";
    import IconClose from "../../icon/IconClose";

    export default {
        name: "TheGainSliderFullscreen",
        components: {
            IconClose,
            IconOpen,
        },
        data() {
            return {
                isFullscreen: false,
            }
        },
        methods: {
            changeScreen() {
                this.isFullscreen = !this.isFullscreen
                this.$emit('isFullscreen', this.isFullscreen)
            }
        }
    }
</script>