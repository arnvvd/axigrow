<template>
    <main class="main">
        <!-- If Datas are fetched -->
        <transition name="transition-page">
            <div v-if='!shapesAreFetched'>Loader</div>
        </transition>

        <!-- Else -->
        <navigation v-if='shapesAreFetched'></navigation>

        <div class="container">
            <div class="container__inner">
                <transition name="transition-page">
                    <router-view v-if='shapesAreFetched'></router-view>
                </transition>
            </div>
        </div>
    </main>
</template>

<script>
    /*Import Components*/
    import Navigation from './Navigation.vue';

    import { mapGetters } from 'vuex'

    export default {
        components: {
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
