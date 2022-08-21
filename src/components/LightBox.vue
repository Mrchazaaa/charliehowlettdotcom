<template>
  <div class="grid-container" :style="'grid-template-columns: repeat(' + images.length + ', 1fr);'">
    <div class="grid-item" v-for="image in images" :key="image.index" >
        <img @click="() => showSingle(image.index)" class="grid-image" :src="image.src" />
    </div>
  </div>
  <vue-easy-lightbox
    scrollDisabled
    escDisabled
    moveDisabled
    :visible="visible"
    :imgs="images.map(img => img.src)"
    :index="index"
    @hide="handleHide">
  </vue-easy-lightbox>
</template>

<script>
  import VueEasyLightbox from 'vue-easy-lightbox'

  export default {
    name: "LightBox",
    data: function() {
      let images = [
          require('@/assets/80kmh.webp'),
          require('@/assets/110kmh.webp'),
          require('@/assets/150kmh.webp'),
        ];

      return {
        images: images.map((image, index) => {
            return {
                src: image,
                index: index
            }
        }),
        index: 0,
        visible: false
      };
    },
    components: {
        'vue-easy-lightbox': VueEasyLightbox
    },
    methods: {
      showSingle(index) {
        this.index = index
        this.visible = true
      },
      handleHide() {
        this.visible = false
      }
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
      grid-column: 1;
    }
  }
  .grid-image {
      width: 100%;
      cursor: pointer;
  }
  .grid-container {
      display: grid;
      width: 100%;
   }
   .grid-item {
       width: 100%;
       padding: 5px;
   }
</style>