const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    configureWebpack: {
        devtool: 'source-map',
        plugins: [
            // new MiniCssExtractPlugin({
            //     // filename: (pathdata, assetinfo) => {
            //     //     console.log("cheeeez");
            //     //     return '[name].css';
            //     // },
            //     // filename: 'chees.css',
            //     // chunkFilename: 'che.css',
            //     filename: '[name].css',
            //     chunkFilename: '[id].css',
            // })
        ]
    },
    css: {
        extract: {
            filename: '[name].css',
            chunkFilename: '[name].css',
        },
        loaderOptions: {
            css: {
                // options here will be passed to css-loader
                // localIdentName: '[path][name]__[local]--[hash:base64:5]',
            },
        }
    },
    // chainWebpack: config => {
    //     config.plugin('css').use(MiniCssExtractPlugin, [{
    //         filename: '[name].css',
    //         chunkFilename: '[id].css',
    //     }]);
    //     config.module.rule('css')
    //     .test(/\.css$/)
    //     .use('mini-css')
    //     .loader(MiniCssExtractPlugin.loader)
    //     .options({
    //             publicPath: '../',
    //             hmr: process.env.NODE_ENV === 'development',
    //         })
    //         .end()
    //         .use('css-loader')
    //         .loader('css-loader');
    // }
};
