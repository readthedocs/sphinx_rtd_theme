module.exports = function(grunt) {

  // load all grunt tasks
  require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);

  grunt.initConfig({

    connect: {
      server: {
        options: {
          port: 9000,
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
            src: ['**', '!sass/'],
            dest: 'dist/sphinx_rtd_theme'
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
      src: ["demo_docs/build"],
      dist: ["dist/sphinx_rtd_theme"]
    },

    watch: {
      sass: {
        files: ['src/sphinx_rtd_theme/*.sass', 'bower_components/**/*.sass'],
        tasks: ['compass:src']
      },
      /* watch and see if our javascript files change, or new packages are installed */
      sphinx_update: {
        files: ['src/sphinx_rtd_theme/static/*.css', 'src/sphinx_rtd_theme/*.js', 'demo_docs/source/*.rst', 'src/sphinx_theme/*.html'],
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

  grunt.registerTask('default', ['bower_update','connect','watch']);
  grunt.registerTask('build', ['clean:dist','compass:dist','copy:dist']);

}

