const gulp = require('gulp');
const watch = require('gulp-watch');
const postcss = require('gulp-postcss');
const autoprefixer = require('autoprefixer');
const cssvars = require('postcss-simple-vars');
const nested = require('postcss-nested');

gulp.task('default', () =>{
  console.log("You created your first task!");
});

gulp.task('html', () =>{
  console.log("Hello")
})

gulp.task('styles', () =>{
    return gulp.src('./app/assets/styles/styles.css')
    .pipe(postcss([autoprefixer(), cssvars(), nested()]))
    .pipe(gulp.dest('./app/temp/styles'));
});

gulp.task('watch', () =>{
  watch('./app/index.html', () =>{
    gulp.start('html');
  });
  watch('./app/assets/styles/**/*.css', () =>{
    gulp.start('styles');
  });

});
