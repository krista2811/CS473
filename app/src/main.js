import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import store from './store'
import router from './router/router'

import { firestorePlugin } from 'vuefire'
import firebase from 'firebase/app';
import { config } from "./firebase";
import 'firebase/firestore';
import 'firebase/auth'

Vue.use(firestorePlugin);
Vue.prototype.$firebase = firebase;
Vue.config.productionTip = false

firebase.initializeApp(config)

export const db = firebase.firestore()

/* eslint-disable no-console */

store.dispatch('dbRead');
store.dispatch('getSearchData', [1, -1, -1, -1, "HCI"])
    /* eslint-enable no-console */
new Vue({
    vuetify,
    router,
    store,
    render: h => h(App)
}).$mount('#app')