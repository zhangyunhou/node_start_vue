const express = require('express');
const router = express.Router();
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
compiler.plugin('compilation', function (compilation) {
  compilation.plugin('html-webpack-plugin-after-emit', function (data, cb) {
    hotMiddleware.publish({ action: 'reload' })
    cb()
  })
})
// 解决history模式
app.use(require('connect-history-api-fallback')())

//启动vue项目
// serve webpack bundle output
app.use(devMiddleware)

//vue修改后自动改变
// enable hot-reload and state-preserving
// compilation error display
app.use(hotMiddleware)

// 验证用户名是否存在
let user = router.get('/home', function(req, res, next){
  console.log('get home');
  res.json('nihao');
});
app.use((res, req, next) => {
  console.log('1111111111111');
  next();
});
let rootPath = '/webapi';
app.use(rootPath + '/user',user);

app.listen(3000);