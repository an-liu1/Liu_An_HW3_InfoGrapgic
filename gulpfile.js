var gulp = require('gulp'),
    sass = require('gulp-sass')
    browserSync = require('browser-sync').create();

gulp.task('sass', function() {
  return gulp.src('./sass/**/*.scss')
  .pipe(sass({outputStyle : 'compressed'}).on('error', sass.logError))
  .pipe(gulp.dest('./css'));
});

gulp.task('sass:watch', function()
{
gulp.watch('.sass/**/*.scss', ['sass']);
});

gulp.task('serve', function()
{
    browserSync.init({
        server: {
            baseDir : './',
            index: 'dindex.html'
        }
    });
});