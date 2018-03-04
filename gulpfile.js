const gulp = require('gulp');
const watch = require('gulp-watch');
const postcss = require('gulp-postcss');
const autoprefixer = require('autoprefixer');
const cssvars = require('postcss-simple-vars');
const nested = require('postcss-nested');
const atImport = require('postcss-import');
const browserSync = require('browser-sync');

gulp.task('default', () =>{
  console.log("You created your first task!");
});

gulp.task('styles', () =>{
    return gulp.src('./app/assets/styles/styles.css')
    .pipe(postcss([atImport(),  autoprefixer(), cssvars(), nested()]))
    .pipe(gulp.dest('./app/temp/styles'));
});


gulp.task('watch', () =>{

  browserSync.init({
    notify:false,
    server: {
      baseDir: "app"
    }
  });
  watch('./app/index.html', () =>{
    browserSync.reload();
  });
  watch('./app/assets/styles/**/*.css', () =>{
    gulp.start('cssInject');
  });

});

gulp.task('cssInject', ['styles'], () =>{
  return gulp.src('./app/temp/styles.css')
  .pipe(browserSync.stream());
});
