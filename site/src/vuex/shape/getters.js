'use strict';

const gettersList = {
    shapesAreFetched: state => state.areFetched,
    getShapes: state => state.shapes,
    getLastShape: state => state.shapes[state.shapes.length - 1],
    getShapeById: (state) => (id) => {
        return state.shapes.find(shape => shape.id == id);
    },

    getShapesToDraw: (state) => {

        let shapesToDrawArr = [];

        state.shapes.forEach((shape) => {
            if (shape.toDraw & !shape.isDraw) {
                shapesToDrawArr.push(shape);
            }
        });
        
        return shapesToDrawArr;
    }
};

export default gettersList;
