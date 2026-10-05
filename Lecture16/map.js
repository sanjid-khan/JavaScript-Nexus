// key value pair: key should be unique
const map1= new Map();
map1.set(3,90);
map1.set("rohit",45);
map1.set(20,"mohan");
map1.set("rohit",40); // value ko update karega

map1.delete(3);

console.log(map1);
console.log(map1.has("rohit"));
console.log(map1.size);
map1.clear();
console.log(map1);



const map2= new Map([
      [4,"rohit"],
      ["mohan","rohan"],
      [30,9]
]);
console.log(map2);



const map3= new Map([[4,"rohit"],["mohan","rohan"],[30,9],[63,78]]);
// console.log(map3);
// for of loop

for(let value of map3)
    console.log(value);

for(let [key,value] of map3)
    console.log(key,value);

console.log(map3[4]);


// Object:
// keys: string or Symbol
// maps:
// keys:number,string, object


// H.W----> forEach in Map

// map1.forEach((value,key)=>console.log(value,key));