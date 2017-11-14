<template>
    <section class="container">
        <div class="container__inner"> 

		<div v-if="getShapeById != undefined">
            <h1>Shape ID : {{$route.params.id}}</h1>
            <pre>{{getShapeById}}</pre>
        </div>

         <!-- Undefined-->
         <pagenotfound v-else></pagenotfound>

        </div>
    </section>
</template>

<script>

    import PageNotFound from './404.vue'

    export default {
    	components: {
            'pagenotfound': PageNotFound,
        },
        computed: {
        	getShapeById() {
        		console.log(this.$store.getters.getShapeById(this.$route.params.id));
        		return this.$store.getters.getShapeById(this.$route.params.id);
        	}
        },
        created() {
        	console.log(this.$route.params.id);
        }
    }
</script>