console.log(localStorage);
console.log(sessionStorage);

localStorage.setItem('name', 'john');
sessionStorage.setItem('name', 'dhoni');
localStorage.setItem("isMarried", true);
localStorage.setItem("skills",["js","react","python"]);

let id = localStorage.getItem("id");
console.log(id);

console.log(localStorage.getItem("isMarried"));
console.log(localStorage.getItem("skills").split(","));

localStorage.removeItem("name");
sessionStorage.setItem("id",300);
sessionStorage.removeItem("name");
sessionStorage.clear();
localStorage.clear();


// ! JSON.stringify() and JSON.parse()
let user = {
    name: "john",
    age: 30,
    skills: ["js","react","python"],
    isMarried: true
}

var userJSON = JSON.stringify(user);
console.log(userJSON);      
console.log(typeof userJSON);

let parsedUser = JSON.parse(userJSON);
console.log(parsedUser);