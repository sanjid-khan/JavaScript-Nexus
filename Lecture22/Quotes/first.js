const quotes = [
  "Success is not final, failure is not fatal: It is the courage to continue that counts. — Winston Churchill",
  "Don’t watch the clock; do what it does. Keep going. — Sam Levenson",
  "Opportunities don’t happen, you create them. — Chris Grosser",
  "It always seems impossible until it’s done. — Nelson Mandela",
  "Don’t limit your challenges. Challenge your limits. — Anonymous",
  "Happiness is not something ready made. It comes from your own actions. — Dalai Lama",
  "In the middle of every difficulty lies opportunity. — Albert Einstein",
  "Do what you can, with what you have, where you are. — Theodore Roosevelt",
  "Your time is limited, so don’t waste it living someone else’s life. — Steve Jobs",
  "Every day may not be good, but there’s something good in every day. — Alice Morse Earle",
  "Fall seven times and stand up eight. — Japanese Proverb",
  "Hard times may have held you down, but they will not last forever. — Unknown",
  "Courage doesn’t always roar. Sometimes courage is the quiet voice at the end of the day saying, ‘I will try again tomorrow.’ — Mary Anne Radmacher",
  "He who is not courageous enough to take risks will accomplish nothing in life. — Muhammad Ali",
  "Strength grows in the moments when you think you can’t go on but you keep going anyway. — Unknown",
  "Shoot for the moon. Even if you miss, you’ll land among the stars. — Norman Vincent Peale",
  "The future belongs to those who believe in the beauty of their dreams. — Eleanor Roosevelt",
  "Don’t be pushed around by the fears in your mind. Be led by the dreams in your heart. — Roy T. Bennett",
  "Start where you are. Use what you have. Do what you can. — Arthur Ashe",
  "Dream big and dare to fail. — Norman Vaughan"
];

// const button=document.querySelector('button');

// button.addEventListener('click',(event)=>{

  // console.log(event.target);
  // console.log(event.type);
  // console.log(event.clientX);
  // console.log(event.clientY);
// const text=document.getElementById("quote");
//   const index=Math.floor(Math.random()*quotes.length);
//   text.textContent=quotes[index];

// });


const button=document.querySelector("button");

button.addEventListener('click', (event)=>{
       
   const text=document.getElementById("quote");
   const index=Math.floor(Math.random()*quotes.length);
   text.textContent=quotes[index];
})



// document.addEventListener('keydown',(event)=>{

//   if(event.key=="Enter")
//   { 
//   console.log(event.key);
//    const text=document.getElementById("quote");
//   const index=Math.floor(Math.random()*quotes.length);
//   text.textContent=quotes[index];
//   }
//   console.log(event.target);
// });


// const btn=document.querySelector('button');
// btn.addEventListener('keydown',(event)=>{
//      console.log(event.target);
//      console.log(event.key);
//      const text=document.getElementById("quote");
//   const index=Math.floor(Math.random()*quotes.length);
//   text.textContent=quotes[index];
// });





// e.target   // কোন element এ event ঘটেছে
// e.type     // click / submit etc
// e.preventDefault() // default behavior বন্ধ
