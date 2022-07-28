<script>

import { states } from '../states/state'
import ArtistCard from './ArtistCard.vue';
import CarouselSlide from './CarouselSlide.vue';
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
  mounted() {

  },
  computed: {

    slidesLength() {
      return this.carouseldata.length;
    }
  },
  mounted() {

  },
  methods: {

    next() {
      this.index = (this.index + 1) % this.carouseldata.length;
      this.slideDirection = 'slide-right';
    },

    back() {
      this.index--;
      if (this.index < 0) {
        this.index = this.carouseldata.length - 1;
      }
      this.slideDirection = 'slide-left';
    }
  },

  watch: {
    carouseldata(newdata, olddata) {
      console.log(newdata);
    }
  },
  components: { ArtistCard, Songcard, CarouselSlide }
}

</script>


<template>
  <div class=wrapper>

    <div v-if="this.carouselstate === 'artists' && this.carouseldata.length > 0" class="artists">
      <carousel-slide class="carousel" v-for="(item, index) in carouseldata" :key="index" :number="index">
        <div v-if="index - 1 < 0" class="debug">
          <ArtistCard :name="carouseldata[carouseldata.length - 1].name" :number="carouseldata.length"
            :img="carouseldata[carouseldata.length - 1].images[0].url" class="slide" />
        </div>
        <div v-else>
          <ArtistCard :name="carouseldata[index - 1].name" :number="index" :img="carouseldata[index - 1].images[0].url"
            class="slide" />
        </div>

        <ArtistCard :name="item.name" :number="index + 1" :img="item.images[0].url" class="slide" />
        <ArtistCard :name="carouseldata[((index + 1) % carouseldata.length)].name"
          :number="((index + 1) % carouseldata.length) + 1"
          :img="carouseldata[((index + 1) % carouseldata.length)].images[0].url" class="slide" />

      </carousel-slide>



    </div>



    <div v-if="this.carouselstate === 'songs' && this.carouseldata.length > 0" class="songs">

      <carousel-slide class="carousel" v-for="(item, index) in carouseldata" :key="index" :number="index">



        <div v-if="index - 1 < 0">

          <Songcard :name="carouseldata[carouseldata.length - 1].name" :number="carouseldata.length"
            :album="carouseldata[carouseldata.length - 1].album.name"
            :artist="carouseldata[carouseldata.length - 1].artists[0].name"
            :img="carouseldata[carouseldata.length - 1].album.images[0].url" class="slide desktopview" />

        </div>
        <div v-else>

          <Songcard :name="carouseldata[index - 1].name" :number="index" :album="carouseldata[index - 1].album.name"
            :artist="carouseldata[index - 1].artists[0].name" :img="carouseldata[index - 1].album.images[0].url"
            class="slide desktopview" />

        </div>





        <Songcard :name="item.name" :number="index + 1" :album="item.album.name" :artist="item.artists[0].name"
          :img="item.album.images[0].url" class="slide" />




        <Songcard :name="carouseldata[((index + 1) % carouseldata.length)].name"
          :number="((index + 1) % carouseldata.length) + 1"
          :album="carouseldata[((index + 1) % carouseldata.length)].album.name"
          :artist="carouseldata[((index + 1) % carouseldata.length)].artists[0].name"
          :img="carouseldata[((index + 1) % carouseldata.length)].album.images[0].url" class="slide desktopview" />




      </carousel-slide>

    </div>







    <div class="menuwrapper">
      <div class="menu">
        <img src="../assets/button.png" alt="leftbutton" class="prev" @click="back" />
        <img src="../assets/button.png" alt="rightbutton" class="next" @click="next" />
      </div>
    </div>

    <div class="blend blend1"></div>
    <div class="blend blend2"></div>

  </div>

</template>


<style scoped>




.blend {
  height: 90%;
  width: 500px;
  background: linear-gradient(91.21deg, #EABF6C 0.98%, rgba(234, 191, 108, 0.88) 48.73%, rgba(234, 191, 108, 0) 98.93%);
  position: absolute;
  top: 50px;
}

.blend1 {
 right: -5%;
 transform: rotate(180deg);
}

.blend2 {
  left: -5%;
}


.wrapper{
  height:400px;
  width: 100%;
  
}

.carousel{
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  display: flex;
  flex-direction: row;
  height: 500px;
  width: 100%;
  margin:0;
  padding:0;
}

.next {
  transform: rotate(180deg);
}

img {
  width: 80px;
  height: auto;
  filter: drop-shadow(-2px -2px 4px rgb(0 0 0 / 0.38));
  cursor: pointer;
}

img:active {
  filter: drop-shadow(-2px -2px 4px rgb(0 0 0 / 0));
}

.menuwrapper {
  width:100%;
  position:absolute;
  top: 500px;
  display:flex;
  align-items: center;
  justify-content: center;
  
}

.menu{
display: flex;
flex-direction: row;
align-items:center;
width: 500px;
justify-content: space-between;
}


.slide {
  position:relative;
  left: 27px;
  transform: scale(60%);
  width: 500px;
}

@media screen and (max-width:720px) {

  .desktopview {
    background-color: black;
  }

}

</style>
