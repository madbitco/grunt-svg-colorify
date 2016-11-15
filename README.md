# grunt-svg-colorify

> Quickly change the colour of your SVG glyphs.

## Getting Started
This plugin requires Grunt `~1.0.0`

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

```shell
npm install grunt-svg-colorify --save-dev
```

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-svg-colorify');
```

## The `svgcolorify` task

### Overview
In your project's Gruntfile, add a section named `svg_colorify` to the data object passed into `grunt.initConfig()`.

```js
grunt.initConfig({
  svgcolorify: {
    test: {
      options: {
        colorify: '#ff6b6b',
        cleanup: false,
        debug: false
      },
      files: [
        {
          expand: true,
          cwd: 'svg_dir/',
          src: '**/*.svg',
          dest: 'target_dir'
        }
      ]
    }
  }
});
```

### Options

#### colorify
Type: `String` or `false`  
Default value: `false`

A string value of a desired HEX colour to give to your SVG files. Use `false` to disable.

#### cleanup
Type: `Bool`  
Default value: `false`

Clean-up your SVGs from all sorts of dirt, such as comments, Illustrator leftovers, converting IDs to classes, etc. **Recommended for processing non-optimised/raw SVGs.**

##### debug
Type: `Boolean`  
Default: **false**

Log task progress and details about the processing of each SVG.

## Contributing

Your feedback is most welcome.

Have a troublesome SVG you are using that isn't generating the output you'd expect? Open an [issue](https://github.com/madbitco/grunt-svg-colorify/issues) with the details and include the SVG markup for us to test with.

Bugs? [Report them here](https://github.com/madbitco/grunt-svg-colorify/issues).
