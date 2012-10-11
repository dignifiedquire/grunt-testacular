
module.exports = function(grunt) {
  var cfg, createOptions, path, runner, server, _;
  server = require('testacular').server;
  runner = require('testacular').runner;
  cfg = require("" + __dirname + "/../node_modules/testacular/lib/config");
  path = require('path');
  _ = grunt.utils._;
  createOptions = function(options) {
    var defaultOptions;
    defaultOptions = {
      basePath: '',
      files: [],
      exclude: [],
      reporter: 'progress',
      port: 8080,
      runnerPort: 9100,
      colors: true,
      logLevel: 'LOG_DEBUG',
      autoWatch: true,
      browsers: ['PhantomJS'],
      singleRun: false,
      configFile: ''
    };
    options = _.extend(defaultOptions, options);
    return cfg.parseConfig(options.configFile, options);
  };
  grunt.registerMultiTask('testacularServer', 'starts a testacular server', function() {
    var done, file, filepaths, options, paths, _i, _len;
    options = this.data.options;
    if (this.file.src) {
      filepaths = grunt.file.expandFiles(this.file.src);
      grunt.file.clearRequireCache(filepaths);
      paths = filepaths.map(path.resolve);
      options.files = [];
      for (_i = 0, _len = paths.length; _i < _len; _i++) {
        file = paths[_i];
        options.files.push(file);
      }
    }
    grunt.log.writeln("Options: " + (JSON.stringify(options)));
    server.start(options);
    return done = this.async();
  });
  return grunt.registerMultiTask('testacularRun', 'starts a testacular server', function() {
    var done, filepaths, options, paths;
    filepaths = grunt.file.expandFiles(this.file.src);
    grunt.file.clearRequireCache(filepaths);
    paths = filepaths.map(path.resolve);
    options = createOptions(this.data.options);
    done = this.async();
    return runner.run(options, function(exitCode) {
      if (exitCode > 0) {
        grunt.fail(exitCode);
      }
      return done();
    });
  });
};
