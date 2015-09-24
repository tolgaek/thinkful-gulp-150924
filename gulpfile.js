'use strict';

var gulp = require('gulp');
var imagemin = require('gulp-imagemin');
var changed = require('gulp-changed');

gulp.task('minimizeImages', function() {
  return gulp.src('img/*.gif')
    .pipe(changed('build'))
    .pipe(imagemin())
    .pipe(gulp.dest('build'));
});

gulp.task('default', ['minimizeImages']);
