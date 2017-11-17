const SimplexNoise = require('simplex-noise');
const Alea = require('alea');

function Shape(opts) {

    // Support
    this.sheetRatio = opts.sheetRatio;
    this.sheetWidth = 100; // Percent
    this.sheetHeight = 100 * this.sheetRatio; // 70 percent


    // Twitter Params
    this.followers = opts.followers;
    this.tweets = opts.tweets;
    this.likes = opts.likes;
    this.days = opts.days;
    console.log(this.days);

    // Shape
    //this.radius = this.sheetHeight / (100 / opts.radius);
    //this.pointsLength = opts.pointsLength;
    this.noise = new SimplexNoise();
    this.scalar = opts.multiplier;
    this.position = {
        x : this.sheetWidth / (100 / opts.posX),
        y : this.sheetHeight / (100 /opts.posY)
    };


    // Buffer
    this.pointsPosition = [];


    // Set Shape
    this.makeNoise();
    this.init();

}


Shape.prototype.makeNoise = function() {
    this.random = new Alea(this.tweets);
    this.simplex = new SimplexNoise(this.random);
    if(this.days > 3000){
        this.days == 3000;
    }
    this.numPoints = jsMap(this.days, 0, 3000, 10, 50);
}


Shape.prototype.init = function() {


    for(let i = 1; i < 31; i++){
      this.render(i);
    }


    // for (var i = 0; i <= this.pointsLength; i++) {

    //     var position = {};
    //     var angle = (360 / this.pointsLength) * i;


    //     position.x = this.position.x + Math.sin(Math.radians(angle)) * this.radius;
    //     position.y = this.position.y + Math.cos(Math.radians(angle)) * this.radius;


    //     position.x = (position.x / this.sheetWidth) * 100;
    //     position.y = (position.y / this.sheetHeight) * 100;

    //     this.pointsPosition.push(position);
    // };

};

Shape.prototype.render = function(r) {

    let R = r;
    let pathPoints = [];

    for(let i = 0; i < this.numPoints; i++){

        var shapePosition = {};

        let angle = jsMap(i, 0, this.numPoints, 0, radians(360));
        let x = Math.cos(angle);
        let y = Math.sin(angle);
        let n = this.simplex.noise2D(x + this.likes, y + this.followers);
        let l = jsMap(n, -1, 1, 0, 4);


        shapePosition.x = this.position.x + x * l * R * this.scalar;
        shapePosition.y = this.position.y + y * l * R * this.scalar;

        shapePosition.x = (shapePosition.x / this.sheetWidth) * 100;
        shapePosition.y = (shapePosition.y / this.sheetHeight) * 100;

        if (shapePosition.x >= 100) {
            shapePosition.x = 99;
        } else if (shapePosition.x <= 0) {
            shapePosition.x = 1;
        }

        if (shapePosition.y >= 100) {
            shapePosition.y = 99;
        } else if (shapePosition.y <= 0) {
            shapePosition.y = 1;
        }

        pathPoints.push(shapePosition);
    }

    this.pointsPosition.push(pathPoints);
    console.log(this.numPoints);
}



// UTILS

function radians(degrees) {
    return degrees * Math.PI / 180;
};

function jsMap( num, min1, max1, min2, max2 ) {

   let num1 = ( num - min1 ) / ( max1 - min1 );
    let num2 = ( num1 * ( max2 - min2 ) ) + min2;

   return num2;
}



module.exports = Shape;

