module.exports = function(grunt) {

    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-uglify');

    grunt.initConfig({
        copy: {
            dist: {
                files: [
                    {expand: true, src: ['server/**'], dest: 'dist/'},
                    {expand: true, src: ['client/**', '!client/app'], dest: 'dist/'},
                ],
            }
        },
        uglify: {
            dist: {
                files: [
                    {expand: true, cwd: 'client/app', src: '**/*.js', dest: 'dist/client/app'}
                ]
            }
        }
    });

    grunt.registerTask('dist', [
        'copy:dist',
        'uglify:dist'
    ])

};