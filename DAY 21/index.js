let r1 = window.setTimeout(() => {
  console.log('Hello');
}, 5000);

console.log('hi');
console.log('bye');
console.log(r1);

let r2 = window.setInterval(() => {
    console.log("set intervel");
    document.writeln("Demo function" + "<br>");
}, 1000)

console.log(r2);

setTimeout(() => {
    clearInterval(r2);
}, 5000);

let r3 = setTimeout(() => {
    console.log('Hello');
}, 1000);
console.log(r3);

let isLoggedIn = true;

if (isLoggedIn == false) clearTimeout(r3);