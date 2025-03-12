// ~ Spread operator

var arr = [10, 20, 30, 40, 50];
console.log(arr);
console.log(...arr);
var str = "javascript";
console.log(str);
console.log(...str);
var obj = { 
    name: "javascript", 
    id: 10 
};
//console.log(...obj); // # Uncaught TypeError: Spread syntax requires ...iterable[Symbol.iterator] to be a function

var x = [10, 20];
var y = [30, 40];
var z = [50, 60];
console.log([...x, ...y, ...z]);
console.log([...str]);

// ~ Array Destructuring

let ar = ["js", "python", "java", "SQL", "React"];
const [p,q,...r] = ar;
console.log(p);
console.log(q);
console.log(r);

// ! Copying the array:

let newArr = [...ar];
console.log(newArr);
console.log(arr === newArr); 

// ~ Object Destructuring

const id = 900;

var emp = {
    name: "Sachin",
    id: 200,
    email: "S@gmail.com",
    salary: 90000,
    skills: "SQL",
};

// ~ A rest element must be last in an object destructuring pattern

const {salary, id : eid,phone, ...any} = emp;

console.log(salary);
console.log(phone);
console.log(id);
console.log(eid);
console.log(any);