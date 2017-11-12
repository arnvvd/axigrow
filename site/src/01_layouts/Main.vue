<template>
    <main class="main">
        <navigation></navigation>
        <btn-increment></btn-increment>
        <transition name="transition-page">
            <router-view></router-view>
        </transition>
    </main>
</template>

<script>
    /*Import Components*/
    import BtnIncrement from '../00_components/BtnIncrement.vue'
    import Navigation from './Navigation.vue';

    import { mapGetters } from 'vuex'

    export default {
        components: {
            'btn-increment': BtnIncrement,
            'navigation': Navigation
        },
        computed: {
            ...mapGetters([])
        },
        created() {
            this.$store.dispatch('getFirebaseDatabase');
        }
    }
</script>
