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


Database.prototype.setAxidrawReady = function() {
    this.axidraw.update({ status: 1 }, (error) => {
        if (error) {
            console.log('Axidraw status cannot be udpated');
        } else {
            console.log('Axidraw update to ready!');
        }
    });
}    


Database.prototype.setAxidrawInProgress = function() {
    this.axidraw.update({ status: 2 }, (error) => {
        if (error) {
            console.log('Axidraw status cannot be udpated');
        } else {
            console.log('Axidraw update to in progress!');
        }
    });
}


Database.prototype.endShape = function(shape) {
    // Update user to firebase
    this.shapes.child(shape.firebase_path).update({ drawStatus: 2, isDraw: true}, (error) => {
        if (error) {
            console.log('Cannot end shape');
        } else {
            console.log('End shape!');
        }
    });
}


module.exports = Database;
