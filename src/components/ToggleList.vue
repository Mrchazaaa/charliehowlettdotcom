<template>
  <div class="toggle-list-collection">
    <button v-if="content.title != 'Nav'" type="button" class="toggle-list btn btn-light btn-block">
      {{content.title}}
      <span class="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
    </button>
    <button
      v-if="content.title == 'Nav'"
      type="button"
      class="toggle-list btn btn-light btn-lg btn-block"
    >{{content.title}}</button>
    <ul class="list-group">
      <li class="list-group-item" v-for="entries in content.items" :key="entries.text">
        <a
          v-if="entries.link != ''"
          :href="entries.link"
          role="button"
          class="toggle-list btn btn-light btn-block"
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
    if ($(this).find("span").hasClass("glyphicon-chevron-right")) {
      $(this).find("span").removeClass("glyphicon-chevron-right");
      $(this).find("span").addClass("glyphicon-chevron-down");
    } else {
      $(this).find("span").removeClass("glyphicon-chevron-down");
      $(this).find("span").addClass("glyphicon-chevron-right");
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
<style scoped>
.glyphicon {
  float:right
}
#top-sidebar button,
#top-sidebar a {
  padding: 10px 15px;
  font-size: 18px;
  margin: 0 !important;
  text-align: center !important;
  font-weight: bold;
}
#top-sidebar button {
  /* color: white !important; */
  background-color: #EAEAEA;
}
#top-sidebar li {
  padding: 0 !important;
  margin: 0 7.5px;
}
.btn-light {
  text-align: left;
  padding: 8px !important;
  font-size: 14px;
  font-weight: bold;
  background-color: #f2f2f2;
}
.toggle-list-collection {
  margin-bottom: 10px;
}
.toggle-list {
  cursor: pointer;
}
li {
  padding: 8px !important;
}
p {
  margin-bottom: 0;
}
</style>
