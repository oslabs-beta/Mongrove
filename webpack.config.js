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
        entry: './client/App.jsx',
        target: 'electron-renderer',
        devtool: 'source-map',
        module: { rules: [{
          test: /\.js(x?)$/,
          include: /client/,
          use: { loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env', '@babel/preset-react']
            }}
        }] },
        output: {
          path: __dirname + '/dist',
          filename: 'react.js'
        },
        plugins: [
          new HtmlWebpackPlugin({
            template: './client/index.html'
          })
        ]
      }
  ];
  
  