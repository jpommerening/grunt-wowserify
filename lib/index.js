var fs = require('fs');
var path = require('path');
var _ = require('lodash');
var sourcemap  = require('source-map');
var browserify = require('browserify');
var uglify = require('uglify-js');

/* Schematic:
 *
 * sources -> transforms -> browserify -> umd -> uglify
 */

module.exports = function (entries, opts) {
  var b = browserify(entries, opts);
  return b;
};
