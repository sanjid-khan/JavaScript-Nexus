// ==========================
// Set Examples
// ==========================

// Example 1: unique values
const setNumbers = new Set([10, 20, 30, 40, 10, 30]);
console.log("Type of setNumbers:", typeof setNumbers); // object


// Example 2: add, delete, size
const setExample1 = new Set();
setExample1.add(4);
setExample1.add(6);
setExample1.add("rohit");
setExample1.add(30);

setExample1.delete(6);
console.log("Set size after delete:", setExample1.size);
console.log("Set content:", setExample1);


// Example 3: user ID check
const userIDs = new Set(["rohit_negi9", "Mohi_91", "ravi.93", "search_sanjid"]);
let newUser = "rohit_negi9";
console.log("User exists?", userIDs.has(newUser));

userIDs.clear();
console.log("Cleared userIDs:", userIDs);


// Example 4: convert array to set and back (unique values)
let numArr = [10, 30, 20, 10, 40, 50, 30];
const uniqueSet = new Set(numArr);
numArr = [...uniqueSet];
console.log("Unique array:", numArr);


// Example 5: set operations (union, intersection)
const setA = new Set([10, 20, 30, 40, 50]);
const setB = new Set([10, 20, 70, 40]);

// Union
const unionSet = new Set([...setA, ...setB]);
console.log("Union:", unionSet);

// Intersection
const intersectionSet = new Set([...setA].filter((num) => setB.has(num)));
console.log("Intersection:", intersectionSet);


// Example 6: iterate over set
console.log("Iterating setA using for-of:");
for (let value of setA) {
    console.log(value);
}

console.log("Iterating setA using forEach:");
setA.forEach((value) => console.log(value));

console.log("Iterating setB using forEach:");
setB.forEach((value) => console.log(value));