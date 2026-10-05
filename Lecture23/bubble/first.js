 const grandparent= document.getElementById('grandparent');
 const parent=document.getElementById("parent");
 const child=document.getElementById('child');


//  event bubbling and event capturing

child.addEventListener('click',(event)=>{
//  console.log("child clicked");
  event.stopPropagation();
//  console.log(event.target);
},false);

parent.addEventListener('click',(event)=>{
//  console.log("parent clicked");
//  console.log(event.target);
// console.log(event.currentTarget)
},false);

grandparent.addEventListener('click',(event)=>{
//  console.log("grandparent clicked");
//  console.log(event.target);
console.log(event.currentTarget);
},false);

// addEventListener(first_event,useCallback, capture);


// event delegation