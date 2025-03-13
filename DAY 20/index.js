// # DATE CLASS : it is a built-in class in JavaScript to work with dates and times
// * it is used to get and set the date and time of the system
// * it is used to perform operations on date and time

let date = new Date(); // * we need to create an object of Date class to use its methods because all the methods are non-static
console.log(date);

// ~ GETTING DATE
console.log(date.getFullYear()); // * it returns the current year from local time
console.log(date.getMonth()); // * it returns the current month from local time
console.log(date.getDate()); // * it returns the current date from local time
console.log(date.getDay()); // * it returns the current day from local time

// ~ GETTING TIME
console.log(date.getHours()); // * it returns the current hour from local time
console.log(date.getMinutes()); // * it returns the current minute from local time
console.log(date.getSeconds()); // * it returns the current second from local time
console.log(date.getMilliseconds()); // * it returns the current millisecond from local time

// ~ SETTING DATE
// date.setFullYear(2023, 0, 1);
date.setFullYear(2023); // * it sets the year (4 digits)
date.setMonth(0); // * it sets the month (0 - 11)
date.setDate(1); // * it sets the date (1 - 31)
console.log(date); 

// ~ SETTING TIME
// date.setHours(0, 0, 0, 0);
date.setHours(0); // * it sets the hour (0 - 23)
date.setMinutes(0); // * it sets the minute (0 - 59)
date.setSeconds(0); // * it sets the second (0 - 59)
date.setMilliseconds(0); // * it sets the millisecond (0 - 999)
console.log(date);

// # MATH CLASS : it is a built-in class in JavaScript to perform mathematical operations
// * it is used to perform mathematical operations like rounding, ceiling, floor, truncate, random, max, min, square root, cube root, power
// * it is a static class so we don't need to create an object of Math class to use its methods
// * all the methods of Math class are static so we can use them directly with the class name
// let math = new Math(); //! Uncaught TypeError: Math is not a constructor

// ~ ROUNDING : it rounds the number to the nearest integer
console.log(Math.round(1.4)); 
console.log(Math.round(1.5));
console.log(Math.round(-1.6));
console.log(Math.round(-1.4));

// ~ CEILING : it rounds the number to the nearest integer greater than or equal to the number
console.log(Math.ceil(4.67));
console.log(Math.ceil(4.01));
console.log(Math.ceil(-4.67));
console.log(Math.ceil(-9.54));

// ~ FLOOR : it rounds the number to the nearest integer less than or equal to the number
console.log(Math.floor(4.67));
console.log(Math.floor(4.01));
console.log(Math.floor(-4.67));
console.log(Math.floor(-9.54));

// ~ TRUNCATE : it removes the decimal part of the number
console.log(Math.trunc(4.67));
console.log(Math.trunc(4.01));
console.log(Math.trunc(-4.67));
console.log(Math.trunc(-9.54));

// ~ RANDOM : it returns a random number between 0 and 1
console.log(Math.random());
let random = Math.random() * (999 - 100) + 100; // * formula to get a random number Math.random() * (max - min) + min
console.log(Math.trunc(random));

// ~ MAX : it returns the largest number from the given multiple arguments
console.log(Math.max(1, 2, 3, 4, 5));
console.log(Math.max(-1, -2, -3, -4, -5));

// ~ MIN : it returns the smallest number from the given multiple arguments
console.log(Math.min(1, 2, 3, 4, 5));   
console.log(Math.min(-1, -2, -3, -4, -5));

// ~ HOW TO FIND LARGEST NUMBER IN AN ARRAY
let numbers = [10, 22, 31, 40, 56, 69];
console.log(Math.max(...numbers)); // * using spread operator to pass the array as multiple arguments

// ~ SQUARE ROOT : it returns the square root of the number
console.log(Math.sqrt(16));

// ~ CUBE ROOT : it returns the cube root of the number
console.log(Math.cbrt(27));

// ~ POWER : it returns the base raised to the power exponent
console.log(Math.pow(2, 3));
