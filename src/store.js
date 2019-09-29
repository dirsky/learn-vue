import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

// 状态对象
const state = {
  count: 0
}
// 包含多个更新state函数的对象
const mutations = {
  // 增加
  INCREMENT(state) {
    state.count++
  },
  // 减少
  DECREMENT(state) {
    state.count--
  }

}
// 事件回调函数对象
const actions = {
  // 增加action
  increment({commit}) {
    // 提交mutation
    commit('INCREMENT')
  },
  decrement({commit}) {
    commit('DECREMENT')
  },
  incrementIfOdd({commit, state}) {
    if (state.count % 2 === 1) {
      commit('INCREMENT')
    }
  },
  incrementAsync({commit}) {
    setTimeout(() => {
      commit('INCREMENT')
    }, 1000)
  }
}
// 包含多个get计算属性
const getters = {
  // 不需要调用，只需要作为属性值使用即可
  evenOrOdd (state) {
    return state.count % 2 === 0 ? '偶数' : '奇数'
  }
}

export default new Vuex.Store({
  state,
  mutations,
  actions,
  getters
})
