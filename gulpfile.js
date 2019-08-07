const gulp = require('gulp'),
      pug = require('gulp-pug'),
      less = require('gulp-less'),
      concat = require('gulp-concat'),
      imagemin = require('gulp-imagemin');;

gulp.task('imagemin', () =>
    gulp.src('src/img/*')
        .pipe(imagemin())
        .pipe(gulp.dest('build/img'))
);

gulp.task('pug', function buildHTML() {
  return gulp.src('src/*.pug')
  .pipe(pug({
    pretty:true
  }))
.pipe(gulp.dest('build'));
});


gulp.task('less', function () {
  return gulp.src('src/less/**/*.less')
    .pipe(less({}))
    .pipe(concat('style.css'))
    .pipe(gulp.dest('build/css'));
});

gulp.task('build', gulp.series('pug', 'less'));
 