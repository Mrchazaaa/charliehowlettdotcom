<template>
  <div id="app">
    
    <SideBarComponent/>

    <div id="page-content-wrapper">
        <!--p5 sketch background-->
        <div id='sketch'></div>
        
        <!--Toggle sidebar button-->
        <button type="button" id="menu-toggle" class="btn btn-light"><img src="./assets/align-left.svg"></button>

        <!--Title-->
        <h1>Charles Howlett</h1>

        <!--Page content-->
        <MainComponent/>
    </div>
  </div>
</template>

<script>
    import MainComponent from './components/MainComponent.vue';
    import SideBarComponent from './components/SideBar.vue';
    import p5 from 'p5';
    import sketch from './javascript/background.js';

    export default {
      name: 'app',
      components: {
        MainComponent,
        SideBarComponent
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
h1 {
    font-size: 550%;
    font-weight: bold;
    font-family: 'Montserrat', sans-serif;
    margin-bottom: 35px;
    background-color: transparent;
    position: absolute;
    top: 30vh;
    text-align: center;
    width: 100%;
}
body, html {
    margin:0; 
    padding:0;
    height: 100%;
    background-color: #93C178;
}
#app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
}
#menu-toggle {
    position: fixed;
    top: 10px;
    left: 10px;
    z-index: 2;
    padding: 5px;
    width: 35px;
    height: 35px;
}
#sketch {
    margin: 0; 
    z-index: 0;
}
.container{
    width: 100%;
    position: absolute;
    top: 100vh;
    left: 0px;
    background-color: #f8f9fa;
}
</style>
