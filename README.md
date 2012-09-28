grunt-testacular
================

A wrapper for [grunt](http://gruntjs.com) around [testacular](http://vojtajina.github.com/testacular/) that lets you run multiple instances of testacular.

## Installation

First you need to install this plugin in your project

```bash
$ npm install grunt-testacular
```

then load the tasks in your Gruntfile with
```javascript
grunt.loadNpmTasks('grunt-testacular');
```

## Usage

In your Gruntfile add the following to `grunt.initConfig`

```javascript
testacular: {
  unit: {
    options: {
      configFile: 'test/testacular-unit.conf.js'
    },
    src: 'test/examples/*.coffee'
  },
  e2e: {
    options: {
      configFile: 'test/testacular-e2e.conf.js'
    },
    src: 'test/examples/*.coffee'
  }
}
```

## Release History

v0.1.0 - Get this stuff on `npm`.

## License
Copyright (c) 2012 Friedel Ziegelmayer

Licensed under the MIT license.