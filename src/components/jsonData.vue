<template>
    <textarea id="textarea" class="pre" :value="JSON.stringify(active, null, 4)" @input="changeArray"></textarea>
</template>

<script>
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
        },
        methods: {
            ...mapMutations([
                'changeActiveList'
            ]),
            changeArray: function (event) {
                
               (event.target.value.length > 0) ? this.changeActiveList(JSON.parse(event.target.value)) : false;
                
            }
        },
    }
</script>

<style>
    .pre {
        color: #ff0000;
        width: 100%;
        min-height: 500px;
        height: auto;
        background-color: #f1f1f1;
        font-size: 13px;
    }
</style>