<template>
  <div class="cartcontrol">
    <div class="cart-decrease icon-remove_circle_outline"
      v-show="food.count>0" @click="decreaseCart"></div>
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
      addCart(event) {
        // console.log('click')
        if (!event.constructor) {
          return
        }
        if (!this.food.count) {
          // this.food.count = 1;
          this.$set(this.food, 'count', 1)
        } else {
          this.food.count++
        }
        // console.log(this.food.count)
      },
      decreaseCart() {
        if (!event.constructor) {
          return
        }
        if (this.food.count) {
          this.food.count--
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
    vertical-align top
    padding-top 6px
    line-height 24px
    width 12px
    text-align center
    font-size 10px
    color rgb(147, 153,159)

</style>
