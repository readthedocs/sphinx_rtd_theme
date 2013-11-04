module.exports = function(grunt) {

  // load all grunt tasks
  require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);

  grunt.initConfig({
    open : {
      dev: {
        path: 'http://localhost:1919'
      }
    },

    connect: {
      server: {
        options: {
          port: 1919,
          base: 'demo_docs/build/html'
        }
      }
    },

    compass: {
      src: {
        options: {
          config: 'src/sphinx_rtd_theme/sass/config.rb',
          basePath: 'src/sphinx_rtd_theme/sass',
          force: true
        }
      },
      dist: {
        options: {
          config: 'src/sphinx_rtd_theme/sass/config.rb',
          basePath: 'src/sphinx_rtd_theme/sass',
          outputStyle: 'compressed',
          force: true
        }
      }
    },

    // I use this to build the sphinx_rtd_theme available at https://github.com/snide/sphinx_rtd_theme
    copy: {
      dist : {
        files: [
          {
            expand: true,
            cwd: 'src/sphinx_rtd_theme',
            src: ['**', '!**/sass/**'],
            dest: 'sphinx_rtd_theme'
          }
        ]
      }
    },

    exec: {
      bower_update: {
        cmd: 'bower update'
      },
      build_sphinx: {
        cmd: 'cd demo_docs && make html'
      }
    },
    clean: {
      src: ['demo_docs/build'],
      dist: ['sphinx_rtd_theme/*.html', 'sphinx_rtd_theme/static/**','sphinx_rtd_theme/sass/**']
    },

    watch: {
      sass: {
        files: ['src/sphinx_rtd_theme/*.sass', 'bower_components/**/*.sass'],
        tasks: ['compass:src']
      },
      /* watch and see if our javascript files change, or new packages are installed */
      sphinx_update: {
        files: ['src/sphinx_rtd_theme/static/*.css', 'src/sphinx_rtd_theme/*.js', 'demo_docs/source/*.rst', 'src/sphinx_rtd_theme/*.html'],
        tasks: ['clean:src','exec:build_sphinx']
      },
      /* watch our files for change, reload */
      livereload: {
        files: ['demo_docs/build/html/**/*.html', 'demo_docs/build/html/_static/*.css', 'demo_docs/build/html/_static/*.js'],
        options: {
          livereload: true
        }
      },
    }

  });

  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-exec');
  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-compass');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-open');

  grunt.registerTask('default', ['exec:bower_update','clean:src','exec:build_sphinx','connect','open','watch']);
  grunt.registerTask('dist', ['clean:dist','compass:dist','copy:dist']);

}

