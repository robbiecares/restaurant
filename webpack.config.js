const path = require('path');
<<<<<<< HEAD
<<<<<<< HEAD
=======

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
=======
>>>>>>> 5e4052d42c96bcbda3928d9e5e7ff98bf601104e
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  devtool: 'inline-source-map',
  devServer: {
    static: './dist',
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Development',
    }),
  ],
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      },
    ],
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
<<<<<<< HEAD
=======

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
>>>>>>> e6dfa43 (directory setup complete, beginning pageLoad.js)
=======
>>>>>>> d305ffc6230790997bf46aa77e988959e085e5d8
>>>>>>> 5e4052d42c96bcbda3928d9e5e7ff98bf601104e
  },
};