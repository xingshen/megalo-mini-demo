
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    nextVuexData: '显示vuex管理的数据'
  },
  mutations: {
    saveVuexData (state, payload) {
      state.nextVuexData = payload.value
    }
  }
})
export default store
