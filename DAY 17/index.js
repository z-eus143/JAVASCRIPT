
class Employee {
    static salary = 500;
    bonus = 10;
    static demo(a) {
        console.log(a);
        console.log("demo function");
        return 30;
    }
    arr = () => {
        console.log("arr function");
    }
}

let r1 = Employee.demo("js");
console.log(r1);
console.log(Employee.salary);

let e1 = new Employee();
console.log(e1);
console.log(e1.bonus);
e1.arr();

// ~ using class and constructor
class Student {
    constructor(name,id) {
        this.name = name;
        this.id = id;
    }
}

let s1 = new Student("sachin",200);
console.log(s1);

let s2 = new Student("abc",300);
console.log(s2);


// ~ using constructor function

function Product(name,id) {
    this.name = name;
    this.id = id;
    console.log(this)
}

let p1 = new Product("laptop",200);

// ~ using object constructor

let o = new Object();
o.name = "sachin";
o["id"] = 200;
console.log(o);



