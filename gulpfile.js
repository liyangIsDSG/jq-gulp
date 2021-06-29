const gulp = require('gulp')
// 压缩 css 函数工具
const cssmin = require('gulp-cssmin')
// 压缩 html 函数工具
const htmlmin = require('gulp-htmlmin')
// 压缩 js 函数工具
const uglify = require('gulp-uglify')
// 压缩图片函数工具
const imagemin = require('gulp-imagemin')



const cssHandler = function () {
    return gulp.src('./src/skin/css/*.css')
        .pipe(cssmin()) // css 代码压缩
        .pipe(gulp.dest('./scbsxc.cn/skin/css')) // 打包到的目录
}

const htmlHomeHandler = function() {
    return gulp.src('./src/*.html')
    .pipe(htmlmin({
        collapseWhitespace: true, // 去重空格
        removeEmptyAttributes: true,
        minifyCSS: true, //压缩 html 的 style
        minifyJS: true,
        minifyURLs: true,
    }))
    .pipe(gulp.dest('./scbsxc.cn/'))
}
const htmlProductsHandler = function () {
    return gulp.src('./src/a/products/*.html')
        .pipe(htmlmin({
            collapseWhitespace: true, // 去重空格
            removeEmptyAttributes: true,
            minifyCSS: true, //压缩 html 的 style
            minifyJS: true,
            minifyURLs: true,
        }))
        .pipe(gulp.dest('./scbsxc.cn/a/products'))
}

const htmlAboutHandler = function () {
    return gulp.src('./src/a/about/*.html')
        .pipe(htmlmin({
            collapseWhitespace: true, // 去重空格
            removeEmptyAttributes: true,
        }))
        .pipe(gulp.dest('./scbsxc.cn/a/about'))
}

const jsHandler = function () {
    return gulp.src('./src/skin/js/*.js')
        .pipe(uglify()) // js 代码压缩
        .pipe(gulp.dest('./scbsxc.cn/skin/js')) // 打包到的目录
}

const imgHandler = function () {
    return gulp.src('./src/skin/img/*.*')
        .pipe(imagemin())
        .pipe(gulp.dest('./scbsxc.cn/skin/img'))
}

const uploadImgHandler1 = function() {
    return gulp.src('./src/uploads/200809/*.*')
    .pipe(imagemin())
    .pipe(gulp.dest('./scbsxc.cn/uploads/200809'))
}
const uploadImgHandler2 = function() {
    return gulp.src('./src/uploads/200831/*.*')
    .pipe(imagemin())
    .pipe(gulp.dest('./scbsxc.cn/uploads/200831'))
}
const uploadImgHandler3 = function() {
    return gulp.src('./src/uploads/allimg/200809/*.*')
    .pipe(imagemin())
    .pipe(gulp.dest('./scbsxc.cn/uploads/allimg/200809'))
}

module.exports.cssHandler = cssHandler
module.exports.htmlHomeHandler = htmlHomeHandler
module.exports.htmlProductsHandler = htmlProductsHandler
module.exports.htmlAboutHandler = htmlAboutHandler
module.exports.jsHandler = jsHandler
module.exports.imgHandler = imgHandler
module.exports.uploadImgHandler1 = uploadImgHandler1
module.exports.uploadImgHandler2 = uploadImgHandler2
module.exports.uploadImgHandler3 = uploadImgHandler3

