var gulp = require('gulp');
var uncss = require('gulp-uncss');

gulp.task('default', function() {
    return gulp.src(['_site/custom.css', 'node_modules/tachyons/css/tachyons.min.css'])
        .pipe(uncss({
            html: ['_site/**/*.html']
        }))
        .pipe(gulp.dest('./_site/dest'));
});
