var wowserify = require('../lib');

module.exports = function (grunt) {
  grunt.registerMultiTask('wowserify', 'wow. such umd. the browserify.', function () {
    var options = this.options({

    });

    var done = this.async();
    var wow  = wowserify(this.files.src);

    wow.require('./' + options.main);

    console.log(options);
    console.log(this.files);

    var p = wow.bundle({debug: options.debug});
    p.pipe(process.stdout);
    p.on('end', done);
  });
};
