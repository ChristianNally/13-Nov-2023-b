// function declaration
// function sayHello() {
//   console.log('hello there');
// }

// function expressions
const sayHello = function() {
  console.log('hello there');
};

const copy = sayHello;

copy();
sayHello();

// const returnVal = sayHello();
// console.log('returnVal is', returnVal);

// console.log(sayHello());
// console.log();
// console.log(sayHello.toString());

// sayHello.secretMessage = 'monkeyFuzz';
// sayHello['newKey'] = 'more stuff';

// console.log(sayHello);

const funcs = [];
// funcs.push(sayHello())
funcs.push(sayHello);
funcs.push(console.log);

for (const func of funcs) {
  func();
}

// console.log(funcs);

// // funcs[0]()
// const differentVar = funcs[0];

// console.log(differentVar.toString());



