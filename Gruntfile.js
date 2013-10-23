module.exports = function(grunt) {

  // load all grunt tasks
  require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);

  grunt.initConfig({
    
    compass: {
      dev: {
        options: {
          config: 'sphinx_rtd_theme/sass/config.rb',
          basePath: 'sphinx_rtd_theme/sass',
          force: true
        }
      }
    },
    
    // I use this to build the sphinx_rtd_theme available at https://github.com/snide/sphinx_rtd_theme
    copy: {
      sphinx_rtd_theme : {
        files: [
          {
            expand: true,
            cwd: 'docs/source/_themes/wyrm_theme', 
            src: ['**', '!**/theme.sass', '!**/*.css', '!**/config.rb'],
            dest: '../sphinx_rtd_theme/sphinx_rtd_theme'
          }
        ]
      }
    },

    exec: {
      update: {
        cmd: 'bower update'
      }
    }

  });

  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-exec');
  grunt.loadNpmTasks('grunt-contrib-compass');

  grunt.registerTask('default', ['exec', 'compass']);

}

