<template>
    <main class="main">

        <!-- If Datas are fetched -->
        <transition name="transition-page">
            <div v-if='!shapesAreFetched'>Loader</div>
        </transition>

        <!-- Else -->
        <navigation v-if='shapesAreFetched'></navigation>
        <btn-increment v-if='shapesAreFetched'></btn-increment>
        <transition name="transition-page">
            <router-view v-if='shapesAreFetched'></router-view>
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
            ...mapGetters([
                'shapesAreFetched'
            ])
        },
        created() {
            this.$store.dispatch('getFirebaseDatabase');
        }
    }
</script>
