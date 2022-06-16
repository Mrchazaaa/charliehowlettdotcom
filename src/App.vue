<template>
  <div id="app">
    <PreLoad/>
    <TitleContainerComponent/>
    <ContentContainerComponent/>
    <FooterComponent/>
  </div>
</template>

<script>
  import PreLoad from './components/PreLoad.vue'
  import ContentContainerComponent from './components/ContentContainer.vue';
  import TitleContainerComponent from './components/TitleContainer.vue';
  import FooterComponent from "./components/Footer.vue";
//   (() => import(/* webpackChunkName: "flatly" */ "@/assets/flatly.css"))();
//   (() => import(/* webpackChunkName: "darkly" */ "@/assets/darkly.css"))();

  export default {
    name: 'app',
    components: {
      PreLoad,
      TitleContainerComponent,
      ContentContainerComponent,
      FooterComponent
    },
  }
</script>

<style lang="scss">
  @import "@/styles/_variables.scss";
  @import "@/styles/scss/bootstrap.scss";
  @import "@/styles/flatly.scss";
  @import "@/styles/darkly.scss";

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
