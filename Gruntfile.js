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
          base: 'demo_docs/build/html',
          livereload: true
        }
      }
    },

    compass: {
      prod: {
        options: {
          config: 'compass.rb',
          environment: 'production',
          force: true
        }
      },
      debug: {
        options: {
          config: 'compass.rb',
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
      src: ["demo_docs/build"]
    },

    watch: {
      sass: {
        files: ['sass/*.sass', 'bower_components/**/*.sass'],
        tasks: ['compass:rtd']
      },
      /* watch and see if our javascript files change, or new packages are installed */
      sphinx: {
        files: ['sphinx_rtd_theme/**/*'],
        tasks: ['exec:build_sphinx']
      },
      /* watch our files for change, reload */
      livereload: {
        files: ['demo_docs/**/*'],
        options: { livereload: true }
      }
    }

  });

  grunt.loadNpmTasks('grunt-exec');
  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-compass');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-open');

  grunt.registerTask('default', ['exec:bower_update','clean:src','compass:debug','exec:build_sphinx','connect','open','watch']);
  grunt.registerTask('build', ['exec:bower_update','clean:src','compass:prod','exec:build_sphinx']);
}

