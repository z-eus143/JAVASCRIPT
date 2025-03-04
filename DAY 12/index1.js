// ! Arry HOF

var arr = [10,20,30,40,50,60,70];

let b = arr.find((v,i,n) => {
    console.log(v);
    console.log(i);
    console.log(n);
    return v > 30;
});

console.log(`value is ${b}`);

let c = arr.findIndex((v,i,n) => {
    console.log(v);
    console.log(i);
    console.log(n);
    return v > 20;
});

console.log(`index value is ${c}`);