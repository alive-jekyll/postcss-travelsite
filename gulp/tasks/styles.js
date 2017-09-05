var gulp 				= require('gulp'),
	postcss 			= require('gulp-postcss'),
	sourcemaps 		= require('gulp-sourcemaps'),
	autoprefixer 	= require('autoprefixer'),
	cssvars 			= require('postcss-simple-vars'),
	cssmixins 		= require('postcss-mixins'),
	nested 				= require('postcss-nested'),
	cssimport 		= require('postcss-import'),
	pxrem 				= require('postcss-pixels-to-rem');



gulp.task('styles', function () {
	gulp.src('sass/styles.css')
		.pipe(sourcemaps.init())
		.pipe( postcss([
					cssimport, 
					pxrem, 
					cssmixins, 
					cssvars, 
					nested, 
					autoprefixer
				]))
		.on('error', function (errorInfo) {
			console.log(errorInfo.toString());
			this.emit('end');
		})
		.pipe(sourcemaps.write('.'))
		.pipe(gulp.dest('styles'));
})