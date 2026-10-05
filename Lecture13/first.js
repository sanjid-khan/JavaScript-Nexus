// scope ke baare mein
// Global Scope, Local Scope(Functional Scope), Block Scope

let globalA = 10;
var globalB = 20;
const globalC = 30;
// Global Scope Wale


function greet() {
    let localA = 10;
    var localB = 20;
    const localC = 30;

    console.log("Hello Function");
    console.log(localA, localB, localC);
}

greet();

console.log(globalC);
// Local Scope (Functional Scope)



// Reassignment example

let amountValue = 300;
amountValue = 30;
amountValue = 10;


if (true) {
    let blockA = 10;
    var blockAmount = 20;   // var is function scoped
    const blockC = 30;
}

// block scope -> if else for loop etc.

console.log(blockAmount);  
// block Scope (var escapes block)

console.log(globalC);



let amountOuter = 20;

if (true) {
    let amountInner = 30;
    console.log(amountInner);
}

// ay khane ekta global scope er part(amountOuter),
// arekta block local scope er part tai problem hocche na



// Hoisting Example (Function Declaration)
// eta declare er age access kora jabe

meetOne();

function meetOne() {
    console.log("hello khan sanjid");
}



// Hoisting Example (Function Expression with const)
// eta ke declare korar age access kora jabe na const tai

const meetTwo = function () {
    console.log("Hello Meet");
};

// meetTwo();  // ❌ Uncomment করলে আগে call করলে error দিবে
