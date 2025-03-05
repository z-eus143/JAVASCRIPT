var a = [90,60,80,40,30,20];

//~ filter

var r1 = a.filter((v,i,ar)=>{ //~ it return the new array by filtering the array
    return v>34;
});

console.log(r1);


//~ map

var r2 = a.map((v,i,ar)=>{ //~ it return the new array by mapping the array
    return v+5;
});

console.log(r2);


//~ reduce

var b = [10,20,30,40,50];

var r3 = b.reduce((acc, cv)=>{ //~ it return the new array by reducing the array
    console.log(acc, cv);
    return acc + cv;
},10);

console.log(r3);

//~ reduceRight
let r4 = b.reduceRight((acc,cv) => { //~ it return the new array by reducing the array from right to left
    console.log(acc,cv);
    return acc+cv;
})

console.log(r4);



var a = [30,40,50,60];
//~ some

let r5 = a.some((v,i,ar)=>{ //~ it return the boolean value whether any of the element satisfies the condition or not
    console.log(v,i,ar);
    return v<60;
});

console.log(r5);

//~ every
let r6 = a.every((v)=> v >19); //~ it return the boolean value whether all the elements satisfies the condition or not
console.log(r6);

//~ forEach
a.forEach((v,i,arr)=>{ //~ it execute the function for each element of the array
    console.log(v+5);
});



