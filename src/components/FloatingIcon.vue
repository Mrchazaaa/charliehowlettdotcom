<template>
  <div v-if="href == null" class="floating-container">
    <img :src="image"/>
  </div>
  <div v-else class="floating-container">
    <a :href="href">
      <img :src="image"/>
    </a>
  </div>
</template>

<script>
  export default {
    name: 'FloatingIcon',
    props: {
      image: {
        required: true,
        type: String
      },
      href: String,
    },
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
  @import "@/styles/_variables.scss";

  .floating-container {
    display: flex;
    align-items: center;
    justify-content: center;
    transition: 0.5s;
    box-sizing: border-box;
    height: 200px;
    a {
      height: 100%;
      width: 100%;
    }
    img {
      transition: 0.5s;
      box-sizing: border-box;
      object-fit: contain;
      width: 100%;
      height: 100%;
      padding: $padding-sm;
    }
    img:hover {
      padding: 0px;
    }
  }
</style>