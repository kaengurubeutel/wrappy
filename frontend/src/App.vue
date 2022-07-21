<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import Navigationbar from './components/NavBar.vue'
import { states } from './states/state'
import Menu from './pages/Menu.vue';
</script>



<template>
<div class=" wrapper">
<header>
      <Navigationbar ref="navbar"/>
      <Menu v-if="states.burgerIsActivated"></Menu>
  </header>

  <main>
  
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

</style>
