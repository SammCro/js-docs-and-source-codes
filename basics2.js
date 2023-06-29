'use strict';

const { func } = require('prop-types');

// strict mode prevents declare variable without let or const keyword.
// also disable reserverd variable name declaration.

//* functions

// function declaration

function fruitProcessor(apples, oranges) {
  const juice = `Juice with ${apples} apples and ${oranges} oranges`;
  return juice;
}

const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice);

// function expression

const fruitProcessorNew = function (apples, oranges) {
  const juice = `Juice with ${apples} apples and ${oranges} oranges`;
  return juice;
};

const appleJuiceNew = fruitProcessorNew(5, 0);
console.log(appleJuiceNew);

// arrow function

const fruitProcessorArrow = (apples, oranges) =>
  `Juice ${apples} and ${oranges}`;
console.log(fruitProcessorArrow(1, 2));

//* arrays

const friends = ['Michael', 'Steven', 'Peter'];
console.log(friends);

const years = new Array(1, 2, 3);
console.log(years);

// only primative types can not be mutable
// arrays are mutable

friends[2] = 'Jay'; // okey
// friends = ['Bob', 'Alice']; // not okey

// in javascript arrays can hold different types of variables
const jonas = ['Jonas', 'Schmedtmann', 2037 - 1991, 'teacher', friends];

//* array methods

// push and pop
// push adds element to the end of the array
// pop removes last element of the array

const friendsNew = ['Samet', 'İlkay'];
friendsNew.push('Mehmet');

console.log(friendsNew);
friendsNew.pop();
console.log(friendsNew);

// unshift and shift
// unshift adds element to the beginning of the array
// shift removes first element of the array
let numbers = [468, 54, 23, 12];
numbers.unshift(1);
console.log(numbers);
numbers.shift();
console.log(numbers);

// indexOf
console.log(numbers.indexOf(12));

// includes
const doesInclude = numbers.includes(12);
console.log(doesInclude);

//* objects

const ilkayObject = {
  firstName: 'İlkay',
  age: 23,
  job: 'Software Engineer',
  friends: ['Samet', 'Mehmet', 'Ahmet'],
  buffer: function () {
    console.log(`${this.age}`);
  },
};

console.log(ilkayObject.firstName);
console.log(ilkayObject['first' + 'Name']);

ilkayObject.friends.push('Fiko');

console.log(ilkayObject);
ilkayObject.buffer();

//* loops

// for loop
for (let i = 0; i < 100; i++) {
  //console.log(i);
}

for (let i = 31; i > 0; i--) {
  //console.log(i);
}

// while loop

let i = 0;
while (i < 10) {
  i++;
}

// dice loop with while loop

let dice = Math.trunc(Math.random() * 6) + 1;
while (dice !== 5 && dice != 4) {
  console.log(`You rolled a ${dice}`);
  dice = Math.trunc(Math.random() * 6) + 1;
}
