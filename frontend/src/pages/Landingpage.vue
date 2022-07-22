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
  <div class="landingwrapper">
    <img class = "f1" src="../assets/Fernseher_y1yztk_c_scale,w_924.png">
    <img class = "f2" src="../assets/Fernseher_y1yztk_c_scale,w_924.png">
    <img class = "f3" src="../assets/Fernseher_y1yztk_c_scale,w_924.png">
    <img class = "f4" src="../assets/Fernseher_y1yztk_c_scale,w_924.png">
    <img class = "f5" src="../assets/Fernseher_y1yztk_c_scale,w_924.png">
    
    <div class = "signinwrapper">
        <h1>lets find out what your favourite music is!</h1>
        <a><div class="signinbox">sign in</div></a>    
    </div>
   
  </div>
</template>


<style scoped>


.landingwrapper {
    width:95%;
}

img {
    position: absolute;
    filter: drop-shadow(-22px 39px 4px rgb(0 0 0 / 0.38));
    display: none;
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
    border: 3px solid #302F2B
;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 12px;
}

.signinbox:active{
    box-shadow: none;
}

h1 {
  width: 15rem;
  margin-bottom: 50px;
}

.signinwrapper {
  width:15rem;
  display: flex;
  flex-direction: column;
}

</style>