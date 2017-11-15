<template>
    <main v-bind:class="[customClass]">
        <!-- If Datas are fetched -->
        <transition name="transition-page">
            <div v-if='!shapesAreFetched'>Loader</div>
        </transition>

        <!-- Else -->
        <navigation v-if='shapesAreFetched'></navigation>

        <transition v-if='shapesAreFetched' name="transition-page">
            <router-view></router-view>
        </transition>

    </main>
</template>

<script>
    /*Import Components*/
    import Navigation from './Navigation.vue';

    import { mapGetters } from 'vuex'

    export default {
        data () {
          return {
            customClass: this.$router.currentRoute.meta.bodyClass
          }
        },
        components: {
            'navigation': Navigation
        },
        computed: {
            ...mapGetters([
                'shapesAreFetched'
            ])
        },
        created() {
            console.log(this.$router.currentRoute.meta.bodyClass);
            this.$store.dispatch('getFirebaseDatabase');
        },
        watch: {
            '$route' () {
                return this.$data.customClass = this.$router.currentRoute.meta.bodyClass;
            }
        }
    }
</script>
