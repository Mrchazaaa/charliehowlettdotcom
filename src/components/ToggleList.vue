<template>
  <div class="toggle-list-collection">
    <p class="toggle-list list-group-item">{{content.title}}</p>
    <ul class="list-group">
      <li class="list-group-item" v-for="entries in content.items" :key="entries.text">
        <a v-if="entries.link != ''" :href="entries.link">{{entries.text}}</a>
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
#topSideBar ul li {
  background-color: #eaeaea;
  text-align: center;
  padding: 0;
  margin: 0;
  border: 1px solid #000;
  border-top: none;
}
#topSideBar ul li a:hover {
  background-color: #596475;
  cursor: pointer;
  color: #fff;
}
#topSideBar p {
  font-weight: bold;
  padding: 5px 15px 5px 15px;
  text-align: center;
  font-size: 26px;
  background-color: #596475;
  color: #fff;
  margin: 0;
  border: 1px solid #000;
  border-left-left-radius: 0px;
  border-left-left-radius: 0px;
}
#topSideBar a {
  display: block;
  color: #2c3e50;
  padding: 10px 15px 10px 15px;
  font-size: 18px;
  text-decoration: none;
}
p {
  margin-bottom: 0;
}
.toggle-list-collection p:first-of-type {
  margin-top: 0px;
}
.toggle-list-collection {
  margin-bottom: 10px;
}
.toggle-list {
  cursor: pointer;
  margin: 10px 0 0 0;
  /* margin: 0 0 10px 0;   */
  background-color: #f9f9f9;
}
.list-group-item {
  background-color: #f9f9f9;
}
.toggle-list:hover {
  background-color: #eaeaea;
}
.toggle-listClicked {
  background-color: #eaeaea;
  margin-bottom: 0;
}
</style>
