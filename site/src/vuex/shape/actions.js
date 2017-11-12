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

        // Update user to firebase
        function addShapeToDatabase(firebasePath, shape) {
            database.shapes.child(firebasePath).update(shape, (error) => {
                if (error) {
                    console.log('cannot save user');
                } else {
                    console.log('user saved!');
                }
            });
        }
    }
};

export default actionsList;