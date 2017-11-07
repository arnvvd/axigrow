'use strict';
/* Import Vue*/
import Vue from 'vue';
import Vuex from 'vuex';

/* Use Vuex*/
Vue.use(Vuex);

/*Import stores*/
import exampleStore from './example/store';

/*Debug if Env = production*/
const debug = process.env.NODE_ENV !== 'production';


export default new Vuex.Store({
    /*Modules we need*/
    modules: {
        exampleStore
    },
    strict: debug,
    middlewares: debug
});