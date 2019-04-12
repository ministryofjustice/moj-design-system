const del = require('del');
const gulp = require('gulp');

const config = require('./config.json');

gulp.task('clean', (done) => {
  return del([config.paths.public + '*',
    '.port.tmp'], done)
});