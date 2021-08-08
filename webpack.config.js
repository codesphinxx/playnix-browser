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

const config = {
  entry: __dirname + '/src/index.js',
  devtool:'source-map',
  mode: "production",
  output: {
    path: __dirname + '/dist',
    filename: 'playnix.min.js',
    library: {
      type: 'umd',
      name: 'playnix'
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
  optimization: {
      minimize: true,
      minimizer: [
        new TerserPlugin({
          extractComments: false,
          terserOptions: {
            mangle: true, 
          },
        }),
      ],
  },
  resolve: {
    modules: ['./node_modules', path.resolve('./src')],
    extensions: ['.json', '.js']
  },
  plugins: plugins
};

module.exports = config;