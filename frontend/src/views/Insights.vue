<script>

import { states } from '../states/state'
import Insightsmenu from '../components/Insightsmenu.vue'


export default {
    data() {
        return {
            states
        };
    },
    methods: {},
    components: { Insightsmenu }
}
</script>


<template>
  <div class = "insightswrapper" v-if="!states.burgerIsActivated">
    <Insightsmenu></Insightsmenu>
  </div> 
  
</template>


<style scoped>

.insightswrapper {
  position: absolute;
  left: 2.5%;
  width:95%;
  height: 85%;
  
}

</style>