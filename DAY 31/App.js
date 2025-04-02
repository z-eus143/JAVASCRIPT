class Person{
    constructor(name,age){
        this.name = name;
        this.age = age;
    }
    demo(){
        console.log(this.name);
        console.log(this.age);
    }
}

class Employee extends Person{
    constructor(id,salary){
        super("Tanmay",22);
        this.id = id;
        this.salary = salary;
    }
    demo2(){
        console.log(this.id);
        console.log(this.salary);
    }
}

let e1 = new Employee(1,20000);
e1.demo();
e1.demo2();

let s = new Set([200,300,100,10,20,30,40,50,10,20,10]);
console.log(s);

let ar = [...s];
console.log(ar);
let arr = ar.sort(
    (a,b) => {
        if(a>b){
            return 1;
        } else if(a<b){
            return -1;
        } else {
            return 0;
        }
    }
);
console.log(arr);
