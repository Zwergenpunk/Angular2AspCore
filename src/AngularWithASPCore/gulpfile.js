var gulp = require('gulp');

var paths = { webroot: "./wwwroot/Scripts" };

paths.Shim = "node_modules/core-js/client/shim.min.js";
paths.Zone = "node_modules/zone.js/dist/zone.js";
paths.Reflect = "node_modules/reflect-metadata/Reflect.js";
paths.System = "node_modules/systemjs/dist/system.src.js";

paths.angular = "node_modules/@angular/**/*";
paths.angularInMemoryWebApi = "node_modules/angular2-in-memory-web-api/**/*";
paths.rxjs = "node_modules/rxjs/**/*";

gulp.task("copyToScripts", function () {
    gulp.src([
        paths.Shim,
        paths.Zone,
        paths.Reflect,
        paths.System
    ])
        .pipe(gulp.dest(paths.webroot));


    gulp.src([
           paths.angular,
           paths.angularInMemoryWebApi,
           paths.rxjs
    ], { base: "./node_modules/" }).pipe(gulp.dest(paths.webroot));

});