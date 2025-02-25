// ~ isNaN first it converts the arg to number then it checks whether the number is NaN or not

console.log(isNaN("100"));
console.log(isNaN("str"));
console.log(isNaN(true));

// ~ Number.isNaN it check directly whether the arg is NaN or not 

console.log(Number.isNaN("100"));
console.log(Number.isNaN("str"));
console.log(Number.isNaN(true));
console.log(Number.isNaN(NaN));