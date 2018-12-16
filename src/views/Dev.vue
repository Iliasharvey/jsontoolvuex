<template>
  <div class="container shadow pb-3">
    <draggable v-model="rows" :options="{group: {name: 'g1'}}">

      <div v-for="(el, index) in rows" :key="index">
         
        <draggable v-model="el.columns" class="flex-grid row"  :options="{group: {name: 'g2'}}">

          <div v-for="(el, index) in el.columns" class="flex-col column" :key="index">
            {{ el.name}}
            <input type="text">
          </div>

        </draggable>

      </div>

    </draggable>
    <div class="">
      
    </div>
  </div>
</template>

<script>
  import draggable from 'vuedraggable'

  import {
    mapState
  } from 'vuex'
  // @ is an alias to /src
  export default {
    name: 'home',
    data() {
      return {
        "rows": [
          {
            "name": "row",
            "columns": [
              {
              "name": "col 1",
              },
              {
              "name": "col 2",
              },
              {
              "name": "col 3",
              }
            ]
          },
          {
            "name": "row",
            "columns": [{
              "name": "second table col 1",
            }]
          }
        ]
      }
    },
    components: {
      draggable
    },
    computed: {
      ...mapState([
        'list'
      ])
    },
  }
</script>

<style scoped>
  .elementBox {
    width: 100%;
    padding: 20px;
  }

  .elementBox:hover {
    background-color: #d1d1d1;
    cursor: pointer;
  }
  .flex-grid {
  display: flex;
}
.flex-col {
  flex:1;
  padding:25px;
  cursor:pointer;
  background:#fff;
  margin:5px;
}
.flex-col:hover {
  background:#ccc;
}
.row {
  padding:25px;
  background:red;
  margin:5px;
}
</style>