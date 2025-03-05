var ar = [10,20,30,40,"str",true,20,30,10];
var r1 = ar.indexOf("str",3); //~ it return the index of the first occurence of the element
console.log(r1);

var a = [10,20,"s","java",10n,null,10n,10];
console.log(a.lastIndexOf(10n,7)); //~ it return the index of the last occurence of the element
console.log(a.lastIndexOf("20"));

console.log(a.includes(10n,6)); //~ it return the boolean value whether the element is present in the array or not

const c = [10,[20,[30,40,[50],"str"],100],100];
let f1 = c.flat(3); //~ it return the same array by flattening the array
console.log(f1);

const v = [10,[30,100,[40,300,[10,[30]]],[30,40]],[40,500]];
console.log(v.flat(4)); //~ it return the same array by flattening the array

ar.reverse(); //~ it reverse the array
console.log(ar);

var x1 = [10,20,30,40,50,60,70,80,90,100];
x1.fill(100,2,6); //~ it fill the array with the value from the start index to the end index
console.log(x1);

var x = [10,20];
var y = [30,40];
var z = [50,60];

console.log(x.concat(y,z,y,x)); //~ it return the new array by concatenating the array
