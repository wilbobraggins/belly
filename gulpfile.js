var gulp = require('gulp'),
  connect = require('gulp-connect');
 
gulp.task('connect', function() {
  connect.server({
    root: '.',
    livereload: true
  });
});
 
gulp.task('html', function () {
  gulp.src('./belly/*.html')
    .pipe(gulp.dest('./belly'))
    .pipe(connect.reload());
});
 
gulp.task('watch', function () {
  gulp.watch(['html/*.html'], ['html']);
});
 
gulp.task('default', ['connect', 'watch']);

'use strict';
 
var os = require('os');
var gulp = require('gulp');
var open = require('gulp-open');
 
 
// Default usage:
// Open one file with default application
 
gulp.task('open', function(){
  gulp.src('./index.html')
  .pipe(open());
});
 
 
var browser = os.platform() === 'linux' ? 'google-chrome' : (
  os.platform() === 'darwin' ? 'google chrome' : (
  os.platform() === 'win32' ? 'chrome' : 'firefox'));
 
gulp.src('./package.json').pipe(open({app: 'chrome'}));
 
gulp.task('browser', function(){
  gulp.src('./second.html')
  .pipe(open({app: browser}));
});