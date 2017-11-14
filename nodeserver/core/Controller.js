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

            // If server exite database axidraw is set to not ready
            this.database.axidraw.onDisconnect().update({status: 0});

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
        api: 'http://' + this.axidrawIP + ':4242/v1/pen',
        database: this.database
    })

    // Check Axidraw Status
    this.axidraw.readyEvent.on('isReady', (isReady) => {

        if (isReady) {
            this.axidrawIsReady = true;
            console.log('\x1b[32m', 'Axidraw is ready')
            this.database.setAxidrawReady();
        } else {
            console.log('\x1b[31m', 'Please verify connection with Axidraw and relaunch the node server')
        }

    });
}

// DATAS
Controller.prototype.listenShapes = function() {

    console.log('listen shapes');

    // TO REMOVE
    this.database.setAxidrawReady();
    ////////////

    this.database.shapes.on("child_changed", (snapshot) => {
       this.drawShape(snapshot.val())
    }, function (error) {
       console.log('\x1b[31m', 'Error: ' + error.code);
    });
}


Controller.prototype.drawShape = function(datasShape) {

    // Set axidraw status to in progress
    this.database.setAxidrawInProgress();
    // Set Shape
    this.setShape();
    // TODO drawShape
    this.axidraw.drawShape(this.shape.pointsPosition, datasShape);
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
