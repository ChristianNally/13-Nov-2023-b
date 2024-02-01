I've written a function that tells me how many weeks until Christmas. Can you tell me whether it has any bugs?

Here it is:

function ghghgh() {
  var fdasdafdsadsadf = new Date();
  var f7f7f = fdasdafdsadsadf.getFullYear();
  var o12djj2ds = new Date(f7f7f, 11, 25);

  if (fdasdafdsadsadf.getMonth() === 11 && fdasdafdsadsadf.getDate() > 25) {
    o12djj2ds.setFullYear(f7f7f + 1);
  }

  var diff = o12djj2ds.getTime() - fdasdafdsadsadf.getTime();
  
  return Math.ceil(diff / (60 * 1000 * 24 * 61));
}

I am writing a function called countWhich() which will take in a list of items and a callback, and it will 
return the number of elements which return a truthy value from the callback function. But there is a bug in 
my implementation. Can you find that bug?

const countWhich = function(list, cb) {
  let count = 0;
  if (!Array.isArray(list)) {
    return false;

  }

  for (let i = 1; i < list.length; i++) {
    if (cb(list[i])) {
      count++;
    }
  }
  return count;
};


Could you write a set of test functions to be used by Mocha and Chai that test the edge cases for that function?

Sure! Here is a set of test functions using Mocha and Chai that test the edge cases for the countWhich function:

const assert = require('chai').assert;
const countWhich = require('./countWhich');

describe('countWhich', function() {
  it('should return the number of elements that return truthy from the callback', function() {
    const list = [1, 2, 3, 4, 5];
    const cb = function(x) { return x % 2 === 0; }
    const result = countWhich(list, cb);
    assert.equal(result, 2);
  });

  it('should return 0 if no elements return truthy from the callback', function() {
    const list = [1, 3, 5];
    const cb = function(x) { return x % 2 === 0; }
    const result = countWhich(list, cb);
    assert.equal(result, 0);
  });

  it('should return false if the first argument is not an array', function() {
    const list = 'not an array';
    const cb = function(x) { return true; }
    const result = countWhich(list, cb);
    assert.isFalse(result);
  });

  it('should return 0 if the array is empty', function() {
    const list = [];
    const cb = function(x) { return true; }
    const result = countWhich(list, cb);
    assert.equal(result, 0);
  });

  it('should return the length of the array if all elements return truthy from the callback', function() {
    const list = [2, 4, 6];
    const cb = function(x) { return x % 2 === 0; }
    const result = countWhich(list, cb);
    assert.equal(result, list.length);
  });
});

Note that these tests assume that the countWhich function has been exported from a module and imported 
using require. If you are not using modules, you can remove the require statement and just use the 
countWhich function directly.

