#
# grunt-testacular
# https://github.com/dignifiedquire/grunt-testacular
#
# Copyright (c) 2012 Friedel Ziegelmayer
# Licensed under the MIT license.
#




module.exports = (grunt) ->
  server = require('testacular').server
  runner = require('testacular').runner
  path = require 'path'
  _ = grunt.utils._
  
  grunt.registerMultiTask 'testacularServer', 'starts a testacular server', ->

    grunt.log.writeln "Options: #{JSON.stringify @data}"

    done = @async()
    # start the server
    server.start @data, (exitCode) ->
      grunt.fail exitCode if exitCode > 0
      #done()
  
  grunt.registerMultiTask 'testacularRun', 'starts a testacular server', ->
    
    done = @async()
    
    # run the tests
    runner.run @data, (exitCode) ->
      grunt.fail exitCode if exitCode > 0
      done()


    
  
  