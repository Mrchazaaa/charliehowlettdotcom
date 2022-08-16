<template>
    <div class="carousel">
        <swiper
            class="swiper"
            :style="{
                '--swiper-navigation-color': '#fff',
                '--swiper-pagination-color': '#fff',
            }"
            :navigation="true"
            :loop="true"
            :autoplay="{
                    delay: 5000,
                    disableOnInteraction: false
                }"
            :modules="modules">
            <swiper-slide
                v-for="image in images"
                :key="image">
                <img :src="image"/>
            </swiper-slide>
        </swiper>
    </div>
</template>

<script>
  import { Swiper, SwiperSlide } from 'swiper/vue';
  import { Navigation, Autoplay } from 'swiper';
  import 'swiper/css';
  import 'swiper/css/navigation';
  import 'swiper/css/autoplay';

  export default {
    name: "CarouselContainer",
    components: {
      Swiper,
      SwiperSlide
    },
    setup() {
        return {
            modules: [Navigation, Autoplay]
        }
    },
    data: function() {
      return {
        images: [
          require('@/assets/greenery.webp'),
          require('@/assets/cybersoc-leg.webp'),
          require('@/assets/raleigh.webp'),
          require('@/assets/band-leg.webp'),
        ],
        index: 0,
        options: {
        }
      }
    }
  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
  @import "@/styles/_variables.scss";
  .swiper {
    display: inline-grid;
    width: 100%;
  }

  .carousel {
    width: 100%;
    display: grid
  }

  .swiper-slide {
    display: inline-grid;
    text-align: center;
    font-size: 18px;
    background: #fff;
  }

  .swiper-slide img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  img {
    object-fit: cover;
    object-position: center;
    width: 100%;
  }
</style>
