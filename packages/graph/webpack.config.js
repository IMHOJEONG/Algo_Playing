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

// Bundle Optimization
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const TerserPlugin = require('terser-webpack-plugin');

const CustomBundleSetting = () => { return new BundleAnalyzerPlugin({
  
    analyzerMode: 'static',
    reportFilename: '../error_note/test.html',
    openAnalyzer: false
  })

};

const htmlNames = ['index', 'DFS'];

const HtmlPlugins = htmlNames.map(name => {
  return new HtmlWebpackPlugin({
    title:`${name}`,
    "minify": {
      collapseWhitespace: true
    },
    hash: true,
    filename: `${name}.html`,
    template: `./src/template/${name}.html`,
    chunks: [`${name}`]
  })
});

module.exports = {
    mode:'development',
    entry: {
      index: './src/pages/Home/index.js',
      DFS: './src/pages/DFS/DFS.js',
    },
    output: {
        filename: devMode ? '[name].js' : '[name].[contenthash].js',
        // filename: '[name].[contenthash].client-bundle.js',
        path:PUBLIC_PATH,
        clean: true,
      },
    devServer: {
        hot: true,
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
            test: /\.webp/,
            type: 'asset/resource'     
           },
          {
            test: /\.svg/,
            type: 'asset/inline'
          },
          {
            test: /\.ttf/,
            type: 'asset/resource'
          },
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
      [new MonacoWebpackPlugin(),
        CustomBundleSetting(),
      ].concat(HtmlPlugins) 
      : 
      [new MiniCssExtractPlugin(),
      new MonacoWebpackPlugin(),
        CustomBundleSetting() 
      ]
      .concat(HtmlPlugins)
    ),
    optimization: {
      minimize: true,
      minimizer: [new TerserPlugin()]
    }
    
}