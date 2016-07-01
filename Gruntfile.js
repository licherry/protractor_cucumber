/*global module:false*/
module.exports = function (grunt) {

    // Project configuration.
    grunt.initConfig({
        // Metadata.
        pkg: grunt.file.readJSON('package.json'),
        // Task configuration.
        jshint: {
            files: ['Gruntfile.js', './features/*.feature'],
            options: {
                // options here to override JSHint defaults
                globals: {
                    jQuery: true,
                    console: true,
                    module: true,
                    document: true
                }
            }
        },
        protractor: {
            options: {
                configFile: "conf.js", // Default config file
                keepAlive: true // If false, the grunt process stops when the test fails.
            },
            chrome: {
                options: {
                    args: {
                        browser: "chrome"
                    }
                }
            },
            singlerun: {}
        },

    });


    // These plugins provide necessary tasks.
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-protractor-runner');

    // Default task.
    grunt.registerTask('e2e', ['protractor:singlerun']);

};
