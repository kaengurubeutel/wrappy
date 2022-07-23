<script>

import { states } from '../states/state'


export default {
  data() {
    return {
      states
    }
  },
  methods:{
   
  }
}
</script>


<template>
  <div>
    <h1>{{states.authkey}}</h1>
    <h1>{{states.expiresAt}}</h1>
    <h1>{{states.refreshkey}}</h1>
  </div> 
  
</template>


<style scoped>



</style>