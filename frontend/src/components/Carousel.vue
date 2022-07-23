<script>

import { states } from '../states/state'

let refreshStorage = (access_token, expiring_time) => {
  localStorage.setItem("access_token" , access_token);
  localStorage.setItem("expiring_time" , expiring_time);
}

export default {

  data() {
    return {
      states
    }
  },
  props:{
    artists: [
      
    ]
  },
  methods:{
   
  }
}
</script>


<template>

 
 
</template>


<style scoped>

</style>
