/*jshint node:true */

"use strict";

var assert = require("assert"),
    uppity = require("../lib/uppity.js"),
    cwd    = process.cwd();

describe("Uppity", function() {
    
    afterEach(function() {
        process.chdir(cwd);
    });
    
    it("should be a function", function() {
        assert.equal(typeof uppity, "function");
    });
    
    it("should make a copy of the glob args", function() {
        var obj = { fooga : 1 };
        
        uppity("*.fooga", obj);
        
        assert("fooga" in obj);
        assert(!("cwd" in obj));
    });
    
    it("should accept only a filter", function() {
        assert.doesNotThrow(function() {
            uppity("*.fooga");
        });
    });
    
    it("should find local files", function() {
        process.chdir("./test/specimens/local");
        
        var files = uppity("a.txt");
        
        assert(files.length);
        assert.equal(files.length, 1);
    });
    
    it("should find files in parent directories", function() {
        process.chdir("./test/specimens/parent");
        
        var files = uppity("a.txt");
        
        assert(files.length);
        assert.equal(files.length, 1);
    });
    
    it("should find multiple files", function() {
        process.chdir("./test/specimens/deep/these/folders/are/silly");
        
        var files = uppity("a.txt");
        
        assert(files.length);
        assert.equal(files.length, 3);
    });
    
    it("should support manually defining the starting dir", function() {
        var files = uppity("a.txt", {
                cwd : "./test/specimens/local"
            });
        
        assert(files.length);
        assert.equal(files.length, 1);
    });
});
