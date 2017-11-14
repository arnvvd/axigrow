/* Import Mutation Types */
import * as types from '../mutation-types';

/* Import Getters */
import gettersList from './getters';

/* Import Actions */
import actionList from './actions';


/* State */
const state = {
    areFetched: false,
    shapes: []
};


/* Mutations */
// Functions to mute our state
const mutations = {

    [ types.SHAPES_ARE_FETCHED ] (state) {
        state.areFetched = true;
    },

    [ types.SET_ALL_SHAPES ] (state, shapesArr) {
        state.shapes = shapesArr;
    },

    [ types.ADD_NEW_SHAPE ] (state, shape) {
        state.shapes.push(shape);
    },

    [ types.START_DRAW_SHAPE ] (state, shape) {
        let shapeIndex = state.shapes.findIndex(shapeItem => shapeItem.id === shape.id);
        let newValue = state.shapes[shapeIndex];
        newValue.drawStatus = 1;

        state.shapes.splice(shapeIndex, 1, newValue);
    },

    [ types.UPDATE_SHAPE_STATUS ] (state, shape) {
        let shapeIndex = state.shapes.findIndex(shapeItem => shapeItem.id === shape.id);
        state.shapes.splice(shapeIndex, 1, shape);
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
