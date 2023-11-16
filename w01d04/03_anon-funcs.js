// naming things is hard

// const age = 42;
// console.log(age);

// console.log(1000);


const runMyFunc = function(callback) {
  callback('alice');
};

const sayHello = function(name) {
  console.log(`hello there ${name}`);
};

runMyFunc(sayHello);

runMyFunc(function(name) {
  console.log(`hello there ${name}`);
})

// anonymous or inline function
