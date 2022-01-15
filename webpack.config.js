const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const path = require("path")

module.exports = {
    mode:'development',
    entry: './src/DFS.js',
    output: {
        filename: 'DFS.js',
        path:path.resolve(__dirname, 'dist')
    },
    devServer: {
        static: {
            directory: path.join(__dirname, 'dist'),
          },
          compress: true,
          port: 9000,
    },
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: [MiniCssExtractPlugin.loader,"style-loader", "css-loader"],
            }
        ]
    },
    plugins:[new HtmlWebpackPlugin()
    ,
    new MiniCssExtractPlugin()
    ]
    
}