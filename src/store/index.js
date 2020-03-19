import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        isLoading: false,
        theme: false
    },
    mutations: {
        setIsLoading(state, payload) {
            state.isLoading = payload
        },
        toggleTheme(state) {
            state.theme = !state.theme
        }
    },
    getters: {
        isLoading(state) {
            return state.isLoading
        },
        getThemeState(state) {
            return state.theme
        }
    }
})
