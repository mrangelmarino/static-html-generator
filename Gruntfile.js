/*
 * wennerstatichtml
 * https://github.com/mrangelmarino/wennerstatichtml
 *
 * Copyright (c) 2015 Angel Marino
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function(grunt) {
	
	pkg: grunt.file.readJSON('package.json'),

	grunt.initConfig({
		
		csv2json: {
			options: {
				inputFilePath: 'csv',
				outputFilePath: 'json'
			}
		},
		
		jshint: {
			options: {
				reporter: require('jshint-stylish'),
				ignores: ['public/dist/js/libs/**']
			},
			build: ['public/src/js/**/*.js']
		},
		
		uglify: {
			build: {
				files: {
					'public/dist/js/script.min.js': ['public/src/js/**/*.js']
				}
			}
		},
		
		sass: {
			dist: {
				options: {
					style: 'expanded'	
				},
				files: {
					'public/src/css/style.css': 'public/src/css/style.scss'
				}
			}
		},
		
		cssmin: {
			build: {
				files: {
					'public/dist/css/style.min.css': 'public/src/css/style.css'
				}
			}
		},
		
		imagemin: {
			dynamic: {
				files: [{
					expand: true,
					cwd: 'public/src/img',
					src: '**/*.{png,jpg,gif,svg}',
					dest: 'public/dist/img/'
				}]
			}	
		},
		
		watch: {
			stylesheets: {
				files: ['public/src/css/*.css', 'public/src/css/**/*.scss'],
				tasks: ['sass', 'notify:sass', 'cssmin', 'notify:cssmin']
			},
			scripts: {
				files: ['public/src/js/**/*.js'],
				tasks: ['jshint', 'uglify', 'notify:uglify']
			},
			images: {
				files: ['public/src/img/**'],
				tasks: ['imagemin', 'notify:imagemin']
			}
		},
		
		notify_hooks: {
		    options: {
		      enabled: true,
		      success: false, // whether successful grunt executions should be notified automatically
		      duration: 3 // the duration of notification in seconds, for `notify-send only
		    }
		},
		
		notify: {
			cssmin: {
				options: {
					message: 'CSSMin finished'
				}
			},
			sass: {
				options: {
					message: 'Sass finished'
				}
			},
			uglify: {
				options: {
					message: 'Uglify finished'
				}
			},
			imagemin: {
				options: {
					message: 'Imagemin finished'
				}
			}
		}	
				
	  
	});

	grunt.loadNpmTasks('grunt-csv2json');
	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-sass');
	grunt.loadNpmTasks('grunt-contrib-cssmin');
	grunt.loadNpmTasks('grunt-contrib-imagemin');
	grunt.loadNpmTasks('grunt-newer');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-notify');
	
	grunt.task.run('notify_hooks');
	
	grunt.registerTask('default', ['newer:uglify', 'newer:sass', 'newer:cssmin', 'newer:imagemin']);
	
			
};
