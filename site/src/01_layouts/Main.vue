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

    export default {
        components: {
            'btn-increment': BtnIncrement,
            'navigation': Navigation
        },
        created() {
            this.$store.dispatch('getFirebaseDatabase');
        }
    }
</script>
