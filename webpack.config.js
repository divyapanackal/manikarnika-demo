const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  entry: {
    main: path.resolve(__dirname, "./src/app.js"),
  },
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "deploy"),
  },
  devServer: {
    contentBase: './deploy',
    watchContentBase: true,
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      },
      { 
        test: /\.s[ac]ss$/i, 
        use: ["style-loader", "css-loader", "sass-loader"] 
      },
      { 
        test: /\.(?:ico|gif|png|jpg|jpeg)$/i,
        type: 'asset/resource',
      },
    ]
  },
//   plugins: [
//     new HtmlWebpackPlugin({
//       title: "Webpack Output",
//     }),
//   ],
};