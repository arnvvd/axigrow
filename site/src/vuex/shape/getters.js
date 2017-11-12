'use strict';

const gettersList = {
    lastShape: state => state.oldUser,
    currentShape: state => state.currentShape
};

export default gettersList;
