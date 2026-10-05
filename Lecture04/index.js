// comparison operator
// number to number

let a1=1;
let a2=2;
console.log(a1<=a2);

// both are equal
// < less than, > greater than
// <= less than equal to, >=greater than equal to

let num=10;
let str="12";
console.log(num==str);

// type conversion hoga (string to number)

// let a1=10;
// let str1="10";  (aikhane "10san" dile false ashbe)
// console.log(a1==str1);

// === type check, then compare the value
// console.log(a1===str1);

let n2=30;
let m3=40;
console.log(n2===m3);


// null==undefined ->true
// null===undefined ->false

console.log(null==undefined);
console.log(null===undefined);

// null can only be equivalent to undefined ==

console.log(null==0);
console.log(null<0);
console.log(null>0);
console.log(null<=100);
console.log(null>=0);
// aikhane a null convert hobe 0 te tai last 2 da true

// Undefined Comparion
// undefined will be convert in NaN tai sob gula false

console.log(undefined==0);
console.log(undefined<0);
console.log(undefined>0);
console.log(undefined<=0);
console.log(undefined>=0);

console.log(NaN==NaN);
console.log(NaN===NaN);

let str3="rohit"; 
let str4="mohan"; 

console.log(Number(str3)==Number(str4))
console.log(Number(str3));


let abc1=123;
let abc2="123";
let abc3=123;
console.log(abc1==abc2==abc3)

// console.log(undefined!=null);
// যেহেতু loose equality এ তারা equal, তাই "not equal" → false

let age=18;
let money=420;
console.log(age<18 && money>200);

console.log(age >10 || money>200);

console.log (!(age>10));

console.log(4&5);
console.log(11&14);
console.log(11|14);
console.log(5^7);
console.log(5<<3);

// 5 multiply by 2 power 3
// 101.0000000000
// 101000.00000

console.log(20>>2);

// right shift, 20 divided by 2 power 2
// 10100.00000
// 101.0000000

 console.log(null==0);
//  aikhane type conversion kore null er jonno alada rules
// null shudu undefined er equal
