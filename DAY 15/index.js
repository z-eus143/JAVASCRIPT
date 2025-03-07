
// ! while loop
let i = 10;

while(i < 5){ //~ first condition check then execute
    console.log(i);
    i++;
}


// ! do while loop
let j = 10;

do{
    console.log(j);
    j++;
}while(j < 5); //~ first execute then check condition


// ! for loop
for(let i = 0; i < 5; i++){
    console.log("Hello");
}


var arr = [30,20,"js","react",400];

// ! for loop
for (let i = 0; i < arr.length; i++){
    console.log(arr[i]);
}

// ! for of loop
for (let v of arr) console.log(v);

// ! for in loop
for (let i in arr) console.log(i);

let str = "javascript";

// ! for loop
for (let i = 0; i < str.length; i++){
    console.log(str[i]);
}

// ! for of loop
for (let v of str) console.log(v);

// ! for in loop
for (let i in str) console.log(i);










