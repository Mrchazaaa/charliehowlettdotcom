<template>
  <div id="app">
    <div class='sketch' id='sketch'></div>
    <div class="container">
        <div class="row"> 
            <div class="col-12  col-md-1"></div>
            <div class="col-12 col-md-10" id="content-container">
                <img alt="Vue logo" src="./assets/logo.png"/>
                <HelloWorld msg="big website coming soon"/>
                <CharliesWorld />
                <button type="button" class="btn btn-warning">Warning</button>
            </div>
            <div class="col-12 col-md-1" style="background-color: transparent;"></div>
        </div>
    </div>

  </div>
</template>

<script>
    import HelloWorld from './components/HelloWorld.vue';
    import CharliesWorld from './components/CharliesWorld.vue';
    import p5 from 'p5';
    import sketch from './javascript/background.js';

    export default {
      name: 'app',
      components: {
        HelloWorld,
        CharliesWorld
      },
      data() {
        return {
          myp5: null
        }
      },
      mounted() {
        this.myp5 = new p5(sketch, document.getElementById('sketch'));
      }
    }
</script>

<style>
body, html {
    margin:0; 
    padding:0;
    height: 100%;
    background-color: #93C178;
}
#sketch {
    margin: 0; 
    z-index: 0;
}
#app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
}
.container{
    width: 100%;
    margin-left: 0;
    margin-right: 0;
    margin-top: -400px;
    margin-bottom: 5px;
}
.row > div{
    background-color: transparent;
}
#content-container{
    background-color: #f0ead6;
    padding: 10px;
}
</style>
