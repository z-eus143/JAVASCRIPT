"use strict"

console.log(this);
var a = 100;
console.log(this.a);

function demo() {
    console.log(this);
}
demo();

let arr = () => {
    console.log(this);
}
arr();

let x = function() {
    console.log(this);
    let ar = () => {
        console.log(this);
    }
    ar();
};
x();

var o = {
    name : "Tanmay",
    demo() {
        console.log(this);
        console.log(this.name);
    },
    ar : () => {
        console.log(this);
    },
};

o.demo();
o.ar();


