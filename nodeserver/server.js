// Imports
var Axidraw = require('./axidraw/axidraw');
var Circle = require('./shapes/circle');

// Get Args
var argument = process.argv.slice(2);
var apiArgument = argument[0];


function Server() {

    // Support
    this.SHEET_RATIO = (210 / 297); // A4

    // AxiDraw
    this.axidraw = new Axidraw({
        api: 'http://' + apiArgument + ':4242/v1/pen'
    })

    // Check Axidraw Status
    this.axidraw.readyEvent.on('isReady', function(isReady){

        if (isReady) {
            console.log('Axidraw is ready')
            // Init server exec
            this.init();
        } else {
            console.log('Please verify connection with Axidraw and relaunch the node server')
        }

    }.bind(this));
}


Server.prototype.init = function() {

    this.setShape();
    //this.axidraw.drawShape(this.shape.pointsPosition);

}


Server.prototype.setShape = function() {

    this.shape = new Circle({
        sheetRatio: this.SHEET_RATIO,
        radius: 25, // 0 to 50%
        posX: 50, // 0 to 100%
        posY: 50, // 0 to 100%
        pointsLength: 50
    })


    console.log(this.shape.pointsPosition)
}




if (apiArgument) {

    var server = new Server();

} else {

    console.log("You must put Axidraw IP Adress in args")

}
