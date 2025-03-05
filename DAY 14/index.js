var fruits = ["apple", "Banana", "orange", "Mango", "grape", "Pineapple"];

fruits.sort(); //~ IT SORTS THE ARRAY BASED ON THE ASCII VALUES

console.log(fruits);


var numberArr = [10,2,3000,111,15,33,8,99];

numberArr.sort(); //~ IT SORTS THE ARRAY BASED ON THE ASCII VALUES

console.log(numberArr);

numberArr.sort((a,b)=>a-b); //~ IT SORTS THE ARRAY IN ASCENDING ORDER

console.log(numberArr);

numberArr.sort((a,b)=>b-a); //~ IT SORTS THE ARRAY IN DESCENDING ORDER

console.log(numberArr);

numberArr.sort((a,b)=>{
    if(a<b){
        return -1;
    }else if(a>b){
        return 1;
    }else{
        return 0;
    }
});

console.log(numberArr);


