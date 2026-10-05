// ==========================
// Object.defineProperty Example
// ==========================
let userObj = {
    name: "rohit",
    age: 30
};

Object.defineProperty(userObj, 'name', {
    writable: false,
})

// hacking se bachbe ke liye humeine ye sab kiya hai(vul aida)
// aidar asol karon hocche unexpected error handle
userObj.name = "mohit";

console.log(Object.getOwnPropertyDescriptor(userObj, "name"))


// ==========================
// for-of loop with array and string
// ==========================
const numArr = [10, 20, 11, 18, 13];
for (let value of numArr) {
    console.log(value);
}

let strVal = "rohit is a good boy";
for (let char of strVal) {
    console.log(char);
}


// ==========================
// Object iteration (for-of NOT for object directly)
// ==========================
const objExample = {
    2: 5,
    1: 3,
    name: "Sanjid",
    age: 22,
    gender: "male"
};

console.log(objExample);

// ❌ direct for-of on object will fail
// for (let value of objExample) { console.log(value); }

// ✅ Object.values for object iteration
for (let value of Object.values(objExample)) {
    console.log(value);
}


// ==========================
// forEach Examples
// ==========================
const arrForEach1 = [1, 2, 3, 4, 5];

arrForEach1.forEach((num) => console.log(num));
arrForEach1.forEach((num, index) => console.log(num, index));
arrForEach1.forEach((num, index, array) => {
    array[index] = num * 4;
});
console.log(arrForEach1);


// ==========================
// filter Examples
// ==========================
const arrFilter1 = [10, 22, 33, 41, 50];
const evenNumbers = arrFilter1.filter((num) => num % 2 == 0);
console.log(evenNumbers);

const students = [
    { name: "rohan", age: 22, marks: 70 },
    { name: "Mohan", age: 24, marks: 80 },
    { name: "Darshan", age: 28, marks: 30 },
    { name: "Mohit", age: 32, marks: 40 },
    { name: "Shadik", age: 12, marks: 90 },
];

const highMarks1 = students.filter(({ marks }) => marks > 50);
console.log(highMarks1);

const students2 = [
    { name: "rohan", age: 22, marks: 70 },
    { name: "Mohan", age: 24, marks: 80 },
    { name: "Darshan", age: 28, marks: 30 },
    { name: "Mohit", age: 32, marks: 40 },
    { name: "Shadik", age: 12, marks: 90 },
];

const marksAbove60 = students2.filter(({ marks }) => marks > 60);
const marksAbove70 = students2.filter(({ marks }) => marks > 70);
const marksAbove50 = students2.filter(({ marks }) => marks > 50);
const ageAbove20 = students2.filter(({ age }) => age > 20);

console.log("marks > 60 :", marksAbove60);
console.log("marks > 70 :", marksAbove70);
console.log("marks > 50 :", marksAbove50);
console.log("age > 20   :", ageAbove20);


// ==========================
// map Examples
// ==========================
const arrMap1 = [1, 2, 4, 5];

const squaredArr = arrMap1.map((num) => num * num);
console.log(squaredArr);

const indexMultipliedArr = arrMap1.map((num, index) => num * index);
console.log(indexMultipliedArr);

const combinedMapArr = arrMap1.filter((num) => num % 2 == 0)
                              .map((num) => num * num)
                              .map((num) => num / 2);
console.log(combinedMapArr);

const arrMap2 = [1, 2, 3, 4, 5, 6];
const resultMapChain = arrMap2.filter((num) => num % 2 == 0)
                              .map((num) => num * num)
                              .map((num) => num / 2);
console.log(resultMapChain);