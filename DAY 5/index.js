// implicit type casting

console.log("10" + 10) // number converted to string
console.log(true + false) // boolean converted to number
console.log(200 - "200") // string converted to number
console.log("10" + "5") // string converted to number
console.log(10 + "s")
console.log("10" / "2") // string converted to number
console.log("str" + "str")

//explicit typecasting:

let num = "str"

let x1 = parseInt(num)
console.log(typeof x1)

let num2 = "100.891"

let x2 = parseInt(num2) // returns only integer value
let x3 = parseFloat(num2) //returns floating value

console.log(x2)
console.log(x3)


let num3 = 300

console.log(typeof num3)

let s = num3.toString() // converts any datatype to string datatype
console.log(typeof s)

