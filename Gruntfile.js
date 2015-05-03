/*
 * wennerstatichtml
 * https://github.com/mrangelmarino/wennerstatichtml
 *
 * Copyright (c) 2015 Angel Marino
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function(grunt) {

	grunt.initConfig({
	  csv2json: {
		  options: {
			  inputFilePath: 'csv',
			  outputFilePath: 'json'
		  }
	  }
	});

	grunt.loadNpmTasks('grunt-csv2json');
	
};
