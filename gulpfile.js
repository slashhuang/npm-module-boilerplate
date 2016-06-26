var gulp = require('gulp');
var gutil = require('gulp-util');
var webpack = require('webpack');
var Server = require('karma').Server;
var demoWebpackConfig = require('./webpack/demo.config');
var webpackConfig = require('./webpack/webpack.config');
var WebpackDevServer = require("webpack-dev-server");
var open = require('gulp-open');

var babel = require('gulp-babel');
var pkgConfig = require('./package.json');

gulp.task('karma', function (done) {
  new Server({
    configFile: __dirname + '/karma.conf.js',
    singleRun: true
  }, done).start();
});

gulp.task('open', function () {
  gulp.src(__filename)
      .pipe(open({uri: "http://127.0.0.1:8081/webpack-dev-server/example/index.html"}));
});

gulp.task('demo-webpack', function(done) {
  var config=Object.create(demoWebpackConfig);
  config.entry.unshift(
      "webpack-dev-server/client?http://localhost:8081/",
      'webpack/hot/dev-server'//语法错误，也reload
  );
    //开发环境添加react-hot
  config.module.loaders[0].loaders=[
          'react-hot',//keep it mounted, preserving the state
          'babel'];
  var compiler = webpack(config);
  var server = new WebpackDevServer(compiler, {
    hot: true,
    filename: pkgConfig.name+".js",
    publicPath: config.output.publicPath,
    stats: { colors: true }
  });
  server.listen(8081,'localhost',function(err){
      if (err) {
          return console.error(err);
      }
      console.log('========= 热刷新已监听8081端口 =========')
  });
});

gulp.task('require-webpack', function(done) {
    gulp.src(__dirname).
        pipe(webpack(webpackConfig))
});

gulp.task('example-webpack',function(done){
    gulp.src(__dirname).
        pipe(webpack(demoWebpackConfig))
});

gulp.task('babel', function(done){
  return gulp.src('src/**/*.js')
      .pipe(babel())
      .pipe(gulp.dest('lib'));
});

gulp.task('default', ['babel','require-webpack','example-webpack']);
gulp.task('test',['karma']);
gulp.task('demo', ['demo-webpack','open']);
