// Call Back function

function names(fun){
    console.log("hello  I am name");
    fun();
}

function greet(){
    console.log("I am call Back Function");
}

names(greet);



function names(fun){
    console.log("hello  I am name");
    fun();
}

const greet= function() {
    console.log("I am call Back Function");
}

names(greet);



function names(fun){
    console.log("hello  I am name");
    fun();
}

names(()=>{
    console.log("I am call back function");
})




function fetchData(){
    // bhut saara
    console.log("I am fetching data");
}

setInterval(fetchData,5000);



