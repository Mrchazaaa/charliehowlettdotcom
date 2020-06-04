<template>
  <Carousel 
    :perPage="1" 
    :autoplay="true"
    :autoplayHoverPause="true"
    :paginationColor="'var(--pagination-color)'"
    :paginationActiveColor="'var(--pagination-active-color)'"
    :paginationPadding="5">
    <Slide v-for="image in images" :key="image">
      <img :src="image" alt="First slide" />
    </Slide>
  </Carousel>
</template>

<script>
  import { Carousel, Slide } from 'vue-carousel'

  export default {
    name: "CarouselContainer",
    components: {
      Carousel,
      Slide
    },
    data: function() {
      return {
        images: [
          require('@/assets/volunteering-leg.webp'),
          require('@/assets/cybersoc-leg.webp'),
          require('@/assets/raleigh.webp'),
          require('@/assets/band-leg.webp'),
        ],
        index: 0
      }
    }
  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
  @import "@/styles/_variables.scss";
  
  .VueCarousel {
    width: 100%;
  }

  .VueCarousel-dot {
    margin-top: $margin-sm !important;
  }

  .VueCarousel img {
    width: 100%;
    // display: none;
  }

  .VueCarousel-navigation-prev .VueCarousel-navigation-next {
    padding: 0 8px !important;
    color: white !important;
    transform: none !important;
  }
</style>
