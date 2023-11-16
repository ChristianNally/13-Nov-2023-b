const ourMap = function(arr, callback) {
  // create an empty output array
  const output = [];

  // loop through the provided array
  for (const index in arr) {
    const element = arr[index];

    // call the provided callback with each element AND capture the return value
    const returnVal = callback(element);

    // add the return value to the output array
    output.push(returnVal);
  }

  // return the output array
  return output;
};

const names = ['alice', 'bob', 'carol'];
const callback = function(name) {
  return `${name} is a good name`;
};

const mapped = ourMap(names, callback);
console.log('original array', names);
console.log('mapped array', mapped);

const builtIn = names.map(callback);
console.log('builtin map', builtIn);
