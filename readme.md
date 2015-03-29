# is-tar [![Build Status](http://img.shields.io/travis/kevva/is-tar/master.svg?style=flat)](https://travis-ci.org/kevva/is-tar)

> Check if a Buffer/Uint8Array is a TAR file


## Install

```
$ npm install --save is-tar
```


## Usage

```js
var isTar = require('is-tar');
var read = require('fs').readFileSync;

isTar(read('file.tar'));
//=> true
```


## License

MIT © [Kevin Mårtensson](https://github.com/kevva)
