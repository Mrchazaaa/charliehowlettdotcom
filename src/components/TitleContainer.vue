<template>
  <div id="title-container">

    <div id="celestial"></div>

    <div id='sketch'></div>

    <div id="title">    
      <div>
        <h1>Charlie Howlett</h1>
        <button @click="themeToggle" id="dark-theme-btn" type="button" class="btn btn-primary">Dark Theme</button>
      </div>

      <div id="content-pointer">
        <svg 
          class="bi bi-chevron-down" 
          width="1em" 
          height="1em" 
          viewBox="0 0 16 16" 
          fill="currentColor" 
          xmlns="http://www.w3.org/2000/svg"
          @click="makeScrollSmooth" 
          href="#content-container">
          <path fill-rule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"/>
        </svg>
      </div>

      <div id="mountains"></div>

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
    },
    methods: {
      themeToggle() {
        var currentTheme = document.getElementById('style-sheet').getAttribute('href');
        var nextStyleSheet, nextCloudColor, nextTheme; 

        if (currentTheme == "darkly.css") {
          //current theme is dark, next is light        
          nextCloudColor = styles.cloudColorLight;
          nextStyleSheet = "";
          nextTheme = '';
        }
        else {
          //current theme is light, next is dark
          nextCloudColor = styles.cloudColorDark;
          nextStyleSheet = "darkly.css";
          nextTheme = 'dark';
        }

        setCloudColor(nextCloudColor);
        document.getElementById('style-sheet').setAttribute("href", nextStyleSheet);
        document.querySelector('html').setAttribute('theme', nextTheme);
      },
      makeScrollSmooth(event) {
        var chevron = event.target;

        document.querySelector(chevron.getAttribute("href")).scrollIntoView({
          behavior: "smooth",
          block: "start",
          inline: "nearest"
        });
      }
    }
  }
</script>

<style lang="scss">
  @import "@/styles/_variables.scss";

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
    object-position: 100% 0;
    background-image: var(--mountains);
    background-size: cover;
    background-repeat: no-repeat;
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
    cursor: pointer;
  }
  #content-pointer:hover {
    opacity: 1;
  }
  #content-pointer svg {
    width: 100%;
    height: 5vh;
    fill: black;
  }
  #celestial {
    position: absolute;
    top: 10vh;
    right: 30%;
    height: calc(100px + 5vw);
    width: calc(100px + 5vw);
    z-index: 0 !important;
    object-position: 100% 0;
    background-image: var(--celestial);
    background-size: cover;
    background-repeat: no-repeat;
  }
</style>
