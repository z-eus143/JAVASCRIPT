let Product = {
    name: "Mobile Phone",
    id: 200,
    price: 40000,
    moreDetails: {
        color: "Blue",
        model: "Samsung",
    },
    specifications: ["4GB RAM", "64GB Storage", "6 inches display"],
};

Object.freeze(Product);
Product.size = "5 inches";
Product.id = 700;
delete Product.price;
console.log(Product);

console.log(Object.isFrozen(Product));

let Product1 = {
    name: "Mobile Phone",
    id: 200,
    price: 40000,
    moreDetails: {
        color: "Blue",
        model: "Samsung",
    },
    specifications: ["4GB RAM", "64GB Storage", "6 inches display"],
};

Object.seal(Product1);
Product1.size = "5 inches";
Product1.id = 700;
delete Product1.price;
console.log(Product1);

console.log(Object.isSealed(Product1));

console.log(Product.specifications);

console.log(Object.keys(Product));
console.log(Object.values(Product));
console.log(Object.entries(Product));

let Product2 = {
    name: "Mobile Phone",
    id: 200,
    price: 40000,
};

const moreDetails = {
    color: "Blue",
    model: "Samsung",
};

const specifications = {
    values: ["4GB RAM", "64GB Storage", "6 inches display"],
    color: "Black",
};

let f1 = Object.assign(Product2, moreDetails, specifications);
console.log(f1);
console.log(Product2);
console.log(specifications);

// ! Rest Parameters
// # A rest parameter must be last in a parameter list.
function demo(a, b, ...c) {
    console.log(a);
    console.log(b);
    console.log(c);
}

demo(10, 20, 30, 40, 50, 60, 70);