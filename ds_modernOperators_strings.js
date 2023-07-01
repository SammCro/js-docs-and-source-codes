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
