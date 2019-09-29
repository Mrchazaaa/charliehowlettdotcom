<template>
  <div class="toggle-list-collection">
    <!-- <p v-if="content.title != 'Nav'" class="toggle-list">{{content.title}}</p> -->
    <button v-if="content.title != 'Nav'" type="button" class="toggle-list btn btn-light btn-block">{{content.title}}</button>
    <button v-if="content.title == 'Nav'" type="button" class="toggle-list btn btn-secondary btn-block">{{content.title}}</button>
    <ul class="list-group">
      <li class="list-group-item" v-for="entries in content.items" :key="entries.text">
        <a v-if="entries.link != ''" :href="entries.link" role="button" class="toggle-list btn btn-light btn-block">{{entries.text}}</a>
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
#topSideBar {
  font-weight: bold;
}
#topSideBar button {
  color: white !important;
}
#topSideBar li {
  padding: 0;
  margin: 0 7.5px;
}
#topSideBar button, #topSideBar a {
  padding: 10px 15px;
  font-size: 18px;
  margin: 0 !important;  
}
.btn-light {
  text-align: left;
  padding: .75rem 1.25rem;
  font-size: 14px;
  font-weight: bold;
}
.toggle-list-collection {
  margin-bottom: 10px;
}
.toggle-list {
  cursor: pointer;
}
p {
  margin-bottom: 0;
}
</style>
