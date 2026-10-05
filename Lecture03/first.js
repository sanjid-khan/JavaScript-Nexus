// Primitive Data Types
// number, string, boolean, null, undefined, bigint, symbol

// Non Primitive Data Type
// Array, Object, Function

// ------------------ Numbers ------------------

let num1 = 10;
let num2 = 20;
let num3 = 50;

// ------------------ Arrays ------------------

let arr1 = [10, 20, 50, "rohit", "mohit"];
console.log(arr1);

let arr2 = [7000, 8000, 1000, "sanjid", "nasim", "robin"];
console.log(arr2);

// ------------------ Objects ------------------

let obj1 = {
  user_name: "rohit",
  account_number: 3124314213,
  balance: 420
};
console.log(obj1);

let obj2 = {
  name: "sanjid",
  id: 2241081216,
  fees: 300,
  department: "CSE"
};
console.log(obj2);

// ------------------ Function ------------------

let fun1 = function () {
  console.log("hello coder army");
  return 10;
};

console.log(fun1());

// ------------------ Type Conversion ------------------

// ----------- String to Number -----------

let accountBalanceStr = "100";
let accountBalanceNum = Number(accountBalanceStr);
console.log(typeof accountBalanceStr);
console.log(accountBalanceNum);
console.log(typeof accountBalanceNum);

let balanceStr = "100";
let balanceNum = Number(balanceStr);
console.log(balanceNum);
console.log(typeof balanceStr);
console.log(typeof balanceNum);

// ----------- Boolean to Number -----------

let boolFalse1 = false;
console.log(Number(boolFalse1));

let boolTrue1 = true;
console.log(Number(boolTrue1));

// ----------- Invalid Number Conversion -----------

let invalidStr1 = "100sa";
console.log(Number(invalidStr1));

let invalidStr2 = "100s";
console.log(Number(invalidStr2));

let validStrNum = "100";
console.log(Number(validStrNum));

let randomStr = "robin";
console.log(Number(randomStr));

// ----------- Null to Number -----------

let nullValue1 = null;
console.log(Number(nullValue1));

let nullValue2 = null;
console.log(Number(nullValue2));

// ----------- Undefined to Number -----------

let undefinedValue1;
console.log(Number(undefinedValue1));

let undefinedValue2;
console.log(Number(undefinedValue2));

// ----------- Number to String -----------

let numToStr1 = 20;
console.log(typeof String(numToStr1));

let numToStr2 = 20;
console.log(typeof String(numToStr2));

// ----------- Boolean to String -----------

let boolToStr1 = true;
console.log(String(boolToStr1));

let boolToStr2 = false;
console.log(typeof boolToStr2);
console.log(typeof String(boolToStr2));

let boolToStr3 = true;
console.log(typeof String(boolToStr3));

let boolToStr4 = false;
console.log(typeof String(boolToStr4));

// ----------- Empty String to Boolean -----------

let emptyStr1 = "";
console.log(Boolean(emptyStr1));

let emptyStr2 = "";
console.log(Boolean(emptyStr2));

// ----------- Null & Undefined to String -----------

let nullToStr = null;
console.log(typeof String(nullToStr));

let undefinedToStr;
console.log(typeof String(undefinedToStr));

// ------------------ More Type Conversion ------------------

// ----------- String to Number -----------

let strNum1 = "100";
console.log(Number(strNum1));
console.log(typeof Number(strNum1));

let strNum2 = "200san";
console.log(Number(strNum2));
console.log(typeof Number(strNum2));

let strNum3 = "sanjid";
console.log(Number(strNum3));
console.log(typeof Number(strNum3));

// ----------- Boolean to Number -----------

let boolToNum1 = true;
console.log(Number(boolToNum1));

let boolToNum2 = false;
console.log(typeof Number(boolToNum2));

// ----------- Null & Undefined to Number -----------

let nullToNum = null;
console.log(Number(nullToNum));

let undefinedToNum;
console.log(Number(undefinedToNum));

// ----------- Primitive to String -----------

let numToStringFinal = 100;
console.log(String(numToStringFinal));

let boolTrueFinal = true;
console.log(String(boolTrueFinal));

let boolFalseFinal = false;
console.log(String(boolFalseFinal));

let nullToStringFinal = null;
console.log(String(nullToStringFinal));

let undefinedToStringFinal;
console.log(String(undefinedToStringFinal));

// ----------- BigInt to String -----------

let bigNumberValue = 1234567890123456789012345678901234567890n;
console.log(String(bigNumberValue));

// ----------- Boolean Conversion Examples -----------

console.log(Boolean(0));           // false
console.log(Boolean(1));           // true
console.log(Boolean(""));          // false
console.log(Boolean("hi"));        // true
console.log(Boolean(null));        // false
console.log(Boolean(undefined));   // false
