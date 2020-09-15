const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    main: './client/src/main.js',
  },
  output: {
    filename: '[name]-[contenthash].js',
    path: path.resolve(__dirname, 'build'),
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: 'babel-loader',
      }
    ]
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: "./client/src/index.html",
      filename: "./index.html"
    })
  ]
};
