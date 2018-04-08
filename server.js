const express = require('express');
const app = express();
const PORT = 3000;

// TODO: add condition for production
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');
const config = require('./webpack.config.js');
const compiler = webpack(config);

app.use(webpackDevMiddleware(compiler, {
    publicPath: config.output.publicPath,
    noInfo: true,
    stats: {colors: true},
    historyApiFallback: true
}));

app.use(require("webpack-hot-middleware")(compiler, {
    log: false,
    path: '/__webpack_hmr',
    heartbeat: 10 * 1000
}));

app.listen(PORT, function () {
    console.log(`Listening on port ${PORT}`);
});