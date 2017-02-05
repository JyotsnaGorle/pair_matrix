var gulp = require("gulp"),
    jade = require("gulp-jade"),
    sass = require("gulp-sass"),
    server = require("gulp-express"),
    path = require("path"),
    gutil = require("gulp-util");

var reqDir = require("require-dir");
reqDir("./build");

gulp.task("default",["compile", "copy", "serve", "watch"]);
