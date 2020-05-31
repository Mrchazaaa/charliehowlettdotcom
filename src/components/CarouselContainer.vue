<template>
  <Carousel 
    :perPage="1" 
    :autoplay="true"
    :autoplayHoverPause="true"
    :paginationColor="'var(--pagination-color)'"
    :paginationActiveColor="'var(--pagination-active-color)'"
    :paginationPadding="5">
    <Slide>
      <img src="../assets/volunteering-leg.webp" alt="First slide" />
    </Slide>
    <Slide>
      <img src="../assets/volunteering-leg.webp" alt="First slide" />
    </Slide>
    <Slide>
      <img src="../assets/volunteering-leg.webp" alt="First slide" />
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
    methods: {
      onClick(i) {
        this.index = i;
      },
      getCSSVariable(variableName) {
        return getComputedStyle(document.body).getPropertyValue(variableName);
      }
    },
    data: function() {
      return {
        images: [
          'https://placekitten.com/801/800',
          'https://placekitten.com/802/800',
          'https://placekitten.com/803/800',
          'https://placekitten.com/804/800',
          'https://placekitten.com/805/800',
          'https://placekitten.com/806/800',
          'https://placekitten.com/807/800',
          'https://placekitten.com/808/800',
          'https://placekitten.com/809/800',
          'https://placekitten.com/810/800'
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
