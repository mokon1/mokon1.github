var gulp = require('gulp');
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');
var autoprefixer = require('gulp-autoprefixer');

/* sass */
gulp.task('sass', function() {
    return gulp.src('index.scss')
        .pipe(sourcemaps.init())
        .pipe(sass({
            errLogToConsole: true,
            outputStyle: 'compact'
        }))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('css'))
});

/* watch */
gulp.task('watch', function(){
    //gulp.watch('sass/**/*.scss', ['sass']);
    gulp.watch('index.scss', ['sass']);
    gulp.watch('.scss', ['sass']);
});

/* autoprefix */ 
gulp.task('prefix', function(){ //name in console
    gulp.src('css/index.css') //source
        .pipe(autoprefixer({
            browsers: ['last 2 versions'],
            cascade: false
        }))
        .pipe(gulp.dest('css')) //folder where is created new file
});