/*global describe, it */
'use strict';

var assert = require('assert');
var isTar = require('../');
var path = require('path');
var readChunk = require('read-chunk');

describe('isTar()', function () {
    function check(file) {
        return isTar(readChunk.sync(file, 0, 262));
    }

    it('should detect TAR from buffer', function (cb) {
        assert(check(path.join(__dirname, 'fixtures/test.tar')));
        cb();
    });
});
