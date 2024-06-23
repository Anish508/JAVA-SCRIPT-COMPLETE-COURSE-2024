//numbers and maths

let score = 12112
console.log(score);

let balance = new Number(125)
console.log(balance.toString().length);
console.log(balance.toFixed(2));

let otherNum = new Number(125.895)
console.log(otherNum.toPrecision(4));

const hundreds = 100000
console.log(hundreds.toLocaleString('en-IN'));

/*********************Maths***************************/

console.log(Math.abs(-4));
console.log(Math.round(4.65));
console.log(Math.ceil(4.65));
console.log(Math.floor(4.65));
console.log(Math.min(9,2,1,3,135));


//Math.random(this value always between 0 to 1)

//console.log(Math.random());
console.log(Math.round((Math.random()*10)+1));

let min = 10
let max = 20

console.log(Math.floor((Math.random()*(max-min + 1)) + (min)));