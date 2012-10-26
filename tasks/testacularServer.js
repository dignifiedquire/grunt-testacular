
module.exports = function(grunt) {
  var server, _;
  server = require('testacular').server;
  _ = grunt.utils._;
  return grunt.registerMultiTask('testacularServer', 'Starts up a testacular server.', function() {
    var done, _base, _base1, _ref, _ref1;
    done = this.async();
    if ((_ref = (_base = this.data).options) == null) {
      _base.options = {};
    }
    if ((_ref1 = (_base1 = this.data.options).keepalive) == null) {
      _base1.keepalive = false;
    }
    server.start(this.data, function(exitCode) {
      if (exitCode > 0) {
        return done(false);
      }
    });
    if (!this.data.options.keepalive) {
      return done();
    }
  });
};
