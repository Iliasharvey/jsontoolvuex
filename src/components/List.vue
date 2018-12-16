<template>
    <div>
        <div class="addElement">
            <div class="input-group mb-3">

                <select class="form-control" v-model="selectedElement">
                    <option v-for="(option, index) in options" :key="index" :value="option">
                        {{ option }}
                    </option>
                </select>    
                
                <select v-if="selectedElement == 'input'" class="form-control" v-model="inputType">
                    <option v-for="(type, index) in inputTypeList" :key="index" :value="type">
                        {{ type }}
                    </option>
                </select>

                <div class="input-group-append">
                    <button class="btn btn-secondary" @click.prevent="addElement">+</button>
                </div>

            </div>
        </div>

        <draggable v-model="newList" class="dragbox" :options="{group:'element'}">
            <div v-for="(element, index) in list" :key="index" class="elementBox">
                {{ element.value }} - {{ element.setting.type }}
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
                'list',
                'options',
                'inputTypeList'
            ]),
            newList: {
                get() {
                    return this.$store.state.list
                },
                set(value) {
                    this.$store.commit('changeList', value)
                }
            },
            selectedElement: {
                get() {
                    return this.$store.state.selected
                },
                set(value) {
                    this.$store.commit('selected', value)
                }
            },
            inputType: {
                get() {
                    return this.$store.state.selectedInputType
                },
                set(value) {
                    this.$store.commit('selectedInputType', value)
                }
            }
        },
        components: {
            draggable
        },
        methods: {
            ...mapMutations([
                'changeList',
                'addElement',
                'selected',
                'inputTypes'
            ]),
        },
    }
</script>

<style>
    .elementBox {
        width: 100%;
        padding: 20px;
    }

    .elementBox:hover {
        background-color: #d1d1d1;
        cursor: pointer;
    }

    .addElement {
        background-color: #ccc;
        height: 75px;
        padding: 20px;
    }
</style>