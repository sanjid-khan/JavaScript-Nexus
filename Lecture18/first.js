// globalobject: Object
// Chrome Browser:window
// Nodejs: global
// globalThis

// nijer sob gula global object a present ache

// console.log("hello world");
// console.log(Math.random());
// seInterval();
// new Object();
// new String("Rohit");


// let obj={
//     name:"Rohit",
//     age:27
// };
// obj.name


// console.log(globalThis);
// console.log(globalThis.Math.random());


// "use strict"

// a=10;
// console.log(a);

let obj={
    name:10
}
Object.freeze(obj);
obj.name=30;
console.log(obj);