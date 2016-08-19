var gulp = require('gulp');
var browserify = require('browserify');
var source = require('vinyl-source-stream');
var less = require('gulp-less');


gulp.task('build', ['html', 'browserify', 'css']);

gulp.task('browserify', function() {
    return browserify('./src/js/app.js')
        .bundle()
        //Pass desired output filename to vinyl-source-stream
        .pipe(source('bundle.js'))
        // Start piping stream to tasks!
        .pipe(gulp.dest('./build/js'));
});

gulp.task('css', function(){
    gulp.src('./src/css/*.less')
        .pipe(less())
        .pipe(gulp.dest('./build/css'));
});

gulp.task('html', function(){
    gulp.src('./src/*.html')
        .pipe(gulp.dest('./build'));
});

gulp.task('watch', function () {
   gulp.watch(['./src/**/*'], ['build']);
});