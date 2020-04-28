<template>
  <div>
    <!--p5js sketch background-->
    <div id='sketch'></div>

    <div id="title-container">    
      <!--title-->
      <h1>Charlie Howlett</h1>

      <!--content pointer-->
      <a id="content-pointer" href="#page-container"><img src="../assets/chevron-bottom.svg"></a>
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
  #sketch {
    margin: 0; 
    z-index: 0;
    height: 100vh;
  }
  #title-container {
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
    grid-template-rows: 75vh 25vh;
  }
  h1 {
    font-size: calc(250% + 40px);
    font-weight: bold;
    font-family: 'Montserrat', sans-serif;
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
  }
  #content-pointer:hover {
    opacity: 1;
  }
  #content-pointer img {
    width: 100%;
    height: 5vh;
  }
</style>
