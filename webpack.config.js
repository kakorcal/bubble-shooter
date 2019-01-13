const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const webpack = require('webpack');

// Phaser webpack config
var phaserModule = path.join(__dirname, '/node_modules/phaser-ce/');
var phaser = path.join(phaserModule, 'build/custom/phaser-split.js');
var pixi = path.join(phaserModule, 'build/custom/pixi.js');
var p2 = path.join(phaserModule, 'build/custom/p2.js');

module.exports = {
  entry: {
    app: ['webpack-hot-middleware/client?path=/__webpack_hmr&timeout=20000&reload=true&quiet=true', './src/index.js'],
    vendor: ['babel-polyfill', 'pixi', 'p2', 'phaser', 'webfontloader']
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        include: path.join(__dirname, 'src'),
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.html$/,
        exclude: /node_modules/,
        use: {
          loader: 'raw-loader'
        }
      },
      // {
      //     test: /\.(xml|fnt)$/,
      //     exclude: /node_modules/,
      //     use: {
      //         loader: 'xml-loader'
      //     }
      // },
      // {
      //     test: /\.(png|svg|jpg|gif)$/,
      //     exclude: /node_modules/,
      //     use: {
      //         loader: 'file-loader'
      //     }
      // },
      {
        test: /pixi\.js/,
        use: ['expose-loader?PIXI']
      },
      {
        test: /phaser-split\.js$/,
        use: ['expose-loader?Phaser']
      },
      {
        test: /p2\.js/,
        use: ['expose-loader?p2']
      }
    ]
  },
  resolve: {
    alias: {
      phaser: phaser,
      pixi: pixi,
      p2: p2
    }
  },
  mode: 'development',
  devtool: 'source-map',
  optimization: {
    splitChunks: {
      cacheGroups: {
        commons: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendor',
          chunks: 'all'
        }
      }
    }
  },
  plugins: [
    new CleanWebpackPlugin(['dist']),
    new HtmlWebpackPlugin({
      template: './src/index.html',
      chunks: ['vendor', 'app']
    }),
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.DefinePlugin({
      DEVELOPMENT: JSON.stringify(true)
    })
  ]
};
