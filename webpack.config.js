// TODO 缺少图片 缺少字体 打包
// TODO 增加dll打包
const path = require("path");
const webpack = require("webpack");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const AddAssetHtmlWebpackPlugin = require("add-asset-html-webpack-plugin");
module.exports = {
  mode: "development",
  devtool: "cheap-module-eval-soure-map", //开发环境配置
  // devtool: "cheap-module-source-map", // 线上生成配置
  entry: ["./src/index.js"],
  output: {
    // 输入目录
    path: path.join(__dirname, "dist"),
    // 文件名称
    filename: "bundle.js"
  },
  optimization: {
    usedExports: true,
    splitChunks: {
      chunks: "all" // 所有的 chunks 代码公共的部分分离出来成为一个单独的文件
    }
  },
  resolve: {
    extensions: [".js", ".jsx"],
    alias: {
      "@": path.join(__dirname, "src"),
      pages: path.join(__dirname, "src/pages"),
      router: path.join(__dirname, "src/router")
    }
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: [
          {
            loader: "babel-loader"
          }
        ]
      },
      {
        test: /\.scss$/,
        use: [
          MiniCssExtractPlugin.loader,
          "css-loader", //编译css
          "postcss-loader",
          "sass-loader" //编译sass
        ]
      }
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      filename: "index.html", // 最终创建的文件名
      template: path.join(__dirname, "template.html")
    }),
    new MiniCssExtractPlugin({
      filename: "[name].css",
      chunkFilename: "[id].css"
    })
    // new AddAssetHtmlWebpackPlugin({
    //   filepath: path.resolve(__dirname, "../dll/vendors.dll.js")
    // }),
    // new webpack.DllReferencePlugin({
    //   content: __dirname,
    //   manifest: require(path.join(__dirname, "dist", "vendors-manifest.json"))
    // })
  ],
  devServer: {
    hot: true,
    contentBase: path.join(__dirname, "./dist"),
    host: "0.0.0.0", // 可以使用手机访问
    port: 8080,
    historyApiFallback: true, // 该选项的作用所有的404都链接到index.html
    proxy: {
      // 代理到后端的服务地址，会拦截所有以api开头的请求地址
      api: "http://localhost:3000"
    }
  }
};
