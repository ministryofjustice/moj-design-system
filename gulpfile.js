const gulp = require('gulp');
const requireDir = require('require-dir');

// Require all tasks in gulp/tasks, including subfolders
requireDir('./gulp', { recurse: true });

// gulp 4 requires dependency tasks to be defined before they are called.
// We'll keep our top-level tasks in this file so that they are defined at the end of the chain, after their dependencies.

gulp.task('generate-assets', gulp.series(
  'clean',
  gulp.parallel(
    'copy-assets',
    'copy-component-javascript',
    'sass'
  )
));

gulp.task('watch', gulp.parallel(
  'watch-sass',
  'watch-assets',
  'watch-components'
));


gulp.task('default', gulp.series(
  'generate-assets',
  gulp.parallel(
    'watch',
    'server'
  )
));