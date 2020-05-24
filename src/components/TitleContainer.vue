<template>
  <div id="title-container">
    <!--p5js sketch background-->

    <img id="celestial" :src='require("@/assets/sun.svg")'/>

    <div id='sketch'></div>

    <div id="title">    
      <!--title-->
      <div>
        <h1>Charlie Howlett</h1>
        <span id="dark-theme-btn" class="button">Dark Theme</span>
      </div>

      <!--content pointer-->
      <a id="content-pointer" href="#content-container"><img src="../assets/chevron-bottom.svg"></a>
    
      <img id="mountains" :src="require('@/assets/mountains.svg')"/>

    </div>
  </div>
</template>

<script>
  import {cloudsSketch, setCloudColor} from '../javascript/background.js';
  import styles from '../styles/_variables.scss';

  export default {
    name: 'TitleContainerComponent',
    data() {
      return {
        myp5: null
      }
    },
    mounted() {
      setCloudColor(styles.cloudColorLight);
      this.myp5 = cloudsSketch(document.getElementById('sketch'));

      var chevron = document.querySelector("#content-pointer");
      chevron.onclick = (el) => {
        el.preventDefault();
        document.querySelector(chevron.getAttribute("href")).scrollIntoView({
          behavior: "smooth",
          block: "start",
          inline: "nearest"
        });
      };

      var darkThemeButton = document.querySelector("#dark-theme-btn");
      darkThemeButton.onclick = (el) => {
        var currentTheme = document.querySelector('html').getAttribute('theme');
        var nextTheme = currentTheme == 'dark' ? '' : 'dark';
        
        document.querySelector('html').setAttribute('theme', nextTheme);

        var nextCloudColor = currentTheme == 'dark' ? styles.cloudColorLight : styles.cloudColorDark;
        setCloudColor(nextCloudColor);

        var nextCelestial = currentTheme == 'dark' ? require("@/assets/sun.svg") : require("@/assets/moon.svg");
        document.querySelector('#celestial').setAttribute('src', nextCelestial);

        var nextMountains = currentTheme == 'dark' ? require("@/assets/mountains.svg") : require("@/assets/mountains-dark.svg");
        document.querySelector('#mountains').setAttribute('src', nextMountains);
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
  @media (max-width: $breakpoint-md) {
    #dark-theme-btn {
      float: none !important;
      margin-right: 0px !important;
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
    position: relative;
    margin: 0; 
    z-index: none;
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
    h1 {
      font-size: calc(250% + 40px);
      font-weight: bold;
      font-family: 'Arial';
      margin: 0;
      text-align: center;
      z-index: 2;
      // max-width: 582px;
    }
    span {
      float: right;
      padding: 0.75rem 1.5rem;
      margin-right: $margin-md;
      cursor: pointer;
    }
    div {
      text-align: center;
    }
  }
  #content-pointer {
    width: 100%;
    transition: 1.3s;
    opacity: 0.3;
    height: 100%;
    display: grid;
    align-items: center; 
    z-index: 2;
  }
  #content-pointer:hover {
    opacity: 1;
  }
  #content-pointer img {
    width: 100%;
    height: 5vh;
  }
  #celestial {
    position: absolute;
    top: 10vh;
    right: 30%;
    height: calc(100px + 5vw);
    width: calc(100px + 5vw);
    z-index: 0 !important;
  }
</style>
