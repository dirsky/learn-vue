<template>
  <div class="cartcontrol">
    <div class="cart-decrease" v-show="food.count>0"></div>
    <div class="cart-count" v-show="food.count>0">{{food.count}}</div>
    <div class="cart-increase icon-add_circle" @click="addCart"></div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    props: {
      food: {
        type: Object
      }
    },
    methods: {
      addCart() {
        if (!this.food.count) {
          this.food.count = 1
        } else {
          this.food.count++
        }
      }
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus" type="text/stylus">
.cartcontrol
  font-size 0
  .cart-decrease, .cart-increase
    display inline-block
    padding 6px
    line-height 24px
    font-size 24px
    color rgb(0, 160, 220)
  .cart-count
    display inline-block

</style>
