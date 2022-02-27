const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");

const outputPath = path.resolve(__dirname, "dist");

module.exports = {
  mode: "development",
  entry: {
    app: require.resolve("./src/index"),
  },
  resolve: {
    extensions: [".ts", ".js"],
  },
  module: {
    rules: [
      {
        test: /\.yaml$/,
        use: [{ loader: "json-loader" }, { loader: "yaml-loader" }],
      },
      {
        test: /\.css$/,
        use: [{ loader: "style-loader" }, { loader: "css-loader" }],
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin({
      patterns: [outputPath],
    }),
    new CopyWebpackPlugin({
      patterns: [
        {
          from: require.resolve("swagger-ui/dist/oauth2-redirect.html"),
          to: "./",
        },
      ],
    }),
    new HtmlWebpackPlugin({
      template: "index.html",
    }),
  ],
  output: {
    filename: "[name].bundle.js",
    path: outputPath,
  },
  devServer: {
    static: [
      {
        directory: path.join(__dirname, 'src'),
        publicPath: '/spec'
      }
    ]
  }
};
