<template>
  <div id="app">
    <TitleContainerComponent/>
    <ContentContainerComponent/>
    <!-- <div id="dark-mode-button"/> -->
  </div>
</template>

<script>
  import ContentContainerComponent from './components/ContentContainer.vue';
  import TitleContainerComponent from './components/TitleContainer.vue';

  export default {
    name: 'app',
    components: {
      TitleContainerComponent,
      ContentContainerComponent,
    },
  }
</script>

<style lang="scss">
  body, html {
    margin:0; 
    padding:0;
    height: 100%;
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
    margin-bottom: 6px;
  }
  h3 {
    font-weight: bold;
    font-size: 2.5rem;
  }
  hr {
      margin-bottom: 0px;
  }
  .border {
    border: 1px solid var(--border-color);
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
</style>
