// call back Hell

// callback Function:
function fetchuser(callback){
    console.log("Fetching the user Detail....");
    setTimeout(()=>{
      console.log("Data fetched successfully");
      const name="Rohit";
    //   Date fetched from backend

     callback(name);

      greet(name);
      meet(name);
    },2000);
};


function greet(name){
    console.log(`Hello ${name}`);
}

function meet (name){
    console.log(`hello ${name}, I will meet you delhi`);
}

function edit(name){
    console.log(`Edit ${name}, of the user`);
}

fetchuser(greet);
fetchuser(meet);
fetchuser(edit);


// ****************************************************************



function greet(obj){
    console.log(`Hello ${obj.name}`);
}

function meet (obj){
    console.log(`hello ${obj.name}, I will meet you delhi`);
}

function edit(obj){
    console.log(`Edit ${obj.name}, of the user`);
}

function printAge(obj){
    console.log(`User ${obj.age} `);
}


// User data fetch:
// {
//     name:"Rohit",
//     age:28,
//     city:"delhi"
//  }
// 1: greet
// 2: meet
// 3: edit
// 4: age


function fetchdata(callback){
    console.log("Fetching the user Detail......");
    setTimeout(()=>{
     console.log("data fetched successfully");
     const obj={
        name:"Rohit",
        age:28,
        city:"delhi"
      }
    //  Data fetched from backend

     callback(obj);
    },2000);
}

fetchdata(meet);
fetchdata(edit);





function nam(obj){
    console.log(`My name is ${obj.name}`);
}

function age(obj){
    console.log(`My age is ${obj.age}`);
}

function city(obj){
    console.log(`I living at ${obj.city}`);
}


function fetchdata(callback){
    console.log("Fetching the user details.....");
    setTimeout(()=>{
        console.log("Data fetched successfully");
        const obj={
            name:"sanjid",
            age:22,
            city:"Gazipur"
        }
        callback(obj);
    },3000)
}

fetchdata(nam);
fetchdata(age);
fetchdata(city);


