<template>
    <section class="container">
        <div class="container__inner container__inner--single"> 
    		<div class="content" v-if="getShapeById != undefined">
                <div>
                    <div class="datas datas--01"><p class="data-number">245</p></div>
                    <div class="datas datas--02"><p class="data-number">245</p></div>
                    <div class="datas datas--03"><p class="data-number">245</p></div>
                    <div class="datas datas--04"><p class="data-number">245</p></div>
                </div>
                <h1>Shape ID : {{$route.params.id}}</h1>
                <pre>{{getShapeById}}</pre>
                <shape-canvas :shapeObj="shapeObj" :isBackgroundBlack="isBackgroundBlack" ></shape-canvas>   
            </div>

             <!-- Undefined-->
            <pagenotfound v-else></pagenotfound>

        </div>
    </section>
</template>

<script>

    import Canvas from '../00_components/Canvas.vue'
    import PageNotFound from './404.vue'

    export default {
        data() {
            return {
                shapeObj: {}
            }
        },
    	components: {
            'pagenotfound': PageNotFound,
            'shape-canvas': Canvas,
        },
        computed: {
        	getShapeById() {
                let shapeObj = this.$store.getters.getShapeById(this.$route.params.id);
                this.shapeObj = shapeObj;
                this.setBackgroundColor(shapeObj.toDraw);
        		return shapeObj;
        	}
        }, 
        methods: {
            setBackgroundColor(toDraw) {
                let main = document.body.querySelector('main');

                if (toDraw) {
                    main.classList.add('is-black');
                    this.isBackgroundBlack = true;
                } else {
                    main.classList.add('is-white');
                    this.isBackgroundBlack = false;
                }
            }
        }
    }
</script>