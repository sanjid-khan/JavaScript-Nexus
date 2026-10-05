const num=10;
 num=20;
console.log(num);

// Non Primitive datatype
const obj={
    id:10,
    balance:200,
}

obj.id=12;
console.log(obj);
// ay khane const thakleu value change hocche 
// karon ta hocche const a address store kore


let obj2={
    id:20,
    money:30
}

// location of obj2 is 800
// location of obj is  6521

 obj=obj2;
// error karon 2 tar address alada (let,const) kintu 2 tai let thakle error dito na


String in JS

let str1="hello coder army";
let str2="mein toh mast hu";
let str3=`Aur bhaiya kye haal chaal`;

let price=80;

let value=90;
console.log(`the value of the pen is ${value}. please buy it`);


console.log(`price of the tomato is  ${price}, get is asap`);
console.log("price of the tomato is", price, "get is asap");
console.log(str1,str2,str3);

// string concatentation
let s1="hello";
let s2=" Coder army";
let s3=s1+s2;
console.log(s3.length);
console.log(s3);

 


"hello coder army"
console.log(' "hello Coder Army" ');
'hello coder army'
console.log(" 'hello coder army' ")


let message="Rohit bhaiya bhut bade badmash hai. \nWo bhut gande insaan hai";
console.log(message);
// escape character \
let mesg="Rohit bhaiya bhut bade badmash hai. \\nWo bhut gande insaan hai";
console.log(mesg);


let special="rohit";
console.log(special[3]);
console.log(special.charAt(3));


// to lowercase
// to uppercase
console.log(special.toLocaleLowerCase());
let strtemp=special.toUpperCase();
console.log(strtemp);
console.log(special); 


let hero="hello Coder Army Coder";
console.log(hero.indexOf("Coder"));
console.log(hero.lastIndexOf("Coder"));
console.log(hero.indexOf("coder"));
console.log(hero.includes("Coder"));

let code=" i want to be a good software engineer good";
console.log(code.includes("good"));

//              0123456
// let newstring="HeloDon";
             -7-6-5-4-3-2-1
console.log(newstring.slice(1,3));
// slice can take negative index also;
console.log(newstring.substring(0,3));
console.log(newstring.slice(-6,5));
console.log(newstring.slice(-2,4));
// aida kaj korbe na karon negative age hote hobe positive er
console.log(newstring.substr(0,6));


let s="KhanSanjid";
console.log(s.slice(0,3));
console.log(s.substring(4,7));
console.log(s.substr(0,4));
//  aida deprecated ahn use hoy na



let newstring = "HeloDon";

console.log(newstring.slice(1, 3));      // index 1 থেকে 3 এর আগ পর্যন্ত
console.log(newstring.substring(0, 3)); // index 0 থেকে 3 এর আগ পর্যন্ত
console.log(newstring.slice(-6, 5));    // ডানদিক থেকে 6th index থেকে 5 এর আগ পর্যন্ত
console.log(newstring.slice(-2, 4));    // ডানদিক থেকে 2nd index থেকে 4 এর আগ পর্যন্ত (ফাঁকা হবে)
console.log(newstring.slice(0, 6));     // substr এর বদলে slice ব্যবহার

let str10="hello ji kaise ho";
console.log(str10.replace("ji","Money"));
console.log(str10.replaceAll("ji","Money"));

let str="hello coder ki khbr coder kmn acho coder";
console.log(str.replace("coder","vai"));
console.log(str.replaceAll("coder","vai"));


let str11="money! honey! sunny! funny!";
console.log(str11.split("!"));

let st1="red, green, blue";
console.log(st1.split(","));
console.log(st1);


let str12=" hello ji ";
console.log(str12);
console.log(str12.length);
console.log(str12.trim().length);
console.log(str12.trim());

let l=" hello  vaiya ";
console.log(l.trim());
console.log(l);


// New way to creat string
let lasteststring = new String("Hello Coder Army");
console.log(lasteststring);
console.log(typeof lasteststring);

let newstr= new String("hello uttara University");
console.log(typeof newstr);


