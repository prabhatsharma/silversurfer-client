var gulp = require('gulp');

// include plug-ins
var browserify = require('browserify');
var transform = require('vinyl-transform');
var uglify = require('gulp-uglify');
var jshint = require('gulp-jshint');
var minifyHTML = require('gulp-minify-html');
var minifyCSS = require('gulp-minify-css');
var rename = require('gulp-rename');
var concat = require('gulp-concat');
var sourcemaps = require('gulp-sourcemaps');
var connect = require('gulp-connect');
var buffer = require('vinyl-buffer');
	
gulp.task('serve', ['watch'], function() {
	connect.server({
		root: 'dist',
		livereload: true
	  });
});

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
    return browserify({entries: filename, debug: true})
      .bundle();
  });

  return gulp.src(['./src/app.js']) // you can also use glob patterns here to browserify->uglify multiple files
    .pipe(browserified)
    .pipe(buffer())
    .pipe(sourcemaps.init({loadMaps: true}))
    .pipe(uglify())
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest('./dist/'))
    .pipe(connect.reload());
});

gulp.task('move-index', function(){
	return gulp.src(['./src/index.html'])
		.pipe(gulp.dest('./dist'))
        .pipe(connect.reload());
});

gulp.task('move-views', function(){
	return gulp.src(['./src/views/*.html'])
		.pipe(gulp.dest('./dist/views'))
        .pipe(connect.reload());
});

gulp.task('move-vendorcss', function() {
  return gulp.src(['./bower_components/bootstrap/dist/css/bootstrap.min.css'])
    .pipe(gulp.dest('./dist/styles/vendor'))
    .pipe(connect.reload());
});

gulp.task('minify-mycss', function() {

  return gulp.src(['./src/styles/*.css'])
  	.pipe(concat('./tmp/style.css'))
  	.pipe(minifyCSS({keepBreaks:true}))
  	.pipe(rename('style.min.css'))
    .pipe(gulp.dest('./dist/styles'))
    .pipe(connect.reload());
});

gulp.task('move-images', function(){
	return gulp.src(['./src/images/*.*'])
		.pipe(gulp.dest('./dist/images'))
        .pipe(connect.reload());
});

gulp.task('move-html', ['move-index', 'move-views']);
gulp.task('minify-css', ['minify-mycss', 'move-vendorcss']);
gulp.task('build', ['minify-js', 'minify-css', 'move-html', 'move-images']);

gulp.task('watch',['build'], function(){
	
	var htmlfiles = ['./src/index.html','./src/views/*.html'];
	var cssfiles = ['./bower_components/bootstrap/dist/bootstrap.min.css','./src/styles/*.css'];
	var jsfiles = ['app.js', './src/scripts/controllers/*.js', './src/scripts/services/*.js'];
	
	gulp.watch(htmlfiles, ['move-html']);
	gulp.watch(cssfiles, ['minify-css']);
	gulp.watch(jsfiles, ['minify-js']);
    //gulp.watch(htmlfiles.concat(cssfiles).concat(jsfiles), notifyLivereload);
});