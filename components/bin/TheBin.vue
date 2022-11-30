<template>
    <div class="bin__container">
        <span class="bin__empty" v-if="itemData.order.count === 0">
            {{itemData.empty_title}}
        </span>
        <div class="bin__full" v-if="itemData.order.count > 0">
            <span class="bin__title">
                {{itemData.full_title}}
            </span>
            <div class="bin__order">
                <TheBinOrder :item-data="itemData.order"
                             @bin_order_delete="bin_delete"
                             @bin_order_add="bin_add"
                             @bin_order_info="bin_info"
                />
            </div>
            <a class="bin__btn" target="_blank" :href="itemData.href">
                <span class="bin__pay">
                  {{itemData.btn}}
                </span>
            </a>
        </div>

        <button class="bin__cross" @click="close_modal">
            <div class="bin__line"></div>
            <div class="bin__line"></div>
        </button>

    </div>
</template>

<script>
    import LazyImage from "../image/LazyImage";
    import TheBinOrder from "./order/TheBinOrder";

    export default {
        name: "TheBin",
        components: {TheBinOrder, LazyImage},
        props: {
            itemData: {
                type: Object,
                required: true,
            }
        },
        mounted() {
            document.querySelector('.description-cart').addEventListener('click', () => {
                gsap.to('.bin', {
                    xPercent: -100,
                    lazy: true,
                })
                gsap.to('.bin__cross', {
                    opacity: 1,
                    lazy: true,
                    duration: 0.2
                })
            })
        },
        methods: {
            close_modal() {
                gsap.to('.bin', {
                    xPercent: 50,
                    lazy: true,
                })
                gsap.to('.bin__cross', {
                    opacity: 0,
                    lazy: true,
                    duration: 0.2
                })
            },

            bin_delete(bin_counter) {
                this.$emit('bin_delete', bin_counter)
            },
            bin_add(bin_counter) {
                this.$emit('bin_add', bin_counter)
            },
            bin_info(bin_counter, bin_price, bin_sum) {
                let bin_info = {count: bin_counter, price: bin_price, sum: bin_sum}
                this.$emit('bin_info', bin_info)
            }
        }
    }
</script>

<style lang="scss" src="./TheBin.scss">

</style>
