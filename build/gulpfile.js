// include gulp
var gulp = require('gulp'); 
var concat = require('gulp-concat');
var jshint = require('gulp-jshint');
var sass = require('gulp-sass');
var JSPath = '../assets/javascript/**/*.js';
var CSSPath = '../assets/scss/**/*.scss'
 
// JS hint task
gulp.task('jshint', function() {
  gulp.src('JSPath')
    .pipe(jshint())
    .pipe(jshint.reporter('default'));
});

gulp.task('bundle', function() {
  gulp.src(['../assets/javascript/testing/*.js', JSPath])
    .pipe(concat('bundle.js'))
    .pipe(gulp.dest('..'));
});

// Compile Our Sass
gulp.task('css', function() {
    gulp.src([CSSPath])
    .pipe(sass())
    .pipe(concat('bundle.css'))
    .pipe(gulp.dest('..'));
});

gulp.task('default', function() {
    gulp.watch(JSPath, ['bundle']);
    gulp.watch(CSSPath, ['css']);
});
