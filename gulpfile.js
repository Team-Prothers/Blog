'use strict';

var gulp = require('gulp');
var concatCss = require('gulp-concat-css');
var cssmin = require('gulp-cssmin');
var stripCssComments = require('gulp-strip-css-comments');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var notify = require('gulp-notify');

// FE related modules
var sass = require('gulp-sass');
var clean = require('gulp-clean');
var sourcemaps = require('gulp-sourcemaps');

// FE sass/css files
var sassDir = './src/sass/**/*.scss';
var sassSource = './src/sass/main.scss';
var cssResult = './public/css/';

// FE JS files
var jsDir = './src/js/**/*.js',
    jsResult = './public/js/';

// Clear site CSS dir
gulp.task('site-clean', function() {
    return gulp.src([cssResult], { read: false })
        .pipe(clean());
});

// Compile site SASS files
gulp.task('site-css', ['site-clean'], function() {
    return gulp.src(sassSource)
        .pipe(sourcemaps.init())
        .pipe(sass().on('error', sass.logError))
        .pipe(sourcemaps.write('./'))
        .pipe(gulp.dest(cssResult));
});

// Compile site JS
gulp.task('site-js', function() {
    return gulp.src([jsDir])
        .pipe(concat('main.js'))
        .pipe(gulp.dest(jsResult));
});

// watch site assets for changes and compile them
gulp.task('watch-site', ['site-css', 'site-js'], function() {
    gulp.watch(sassDir, ['site-css']);
    gulp.watch(jsDir, ['site-js']);
});

// build site assets
gulp.task('compile-site', ['site-css', 'site-js']);

// default tasks
gulp.task('default', ['compile-site']);
gulp.task('watch', ['watch-site']);
