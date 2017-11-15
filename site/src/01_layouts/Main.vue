<template>
    <main v-bind:class="[customClass]">
        <!-- If Datas are fetched -->
        <transition name="transition-page">
            <div v-if='!shapesAreFetched'>Loader</div>
        </transition>

        <!-- Else -->
        <site-header v-if='shapesAreFetched' :header-datas="headerDatas"></site-header>

        <navigation v-if='shapesAreFetched'></navigation>

        <transition name="transition-page">
            <router-view v-if='shapesAreFetched'></router-view>
        </transition>

    </main>
</template>

<script>
    /*Import Components*/
    import Navigation from './Navigation.vue';
    import Header from './Header.vue';

    import { mapGetters } from 'vuex'

    export default {
        data () {
          return {
            customClass: this.$router.currentRoute.meta.bodyClass,
            headerDatas: this.$router.currentRoute.meta.headerDatas
          }
        },
        components: {
            'navigation': Navigation,
            'site-header': Header
        },
        computed: {
            ...mapGetters([
                'shapesAreFetched'
            ])
        },
        created() {
            this.$store.dispatch('getFirebaseDatabase');
        },
        watch: {
            '$route' () {
                this.$data.customClass = this.$router.currentRoute.meta.bodyClass;
                this.$data.headerDatas = this.$router.currentRoute.meta.headerDatas;
            }
        }
    }
</script>
