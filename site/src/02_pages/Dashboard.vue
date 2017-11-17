<template>
    <section class="dashboard-container container">
        <div class="container__inner"> 
            <div class="content">
                <div class="axidraw-status">
                    <span v-if='getAxidrawStatus === 0' class="axidraw-status--notready">Axidraw is not ready</span>
                    <span v-if='getAxidrawStatus === 1' class="axidraw-status--ready">Axidraw is ready</span>
                    <span v-if='getAxidrawStatus === 2' class="axidraw-status--inprogress">Axidraw is drawing</span>
                </div>
            </div>


            <div class="dashboard-list">
                <transition-group name="transition-list" tag="ul">
        			<li class="dashboard-list__item" v-for="shape in getShapesToDraw" v-bind:key="shape">
                        <div class="dashboard-list__user">
                            <span class="dashboard-list__username">@{{shape.author}} - </span>
                            <span v-if='shape.drawStatus === 0' class="dashboard-list__status">ready to draw</span>
                            <span v-if='shape.drawStatus === 1' class="dashboard-list__status">in progress</span>
                        </div>
                        <button @click="startDraw(shape, $event)" class="button dashboard-button">
                            <svg width="17px" height="12px" viewBox="0 0 17 12" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                                <g id="Master" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                                    <g id="Generator-Copy-5" transform="translate(-1073.000000, -414.000000)" fill="#8E8E8E">
                                        <path d="M1077.63173,419.131728 L1077.63173,412.131728 L1074.63173,412.131728 L1074.63173,420.631728 L1074.63173,422.131728 L1087.63173,422.131728 L1087.63173,419.131728 L1077.63173,419.131728 Z" id="Combined-Shape-Copy" transform="translate(1081.131728, 417.131728) rotate(-45.000000) translate(-1081.131728, -417.131728) "></path>
                                    </g>
                                </g>
                            </svg>
                        </button>
        			</li>
                </transition-group>
            </div>


        </div>
    </section>    
</template>

<script>
    import { mapGetters } from 'vuex'

    export default {
        methods: {
            startDraw(shape, event) {
                if (this.$store.getters.getAxidrawStatus === 1) {
                    let btn = event.target;
                    btn.classList.add('is-active');
                    this.$store.dispatch('drawShape', shape);
                }
            }
        },
        computed: {
            ...mapGetters([
                'getShapesToDraw',
                'getAxidrawStatus'
            ]),
        }
    }
</script>

