'use strict';

/* Import Database */
import { database } from '../../core/database';

import * as types from '../mutation-types';

const actionsList = {
    setAxidrawStatus: (store) => {
        database.axidraw.once("value", (snapshot) => {
            store.commit(types.SET_AXIDRAW_STATUS, snapshot.val());
        });
    },

    listenAxidrawStatus: (store) => {
        database.axidraw.on("child_changed", (snapshot) => {
            store.commit(types.AXIDRAW_STATUS, snapshot.val());
        });
    }
};

export default actionsList;