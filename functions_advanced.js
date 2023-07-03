'use strict';

//* default parameters

function greet(greeting, name = 'John') {
  console.log(`${greeting} ${name}`);
}

greet('Hello'); // Hello John
greet('Hello', 'Bill'); // Hello Bill

//* value vs reference parameters

function changeName(obj) {
  obj.name = 'Bill';
}

let person = { name: 'Bob' };
changeName(person);
console.log(person); // { name: 'Bill' }

function changeName2(obj) {
  obj.name = 'Bill';
  obj = { name: 'John' };
}

let person2 = { name: 'Bob' };
changeName2(person2);
console.log(person2); // { name: 'Bill' }

//* first class functions and higher order functions

function logGreeting(fn) {
  fn();
}

let logGreeting2 = function () {
  console.log('Hello John!');
};

logGreeting(logGreeting2); // Hello John!

let logGreeting3 = () => {
  console.log('Hello John!');
};

logGreeting(logGreeting3); // Hello John!

//* callback functions

let greetMe = function (callback) {
  console.log('Hello!');
  callback();
};

const array = [1, 2, 3, 4, 5];

array.forEach(function (item) {
  console.log(item);
});

//* returning functions

const greetName = function (greeting) {
  return function (name) {
    console.log(`${greeting} ${name}`);
  };
};

const greeter = greetName('Hello');
greeter('John'); // Hello John

const greetName2 = (greeting) => (name) => console.log(`${greeting} ${name}`);

greetName2('Hi')('Samet');

//* call and apply keywords

const lufthansa = {
  name: 'Lufthansa',
  iataCode: 'LH',
  bookings: [],
};

const book = function (flightNum, name) {
  console.log(
    `${name} booked a seat on ${this.name} flight ${this.iataCode}${flightNum}`
  );
  this.bookings.push({ flight: `${this.iataCode}${flightNum}`, name });
};

book.call(lufthansa, 239, 'John Smith'); // John Smith booked a seat on Lufthansa flight LH239

const eurowings = {
  name: 'Eurowings',
  iataCode: 'EW',
  bookings: [],
};

book.call(eurowings, 239, 'Mary Cooper'); // Mary Cooper booked a seat on Eurowings flight EW239

const flightData = [583, 'George Cooper'];

book.apply(lufthansa, flightData); // George Cooper booked a seat on Lufthansa flight LH583

book.call(eurowings, ...flightData); // George Cooper booked a seat on Eurowings flight EW583

//* bind method
