const gulp = require('gulp');
const postcss = require('gulp-postcss');
const autoprefixer = require('autoprefixer');
const cssvars = require('postcss-simple-vars');
const nested = require('postcss-nested');
const atImport = require('postcss-import');


gulp.task('styles', () =>{
    return gulp.src('./app/assets/styles/styles.css')
    .pipe(postcss([atImport(),  autoprefixer(), cssvars(), nested()]))
    .on('error',  function(errInfo){
      console.log(errInfo.toString());
      this.emit('end');
    })
    .pipe(gulp.dest('./app/temp/styles'));
});
