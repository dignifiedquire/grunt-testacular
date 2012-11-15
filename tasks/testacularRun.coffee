#
# grunt-testacular
# https://github.com/dignifiedquire/grunt-testacular
#
# Copyright (c) 2012 Friedel Ziegelmayer
# Licensed under the MIT license.
#
module.exports = (grunt) ->
  runner = require('testacular').runner
  
  grunt.registerMultiTask 'testacularRun', 'Run tests on a testacular server. ', ->
    done = @async()
    
    # run the tests
    runner.run @data, (exitCode) ->
      if exitCode > 1
        done(false)
      else
        done()
