/* Import Mutation Types */
import * as types from '../mutation-types';

/* Import Getters */
import gettersList from './getters';

/* Import Actions */
import actionList from './actions';


/* State */
const state = {
    status: 0
};


/* Mutations */
// Functions to mute our state
const mutations = {
    // we can use the ES2015 computed property name feature
    // to use a constant as the function name
    [ types.AXIDRAW_STATUS ] (state, status) {
        state.status = status;
    },

    [ types.SET_AXIDRAW_STATUS ] (state, status) {
        state.status = status.status;
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
