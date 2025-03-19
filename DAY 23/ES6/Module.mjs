export let sum = (a,b) => { //! Named export
    console.log(a+b);   
};

export let sub = (a,b) => { //! Named export
    if (a>b) {
        console.log(a-b);
    } else {
        console.log(b-a);
    }
};

export let multiply = (a,b) => { //! Named export
    console.log(a*b);
};

export let arr = [10,20,30,40,50]; //! Named export

export var o = { //! Named export
    name: "sachin",
};

// export default [sum, sub, multiply, arr, o]; //! Default export