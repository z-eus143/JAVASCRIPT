// ! Window Object

// console.log(window);

// window.alert("alert popup");

// let x = window.confirm("do you want to enter ?");
// console.log(x);

var a = 100; //~ var variable will store in window object

// console.log(this);

console.log(this === window);

var b = 90;
function demo() {
    var c = 20;
    console.log(c);
    console.log(this.b);
    console.log(this.a);
}
demo();
