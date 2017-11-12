'use strict';

/* Import Database */
import { database } from '../../core/database';

import * as types from '../mutation-types';

const actionsList = {

    createShape: (store, shape) => {

        // Get Path to update User
        let firebasePath = database.shapes.push().key;
        shape.firebase_path = firebasePath;

        // add shape to firebase
        addShapeToDatabase(firebasePath, shape);

        // Store new shape
        store.commit(types.ADD_NEW_SHAPE, shape);

        // Update user to firebase
        function addShapeToDatabase(firebasePath, shape) {
            database.shapes.child(firebasePath).update(shape, (error) => {
                if (error) {
                    console.log('cannot save shape');
                } else {
                    console.log('shape saved!');
                }
            });
        }
    },

    getAllShape: (store) => {

        console.log('getAllShape');

        let shapesArr = [];

        // Get shapes from database
        database.shapes.once("value", (snapshot) => {

            const shapesCollection = snapshot.val();

            if (shapesCollection) {

                // Get Shape
                snapshot.forEach((shape) => {
                    shapesArr.push(shape.val());
                });

            } else {
                console.log("Can't load shapes");
            }


            // Commit Shapes in Store
            store.commit(types.SET_ALL_SHAPES, shapesArr);
            store.commit(types.SHAPES_ARE_FETCHED);
        });
    }
};

export default actionsList;