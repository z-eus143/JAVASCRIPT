var std = {
    name: "John",
    id : 123,
    skills : ["html","css","js"],
    address : {
        city : "New York",
        state : "NY",
        country : "USA"
    },
    id : 400,
    isMarried : false,
    kids : 0,
    fn : () => {
        console.log("arrow function");
    },
    fn1 : function(){
        console.log("anonymous function");
    },
    demo() {
        console.log("demo function");
    }
}

console.log(std.name);
console.log(std.id);
console.log(std.skills[0]);
console.log(std.address.city);
console.log(std.isMarried);
console.log(std.kids);

std.fn();
std.fn1();
std.demo();

std["phone"] = 1234567890;
console.log(std);
// delete std["fn1"];
// console.log(std);

for(let key in std){
    console.log(key);
}

for(let key of std){ //~ TypeError: std is not iterable
    console.log(key);
}



