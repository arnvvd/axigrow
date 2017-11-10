'use strict';

/* Import Database */
import { database } from '../../core/database';

import * as types from '../mutation-types';

const actionsList = {

    getFirebaseDatabase: (store) => {
        database.db.ref('.info/connected').on('value', (connectedSnap) => {

            if (connectedSnap.val() === true) {

                store.commit(types.DATABASE_STATUS);

            }

        });
    }
};

export default actionsList;
