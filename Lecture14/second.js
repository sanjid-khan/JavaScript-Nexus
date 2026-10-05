// for in loop: Isko array ke sath normally use nahi karte
// Array technically object
// 0:10
// 1:20
// 2:40
// 3:12
// 4:30
// name:"Rohit"
// age:20

// name, age array er index hote pare na
// tai array te for in use kora ideal na
// karon array index 0,1,2,3,4 hoy

const arr = [10, 20, 40, 12, 30];

arr.name = "rohit";
arr.age = 20;


// Normal for loop (Best for array index)

for (let index = 0; index < arr.length; index++)
    console.log(index, arr[index]);


// for...in (keys dibe, including extra property)

for (let key in arr) {
    console.log(key);   // 0,1,2,3,4,name,age
}


// for...of (only values, ignore extra property)

for (let val of arr)
    console.log(val);




// DefineProperty
// DefineProperties


// configurable: false + writable: true → writable পরে false করা যাবে,
// কিন্তু আবার true করা যাবে না।

// configurable: false + writable: false → writable আর change করা যাবে না
// (স্থায়ী lock).




// DefineProperties Example

const customer = {};

Object.defineProperties(customer, {
    name: {
        value: "rohit",
        writable: true,
        enumerable: true,
        configurable: true
    },
    age: {
        value: 23,
        writable: true,
        enumerable: true,
        configurable: true
    },
    account_number: {
        value: 123,
        writable: false,
        enumerable: false,
        configurable: false
    },
    balance: {
        value: 2000,
        writable: false,
        enumerable: true,
        configurable: false
    }
});

console.log(customer);
console.log(customer.name);
console.log(customer.age);
console.log(customer.account_number);


customer.name = "khan";         // change hobe
customer.age = 30;              // change hobe
customer.balance = 5000;        // change hobe na
customer.account_number = 999;  // change hobe na

console.log(customer);
console.log(customer.account_number);
