import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    city: '北京'
  },
  actions: {
    handleClick: function (ctx, city) {
      ctx.commit('handleClick', city)
    }
  },
  mutations: {
    handleClick: function (ctx, city) {
      ctx.city = city
    }
  }
})
