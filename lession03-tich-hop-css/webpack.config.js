const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const config = {
    mode: 'production',
    entry: {
        app: './src/app.js'
    },
    output: {
        filename: 'bunble.js',
        path: path.resolve(__dirname, 'build')
    },
    module: {
        rules: [
            {
                use: 'babel-loader',
                test: /\.js$/
            },
            {
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                        options: {
                          // you can specify a publicPath here
                          // by default it use publicPath in webpackOptions.output
                          publicPath: 'style.css'
                        }
                      },
                      "css-loader"
                ],
                test: /\.css$/
            }
        ]
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: "[name].css",
            chunkFilename: "[id].css"
        })
    ]
}

module.exports = config;