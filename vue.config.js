module.exports = {
  baseUrl: './',
  css: {
    loaderOptions: {
      sass: {
        prependData: `@import "@/externalcss/colors.scss";`
      }
    }
  }
}
