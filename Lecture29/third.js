console.log("Hello Coder Army");

setTimeout(()=>{
    const a=2+4;
    console.log(a);
},5000);

setInterval(()=>{
    console.log("I am fast");
},2000);

let b=20;
let arr=[20,30,11];

for(let i of arr)
    console.log(i*b);





// 🔥 Important Interview Trap
setTimeout(() => console.log("A"), 0);

Promise.resolve().then(() => console.log("B"));

console.log("C");



  
// [কল স্ট্যাক] ← [ইভেন্ট লুপ] ← [মাইক্রোটাস্ক কিউ (VIP)]
//                            ← [রেন্ডারিং (UI আপডেট)]
//                            ← [ম্যাক্রোটাস্ক কিউ (সাধারণ)]