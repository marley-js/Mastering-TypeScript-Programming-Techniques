module.exports = function(grunt) {
  grunt.initConfig({
    ts: {
      default : {
        src: ['*.ts', '!node_modules/**']
      }
    },
    tslint: {
      options: {
        configuration: 'tslint.json'
      },
      files: {
        src: ["*.ts"]
      }
    }
  });
  // grunt.initConfig({
    
  // });
  grunt.loadNpmTasks('grunt-ts');
  grunt.loadNpmTasks('grunt-tslint');
  grunt.registerTask('default', ['ts', 'tslint']);
};