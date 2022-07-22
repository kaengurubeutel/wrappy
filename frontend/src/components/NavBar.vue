
<script>

import { states } from '../states/state'


export default {
  data() {
    return {
      states
    }
  },
  methods:{
    isSet() {
     states.burgerIsActivated = !states.burgerIsActivated;
    }
  }
}
</script>


<template>

  <div class="navbar">
    <div class="container">
        <h1>Wrappy</h1>
        <div class="hamburger">
          <input class="checkbox" type="checkbox" name="burgerMenu" id="burgerMenu" @change="isSet()" />
          <span class="line line1"></span>
          <span class="line line2"></span>
          <span class="line line3"></span>
        </div>
    </div>
  </div>
 
</template>


<style scoped>
*{
  padding: 0;
  margin: 0;
}
.container{
  background-color: #EABF6C;
  position:sticky;
  width: 95%;
  margin: auto;
  margin-top: 5px;
  margin-bottom: -5px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 80px;

}

.container .checkbox {
  position:absolute;
  display: block;
  height: 32px;
  width: 32px;
  z-index: 5;
  opacity: 0;
  cursor: pointer;
}

.container .hamburger {
  display: block;
  height: 26px;
  width: 32px;
  position: relative;
  top: 1px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
}

.container .hamburger .line {
  display: block;
  height: 6px;
  width: 100%;
  border-radius: 10px;
  background: #1E1E1E;
}

.container .hamburger .line1 {
  transform-origin: 0% 0%;
  transition: transform 0.2s ease-in-out;
}

.container .hamburger .line2 {
  width: 80%;
  transition: transform 0.1s ease-in-out;
}

.container .hamburger .line3 {
  transform-origin: 0% 100%;
  transition: transform 0.2s ease-in-out;
}


.hamburger input[type="checkbox"]:checked ~ .line1 {
  transform: translateY(5px);
}

.hamburger input[type="checkbox"]:checked ~  .line2 {
  transform: scaleY(0);
}

.hamburger input[type="checkbox"]:checked ~ .line3 {
  transform: translateY(-5px);
}

</style>
