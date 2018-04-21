const gulp = require('gulp');
const svgSprite = require('gulp-svg-sprite');
const rename = require('gulp-rename');

const config = {
  mode: {
    css:{
      render:{
        css: {
              template: './gulp/templates/sprite.css'
        }

      }
    }
  }
}

gulp.task('createSprite', ()=>{
  return gulp.src('./app/assets/images/icons/**/*.svg')
    .pipe(svgSprite(config))
    .pipe(gulp.dest('./app/temp/sprite'));
})

gulp.task('copySpriteCss', ()=>{
  return gulp.src('./app/temp/sprite/css/*.css')
    .pipe(rename('_sprite.css'))
    .pipe(gulp.dest('./app/assets/styles/modules'));
})
