// include gulp
var gulp = require('gulp'); 
var concat = require('gulp-concat');
var jshint = require('gulp-jshint');
var sass = require('gulp-sass');
var JSPath = '../assets/javascript/**/*.js';
var CSSPath = '../assets/scss/**/*.scss';
var spawn = require('child_process').spawn;

// JS hint task
gulp.task('jshint', function() {
  gulp.src('JSPath')
    .pipe(jshint())
    .pipe(jshint.reporter('default'));
});

gulp.task('bundle', function() {
  gulp.src(['../assets/javascript/testing/*.js', JSPath])
    .pipe(concat('bundle.js'))
    .pipe(gulp.dest('../site'));
});

// Compile Our Sass
gulp.task('css', function() {
    gulp.src([CSSPath])
    .pipe(sass())
    .pipe(concat('bundle.css'))
    .pipe(gulp.dest('../site'));
});

gulp.task('fb-flo', function() {
    node = spawn('node', ['flo.js'], {stdio: 'inherit'});
    node.on('close', function (code) {
    if (code === 8) {
      gulp.log('Error detected, turning off fb-flo...');
    }
  });
});

gulp.task('default', function() {
    gulp.watch(JSPath, ['bundle']);
    gulp.watch(CSSPath, ['css']);
    gulp.start('fb-flo');
});
