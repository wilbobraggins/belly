var gulp = require('gulp'),
  connect = require('gulp-connect');
 
gulp.task('connect', function() {
  connect.server();
});
 
gulp.task('default', ['connect']);

gulp.task('copy', function() {
  gulp.src('index.html')
  .pipe(gulp.dest('assets'))
});

// Copy third party libraries from /node_modules into /vendor


// Configure the browserSync task
