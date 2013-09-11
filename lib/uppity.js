/*jshint node:true */

"use strict";

var path = require("path"),
    glob = require("glob");

module.exports = function(filter, args) {
    var opt   = Object.create(args || {}),
        cwd   = path.resolve(opt.cwd || "."),
        dirs  = cwd.split(path.sep),
        files = [];
    
    opt.maxDepth = 1;
    opt.cwd      = cwd;
    
    while(dirs.length > 0) {
        files = files.concat(
            glob.sync(filter, opt).map(function(file) {
                return path.join(opt.cwd, file);
            })
        );
        
        dirs.pop();
        opt.cwd = dirs.join(path.sep) + path.sep;
    }
    
    return files;
};
