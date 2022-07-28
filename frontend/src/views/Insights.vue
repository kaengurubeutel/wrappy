<script>

import { states } from '../states/state'
import Insightsmenu from '../components/Insightsmenu.vue'
import ReturnMenu from '../components/ReturnMenu.vue'
import Callback from './Callback.vue';
import Carousel from '../components/Carousel.vue';
import axios from 'axios';

let refreshStorage = (access_token, expiring_time) => {
  localStorage.setItem("access_token", access_token);
  localStorage.setItem("expiring_time", expiring_time);
}

export default {

  data() {

    return {
      states,
      artists: [],
      tracks: [],
      recentlyHeard: [],
      carouselState: "",
    };
  },
  props: { menu: String },
  methods: {

    gettracks() {
      axios({
        method: 'get',
        url: "http://127.0.0.1:5000/api/spotify/user-data/tracks",
        headers: {
          access_token: localStorage.getItem("access_token"),
          refresh_token: localStorage.getItem("refresh_token"),
          expiring_time: localStorage.getItem("expiring_time"),
          time_range: "short_term"
        },
        data: {}
      }).then((response) => {
        console.log(response.data.spotifydata.items);
        refreshStorage(response.data.access_token, response.data.expiring_time);
        this.tracks = response.data.spotifydata.items;
      })

    },

    topartists() {
      axios({
        method: 'get',
        url: "http://127.0.0.1:5000/api/spotify/user-data/artists",
        headers: {
          access_token: localStorage.getItem("access_token"),
          refresh_token: localStorage.getItem("refresh_token"),
          expiring_time: localStorage.getItem("expiring_time"),
          time_range: "long_term"
        },
        data: {}
      }).then((response) => {

        refreshStorage(response.data.access_token, response.data.expiring_time);
        this.artists = response.data.spotifydata.items;
      })
    },

    recentlyheard() {
      axios({
        method: 'get',
        url: "http://127.0.0.1:5000/api/spotify/user-data/recently-played",
        headers: {
          access_token: localStorage.getItem("access_token"),
          refresh_token: localStorage.getItem("refresh_token"),
          expiring_time: localStorage.getItem("expiring_time"),
        },
        data: {}
      }).then((response) => {
        refreshStorage(response.data.access_token, response.data.expiring_time);
        console.log(response.data.spotifydata.items);
        this.recentlyHeard = response.data.spotifydata.items;

      })
    },

  },
  watch: {
    menu(newState, oldState) {
      switch (newState) {
        case ("top artists"):
          this.topartists();
          this.carouselState = "artists";
          console.log(this.carouselState)
          break;
        case ("top songs"):
          this.gettracks();
          this.carouselState = "songs";
          console.log(this.carouselState)
          break;
        case ("recently played"):
          this.recentlyheard();
          this.carouselState = "recent";
          break;
      }
    }
  },
  components: { Insightsmenu, ReturnMenu, Callback, Carousel }
}
</script>


<template>
  <div class="insightswrapper" v-if="!states.burgerIsActivated">

    <Insightsmenu v-if="menu == 'true' || menu == null" @topartists="menu = 'top artists'"
      @topsongs="menu = 'top songs'" @recentlyplayed="menu = 'recently played'"></Insightsmenu>

    <div v-if="menu == 'top artists'">
      <ReturnMenu :heading="this.menu" @back="menu = 'true'" class="menu"></ReturnMenu>
      <Carousel :carouselstate="this.carouselState" :carouseldata="this.artists" class="carousel"></Carousel>
    </div>

    <div v-if="menu == 'top songs'">
      <ReturnMenu :heading="this.menu" @back="menu = 'true'" class="menu"></ReturnMenu>
      <Carousel :carouselstate="this.carouselState" :carouseldata="this.tracks" class="carousel"></Carousel>
    </div>

    <div v-if="menu == 'recently played'">
      <ReturnMenu :heading="this.menu" @back="menu = 'true'" class="menu"></ReturnMenu>
      <Carousel :carouselstate="this.carouselState" :carouseldata="this.recentlyHeard" class="carousel"></Carousel>
    </div>

  </div>

</template>


<style scoped>


.menu {
  position:absolute;
  z-index: 2;

}

.carousel {
  position: absolute;
  top: 40px;
  z-index: 1;
}

.insightswrapper {
  position: absolute;
  left: 2.5%;
  width: 95%;
  height: 85%;

}
</style>