<template>
    <div style="margin-top: 5rem;">
        <h1>Page archive</h1>
        <p>There is {{getShapes.length}} shapes</p>
        <ul>
			<li v-for="shape in getShapes">
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
                'getShapes'
            ])
        }
    }
</script>

