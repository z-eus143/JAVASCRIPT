let a = 10;

let r1 = a < 5 ? "Hello" : "Bye";
console.log(r1);

let num1 = 200;
let num2 = 400;
let big = num1 > num2 ? num1 : num2;

// DATATYPE

// number

const x = 10;
console.log(typeof x);

var y = 2.567;
console.log(typeof y);

// Uncaught SyntaxError: Identifier 'z' has already been declared
// var z = 20;
// let z = 30;


// String

var st1 = "javascript";
console.log(st1[4]);
console.log(typeof st1);

var st2 = 'java"+"'
console.log(st2[20]);
console.log(st2.length);

let st3 = `python`;
console.log(typeof st3);

console.log(`sum 10 and 20 is ${10+20}`);