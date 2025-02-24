var a = "js";

function f1() {
    console.log("hello");
    let x = 10;
    console.log(x);
    function f2 () {
        console.log("inner function");
        console.log(x); //% Accessing outer function variable inside the inner function which creates closure for the outer function.
    };
    f2();
};
f1();

var b = 20;
function f3 () {
    // var b = 900;
    let f4 = () => {
        console.log(b);
    };
    f4();
};
f3();

