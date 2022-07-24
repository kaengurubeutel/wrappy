<script>

import { states } from '../states/state'
import Insightsmenu from '../components/Insightsmenu.vue'
import ReturnMenu from '../components/ReturnMenu.vue'
import Callback from './Callback.vue';
import Carousel from '../components/Carousel.vue';


export default {



    data() {

        return {
            states
        };
    },
    props: {menu: String},
    methods: {},
    components: { Insightsmenu, ReturnMenu, Callback, Carousel }
}
</script>


<template>
  <div class="insightswrapper" v-if="!states.burgerIsActivated">

    <Insightsmenu v-if="menu == 'true' ||  menu == null" @topartists="menu = 'top artists'"
      @topsongs="menu = 'top songs'" @recentlyplayed="menu = 'recently played'"></Insightsmenu>

    <div v-if="menu == 'top artists' || menu == 'top songs'">
      <ReturnMenu :heading="menu" @back="menu='true'"></ReturnMenu>
      <Carousel></Carousel>
    </div>

    <div v-if="menu == 'recently played'">
      <ReturnMenu :heading="menu" @back="menu='true'"></ReturnMenu>
      
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