'use strict';

import * as types from '../mutation-types';

const actionsList = {
    counterIncrement: (store) => {
        store.commit(types.COUNTER_INCREMENT);
    }
};

export default actionsList;
