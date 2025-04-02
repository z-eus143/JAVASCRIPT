let div = document.querySelector(".container");

fetch("./data.json").then((value)=>{
    value.json().then((data) => {
        for(let i in data){
            div.innerHTML += `
            <h1>Name : ${data[i].name}</h1>
            <h1>Age : ${data[i].age}</h1>
            `;
        }
    },
    (error) => {
        console.log(error);
    })
},
(reason) => {
    console.log(reason);
})