// const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  configureWebpack: {
      devtool: 'source-map'
  },
  css: {
    extract: {
        filename: '[name].css',
        chunkFilename: '[name].css',
    },
  },
})
