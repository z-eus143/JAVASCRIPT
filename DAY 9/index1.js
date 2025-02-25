// ! Variable hoisting

console.log(b); //~Undefined

// ~ Uncaught ReferenceError: Cannot access 'a' before initialization
// console.log(a);

let a = 10;
var b = 100;
const c = 20;

// ! Function hoisting

demo();

function demo () {
    // console.log(x);
    // console.log(y);
    // var x = 10;
    // let y = 20;
    console.log("Named function");
};

// arr(); //~ Uncaught ReferenceError: Cannot access 'arr' before initialization

// let arr = () => {
//     console.log("arr");
// };