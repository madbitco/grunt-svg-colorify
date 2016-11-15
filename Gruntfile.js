/*
 * grunt-svg-colorify
 * https://github.com/madbitco/grunt-svg-colorify
 *
 * Copyright (c) 2016 MADBIT Co.
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    // Configuration to be run (and then tested).
    svgcolorify: {
      test: {
        options: {
          colorify: '#ff6b6b',
          cleanup: true,
          debug: false
        },
        files: [
          {
            expand: true,
            cwd: 'test/fixtures/',
            src: '**/*.svg',
            dest: 'tmp'
          }
        ]
      }
    },

    // Before generating any new files, remove any previously-created files.
    clean: {
      tests: ['tmp']
    },

    // Unit tests.
    nodeunit: {
      tests: ['test/*-test.js']
    }

  });

  // Actually load this plugin's task(s).
  grunt.loadTasks('tasks');

  // These plugins provide necessary tasks.
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-nodeunit');

  // Whenever the "test" task is run, first clean the "tmp" dir, then run this
  // plugin's task(s), then test the result.
  grunt.registerTask('test', ['clean', 'svgcolorify', 'nodeunit']);

  // By default, lint and run all tests.
  grunt.registerTask('default', ['test']);

};
