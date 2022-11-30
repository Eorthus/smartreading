<template>
    <div class="gain-preferences_container" v-for="item in itemData_br">
        <TheGainPreferencesItem :itemData="item"/>
    </div>
</template>

<script>
    import TheGainPreferencesItem from "./TheGainPreferencesItem";
    import {StringMixin} from "../../../mixins/stringMixin";

    export default {
        name: "TheGainPreferences",
        components: {TheGainPreferencesItem},
        props: {
            itemData: {
                type: Array,
                required: true,
            }
        },
        mixins: [
            StringMixin
        ],
        mounted() {
            gsap.from('.gain-preferences_container', {
                scrollTrigger: {
                    trigger: '.js_gain-slider',
                    start: "0% bottom",
                    end: "50% bottom",
                    scrub: true,
                },
                opacity: 0,
                lazy: true,
            })
        },
        computed: {
            itemData_br() {
                let itemData = []
                this.itemData.forEach((el) => {
                    el.text = this.clear_br(el.text)
                    itemData.push(el)
                })
                return itemData
            },
        }
    }
</script>

<style lang="scss" src="./TheGainPreferences.scss">

</style>