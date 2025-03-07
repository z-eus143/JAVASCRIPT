var str = "javascript";

let r1 = str.slice(2,5); //~ slice the string from index 2 to 5
console.log(r1);

console.log(str.slice(-5,-1)); //~ slice the string from index -5 to -1


console.log(str.substring(2,5)); //~ substring the string from index 2 to 5
console.log(str.substr(3,2)); //~ substr the string from index 3 to 2

var st1 = "java";
console.log(st1.charAt(2)); //~ charAt the string at index 2
console.log(st1[2]); //~ charAt the string at index 2

console.log(str.charCodeAt(5)); //~ charCodeAt the string at index 5

console.log(st1.charCodeAt(1)); //~ charCodeAt the string at index 1
console.log(st1.charCodeAt(2)); //~ charCodeAt the string at index 2

let r2 = st1.toUpperCase(); //~ toUpperCase the string to uppercase
console.log(r2);

let st2 = "NODE JS";
let r3 = st2.toLowerCase(); //~ toLowerCase the string to lowercase
console.log(r3);

let s = "hello world";
let r4 = s.indexOf("o w", 1); //~ indexOf the string "o w" from index 1
console.log(r4);

let r5 = s.lastIndexOf("o w", 6); //~ lastIndexOf the string "o w" from index 6
console.log(r5);


