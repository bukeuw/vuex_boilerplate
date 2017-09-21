import router from './router';
import store from './vuex';
import localforage from 'localforage';

localforage.config({
    driver: localforage.LOCALSTORAGE,
    storeName: 'bukeuw'
});

store.dispatch('setToken').then(() => {
    store.dispatch('fetchUser').catch(() => {
        store.dispatch('clearAuth');
        router.replace({ name: 'login' });
    });
}).catch(() => {
    store.dispatch('clearAuth');
});

/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

const app = new Vue({
    el: '#app',
    store: store,
    router: router
});
