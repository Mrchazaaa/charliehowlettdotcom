<template>
    <!--contact Information-->
    <div id="footer" class="jumbotron">
        <div id="footer-container" :style="'grid-template-columns: repeat(' + icons.length + ', 1fr);'">
            <FloatingIcon
            v-for="icon in icons"
            :key="icon.image"
            :image="icon.image"
            :href="icon.link"
            :rowHeight=100
            :style="'grid-column: span 1;'"/>
        </div>
    </div>
</template>

<script>
  import FloatingIcon from "./FloatingIcon.vue";

  export default {
    name: "ContentFooter",
    data: function() {
        return {
            icons: [
                {image: require('@/assets/github.svg'), link: 'https://github.com/Mrchazaaa/'},
                {image: require('@/assets/linkedin.svg'), link: 'https://www.linkedin.com/in/charles-howlett-383b26155/'}
            ]
        };
    },
    components: {
      FloatingIcon,
    },
  };
</script>

<style lang="scss">
  @import "@/styles/_variables.scss";

  @media (max-width: $breakpoint-sm) {
    #footer-container {
      padding: 10px 0px !important;
    }
  }

  #footer-container {
    padding: 10px 100px;
    max-width: $breakpoint-xl !important;
    margin-left: auto;
    margin-right: auto;
    display: grid;
    justify-content: center;
    grid-template-rows: 100px;

    img {
      box-sizing: border-box;
      object-fit: contain;
      height: 100%;
    }
  }
  #footer {
    padding: 0;
  }
  .footer-icon {
    grid-column: span 1;
  }
</style>
