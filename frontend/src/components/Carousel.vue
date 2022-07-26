<script>

import { states } from '../states/state'
import ArtistCard from './ArtistCard.vue';
import Songcard from './Songcard.vue';




export default {

    data() {
        return {
            states,
            index: 0,
            slideDirection: "",
            slides: [],
        };
    },
    props: { carouselstate: String, carouseldata: Array },
    computed: {
      slidesLength() {
        return this.carouseldata.length;
      }
    },
    mounted() {},
    methods: {},
    watch: {
        carouseldata(newdata, olddata) {
            console.log("hallo");
        }
    },
    components: { ArtistCard, Songcard }
}

//<ArtistCard v-for="(item, index) in carouseldata" :name="item.name" :number="index+1" :img="item.images[0].url"
         // : key = "(index)" class="slide" />

/**
 *  <Songcard v-for="(item, index) in carouseldata" :name="item.name" :number="index+1" :album="item.album.name"
          :artist="item.artists[0].name" :img="item.album.images[0].url" :key="(index)" class="slide" />
      
 */

</script>


<template>
  <div class=wrapper>

    <div class="carousel" @keydown="checkSlide($event)" tabindex="0" >
      <div v-if="this.carouselstate === 'artists' && this.carouseldata.length > 0" class="artists">



      </div>
      

      
      <div v-if="this.carouselstate === 'songs' && this.carouseldata.length > 0" class="songs">
      
      

      </div>

    </div>


    <div class = "menuwrapper">
      <div class="menu">
        <img src="../assets/button.png" alt="leftbutton" class="prev" />
        <img src="../assets/button.png" alt="rightbutton" class="next" />
      </div>
    </div>


  </div>

</template>


<style scoped>

.next {
transform: rotate(180deg);
}

img {
  width:80px;
  height: auto;
  filter: drop-shadow(-2px -2px 4px rgb(0 0 0 / 0.38));
  cursor: pointer;
}

img:active {
  filter: drop-shadow(-2px -2px 4px rgb(0 0 0 / 0));
}


.slide {
  transform: scale(60%);
  width: 500px;
}




</style>
