<template>
  <div class="toggle-list-collection">
    <button v-if="content.title != 'Nav'" type="button" class="toggle-list button">
      {{content.title}}
      <span class="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
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
$(document).ready(function() {
  //setup animations for each toggleable list
  $(".toggle-list")
    .next()
    .hide();
  $(".toggle-list").on("click", function(event) {
    if ($(this).find("span").css( "transform" ) == 'none' ){
      $(this).find("span").css("transform","rotate(90deg)");
    } else {
      $(this).find("span").css("transform","" );
    }
    
    $(this)
      .next()
      .slideToggle("slow");
    $(this).toggleClass("toggle-listClicked");
  });
});

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
.toggle-list-collection {
  margin-bottom: $margin-md;
  span {
    transition: 0.5s;
  }
  .glyphicon {
    float:right
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
