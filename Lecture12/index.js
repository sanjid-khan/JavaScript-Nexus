// ==========================
// Basic Function
// ==========================

function greetMessage() {
    console.log("hello Coder Army");
    console.log("Mein badiya hu");
    console.log("Aur kya chal rha hai");
}

greetMessage();


// ==========================
// Addition Program
// ==========================

// parameter
function addNumbers(firstNumber, secondNumber) {
    console.log(firstNumber + secondNumber);
}

// function call: argument
addNumbers(3, 4);


// ==========================
// Multiplication Function
// ==========================

function multiplyValues(value1, value2) {
    return value1 * value2;
}

console.log(multiplyValues(4, 5));

let multiplicationResult = multiplyValues(4, 5);
console.log(multiplicationResult);


// ==========================
// Function Expression
// ==========================

const greetingExpression = function () {
    console.log("Hello Coder Army");
    console.log("Mein toh badiya hai");
    return "Money";
    // return er niche kichu lekhle print hobe na
}

greetingExpression();
console.log(greetingExpression());


const mathOperations = function (numA, numB) {
    console.log(numA * numB);
    console.log(numA + numB);
    return numA - numB;
}

console.log(mathOperations(7, 6));


// ==========================
// Arrow Functions
// ==========================

const simpleArrow = () => {
    console.log("hello coder");
}
simpleArrow();


const arrowAddition = (num1, num2) => {
    return num1 + num2;
}
console.log(arrowAddition(3, 4));


const sleepReminder = () => {
    console.log("ajke 5 tai ghumabo");
}
sleepReminder();


const codingReminder = () =>
    console.log("ajke onk coding korte hobe vai");

codingReminder();


const arrowMultiply = (value1, value2) =>
    console.log(value1 * value2);

arrowMultiply(4, 5);


const arrowCubePrint = (number) =>
    console.log(number * number * number);

arrowCubePrint(4);


const powerFour = (number) =>
    number * number * number * number;

console.log(powerFour(2));


const quickSum = (value1, value2) =>
    value1 + value2;

console.log(quickSum(2, 4));


const quickMultiply = (num1, num2) =>
    console.log(num1 * num2);

quickMultiply(3, 2);


const cubeReturn = number =>
    number * number * number;

console.log(cubeReturn(8));


// ==========================
// Spread & Rest Operator
// ==========================

let originalArray = [2, 3, 4, 5];
let clonedArray = [...originalArray];


const logRestNumbers = function (...numbers) {
    console.log(numbers);
}

logRestNumbers(2, 3, 4);
logRestNumbers(4, 6, 1, 10, 13);
logRestNumbers(2, 3);


const calculateRestSum = function (...numbers) {
    let totalSum = 0;

    for (let index = 0; index < numbers.length; index++) {
        totalSum += numbers[index];
    }

    console.log("Numbers:", numbers);
    console.log("Sum :", totalSum);
    return totalSum;
}

calculateRestSum(5, 6);
calculateRestSum(7, 8, 9, 10);
calculateRestSum(3, 4, 2);


// ==========================
// Object Passing
// ==========================

let userProfile1 = {
    name: "rohit",
    age: 30,
    amount: 420
};

function printUserDetails(objectParam) {
    console.log(objectParam.name, objectParam.amount);
}


// object destructuring

function printUserDestructured({ name, amount }) {
    console.log(name, amount);
}


// pass by value / pass by reference concept

function printUserInfo({ name, amount }) {
    console.log(name, amount);
}

printUserInfo(userProfile1);


// ==========================
// Another Object Example
// ==========================

let userProfile2 = {
    name: "sanjid",
    id: 2241081216,
    dept: "CSE",
    goal: "Engineer"
};

function printBasicInfo(userObject) {
    console.log(userObject.name, userObject.dept);
}

function printIdGoal({ id, goal }) {
    console.log(id, goal);
}

printBasicInfo(userProfile2);
printIdGoal(userProfile2);