import Vue from 'vue';

import firebase from 'firebase';

// Imports Configs
import serviceAccount from '../config/serviceAccountKey.json';


class Database {

    constructor() {
        this.init();
    }

    init() {
        // Init Firebase
        firebase.initializeApp({
            serviceAccount: serviceAccount,
            databaseURL: "https://axigrow-eb0bc.firebaseio.com"
        });

        this.db = firebase.database();
        this.users = this.db.ref('users');
        this.axidraw = this.db.ref('users');
        this.shapes = this.db.ref('shapes');
    }
}

export let database = new Database();
