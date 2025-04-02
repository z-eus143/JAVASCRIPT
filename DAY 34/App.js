// let demo = async () => {
//     try {
//         console.log("start");
//         let y = 100;
//         console.log(y);
//         console.log("first");
//         const x = 300;
//         x = 400;
//         console.log("end");
//         return x;
//     } catch (error) {
//         console.log(error);
//         console.log("err");
//     } finally {
//         console.log("finally block");
//     }
// }

// console.log(demo());  //~ returns promise object

let p = Promise.resolve("Resolved Promise");

let demo = async () => {
    try {
        console.log("start");
        let y = 100;
        await p;
        console.log(p);
        console.log(y);
        console.log("first");
        const x = 300;
        console.log("end");
        return x;
    } catch (error) {
        console.log(error);
        console.log("err");
    }
}

console.log(demo());
console.log("hello");
console.log("helloWorld");

setTimeout(() => {
    console.log("set timeout fn");
},0);
