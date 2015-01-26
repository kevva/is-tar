'use strict';

module.exports = function (buf) {
	if (!buf || buf.length < 262) {
		return false;
	}

	return buf[257] === 117 && buf[258] === 115 && buf[259] === 116 && buf[260] === 97 && buf[261] === 114;
};
