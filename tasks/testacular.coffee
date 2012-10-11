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
  cfg = require "#{__dirname}/../node_modules/testacular/lib/config"
  path = require 'path'
  _ = grunt.utils._
  
  createOptions = (options) ->
    defaultOptions = 
      basePath: ''
      files: []
      exclude: []
      reporter: 'progress'
      port: 8080
      runnerPort: 9100
      colors: true
      logLevel: 'LOG_DEBUG'
      autoWatch: true
      browsers: ['PhantomJS']
      singleRun: false
      configFile: ''
    options = _.extend defaultOptions, options
    cfg.parseConfig(options.configFile, options)

  
  grunt.registerMultiTask 'testacularServer', 'starts a testacular server', ->

    # Set default 
    #options = createOptions @data.options
    options = @data.options
    
    if @file.src
      # read the file paths in
      filepaths = grunt.file.expandFiles @file.src
      grunt.file.clearRequireCache filepaths
    
      paths = filepaths.map path.resolve
    
      # add all files to the files that are loaded by testacular
      options.files = []
      options.files.push file for file in paths
    
    
    grunt.log.writeln "Options: #{JSON.stringify options}"
    # start the server
    server.start options
    
    done = @async()
    # done()
  
  grunt.registerMultiTask 'testacularRun', 'starts a testacular server', ->
    
    filepaths = grunt.file.expandFiles @file.src
    grunt.file.clearRequireCache filepaths
    
    paths = filepaths.map path.resolve
    
    # Set default 
    options = createOptions @data.options
    
    done = @async()
    
    # run the tests
    runner.run options, (exitCode) ->
      grunt.fail exitCode if exitCode > 0
      done()


    
  
  