let shallowObj1 = {
    a:1,
    b:2
}

let shallowObj2 = shallowObj1;
// shallow copy
shallowObj2.a = 10;
console.log(shallowObj2, shallowObj1);

// deep copy
let deepObj3 = structuredClone(shallowObj1);
deepObj3.a = 20;
console.log(deepObj3, shallowObj1);



// Nested Object
const nestedUser1 = {
    name:"rohit", 
    balance:420,
    address:{
        pincode:246149,
        city:"Kotwar"
    }
}
// console.log(nestedUser1.address.pincode);

const nestedUserCopy1 = Object.assign({}, nestedUser1);
console.log(nestedUserCopy1);
nestedUserCopy1.address.pincode = 341248;
nestedUserCopy1.name = "Mohit";
console.log(nestedUser1.address.pincode);
console.log(nestedUser1.name);



// Nested Object
const nestedUser2 = {
    name:"sanjid",
    age:22,
    balance:500,
    address:{
        pincode:1216,
        city:"Mawna"
    }
}

const nestedUserCopy2 = Object.assign({}, nestedUser2);
console.log(nestedUserCopy2);
nestedUserCopy2.address.pincode = 1220;
nestedUserCopy2.name = "sadin",
console.log(nestedUser2.address.pincode);
console.log(nestedUser2.name);



// Destructruing of an object
let destructObj1 = {
    name:"rohit",
    money:430,
    balance:30,
    age:20,
    aadhar:"sanjid",
}

const {name, balance} = destructObj1;
console.log(name, balance);

const {name:full_name , balance:amount, age:umar} = destructObj1;
console.log(full_name, amount, umar);

const {name:personName, age:personAge, ...restObj1} = destructObj1;
// rest operator diya kora hoyche
console.log(restObj1);




let destructObj2 = {
    name:"sanjid",
    age:22,
    money:430,
    balancee:50,
    aadhar:"xyz"
}

const {aadhar, balancee, money} = destructObj2;
console.log(aadhar, balance, money);


const {name:short_name, aadhar:NID, balance:cash} = destructObj2;
console.log(short_name, NID, cash);

const {name:userName, age:userAge, ...restObj2} = destructObj2;
console.log(restObj2);



// Array Destructring


const arrDestruct1 = [3,2,1,5,10];
const [first, second] = arrDestruct1
const [firstVal, secondVal, , thirdVal] = arrDestruct1;
console.log(firstVal, secondVal, thirdVal);
const [firstItem, secondItem, ...restItems] = arrDestruct1;
console.log(restItems);



const arrDestruct2 = [10,20,40,80,60];
const [ft, sd] = arrDestruct2;
console.log(ft, sd);
const [fir, sec, , , fif] = arrDestruct2;
console.log(fir, sec, fif);
const [ff, ss, ...comb] = arrDestruct2;
console.log(comb);




let nestedDestructObj = {
    name:"rohit",
    money:430,
    balance:30,
    age:20,
    aadhar:"sanjid",
    address: {
        pincode:246149,
        city:"Kotwar",
        state:"UK",
        district:"UttaraKhand"
    }
};

const {address:adds} = nestedDestructObj;
console.log(adds);

const {address:{pincode, city}} = nestedDestructObj;
console.log(pincode, city);

const {address:ad} = nestedDestructObj;
console.log(ad);

const {address:{state, district}} = nestedDestructObj;
console.log(state, district);



let complexObj1 = {
    name:"rohit",
    age:20,
    arr:[90,40,60,80],
    address:{
        pincode:245149,
        city:"Kotwar",
        state:"Uk"
    }
}

const {arr:[firstScore]} = complexObj1;
console.log(firstScore);

const [, secondScore, thirdScore] = complexObj1.arr;
console.log(secondScore);
console.log(thirdScore);

const {arr:arrCopy} = complexObj1;
console.log(arrCopy);




let userObjWithMethod = {
    name: "Rohit",
    amount: 420,
    greet: function() {
        console.log("Hello Coder Army");
    },
    meet: function() {
        return 20;
    }
}

userObjWithMethod.greet();
