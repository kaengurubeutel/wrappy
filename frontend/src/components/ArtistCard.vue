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
<div class = "container">

  <h1 class="top">top {{number}}</h1>

  <div class = "picture-title-container">
    <img src = {{img}} alt="artistcover"/>
    <h1 class = "name">{{name}}</h1>
  </div>

</div>
 
 
</template>


<style scoped>
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
left: 100px;
top: 30px;
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

/* H1 */

font-family: 'Space Grotesk';
font-style: normal;
font-weight: 700;
font-size: 60px;
line-height: 70px;
text-align: center;
color: #1E1E1E;


/* Inside auto layout */

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

background: url(ab6761610000e5eb7714bb4d6a7b50a00f83195d.jpg);
border: 7px solid #000000;
border-radius: 4px;

/* Inside auto layout */

flex: none;
order: 0;
flex-grow: 0;
}

</style>
