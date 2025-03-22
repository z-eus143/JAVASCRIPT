var std = {
    name : "sachine",
    id : 400,
    skills : ["js","react"],
    address : {
        doorno : 400,
        location : "thane",
        pincode : 400406,
    },
    percentage : 98,
};

// ! by copying the object reference :

// var copy1 = std;
// std.name = "rohit";
// console.log(copy1);
// console.log(copy1 === std);

// ! by using Object.assign() :

// let copy2 = Object.assign({}, std);
// std.id = 800;
// std.skills[0] = "node";
// console.log(copy2);
// console.log(std === copy2);

// ! for in loop :

// let copy3 = {};
// for (const i in std) copy3[i] = std[i];
// std.id = 134;
// std.address.doorno = 283;
// console.log(copy3);
// console.log(copy3 === std);

// ! using spread operator :

// var copy4 = {...std};
// std.id = 90;
// std.skills[0] = "ruby";
// console.log(copy4);
// console.log(copy4 === std);

// ! deep copy :

// let copy5 = structuredClone(std);
// std.id = 69;
// std.skills[0] = "ruby";
// console.log(copy5);

let string = JSON.stringify(std);
// console.log(string);

let copy6 = JSON.parse(string);
std.id = 69;
std.address.location = "kalyan";
console.log(copy6);