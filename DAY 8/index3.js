"use strict"

// # CASE 1
// s = 10;
// console.log(s); // ! Uncaught ReferenceError: s is not defined

// # CASE 2
// ~ Uncaught SyntaxError: Duplicate parameter name not allowed in this context  

// function demo(a,b,b) {
    // console.log(a + b);
// }
// demo(10,20,30);


function f6() {
    console.log(arguments); // % arguments is an array-like object accessible inside functions that contains the values of the arguments passed to that function.
    let v = arguments;
    console.log(v[0]);
}

f6(10,20,30,40,50,60);

// # CASE 3
// var arguments = 100; // ! Uncaught SyntaxError: Unexpected eval or arguments in strict mode
// console.log(arguments);