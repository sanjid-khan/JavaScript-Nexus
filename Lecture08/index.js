const arr=[2,35,1,8,9,"rohit",true,8];
console.log(arr[-1]);
console.log(arr.at(-3));
// at is lastest, negative index le leta hai
console.log(arr.length);
//length
 helpful
const newarr=arr;
console.log(newarr==arr);
const newarr1= structuredClone (arr);
console.log(newarr1==arr);
// structuredClone use korle alada alada create hobe

// push, add element at end
arr.push(30);
arr.push(50);
console.log(arr);

// pop, pop the last element from array
arr.pop();
arr.pop();
arr.pop();
console.log(arr);

// unshift, add element at start
arr.unshift(10);
arr.unshift(20);
console.log(arr);

// shift, delete element from start
arr.shift();
arr.shift();
console.log(arr);

// delete operation
delete arr[0];
console.log(arr);

console.log(arr);
console.log(arr.indexOf(8));
console.log(arr.lastIndexOf(8));
console.log(arr.includes(20));


// slice
console.log(arr);
let a= arr.slice(2,5);
console.log(a);
console.log(arr);

// splice
console.log(arr);
let newsplice= arr.splice(2,6);
console.log(newsplice);
console.log(arr);
// splice (starting_index,total_element_delete,add value)
arr.splice(2,0,"money",90);
console.log(arr);

console.log( arr.toString());
console.log(arr.join(" "));

// concat
let arr1 =[2,35,6,11];
let arr2=[5,12,19,20];
let arr4=[23,432,1123,31];
let arr3=arr1.concat(arr2,arr4);
console.log(arr3);

arr1.push(arr4);
// ai vabe korle 2D array te convert korbe
console.log(arr1);


// 2D ARRAY
let arrr=[1,2,3,4,5,6,7,8,9];
let arr2d=[[1,2,3,[12,14,19,[12,44,75,87]]],[4,5,6],[7,8,9]];
let newar=arr2d.flat(Infinity);
// [1,2,3]
// [4,5,6]
// [7,8,9]
console.log(newar);


let abc=[2,1,4,1];
console.log(Array.isArray(abc));
// check kora hoy array ki na (Array.isArray(arr_name));

// not recommoned method
// let ac= new Array(2);
// console.log(ac);
