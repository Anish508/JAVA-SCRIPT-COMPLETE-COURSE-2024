//comparision operator in js
console.log(null > 0);
console.log(null < 0);
console.log(null >= 0);
console.log(null <= 0);
console.log(null == 0);
console.log(undefined > 0); //we get false for each undefined comparision
console.log(undefined < 0);
console.log(undefined >= 0);
console.log(undefined <= 0);
console.log(undefined == 0);

// === 

/* 
ex: console.log("2" > 1); here we can see type conversion so comparision is possible
*/
//but when we use ===
console.log(1 == "1");
console.log(1 === "1"); //strict check we use this kind of comparision