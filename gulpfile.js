var gulp = require('gulp'),
	livereload = require('gulp-livereload'),
	connect = require('gulp-connect'),
	less = require('gulp-less'),
	rigger = require('gulp-rigger'),
	autoprefixer = require('gulp-autoprefixer'),
	minifyCSS = require('gulp-minify-css'),
	rename = require('gulp-rename');

// server connect
gulp.task('connect', function() {
  connect.server({
    root: 'app',
    livereload: true
  });
});

// css and less
gulp.task('css', function() {
  	gulp.src('App/css/**/*.css')
  	.pipe(connect.reload())
  	.pipe(autoprefixer());
});

gulp.task('less', function() {
  	gulp.src('App/less/style.less')
	.pipe(less())
	.pipe(rename('style.css'))
	.pipe(autoprefixer('last 4 versions'))
	// .pipe(minifyCSS())
	.pipe(connect.reload())
    .pipe(gulp.dest('App/css'));
});

// html
gulp.task('html', function () {
    gulp.src('App/html/**.html')
        .pipe(rigger())
        .pipe(gulp.dest('App/'));
});

gulp.task('html_def', function() {
	gulp.src('App/html/*.html')
	.pipe(connect.reload());
});

// js
gulp.task('js', function() {
	gulp.src('App/js/*.js')
	.pipe(connect.reload());
});

// watch css
gulp.task("watch", function() {
	gulp.watch('App/less/**/*.less', ['less']);
	gulp.watch('App/css/**/*.css', ['css']);
	gulp.watch('App/js/**/*.js', ['js']);
	gulp.watch('App/html/**.html', ['html']);
	gulp.watch('App/*.html', ['html_def']);
	
});


// default 
gulp.task('default', ['connect', 'watch']);