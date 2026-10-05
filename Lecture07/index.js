let num1=231;
let num2= new Number(231);
let num3= new Number(231);
console.log(num1==num2);
console.log(num2==num3);
console.log(num2);
console.log(typeof num2);

let num=231474.68;
console.log(num.toFixed(3));
console.log(num.toPrecision(7));
console.log(num.toExponential(5));
console.log(num.toString());
console.log(typeof num.toString());
console.log( num.valueOf());

let x=1294.5678;
console.log(x.toFixed(4));
console.log(x.toPrecision(9));
console.log(x.toExponential(8))
console.log(typeof x.toString());

// Math

console.log(Math.E);
console.log(Math.LN10);
console.log(Math.PI)
console.log(Math.LOG10E);

// floor and ceil
let nm=23.5;
console.log(Math.floor(nm));
console.log(Math.ceil(nm));

console.log(Math.floor(Math.random()*10));
0<=value<1
0-9

// 1-10
console.log(Math.floor(Math.random()*10)+1);

// 11-20 generate
console.log(Math.floor(Math.random()*10)+11);
0-9+11

// min=40, max=50
console.log(Math.floor(Math.random()*(max-min+1)+min));

// 0-9
console.log(Math.floor(Math.random()*10));

// 0-10
// 2-12
console.log(Math.floor(Math.random()*11+2));

// 30-40
console.log(Math.floor(Math.random()*(40-30+1)+30));

// Ludo
// 1-6
console.log(Math.floor(Math.random()*(6-1+1)+1));


// ----most use math property------
                //    ************
Math.PI, Math.round(), Math.floor(), Math.ceil(), Math.abs(),
Math.min(), Math.max(), Math.random(), Math.pow(), Math.sqrt()
console.log(Math.floor(Math.random()*(max-min+1)+min))