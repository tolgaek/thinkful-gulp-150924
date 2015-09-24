var gulp = require('gulp');
var imagemin = require('gulp-imagemin');

gulp.task('minimizeImages', function() {
  return gulp.src('img/*.gif')
    .pipe(imagemin())
    .pipe(gulp.dest('build'));
});
