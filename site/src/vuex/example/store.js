/* Import Mutation Types */
import * as types from '../mutation-types';

/* Import Getters */
import gettersList from './getters';

/* Import Actions */
import actionList from './actions';



/* State */
const state = {
    count: 0
};



/* Mutations */
// Functions to mute our state
const mutations = {
    // we can use the ES2015 computed property name feature
    // to use a constant as the function name
    [ types.COUNTER_INCREMENT ] (state) {
        state.count++;
    }
};

/* Getters */
const getters = gettersList;

/* Actions */
// Functions to launch mutations
const actions = actionList;


/* Export */
export default {
    state,
    mutations,
    getters,
    actions
};