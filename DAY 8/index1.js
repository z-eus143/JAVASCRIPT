var e = 90;

let arr = () => {
    console.log("start");
    function demo () {
        console.log("inner function");
        return "nested";
    };
    console.log("hello");
    let r1 = demo();
    console.log(r1);
    return 200;
};
var r2 = arr();
console.log(r2);

let a1 = () => {
    console.log("hello");
    let i1 = () => {
        console.log("inner function");
        return 10;
    };
    return i1;
};

// let r3 = a1();
// let r4 = r3();
// console.log(r4);
console.log(a1()());  // ~ first call will return the inner function body and the second imidiate call will execute the function body

