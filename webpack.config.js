const fs = require('fs');
const path = require('path');
const webpack = require('webpack');
const TerserPlugin = require('terser-webpack-plugin');

let pkg = JSON.parse(fs.readFileSync(__dirname + '/package.json').toString());

let plugins = [
  new webpack.DefinePlugin({
    __VERSION__: JSON.stringify(pkg.version)
  }),
  new webpack.LoaderOptionsPlugin({ options: {} })
];

let minifier = {
  minimize: true,
  minimizer: [
    new TerserPlugin({
      extractComments: false,
      terserOptions: {
        mangle: true,
        format: {
          comments: false
        }
      },
    }),
  ],
};

module.exports = (env) => ({
  entry: __dirname + '/src/index.js',
  devtool:env.mode === 'production' ? false : 'source-map',
  mode: env.mode,
  output: {
    path: __dirname + '/dist',
    filename: env.mode === 'production' ? 'playnix.min.js' : 'playnix.js',
    library: {
      type: 'umd'
    }
  },
  module: {
    rules: [
      {
        test: /(\.jsx|\.js)$/,
        loader: 'babel-loader',
        exclude: /(node_modules|bower_components)/
      }
    ]
  },
  optimization: env.mode === 'production' ? minifier : {},
  resolve: {
    modules: ['./node_modules', path.resolve('./src')],
    extensions: ['.json', '.js']
  },
  plugins: plugins
});