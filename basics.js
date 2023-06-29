//* let const and var

// let 
let age = 32 ;
age = 23 ;

// const
const constAge = 32 ;
age = 23 ; // error
// also can not create empty variable with const declarition
// always try to use const

// var
var varAge = 32 ;
varAge = 23 ;

//* string literals 

const ilkay = "I'am " + "ilkay " + "and " + 23 + " years old.";
const myName = "İlkay";
console.log(`I am ${myName} \n`);

//* type conversion


let score = '100';
console.log(score + 1); // 1001
score = Number(score);
console.log(score + 1); // 101

console.log(Number("samet")) // NaN number
console.log('23' + '10' + 3) // 23103
console.log('23' + '10' - 3) // 2307

//* falsy values 

// 0 '' undefined null NaN

//* equality operators loose strict 

const age1 = 25;
if (age1 === 25) console.log('You are 25 years old (strict)');

if (age1 == 25) console.log('You are 25 years old (loose)');

const age2 = '25';
if (age2 === 25) console.log('You are 25 years old (strict)');

if (age2 == 25) console.log('You are 25 years old (loose)');
// loose equality operator converts the type of the value
// strict equality operator does not convert the type of the value

//* switch statement

const number = 3;
switch(number) {
    case 1:
    case 3:
        console.log('number is 1');
        break;
    case 2: 
        console.log('number is 2');
        break;
    default:
        console.log('number is not 1 or 2');
        break;
}

//* conditional operator

const samet = 23 > 22 ? (22 > 23 ? 2 : 3) : 4;
console.log(samet);