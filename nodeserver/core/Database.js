// Imports Node
const firebase = require('firebase-admin')

// Imports Configs
const serviceAccount = require('../serviceAccountKey.json')


function Database(opts) {

	this.init();
}

Database.prototype.init =  function() {
	firebase.initializeApp({
      credential: firebase.credential.cert(serviceAccount),
      databaseURL: "https://axigrow-eb0bc.firebaseio.com"
    });


    // Get a reference to the database service
    this.database = firebase.database();

    console.log(this.database)
}


module.exports = Database;
