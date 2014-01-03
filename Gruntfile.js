
module.exports = function (grunt) {
  'use strict';

  // Project configuration.
  grunt.initConfig({
      pkg: grunt.file.readJSON('package.json'),
      meta: {
          version: '0.1.0',
          banner: '/*!\n* <%= pkg.name %> - v<%= meta.version %>\n' +
              '* http://pylonsproject.org/\n' +
              '* Copyright (c) <%= grunt.template.today("yyyy") %> ' +
              'Pylons Project\n*/\n\n'
      },
      cssmin: {
          dist: {
              src: 'src/pst/static/theme.css',
              dest: 'src/pst/static/theme.min.css'
          }
      },
      less: {
          'default': {
              files: [
                  {
                      src: 'src/styles/theme.less',
                      dest: 'src/pst/static/theme.css'
                  }
              ]
          }
      },
      watch: {
          less: {
              files: ['src/styles/**/*.less'],
              tasks: ['less:default'],
              options: { livereload: true }
          }
      }
  });

  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-watch');

  // Default task.
  grunt.registerTask('default', [
      'less:default'
      ]);
  grunt.registerTask('dist', [
      'cssmin:dist'
      ]);
};
