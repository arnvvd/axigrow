'use strict';

/* Import Database */
import { database } from '../../core/database';

import * as types from '../mutation-types';

const actionsList = {

    getFirebaseDatabase: (store) => {
        database.db.ref('.info/connected').on('value', (connectedSnap) => {
            if (connectedSnap.val() === true) {

                // Set is connected
                store.commit(types.DATABASE_STATUS);

                // If Connected Get All Shape from Shape Store
                store.dispatch('getAllShape');
                // Listen Axidraw Status
                store.dispatch('setAxidrawStatus');
                store.dispatch('listenAxidrawStatus');
            }
        });
    }
};

export default actionsList;