
function timing(){ 
const timer=document.getElementById("root");
const now= new Date();
const BangladeshiTime=now.toLocaleTimeString();
timer.innerHTML=BangladeshiTime;
}

setInterval(timing,1000);

const timer=document.getElementById("root");
timer.style.fontSize="200px";
timer.style.display="flex";
timer.style.height="100vh";
timer.style.justifyContent="center";
timer.style.alignItems="center";
timer.style.backgroundColor="orange";





// Olympics Countdown Time Project



function timing(){ 

const date1=new Date();
const date2=new Date("2028-07-14T00:00:00");

const date=date2-date1;
const days=Math.floor(date/(1000*60*60*24));
const hours=Math.floor((date/(1000*60*60))%24);
const minutes=Math.floor((date/(1000*60))%60);
const second=Math.floor((date/(1000))%60);
const totaltimeleft=`Olympics CountDownTime: Days:${days} Hour:${hours} Minutes:${minutes} second:${second}`;
timer.innerHTML=totaltimeleft;

}

setInterval(timing,1000);

const timer=document.getElementById("root");
timer.style.fontSize="50px";
timer.style.display="flex";
timer.style.height="100vh";
timer.style.justifyContent="center";
timer.style.alignItems="center";
timer.style.backgroundColor="orange";





const id=document.querySelector('#first');
id.innerHTML="Hello Money";

const id2=document.querySelector(".header2");
id2.style.backgroundColor="pink";




const id2= document.querySelector("#second");
id2.innerHTML="I want to be e better developer"

const id=document.querySelector(".header1");
id.style.fontSize="60px";
id.style.color="green";
id.style.backgroundColor="red";


// How to iterate over Node list

const obj=document.querySelectorAll('.header1')

// 1: 
 obj.forEach((val)=>{
    console.log(val);
 })

// 2: 
for (let val of obj)
    console.log(val);

// 3:
 for(i=0; i<obj.length;i++)
    obj[i].style.color="red";

// Convert Nodelist into array
Array.from(obj)


// **********************************************************

const obj1= document.getElementsByTagName('h1');
console.log(obj1);


// let team=document.getElementsByTagName('li');


const team=document.getElementsByTagName('li');
console.log(team);

// How to iterate over it


// 1:
 for(let i=0;i<team.length;i++)
team[i].style.color="black";

// 2:
 for(let val of team)
console.log(val);

// 3:
 Array.from(team).forEach((val)=>{
    console.log(val);
})


// ***********************************

const list=document.querySelector('li');
console.log(list.parentElement);
console.log(list.parentNode);
// 2 da ektai parentNode er parentElement


const par=document.querySelector('ul');
console.log(par);
console.log(par.childNodes);
console.log(par.children);
console.log(par.firstChild);
console.log(par.firstElementChild);



// innerHTML
// textContent
// innerText



// innerHTML--> sob select korbe amoni ki tag o select korbe.
//              tag er vitor ja thakbe sob select korbe(vitore tag thakleu select)

// textContent--> hide text o dekha jabe

// innerText--> screen a ja thakbe tai dekhabe


// innerHTML → HTML রেন্ডার করে

// textContent → শুধু plain text, hidden text-ও নেয়

// innerText → শুধু visible text নেয়, CSS follow করে