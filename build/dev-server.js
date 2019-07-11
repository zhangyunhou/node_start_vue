const express = require('express');
const webpack = require('webpack');
const webpackConfig = require('./webpack.dev.conf');

const app = express();

var compiler = webpack(webpackConfig)

//启动vue项目
var devMiddleware = require('webpack-dev-middleware')(compiler, {
  publicPath: webpackConfig.output.publicPath,
  quiet: true
})

var hotMiddleware = require('webpack-hot-middleware')(compiler, {
  log: () => {}
})
app.get('/home', function (req, res) {
    res.send('Hello World')
})

// serve webpack bundle output
app.use(devMiddleware)

// enable hot-reload and state-preserving
// compilation error display
app.use(hotMiddleware)

app.listen(3000);