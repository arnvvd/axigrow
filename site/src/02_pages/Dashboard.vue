<template>
    <div style="margin-top: 5rem;">
        <h1>Dashboard</h1>
        <p>There is {{getShapesToDraw.length}} shapes</p>
        <div class="axidraw-status">
            <span v-if='getAxidrawStatus === 0'>Axidraw is not ready</span>
            <span v-if='getAxidrawStatus === 1'>Axidraw is ready</span>
            <span v-if='getAxidrawStatus === 2'>Axidraw is drawing</span>
        </div>
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
                if (this.$store.getters.getAxidrawStatus === 1) {
                    this.$store.dispatch('drawShape', shape);
                }
            }
        },
        computed: {
            ...mapGetters([
                'getShapesToDraw',
                'getAxidrawStatus'
            ]),
        }
    }
</script>

