'use strict';

//* destructing arrays

const arr = [2, 3, 4];
const a = arr[0];
const b = arr[1];
const c = arr[2];

let [x, y, z] = arr;

//* switch elements

[x, y] = [y, x];

//* nested destructing

const nested = [2, 4, [5, 6]];
const [i, , j] = nested;
const [k, , [l, m]] = nested;

//* default values

const [p = 1, q = 1, r = 1] = [8, 9];

//* destructing objects

const obj = {
  firstName: 'John',
  lastName: 'Smith',
  age: 31,
};

const { firstName, age, lastName } = obj;
console.log(firstName, age, lastName);

//* change variable names

const { firstName: fn, age: ag, lastName: ln } = obj;
console.log(fn, ag, ln);

//* default values

const { firstName: fn1 = 'John', age: ag1 = 31, lastName: ln1 = 'Smith' } = obj;
console.log(fn1, ag1, ln1);

//* mutating variables

let a1 = 111;
let b1 = 999;

const obj1 = { a1: 23, b1: 7, c1: 14 };

({ a1, b1 } = obj1); // use parantheses

//* nested objects

const obj2 = {
  firstName: 'John',
  lastName: 'Smith',
  age: 31,
  job: {
    title: 'Software Engineer',
    company: 'Google',
  },
};

const {
  job: { title, company },
} = obj2;
console.log(title, company);

//* default values

const {
  job: { title: tit = 'Software Engineer', company: com = 'Google' },
} = obj2;
console.log(tit, com);

//* destructing with functions

const calcAgeRetirement = (year) => {
  const age = new Date().getFullYear() - year;
  return [age, 65 - age];
};

const [age2, retirement] = calcAgeRetirement(1990);

//* destructing with functions and objects

const calcAgeRetirement1 = (year) => {
  const age = new Date().getFullYear() - year;
  return {
    age,
    retirement: 65 - age,
  };
};

const { age: age3, retirement: retirement1 } = calcAgeRetirement1(1990);

//* destructing with function parameters

const calcAgeRetirement2 = ({ name, age, schooler }) => {
  console.log(`${name} is ${age} years old and in ${schooler}`);
};

const objectNameAndAge = {
  name: 'İlkay',
  age: 31,
  schooler: 'Gazi',
};

calcAgeRetirement2(objectNameAndAge);

//* spread operator

// spread operator

const newArray = [1, 2, 3];
const newArraySpread = [...newArray, 6, 7];

console.log(newArraySpread);

const arrayOne = [1, 2, 3];
const arrayTwo = [4, 5, 6];

const arrayCombined = [...arrayOne, ...arrayTwo];

console.log(arrayCombined);

// iterables : arrays, strings, maps, sets, not objects

const str = 'İlkay';
const letters = [...str, ' ', 'S.'];
console.log(letters);

// spread operator on objects

const obj3 = { firstName: 'İlkay', lastName: 'S.', age: 31 };
const obj4 = { job: 'Software Engineer', company: 'Google' };
const combinedObj = { ...obj3, ...obj4 }; // merge two objects into one

console.log(combinedObj);

// copy with spread operator

const obj5 = { firstName: 'İlkay', lastName: 'S.', age: 31 };
const obj6 = { ...obj5 };

obj5.firstName = 'Kral';
console.log(obj5);
console.log(obj6); // deep copy

// rest operator

const arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let firstThree;
let rest;
[firstThree, , ...rest] = arr1;

console.log(firstThree);
console.log(rest);

// rest operator with functions

const calcAgeRetirement3 = (year, ...args) => {
  console.log(args);
  return year;
};
calcAgeRetirement3('2021');

//* short circuiting

console.log(3 || 'İlkay'); // 3
console.log('' || 'İlkay'); // İlkay
console.log(true || 0); // true
console.log(undefined || null); // null
console.log(undefined || 0 || '' || 'İlkay' || 23 || null); // İlkay

// with and

console.log(0 && 'İlkay'); // 0
console.log(7 && 'İlkay'); // İlkay

// nullish coalescing operator

const nullishCoalescing = null ?? 'İlkay';
console.log(nullishCoalescing); // İlkay

//* logical assignment operators

// logical assignment operators

let x1 = 10;
// x1 &&= 20;
console.log(x1); // 20

let y1 = 10;
// y1 ||= 20;
console.log(y1); // 10

let z1 = 10;
// z1 ??= 20;
console.log(z1); // 10

//* The for-of loop

// for-of loop

const arr2 = [1, 2, 3, 4, 5, 6, 7, 8, 9];

for (const item of arr2) {
  console.log(item);
}

// for-of loop with entries

for (const [index, item] of arr2.entries()) {
  console.log(`${index} - ${item}`);
}

//* object literals

// object literals

const firstName1 = 'İlkay';

const person = {
  firstName1,
  lastName1: 'S.',
  age1: 31,
  job1: 'Software Engineer',
};

console.log(person);

// object literals with functions

const person1 = {
  firstName1: 'İlkay',
  lastName1: 'S.',
  age1: 31,
  job1: 'Software Engineer',
  calcAge1() {
    this.age1 = new Date().getFullYear() - this.age1;
    return this.age1;
  },
};

console.log(person1.calcAge1());

//* optional chaining

// optional chaining

const person2 = {
  firstName2: 'İlkay',
  lastName2: 'S.',
  age2: 31,
  job2: 'Software Engineer',
};

console.log(person2?.address?.city); // undefined

// with methods

const person4 = {
  firstName2: 'İlkay',
  lastName2: 'S.',
  age2: 31,
  job2: 'Software Engineer',
  calcAge2() {
    this.age2 = new Date().getFullYear() - this.age2;
    return this.age2;
  },
};

console.log(person4?.calcAge2?.()); // 31

//* nullish coalescing operator

// nullish coalescing operator

const person3 = {
  firstName3: 'İlkay',
  lastName3: 'S.',
  age3: 31,
  job3: 'Software Engineer',
  address3: '',
};

console.log(person3.address3 ?? 'Ankara'); // ' '

//* dynamic object keys

// dynamic object keys

function printPersonInfo({ name, ...rest }) {
  console.log(name);
  console.log(rest);
}

printPersonInfo({ name: 'İlkay', age: 31, job: 'Software Engineer' });

//*  Object Keys, Values and Entries

// Object Keys, Values and Entries

const person5 = {
  firstName5: 'İlkay',
  lastName5: 'S.',
  age5: 31,
  job5: 'Software Engineer',
  address5: '',
};

console.log(Object.keys(person5));
console.log(Object.values(person5));
console.log(Object.entries(person5));

//* Sets

//sets

const mySet = new Set([1, 2, 3, 2, 3, 4]);

console.log(mySet);

//* Maps

//maps

const myMap = new Map([
  ['name', 'İlkay'],
  ['age', 31],
  ['job', 'Software Engineer'],
]);

console.log(myMap);

// convert object to map

const myMap2 = new Map(Object.entries(person5));

//* Work with Strings

// Work with Strings

const airline = 'Turkish Airlines';

airline.slice(0, 7); // Turkish

airline.slice(8); // Airlines

airline.slice(-2); // es

airline.slice(0, airline.indexOf(' ')); // Turkish

airline.slice(airline.lastIndexOf(' ') + 1); // Airlines

airline.slice(0, airline.indexOf(' ')).toUpperCase(); // TURKISH

airline.slice(0, airline.indexOf(' ')).toLowerCase(); // turkish

// check seat

const checkMiddleSeat = function (seat) {
  const s = seat.slice(-1);
  if (s === 'B' || s === 'E') {
    console.log('You got the middle seat');
  } else {
    console.log('You got lucky');
  }
};

checkMiddleSeat('11B'); // You got the middle seat

// comparing emails

const email = 'ilkay@beevision.ai';
const loginEmail = '   ilkay@Beevision.ai   \n';

const normalizedEmail = loginEmail.toLowerCase().trim();
console.log(normalizedEmail);

// replacing

const priceGB = '288,97£';
const priceUS = priceGB.replace('£', '$').replace(',', '.');
console.log(priceUS);

const announcement =
  'All passengers come to boarding door 23. Boarding door 23!';
console.log(announcement.replace('door', 'gate'));
console.log(announcement.replaceAll('door', 'gate'));

// string split

let str5 = 'Hello World';
let res = str.split(' ');
console.log(res);

// string join

let arr5 = ['Hello', 'World'];
let res2 = arr.join(' ');
console.log(res2);

//string padStart

let str2 = '5';
let res3 = str2.padStart(4, '0');
console.log(res3);

//string padEnd

let str3 = '5';
let res4 = str3.padEnd(4, '0');
console.log(res4);

const str4 = '  sdad_DASsdas ';

const prettier = function (str) {
  const words = str4.toLowerCase().trim().split('_');
  const newWord =
    words[0] + words[1].replace(words[1][0], words[1][0].toUpperCase());
  return newWord;
};

console.log(prettier(str4));
