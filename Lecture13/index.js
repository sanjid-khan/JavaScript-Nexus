// if-else

let ageCheck1 = 30;

if (ageCheck1 >= 18) {
    console.log("Eligible for Vote");
}
else {
    console.log("Not eligible for vote");
}


// if else-if else

let ageCheck2 = 19;

if (ageCheck2 < 18) {
    console.log("KID");
}
else if (ageCheck2 > 45) {
    console.log("OLD");
}
else {
    console.log("Young");
}


// Multiple Condition: switch

let dayNumber = 10;

switch (dayNumber) {
    case 0:
        console.log("SunDay");
        break;
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Thuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    case 4:
        console.log("ThursDay");
        break;
    case 5:
        console.log("Friday");
        break;
    case 6:
        console.log("Saturday");
        break;
    default:
        console.log("Not a valid day");
}


// loop: ek hi kaam ko baar baar karna

for (let loopIndex1 = 0; loopIndex1 < 10; loopIndex1++) {
    console.log("hello Coder Army");
}


// sum of first n number, 10 number

let totalSum = 0;

for (let loopIndex2 = 1; loopIndex2 <= 10; loopIndex2++) {
    totalSum += loopIndex2;
}

console.log(totalSum);


// Nested for loop: Loop ke andar loop

for (let outerLoop = 1; outerLoop <= 5; outerLoop++) {
    for (let innerLoop = 1; innerLoop <= 5; innerLoop++) {
        console.log(innerLoop);
    }
}


// scope ke baare mein:
// Var


// While Loop

let whileCounter = 1;

while (whileCounter < 6) {
    console.log(whileCounter);
    whileCounter++;
}


// do-while loop


let arrValues = [10, 20, 30, 40, 50];

for (let arrIndex = 0; arrIndex < arrValues.length; arrIndex++) {
    console.log(arrValues[arrIndex]);
}



const userObject = {
    name: "rohit",
    age: 30,
    amount: 420,
    city: "Kotwar",
};

const objectKeys = Object.keys(userObject);

// [ 'name', 'age', 'amount', 'city' ]

for (let keyIndex = 0; keyIndex < objectKeys.length; keyIndex++) {
    console.log(userObject[objectKeys[keyIndex]]);
}
