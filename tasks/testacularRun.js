
module.exports = function(grunt) {
  var runner;
  runner = require('testacular').runner;
  return grunt.registerMultiTask('testacularRun', 'Run tests on a testacular server. ', function() {
    var done;
    done = this.async();
    return runner.run(this.data, function(exitCode) {
      if (exitCode > 1) {
        return done(false);
      } else {
        return done();
      }
    });
  });
};
