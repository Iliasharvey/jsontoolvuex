<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-2 p-0 shadow">
        <element-list />
      </div>
      <div class="col p-0 shadow">
        <drag-drop />
      </div>
      <div class="col-3 p-0 shadow">
        <json-data />
      </div>
    </div>
  </div>
</template>

<script>
  import elementList from '@/components/List.vue'
  import dragDrop from '@/components/Dragdrop.vue'
  import jsonData from '@/components/jsonData.vue'

  // @ is an alias to /src
  export default {
    name: 'home',
    components: {
      elementList,
      dragDrop,
      jsonData
    }
  }
</script>