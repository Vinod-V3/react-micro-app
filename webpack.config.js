// const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const { ModuleFederationPlugin } = require('webpack').container;
const deps = require('./package.json').dependencies;
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

module.exports = {
  mode: 'development',
  entry: './src/index',
  output: {
    publicPath: 'http://localhost:3000/',
    scriptType: 'module',
  },
  devServer: {
    port: 3000,
    historyApiFallback: true,
    headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET,HEAD,OPTIONS,POST,PUT',
        'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept',
    },
  },
//   module: {
//     rules: [{ test: /\.js$/, use: 'raw-loader' }],
//   },
  plugins: [
    new ModuleFederationPlugin({
        name: 'reactApp',
        filename: 'remoteEntry.js',
        exposes: {
            './DetailsPage': './src/components/DetailsPage',
            './AboutPage': './src/components/AboutPage',
            // './AboutPage': './src/App',
        },
        shared: {
            react: { singleton: true, eager: true },
            'react-dom': { singleton: true, eager: true, requiredVersion: deps['react-dom'] },
            'react-router-dom': { singleton: true, eager: true,  requiredVersion: deps['react-router-dom'] },
        },
        library: { type: 'module' },
        debug: true,
    }),
  ]
};
