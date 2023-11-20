const assert = require('assert');

// const helloFuncs = require('./say-hello');
// console.log(helloFuncs.sayHello);

const sayHello = require('./say-hello');

// driver code
const actual = sayHello('alice');
const expected = 'hello there alice';

assert.strictEqual(typeof actual, 'string');
assert.strictEqual(actual, expected);

