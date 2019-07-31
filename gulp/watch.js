const gulp = require('gulp');

const config = require('./config.json');

gulp.task('watch-sass', (done) => {
  gulp.watch([config.paths.assets + 'sass/**', config.paths.components + '**/*.scss'], { cwd: './' }, gulp.task('sass'));
  done();
});

gulp.task('watch-assets', (done) => {
  gulp.watch([config.paths.assets + 'images/**',
    config.paths.assets + 'javascripts/**'], { cwd: './' }, gulp.task('copy-assets'));
  done();
});

gulp.task('watch-components', (done) => {
  gulp.watch([config.paths.components + '**'], { cwd: './' }, gulp.task('copy-component-javascript'));
  done();
});