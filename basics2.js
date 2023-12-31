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

//* debugging steps
/*
1. use console.log() to print variables to the console and check the output
2. use debugger keyword to create breakpoints
3. use chrome dev tools to debug the code
*/

// identify, find, fix, prevent

console.table(ilkayObject);

//* Regular and Arrow Functions with this Keyword

var age2 = 33;

const samet = {
  firstName: 'Samet',
  age: 23,
  calAge: function () {
    console.log(this.age);
  },

  calAgeNew: () => {
    console.log(this.age2);
  },
};

samet.calAge();
samet.calAgeNew();

// regular function calls do not create this keyword so it gives undefined when try to access this.
// arrow functions use this keyword from parent scope.

// can be used self and that to prevent it

const sametNew = {
  firstName: 'Samet',
  age: 23,
  calAge: function () {
    const self = this;
    const isMillenial = function () {
      console.log(self.age >= 1981 && self.age <= 1996);
    };
    isMillenial();
  },
};

// also can use arrow functions

const sametNew2 = {
  firstName: 'Samet',
  age: 23,
  calAge: function () {
    const isMillenial = () => {
      console.log(this.age >= 1981 && this.age <= 1996);
    };
    isMillenial();
  },
};

//* Arguments keyword

const addExpr = function (a, b) {
  console.log(arguments);
  return a + b;
};

console.log(addExpr(2, 3));
console.log(addExpr(2, 3, 4));

// arrow functions do not have arguments keyword.

//* Primitives and Objects

let age3 = 30;
let oldAge = age3;
age3 = 31;

console.log(age3);
console.log(oldAge); // there is no change

const objectNew = {
  firstName: 'Samet',
};

const objectNew2 = objectNew;
objectNew2.firstName = 'kral';

console.log(objectNew);
console.log(objectNew2); // there is change
