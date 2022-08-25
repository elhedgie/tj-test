import gulp from "gulp";
import dartSass from "sass";
import gulpSass from "gulp-sass";
import concatCss from "gulp-concat-css";
import watch from "gulp-watch";

const sass = gulpSass(dartSass);

gulp.task("scss", function () {
  return gulp
    .src("style/*")
    .pipe(sass())
    .pipe(concatCss("main.css"))
    .pipe(gulp.dest("./css"));
});

gulp.task("watch", function () {
  gulp.watch("style/*", gulp.series("scss"));
});
