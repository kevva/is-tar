'use strict';
module.exports = buf => {
	if (!buf || buf.length < 262) {
		return false;
	}

	return buf[257] === 0x75 && buf[258] === 0x73 && buf[259] === 0x74 && buf[260] === 0x61 && buf[261] === 0x72;
};
