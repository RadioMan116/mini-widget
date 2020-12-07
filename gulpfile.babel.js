"use strict";

import gulp from "gulp";

const requireDir = require("require-dir"),
	paths = {
		views: {
			src: [
				"./src/views/index.pug",
				"./src/views/pages/*.pug"
			],
			dist: "./dist/",
			watch: [
				"./src/blocks/**/*.pug",
				"./src/views/**/*.pug"
			]
		},
		styles: {
			src: "./src/styles/main.{scss,sass}",
			dist: "./dist/",
			watch: [
				"./src/blocks/**/*.{scss,sass}",
				"./src/styles/**/*.{scss,sass}"
			]
		},
		scripts: {
			src: "./src/js/index.js",
			dist: "./dist/js/",
			watch: [
				"./src/blocks/**/*.js",
				"./src/js/**/*.js"
			]
		},

		gzip: {
			src: "./src/.htaccess",
			dist: "./dist/"
		}
	};

requireDir("./gulp-tasks/");

export { paths };

export const development = gulp.series("clean",
	gulp.parallel(["views", "styles", "scripts",]),
	gulp.parallel("serve"));

export const prod = gulp.series("clean",
	gulp.parallel(["views", "styles", "scripts", "gzip"]));

export default development;
