const path = require("path");
const merge = require("webpack-merge");
const exec = require("child_process").exec;
const WatchPlugin = require("webpack-watch-files-plugin").default;
const ShellPlugin = require("webpack-shell-plugin");
const common = require("./webpack.common.js");

module.exports = merge(common, {
  mode: "development",
  watch: true,
  devServer: {
    contentBase: path.join(__dirname, "docs/build/html"),
    watchContentBase: true,
    compress: false,
    port: 1919,
    hot: false,
    liveReload: true,
    publicPath: "/_static/"
  },
  plugins: [
    new WatchPlugin({
      files: ["./docs/**/*.rst", "./docs/**/*.py"]
    }),
    new ShellPlugin({
      onBuildEnd: ["make -C docs clean html"],
      // dev=false here to force every build to trigger make, the default is
      // first build only.
      dev: false
    })
  ]
});
