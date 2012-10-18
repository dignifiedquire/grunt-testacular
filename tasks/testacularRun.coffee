#
# grunt-testacular
# https://github.com/dignifiedquire/grunt-testacular
#
# Copyright (c) 2012 Friedel Ziegelmayer
# Licensed under the MIT license.
#




module.exports = (grunt) ->
  runner = require('testacular').runner
  _ = grunt.utils._
  
  grunt.registerMultiTask 'testacularRun', 'Run tests on a testacular server. ', ->
    
    done = @async()
    grunt.log.ok(JSON.stringify @data)
    
    # run the tests
    runner.run @data, (exitCode) ->
      done(false) if exitCode > 1
