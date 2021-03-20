const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
  entry: {
    theme: ["./src/theme.js", "./src/sass/theme.sass"],
    badge_only: "./src/sass/badge_only.sass"
  },
  output: {
    filename: "js/[name].js?[hash]",
    path: path.resolve(__dirname, "sphinx_rtd_theme/static")
  },
  externals: {
    jquery: "jQuery"
  },
  module: {
    rules: [
      {
        test: /\.sass$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
          },
          {
            loader: "css-loader"
          },
          {
            loader: "sass-loader",
            options: {
              sassOptions: {
                indentedSyntax: true,
                includePaths: [
                  "node_modules/bourbon/app/assets/stylesheets",
                  "node_modules/bourbon-neat/app/assets/stylesheets",
                  "node_modules/font-awesome/scss",
                  "node_modules/wyrm/sass"
                ],
              },
            }
          }
        ]
      },
      {
        test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "[name].[ext]?[hash]",
              outputPath: "css/fonts/",
              publicPath: "fonts/"
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "css/[name].css?[hash]",
      chunkFilename: "css/[name].css?[hash]"
    }),
    new CopyPlugin({
      patterns: [
        {
          from: 'node_modules/html5shiv/dist/**/*.min.js',
          to: path.resolve(__dirname,'sphinx_rtd_theme/static/js/[name][ext]')
        },
      ],
    }),
  ]
};
