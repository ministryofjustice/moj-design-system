const gulp = require('gulp');

const config = require('./config.json');

gulp.task('copy-component-javascript', () => {
  return gulp.src([config.paths.components + '**/*.js'])
    .pipe(gulp.dest(config.paths.public + 'javascripts/components/'))
});