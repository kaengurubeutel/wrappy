<script>
import axios from "axios";
import { states } from '../states/state'


//@TODO add axios to profile
//@TODO add links to about and add logout
let refreshStorage = (access_token, expiring_time) => {
  localStorage.setItem("access_token" , access_token);
  localStorage.setItem("expiring_time" , expiring_time);
}

let username = "";

export default {
  data() {

    if(states.authkey){
      axios({
        method: 'get',
        url: "http://127.0.0.1:5000/api/spotify/user-data/profile",
        headers: {
          access_token: localStorage.getItem("access_token"),
          refresh_token: localStorage.getItem("refresh_token"),
          expiring_time: localStorage.getItem("expiring_time"),
        },
        data: {}
      }).then((response) => {
        console.log(response.data);
        username = response.data.spotifydata.display_name
        refreshStorage(response.data.access_token, response.data.expiring_time);
        this.$forceUpdate();
      })
    }

    return {
      username,
      states
    }
  },
  methods:{
    logout(){
      localStorage.clear();
      states.authkey = false;
      username = "";
      this.$router.push('/');
      states.burgerIsActivated = false;

    }
  }
}

</script>

<template>
<div class = "background">
  <div class = "menu-wrapper">
        <div class = "menu">
                <div v-if="states.authkey">
                  <p>user</p>
                  <div class = "username">{{username}}</div>
                  <h1 @click="logout">logout</h1>                
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

.menu {
  -webkit-touch-callout: none; 
    -webkit-user-select: none; 
     -khtml-user-select: none; 
       -moz-user-select: none; 
        -ms-user-select: none; 
            user-select: none;
}
.background {
  margin: 0;
  padding-top: 10%;
  padding-bottom: 10%;
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
  width: 95%;
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


@media screen and (max-width:720px){


.username {
  margin-top: 0;
  font-size: 2.7em;
  line-height: auto;
  font-size: 50px;
  font-weight: 600;
}

}



</style>
