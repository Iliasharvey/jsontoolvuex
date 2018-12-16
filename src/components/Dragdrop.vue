<template>
    <div class="activeContent">
        <draggable v-model="activeList" class="dragbox" :options="{group:'element'}">
            <div v-for="(element, index) in active" :key="index">
                <input :type="element.setting.type" v-model="element.value">
            </div>
        </draggable>
    </div>
</template>

<script>
    import draggable from 'vuedraggable'
    import {
        mapState,
        mapMutations
    } from 'vuex'
    // @ is an alias to /src

    export default {
        name: 'home',
        computed: {
            ...mapState([
                'active'
            ]),
            activeList: {
                get() {
                    return this.$store.state.active
                },
                set(value) {
                    this.$store.commit('changeActiveList', value)
                }
            }
        },
        methods: {
            ...mapMutations([
                'changeList'
            ]),
        },
        components: {
            draggable
        }
    }
</script>

<style>
    .activeContent {
        font-size: 25px;
        text-align: center;
        color: grey;
        background-color: #f1f1f1;
        height:100%;
    }
    .dragbox {
             min-height: 500px; 
    }
</style>