// const promiseGenerator = require('./promise-generator');
// const returnPromise = promiseGenerator.returnPromise;

// const promise = returnPromise('first promise', 1111);
// console.log('promise:', promise);

// // console.log('first');
// // console.log('second');

// // Not the best way to do this
// // setTimeout(()=>{
// //   console.log('promise 6 seconds later:', promise);
// // }, 6000);

// //
// // The RIGHT way to do this
// //

// promise
//   .then((data) => {
//     console.log('third');
//     // const newData = 'another thing';
//     // console.log("newData:",newData);
//     console.log('data:', data);
//     return 42;
//   }) // <--- that is just a function call. no magic there!
//   .then((data2) => {
//     console.log('it is alive!');
//     console.log('data2', data2);
//   });


"use strict";

const {promises: {readFile}} = require("fs");

readFile("index.js")
.then(fileBuffer => {
  console.log('The Goods:', fileBuffer.toString());
})
.catch(error => {
  console.error('monkeyfuzz', error.message);
  process.exit(1);
});

console.log('this is the end of my main thread');
