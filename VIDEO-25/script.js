//Control flow

//if
//<,>,<=,>>=,==,!=,===
const isUserLoggedIn = true;
if (isUserLoggedIn) {
  console.log("welcome to my website");
}
if (2 === "2") {
  //type checking (===)
  console.log("yes");
}

const temperature = 51;
if (temperature < 50) {
  console.log("less than 50");
} else {
  console.log("greater than 50");
}


/* const score = 200
if (score > 100) {
    var power = fly
    console.log(`user power:${power}`);
}
console.log(`user power:${power}`); */

//shortand notation

 let balance = 1000
/*if (balance > 500) console.log("test") ,console.log("test2");(not good practice) */ 

/* if (balance < 500) {
    console.log("less than  500");
}else if(balance < 750){
    console.log("less than  750");
}
else{
    console.log("more than 750");
} */

    const isUserLoggedIn2 = true
    const debitcard = true
    const loggedInFromGoogle = false
    const loggedInFromEmail = true

    if (isUserLoggedIn2 && debitcard) {
        console.log('allowed to shopping');
    }
    if (loggedInFromEmail || loggedInFromGoogle) {
        console.log("user logged in");
    }

    //switch case
    let month = 3
    switch (month) {
        case 1:
            console.log("Jan");
            break;
    
        case 2:
            console.log("feb");
            break;
    
        case 3:
            console.log("march");
            break;
    
        case 4:
            console.log("april");
            break;
    
        case 5:
            console.log("may");
            break;
    
        default:
            console.log("default case matched");
            break;
    }

    //Truthy and falsy values
/* falsy values 
false, 0 , "",-0, bigInt 0n ,null , undefined , NaN
*/

/* truthy values 
[],{}, "0" , 'false'," ",true, function(){}
*/
const emptyObj = {}
if (Object.keys(emptyObj).length == 0) {
    console.log("Object is empty");
}

//Nullish coalescing operator (??): null ,undefined

let val1;
// val1 = 5 ?? 10
// val1 = null ?? 10
val1 = undefined ?? 10 //this is used to handle complex db operations
val2 = null ?? 14 ?? 10

console.log(val1);
console.log(val2);

//ternary operator

const price = 100

price>=80 ? console.log("more than 80") : console.log("less than 100");