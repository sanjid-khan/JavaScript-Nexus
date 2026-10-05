 
 cart=["pizz","coke","sandwich"]
 
 function placeorder(cart){
    console.log("Talking with Domino's");

  const pr= new Promise (function(resolve,reject){

    setTimeout(()=>{

      const food_available=true;

      if(food_available){
        console.log("Order Placed Succesfully");
     const order={orderId: 221, food:cart, restaurent:"Dominos", location:"Dwarka"};
     resolve(order);
      }
      else{
        reject("Items Out of the stock");
      }
    },2000);

  })

  return pr;
     
}


function preparingOrder(order){
    console.log("Pizza preparation started.......");

    const pr= new Promise(function(resolve,reject){

       setTimeout(()=>{
     console.log("Pizza preparation done");
     const foodDetails={taken:12, restaurent:order.restaurent, location: order.location}
     resolve(foodDetails);
    },5000);

    })

    return pr;
}


function pickupOrder(foodDetails){
    console.log("Reaching restaurent for picking order");
    
   const pr=new Promise(function(resolve,reject){
    setTimeout(()=>{
      console.log("Picked up order by Delivery Boy");
      const droplocation=foodDetails.location;
      resolve(droplocation);
    },3000);
   })

    return pr;
}


function deliveryOrder(droplocation){
    console.log("Delivery boy on the way");

    setTimeout(()=>{
     console.log("Order Delivered successfully");
    },5000);
}


async  function greet(){

    try{ 
    const order= await placeorder(cart);
    const foodDetails= await preparingOrder(order);
    const droplocation= await pickupOrder(foodDetails);
   deliveryOrder(droplocation);
   }
   catch{
    console.log(error);
   }
}



greet();


placeorder(cart)
.then(order=>preparingOrder(order))
.then(foodDetails=>pickupOrder(foodDetails))
.then(droplocation=>deliveryOrder(droplocation))
.catch(error=>console.log(error));





const p1= new Promise ((resolve,reject)=>{
    setTimeout(() => {
        resolve("First Promise resolved");
    },5000);
})

const p2= new Promise ((resolve,reject)=>{
    setTimeout(() => {
        resolve("Second Promise resolved");
    },8000);
})



p1.then(value=>console.log(value));

p2.then(value=>console.log(value));


// promises direct print kora jabe na
// console.log(p1);
p1.then((response)=>console.log(response));


async function greet() {

    const data1=await p1;
    console.log("Hello Coder Army");
    console.log(data1);

    const data2= await p2;
    console.log(data2);
}

// greet();



function test1(){

  const p1= new Promise ((resolve,reject)=>{
    setTimeout(() => {
        resolve("First Promise resolved");
    },5000);
})
   return p1;
}

function test2(){

    const p2= new Promise ((resolve,reject)=>{
    setTimeout(() => {
        resolve("Second Promise resolved");
    },5000);
})
     return p2;
}


async function greet() {

    const data1=await test1();
    // console.log("Hello Coder Army");
    console.log(data1);

    const data2= await test2();
    console.log(data2);

}

greet();




async function meet() {
  
  return "Hello Coder"; 
}

meet().then(value=>console.log(value));