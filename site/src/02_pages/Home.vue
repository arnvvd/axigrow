<template>
    <div style="margin-top: 5rem;">
        <h1>Vue Starterkit - Home ✌</h1>
        <img style="margin-top: 5rem;" src="https://media.giphy.com/media/114IumHhV6sTRK/giphy.gif" alt="Let's go !">
        <pre>{{getLastShape}}</pre>
    </div>
</template>

<script>
    import { mapGetters } from 'vuex'

    export default {
        computed: {
            ...mapGetters([
                'getLastShape'
            ])
        }
    }
</script>
