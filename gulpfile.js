var gulp = require('gulp');

// include plug-ins
var browserify = require('browserify');
var transform = require('vinyl-transform');
var uglify = require('gulp-uglify');
var jshint = require('gulp-jshint');

//jshint task
gulp.task('jshint', function() {
  gulp.src(['app.js', './scripts/**/*.js'])
    .pipe(jshint())
    .pipe(jshint.reporter('default'));
});

gulp.task('browserify', function () {
  var browserified = transform(function(filename) {
    var b = browserify(filename);
    return b.bundle();
  });
  return gulp.src(['app.js', './scripts/**/*.js'])
    .pipe(browserified)
    .pipe(uglify())
    .pipe(gulp.dest('./dist'));
});