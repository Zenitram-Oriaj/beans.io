module.exports = function (grunt) {

	grunt.initConfig({

		jshint:   {
			options: {
				jshintrc: '.jshintrc'
			},
			target:  {
				src: 'public/js/*.js'
			}
		},
		concat:   {
			options: {
				separator: ";",
				banner:    "/* Jairo Martinez 2016 */\n"
			},
			target:  {
				src:  'public/js/*.js',
				dest: 'tmp/app.js'
			}
		},
		uglify:   {
			options: {
				mangle:    true,
				compress:  true,
				sourceMap: "dist/js/app.map",
				banner:    "/* Jairo Martinez 2016 */\n"
			},
			target:  {
				src:  "tmp/app.js",
				dest: "dist/app.min.js"
			}
		},
		watch:    {
			scripts: {
				files: ["public/js/*.js","public/*.*"],
				tasks: ["jshint"]
			}
		},
		nodeunit: {
			target: 'test/*_test.js'
		},
		clean:    {
			target: ['dist', 'dest', 'lib']
		}
	});

	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-nodeunit');
	grunt.loadNpmTasks('grunt-contrib-clean');

	grunt.registerTask("default", ['jshint', 'concat', 'uglify']);
	grunt.registerTask("refresh", ['clean', 'default']);

	grunt.registerTask("tutorial", "this is an example task", function () {
		if (+new Date() % 2 === 0) {
			console.log('the time is even');
		} else {
			console.log('the time is odd');
		}
	});

};