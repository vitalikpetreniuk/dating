var gulp = require('gulp'),
	sass = require('gulp-sass'), //Подключаем Sass пакет
    pug = require('gulp-pug'), // Подключаем Browser Sync
	browserSync = require('browser-sync'), // Подключаем Browser Sync
    inject = require('gulp-inject');

gulp.task('sass', function(){ // Создаем таск "sass"
    return gulp.src('app/scss/**/*.scss') // Берем источник
        .pipe(sass().on('error', sass.logError)) // Преобразуем Sass в CSS посредством gulp-sass
        .pipe(gulp.dest('app/css')) // Выгружаем результата в папку app/css
    	.pipe(browserSync.reload({stream: true})) 
});

gulp.task('pug', function() {
    return gulp.src('app/pug/**/*.pug')
        .pipe(pug()) 
        .pipe(gulp.dest('app')); // указываем gulp куда положить скомпилированные HTML файлы
});

// gulp.task('index', function () {
//   var target = gulp.src('app/index.html');
//   // It's not necessary to read the files (will speed up things), we're only after their paths:
//   var sources = gulp.src(['app/js/**/*.js', 'app/css/**/*.css'],{cwd: 'app/'}, {addRootSlash: false}, {read: false}, {relative: true});

//   return target.pipe(inject(sources))
//     .pipe(gulp.dest('app'));
// });

gulp.task('browser-sync', function() { // Создаем таск browser-sync
    browserSync({ // Выполняем browser Sync
        server: { // Определяем параметры сервера
            baseDir: 'app' // Директория для сервера - app
        },
        notify: false // Отключаем уведомления
    });
});

gulp.task('watch', ['browser-sync', 'sass', 'pug'], function() {
    gulp.watch('app/scss/**/*.scss', ['sass']); // Наблюдение за sass файлами
    gulp.watch('app/pug/**/*.pug', ['pug']); 
    // gulp.watch('app/js/**/*.js', 'app/css/**/*.css', ['index']); 
    gulp.watch('app/*.html', browserSync.reload); // Наблюдение за HTML файлами в корне проекта
    gulp.watch('app/js/**/*.js', browserSync.reload);
});