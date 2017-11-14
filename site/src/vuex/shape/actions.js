'use strict';

import shortid from 'shortid';

/* Import Database */
import { database } from '../../core/database';

import * as types from '../mutation-types';

const actionsList = {

    createShape: (store, shape) => {

        // Get Path to update User
        let firebasePath = database.shapes.push().key;
        shape.firebase_path = firebasePath;
        shape.id = shortid.generate();

        // add shape to firebase
        addShapeToDatabase(firebasePath, shape);

        // Store new shape
        //store.commit(types.ADD_NEW_SHAPE, shape);

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

            // Listen Shapes
            store.dispatch('listenShapes');
        });
    },

    drawShape: (store, shape) => {
        // Update user to firebase
        database.shapes.child(shape.firebase_path).update({ drawStatus: 1 }, (error) => {
            if (error) {
                console.log('Cannot draw shape');
            } else {
                console.log('Start Draw shape!');
                store.commit(types.START_DRAW_SHAPE, shape);
            }
        });
    },

    listenShapes: (store) => {
        console.log('listen shapes');

        let isListeningChildAdded = false;

        database.shapes.limitToLast(1).on("child_added", (snapshot) => {
            if (isListeningChildAdded) {
                // Store new shape
                store.commit(types.ADD_NEW_SHAPE, snapshot.val());
            } else {
                isListeningChildAdded = true;
            }
        });

        database.shapes.on("child_changed", (snapshot) => {
            store.commit(types.UPDATE_SHAPE_STATUS, snapshot.val());
        });
    }
};

export default actionsList;