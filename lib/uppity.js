"use strict";

const path = require("path");

const glob = require("glob");

module.exports = function uppity(filter, args) {
    const opt  = Object.create(args || {});
    const cwd  = path.resolve(opt.cwd || ".");
    const dirs = cwd.split(path.sep);

    let files = [];

    opt.maxDepth = 1;
    opt.cwd      = cwd;

    while (dirs.length > 0) {
        files = files.concat(
            glob.sync(filter, opt).map(function (file) {
                return path.join(opt.cwd, file);
            })
        );

        dirs.pop();
        opt.cwd = dirs.join(path.sep) + path.sep;
    }

    return files;
};
