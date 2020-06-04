<template>
  <div id="gallery">
    <gallery 
      :images="images" 
      :index="index" 
      @close="index = null"
      :options="{
        fullScreen: false,
        hidePageScrollbars: false}"></gallery>
    <div
      class="image"
      v-for="(image, imageIndex) in images"
      :key="imageIndex"
      @click="index = imageIndex">
      <img class="img" :src="image"/>
      </div>
  </div>
</template>

<script>
  import VueGallery from 'vue-gallery';

  export default {
    name: "LightBox",
    data: function() {
      return {
        images: [
          require('@/assets/80kmh.png'),
          require('@/assets/110kmh.png'),
          require('@/assets/150kmh.png'),
        ],
        index: null
      };
    },
    components: {
      'gallery': VueGallery
    }
  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
  @import "@/styles/_variables.scss";

  #gallery {
    margin-bottom: $margin-md;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: $margin-md;
    & > .image {
      grid-column: span 1;
    }
  }
  .img {
    width: 100%;
    // height: 200px;
  }
</style>