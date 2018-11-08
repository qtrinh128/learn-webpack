const path = require('path');
const miniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    mode: 'production',
    entry: {
        app: './src/app.js'
    },
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
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
                        loader: miniCssExtractPlugin.loader,
                        options: {
                            publicPath: 'style.css'
                        }
                    },
                    'css-loader'
                ],
                test: /\.css$/
            }
        ]
    },
    plugins: [
        new miniCssExtractPlugin({
            filename: "style.css",
            chunkFIlename: "[id].css"
        })
    ]

}