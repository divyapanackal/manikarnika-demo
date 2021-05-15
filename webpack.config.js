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
    assetModuleFilename: "images/[hash][ext][query]"
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
        loader: 'file-loader',
        options: {
          name: "[name].[hash:6].[ext]",
          outputPath: "images",
          publicPath: "images",
          emitFile: true,
          esModule: false
        }
      },  
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html",
      filename: "index.html",
      inject: "body"
    })
  ],

};
