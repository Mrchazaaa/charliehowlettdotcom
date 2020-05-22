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
  body, html {
    margin:0; 
    padding:0;
    height: 100%;
    background-color: var(--primary-background);
  }
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: var(--primary-text);
  }
  h2 {
    font-weight: bold;
    font-size: 34px;
    margin-top: 0;
    margin-bottom: $margin-sm;
  }
  h3 {
    font-weight: bold;
    font-size: 2.5rem;
  }
  hr {
      margin-bottom: 0px;
  }
  .border {
    border: 1px solid var(--border-color) !important;
    border-radius: 4px;
  }
  #dark-mode-button {
    width: 100px;
    height: 100px;
    position: absolute;
    right: 10px;
    top: 10px;
    background-color: var(--jumbotron-background);
  }
  .button {
    font-weight: bold;
    color: var(--btn-text);
    background-color: var(--btn-background);
    border: 1px solid var(--btn-active-border);
    transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out, -webkit-box-shadow 0.15s ease-in-out;
  }
  .button:hover {
    color: var(--btn-text);
    background-color: var(--btn-hover-background);
    border: 1px solid var(--btn-background);
  }
</style>
