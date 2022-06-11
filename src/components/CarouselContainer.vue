<template>
  <div class="VueCarousel agile">
    <agile :options="options">
        <div class="slide" v-for="image in images" :key="image">
            <img :src="image"/>
        </div>
        <template v-slot:prevButton><i class="fas fa-chevron-left">&lt;</i></template>
        <template v-slot:nextButton><i class="fas fa-chevron-right">&gt;</i></template>
    </agile>
  </div>
</template>

<script>
  import { VueAgile } from 'vue-agile';

  export default {
    name: "CarouselContainer",
    components: {
      agile: VueAgile,
    },
    data: function() {
      return {
        images: [
          require('@/assets/volunteering-leg.webp'),
          require('@/assets/cybersoc-leg.webp'),
          require('@/assets/raleigh.webp'),
          require('@/assets/band-leg.webp'),
        ],
        index: 0,
        options: {
            responsive: [
                {
                    breakpoint: 600,
                    settings: {
                        dots: false
                    }
                },

                {
                    breakpoint: 900,
                    settings: {
                        navButtons: true,
                        dots: true,
                        infinite: true
                    }
                }
            ]
        }
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

  .slide {
      width: 100%;
  }

  .slide img {
      width: 100%;
  }

  .agile {
    display: grid;
    width: 100%;
  }

  .agile__nav-button {
    background: transparent;
    border: none;
    color: #fff;
    cursor: pointer;
    font-size: 24px;
    height: 100%;
    position: absolute;
    top: 0;
    transition-duration: 0.3s;
    width: 80px;
    }
    .agile__nav-button:hover {
    background-color: rgba(0, 0, 0, 0.5);
    opacity: 1;
    }
    .agile__nav-button--prev {
    left: 0;
    }
    .agile__nav-button--next {
    right: 0;
    }
    .agile__dots {
    bottom: 10px;
    left: 50%;
    position: absolute;
    transform: translateX(-50%);
    }
    .agile__dot {
    margin: 0 10px;
    }
    .agile__dot button {
    background-color: transparent;
    border: 1px solid #fff;
    border-radius: 50%;
    cursor: pointer;
    display: block;
    height: 10px;
    font-size: 0;
    line-height: 0;
    margin: 0;
    padding: 0;
    transition-duration: 0.3s;
    width: 10px;
    }
    .agile__dot--current button, .agile__dot:hover button {
    background-color: #fff;
    }
</style>
