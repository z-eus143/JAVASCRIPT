const ar = [10,20,30,40,50]; //~Homogenous array
console.log(ar);

const arr = [500,"js",false,10n,200,n => n,[10,20],{name : "abc"}] //~Hetrogenous array
console.log(arr);
 
console.log(ar[2]);
console.log(arr[5]) //~ it will return the function body only
console.log(arr[5](10)); //~ for execute the func. we need to call it by using iife
console.log(arr[6]); //~ it will return the whole array
console.log(arr[6][1]);

// # ADD
ar[5] = 60;
console.log(ar);
ar[10] = 100; //~ it will add the element at 10th index and remaining position will initialized as empety
console.log(ar);
console.log(ar[7]);

// # UPDATE
arr[2] = true;
console.log(arr);
ar[7] = 300;
console.log(ar);

// # DELETE
delete ar[7]; //~ delete keyword only delete the element and not affect the size of array
console.log(ar);