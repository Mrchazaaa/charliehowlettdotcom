<template>
  <div id="icon-grid" :style="'justify-content: ' + justify + ';'">
    <div v-for="item in items" 
        :class="!item.width ? '' : 'col-' + item.width" 
        :key="item.image" >
      <a :href="item.link">
        <img :src="item.image"/>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: "IconGrid",
  props: {
    items: {
      type: Array,
      required: true
    },
    justify: {
      type: String
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
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
  #icon-grid a {
    display: flex;
    justify-content: center;
    width: 100%;
  }
  #icon-grid img:hover {
    margin-top: 0px;
    margin-bottom: 0px;
    height: 120px;
    transition: 0.5s;
  }
</style>
