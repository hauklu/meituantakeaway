import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    // 购物车金额
    count: 0,
    // 购物车菜单
    foodMenu: [],
    // 当前城市
    nowcity: '杭州'
  },
  actions: {
    changeCount (ctx, count) {
      ctx.commit('changeCountMutations', count)
    },
    changeFoodMenu (ctx, foodMenu) {
      ctx.commit('changeFoodMenuMutations', foodMenu)
    }
  },
  mutations: {
    changeCountMutations (state, count) {
      state.count = count
    },
    changeFoodMenuMutations (state, foodMenu) {
      // state.foodeMenu = foodMenu
      // vue里面数组要JSON.stringify()转换成字符串传递
      state.foodMenu = JSON.stringify(foodMenu)
    },
    changeNowCity (state, nowcity) {
      state.nowcity = nowcity
    }
  }
})
