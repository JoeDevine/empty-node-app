const path = require('path');
const fs = require('fs');
const webpack = require('webpack');
const Dotenv = require('dotenv-webpack');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const appDirectory = fs.realpathSync(process.cwd());
const resolveAppPath = relativePath => path.resolve(appDirectory, relativePath);

const {
  NODE_ENV = 'production',
  HOST = 'localhost',
  APP_PORT = 3000,
} = process.env;

const webpackConfig = {
  mode: NODE_ENV,
  entry: {
    app: ['react-hot-loader/patch', './client/index.js'],
  },
  devtool: 'source-map',
  devServer: {
    contentBase: resolveAppPath('client'),
    compress: true,
    hot: true,
    host: HOST,
    port: APP_PORT,
    publicPath: '/',
    historyApiFallback: true,
  },
  module: {
    rules: [
      {
        test: /\.(scss|css)$/,
        use: [
          {
            loader: 'style-loader',
          },
          {
            loader: 'css-loader',
          },
        ],
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ['babel-loader', 'eslint-loader'],
      },
      {
        test: /\.(png|jpg|gif|woff|woff2|eot|ttf|otf)$/,
        use: ['file-loader'],
      },
      {
        test: /\.svg$/,
        use: ['@svgr/webpack'],
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new webpack.ProvidePlugin({
      React: 'react',
    }),
    new CopyWebpackPlugin({
      patterns: [
        {
          from: './client/static/favicon.ico',
          to: '',
        },
      ],
    }),
    new CopyWebpackPlugin({
      patterns: [
        {
          from: './client/static',
          to: 'static',
        },
      ],
    }),
    new CopyWebpackPlugin({
      patterns: [
        {
          from: './client/static/robots.txt',
          to: '',
        },
      ],
    }),
    new HtmlWebpackPlugin({
      inject: true,
      template: resolveAppPath('client/index.html'),
    }),
    new Dotenv(),
  ],
  output: {
    filename: 'index_bundle.js',
    path: resolveAppPath('dist'),
  },
  optimization: {
    splitChunks: {
      chunks: 'all',
    },
  },
  resolve: {
    alias: { 'react-dom': '@hot-loader/react-dom' },
  },
  node: {
    fs: 'empty',
  },
};

module.exports = webpackConfig;
