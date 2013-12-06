var fs = require('fs');
var path = require('path');
var _ = require('lodash');
var sourcemap  = require('source-map');
var browserify = require('browserify');
var uglify = require('uglify-js');
var through = require('through');

/* Schematic:
 *
 * sources -> transforms -> browserify -> umd -> uglify
 */

module.exports = function (entries, opts) {
  var b = browserify(entries, opts);

  b.transform(function (file) {
    console.log(file);
    var buffer = '';
    var sourceMap = uglify.SourceMap({});

    return through(function write(data) {
      buffer += data;
    }, function end() {
      var compressor = uglify.Compressor({warnings: true});
      var toplevel = uglify.parse(buffer, {
        filename: file
      });

      toplevel.figure_out_scope();
      toplevel = toplevel.transform(compressor);
      toplevel.figure_out_scope();
      toplevel.compute_char_frequency();
      toplevel.mangle_names(true);

      console.log(toplevel);

      var os = uglify.OutputStream({source_map: sourceMap});
      toplevel.print(os);
      this.queue(os.toString());
      console.log(sourceMap.toString());
      this.queue(null);
    });
  });
  return b;
};
