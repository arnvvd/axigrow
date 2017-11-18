<template>
    <section class="container">
        <div class="container__inner container__inner--single"> 
    		<div class="content" v-if="getShapeById != undefined">
                <div class="datas__wrapper">
                    <div class="datas datas--01">
                        <p class="data-number">{{getShapeById.followers}}</p>
                        <p class="data-name">Followers</p>
                    </div>
                    <div class="datas datas--02">
                        <p class="data-number">{{getShapeById.tweets}}</p>
                        <p class="data-name">Tweets</p>
                    </div>
                    <div class="datas datas--03">
                        <p class="data-number">{{getShapeById.likes}}</p>
                        <p class="data-name">Likes</p>
                    </div>
                    <div class="datas datas--04">
                        <p class="data-number">{{getShapeById.daysCount}}</p>
                        <p class="data-name">Days subscribed</p>
                    </div>
                </div>
                <!-- <h1>Shape ID : {{$route.params.id}}</h1>
                <pre>{{getShapeById}}</pre> -->
                <shape-canvas :shapeObj="shapeObj" :isBackgroundBlack="isBackgroundBlack" :page="page"></shape-canvas>   
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
                shapeObj: {},
                page: 'single'
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