const webpack = require('webpack'); // DF added
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
//   entry: path.join(__dirname, 'client', 'index'),
  entry: path.join(__dirname, './client/index.js'),
  output: {
      path: path.resolve(__dirname, 'build'),
      filename: 'bundle.js',
    },
  mode: process.env.NODE_ENV,
  module: {
      rules: [
          {
              test: /\.(js|jsx)$/,
              exclude: /node_modules/,
              use: {
                  loader: 'babel-loader',
                  options:{
                      presets: ['@babel/preset-env', '@babel/preset-react']
                  }
              }
          },
          {
              test: /\.s[ac]ss$/i,
              use: [
                  // Creates `style` nodes from JS strings
                "style-loader",
                // Translates CSS into CommonJS
                "css-loader",
                // Compiles Sass to CSS
                "sass-loader",
              ]
          },
          {
            test: /\.js$/,
            enforce: 'pre',
            use: ['source-map-loader'],
          },
          {
            test: /\.(gif|png|jpe?g|svg)$/i,
            use: [
              'file-loader',
              {
                loader: 'image-webpack-loader',
                options: {
                  bypassOnDebug: true, // webpack@1.x
                  disable: true, // webpack@2.x and newer
                },
              },
            ],
          }
      ]
  },
  plugins: [new HtmlWebpackPlugin({
      title: 'Development',
      template: './index.html',
  })],
  devServer: {
      static: {
          publicPath: '/build',
          directory: path.join(__dirname, 'client')
      },  
      proxy: {
        '/api': 'http://localhost:3000'
      },
  },

};