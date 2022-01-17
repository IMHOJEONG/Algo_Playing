const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const MonacoWebpackPlugin = require("monaco-editor-webpack-plugin");
const path = require("path")
const APP_DIR = path.resolve(__dirname, './src');
const MONACO_DIR = path.resolve(__dirname, './node_modules/monaco-editor');

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
                test: /\.css$/,
                include: APP_DIR,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                      },{
                  loader: 'style-loader',
                }, {
                  loader: 'css-loader',
                  options: {
                    modules: true,
                    namedExport: true,
                    localIdentName: '[name]-[local]-[hash:base64:5]',
                  },
                }],
              }, {
                test: /\.css$/,
                include: MONACO_DIR,
                use: [
                    {
                  loader: 'style-loader',
                }, 
                {
                  loader: 'css-loader',
                }],
              },
              
            
        ]
    },
    plugins:[new HtmlWebpackPlugin()
    ,
    new MiniCssExtractPlugin(),
    new MonacoWebpackPlugin()
    ]
    
}