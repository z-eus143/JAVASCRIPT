// ! ANONIMUS FUNCTION

// function() {
//     console.log("hello")
// }
// ~ can't able to define alone ,it throws error identifier expected


// ! NAMED FUNCTION
function demo() {
    console.log("named function")
}
demo()

// ! FUNCTION WITH EXP
var func = function(a,b){
    console.log("function with exp.")
    console.log(a,b)
    return "js"
}
let result = func(100,200) // ~ func. should be called using variable name
console.log(result)

// ! ARROW FUNCTION
const arr = () => {
    console.log("Arrow function")
}
arr()

const a1 = e => console.log(`single parameter with single statement ${e}`)
console.log(a1(10))

const a2 = v => v
console.log(a2(40))

// ! HIGHER OREDER FUNCTION
function HOF(a,b,c){
    console.log(a)
    b()
    c(10)
}

HOF(
    10,
    function () {console.log("callback function")},
    e => console.log(e)
)

// ! IMMEDIATE INVOKE FUNCTION EXPRESSION
let b = 3000; //~ samicollon is mandatory

(() => {
    let b = 50
    console.log("arr func")
    console.log(b)
})(); //~ samicollon is mandatory

console.log(b)