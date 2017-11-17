<template>
    <div class="canvas__wrapper"></div>
</template>

<script>

    /* Import */
    import Shape from '../shapes/shape.js'


    export default {

    	data() {
    		return {
    			username: '',
                error: false
    		}
    	},

        props: ['shapeObj', 'isBackgroundBlack'],

        methods: {
            /**
             * setCard
             */
            setCard() {

                this.shape = new Shape(this.ctx, {
                    followers: this.shapeObj.followers,
                    tweets: this.shapeObj.following,
                    likes: this.shapeObj.likes,
                    days: 255, //this.shapeObj.days
                    width: this.canvas.width,
                    height: this.canvas.height,
                    isBlack: this.isBackgroundBlack,
                    multiplier: 5
                });

            },

            /**
             * render
             */
            render() {
                // Clear Canvas
                this.ctx.clearRect(0,0, this.canvas.width, this.canvas.height);

                // Do Render
                this.ctx.save();
                this.ctx.translate(this.canvas.width/2, this.canvas.height/2);
                this.ctx.rotate(Math.PI*2);
                for(let i = 1; i < 20; i++){
                    this.shape.render(i);
                }
                this.ctx.restore();
            }
        },

        mounted() {
            // Root
            this.root = document.body.querySelector('.canvas__wrapper');

            // Create Canvas
            this.canvas = document.createElement('canvas');
            this.root.appendChild(this.canvas);

            // Size
            this.canvas.width = 800;
            this.canvas.height = 800;


            // Context
            this.ctx = this.canvas.getContext('2d');
            //this.ctx.imageSmoothingEnabled = false;


            // EXEC
            this.setCard();
            this.render();
        },

        watch: { 
            shapeObj: function(newVal, oldVal) { // watch it
                console.log(newVal);
                console.log("new Val");
                console.log(this);
                this.setCard();
                this.render(); 
            }
        }
    }
</script>
