<template>
    <div style="margin-top: 5rem;">
        {{getShapesToDraw}}
        <h1>Dashboard</h1>
        <p>There is {{getShapesToDraw.length}} shapes</p>
        <ul>
			<li v-for="shape in getShapesToDraw">
				<pre>{{ shape }}</pre>
                <button @click="startDraw(shape)" class="button">Draw</button>
			</li>
        </ul>
    </div>
</template>

<script>
    import { mapGetters } from 'vuex'

    export default {
        methods: {
            startDraw(shape) {
                console.log(this.$store.getters.getAxidrawStatus);
                if (this.$store.getters.getAxidrawStatus === 1) {
                    this.$store.dispatch('drawShape', shape);
                }
            }
        },
        computed: {
            ...mapGetters([
                'getShapesToDraw'
            ]),
        }
    }
</script>

