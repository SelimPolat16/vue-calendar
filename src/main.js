import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import VueTextareaAutosize from 'vue-textarea-autosize';
import firebase from 'firebase/app';
import 'firebase/firestore';

Vue.use(VueTextareaAutosize)

Vue.config.productionTip = false

firebase.initializeApp({
  apiKey: "AIzaSyDtHy0VlPEOkOiM_iCrtUCPXucP3zIY2Ws",
  authDomain: "vue-calendar-b22de.firebaseapp.com",
  databaseURL: "https://vue-calendar-b22de.firebaseio.com",
  projectId: "vue-calendar-b22de",
  storageBucket: "vue-calendar-b22de.appspot.com",
  messagingSenderId: "442378494717",
  appId: "1:442378494717:web:0554238ff8ec170dd61494"
});

export const db = firebase.firestore();

new Vue({
  vuetify,
  render: h => h(App)
}).$mount('#app')