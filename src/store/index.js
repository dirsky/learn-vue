import Vue from 'vue'
import Vuex from 'vuex'
import state from './state'
import mutations from './mutations'
import actions from './actions'
import getters from './getters'

Vue.use(Vuex)

// 此套方案并未使用，真实项目可如此配置，特大项目可以按照模块使用
// 真正使用对是根目录下对store.js

export default new Vuex.Store({
  state,
  mutations,
  actions,
  getters
})
