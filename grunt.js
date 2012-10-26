module.exports = function(grunt) {
  grunt.initConfig({
    coffee: {
      build: {
        options: {
          bare: true
        },
        files: {
          'tasks/*.js': 'tasks/*.coffee'
        }
      }
    },
    watch: {
      files: ['tasks/*.coffee'],
      tasks: 'default'
    },
    testacularServer: {
      unit: {
        configFile: 'test/testacular.conf.js',
        options: {
          keepalive: true
        }
      },
      sync: {
        configFile: 'test/testacular.conf.js'
      }
    },
    testacularRun: {
      unit: {
        runnerPort: 9101
      }
    }    
  });


  // Load local tasks.
  grunt.loadTasks('tasks');
  
  // Load dependencies
  grunt.loadNpmTasks('grunt-contrib-coffee');
  
  // sync task
  grunt.registerTask('sync', 'testacularServer:sync watch')
  // Default task.
  grunt.registerTask('default', 'coffee watch');
  
  
}