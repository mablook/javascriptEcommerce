const TerserPlugin = require('terser-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');

var path = require('path');

var APP_DIR = path.resolve(__dirname, 'src/');
var CSS_DIR = path.resolve(__dirname, 'src/CSS/');
var BUILD_DIR = path.resolve(__dirname, 'src/dist');

module.exports = {
  mode: 'production',
  entry:  [
  APP_DIR + '/js/script.js',
  ],
  watch: true,
  plugins: [
    new CopyPlugin([
      { from: 'src/mocks/**/*', to: APP_DIR + '/dist', force: true,},
      { from: 'src/assets/**/*', to: APP_DIR + '/dist', force: true,},
      { from: 'src/index.html', to: APP_DIR + '/dist/src/index.html', force: true,},
      { from: 'src/styles.min.css', to: APP_DIR + '/dist/src', force: true,},
      { from: 'src/app.bundle.js', to: APP_DIR + '/dist/src' },
    ]),
  ],
  devServer: {
    contentBase: APP_DIR
  },
    optimization: {
      minimizer: [new TerserPlugin({ sourceMap: true })],
    },
    output: {
      path: APP_DIR,
      filename: 'app.bundle.js',
      publicPath: BUILD_DIR
    },
};

