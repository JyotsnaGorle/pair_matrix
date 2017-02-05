var gulp = require("gulp"),
  jade = require("gulp-jade"),
  sass = require("gulp-sass"),
  gutil = require("gulp-util"),
  browsersync = require('browser-sync'),
  livereload  = require("gulp-livereload");

gulp.task("compile", ["jade","sass", "scripts"]);


gulp.task("jade", function () {
  gutil.log("compiling JADE");
  return gulp.src("src/jade/index.jade")
    .pipe(jade())
    .pipe(gulp.dest('./output'))
    .pipe(browsersync.reload({stream: true}));
});

gulp.task("sass", function () {
  gutil.log("compiling SASS");
  return gulp.src("src/styles/main.sass")
    .pipe(sass())
    .pipe(gulp.dest('./output/styles'))
    .pipe(browsersync.reload({stream: true}));
});

gulp.task("scripts", function () {
  return gulp.src("src/scripts/*.js")
    .pipe(gulp.dest('./output/scripts'))
});

gulp.task("watch", function () {
  gutil.log("watching");
  gulp.watch("src/**/*.jade", ["jade"]);
  gulp.watch("src/assets/styles/**/*.sass", ["sass"]);
  gulp.watch("src/scripts/*.js", ["scripts"]);
});


