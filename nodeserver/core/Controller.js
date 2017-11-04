// Imports Class
const Axidraw = require('./Axidraw.js');
const Database = require('./Database.js');

// Imports Shapes
const Circle = require('../shapes/Circle.js');


function Controller(opts) {

	// Axidraw Config
	this.axidrawIP = opts.axidrawIP
    this.SHEET_RATIO = (210 / 297); // A4

	this.init();
}


Controller.prototype.init = function()  {

    this.setDataBase();
    this.setAxidraw();
    //this.axidraw.drawShape(this.shape.pointsPosition);

}


Controller.prototype.setDataBase = function() {

	// Database
	this.database = new Database();

}


Controller.prototype.setAxidraw = function() {

    // AxiDraw
    this.axidraw = new Axidraw({
        api: 'http://' + this.axidrawIP + ':4242/v1/pen'
    })

    // Check Axidraw Status
    this.axidraw.readyEvent.on('isReady', (isReady) => {

        if (isReady) {
            console.log('Axidraw is ready')
        } else {
            console.log('Please verify connection with Axidraw and relaunch the node server')
        }

    });

}


Controller.prototype.setShape = function(){

    this.shape = new Circle({
        sheetRatio: this.SHEET_RATIO,
        radius: 25, // 0 to 50%
        posX: 50, // 0 to 100%
        posY: 50, // 0 to 100%
        pointsLength: 50
    })

}


module.exports = Controller;
