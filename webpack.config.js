let path = require('path');
let webpack = require('webpack');
module.exports = {
  entry:"./public/scripts/script.js",
  output:{
    path: path.resolve(__dirname, "./public/temp/scripts"),
    filename: "script.js"
  },
  module: {
      rules: [
          {
              test: /\.js$/,
              exclude: /node_modules/,
              use:{
                loader: 'babel-loader',
                options: {
                    presets: ['env']
                }
            }
          }
      ]
  },
    mode:"development"
}
