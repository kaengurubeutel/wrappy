<script>

import { states } from '../states/state'
import axios from "axios";

let refreshStorage = (access_token, expiring_time) => {
  localStorage.setItem("access_token", access_token);
  localStorage.setItem("expiring_time", expiring_time);
}

export default {

  data() {
    return {
      states
    }
  },
  props: {
    artists: [
       


    ]
  },
  methods: {
    gettracks() {
      axios({
        method: 'get',
        url: "http://127.0.0.1:5000/api/spotify/user-data/tracks",
        headers: {
          access_token: localStorage.getItem("access_token"),
          refresh_token: localStorage.getItem("refresh_token"),
          expiring_time: localStorage.getItem("expiring_time"),
          time_range: "short_term" //todo multiple buttons for different time ranges
        },
        data: {}
      }).then((response) => {
        console.log(response.data.spotifydata.items);
        // notwendig für refresh
        refreshStorage(response.data.access_token, response.data.expiring_time);
        //fixed

      })

    },
    /* @param time_range --> short_term || medium_term || long_term*/
    topartists() {
      console.log("hallo")
      axios({
        method: 'get',
        url: "http://127.0.0.1:5000/api/spotify/user-data/artists",
        headers: {
          access_token: localStorage.getItem("access_token"),
          refresh_token: localStorage.getItem("refresh_token"),
          expiring_time: localStorage.getItem("expiring_time"),
          time_range: "short_term" //todo multiple buttons for different time ranges
        },
        data: {}
      }).then((response) => {

        console.log(response.data.spotifydata.items);
        refreshStorage(response.data.access_token, response.data.expiring_time);

      })
    },

  }
}
</script>


<template>

  <h1 @click="topartists">Artists</h1>
  <h1 @click="gettracks">songs</h1>

</template>


<style scoped>
</style>
