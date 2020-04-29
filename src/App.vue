<template>
  <div id="app">
    <TitleContainerComponent/>
    <ContentContainerComponent/>
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
    color: $primary-text;
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
</style>
