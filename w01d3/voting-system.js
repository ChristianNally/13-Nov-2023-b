// primitives

// let number = 5.5;
// const fullName = "monkey fuzz"; // 'monkey fuzz', `monkey fuzz`
// let didVote = false; // boolean
// const nullValuedVariable = null; // null is a type of its own own
// const undefinedVariable = undefined; // undefined is it's own type


// const voterOneName = "Sandra O'Connor";
// const voterOneAge = 34;
// const voterOneDidVote = true;

// const voter2Name = "Joey Smallwood";
// const voter2DidVote = false;

// const voterThreeFirstName = "Billy";
// const voterThreeLastName = "Holiday";
// const voterThreeDidVote = true;

// count the number of people who voted

const printDefinition = function(){
    console.log(`${firstName} ${this.lastName} didVote: ${this.didVote}`);
};

const thirtyFour = 34;

const voterOne = {
    firstName: "Sandra",
    lastName: "O'Connor",
    age: thirtyFour,
    didVote: false,
    favoriteVoters: {one: 'Joey', two: 'Billy'},
    print: printDefinition
};

const voterTwo = {
    firstName: "Joey",
    lastName: "Smallwood",
    age: 130,
    didVote: false,
    print: printDefinition
};

const voterThree = {
    firstName: "Billy",
    lastName: "Holiday",
    age: 135,
    didVote: true,
    print: printDefinition
};

const listOfVoters = [voterOne, voterTwo, voterThree];


console.log('listOfVoters.length', listOfVoters.length);

// count the number of people who voted

let numberWhoVoted = 0;
for (let voter of listOfVoters) {
    // if (voter.didVote) {
    //     numberWhoVoted++; // numberWhoVoted = numberWhoVoted + 1;
    // }
    if (voter['didVote']) {
        numberWhoVoted++; // numberWhoVoted = numberWhoVoted + 1;
    }
}
console.log('numberWhoVoted', numberWhoVoted);


const propertyName = 'didVote';


console.log('voterOne', voterOne);
console.log('voterOne.didVote', voterOne.didVote);
console.log('voterOne["didVote"]', voterOne["didVote"]);
console.log('voterOne[propertyName]', voterOne[propertyName]);
console.log('voterOne.propertyName', voterOne.propertyName);

// for (let key in lockArray) {
//     console.log('key', key);
// }

for (const property in voterOne) {
    console.log('property', property);
    console.log('voterOne[property]', voterOne.property);
}

voterTwo.print();

// console.log('console.log', console.log);
// console.log('console.log()', console.log());

