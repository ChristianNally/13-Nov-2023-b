// arrow funcs were added in 2015 (ES6)
// advantages of arrow funcs vs regular funcs
// 1. no need for the function keyword yay!!!!
// 2. if only one argument, no need for parens
// 3. if only one line of code, no need for curly braces
// 4. if no curly braces, the line of code is implicitly returned
// 5. arrow funcs do not create `this`


const sayHello1 = function(name) {
  return `hello there ${name}`;
};

const sayHello2 = name => `hello there ${name}`;

const returnVal = sayHello2('dean');

console.log('returnVal is', returnVal);

// if (1 === 1) console.log('they are equal');

// implicit => we don't ask for it to happen
// explicit => we ask for it to happen


const myObj = {
  breed: 'labrador',
  goForWalks: function() {
    console.log(`${this.breed} is a great walker`);
  },
  goForWalk2: () => {
    console.log(`${this.breed} is a great walker`);
  },
  anotherObj: {
    func: () => {
      this
    }
  }
};

myObj.goForWalks();
myObj.goForWalk2();

