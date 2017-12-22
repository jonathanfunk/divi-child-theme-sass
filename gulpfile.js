var gulp = require('gulp'),
  rename = require('gulp-rename'),
  plumber = require('gulp-plumber'),
  sass = require('gulp-sass'),
  autoprefixer = require('gulp-autoprefixer'),
  cssnano = require('gulp-cssnano'),
  notify = require('gulp-notify');

var plumberErrorHandler = {
  errorHandler: notify.onError({
    title: 'Gulp',
    message: 'Error: <%= error.message %>'//Will see a notification if not able to compile Sass file
  })
};

gulp.task('sass', function () {
  gulp.src('./sass/ls-styles.scss')
    .pipe(plumber(plumberErrorHandler))
    .pipe(sass())
    .pipe(autoprefixer({
      browsers: ['last 2 versions']
    }))
    .pipe(gulp.dest('./'))
    .pipe(cssnano())
    .pipe(rename('ls-styles.css'))
    .pipe(gulp.dest('./'));
});

//Default Watch Task
gulp.task('default',function() {
  gulp.watch('sass/**/*.scss',['sass']);
});