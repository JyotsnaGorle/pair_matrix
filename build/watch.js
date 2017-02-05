var gulp = require("gulp"),
  jade = require("gulp-jade"),
  sass = require("gulp-sass"),
  server = require("gulp-express"),
  path = require("path"),
  gutil = require("gulp-util");

gulp.task("watch", function () {
  gutil.log("watching");
  gulp.watch("src/**/*.jade", ["jade"]);
  gulp.watch("src/assets/styles/**/*.sass", ["sass"]);
  gulp.watch("src/assets/scripts/*.js", ["copy"]);
});
