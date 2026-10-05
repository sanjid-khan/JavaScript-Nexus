// call back hell

// fetchuser(greet)

// Domino's pizza order kar rahe ho:

callback=() =>{
    preparingOrder();
}

callback();


function placeorder(callback){
    console.log("Talking with Domino's");

    setTimeout(()=>{
     console.log("Order Placed Succesfully");
     callback();
    },2000);
}

function preparingOrder(callback){
    console.log("Pizza preparation started.......");

    setTimeout(()=>{
     console.log("Pizza preparation done");
     callback();
    },5000);
}

function pickupOrder(callback){
    console.log("Reaching restaurent for picking order");
    
    setTimeout(()=>{
      console.log("Picked up order by Delivery Boy");
      callback();
    },3000);
}

function deliveryOrder(){
    console.log("Delivery boy on the way");

    setTimeout(()=>{
     console.log("Order Delivered successfully");
    },5000);
}

// placeorder();
// preparingOrder();


// placeorder(preparingOrder);


placeorder(()=>{
 preparingOrder(()=>{
    pickupOrder(()=>{
        deliveryOrder();
    });
 });
});

placeorder(()=>{
    preparingOrder(()=>{
        pickupOrder(()=>{
            deliveryOrder();
        });
    });
});  




// callback hell


