module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        ngAnnotate: {
            options: {
                singleQuotes: true
            },
            app: { //"app" target
                files: {
                    './ready/js/constants.js': ['./js/constants.js'],
                    './ready/js/controllers.js': ['./js/controllers.js'],
                    './ready/js/services.js': ['./js/services.js'],
                    './ready/js/routes.js': ['./js/routes.js'],
                    './ready/app.js': ['./js/solution.js']
                }
            }
        },
        concat: {
            js: { //target
                src: ['./ready/app.js','./ready/js/*.js'],
                dest: './ready/min/app.js'
            }
        },
        uglify: {
            js: { //target
                src: ['./ready/min/app.js'],
                dest: './ready/min/app.js'
            }
        }



        //grunt task configuration will go here     
    });
    //load grunt task
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-ng-annotate');
    //register grunt default task
    grunt.registerTask('default', ['ngAnnotate', 'concat', 'uglify']);
}