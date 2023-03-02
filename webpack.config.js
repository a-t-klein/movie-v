const path = require('path');
const HTMLwebPackPlugin = require('html-webpack-plugin')

module.exports = {
  mode: process.env.NODE_ENV || 'production',
  entry: './client/index.js',
  output: {
    filename: 'bundle.js',
    path: path.join(__dirname, '/build'),
  },
  module: {
    rules: [
      {
        test: /\.js$|jsx/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/env', '@babel/react']
          }
        }
      },
      {
        test: /\.s?css$/,
        exclude: /node_modules/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      }
    ]
  },
  plugins: [
    new HTMLwebPackPlugin({
      title: 'Development',
      template: './src/index.html'
    })
  ],
  devServer: {
    historyApiFallback: true,
    static: {
      publicPath: '/build',
      directory: path.resolve(__dirname, 'build')
    },
    port:3000,
    proxy: {
      '/': 'http://localhost:8080'
    }
  }
}