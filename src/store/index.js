import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        isLoading: false,
    },
    mutations: {
        setIsLoading(state, payload) {
            state.isLoading = payload
        }
    },
    getters: {
        isLoading(state) {
            return state.isLoading
        }
    }
})
