// Imports Class
const Axidraw = require('./Axidraw.js');
const Database = require('./Database.js');

// Imports Shapes
const Circle = require('../shapes/Circle.js');


function Controller(opts) {

    // General Config
    this.databaseIsReady = false;
    this.axidrawIsReady = false;

	// Axidraw Config
	this.axidrawIP = opts.axidrawIP
    this.SHEET_RATIO = (210 / 297); // A4

	this.init();
}


Controller.prototype.init = function()  {

    this.setDataBase();
    this.setAxidraw();
}


Controller.prototype.setDataBase = function() {

	// Database
	this.database = new Database();

    // Check Database Status
    this.database.readyEvent.on('isReady', (isReady) => {

        if (isReady) {
            console.log('\x1b[32m', 'Database is ready')
            this.databaseIsReady = true;
            // Listen shapes list
            this.listenShapes();
        } else {
            console.log('\x1b[31m', 'Please verify connection with Database and relaunch the node server')
        }

    });
}


Controller.prototype.setAxidraw = function() {

    // AxiDraw
    this.axidraw = new Axidraw({
        api: 'http://' + this.axidrawIP + ':4242/v1/pen'
    })

    // Check Axidraw Status
    this.axidraw.readyEvent.on('isReady', (isReady) => {

        if (isReady) {
            this.axidrawIsReady = true;
            console.log('\x1b[32m', 'Axidraw is ready')

            // TODO : Set axidraw ready in database to active drawing action in client
        } else {
            console.log('\x1b[31m', 'Please verify connection with Axidraw and relaunch the node server')
        }

    });
}



// DATAS
Controller.prototype.listenShapes = function() {

    this.database.shapes.on("child_changed", (snapshot) => {
       console.log(snapshot.val());
    }, function (error) {
       console.log('\x1b[31m', 'Error: ' + error.code);
    });
}


// SHAPES
Controller.prototype.setShape = function() {

    this.shape = new Circle({
        sheetRatio: this.SHEET_RATIO,
        radius: 25, // 0 to 50%
        posX: 50, // 0 to 100%
        posY: 50, // 0 to 100%
        pointsLength: 50
    })

}


module.exports = Controller;
