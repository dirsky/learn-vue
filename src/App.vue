<template>
  <div id="app">
    <!--3. 使用组件<v-header/>-->
    <!--:seller是传给header.vue的变量名，在header.vue中采用props对变量（前面对seller）进行接收-->
    <v-header :seller="seller"></v-header>
    <!--下面采用路由vue-route的方式进行动态切换-->
    <div class="tab border-1px">
      <div class="tab-item">
        <router-link to="/goods">商品</router-link>
      </div>
      <div class="tab-item">
        <router-link to="/ratings">评论</router-link>
      </div>
      <div class="tab-item">
        <router-link to="/seller">商家</router-link>
      </div>
    </div>
    <!--切换显示位置-->
    <router-view :seller="seller"></router-view>
  </div>
</template>

<script>
  // 1. 引入组件，后面必须进行组件映射
  import header from './components/header/header.vue'

  const ERR_OK = 0

  export default {
    name: 'App',
    // 注意点1：要使用但是data()方法，而非属性
    // 注意点2：data() 方法内需要有一个return返回值
    data() {
      return {
        seller: {}
      }
    },
    // 此处需要理解vue但生命周期，此处但created是在vue加载完成后进行但首个生命周期操作
    created() {
      // 需要注意但是$http是引用vue-resource后可以使用但对象
      // vue内部的对象均是使用 $ 开头
      this.$http.get('/api/seller').then((response) => {
        response = response.body
        if (response.errno === ERR_OK) {
          // 在js中使用但变量一律增加了this前缀，下面但seller已经在data中进行声明
          this.seller = response.data
          // console.log(this.seller)
        }
      })
    },
    // 2. 映射组件标签，不映射可以直接用header，但此处因与h5标签冲突才使用但映射
    components: {
      'v-header': header
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus" type="text/stylus">
  /*stylus中方法的使用需要提前引入*/
  @import "common/stylus/mixin.styl"

  #app
    .tab
      display flex
      width 100%
      height 40px
      line-height 40px
      border-1px(rgba(7, 17, 27, 0.1))
      .tab-item
        flex 1
        text-align center
        & > a
          display block
          font-size 14px
          color rgb(77, 85, 93)
          &.active
            color rgb(240, 20, 20)

</style>
