const gulp = require('gulp');
const sass = require('gulp-sass');
const sourcemaps = require('gulp-sourcemaps');
const autoprefixer = require('gulp-autoprefixer');
const babel = require("gulp-babel");

/* sass */
gulp.task('sass', () => {
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
gulp.task('watch', () => {
    //gulp.watch('sass/**/*.scss', ['sass']);
    gulp.watch('index.scss', ['sass']);
    gulp.watch('.scss', ['sass']);
});

/* autoprefix */ 
gulp.task('prefix', () => {
    gulp.src('css/index.css')
        .pipe(autoprefixer({
            browsers: ['last 2 versions'],
            cascade: false
        }))
        .pipe(gulp.dest('css'))
});

/* babel */ 
gulp.task('babel', () => {
	gulp.src('js/app.js')
		.pipe(babel({
			presets: ['env']
		}))
		.pipe(gulp.dest('dist'))
});