var gulp = require("gulp");
var gutil = require("gulp-util");
var notify = require('gulp-notify');
var source = require("vinyl-source-stream");
var buffer = require('vinyl-buffer');
var browserify = require("browserify");
var watchify = require("watchify");
var babelify = require("babelify");

var browserSync = require("browser-sync").create();

var ENTRY_FILE = "./src/js/index.js";
var OUTPUT_DIR = "./build/js";
var OUTPUT_FILE = "bundle.js";
var DELAY = 50;

gulp.task('styles', function(){  
    gulp.src(sassFiles)
        .pipe(sass().on('error', sass.logError))
        .pipe(concatCss('build.css'))
        .pipe(uglifycss())
        .pipe(gulp.dest(cssDest));
});

gulp.task("watch", function () {
    gulp.watch('./comp/scss/*.scss','styles');
    gulp.watch(["*.html", "./dist/css/*.css",]).on('change', reload);
    var b = browserify({ entries: [ ENTRY_FILE ] }).transform(babelify);

    function bundle() {
        b.bundle()
        .on("log", gutil.log)
        .on("error", notify.onError())
        .pipe(source(OUTPUT_FILE))
        .pipe(buffer())
        .pipe(gulp.dest(OUTPUT_DIR))
        .pipe(browserSync.reload({ stream: true }));
    }

    watchify(b, { delay: DELAY }).on("update", bundle);
    bundle();
});

gulp.task("serve", function () {
    browserSync.init({
        server: {
            baseDir: "./"
        }
    });
});

gulp.task("default", [ "watch", "serve", "styles" ]);
