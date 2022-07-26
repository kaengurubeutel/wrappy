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

      next(){
        this.index = (this.index+1)%this.carouseldata.length;
       this.slideDirection = 'slide-right';
      },

      back(){
        this.index--;
        if (this.index < 0){
          this.index=this.carouseldata.length-1;
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

//<ArtistCard v-for="(item, index) in carouseldata" :name="item.name" :number="index+1" :img="item.images[0].url"
         // : key = "(index)" class="slide" />

/**
 *  <Songcard v-for="(item, index) in carouseldata" :name="item.name" :number="index+1" :album="item.album.name"
          :artist="item.artists[0].name" :img="item.album.images[0].url" :key="(index)" class="slide" />
      
 */

</script>


<template>
  <div class=wrapper>

    <div class="carousel" @keydown="checkSlide($event)" tabindex="0">
      <div v-if="this.carouselstate === 'artists' && this.carouseldata.length > 0" class="artists">
        <carousel-slide v-for="(item, index) in carouseldata" :key="index" :number="index">
          <div v-if="index-1 < 0">
            <ArtistCard :name="carouseldata[carouseldata.length-1].name" :number="carouseldata.length"
              :img="carouseldata[carouseldata.length - 1].images[0].url" class="slide" />
          </div>
          <div v-else>
            <ArtistCard :name="carouseldata[index-1].name" :number="index" :img="carouseldata[index - 1].images[0].url"
              class="slide" />
          </div>

          <ArtistCard :name="item.name" :number="index+1" :img="item.images[0].url" class="slide" />
          <ArtistCard :name="carouseldata[((index + 1) % carouseldata.length)].name"
            :number="((index+1)%carouseldata.length)+1"
            :img="carouseldata[((index + 1) % carouseldata.length)].images[0].url" class="slide" />

        </carousel-slide>



      </div>



      <div v-if="this.carouselstate === 'songs' && this.carouseldata.length > 0" class="songs">

        <carousel-slide class="carousel" v-for="(item, index) in carouseldata" :key="index" :number="index">
          <div v-if="index-1 < 0">

            <Songcard :name="carouseldata[carouseldata.length - 1].name" :number="carouseldata.length"
              :album="carouseldata[carouseldata.length-1].album.name"
              :artist="carouseldata[carouseldata.length-1].artists[0].name"
              :img="carouseldata[carouseldata.length-1].album.images[0].url" class="slide" />

          </div>
          <div v-else>

            <Songcard :name="carouseldata[index - 1].name" :number="index" :album="carouseldata[index - 1].album.name"
              :artist="carouseldata[index - 1].artists[0].name" :img="carouseldata[index - 1].album.images[0].url"
              class="slide" />

          </div>


          <Songcard :name="item.name" :number="index+1" :album="item.album.name" :artist="item.artists[0].name"
            :img="item.album.images[0].url" class="slide" />


          <Songcard :name="carouseldata[((index + 1) % carouseldata.length)].name"
            :number="((index+1)%carouseldata.length)+1"
            :album="carouseldata[((index + 1) % carouseldata.length)].album.name"
            :artist="carouseldata[((index + 1) % carouseldata.length)].artists[0].name"
            :img="carouseldata[((index + 1) % carouseldata.length)].album.images[0].url" class="slide" />



        </carousel-slide>

      </div>

      <div class="blend1"></div>
      <div class="blend2"></div>

    </div>


    <div class="menuwrapper">
      <div class="menu">
        <img src="../assets/button.png" alt="leftbutton" class="prev" @click="back" />
        <img src="../assets/button.png" alt="rightbutton" class="next" @click="next" />
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
  transform: scale(75%);
  width: 500px;
}

.menu{
display: flex;
flex-direction: row;
gap: 300px;
}

.menuwrapper{
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  left: -40px;
  top: 600px;

}

.wrapper{
  transform: scale(110%)
}

.carousel {
  display:flex;
  flex-direction: row;
  width:80%;
  height:600px;
  position:absolute;
  left: 10%;
  overflow:hidden;
  justify-content: space-between;
}

</style>
