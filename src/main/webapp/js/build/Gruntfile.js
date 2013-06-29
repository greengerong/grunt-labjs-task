
module.exports = function (grunt) {

    grunt.initConfig({
            uglify: {
                ngi_uglify: {
                    compress: true,
                    expand: true,
                    files: {
                        '../release/q1.min.js': ['../bootstrap/q1.js'],
                        '../release/q2.min.js': ['../bootstrap/q2.js'],
                        '../release/q34.min.js': ['../others/**/*.js']
                    }

                }
            }
        }
    )
    ;

    grunt.loadNpmTasks('grunt-contrib-uglify');

    grunt.registerTask('default', 'description.', function () {

        var tmpl = grunt.file.read("bootstrap.tmpl");

        grunt.file.write("../release/bootstrap.js", grunt.template.process(tmpl));

    });
    grunt.registerTask('ci', "description", function () {
        grunt.task.run(['uglify']);
        grunt.file.copy("bootstrap.js", "../release/bootstrap.js");
    });

}
;