/*
 * grunt-svg-colorify
 * https://github.com/madbitco/grunt-svg-colorify
 *
 * Copyright (c) 2016 MADBIT Co.
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function (data, done) {
  data.logger('Loading SVG file: ' + data.file.src);

  data.svg = data.grunt.file.read(data.file.src);

  done(null, data);
};
