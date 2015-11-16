"use strict"

var gulp = require('gulp'),
	webserver = require('gulp-webserver'),
	concat = require('gulp-concat'),
	sass = require('gulp-sass'),
	minifyCss = require('gulp-minify-css'),
	rename = require('gulp-rename'),
	prefixer = require('gulp-autoprefixer'),
	livereload = require('gulp-livereload');;

var bc = './bower_components/';


// js
gulp.task('js', function() {
	gulp.src('builds/development/app/*.js').
		pipe(concat('app.js')).
		pipe(gulp.dest('builds/dist/app/'));
});

// css
gulp.task('css', function() {
	gulp.src('builds/development/scss/style.scss').
		//pipe(concat('bundle.css')).
		pipe(sass('')).
		pipe(prefixer("last 2 versions", '> 1%', 'ie 9')).
		//pipe(minifyCss('')).
		pipe(rename('style.min.css')).
		pipe(gulp.dest('builds/dist'));
});

// html
gulp.task('html', function () {
	gulp.src('builds/development/app/**/*.html').
		pipe(gulp.dest('builds/dist/app/'));

	gulp.src('builds/development/*.html').
		pipe(gulp.dest('builds/dist/'));
});

// library
gulp.task('libs', function() {
	gulp.src(bc + 'GreenSock-JS/src/minified/TweenMax.min.js').
		pipe(gulp.dest('./builds/dist/libs/tweenmax/'));

	gulp.src(bc + 'superscrollorama/js/jquery.lettering-0.6.1.min.js').
		pipe(gulp.dest('./builds/dist/libs/scrollmagic/'));

	gulp.src(bc + 'superscrollorama/js/jquery.superscrollorama.js').
		pipe(gulp.dest('./builds/dist/libs/scrollmagic/'));

	gulp.src(bc + 'jquery/dist/jquery.js').
		pipe(gulp.dest('./builds/dist/libs/jquery/'));

	gulp.src([
		bc + 'angular/angular.js',
		bc + 'angular-animate/angular-animate.js',
		bc + 'angular-cookies/angular-cookies.js',
		bc + 'angular-i18n/angular-locale_ru-ru.js',
		bc + 'angular-loader/angular-loader.js',
		bc + 'angular-resource/angular-resource.js',
		bc + 'angular-route/angular-route.js',
		bc + 'angular-sanitize/angular-sanitize.js'
	]).
		pipe(concat('angular.concat.js')).
		pipe(gulp.dest('./builds/dist/libs/angular/'));
});

// server
gulp.task('webserver', function() {
	gulp.src('builds/dist').
		pipe(webserver({
			livereload: true,
			open: true
		}));
});

gulp.task('connect', function() {
	connect.server({
		root: 'builds/dist',
		livereload: true
	});
});

// watch
gulp.task('watch', function() {
	gulp.watch('builds/development/app/**/*.js', ['js']);
	gulp.watch('builds/development/app/*.js', ['js']);
	gulp.watch('builds/development/scss/**/*.scss', ['css']);
	gulp.watch('builds/development/scss/*.scss', ['css']);
	gulp.watch('builds/development/*.html', ['html']);
	gulp.watch('builds/development/app/**/*.html', ['html']);
	gulp.watch('builds/development/*.js', ['webserver']);
});

// default
gulp.task('default', [
	'libs',
	'html',
	'js',
	'css',
	'webserver',
	'watch'
]);