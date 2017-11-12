'use strict';

/* Import Database */
import { database } from '../../core/database';

import * as types from '../mutation-types';

const actionsList = {

    createUser: (store, user) => {

        // Check if user already Exist
        database.users.orderByChild("id").equalTo(user.id).once("value", function(snapshot) {

            const userData = snapshot.val();

            if (!userData) {
                console.log('User does not Exist');

                // Get Path to update User
                let firebasePath = database.users.push().key;
                user.firebase_path = firebasePath;

                // Push User in Database
                updateUserToDatabase(firebasePath, user);

            } else {
                // Get User
                snapshot.forEach((item) => {

                    console.log('User already Exist : update');

                    let userData = item.val();

                    // Update datas
                    userData.followers = user.followers;
                    userData.following = user.following;
                    userData.likes = user.likes;

                    // Push User in Database           
                    updateUserToDatabase(item.key, userData);
                });
            }
        });


        // Do Commits
        store.commit(types.SET_OLD_USER);
        store.commit(types.SET_CURRENT_USER, user);


        // Update user to firebase
        function updateUserToDatabase(firebasePath, user) {
            database.users.child(firebasePath).update(user, (error) => {
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