<template>
  <!--contact Information-->
    <div id="footer" class="border">
      <div>
        <IconGridComponent
          :items="[{width: 3, image: require('@/assets/github.svg'), link: 'https://github.com/Mrchazaaa/'},
                  {width: 3, image: require('@/assets/linkedin.svg'), link: 'https://www.linkedin.com/in/charles-howlett-383b26155/'},
                  {width: 3, image: require('@/assets/facebook.svg'), link: 'https://www.facebook.com/charlie.howlett.1'},
                  {width: 3, image: require('@/assets/email.svg'), link: 'mailto:charlie.howlett@live.co.uk'}]"
          :rowWidth="12" />
      </div>
    </div>
</template>

<script>
  import IconGridComponent from "./IconGrid.vue";

  export default {
    name: "Footer",
    components: {
      IconGridComponent,
    },
  };
</script>

<style lang="scss">
  @import "@/styles/_variables.scss";

  #footer {
    padding: $padding-sm 0px;
    background-color: var(--jumbotron-background);
    display: grid;
    justify-content: center;
    & > div {
      max-width: $breakpoint-xl !important;
      width: 100%;
    }
    /deep/ .floating-container {
      height: 75px !important;
    }
  }
</style>
