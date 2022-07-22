<script>
import {axios} from 'axios';
import { states } from '../states/state'


//@TODO add axios to profile
//@TODO add links to about and add logout


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
<div class = "background">
  <div class = "menu-wrapper">
        <div class = "menu">
                <h1>about</h1>
                <div v-if="states.authkey !== ''">
                  <p>user</p>
                  <div class = "username">username</div>
                  <h1>logout</h1>                
                </div>
                <div v-else>
                  <br/>
                  <br/>
                  <br/>
                  <br/>
                  <br/>
                </div>
                
            
        </div>
    </div>
</div>
    
</template>

<style scoped>

.background {
  margin-top: 30px;
  background-color: #EABF6C;
}
.menu-wrapper{
  position: relative;
  width: 95%;
  height: 100%;
  margin: auto;
  margin-top: 5px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 1.2em;
  line-height: 1.5em;
}

h1 {
  cursor: pointer;
}

h1:hover {
    color: #DC6161;
    -webkit-text-stroke-width: 1px;
    -webkit-text-stroke-color: black;
   
}

h1:active {
    
    text-shadow: 1px 1px 2px black;
}

.username {
  margin-top: 0;
  font-size: 2.7em;
  line-height: auto;
  font-weight: 600;
}



p {
    margin-bottom: 0;
}
</style>
