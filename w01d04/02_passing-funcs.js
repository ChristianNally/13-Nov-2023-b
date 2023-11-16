// callback => a function that you pass to another function to be called/invoked by that function

// higher order function (HOF) => a function that accepts a function as an argument OR a function that returns a function

const sayHello = function(name) {
  console.log(`hello there ${name}`);
};

const username = 'alice';
sayHello(username);

const runMyFunc = function(callback) {
  // console.log(callback.toString());
  callback('alice'); // console.log('alice')
  // sayHello('bob');
};

runMyFunc.anotherFunc = function() {};

runMyFunc(sayHello);
runMyFunc(console.log);

// console.log();
