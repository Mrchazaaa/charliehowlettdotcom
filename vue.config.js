module.exports = {
  configureWebpack: {
    module: {
      rules: [
        {
          test: /\.css$/,
          exclude: /node_modules/,
          use: [
            'postcss-loader',
            'style-loader',
            {
              loader: 'css-loader',
              options: {
                importLoaders: 1,
              }
            },
          ]
        }
      ]
    }
  }
}
