var gulp = require('gulp');
var rename = require('gulp-rename');
var uglify = require('gulp-uglify');
var minifyCss = require('gulp-minify-css');

var DEST = 'dist/';

gulp.task('minify-js', function() {
  return gulp.src('src/*.js')
    .pipe(gulp.dest(DEST))
    .pipe(uglify())
    .pipe(rename({ extname: '.min.js' }))
    .pipe(gulp.dest(DEST));
});

gulp.task('minify-css', function() {
  return gulp.src('src/*.css')
    .pipe(gulp.dest(DEST))
    .pipe(minifyCss({compatibility: 'ie8'}))
    .pipe(rename({ extname: '.min.css' }))
    .pipe(gulp.dest(DEST));
});

gulp.task('default', ['minify-js', 'minify-css']);
