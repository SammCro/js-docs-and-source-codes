'use strict';
 
// strict mode prevents declare variable without let or const keyword.
// also disable reserverd variable name declaration.

//* functions 

// function declaration

function fruitProcessor(apples, oranges){ 
    const juice = `Juice with ${apples} apples and ${oranges} oranges`;
    return juice;
}

const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice);

// function expression

const fruitProcessorNew = function(apples, oranges) {
    const juice = `Juice with ${apples} apples and ${oranges} oranges`;
    return juice;
}

const appleJuiceNew = fruitProcessorNew(5, 0);
console.log(appleJuiceNew);


// arrow function

