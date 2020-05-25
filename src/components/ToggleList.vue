<template>
  <div class="toggle-list-collection">
    <button v-if="content.title != 'Nav'" type="button" class="toggle-list button">
      {{content.title}}
      <svg class="bi bi-chevron-right" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/>
      </svg>
    </button>
    <button
      v-if="content.title == 'Nav'"
      type="button"
      class="button toggle-list"
    >{{content.title}}</button>
    <ul class="list-group border">
      <li class="list-group-item" v-for="entries in content.items" :key="entries.text">
        <a
          v-if="entries.link != ''"
          :href="entries.link"
          role="button"
          class="toggle-list"
        >{{entries.text}}</a>
        <p v-if="entries.link == ''">{{entries.text}}</p>
      </li>
    </ul>
  </div>
</template>

<script>
  // import $ from 'jquery';

  // $(document).ready(function() {
  //   //setup animations for each toggleable list
  //   $(".toggle-list")
  //     .next()
  //     .hide();
  //   $(".toggle-list").on("click", function(event) {
  //     if ($(this).find("svg").css( "transform" ) == 'none' ){
  //       $(this).find("svg").css("transform","rotate(90deg)");
  //     } else {
  //       $(this).find("svg").css("transform","" );
  //     }
      
  //     $(this)
  //       .next()
  //       .slideToggle("slow");
  //     $(this).toggleClass("toggle-listClicked");
  //   });
  // });

export default {
  name: "ToggleList",
  props: {
    content: {
      type: Object,
      required: true
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
  @import "@/styles/_variables.scss";

  .toggle-list-collection {
    margin-bottom: $margin-md;
    svg {
      transition: 0.5s;
      float: right;
      // position: relative;
      // top: 1px;
      // display: inline-block;
      // font-family: 'Glyphicons Halflings';
      // font-style: normal;
      // font-weight: 400;
      // line-height: 1;
      // -webkit-font-smoothing: antialiased;
      // -moz-osx-font-smoothing: grayscale;
    }
    button {
      text-align: left;
      padding: $padding-sm !important;
      font-size: 14px;
      width: 100%;
    }
    .toggle-list {
      cursor: pointer;
    }
    li {
      padding: $padding-sm !important;
    }
    p {
      margin-bottom: 0;
      font-weight: bold;
    }
    .list-group-item {
      border: none;
      background-color: transparent !important;
    }
    .list-group {
      background-color: var(--list-background);
      border-top-left-radius: 0px;;
      border-top-right-radius: 0px;;
    }
  }
</style>
