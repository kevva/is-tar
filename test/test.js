/*global describe, it */
'use strict';

var assert = require('assert');
var fs = require('fs');
var isTar = require('../');
var path = require('path');

describe('isTar()', function () {
    function check(file) {
        return isTar(fs.readFileSync(file));
    }

    it('should detect TAR from buffer', function (cb) {
        assert(check(path.join(__dirname, 'fixtures/test.tar')));
        cb();
    });
});
