const path = require('path');
const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const exec = require('child_process').exec;

module.exports = merge(common, {
  mode: 'development',
  watch: true,
  devServer: {
    contentBase: path.join(__dirname, 'docs/_build/html'),
    compress: false,
    port: 7070,
    after: function (app, server) {
      exec('rm -rf docs/_build && sphinx-build docs docs/_build/html', (err, stdout, stderr) => {
        if (stdout) process.stdout.write(stdout);
        if (stderr) process.stderr.write(stderr);
      });
    }
  }
});