const { src, dest, watch, series, parallel } = require("gulp");
const sass = require('gulp-sass')(require('sass'));
const sourcemaps = require('gulp-sourcemaps');
const replace = require('gulp-replace');
const concat = require('gulp-concat');
const php = require('gulp-connect-php');
const browserSync = require('browser-sync');

// Scripts
function generateJS(cb) {
	src('assets/scripts/main.js')
		.pipe(concat('main.js'))
		.pipe(dest('build/'));
	cb();
}

// Styles
function generateCSS(cb) {
	src('./assets/css/main.scss')
		.pipe(sourcemaps.init())
		.pipe(sass().on('error', sass.logError))
		.pipe(sourcemaps.write('.'))
		.pipe(replace('../../img', './img'))
		.pipe(dest('build/'));
	cb();
}

// Assets
function processImages(cb) {
	src('./assets/img/**/*.{gif,jpg,png,svg,mp4}')
		.pipe(dest('build/img'));
	cb();
}

// Assets
function processFonts(cb) {
	src('./assets/fonts/*.{woff,woff2}')
		.pipe(dest('build/fonts'));
	cb();
}

// Libs
function processLibs(cb) {
	src('./assets/libs/**/*')
		.pipe(dest('build/libs'));
	cb();
}

// Server
function server(cb) {
	php.server({ }, function() {
		browserSync({
      proxy: '127.0.0.1:8000'
    });
	});

	cb();
}

// BrowserSync
/* function syncBrowser(cb) {
	browserSync.init({
		proxy: "localhost:8010",
		baseDir: "./",
		open: true,
		notify: false
	});

	cb();
} */

function reload(cb) {
	browserSync.reload()
	cb()
}

function watchFiles(cb) {
	watch('./templates/**/*.twig', { ignoreInitial: false }, series(reload));
	watch('./templates/*.twig', { ignoreInitial: false }, series(reload));
	watch('./assets/img/*.{gif,jpg,png,svg,mp4}', { ignoreInitial: false }, series(processImages, reload));
	watch('./assets/fonts/*.{woff,woff2}', { ignoreInitial: false }, series(processFonts, reload));
	watch('./assets/libs/**/*', { ignoreInitial: false }, series(processLibs, reload));
	watch('./assets/css/**/*.scss', { ignoreInitial: false }, series(generateCSS, reload));
	watch('./assets/scripts/**/*.js', { ignoreInitial: false }, series(generateJS, reload));
	watch('./src/**/*.php', browserSync.reload());
	watch('./index.php', browserSync.reload());
}

exports.default = series(
	parallel(processImages, processFonts, processLibs, generateCSS, generateJS),
	parallel(server),
	watchFiles
)
