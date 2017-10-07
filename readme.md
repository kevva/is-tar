# is-tar [![Build Status](https://travis-ci.org/kevva/is-tar.svg?branch=master)](https://travis-ci.org/kevva/is-tar)

> Check if a Buffer/Uint8Array is a TAR file


## Install

```
$ npm install is-tar
```


## Usage

```js
const fs = require('fs');
const isTar = require('is-tar');

isTar(fs.readFileSync('foo.tar'));
//=> true
```


## License

MIT © [Kevin Mårtensson](https://github.com/kevva)
