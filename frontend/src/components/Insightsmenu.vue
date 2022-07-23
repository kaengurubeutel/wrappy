
<script>

import { states } from '../states/state'


export default {
  data() {
    return {
      states
    }
  },
  methods:{
    topartists(){
      this.$emit('topartists');
    },
    topsongs(){
      this.$emit('topsongs');
    },
    recentlyplayed(){
      this.$emit('recentlyplayed');
    }

  }
}
</script>


<template>

  <div class = "menuwrapper">

    <div class = "menu">
        <h1 class = "Heading">your<br/>insights</h1>
        <h2 @click="topartists">top artists</h2>
        <h2 @click="topsongs">top songs</h2>
        <h2 @click="recentlyplayed">recently played</h2>
    </div>

    <div class = "hearts"> 
        <img class = "heart h1" src="../assets/herzchen.png">
        <img class = "heart h2" src="../assets/herzchen.png">
        <img class = "heart h3" src="../assets/herzchen.png">
        <img class = "heart h4" src="../assets/herzchen.png">
        <img class = "heart h5" src="../assets/herzchen.png">
        <img class = "heart h6" src="../assets/herzchen.png">
        <img class = "heart h7" src="../assets/herzchen.png">
        
    </div>

  </div>

</template>


<style scoped>

.menu {
    position: relative;
    top: 70px;
    display: flex;
    flex-direction: column;
    width: 500px;
}

h2 {
    margin: 0;
    font-weight: 400;
}

h1 {
    margin-top: 10px;
    margin-bottom: 30px;
    font-weight: 700;
    font-size: 4rem;
    line-height: 4rem;
}

h2:hover {
    color: #DC6161;
}

h2:active {
    text-shadow: 1px 1px 2px black;
}

.heart {
  position: absolute;
  filter: drop-shadow(-24px 27px 4px rgba(0, 0, 0, 0.38));
  transform-origin: 50% 50%;
  transition: transform 0.1s ease-in-out;
}

.heart:hover {
   transform: rotate(20deg);
}


.h1 {
  transform: rotate(-12.5deg);
  width: 300px;
  height: auto;
  left: 50%;
  top: -100px;
}

.h2 {
   transform: rotate(12.5deg);
  width: 250px;
  height: auto;
  left: 60%;
  top: 200px;
}

.h3 {
  transform: rotate(-34.5deg);
  width: 200px;
  height: auto;
  left: 50%;
  top: 400px;
}

.h4 {
   transform: rotate(30deg);
  width: 200px;
  height: auto;
  left: 30%;
  top: 10px;
}

.h5 {
   transform: rotate(-12.5deg);
  width: 300px;
  height: auto;
  left: 80%;
  top: 10px;
}

.h6 {
   transform: rotate(-12.5deg);
  width: 150px;
  height: auto;
  left: 80%;
  top: 350px;
}

.h7 {
   transform: rotate(-12.5deg);
  width: 300px;
  height: auto;
  left: 28%;
  top: 250px;
}


@media screen and (max-width:720px){

.h7 {
  display:none;
}

.h6 {
  display:none;
}

.h5 {
  display:none;
}

.heart {
  z-index: 1;
}

h1 {
  font-size:64px;
  line-height: 2.5rem;
}

h2 {
  font-size: 40px;
}

.menu {
  position: absolute;
  top: 25%;
  width: 310px;
  z-index: 2;
}

.h1 {
  transform: rotate(-12.5deg);
  width: 100px;
  height: auto;
  left: 10%;
  top: 60px;
}

.h2 {
  transform: rotate(12.5deg);
  width: 200px;
  height: auto;
  left: 50%;
  top: 30px;
}

.h3 {
  transform: rotate(12.5deg);
  width: 220px;
  height: auto;
  left: 10%;
  top: 75%;
}
.h4 {
  transform: rotate(-12.5deg);
  width: 100px;
  height: auto;
  left: 70%;
  top: 320px;
}


}




</style>
