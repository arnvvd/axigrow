// Imports Node
const firebase = require('firebase');
const EventEmitter = require('events').EventEmitter;


// Imports Configs
const serviceAccount = require('../serviceAccountKey.json')


function Database(opts) {

    // Event Emitter
    this.readyEvent = new EventEmitter();

    // Init
	this.init();
}


Database.prototype.init = function() {

    // Init Firebase
	firebase.initializeApp({
      serviceAccount: serviceAccount,
      databaseURL: "https://axigrow-eb0bc.firebaseio.com"
    });


    // Get a reference to the database service
    this.database = firebase.database();

    this.users = this.database.ref('users');
    this.axidraw = this.database.ref('axidraw');
    this.shapes = this.database.ref('shapes');
    
    // Check connection
    this.checkConnection();
}


Database.prototype.checkConnection = function() {

    console.log("\x1b[33m", "Trying to be connect to database")

    this.database.ref('.info/connected').on('value', (connectedSnap) => {

        if (connectedSnap.val() === true) {
            this.readyEvent.emit('isReady', true);
        }

    });
}





module.exports = Database;
