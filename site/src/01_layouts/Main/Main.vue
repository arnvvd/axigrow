<script>
    /*Import Components*/
    import BtnIncrement from '../../00_components/BtnIncrement/BtnIncrement.vue'
    import Navigation from '../Navigation/Navigation.vue';

    export default {
        template: require('./template.html'),
        components: {
            'btn-increment': BtnIncrement,
            'navigation': Navigation
        }
    }
</script>