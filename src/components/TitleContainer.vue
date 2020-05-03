<template>
  <div id="title-container">
    <!--p5js sketch background-->
    <div id='sketch'></div>

    <div id="title">    
      <!--title-->
      <h1>Charlie Howlett</h1>

      <!--content pointer-->
      <a id="content-pointer" href="#content"><img src="../assets/chevron-bottom.svg"></a>
    
      <img id="mountains" :src="require('@/assets/mountains.svg')"/>

    </div>
  </div>
</template>

<script>
  import p5 from 'p5';
  import sketch from '../javascript/background.js';

  export default {
    name: 'TitleContainerComponent',
    data() {
      return {
        myp5: null
      }
    },
    mounted() {
      this.myp5 = new p5(sketch, document.getElementById('sketch'));

      var chevron = document.querySelector("#content-pointer");
      chevron.onclick = (el) => {
        el.preventDefault();
        document.querySelector(chevron.getAttribute("href")).scrollIntoView({
          behavior: "smooth",
          block: "start",
          inline: "nearest"
        });
      };
    }
  }
</script>

<style lang="scss">
  @media (max-width: $breakpoint-sm) {
    #content-pointer {
      display: none;
    }
  }
  #title-container {
    height: 100vh;
    background-color: var(--sky-color);
  }
  #mountains {
    position: absolute;
    top: 60vh;
    left: 0;
    width: 100%;
    height: 40vh;
    object-fit: cover;
    object-position: 100% 0;
  }
  #sketch {
    margin: 0; 
    z-index: 0;
    height: 100%;
  }
  canvas {
    height: 100% !important;
  }
  #title {
    display: grid;
    grid-template-columns: 100%; 
    align-items: center; 
    justify-content: center; 
    position: absolute;
    top: 0;
    left: 0;
    height: 100vh;
    width: 100%;
    margin: 0 auto;
    align-items: center;
    justify-items: center;
    grid-template-rows: 80vh 20vh;
  }
  h1 {
    font-size: calc(250% + 40px);
    font-weight: bold;
    font-family: 'Arial';
    margin: 0;
    padding: 0;
    text-align: center;
    // max-width: 582px;
  }
  #content-pointer {
    width: 100%;
    transition: 1.3s;
    opacity: 0.3;
    height: 100%;
    display: grid;
    align-items: center; 
    z-index: 1;
  }
  #content-pointer:hover {
    opacity: 1;
  }
  #content-pointer img {
    width: 100%;
    height: 5vh;
  }
</style>
