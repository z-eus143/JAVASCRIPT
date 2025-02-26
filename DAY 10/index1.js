let ar = [10,20,30,40];
// let n = 10;
console.log(ar);
console.log(typeof ar);

var r1 = Array.isArray(ar); //~ it checks whether the agrument passed is array type or not and it return bool. value
console.log(r1);  //// true

// ! HOW MANY WAY'S WE CAN CREATE ARRAY

// # 1.LITERAL WAY

let a1 = [10,20];
console.log(a1);

// # 2.USING Array CONSTRUCTOR

let a2 = new Array(10,20,30,40); //~ more then one argument it consider ass array element
console.log(a2);

let a3 = new Array(10); //~ only one argument it consider ass array size [it create array of length 10]
console.log(a3);

// # 3.USING Array.of()

let a4 = Array.of(10); //~ it consider all argument ass array element only
console.log(a4);