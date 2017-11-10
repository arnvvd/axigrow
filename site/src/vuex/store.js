'use strict';

/* Import Vue*/
import Vue from 'vue';
import Vuex from 'vuex';

/* Import Database */
import { database } from '../core/database';

/* Use Vuex & Database */
Vue.use(Vuex);


/*Import stores*/
import exampleStore from './example/store';
import databaseStore from './database/store';

/*Debug if Env = production*/
const debug = process.env.NODE_ENV !== 'production';


export default new Vuex.Store({
    /*Modules we need*/
    modules: {
        exampleStore,
        databaseStore
    },
    strict: debug,
    middlewares: debug
});
