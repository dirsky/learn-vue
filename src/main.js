// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
// 此处引用对是一个模块，并且右侧引用用单引号括起来，注意大小写，左侧是定义对一个变量
import Vue from 'vue'
// 下面表示将App.vue引用进来，此处省略了后缀.vue
import App from './App'
// 实现路由功能，实际引用对是./route/index.js
// 猜想会优先读取文件夹下对index文件，未证实
import router from './router'
// 实现可以通过下列方式读取json数据
// this.$http.get('/api/seller').then((response) =>
import resource from 'vue-resource'
// vuex实现了对状态对管理，使用细节在store中
import store from './store'
// 已经将所有对styl引用整合到index.styl中，此处统一引用
import './common/stylus/index.styl'

Vue.use(resource)
Vue.config.productionTip = false

// 可以看出此处对vue是一个单页面应用
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  // 所有的组件对象都多了一个属性$store
  store,
  // components: { App },
  // template: '<App/>'
  // 上面两行可以用下列一行代替
  render: h => h(App)
})
