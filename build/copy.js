var gulp = require("gulp"),
  gutil = require("gulp-util");

gulp.task("copy", ["assets"]);

gulp.task("assets", function () {
  return gulp.src("src/assets/*.*")
    .pipe(gulp.dest('./output/assets'))
});
