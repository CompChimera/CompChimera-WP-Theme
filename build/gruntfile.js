const sass = require('node-sass');

module.exports = function(grunt) {

    grunt.initConfig({
        sass: {
            dist: {
              options: {
                  implementation: sass,
                style: 'compressed',
                compass: false,
                sourcemap: false
              },
              files: {
                '../blog/wp-content/themes/chimeraTheme-child/style.css': [
                    'sass/blog.scss'                    
                ],
                '../css/landingpage.min.css' : [ 'sass/landingpage.scss' ]
              }
            }
          },
        watch: {
            options: {
                livereload: true
            },
            sass: {
                files: [
                'sass/**/*.scss'
                ],
                tasks: ['sass']
            },
            tasks: ['sass']
        }
    });
  

    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-sass');

    grunt.registerTask('build', ['sass']);
    grunt.registerTask('default', ['sass', 'watch']);

  
  };