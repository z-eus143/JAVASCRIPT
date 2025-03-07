var st1 = "This is javascript lecture and you can learn javascript";

let x = st1.replace("javascript","java"); //~ replace only first occurence
console.log(x);

let x2 = st1.replaceAll("javascript","java"); //~ replace all occurence 
console.log(x2);

var s1 = "          hello world !!!     ";
let x3 = s1.trim(); //~ remove white space from both side   
console.log(x3);
console.log(s1.trimStart()); //~ remove white space from start
console.log(s1.trimEnd()); //~ remove white space from end

var str2 = "hello world";
let arr = str2.split("").reverse(); //~ split the string into array and reverse the array
console.log(arr);

let newStr = arr.join(""); //~ join the array into string
console.log(newStr);

console.log(str2.includes("llo",5)); //~ check if "llo" is present in str2 from index 5
console.log(str2.includes("llo")); //~ check if "llo" is present in str2

var y1 = "hello ";
var y2 = "world ";
var y3 = "welcome";

console.log(y1.concat(y2,y3)); //~ concat the strings

