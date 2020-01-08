import '@babel/polyfill'
import './plugins/vuetify'
import 'firebase/firestore'

import App from './App.vue'
import Vue from 'vue'
import VueFire from 'vuefire'
import firebase from 'firebase/app'
import router from './router'
Vue.use(VueFire)
firebase.initializeApp({
  projectId: 'lkmusic-573ce',
  databaseURL: 'https://lkmusic-573ce.firebaseio.com'
})
export const db = firebase.firestore()

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
