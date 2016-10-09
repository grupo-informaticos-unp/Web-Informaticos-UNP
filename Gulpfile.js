var gulp = require('gulp'),
    connect = require('gulp-connect'),
    jshint = require('gulp-jshint'),
    gulpif = require('gulp-if'),
    minifyCss = require('gulp-minify-css'),
    useref = require('gulp-useref'),
    uglify = require('gulp-uglify'),
    sass = require('gulp-sass');


//Servidor de desarrollo
gulp.task('server',function(){
  console.log('iniciando servidor...');
  connect.server({
    root: './app',
    hostname: '0.0.0.0',
    port: 3000,
    livereload: true
  });
})

//Busca errores en el js y nos lo muestra por pantalla
gulp.task('jshint',function(){
  return gulp.src('./app/scripts/**/*.js')
    .pipe(jshint('.jshintrc'))
    .pipe(jshint.reporter('jshint-stylish'))
    .pipe(jshint.reporter('fail'))
});

gulp.task('css',function(){
  return gulp.src('./app/css/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./app/css'))
    .pipe(connect.reload());
});

gulp.task('html',function(){
  console.log('html');
  gulp.src('./app/**/*.html')
    .pipe(connect.reload());
});

gulp.task('js',function(){
  console.log('js');
  gulp.src('./app/**/*.js')
    .pipe(connect.reload());
});


gulp.task('watch',function(){
  console.log('watch');
  gulp.watch(['./app/**/*.html'] , ['html']);
  gulp.watch(['./app/css/**/*.scss'] , ['css']);
  gulp.watch(['./app/scripts/**/*.js' , './Gulpfile.js'] ,['jshint','js']);
});

gulp.task('default',['server','watch']);
