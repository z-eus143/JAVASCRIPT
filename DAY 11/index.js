//~array non-static methods:

var ar = [10, 20, 30, 40, 50];

let r1 = ar.push(60, 10);

console.log(r1);

console.log(ar);

console.log(ar.length);

let r2 = ar.unshift("js", "java", 10n);

console.log(r2);

console.log(ar);

var r3 = ar.pop();

ar.pop();

console.log(r3);

console.log(ar);

let r4 = ar.shift();

console.log(r4);

console.log(ar);

// slice:

var a2 = [20,10,30,40,50,60,70];
console.log(a2.slice(1,4));
console.log(a2.slice(4));
console.log(a2.slice(-4,-1));
console.log(a2.slice(-3));

// splice:

var a3 = [40,50,60,70,80,90,100];
let v = a3.splice(2,2,"js","java","python");
console.log(a3);
console.log(v);