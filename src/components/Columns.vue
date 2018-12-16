<template>
     <draggable v-model="columns" :options="{group: {name: 'g1'}}">

          <div v-for="(el, index) in columns" :class="el.name" :key="index">
            Column
          </div>

        </draggable>
</template>

<script>
import draggable from 'vuedraggable'
export default {
    props:['columns'],
    components: { draggable }
}
</script>

<style>

</style>
