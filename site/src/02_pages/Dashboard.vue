<template>
    <div style="margin-top: 5rem;">
        <h1>Dashboard</h1>
        <p>There is {{getShapesToDraw.length}} shapes</p>
        <ul>
			<li v-for="shape in getShapesToDraw">
				<pre>{{ shape }}</pre>
			</li>
        </ul>
    </div>
</template>

<script>
    import { mapGetters } from 'vuex'

    export default {
        computed: {
            ...mapGetters([
                'getShapesToDraw'
            ])
        }
    }
</script>

