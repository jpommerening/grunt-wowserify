var through = require('through');
var uglify = require('uglify-js');
var endswith = require('./utils').endswith;

module.exports = function (extension) {
  extension = extension || '';

  return function uglify(file) {
    if (!endswith(file, extension)) {
      return through();
    }

    return through(write, end);

    function write(buffer) {
    }

    function end() {
    }
  };
};
