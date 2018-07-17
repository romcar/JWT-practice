const webpack = require('webpack');
const path = require('path');

const config = {
  entry: path.resolve(__dirname, "client/src/index.js"),
  devtool: "source-map",
  output: {
    path: path.resolve(__dirname, "client/dist"),
    filename: 'bundle.js'
  },
  mode: "development",
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: ['node_modules'],
        loader: 'babel-loader',
        query: {
          presets: ['react', 'env']
        }
      }

    ]
  },
  resolve: {
    extensions: ['.*', '.js', '.json', '.jsx']
  }
}

module.exports = config;