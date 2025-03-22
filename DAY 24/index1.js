var x = 100;
var y = 100;

console.log(x === y); 

let o = {
    name : "abc"
};

let v = {
    name : "abc"
};

console.log(o === v); 
console.log(o == v); 
console.log(o.name === v.name); 


let arr = [10,20];
let ar = [10,20]; 
console.log(arr === ar); 


const obj = { 
    name : "abc",
    id : 123,
    skills : ["js","react"]
};

obj.id = 3000; 
console.log(obj);