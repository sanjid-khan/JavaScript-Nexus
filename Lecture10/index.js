// ------------------ How to create object ------------------

const objMain = {
    0: 20,
    1: 50,
    2: 70,
    "name": "rohit",
    account_balance: 420,
    "gender": "Male",
    age: 30,
    undefined: 30,
    null: "mohan",
    "account number": 231230
}

console.log(objMain["undefined"]);
console.log(objMain["null"]);

console.log(objMain['0']);
console.log(objMain[1]);
console.log(objMain.name);
console.log(objMain["name"]); 
console.log(objMain["account_balance"]);
console.log(objMain["account number"]);
// // console.log(objMain[1])
console.log(objMain);



let objSecond = {
    0: 20,
    1: 30,
    2: 50,
    name: "rohit",
    account_balance: 5000,
    "gender": "male",
    "dept": "CSE",
    undefined: 100,
    null: "Sanjid"
};

console.log(objSecond[0]);
console.log(objSecond['1']);
console.log(objSecond["2"]);
console.log(objSecond["name"]);
console.log(objSecond.account_balance);
console.log(objSecond.gender);
console.log(objSecond['dept']);
console.log(objSecond.undefined);
console.log(objSecond.null);
console.log(objSecond);


// reason why array is an object {key,value} pair..
const arrObjectDemo = {
    0: 20,
    1: 50,
    2: 70,
    length: 3
}

// const arr=[20,50,70];
// console.log(arr.length,)
// arr[0] ashole object er property access korar kaj korce
// tai amra  array ke  object bolte pari



// another way to creat object

const personObj = new Object();

// property add
personObj.name = "rohit";
personObj.age = 80;
personObj.gender = "Male";
console.log(personObj);

// delete
delete personObj.age;
console.log(personObj);

// Modify or Update
personObj.name = "Mohit";
console.log(personObj);



const studentObj = new Object();
studentObj.name = "sanjid";
studentObj.age = 22;
studentObj.dept = "cse";
console.log(studentObj);

// delete studentObj.age;
console.log(studentObj);

// studentObj.name="sadin";
studentObj.id = 2241081216;
console.log(studentObj);



// third method

class People {
    constructor(na, ag, gen) {
        this.name = na;
        this.age = ag;
        this.gender = gen;
    }
}

let per1 = new People("Rohit", 20, "Male");
let per2 = new People("Mohit", 25, "Female");
let per3 = new People("Sanjida", 25, "Female");
console.log(per1, per2, per3);


let objInfo = {
    name: "rohit",
    age: 30,
    account_balance: 420,
    gender: "male"
}

// key
const keysArr = Object.keys(objInfo);
console.log(keysArr);
// values
const valuesArr = Object.values(objInfo);
console.log(valuesArr);

// keys, value
const entriesArr = Object.entries(objInfo);
console.log(entriesArr);




let objExample = {
    0: 20,
    1: 30,
    2: 50,
    name: "rohit",
    account_balance: 5000,
    "gender": "male",
    "dept": "CSE",
    undefined: 100,
    null: "Sanjid"
};

const arrayKeys = Object.keys(objExample);
console.log(arrayKeys);

const arrayValues = Object.values(objExample);
console.log(arrayValues);

const arrayEntries = Object.entries(objExample);
console.log(arrayEntries);




// assign use case
const assignObj1 = { a: 1, b: 2 };
const assignObj2 = { c: 3, d: 4 };
const assignObj4 = { e: 5, f: 6 };

const assignObj3 = Object.assign({}, assignObj1, assignObj2, assignObj4);
// console.log(assignObj3,assignObj2);
assignObj3.a = 10;
console.log(assignObj1.a);
// aykhane assignObj1 theke shudu value copy hoyche
// assignObj1 er assignObj3 ek na.. ta assignObj1 ager motoi thakbe

const spreadObj5 = { ...assignObj1, ...assignObj2, ...assignObj4 };
console.log(spreadObj5);


const ob1 = { x: 1, y: 2 };
const ob2 = { g: 3, h: 4 };
const ob3 = { i: 5, j: 6 };


const ob4 = Object.assign({}, ob1, ob2, ob3);
console.log(ob4);
ob4.g = 9;
console.log(ob2.g);

const obj6 = { ...ob1, ...ob2, ...ob3 };
console.log(obj6)
// eta hocche assign er update version ***spread*** aida lekhte easy



// Freeze

const freezeUser = { name: "Rohit", age: 25 };

Object.freeze(freezeUser);

freezeUser.name = "Mohit";       // ❌ change হবে না
freezeUser.city = "Delhi";       // ❌ add হবে না
delete freezeUser.age;           // ❌ delete হবে না

console.log(freezeUser);



// Seal 

const sealUser = { name: "Rohit", age: 25 };

Object.seal(sealUser);

sealUser.name = "Mohit";   // ✅ change allowed
sealUser.city = "Delhi";   // ❌ add not allowed
delete sealUser.age;       // ❌ delete not allowed

console.log(sealUser);
