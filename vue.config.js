module.exports = {
  baseUrl: './',
  css: {
    loaderOptions: {
      sass: {
        prependData: `@import "@/styles/variables.scss";`
      }
    }
  }
}
