let a=10;
let b=a;
b=30;
console.log(b);
console.log(a);

// primitive data type vs Non primitive data type
// primitive data type:Immutable
// Non primitive data type:Mutable 

// Object example
let obj1={
    id:20,
    naming:"rohit"
}

let obj2=obj1;

obj2.id=30;

console.log(obj2);
console.log(obj1);


let obj3={
    id:2241081216,
    name:"sanjid",
}

let obj4=obj3;

obj3.name="sadin";

console.log(obj3);
console.log(obj4);