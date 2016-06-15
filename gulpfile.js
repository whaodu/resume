var gulp = require('gulp');
var browserSync = require('browser-sync').create();
var reload = browserSync.reload;
var sass = require('gulp-sass');
var jshint = require('gulp-jshint');

gulp.task('server',['sass'],function(){
	browserSync.init({
		server:{
			baseDir:'./app'
		}
	});

	// gulp.watch("build")
	gulp.watch("app/scss/*.scss", ['sass']);
	gulp.watch(["app/*html","app/pages/*html"]).on('change',reload);

})

// scss编译后的css将注入到浏览器里实现更新
gulp.task('sass', function() {
    return gulp.src("app/scss/*.scss")
        .pipe(sass())
        .pipe(gulp.dest("app/css"))
        .pipe(reload({stream: true}));
});

gulp.task('js', function() {
	return gulp.src('app/js/*.js')
		.pipe(jshint())
		.pipe(jshint.reporter('jshint-stylish'))
		.pipe(reload({
			stream: true
		}));
});


gulp.task('default',['server']);























