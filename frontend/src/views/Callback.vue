<template>
  <div class="callback">
  </div>
</template>

<script>
import { states } from '../states/state'
import axios from "axios";
export default {
  data() {
    axios.get("http://127.0.0.1:5000/api/spotify/auth/").then((response) => {
      console.log(response.data);
      localStorage.setItem("access_token" , response.data.access_token);
      localStorage.setItem("refresh_token" , response.data.refresh_token);
      localStorage.setItem("expiring_time" , response.data.expiring_time);
      if (localStorage.getItem("access_token") != null){
         states.authkey = true;
        }
      this.$router.push('/insights');
      

    })
    return {
        states
    }
  },
  methods:{

  }
}
</script>