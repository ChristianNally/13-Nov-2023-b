const assert = require('assert');
const sayHello = require('../say-hello');

describe('tests for the sayHello function', () => {

  it('should return "hello there alice" when given the string "alice"', () => {
    const actual = sayHello('alice');
    const expected = 'hello there alice!';

    assert.strictEqual(typeof actual, 'string');
    assert.strictEqual(actual, expected);
  });

  it('should return null if called with no arguments', () => {
    const actual = sayHello();
    const expected = null;

    assert.strictEqual(actual, expected);
  });

});
