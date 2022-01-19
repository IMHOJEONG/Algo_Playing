const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const MonacoWebpackPlugin = require("monaco-editor-webpack-plugin");
const devMode = process.env.NODE_ENV !== "production";
const autoprefixer = require('autoprefixer');


const PnpWebpackPlugin = require(`pnp-webpack-plugin`);
const path = require("path")
const APP_DIR = path.resolve(__dirname, 'src');
const YARN_DIR = path.resolve(__dirname, '.yarn');
const PUBLIC_PATH = path.resolve(__dirname, 'dist');
// const MONACO_DIR = path.resolve(__dirname, './node_modules/monaco-editor');
// const MONACO_DIR = path.resolve(__dirname, '.yarn/cache/monaco-editor-npm-0.31.1-d8d5ee78bb-65be40c557.zip/node_modules/monaco-editor/');

module.exports = {
    mode:'development',
    entry: './src/DFS.js',
    output: {
        filename: '[name].[contenthash].js',
        path:PUBLIC_PATH,
        clean: true
      },
    devServer: {
        static: {
            directory: PUBLIC_PATH,
          },
          compress: true,
          port: 9000,
    },
    resolve: {
      plugins: [
        PnpWebpackPlugin,
      ],
    },
    resolveLoader: {
      plugins: [
        PnpWebpackPlugin.moduleLoader(module),
      ],
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                include: APP_DIR,
                use: [
                  
                  {
                    loader: devMode ? "style-loader" : MiniCssExtractPlugin.loader,
                  }, {
                  loader: 'css-loader',
                }],
              }, {
                test: /\.css$/,
                include: YARN_DIR,
                use: [
                    {
                  loader: 'style-loader',
                }, 
                {
                  loader: 'css-loader',
                }],
              },
              {
                test: /\.scss$/,
                include: APP_DIR,
                use: [
                  {
                    loader: devMode ? "style-loader" : MiniCssExtractPlugin.loader,
                  }, 
                  {
                    loader: 'css-loader'
                  },
                  {
                    loader: 'postcss-loader',
                    options: {
                      postcssOptions: {
                        plugins: [
                          autoprefixer()
                        ]
                      }
                    } 
                  },

                  {
                    loader: 'sass-loader',
                    options: {
                      implementation: require('sass'),
                      webpackImporter: false,
                      sassOptions: {
                        includePaths: ['./.yarn']
                      },
                    }
                  }
                ]
              },

        ]
    },
    plugins: [].concat(
      devMode ? 
      [new HtmlWebpackPlugin({
        title:'Algo Test',
        "minify": {
          collapseWhitespace: true
        },
        hash: true,
        template: './src/DFS.html'
      })
      ,
      new MonacoWebpackPlugin()] 
      : 
      [new HtmlWebpackPlugin({
        title:'Algo Test',
        "minify": {
          collapseWhitespace: true
        },
        hash: true,
        template: './src/DFS.html'
      })
      ,
      new MiniCssExtractPlugin(),
      new MonacoWebpackPlugin(),
      
      ]
    )
    
}