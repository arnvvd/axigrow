<script>
    import { mapGetters, mapActions } from 'vuex'

    export default {
        template: require('./template.html'),
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