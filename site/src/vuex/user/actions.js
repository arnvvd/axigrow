'use strict';

/* Import Database */
import { database } from '../../core/database';

import * as types from '../mutation-types';

const actionsList = {

    createUser: (store, user) => {

        console.log(user);

        // Check if user already Exist
        database.users.orderByChild("id").equalTo(user.id).once("value", function(snapshot) {
            const userData = snapshot.val();

            if (!userData) {
                console.log('User does not Exist');
                // Add User to firebase
                addUserToDatabase(user);
            }
        });

        console.log(types);

        // Do Commits
        store.commit(types.SET_OLD_USER);
        console.log('coucou');
        store.commit(types.SET_CURRENT_USER, user);


        // Add user to firebase
        function addUserToDatabase(user) {
            database.users.push(user, (error) => {
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