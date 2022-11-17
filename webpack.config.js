const path = require("path")
const MiniCssExtractPlugin = require("mini-css-extract-plugin")
const HtmlWebpackPlugin = require("html-webpack-plugin")

module.exports = {
  entry: {
    menu: [
      "./src/js/fb2reader/parser.js",
      "./src/js/fb2reader/useparser.js",
      "./src/scss/style.js",
    ],
    // book: ["./src/js/settings/script.js"],
  },
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "dist"),
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.(c|sa|sc)ss/i,
        use: [
          MiniCssExtractPlugin.loader,
          "css-loader",
          "sass-loader"
        ],
      },
      {
        test: /\.(png|svg|jpg|jpeg)$/i,
        loader: 'file-loader',
        options: {
          name: '[name].[ext]'
        }
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: (entryName) => entryName + ".html",
      template: "src/pages/menu/menu.html",
    }),
    new MiniCssExtractPlugin({
      filename: '[name].css',
    }),
  ]
}
