var ar = [10,20,30,40];
console.log(ar);

let ol = {
    name : "abc",
}

console.log(ol);

let o = {
    name : "abc",
    getName() {
        console.log(this.name);
    }
};

let p = {
    name : "xyz"
}

p.__proto__ = o;

console.log(p);

p.getName();