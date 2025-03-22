function* demo() {
    console.log("Start");
    var x = 30;
    console.log("first");
    yield x;
    console.log("second");
    var y = 50;
    console.log(y);
    yield "js";
    console.log("third");
    var z = 90;
    yield z;
    console.log("end");
    return "closed";
}

let x = demo();

console.log(x);

let r1 = x.next();

console.log(r1);

let r2 = x.next();

console.log(r2);

let r3 = x.next();

console.log(r3);

console.log(x.next());