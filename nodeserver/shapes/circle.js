function Circle(opts) {

    // Support
    this.sheetRatio = opts.sheetRatio;
    this.sheetWidth = 100; // Percent
    this.sheetHeight = 100 * this.sheetRatio;


    // Shape
    this.radius = this.sheetHeight / (100 / opts.radius);
    this.pointsLength = opts.pointsLength;
    this.position = {
        x : this.sheetWidth / (100 / opts.posX),
        y : this.sheetHeight / (100 /opts.posY)
    };


    // Buffer
    this.pointsPosition = [];


    // Set Shape
    this.init();

}


Circle.prototype.init = function() {

    Math.radians = function(degrees) {
        return degrees * Math.PI / 180;
    };

    for (var i = 0; i <= this.pointsLength; i++) {

        var position = {};
        var angle = (360 / this.pointsLength) * i;


        position.x = this.position.x + Math.sin(Math.radians(angle)) * this.radius;
        position.y = this.position.y + Math.cos(Math.radians(angle)) * this.radius;


        position.x = (position.x / this.sheetWidth) * 100;
        position.y = (position.y / this.sheetHeight) * 100;

        this.pointsPosition.push(position);
    };

};



module.exports = Circle;

