const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = [
    //main process
    {
      mode: 'development',
      entry: './client/electron.js',
      target: 'electron-main',
      module: {
        rules: [{
          test: /\.js$/,
          include: /client/,
          exclude: /node_modules/,
        }]
      },
      output: {
        path: __dirname + '/dist',
        filename: 'bundle.js'
      }
    },
    //render process
    {
        mode: 'development',
        entry: {
          mainpage:['@babel/polyfill', './client/App.jsx'],
          helppage: './client/components/HelpModal.jsx'
        },
        target: 'electron-renderer',
        devtool: 'source-map',
        module: { 
          rules: [
            {
              test: /\.js(x?)$/,
              include: /client/,
              use: {
                loader: 'babel-loader',
                options: {
                  presets: ['@babel/preset-env', '@babel/preset-react']
                }
              }
            },
            {
              test: [/\.s[ac]ss$/i, /\.css$/i],
              use: [
                // Creates `style` nodes from JS strings
                'style-loader',
                // Translates CSS into CommonJS
                'css-loader',
                // Compile Sass to CSS
                'sass-loader',
              ],
            }
          ]
        },
        output: {
          path: __dirname + '/dist',
          filename: '[name]/react.js'
        },
        plugins: [
          new HtmlWebpackPlugin({
            filename: './client/index.html',
            inject: true,
            chunks: ['mainpage']
          }),
          new HtmlWebpackPlugin({
            filename: './client/help.html',
            inject: true,
            chunks: ['helppage']
          })
        ]
      }
  ];
  
  