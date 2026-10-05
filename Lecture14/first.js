// Property Descriptor Example

let userObj = {};

userObj.name = "Rohit";
userObj.age = 20;

// key value , writable , enumerable , configurable
console.log(Object.getOwnPropertyDescriptor(userObj, 'name'));
// writable = true -> value change korte parbo
// configurable = true -> property modify/delete kora jabe



// Using Object.defineProperty

let defineObj = {};

Object.defineProperty(defineObj, 'name', {
    value: "Rohit",
    writable: true,
    enumerable: true,
    configurable: true,
});

// Now changing writable to false
Object.defineProperty(defineObj, "name", {
    writable: false,
});

defineObj.name = "Mohit";   // change hobe na

console.log(defineObj);



// Another Example

const obj1 = {
    name: "rohit",
    age: 23,
    account_number: 30001
};

Object.defineProperty(obj1, "account_number", {
    writable: false,
});

obj1.account_number = 20001;  // change hobe na
console.log(obj1.account_number);



// Customer Example

const customer = {
    name: "rohit",
    age: 23,
    account_number: 123,
    balance: 2000,
};

// name change hobe na
Object.defineProperty(customer, 'name', {
    writable: false,
});

customer.name = "Mohit";           // change hobe na
customer.account_number = 10001;   // change hobe

console.log(customer);



// Prototype Example

const baseCustomer = {
    name: "rohit",
    age: 23,
    account_number: 123,
    balance: 2000,
};

let customer2 = Object.create(baseCustomer);

customer2.city = "Haridwar";
customer2.place = "Delhi";

Object.defineProperty(baseCustomer, "name", {
    enumerable: false,
});


// enumerable: jar enumerable true hobe,
// segula print hobe (including inherited)

for (let key in customer2)
    console.log(key);


console.log(Object.getOwnPropertyDescriptor(Object.prototype, 'toString'));

Object.defineProperty(Object.prototype, 'toString', {
    enumerable: true,
});


for (let key in customer2)
    console.log(key);
