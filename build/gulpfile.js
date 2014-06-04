// include gulp
var gulp = require('gulp');
var concat = require('gulp-concat');
var jshint = require('gulp-jshint');
var sass = require('gulp-sass');
var JSPath = '../assets/javascript/**/*.js';
var CSSPath = '../assets/scss/**/*.scss';
var spawn = require('child_process').spawn;
var stylish = require('jshint-stylish');
var node;

gulp.task('bundle', function() {
  if (!node) {
    gulp.start('fb-flo');
  }
  gulp.src(['../assets/javascript/testing/*.js', JSPath])
    .pipe(jshint())
    .pipe(jshint.reporter('jshint-stylish'))
    .pipe(jshint.reporter('fail'))
    .on('error', onError)
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
    if (node) {
        node.kill();
    }
    node = spawn('node', ['flo.js'], {stdio: 'inherit'});
    node.on('close', function (code) {
    if (code === 8) {
      gulp.log('Error detected, turning off fb-flo...');
    }
  });
});

gulp.task('watch', function() {
    gulp.watch(JSPath, ['bundle']);
    gulp.watch(CSSPath, ['css']);
});

function onError (err) {
    // kill $(ps aux | grep 'node flo' | awk '{print $2}')
    if (node) {
        node.kill();
        node = false;
    }
}

gulp.task('default', ['watch','fb-flo']);
