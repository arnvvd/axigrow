import SimplexNoise from 'simplex-noise';
import Alea from 'alea';

export default class Shape {

    constructor(ctx, options) {
        this.ctx = ctx;
        this.followers = options.followers;
        this.tweets = options.tweets;
        this.likes = options.likes;
        this.days = options.days;
        this.isBlack = options.isBlack;
        this.width = options.width;
        this.height = options.height;
        this.pointCount = options.width;
        this.lissajousPoints = [];
        this.noise = new SimplexNoise();
        this.scalar = options.multiplier;
        this.points = [];

        console.log(this.isBlack);

        // if (this.position) {
        //     this.render();
        // }
    }

    // radians(degrees) {
    //     return degrees * Math.PI / 180;
    // };

    jsMap( num, min1, max1, min2, max2 ) {

        let num1 = ( num - min1 ) / ( max1 - min1 );
        let num2 = ( num1 * ( max2 - min2 ) ) + min2;

        return num2;
    }


    makeNoise() {
        this.random = new Alea(this.tweets);
        this.simplex = new SimplexNoise(this.random);
        this.numPoints = this.jsMap(this.days, 0, 2920, 10, 200);
    }


    render(r) {
        let R = r;
        this.makeNoise();
        this.ctx.save();
        this.ctx.beginPath();
        for (let i = 0; i < this.numPoints; i++) {
            let angle = this.jsMap(i, 0, this.numPoints, 0, Math.PI*2);
            let x = Math.cos(angle);
            let y = Math.sin(angle);
            let n = this.simplex.noise2D(x + this.likes, y + this.followers);
            let l = this.jsMap(n, -1, 1, 0, 4);
            let posX = x * l * R * this.scalar;
            let posY = y * l * R * this.scalar;
            this.points.push([posX,posY]);
            if (this.isBlack) {
                this.ctx.strokeStyle = 'white';
            }
            this.ctx.lineTo(posX, posY);
        }
        this.ctx.closePath();
        this.ctx.stroke();
        this.ctx.restore();
    }

}