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
    img: String,
    album: String,
    artist: String,
  }
}
</script>


<template>
<div class = "container">

  <h1 class="top">top {{number}}</h1>

  <div class = "picture-title-container">
    <img src = {{img}} alt="artistcover"/>
    <h1 class = "name">{{name}}</h1>
    <div class="artists">{{artist}}</div>
    <div class ="album">{{album}}</div>
  </div>

</div>
 
 
</template>


<style scoped>
.artists{
  font-weight: 400;
}

.container {
  display: flex;
flex-direction: row;
align-items: flex-start;
padding: 0px;
position: absolute;
width: 501px;
height: 519px;

}

.picture-title-container {
 display: flex;
flex-direction: column;
align-items: flex-start;
padding: 0px;
gap: 5px;
}

.top {
width: 239px;
height: 81px;

font-family: 'Space Grotesk';
font-style: normal;
font-weight: 700;
font-size: 64px;
line-height: 0px;
margin:0;
padding:0;
position:relative;
left: 120px;
top: 50px;
color: #1E1E1E;

transform: rotate(-90deg);

/* Inside auto layout */

flex: none;
order: 0;
flex-grow: 0;
}

.name {
  width: 422px;
height: 120px;

/* H2 */

font-family: 'Space Grotesk';
font-style: normal;
font-weight: 700;
font-size: 47.3719px;
line-height: 60px;

color: #1E1E1E;


/* Inside auto layout */

flex: none;
order: 1;
flex-grow: 0;
}

.album{
  flex: none;
order: 3;
flex-grow: 0;
}
.artists{
  
width: 422px;
height: 45px;

/* H3 */

font-family: 'Space Grotesk';
font-style: normal;
font-weight: 500;
font-size: 35.5378px;
line-height: 45px;

color: #1E1E1E;


/* Inside auto layout */

flex: none;
order: 2;
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
