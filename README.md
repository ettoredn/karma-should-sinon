karma-should-sinon
===========

Sinon.js assertions for Should.js on karma

Installation
------------

Install the module via npm

```sh
$ npm install karma-should-sinon --save-dev
```

Add `sinon` to the `frameworks` key in your Karma configuration *before* `should`.

```js
module.exports = function(config) {
  'use strict';
  config.set({
    #...
    frameworks: ['mocha', 'should-sinon', 'should', 'sinon'],
    #...
  });
}
```
See [Should.js documentation](http://shouldjs.github.io/#assertion-called).
