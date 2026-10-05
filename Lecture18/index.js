
// The this keyword in JavaScript is a special keyword that refers to
// the context in which the current code is being executed.
// It's value depends on how the function where this is used is called.


// 1: Global Context(Outside Any Function)
// In Browser: window
// In Node.js: Module's exports object


// console.log(this);


// 2:Inside a Function
// i:(Non-Strict Mode)
// When this is used inside a regular function, it refers to the global object
// ii:Strict Mode
// this will be undefined inside a function


// "use strict"

// function greet (){
//     console.log(this);
// }

// window.greet();
// greet();

// aykhane this Non-strict mode global object ke point korbe
// kintu strict mode a undefined ke point korbe



// ********************************************************************


// 3: Inside a Method(object Context)
// When this is used inside an object's method, it refers to the object that
// owns the method


// const obj={
//     name:"rohit",
//     age:20,
//     meet: function(){
//         console.log(this);
//         console.log(this.name);
//     }
// }

// obj.meet();

// inside a method this obj ke point kore jeta own korbe method

// *********************************************************************

// Arrow functions don't have their own this.
// Instead, they inherit this from the surronding (lexical) scope.

// let obj={
//     name:"rohit",
//     age:11,
//     greet:()=>{
//         console.log(this);
//     }
// }

// obj.greet();


// let obj={
//     name:"rohit",
//     age:11,
//     greet:function(){
       
//      let ab=()=>{
//        console.log(this);
//      };
      
//      ab();
//     }
// }

// obj.greet();

// aykhane arrow function er nijet this nai. tai surronding theke nibe
// aykhane arrow function functional scope er vitor rakha tai. function theke inherit korbe
// er aykhane function er this object ke point kortache


// **********************************************************************

// Inside a Constructor or Class
// In constructors and classes, this refers to the instance of the object
// being created.

// class Person{
//     constructor(name,age){
//       this.name=name;
//       this.age=age;
//     }
// };

// let a= new Person("Rohit",20);
// console.log(a);



// let greet=()=>{
//     console.log(this);
// }
// greet();


// let meet=function(){
//     console.log(this);
// }
// meet();





//-----Object er vitor arrow function-----

//  ঠিক কিভাবে কাজ করছে? Step-by-Step

// ধরি কোডটি browser-এ চলছে:

// JS interpreter object literal দেখে

// Arrow function দেখে: “আমার নিজের this নেই, বাইরে খুঁজবো”

// Object literal function scope নয় → skip

// Next outer scope = global scope → window

// তাই this === window

// window.name সাধারণত empty বা undefined হয়





// | Context                      | this value                                 |
// | ---------------------------- | ------------------------------------------ |
// | Global scope (non-strict)    | window / global                            |
// | Global scope (strict)        | undefined                                  |
// | Object method                | calling object                             |
// | Nested regular function      | global / undefined                         |
// | Nested arrow function        | outer function this                        |
// | Constructor function / Class | new object                                 |
// | call / apply / bind          | explicitly set object                      |
// | Event listener               | normal function → element, arrow → lexical |
// | setTimeout / setInterval     | regular → global, arrow → lexical          |




// | Situation           | `this` কি হবে?              |
// | ------------------- | --------------------------- |
// | Global scope        | window (strict → undefined) |
// | Object method       | সেই object                  |
// | Regular function    | window / undefined          |
// | Arrow function      | parent function এর this     |
// | Constructor / Class | new object                  |
// | call/apply/bind     | manually set করা object     |
