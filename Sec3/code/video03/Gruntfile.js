module.exports = function(grunt) {
  grunt.initConfig({
    ts: {
      default : {
        src: ['*.ts', '!node_modules/**'],
        tsconfig: true
      }
    },
    watch: {
      scripts: {
        files: ['*.ts'],
        tasks: ['exec:jasmine', 'ts']
      }
    }, 
    exec: {
      jasmine: {
        command: 'jasmine spec/product-spec.js'
      }
    }
  });
  grunt.loadNpmTasks('grunt-ts');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-exec');
  grunt.registerTask('default', ['exec:jasmine', 'ts', 'watch']);
};
