const sayHello = (name) => {
  if (name === undefined) {
  // if (!name) {
    return null;
  }

  return `hello there ${name}!`;
};

module.exports = sayHello;

// module.exports.sayHello = sayHello;
// module.exports.somethingElse = 'I am also exported';
// module.exports.log = console.log;

// module.exports = {
//   sayHello: sayHello,
//   log: console.log,
// };
