<script>

import { states } from '../states/state'


export default {
  data() {
    return {
      states
    }
  },
  props:{heading : String},
  methods:{
   back(){
      this.$emit('back');
   }
  }
}
</script>


<template>

  <div class="point" @click="back"></div>

  <div class="wrapper">

    <h1>{{heading}}</h1>

    <div></div>
  </div>

</template>


<style scoped>

.wrapper{
  display: flex;
  flex-direction: row;
  align-items:center;
  justify-content: center;
  width:100%;
  padding: 0px;
  margin:0;
  
}

.point{
 position:absolute;
 top:20px;
 left:10px;
 border: solid #1E1E1E;
  border-width: 0 10px 10px 0;
  display: inline-block;
  padding: 10px;
   transform: rotate(135deg);
  -webkit-transform: rotate(135deg);
  box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.25);
}

h1 {
  flex: none;
  order: 1;
  flex-grow: 0;
  font-size: 2rem;
  margin:0;
  
}


.point:hover{
    border-color: #DC6161;
}

.point:active{
  box-shadow: 0px 0px 0px rgba(0, 0, 0, 0.25);
}

@media screen and (max-width:720px) {

  h1{
    position:relative;
    top: 10px;
    font-size: 1.4rem;
    line-height: 1.4remc;
  }

}


</style>
