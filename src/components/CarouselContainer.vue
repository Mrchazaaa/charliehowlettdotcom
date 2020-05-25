<template>
  <Carousel 
    :perPage="1" 
    :navigationEnabled="true"
    :paginationEnabled="false" 
    :autoplay="true"
    :autoplayHoverPause="true">
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
  <!-- <div></div> -->
</template>

<script>
  import { Carousel, Slide } from 'vue-carousel'
  // $(".carousel").carousel();

  export default {
    name: "CarouselContainer",
    components: {
      Carousel,
      Slide
    },
    methods: {
      onClick(i) {
        this.index = i;
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
    // display: none;
  }

  .VueCarousel img {
    width: 100%;
    // display: none;
  }

  // .carousel {
  //   margin-bottom: 10px;
  // }
  // .carousel-item {
  //   position: relative;
  // }
  // .carousel-caption {
  //   background-color: rgba(0,0,0,0.5);
  //   position: absolute;
  //   left: 0;
  //   right: 0;
  //   bottom: 0;
  //   padding: 0;
  //   z-index: 2; /* used to stop carousel caption being shown infront of sidebar */
  // }
  // .carousel-caption p {
  //   margin: $margin-md $margin-sm;
  //   font-weight: bold;
  // }
</style>
