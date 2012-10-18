#
# grunt-testacular
# https://github.com/dignifiedquire/grunt-testacular
#
# Copyright (c) 2012 Friedel Ziegelmayer
# Licensed under the MIT license.
#
module.exports = (grunt) ->
  server = require('testacular').server
  _ = grunt.utils._
  
  grunt.registerMultiTask 'testacularServer', 'Starts up a testacular server.', ->
    done = @async()

    # start the server
    server.start @data, (exitCode) ->
      done(false) if exitCode > 0
  


    
  
  