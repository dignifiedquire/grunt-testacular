module.exports = function(grunt) {
  grunt.initConfig({
    coffee: {
      compile: {
        options: {
          bare: true
        },
        files: {
          'tasks/testacular.js': 'tasks/testacular.coffee'
        }
      }
    },
    watch: {
      files: 'tasks/testacular.coffee',
      tasks: 'default'
    },
    testacular: {
      unit: {
        options: {
          configFile: 'test/testacular.conf.js'
        },
        src: 'test/examples/*.coffee'
      }
    }
  });

  // Load local tasks.
  grunt.loadTasks('tasks');
  
  // Load dependencies
  grunt.loadNpmTasks('grunt-contrib-coffee');
  
  // Default task.
  grunt.registerTask('default', 'coffee');
  
  
}