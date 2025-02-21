// ! Scope in js
var a = 10; // ~ global

let b = 20; // ~ script

const c = 30; // ~ script

console.log(a,b,c);

function demo (x, y) {

let d = 40; //~ local

var e = 65; //~ local

const f = 70; //~ local

console.log(x); //~ local

console.log(y); //~ local
}

demo("Js", "Java");
demo("Spring", "react");

{
    var p = 100; //~ global
    let q = 200; //~ block
    const r = 300; //~ block
    console.log(p,q,r);
}

// console.log(q); //# Error