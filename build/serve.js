var gulp = require("gulp"),
  path = require("path"),
  express = require("express"),
  gutil = require("gulp-util");

var app = express();

gulp.task("serve", function () {
  app.use(express.static(path.resolve("./vendor/bower_components")));
  app.use(express.static(path.resolve("./output")));
  app.listen(5454);
  gutil.log("Listening on port: 5454");
});
