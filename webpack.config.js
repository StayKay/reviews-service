/* eslint-disable no-path-concat */
const path = require('path');

module.exports = {
  entry: path.join(__dirname, '/client/src/renderComponent.jsx'),
  module: {
    rules: [
      {
        test: [/\.jsx$/],
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-react', '@babel/preset-env']
          }
        }
      }
    ]
  },
  output: {
    filename: 'bundle.js',
    path: path.join(__dirname, '/client/public/dist')
  }
};
