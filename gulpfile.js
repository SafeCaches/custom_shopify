var gulp = 			require('gulp'),
	sass = 			require('gulp-ruby-sass'),
	autoprefixer = 	require('gulp-autoprefixer'),
	cleancss = 		require('gulp-clean-css'),
	concat = 		require('gulp-concat');

gulp.task('default', ['style','scripts','watch']);

gulp.task('style', function(){
	return sass('dev/sass/**/*.scss')
		.pipe(concat('_bundle.scss.css.liquid'))
		// .pipe(cleancss())
		.pipe(autoprefixer({
			browsers: ['last 4 versions'],
			cascade: false
		}))
		.pipe(gulp.dest('shopify/assets'));
});


gulp.task('scripts', function(){
	return gulp.src('dev/scripts/**/*.js')
		.pipe(concat('_scripts.js'))
		.pipe(gulp.dest('shopify/assets'));
});

gulp.task('watch', function(){
	gulp.watch('dev/sass/**/*.scss', ['style']);
	gulp.watch('dev/scripts/**/*.js', ['scripts']);
});