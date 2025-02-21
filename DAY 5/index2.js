// Non- primitive data type
// function

function f1(x,y){
    console.log(x,y)
    console.log("hello")
}

f1(50,10)
f1("js","react")

// default value for parameter

function demo(a = 10,b = 20){
    console.log(a)
    console.log(b)
    console.log(a,b)
    console.log(a+b)
    console.log(a*b)
    console.log(a-b)
}

demo(10,30)
demo(100)

function f2() {
    let y = 100
    console.log(y)
    return 10,20,30
}

let r1 = f2()
console.log(typeof r1)
console.log(f2())