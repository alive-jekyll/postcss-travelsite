var gulp 			= require('gulp'),
	watch 			= require('gulp-watch'),
	browsersync		= require('browser-sync').create();


gulp.task('watch', function(){

	browsersync.init ({
		notify: false,
		server: {
			baseDir:'./'
		}
	});

	watch('./index.html', function(){
		browsersync.reload();
	});

	watch('sass/**/*.css', function() {
		gulp.start( 'cssInject' );
		browsersync.reload();
	});

});


gulp.task('cssInject', ['styles'], function() {

	gulp.src('./styles/styles.css')
		.pipe(browsersync.stream());

});