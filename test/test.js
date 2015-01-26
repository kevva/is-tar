'use strict';

var isTar = require('../');
var path = require('path');
var readChunk = require('read-chunk');
var test = require('ava');

test('should detect TAR from buffer', function (t) {
	t.plan(2);

	readChunk(path.join(__dirname, 'fixtures/test.tar'), 0, 262, function (err, buf) {
		t.assert(!err, err);
		t.assert(isTar(buf));
	});
});
