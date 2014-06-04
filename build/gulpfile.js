// include gulp
var gulp = require('gulp'); 
var concat = require('gulp-concat');
var jshint = require('gulp-jshint');
var sass = require('gulp-sass');
 
// JS hint task
// gulp.task('jshint', function() {
  // gulp.src('./src/scripts/*.js')
    // .pipe(jshint())
    // .pipe(jshint.reporter('default'));
// });

gulp.task('bundle', function() {
  gulp.src(['../assets/javascript/testing/*.js','../assets/javascript/**/*.js'])
    .pipe(concat('bundle.js'))
    .pipe(gulp.dest('..'));
});



// Compile Our Sass
gulp.task('css', function() {
    gulp.src('../assets/scss/**/*.scss')
    .pipe(sass())
    .pipe(concat('bundle.css'))
    .pipe(gulp.dest('..'));
});

// gulp.watch('../javascript/**/*.js', ['bundle']);
