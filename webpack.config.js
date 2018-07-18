const {
    resolve
} = require('path');



module.exports = {
    entry:  resolve(__dirname, './src/index.js'),
    output: {
        path: resolve(__dirname, './dist'),
        filename: 'index.[chunkhash:8].js'
    },
    module: {
        rules: [{
            test: /\.swf$/,
            use: ['file-loader?name=[name].[hash:8].[ext]&outputPath=/']
        },
        {
            test:/\.js$/,
            exclude: /node_modules/,
            use:"babel-loader"
        }]
    }
}