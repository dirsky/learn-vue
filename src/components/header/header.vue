<template>
  <div class="header">
    <div class="content-wrapper">
      <div class="avatar">
        <img width="64" height="64" :src="seller.avatar">
      </div>
      <div class="content">
        <div class="title">
          <span class="brand"></span>
          <span class="name">{{seller.name}}</span>
        </div>
        <div class="description">
          {{seller.description}}/
          {{seller.deliveryTime}}分钟送达
        </div>
        <div v-if="seller.supports" class="support">
          <span class="icon" :class="classMap[seller.supports[0].type]"></span>
          <span class="text">{{seller.supports[0].description}}</span>
        </div>
      </div>
      <div v-if="seller.supports" class="support-count" @click="detailShow">
        <span class="count">{{seller.supports.length}}个</span>
        <i class="icon-keyboard_arrow_right"></i>
      </div>
    </div>
    <div class="bulletin-wrapper" @click="detailShow">
      <span class="bulletin-title"></span><span class="bulletin-text">{{seller.bulletin}}</span>
      <i class="icon-keyboard_arrow_right"></i>
    </div>
    <div class="backgroud">
      <img :src="seller.avatar" width="100%" height="100%">
    </div>
    <div v-show="detailFlag" class="detail"></div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    name: 'v-header',
    data() {
      return {
        detailFlag: false
      }
    },
    methods: {
      detailShow() {
        this.detailFlag = true
      }
    },
    // 通过<v-header :seller="seller"></v-header>中的前面:seller来获取母页面的数据
    props: {
      seller: {}
    },
    created() {
      this.classMap = ['decrease', 'discount', 'guarantee', 'invoice', 'special']
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" type="text/stylus">
  @import "../../common/stylus/mixin.styl"

  .header
    position relative
    color #fff
    overflow hidden
    background rgba(7, 17, 27, 0.5)
    .content-wrapper
      position relative
      padding 24px 12px 18px 24px
      font-size 0
      .avatar
        display inline-block
        vertical-align top
        img
          border-radius 2px
      .content
        display inline-block
        margin-left 16px
        .title
          margin 2px 0 8px 0
          .brand
            display inline-block
            vertical-align top
            width 30px
            height 18px
            bg-image('images/brand')
            background-size 30px 18px
            background-repeat no-repeat
          .name
            margin-left 6px
            font-size 16px
            line-height 18px
            font-weight bold

        .description
          margin-bottom 10px
          line-height 12px
          font-size 12px
        .support
          .icon
            display inline-block
            vertical-align top
            width 12px
            height 12px
            margin-right 4px
            background-size 12px 12px
            background-repeat no-repeat
            &.decrease
              bg-image('images/decrease_1')
            &.discount
              bg-image('images/discount_1')
            &.guarantee
              bg-image('images/guarantee_1')
            &.invoice
              bg-image('images/invoice_1')
            &.special
              bg-image('images/special_1')

          .text
            line-height 12px
            font-size 12px
      .support-count
        position absolute
        right 12px
        bottom 14px
        padding 0 8px
        height 24px
        line-height 24px
        border-radius 14px
        background rgba(0, 0, 0, 0.2)
        text-align center
        .count
          vertical-align top
          font-size 10px
        .icon-keyboard_arrow_right
          margin-left 2px
          font-size 10px
          line-height 24px

    .bulletin-wrapper
      position relative
      line-height 28px
      padding 0 22px 0 12px
      white-space nowrap
      overflow hidden
      text-overflow ellipsis
      background rgba(7, 17, 27.0 .2)
      .bulletin-title
        display inline-block
        width 22px
        height 12px
        bg-image('images/bulletin')
        background-size 22px 12px
        background-repeat no-repeat
      .bulletin-text
        font-size 10px
        margin 0 4px
      .icon-keyboard_arrow_right
        position absolute
        font-size 10px
        right 10px
        top 8px
    .backgroud
      position absolute
      top 0
      left 0
      width 100%
      height 100%
      z-index -1
      filter blur(10px)
    .detail
      position fixed
      top 0
      left 0
      z-index 100
      width 100%
      height 100%
      overflow auto
      background rgba(7, 17, 27, 0.8)
</style>
