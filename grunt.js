module.exports = function(grunt) {
  grunt.initConfig({
    coffee: {
      build: {
        options: {
          bare: true
        },
        files: {
          'tasks/testacular.js': 'tasks/testacular.coffee',
          'test/fixtures/*.js': 'test/fixtures/*.coffee'
        }
      }
    },
    watch: {
      files: ['tasks/testacular.coffee', 'test/fixtures/*.coffee'],
      tasks: 'default'
    },
    testacularServer: {
      unit: {
        configFile: 'test/testacular.conf.js',
        files:  [
          '#MOCHA',
          '#MOCHA_ADAPTER',
          'test/fixtures/unit_test.js'
        ]
      }
    },
    testacularRun: {
      unit: {
        configFile: 'test/testacular.conf.js'
      }
    }    
  });


  // Load local tasks.
  grunt.loadTasks('tasks');
  
  // Load dependencies
  grunt.loadNpmTasks('grunt-contrib-coffee');
  
  // Default task.
  grunt.registerTask('default', 'coffee watch');
  
  
}