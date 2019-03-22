var gulp = require('gulp');
var watch =require('gulp-watch');
var browserSync = require('browser-sync').create();

gulp.task('watch',function(){
  browserSync.init({
    notify:false,
    server:{
      baseDir: "public"
    }
  });
});

  watch('./public/styles/**/*.css', function(){
    gulp.start('cssInject');
  });

  watch('./public/scripts/**/*.js', function(){
    gulp.start('scriptsRefresh');
  });

    gulp.task('cssInject',['styles'], function(){
      return gulp.src('./public/styles/temp/style.css');

    });

   gulp.task('scriptsRefresh',['scripts'], function(){
   browserSync.reload();
  });
