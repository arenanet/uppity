# uppity

[![Node.js Package](https://github.com/arenanet/uppity/actions/workflows/npm-publish.yml/badge.svg)](https://github.com/arenanet/uppity/actions/workflows/npm-publish.yml)

Glob every directory in the current branch of the file system tree, returning files that match in order from closest to furthest. Synchronously, because this is intended for CLI usage.

This is pretty new, [findup-sync](https://github.com/cowboy/node-findup-sync/) may be more like what you're after.

## Usage ##

Install via NPM: `npm install uppity`

```javascript
const uppity = require("uppity");
    
const files = uppity("*.txt");
```

## uppity(pattern, [options]) ##

* `pattern` `{String}` Pattern to be matched
* `options` `{Object}` [glob options](https://github.com/isaacs/node-glob#options)
