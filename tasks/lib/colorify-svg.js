/*
 * grunt-svg-colorify
 * https://github.com/madbitco/grunt-svg-colorify
 *
 * Copyright (c) 2016 MADBIT Co.
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function (data, done) {
  var async = require('async');
  var cheerio = require('cheerio');
  const createDOMpurify = require('dompurify');
  const jsdom = require('jsdom');

  if (!data.options.colorify) {
    done(null, data);
    return;
  }

  data.logger('Colorifying SVGs');

  // Load SVG into Cheerio
  var $ = cheerio.load(data.svg, { xmlMode: true });

  // Given an element, color it by inlining a fill or stroke attribute.
  // If color isn't define, it will use the current computed style for
  // use when applying styles via CSS
  function svgcolor(el, color) {

    var fill = $(el).attr('fill');
    var stroke = $(el).attr('stroke');

    var isFill, isStroke;
    if (!fill && !stroke) {
      isFill = true;
    } else {
      if (fill && fill !== 'none') {
        isFill = true;
      }

      if (stroke && stroke !== 'none') {
        isStroke = true;
      }
    }

    if (isStroke) {
      $(el).attr('stroke', data.options.colorify || stroke);
    }

    if (isFill) {
      $(el).attr('fill', data.options.colorify || fill);
    }
  }

  // The SVG element
  var svgEl = $('svg');

  // Fill and Stroke styles only apply to shapes and text content elements, per the SVG spec:
  // http://www.w3.org/TR/SVG/painting.html#FillProperty
  // http://www.w3.org/TR/SVG/painting.html#StrokeProperty
  //
  // Shapes: http://www.w3.org/TR/SVG/intro.html#TermShape
  // ‘path’, ‘rect’, ‘circle’, ‘ellipse’, ‘line’, ‘polyline’ and ‘polygon’
  //
  // Text: http://www.w3.org/TR/SVG/intro.html#TermTextContentElement
  // ‘altGlyph’, ‘textPath’, ‘text’, ‘tref’ and ‘tspan’
  var shapesAndText = 'path,rect,circle,ellipse,line,polyline,polygon,altGlyph,textPath,text,tref,tspan';
  var els = svgEl.find(shapesAndText);

  // console.log(svgEl);

  els.each(function (index, item) {
    svgcolor(item, data.options.colorify);
  });

  data.svg = $.xml();

  done(null, data);
};
