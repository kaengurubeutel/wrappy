<script>

import { states } from '../states/state'


export default {
  data() {
    return {
      states
    }
  },
  methods:{
   
  },
  props:{
    name: String,
    number: Number,
    img: String
  }
}
</script>


<template>
  <div class="container">

    <h1 class="top">top {{number}}</h1>

    <div class="picture-title-container">
      <img v-bind:src="img" alt="artistcover" />
      <h1 class="name">{{name}}</h1>
    </div>

  </div>


</template>


<style scoped>


* body {
  margin:0;
  padding:0;
}
.container {
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 0px;
  margin:0;
}

.picture-title-container {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  margin:0;
  gap:5px;
}

.top {

font-family: 'Space Grotesk';
font-style: normal;
font-weight: 700;
font-size: 64px;
line-height: 0px;
margin:0;
padding:0;
position:absolute;
left: -150px;
  top: 120px;

color: #1E1E1E;

transform: rotate(-90deg);

/* Inside auto layout */

flex: none;
order: 0;
flex-grow: 0;
}

.name {
        width: 420px;
        height: 79px;
        font-family: 'Space Grotesk';
        font-style: normal;
        font-weight: 700;
        font-size: 60px;
        line-height: 70px;
        text-align: center;
        color: #1E1E1E;
        flex: none;
        order: 1;
        flex-grow: 0;
}

h1 {
  margin:0;
  line-height: 1rem;
}

img {
  box-sizing: border-box;

width: 420px;
height: 420px;
border: 7px solid #1E1E1E;
border-radius: 4px;

/* Inside auto layout */

flex: none;
order: 0;
flex-grow: 0;
}

</style>
