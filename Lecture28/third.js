// JS is a single threaded synchronous language:

// JS bheviour: Asunc

console.log("10");

setTimeout(()=>{
  console.log("20");
},2000);

console.log("30");


// single threaded: One task will be executed at a time:


console.log("10");

const timer=Date.now();
// timer older time
while(Date.now()-timer<2000){
    // wait for 2 second
}

console.log('20');

console.log("30");