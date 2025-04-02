let ar = [10,20];

var m = new Map([
    [() => "arr","function"],
    [ar,"array"],
    [100,"number"],
    [[10,20],"array 2"],
    ["str",() => "arr"],
    [100,"number 2"],
    [true, "boolean"],
    [10n, "bigint"],
]);

console.log(m);

// m.set("arr","function");
// m.set(ar,"array");
// m.set(100,"number");
// m.set([10,20],"array 2");
// m.set("str",() => "arr");
// m.set(100,"number 2");
// m.set(true, "boolean");
// m.set(10n, "bigint");

// let r1 = m.get([10,20]);
// console.log(r1);

// let r2 = m.get(ar);
// console.log(r2);

// let r3 =m.delete(() => "arr");
// let r3 = m.delete("100");
// console.log(r3);

// var r4 = m.has(100);
// console.log(r4);

// console.log(m.size);.

// m.clear();
// console.log(m);

m.forEach((v,k,map) => {
    console.log(`${k} :${v}`);
    // console.log(map);
})