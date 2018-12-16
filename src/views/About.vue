<template>
    <div>
      <template v-if="active.length > 0">
      <div  v-for="(element, index) in active" :key="index">
         <input :type="element.setting.type" :placeholder="element.value">
      </div>
    </template>
    <template v-else>
      <div class="text-secondary">
          Sorry. There is nothing to show yet.
      </div>
    </template>
    </div>
</template>

<script>
  import { mapState } from 'vuex'
  // @ is an alias to /src
  export default {
    name: 'home',
    computed: {
      ...mapState([
        'active'
      ]),
    },
  }
</script>

<style>

</style>
