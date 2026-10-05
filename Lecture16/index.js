// ==========================
// Reduce Examples
// ==========================

// Example 1: simple sum
const arrNum1 = [10, 20, 30, 40, 50];

const sumResult = arrNum1.reduce((acc, curr) => {
    console.log(acc, curr);
    acc = acc + curr;
    return acc;
}, 0);

console.log("Sum result:", sumResult);

const sumResult2 = arrNum1.reduce((acc, curr) => acc + curr, 0);
console.log("Sum result2:", sumResult2);


// Example 2: frequency count of strings
const fruitsArr = ["orange", "apple", "banana", "orange", "apple", "banana", "orange", "grapes"];

const fruitCount = fruitsArr.reduce((acc, curr) => {
    if (acc.hasOwnProperty(curr)) acc[curr]++;
    else acc[curr] = 1;
    return acc;
}, {});

console.log(fruitCount);

const lettersArr = ['a', 'b', 'a', 'c', 'b', 'a'];

const letterCount = lettersArr.reduce((acc, curr) => {
    if (acc.hasOwnProperty(curr)) acc[curr]++;
    else acc[curr] = 1;
    return acc;
}, {});

console.log(letterCount);


// ==========================
// Quick summary
// ==========================
// reduce = অনেক ইনপুট → এক আউটপুট
// signature: (acc, cur, idx, arr) => newAcc, সঙ্গে initialValue
// groupBy, flatten, sum, max, promise chaining — সবই reduce দিয়ে করা যায়
// খালি অ্যারে + no initialValue → error


// Example 3: product of numbers
const numbers1 = [2, 3, 4];
const productResult = numbers1.reduce((acc, curr) => acc * curr, 1);
console.log("Product:", productResult); // 24


// Example 4: max value
const numbers2 = [10, 5, 25, 8, 30];
const maxValue = numbers2.reduce((acc, curr) => (curr > acc ? curr : acc), numbers2[0]);
console.log("Max value:", maxValue); // 30


// Example 5: array to string
const wordsArr = ['Hello', ' ', 'World', '!'];
const sentenceStr = wordsArr.reduce((acc, curr) => acc + curr, '');
console.log("Sentence:", sentenceStr); // "Hello World!"


// Example 6: total price
const itemsArr = [
    { name: 'Apple', price: 100 },
    { name: 'Banana', price: 50 },
    { name: 'Orange', price: 80 }
];

const totalPrice = itemsArr.reduce((acc, curr) => acc + curr.price, 0);
console.log("Total price:", totalPrice); // 230


// Example 7: group students by grade
const studentsArr = [
    { name: 'Rahim', grade: 'A' },
    { name: 'Karim', grade: 'B' },
    { name: 'Salam', grade: 'A' },
    { name: 'Barkat', grade: 'C' },
    { name: 'Rafiq', grade: 'B' }
];

const groupedByGrade = studentsArr.reduce((acc, student) => {
    const grade = student.grade;

    if (!acc[grade]) acc[grade] = [];

    acc[grade].push(student.name);

    return acc;
}, {});

console.log("Grouped by grade:", groupedByGrade);