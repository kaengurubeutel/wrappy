<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import Navigationbar from './components/NavBar.vue'
import { states } from './states/state'
import Menu from './views/Menu.vue';
import Landingpage from './views/Landingpage.vue';
import Carousel from './components/Carousel.vue';




</script>

<script>
export default {

  data() {

     if (localStorage.getItem("access_token") != null){
         states.authkey = true;
        }

    return {
      states
    }
  },
  methods:{
   
  }
  
}

</script>


<template>
  <div class=" wrapper">
    <header>
      <Navigationbar class="navbar" ref="navbar" />

    </header>

    <main>
      <Menu class="menu" v-if="states.burgerIsActivated" style=""></Menu>
      <router-view class="router"></router-view>
    </main>

    <footer>

    </footer>
  </div>
</template>





<style scoped>


header{
  display: flex;
  justify-content:space-around;
  flex-direction: column;
  background-color: #EABF6C;
}

.navbar {
  position:sticky;
  top:0;
  background-color: #EABF6C;
}

.router {
position:absolute;
left: 0;
z-index: 1;

@media screen and (max-width:720px){
  left: 0%;
}
}
.menu {
  position:relative;
  z-index: 2;
}

</style>
