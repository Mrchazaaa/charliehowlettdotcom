<template>
  <div id="app">
    <TitleContainerComponent/>
    <ContentContainerComponent/>
    <FooterComponent/>
  </div>
</template>

<script>
  import ContentContainerComponent from './components/ContentContainer.vue';
  import TitleContainerComponent from './components/TitleContainer.vue';
  import FooterComponent from "./components/Footer.vue";

  export default {
    name: 'app',
    components: {
      TitleContainerComponent,
      ContentContainerComponent,
      FooterComponent
    },
  }
</script>

<style lang="scss">
  @import "~@/styles/flatly.css";
  @import "~@/styles/_variables.scss";

  body, html {
    margin:0; 
    padding:0;
    height: 100%;
  }
  hr {
      margin-bottom: 0px;
  }
  .border {
    border-radius: 4px;
  }
</style>
