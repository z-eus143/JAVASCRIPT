let o = {
    name : "Tanmay",
    id : 123,
};

function demo(b,c,d) {
    console.log(b, c, d);
    console.log(this);
};

// demo.call(o, 30, 20, 10);
// demo.apply(o,[30,20,10]);

let c = demo.bind(o);
console.log(c);
let ar = [10,20,30];
c(...ar);

let p = {
    name : "Tanmay",
    fn : function () {
        console.log(this);
    },
};

p.fn.bind(o)();