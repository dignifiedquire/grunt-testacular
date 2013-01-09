module.exports = function(grunt) {
  var server;
  server = require('testacular').server;
  return grunt.registerMultiTask('testacularServer', 'Starts up a testacular server.', function() {
    var done, _base, _base1, _ref, _ref1;
    done = this.async();
    if ((_ref = (_base = this.data).options) == null) {
      _base.options = {};
    }
    if ((_ref1 = (_base1 = this.data.options).keepalive) == null) {
      _base1.keepalive = false;
    }
    if (this.data.configFile) {
      this.data.configFile = grunt.template.process(this.data.configFile);
    }
    server.start(this.data, function(exitCode) {
      return done(exitCode === 0);
    });
    if (!this.data.options.keepalive) {
      return done();
    }
  });
};
