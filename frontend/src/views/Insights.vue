<script>

import { states } from '../states/state'
import Insightsmenu from '../components/Insightsmenu.vue'


export default {
    data() {

        return {
            states
        };
    },
    props: {menu: String},
    methods: {},
    components: { Insightsmenu }
}
</script>


<template>
  <div class = "insightswrapper" v-if="!states.burgerIsActivated">

    <Insightsmenu v-if="menu == 'true' ||  menu == null" @topartists="menu = 'topartists'" @topsongs="menu = 'topsongs'" @recentlyplayed="menu = 'recentlyheard'"></Insightsmenu>

    <div v-if="menu == 'topartists' || menu == 'topsongs'">
      <h1>{{menu}}</h1>
    </div>

    <div v-if="menu == 'recentlyheard'">
      <h1>{{menu}}</h1>
    </div>
  
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