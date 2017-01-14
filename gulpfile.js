var gulp = require('gulp');
var uncss = require('gulp-uncss');
var pug = require('gulp-pug');

gulp.task('pug', function buildHTML() {
    return gulp.src(['_site/**/*.pug'])
    .pipe(pug({
        // Your options in here.
    }))
});

// Not running this anymore. I am hitting a maximum call stack error with gulp while running this task on tachyons. 
gulp.task('uncss', function uncss() {
    return gulp.src(['node_modules/tachyons/css/tachyons.min.css'])
        .pipe(uncss({
            html: ['_site/**/*.html']
        }))
        .pipe(gulp.dest('./_site/dest'));
});

gulp.task('default', ['pug']);
