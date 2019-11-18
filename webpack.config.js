/*jshint esversion: 8 */

const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
    entry: ['babel-polyfill', './src/js/index.js'],
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'js/bundle.js',
        publicPath: '/'
    },
    devServer: {
      contentBase: path.join(__dirname, 'dist')
    },
    
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /(node_modules)/,
                use: {
                    loader: 'babel-loader'
                }
            },
            {
                // Apply rule for .sass, .scss or .css files
                test: /\.(sa|sc|c)ss$/,
          
                // Set loaders to transform files.
                // Loaders are applying from right to left(!)
                // The first loader will be applied after others
                use: [
                        {
                            // After all CSS loaders we use plugin to do his work.
                            // It gets all transformed CSS and extracts it into separate
                            // single bundled file
                            loader: MiniCssExtractPlugin.loader
                        }, 
                       {
                         // This loader resolves url() and @imports inside CSS
                         loader: "css-loader",
                       },
                       {
                         // Then we apply postCSS fixes like autoprefixer and minifying
                         loader: "postcss-loader"
                       },
                       {
                         // First we transform SASS to standard CSS
                         loader: "sass-loader",
                         options: {
                           implementation: require("sass")
                         }
                       }
                     ]
            },
            {
                //  Rule for images
                test: /\.(png|jpe?g|gif|svg)$/,
                use: [
                        'file-loader?name=[name].[ext]&outputPath=img/' // be careful, it is very important if you use an image directly on the HTML page 
                     ]
            },
            {
                // Apply rule for fonts files
                test: /\.(woff|woff2|ttf|otf|eot)$/,
                use: [
                       {
                         // Using file-loader too
                         loader: "file-loader",
                         options: {
                           outputPath: 'fonts'
                         }
                       }
                     ]
            }
        ]
    },
    plugins: [

      new HtmlWebpackPlugin({
          filename: 'index.html',
          template: './src/index.html'
      }),
      new MiniCssExtractPlugin({
        filename: "css/bundle.css",
        // template: 'dist/css/bundle.css'
      })
    ],

};