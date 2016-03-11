"use strict";
var gulp = require('gulp'),
    source = require('vinyl-source-stream'),
    browserify = require('browserify'),
    watchify = require('watchify'),
    babelify = require("babelify");


var path = {
    OUT: 'build.js',
    DEST: 'public/',
    ENTRY_POINT: 'app/index.js'
};

gulp.task('watch', function() {

    var props = {
        entries: [path.ENTRY_POINT],
        debug: true,
        fullPaths: true
    };
    var watcher = watchify(browserify(props).transform(babelify, { presets: ["es2015", "react"] }));


    return watcher.on('update', function() {
            watcher.bundle()
                .pipe(source(path.OUT))
                .pipe(gulp.dest(path.DEST));
            console.log('Updated');
        })
        .bundle()
        .pipe(source(path.OUT))
        .pipe(gulp.dest(path.DEST));
});

gulp.task('build', function() {
    browserify({
            entries: [path.ENTRY_POINT]
        }).transform(babelify, { presets: ["es2015", "react"] })
        .bundle()
        .pipe(source(path.OUT))
        .pipe(gulp.dest(path.DEST));
});

gulp.task('debug', function() {
    browserify({
            entries: [path.ENTRY_POINT],
            debug: true,
            fullPaths: true
        }).transform(babelify, { presets: ["es2015", "react"] })
        .bundle()
        .pipe(source(path.OUT))
        .pipe(gulp.dest(path.DEST));
});

gulp.task('production', ['build']);

gulp.task('default', ['watch']);
