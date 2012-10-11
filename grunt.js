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
        options: {
          configFile: 'test/testacular.conf.js'
        },
        src:  'test/fixtures/unit_test.js'
      }
    },
    testacularRun: {
      unit: {
        options: {
          configFile: 'test/testacular.conf.js'
        },
        src: 'test/fixtures/*.js'
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