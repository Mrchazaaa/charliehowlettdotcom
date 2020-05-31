<template>
  <div class="toggle-list-collection">
    <button @click="toggleList" type="button" class="toggle-list btn btn-primary btn-lg btn-block">
      {{content.title}}
      <svg ref="toggle-list-icon" class="bi bi-chevron-right" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/>
      </svg>
    </button>
    <ul ref="toggle-list" class="list-group">
      <li class="list-group-item d-flex justify-content-between align-items-center" v-for="entries in content.items" :key="entries.text">
        <p>{{entries.text}}</p>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: "ToggleList",
    props: {
      content: {
        type: Object,
        required: true
      }
    },
    methods: {
      toggleList() {
        const slideDown = function (element, icon) {
          element.style.height = `${element.scrollHeight}px`;
          icon.setAttribute("style", "transform: rotate(90deg");
        }
        
        const slideUp = function (element, icon) {
          element.style.height = '0px';
          icon.setAttribute("style", "transform: none");
        }

        var icon = this.$refs['toggle-list-icon'];
        var scrollable = this.$refs['toggle-list'];
        scrollable.style.height == '0px' || !scrollable.style.height 
          ? slideDown(scrollable, icon) : slideUp(scrollable, icon);
      }
    },
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
    }
    button {
      text-align: left;
      padding: $padding-sm !important;
      font-size: 14px;
      width: 100%;
      z-index: 5;
      position: relative;
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
    }
    .list-group {
      transition:height 0.75s ease-out;
      height:0;
      overflow:hidden;
    }
  }
</style>
