<template>
  <div id="icon-grid">
    <div :class="'col-6 col-md-' + content.width" v-for="entries in content.items" :key="entries.image" >
      <a :href="entries.link">
        <img :src="entries.image"/>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: "IconGrid",
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
#icon-grid {
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  margin: 10px 0px;
}
#icon-grid div {
  display: flex;
  justify-content: center;
  align-items: center;
}
#icon-grid img {
  height: 100px;
  margin-top: 10px;
  margin-bottom: 10px;
  border-radius: 10px;
  transition: 0.5s;
}
#icon-grid img:hover {
  margin-top: 0px;
  margin-bottom: 0px;
  height: 120px;
  transition: 0.5s;
}
</style>
