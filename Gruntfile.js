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
          base: 'docs/build',
          livereload: true
        }
      }
    },
    copy: {
      fonts: {
        files: [
          {
              expand: true,
              flatten: true,
              src: ['bower_components/font-awesome/fonts/*'],
              dest: 'sphinx_rtd_theme/static/fonts/',
              filter: 'isFile'
          },
          {
              expand: true,
              flatten: true,
              src: ['bower_components/lato-googlefont/Lato-Regular.ttf',
                    'bower_components/lato-googlefont/Lato-Italic.ttf',
                    'bower_components/lato-googlefont/Lato-Bold.ttf',
                    'bower_components/lato-googlefont/Lato-BoldItalic.ttf'],
              dest: 'sphinx_rtd_theme/static/fonts/',
              filter: 'isFile'
          },
          {
              expand: true,
              flatten: true,
              src: ['bower_components/robotoslab-googlefont/RobotoSlab-Bold.ttf',
                    'bower_components/robotoslab-googlefont/RobotoSlab-Regular.ttf'],
              dest: 'sphinx_rtd_theme/static/fonts/',
              filter: 'isFile'
          },
          {
              expand: true,
              flatten: true,
              src: ['bower_components/inconsolata-googlefont/Inconsolata-Bold.ttf',
                    'bower_components/inconsolata-googlefont/Inconsolata-Regular.ttf'],
              dest: 'sphinx_rtd_theme/static/fonts/',
              filter: 'isFile'
          }
        ]
      }
    },

    sass: {
      dev: {
        options: {
          style: 'expanded',
          loadPath: ['bower_components/bourbon/dist', 'bower_components/neat/app/assets/stylesheets', 'bower_components/font-awesome/scss', 'bower_components/wyrm/sass']
        },
        files: [{
          expand: true,
          cwd: 'sass',
          src: ['*.sass'],
          dest: 'sphinx_rtd_theme/static/css',
          ext: '.css'
        }]
      },
      build: {
        options: {
          style: 'compressed',
          sourcemap: 'none',
          loadPath: ['bower_components/bourbon/dist', 'bower_components/neat/app/assets/stylesheets', 'bower_components/font-awesome/scss', 'bower_components/wyrm/sass']
        },
        files: [{
          expand: true,
          cwd: 'sass',
          src: ['*.sass'],
          dest: 'sphinx_rtd_theme/static/css',
          ext: '.css'
        }]
      }
    },

    browserify: {
      dev: {
        options: {
          external: ['jquery'],
          alias: {
            'sphinx-rtd-theme': './js/theme.js'
          }
        },
        src: ['js/*.js'],
        dest: 'sphinx_rtd_theme/static/js/theme.js'
      },
      build: {
        options: {
          external: ['jquery'],
          alias: {
            'sphinx-rtd-theme': './js/theme.js'
          }
        },
        src: ['js/*.js'],
        dest: 'sphinx_rtd_theme/static/js/theme.js'
      }
    },
    uglify: {
      dist: {
        options: {
          sourceMap: false,
          mangle: {
            reserved: ['jQuery'] // Leave 'jQuery' identifier unchanged
          },
          ie8: true // compliance with IE 6-8 quirks
        },
        files: [{
          expand: true,
          src: ['sphinx_rtd_theme/static/js/*.js', '!sphinx_rtd_theme/static/js/*.min.js'],
          dest: 'sphinx_rtd_theme/static/js/',
          rename: function (dst, src) {
            // Use unminified file name for minified file
            return src;
          }
        }]
      }
    },
    exec: {
      bower_update: {
        cmd: 'bower update'
      },
      build_sphinx: {
        cmd: 'sphinx-build docs/ docs/build'
      }
    },
    clean: {
      build: ["docs/build"],
      fonts: ["sphinx_rtd_theme/static/fonts"],
      css: ["sphinx_rtd_theme/static/css"],
      js: ["sphinx_rtd_theme/static/js/*", "!sphinx_rtd_theme/static/js/modernizr.min.js"]
    },

    watch: {
      /* Compile sass changes into theme directory */
      sass: {
        files: ['sass/*.sass', 'bower_components/**/*.sass'],
        tasks: ['sass:dev']
      },
      /* Changes in theme dir rebuild sphinx */
      sphinx: {
        files: ['sphinx_rtd_theme/**/*', 'README.rst', 'docs/**/*.rst', 'docs/**/*.py'],
        tasks: ['clean:build','exec:build_sphinx']
      },
      /* JavaScript */
      browserify: {
        files: ['js/*.js'],
        tasks: ['browserify:dev']
      },
      /* live-reload the docs if sphinx re-builds */
      livereload: {
        files: ['docs/build/**/*'],
        options: { livereload: true }
      }
    }

  });

  grunt.loadNpmTasks('grunt-exec');
  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-open');
  grunt.loadNpmTasks('grunt-browserify');

  grunt.registerTask('default', ['exec:bower_update','clean','copy:fonts','sass:dev','browserify:dev','exec:build_sphinx','connect','open','watch']);
  grunt.registerTask('build', ['exec:bower_update','clean','copy:fonts','sass:build','browserify:build','uglify','exec:build_sphinx']);
}
