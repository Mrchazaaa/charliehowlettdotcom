<template>
  <div id="app">
    <div class='sketch' id='sketch'></div>
    <img alt="Vue logo" src="./assets/logo.png"/>
    <HelloWorld msg="big website coming soon"/>
    <CharliesWorld />
    <button type="button" class="btn btn-warning">Warning</button>

    <div class="container">
        <div class="row"> 
            <div class="col-12  col-md-1"></div>
            <div class="col-12 col-md-10">
              2 of 3
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
#sketch {
    width: 100%;
    height: 100%;
    position: absolute;
    left: 0;
    top: 0;
    margin: 0; 
    z-index: -1;
}
#app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
}
body, html {
    margin:0; 
    padding:0;
}
.container{
    width: 100%;
    margin-left: 0;
    margin-right: 0;
    margin:0;
}
.row > div{
    background-color: transparent;
}
.row > div:nth-child(2){
    background-color: #f0ead6;
}
</style>
