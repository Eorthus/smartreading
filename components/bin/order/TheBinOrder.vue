<template>
    <div class="bin-order">
        <div class="bin-order__img">
            <LazyImage :src-data="itemData.img" :alt-data="itemData.title"/>
        </div>
        <span class="bin-order__title">
          {{itemData.title}}
        </span>
        <span class="bin-order__price">
            Price: {{itemData.price}}$ <span class="bin-order__sum"
                                             v-if="itemData.count>1" >* {{itemData.count}} = {{order_sum}}$</span>
    </span>
        <span class="bin-order__count">
            Quantity: {{itemData.count}}
        </span>
        <button class="bin-order__cross" @click="delete_orders">
            <div class="bin-order__line"></div>
            <div class="bin-order__line"></div>
        </button>
        <button class="bin-order__add" @click="bust_orders">
            <div class="bin-order__plus"></div>
            <div class="bin-order__plus"></div>
        </button>
    </div>
</template>

<script>
    import LazyImage from "../../image/LazyImage";

    export default {
        name: "TheBinOrder",
        components: {LazyImage},
        props: {
            itemData: {
                type: Object,
                required: true,
            }
        },
        data() {
            return {
                count: this.itemData.count
            }
        },
        computed: {
            order_sum() {
                return (this.itemData.price * this.itemData.count).toFixed(2)
            }
        },
        methods: {
            delete_orders() {
                this.count = 0
                this.$emit('bin_order_delete', this.count)
            },
            bust_orders() {
                this.count++
                this.$emit('bin_order_add', this.count)
                this.$emit('bin_order_info', this.count, this.itemData.price, this.order_sum)
            }
        }
    }
</script>

<style lang="scss" src="./TheBinOrder.scss"></style>
