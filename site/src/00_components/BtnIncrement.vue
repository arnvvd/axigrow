<template>
    <button v-on:click="counterIncrement">Increment {{getCountIncrement}}</button>
</template>

<script>
    import { mapGetters, mapActions } from 'vuex'

    export default {
        methods: {
            ...mapActions([
                'counterIncrement'
            ])
        },
        computed: {
            ...mapGetters([
                'getCountIncrement'
            ])
        }
    }
</script>
