var gulp = require('gulp');

// include plug-ins
var browserify = require('browserify');
var transform = require('vinyl-transform');
var uglify = require('gulp-uglify');
var jshint = require('gulp-jshint');
var minifyHTML = require('gulp-minify-html');

//jshint task
gulp.task('jshint', function() {
  gulp.src(['app.js', './scripts/**/*.js'])
    .pipe(jshint())
    .pipe(jshint.reporter('default'));
});

gulp.task('minify-js', function () {

  // use `vinyl-transform` to wrap the regular ReadableStream returned by `b.bundle();` with vinyl file object
  // so that we can use it down a vinyl pipeline
  // while taking care of both streaming and buffered vinyl file objects
  var browserified = transform(function(filename) {
    // filename = './app.js' in this case
    return browserify(filename)
      .bundle();
  });

  return gulp.src(['./app.js']) // you can also use glob patterns here to browserify->uglify multiple files
    .pipe(browserified)
    .pipe(uglify())
    .pipe(gulp.dest('./dist/'));
});

gulp.task('minify-html', function() {
  var opts = {
    conditionals: true,
    spare:true
  };
 
  return gulp.src('./static/html/*.html')
    .pipe(minifyHTML(opts))
    .pipe(gulp.dest('./dist/'));
});