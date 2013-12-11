Uppity [![Build Status](https://travis-ci.org/tivac/uppity.png?branch=master)](https://travis-ci.org/tivac/uppity) [![Packages](https://david-dm.org/tivac/uppity/status.png)](https://david-dm.org/tivac/uppity/) [![Dev Packages](https://david-dm.org/tivac/uppity/dev-status.png)](https://david-dm.org/tivac/uppity/) [![Bitdeli Badge](https://d2weczhvl823v0.cloudfront.net/tivac/uppity/trend.png)](https://bitdeli.com/free "Bitdeli Badge")
======

Glob every directory in the current branch of the file system tree, returning files that match in order from closest to furthest. Synchronously, because this is intended for CLI usage.

This is pretty new, [findup-sync](https://github.com/cowboy/node-findup-sync/) may be more like what you're after.

## Usage ##

Install via NPM. `npm install uppity`

```javascript
var uppity = require("uppity"),
    files;
    
files = uppity("*.txt");
```

## uppity(pattern, [options]) ##

* `pattern` {String} Pattern to be matched
* `options` {Object} [glob options](https://github.com/isaacs/node-glob#options)
