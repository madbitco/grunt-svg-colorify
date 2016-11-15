/*
 * grunt-svg-colorify
 * https://github.com/madbitco/grunt-svg-colorify
 *
 * Copyright (c) 2016 MADBIT Co.
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function (debug) {
  var logger = function(msg) {
    if (debug) {
      console.log('Debug: ' + msg);
    }
  };

  return logger;
};
