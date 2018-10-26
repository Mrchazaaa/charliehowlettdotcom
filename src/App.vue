<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="big website coming soon"/>
    <CharliesWorld />
    <div class='sketch' id='sketch'></div>
  </div>
</template>


<script>
import sketch from './javascript/background.js'
import p5 from 'p5'

import HelloWorld from './components/HelloWorld.vue'
import CharliesWorld from './components/CharliesWorld.vue'

export default {
  name: 'app',
  components: {
    HelloWorld,
    CharliesWorld
  },
  data() {
    return {
      myp5: null,
    }
  },
  mounted() {
    this.myp5 = new p5(sketch, document.getElementById('sketch'))
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
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
