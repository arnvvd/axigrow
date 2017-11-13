'use strict';

const gettersList = {
    shapesAreFetched: state => state.areFetched,
    getShapes: state => state.shapes,
    getLastShape: state => state.shapes[state.shapes.length - 1],
    getShapeById: (state) => (id) => {
        return state.shapes.find(shape => shape.id == id);
    },
};

export default gettersList;
