module.exports = function (grunt) {
  'use strict';

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    banner: '/*! <%= pkg.title || pkg.name %> - v<%= pkg.version %> - ' +
      '<%= grunt.template.today("yyyy-mm-dd") %>\n' +
      '<%= pkg.homepage ? "* " + pkg.homepage + "\\n" : "" %>' +
      '* Copyright (c) <%= grunt.template.today("yyyy") %> <%= pkg.author.name %>;' +
      ' Licensed <%= pkg.license || _.pluck(pkg.licenses, "type").join(", ") %> */\n',
    wowserify: {
      options: {
        main: '<%= pkg.main %>',
        transform: [],
        external: []
      },
      dist: {
        src: [],
        dest: 'dist/<%= pkg.name %>.min.js',
        options: {
          debug: true,
          sourceMap: 'dist/<%= pkg.name %>.min.js.map'
        }
      },
      debug: {
        src: [],
        dest: 'dist/<%= pkg.name %>.js',
        options: {
          sourceMap: true
        }
      }
    },
    mochacli: {
      options: {
        require: ['should'],
        ui: 'bdd'
      },
      test: {
        src: ['test/*.js']
      }
    }
  });

  grunt.loadTasks('tasks');
  grunt.loadNpmTasks('grunt-mocha-cli');

  grunt.registerTask('default', ['wowserify']);

};
