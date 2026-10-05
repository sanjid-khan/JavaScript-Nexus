    
// cart=["pizz","coke","sandwich"]
    
    
function placeorder(cart, callback){
    console.log("Talking with Domino's");

    setTimeout(()=>{
     console.log("Order Placed Succesfully");
     const order={orderId: 221, food:cart, restaurent:"Dominos", location:"Dwarka"};
     callback(order);
    },2000);
}


function preparingOrder(order, callback){
    console.log("Pizza preparation started.......");

    setTimeout(()=>{
     console.log("Pizza preparation done");
     const foodDetails={taken:12, restaurent:order.restaurent, location: order.location}
     callback(foodDetails);
    },5000);
}


function pickupOrder(foodDetails, callback){
    console.log("Reaching restaurent for picking order");
    
    setTimeout(()=>{
      console.log("Picked up order by Delivery Boy");
      const droplocation=foodDetails.location;
      callback(droplocation);
    },3000);
}


function deliveryOrder(droplocation){
    console.log("Delivery boy on the way");

    setTimeout(()=>{
     console.log("Order Delivered successfully");
    },5000);
}


placeorder(cart,callback);
 preparingOrder(order,callback);
 pickupOrder(foodDetails,callback);
 deliveryOrder(droplocation)

placeorder(cart, (order)=>{
 preparingOrder(order, (foodDetails)=>{
    pickupOrder( foodDetails,(droplocation)=>{
        deliveryOrder(droplocation);
    });
 });
});




// *********************************************************


placeorder(cart);
 preparingOrder(order);
 pickupOrder(foodDetails);
 deliveryOrder(droplocation)


const prom=placeorder(cart);
prom.then((order)=>{
 preparingOrder(order);
});




cart=["pizz","coke","sandwich"];


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


placeorder(cart)
.then(order=>preparingOrder(order))
.then(foodDetails=>pickupOrder(foodDetails))
.then(droplocation=>deliveryOrder(droplocation))
.catch(error=>console.log(error));


// const pr= new Promise(function(resolve,reject){

        //  return pr;

// });


// Callback Hell হয় যখন multiple async operation nested callback এ লেখা হয়।
// Promise async operation গুলোকে chain আকারে execute করতে দেয়, ফলে code flat হয়, readable হয়, এবং centralized error handling পাওয়া যায়।
// async/await Promise এর উপর built হয়ে আরও clean syntax দেয়।