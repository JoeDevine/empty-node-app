const path = require('path');
const fs = require('fs');
const webpack = require('webpack');
const nodeExternals = require('webpack-node-externals');

const appDirectory = fs.realpathSync(process.cwd());
const resolveAppPath = relativePath => path.resolve(appDirectory, relativePath);

const { NODE_ENV } = process.env;

const webpackConfigServer = {
  mode: NODE_ENV || 'production',
  target: 'node',
  externals: [nodeExternals({ whitelist: ['express'] })],
  entry: resolveAppPath('server.js'),
  output: {
    path: resolveAppPath('dist'),
    publicPath: '/',
    filename: 'server.bundle.js',
  },
  plugins: [
    new webpack.optimize.LimitChunkCountPlugin({
      maxChunks: 1,
    }),
  ],
};

module.exports = webpackConfigServer;
