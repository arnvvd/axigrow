// Imports
var Circle = require('./shapes/circle');

// Initialize
var SHEET_RATIO = 210 / 297; // A4

// Set Shape
var circle = new Circle({
    sheetRatio: SHEET_RATIO,
    radius: 25, // 0 to 100% (width)
    posX: 50, // 0 to 100% (width)
    posY: 50, // 0 to 100% (width)
    pointsLength: 50
})

console.log(circle.pointsPosition);
