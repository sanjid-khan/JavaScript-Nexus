let obj={
    name:"rohit",
    age:20,
    orange:1,
}

console.log(obj.hasOwnProperty("name"));

let curr="apple";
obj.apple=1;
// obj.["apple"]=1;
obj[curr]=1;


console.log(obj.hasOwnProperty(curr));
if(obj.hasOwnProperty(curr))
    obj[curr]++;
console.log(obj);