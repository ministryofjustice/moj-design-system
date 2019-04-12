const gulp = require('gulp');

const config = require('./config.json');

gulp.task('copy-assets', () => {
  return gulp.src(['!' + config.paths.assets + 'sass{,/**/*}',
    config.paths.assets + '**'])
    .pipe(gulp.dest(config.paths.public))
});