import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    lastEducation: '',
    otherOption: '',
    graduationDate: ''
  },
  mutations: {
      setLastEducation (state, payload) {
          state.lastEducation = payload
      },
      setOtherOption (state, payload) {
          state.setOtherOption = payload
      },
      setGraduationDate (state, payload) {
          state.graduationDate = payload
      }
  }, 
  actions: {
    handleLastEducation (context, payload) {
        context.commit('setLastEducation',payload)
    },
    handleOtherOption (context, payload) {
        context.commit('setOtherOption', payload)
    },
    handleGraduationDate (context, payload) {
        context.commit('setGraduationDate', payload)
    }
  },
  modules: {
  }
})