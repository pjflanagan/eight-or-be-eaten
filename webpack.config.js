const path = require('path');
const TerserPlugin = require('terser-webpack-plugin');


module.exports = {
  entry: './src/index.ts',
  mode: 'none',
  module: {
    rules: [
      {
        test: /src\/.*\.tsx?$/,
        use: [
          'ts-loader',
        ],
        exclude: /node_modules/,
      },
      {
        test: /\.scss$/,
        use: [
          "style-loader",
          "css-loader",
          'sass-loader',
        ],
        exclude: /node_modules/,
      },
    ],
  },
  watchOptions: {
      ignored: /node_modules/
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  // TODO: turn on for just prod
  // optimization: {
  //   minimize: true,
  //   minimizer: [new TerserPlugin()],
  // },
};