
module.exports = function(grunt) {
  var defaultOptions, path, testacular, _;
  testacular = require('testacular');
  path = require('path');
  _ = grunt.utils._;
  defaultOptions = {
    basePath: '',
    files: [],
    exclude: [],
    reporter: 'progress',
    port: 8080,
    runnerPort: 9100,
    colors: true,
    logLevel: 'LOG_INFO',
    autoWatch: true,
    browsers: ['PhantomJS'],
    singleRun: false,
    configFile: ''
  };
  return grunt.registerMultiTask('testacular', 'Run tests with testacular', function() {
    var done, file, filepaths, options, paths, _i, _len;
    filepaths = grunt.file.expandFiles(this.file.src);
    grunt.file.clearRequireCache(filepaths);
    paths = filepaths.map(path.resolve);
    options = _.extend(defaultOptions, this.data.options);
    for (_i = 0, _len = paths.length; _i < _len; _i++) {
      file = paths[_i];
      options.files.push(file);
    }
    testacular.server.start(options);
    return done = this.async();
  });
};
