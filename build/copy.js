var gulp = require("gulp"),
  gutil = require("gulp-util");

gulp.task("copy", ["scripts", "assets"]);

gulp.task("scripts", function () {
  return gulp.src("src/scripts/*.js")
    .pipe(gulp.dest('./output/scripts'))
});

gulp.task("assets", function () {
  return gulp.src("src/assets/*.*")
    .pipe(gulp.dest('./output/assets'))
});
