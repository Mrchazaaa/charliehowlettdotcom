<template>
  <!-- <div id="gallery"> -->
    <!-- <a
      class="example-image-link"
      href="img/80kmh.919f9483.png"
      data-lightbox="example-set"
      data-title="Calculated vehicle longitudinal velocity (red) vs actual vehicle longitudinal velocity (blue), when emergency braking is initiated at 80kmh."
    >
      <img class="example-image" :src="require('@/assets/80kmh.png')" alt />
    </a>
    <a
      class="example-image-link"
      href="img/110kmh.11d3e1ce.png"
      data-lightbox="example-set"
      data-title="Calculated vehicle longitudinal velocity (red) vs actual vehicle longitudinal velocity (blue), when emergency braking is initiated at 110kmh."
    >
      <img class="example-image" :src="require('@/assets/110kmh.png')" alt />
    </a>
    <a
      class="example-image-link"
      href="img/150kmh.f85d336b.png"
      data-lightbox="example-set"
      data-title="Calculated vehicle longitudinal velocity (red) vs actual vehicle longitudinal velocity (blue), when emergency braking is initiated at 150kmh."
    >
      <img class="example-image" :src="require('@/assets/150kmh.png')" alt />
    </a> -->
    <silent-box id="gallery" :gallery="gallery"><!-- your additional content --></silent-box>

  <!-- </div> -->
</template>

<script>
// import CoolLightBox from 'vue-cool-lightbox';
// import 'vue-cool-lightbox/dist/vue-cool-lightbox.min.css'

export default {
  name: "LightBox",
  data: function() { 
    return {
      gallery: [
        {
          src: require('@/assets/80kmh.png'),
          description: 'Star Night Sky Ravine by Mark Basarab, from Unsplash.',
          alt: 'Blue starry night photo.',
          thumbnailWidth: '100%'
        },
        {
          src: require('@/assets/110kmh.png'),
          description: 'Corno Nero, Italy by Luca Zanon, from Unsplash.',
          alt: 'Landscape photo of mountain with fog.',
          thumbnailWidth: '100%'
        },
        {
          src: require('@/assets/150kmh.png'),
          description: 'Remote forest path in Gävle, Sweden by Geran de Klerk, from Unsplash.',
          alt: 'Low angle photo of pine trees.',
          thumbnailWidth: '100%'
        },
      ]
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
  @import "@/styles/_variables.scss";
  
  #gallery {
    margin-bottom: $margin-md;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: $margin-md;

    .silentbox-item {
      grid-column: span 1;
    }
  }
</style>
