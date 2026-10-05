let baseObj = {
    name: "Sanjid",
    age: 23,
    gender: "male",
    city: "Dhaka",
};

// for in loop -> object er shob key iterate kore (including inherited)

for (let key in baseObj) {
    console.log(key, baseObj[key]);
}


console.log(Object.keys(baseObj));


// Object.create example 1

let obj2 = Object.create(baseObj);

obj2.money = 420;
obj2.id = "roh";

console.log(obj2);
console.log(Object.keys(obj2));   // only own properties

for (let key in obj2) {
    console.log(key);   // own + inherited
}


// Object.keys shudu nijer property gula access kore
// kintu for in loop diya inherited property o access kora jay



// Object.create example 2

let obj3 = Object.create(baseObj);

obj3.money = 5743;
obj3.dept = "CSE";
obj3.id = 216;

console.log(obj3);
console.log(Object.keys(obj3));   // only own properties

for (let key in obj3) {
    console.log(key, obj3[key]);   // own + inherited
}
