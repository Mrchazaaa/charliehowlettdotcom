<template>
  <div id="app">
    <div class='sketch' id='sketch'></div>
    <img alt="Vue logo" src="./assets/logo.png"/>
    <HelloWorld msg="big website coming soon"/>
    <CharliesWorld />
    <button type="button" class="btn btn-warning">Warning</button>
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

        let jqueryScript = document.createElement('script');
        jqueryScript.setAttribute('src', 'https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js');
        document.head.appendChild(jqueryScript);

        let bootStrapCSS = document.createElement('link');
        bootStrapCSS.setAttribute('rel', 'stylesheet');
        bootStrapCSS.setAttribute('href', 'https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css');
        document.head.appendChild(bootStrapCSS);

        let bootStrapScript = document.createElement('script');
        bootStrapScript.setAttribute('src', 'https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js');
        document.head.appendChild(bootStrapScript);
      }
    }
</script>

<style>
body, html {
    margin:0; 
    padding:0;
}
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
  /* margin-top: 60px; */
}
</style>
