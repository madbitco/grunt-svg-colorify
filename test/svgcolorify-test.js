/*jshint camelcase: false */
'use strict';

var grunt = require('grunt');
var fs = require('fs');

exports.svgcolorify = {

  material_icons: function (test) {
    test.expect(6);

    var actual = 'tmp/svg/google-material-icons/';
    var expected = 'test/expected/svg/google-material-icons/';

    function checkSVGIcon(name) {
      test.equal(grunt.file.read(actual + name), grunt.file.read(expected + name));
    }

    checkSVGIcon('ic_attachment_24px.svg');
    checkSVGIcon('ic_file_download_24px.svg');
    checkSVGIcon('ic_folder_24px.svg');

    checkSVGIcon('raw/ic_attachment_24px.svg');
    checkSVGIcon('raw/ic_file_download_24px.svg');
    checkSVGIcon('raw/ic_folder_24px.svg');

    test.done();
  }

};
