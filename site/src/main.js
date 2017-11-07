import Vue from 'vue';
import VueRouter from 'vue-router';
import router from './core/router';
import Main from './01_layouts/Main/Main.vue';
import store from './vuex/store';

Vue.use(VueRouter);

const app = new Vue({
    store: store,
    router,
    template: '<main-layout></main-layout>',
    components: {
        'main-layout': Main
    }
}).$mount('#app');