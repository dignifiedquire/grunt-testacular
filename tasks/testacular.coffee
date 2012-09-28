#
# grunt-testacular
# https://github.com/dignifiedquire/grunt-testacular
#
# Copyright (c) 2012 Friedel Ziegelmayer
# Licensed under the MIT license.
#


module.exports = (grunt) ->
  testacular = require 'testacular'
  path = require 'path'
  _ = grunt.utils._
  
  defaultOptions = 
    basePath: ''
    files: []
    exclude: []
    reporter: 'progress'
    port: 8080
    runnerPort: 9100
    colors: true
    logLevel: 'LOG_INFO'
    autoWatch: true
    browsers: ['PhantomJS']
    singleRun: false
    configFile: ''
    
  
  grunt.registerMultiTask 'testacular', 'Run tests with testacular', ->
    
    filepaths = grunt.file.expandFiles @file.src
    grunt.file.clearRequireCache filepaths
    
    paths = filepaths.map path.resolve
    
    # Set default 
    options = _.extend defaultOptions, @data.options
    
    # add all files to the files that are loaded by testacular
    options.files.push file for file in paths
    
    # start the server
    testacular.server.start options
    
    
    done = @async()
    # done()
  
  
  
  