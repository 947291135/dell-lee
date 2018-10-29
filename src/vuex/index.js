import Vue from 'vue'
import Vuex from 'vuex'
import state from './state'
import mutations from './mutations'

Vue.use(Vuex)

export default new Vuex.Store({
  state: state,
  // 可以通过actions访问mutations，也可以直接this.$store.commit来访问mutations里面的方法
  // actions: {
  //   handleClick: function (ctx, city) {
  //     ctx.commit('handleClick', city)
  //   }
  // },
  mutations: mutations
})
