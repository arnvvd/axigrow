<template>
	<section class="container">
        <div class="container__inner">  
        	<div class="intro__wrapper">
			<div>
				<div class="letter__container">
					<p class="font__logo">G</p>
				</div>
				<div class="letter__container">
					<p class="font__logo">E</p>
				</div>
				<div class="letter__container">
					<p class="font__logo">N</p>
				</div>
			</div>
			<div>
				<div class="letter__container">
					<p class="font__logo">I</p>
				</div>
				<div class="letter__container">
					<p class="font__logo">•</p>
				</div>
				<div class="letter__container">
					<p class="font__logo">D</p>
				</div>
			</div>
			<pre>{{getLastShape}}</pre>
			<shape-canvas :shapeObj="getLastShape" :isBackgroundBlack="false" :page="page"></shape-canvas>
		</div>      
        </div>
    </section>
</template>

<script>
	import Canvas from '../00_components/Canvas.vue'
    import { mapGetters } from 'vuex'

    export default {
    	data () {
          return {
            page: 'home',
          }
        },
    	components: {
            'shape-canvas': Canvas,
        },
        computed: {
            ...mapGetters([
                'getLastShape'
            ])
        }
    }
</script>
