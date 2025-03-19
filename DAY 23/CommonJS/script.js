let sum = (a,b) => {
    console.log(a+b);   
};

let sub = (a,b) => {
    if (a>b) {
        console.log(a-b);
    } else {
        console.log(b-a);
    }
};

let multiply = (a,b) => {
    console.log(a*b);
};

let arr = [10,20,30,40,50];

var o = {
    name: "sachin",
};

module.exports = {
    sum,
    sub,
    multiply,
    arr,
    o,
}