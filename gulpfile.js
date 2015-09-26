var gulp         = require('gulp');
var concat       = require('gulp-concat');
var streamqueue  = require('streamqueue');

//gulp.task('build-js', () => {
//    return streamqueue({ objectMode: true },
//        gulp.src('./public/angular/config/*.js'),
//        gulp.src('./public/angular/services/**/*.js'),
//        gulp.src('./public/angular/modules/**/*.js'),
//        gulp.src('./public/angular/primitives/**/*.js'),
//        gulp.src('./public/js/**/*.js')
//    )
//        .pipe(concat('app.js'))
//        .pipe(gulp.dest('./public/build/js'));
//});