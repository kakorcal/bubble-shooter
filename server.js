const express = require('express');
const app = express();
const path = require('path');
const morgan = require('morgan');
const ENV = process.env.NODE_ENV || 'development';
const PORT = process.env.PORT || 3000;

app.use(morgan('common'));
// https://expressjs.com/en/advanced/best-practice-performance.html
app.use(require('helmet')());
app.use('/static', express.static(path.join(__dirname, '/static')));

if(ENV === 'development') {
    console.log('ENV', ENV);
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
}else {
    console.log('ENV', ENV);
    app.get('/', (req, res) => {
        res.sendFile(path.join(__dirname, 'static/dist/index.html'));
    });

    app.get('*', (req, res) => {
        res.redirect('/');
    });
}

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
});