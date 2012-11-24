#
# grunt-testacular
# https://github.com/dignifiedquire/grunt-testacular
#
# Copyright (c) 2012 Friedel Ziegelmayer
# Licensed under the MIT license.
#
module.exports = (grunt) ->
  server = require('testacular').server
  
  grunt.registerMultiTask 'testacularServer', 'Starts up a testacular server.', ->
    done = @async()
    
    # default values
    @data.options ?= {}
    @data.options.keepalive ?= false
    @data.configFile = grunt.template.process @data.configFile if @data.configFile
      
    # start the server
    server.start @data, (exitCode) ->
      done(false) if exitCode > 0
    
    
    # unless the keepalive option is set we are finished
    done() unless @data.options.keepalive

