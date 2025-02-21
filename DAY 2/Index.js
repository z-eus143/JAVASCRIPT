var a = 10;
console.log(a);

var a = 20;
console.log(a);

var x;
console.log(x);
x = 30;
console.log(x);

// Cannot redeclare block-scoped variable 'b'
let b = 20;
b = 40;
console.log(b);

// Uncaught ReferenceError: c is not defined
// console.log(c);

const d = 30;

// Cannot redeclare block-scoped variable 'd'
// const d = 40;

// d = 40; Uncaught TypeError: Assignment to constant variable.

// const z; 'const' declarations must be initialized.

console.log(d);