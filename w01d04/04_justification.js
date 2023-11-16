// single responsibility principle => that our code should be responsible for only one thing

// first class function => functions are values

const loopThroughArray = function(arr, callback) {
  // for (let i = 0; i < arr.length; i++) {
  for (const index in arr) {
    const value = arr[index];
    // console.log(value);
    callback(value); // doOnEachLoop('alice')
  }
};

const names = ['alice', 'bob', 'carol'];

const doOnEachLoop = function(name) {
  console.log(`inside the loop with ${name}`);
};

loopThroughArray(names, doOnEachLoop);
