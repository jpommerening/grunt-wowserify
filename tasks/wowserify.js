var wowserify = require('../lib');

module.exports = function (grunt) {
  grunt.registerMultiTask('wowserify', 'wow. such umd. the browserify.', function () {
    var options = this.options({

    });

    var done = this.async();
    var wow  = wowserify();

    console.log(arguments);
    console.log(options);
    console.log(this.files);
    done();
  });
};
