
module.exports = function(grunt) {
  var path, runner, server, _;
  server = require('testacular').server;
  runner = require('testacular').runner;
  path = require('path');
  _ = grunt.utils._;
  grunt.registerMultiTask('testacularServer', 'starts a testacular server', function() {
    var done;
    grunt.log.writeln("Options: " + (JSON.stringify(this.data)));
    done = this.async();
    return server.start(this.data, function(exitCode) {
      if (exitCode > 0) {
        return grunt.fail(exitCode);
      }
    });
  });
  return grunt.registerMultiTask('testacularRun', 'starts a testacular server', function() {
    var done;
    done = this.async();
    return runner.run(this.data, function(exitCode) {
      if (exitCode > 0) {
        grunt.fail(exitCode);
      }
      return done();
    });
  });
};
