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
          config: 'config.rb',
          force: true
        }
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

