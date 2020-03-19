// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store/index'
import axios from 'axios'

Vue.config.productionTip = false
window.$ = require('jquery')
window.JQuery = require('jquery')

const api = axios.create({})

// Show loading icon when an Api call is made
api.interceptors.request.use(
    () => {
        store.commit('setIsLoading', true) // enable isLoading state
    }, function (error) {
      store.commit('setIsLoading', false) // disable isLoading state
      return Promise.reject(error)
    })

// After receiving api response hide loading icon
api.interceptors.response.use(function (response) {
  store.commit('setIsLoading', false) // disable isLoading state
  return response
}, function (error) {
  store.commit('setIsLoading', false)
  return Promise.reject(error)
})

/* eslint-disable no-new */
new Vue({
  render: h => h(App),
  router,
  store,
  axios
}).$mount('#app')
