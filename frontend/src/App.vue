<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import Navigationbar from './components/NavBar.vue'
import { states } from './states/state'
import Menu from './pages/Menu.vue';
import Landingpage from './pages/Landingpage.vue';
</script>



<template>
<div class=" wrapper">
<header>
      <Navigationbar class="navbar" ref="navbar"/>
      
  </header>

  <main>
    <Landingpage class="landing"></Landingpage>
    <Menu class="menu" v-if="states.burgerIsActivated" style=""></Menu>
  
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

.landing {
position:absolute;
z-index: 1;
}

.menu {
  position:relative;
  z-index: 2;
}

</style>
