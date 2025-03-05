// var a = [30,40,50,60];

// let r3 = a.some((v,i,ar)=>{
//     console.log(v,i,ar);
//     return v<60;
// });

// console.log(r3);


// let r4 = a.every((v)=> v >19);
// console.log(r4);

// a.forEach((v,i,arr)=>{
//     console.log(v+5);
// });






var a = [90,60,80,40,30,20];

//~ filter

var r1 = a.filter((v,i,ar)=>{
    return v>34;
});

console.log(r1);


//~ map

var r2 = a.map((v,i,ar)=>{
    return v+5;
});

console.log(r2);


//~ reduce

var b = [10,20,30,40,50];

var r3 = b.reduce((acc, cv)=>{
    console.log(acc, cv);
    return acc + cv;
},10);

console.log(r3);

let r4 = b.reduceRight((acc,cv) => {
    console.log(acc,cv);
    return acc+cv;
})

console.log(r4);