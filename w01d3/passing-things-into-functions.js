function addTen(number){
    number = number + 10;
    return number;
}

let age = 22;
const returnValue = addTen(age);
console.log('returnValue', returnValue);
console.log('age', age);


function addTenToCount(object){
    object.count = object.count + 10;
    return object.count;
}

let myObject = {
    count: 13
};

console.log('myObject before', myObject);
const attcRV = addTenToCount(myObject);
console.log('myObject after', myObject);
