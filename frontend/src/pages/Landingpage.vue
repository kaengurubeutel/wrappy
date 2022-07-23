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
  <div v-if="!states.burgerIsActivated"  class = "landing">
    <div class="landingwrapper">
      <div class = "tvwrapper">
        <img class = "f1" src="../assets/Fernseher_y1yztk_c_scale,w_924.png">
        <img class = "f2" src="../assets/Fernseher_y1yztk_c_scale,w_924.png">
        <img class = "f3" src="../assets/Fernseher_y1yztk_c_scale,w_924.png">
        <img class = "f4" src="../assets/Fernseher_y1yztk_c_scale,w_924.png">
        <img class = "f5" src="../assets/Fernseher_y1yztk_c_scale,w_924.png">
      </div>
     
      <div class = "signinwrapper">
          <h1>let's find out what your favourite music is!</h1>
          <a><div class="signinbox">sign in</div></a>    
      </div>
    </div>
  </div>
  
</template>


<style scoped>


.landing {
  width:95%;
  height: 90%;
  
}

img {
    position: absolute;
    filter: drop-shadow(-22px 39px 4px rgb(0 0 0 / 0.38));
    z-index: 1;
}

.signinbox {
    margin: 0;
    display: flex;
    justify-content: center;
    color: #302F2B;
    font-weight: 500;
    align-items: center;
    box-sizing: border-box;
    width: 212px;
    height: 78px;
    background: #8B79F7;
    border: 3px solid #302F2B;
    -webkit-touch-callout: none; 
    -webkit-user-select: none; 
     -khtml-user-select: none; 
       -moz-user-select: none; 
        -ms-user-select: none; 
            user-select: none;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 12px;
}

.signinbox:active{
    box-shadow: none;
}

h1 {
  width: 15rem;
  padding: 0.25rem;
  font-weight: 400;
  margin-bottom: 25px;
  background: #8B79F7;
  border: 3px solid #000000;
  border-radius: 8px;
}

.signinwrapper {
  width:15rem;
  display: flex;
  flex-direction: column;
  position: absolute;
  z-index: 1;
  left: 60%;
  top: 10%;
}

.f1 {
  transform: rotate(-12.5deg);
  width: 700px;
  height: 700px;
  left: 100px;
  top: 10px;
}

.f2 {
  transform: rotate(-41.72deg);
  width: 350px;
  height: 350px;
  left: 50px;
  top: 570px;
}

.f3 {
  transform: rotate(-32.57deg);
  width: 282.16px;
  height: 287.69px;
  left: 345px;
  top: 659.9px;
}

.f4 {
  transform: rotate(34.82deg);
  width: 550px;
  height: 550px; 
  left: 750.34px;
  top: -60px;
}

.f5 {
  transform: rotate(10.69deg);
  width: 330px;
  height: 330px;
  left: 684.65px;
  top: 500px;
}

.tvwrapper {
  transform: scale(70%);
  position:relative;
  left: -150px;
  top: -60px;
}


@media screen and (max-width:720px){

.tvwrapper {
  transform: scale(70%);
  position:relative;
  left: -150px;
  top: -60px;
}

h1 {
  font-size: 40px;
  width: 11rem;
  padding: 0.25rem;
  font-weight: 400;
  margin-bottom: 25px;
  background: #8B79F7;
  border: 3px solid #000000;
  border-radius: 8px;
}

.signinwrapper {
  width:15rem;
  display: flex;
  flex-direction: column;
  position: absolute;
  z-index: 1;
  left: 5%;
  top: 30%;
}

.f1 {
  width: 300px;
  height: auto;
  left: 150%;
  top: 140.56px;
  transform: rotate(30deg);
}

.f2 {
  width: 300px;
  height: auto;
  left: 55%;
  top: 170.56px;
  transform: rotate(-15deg);
}

.f3 {
  width: 500px;
  height: auto;
  left: -30%;
  top: 400.56px;
  transform: rotate(-40deg);
}

.f4 {
  width: 500px;
  height: auto;
  left:110%;
  top:600.56px;
  transform: rotate(-4deg);
}

.f5 {
  width: 250px;
  height: auto;
  left:40%;
  top:900px;
  transform: rotate(-4deg);
}

.landing {
  width:100%;
  height: 100%;
  overflow: hidden;
}


}



</style>