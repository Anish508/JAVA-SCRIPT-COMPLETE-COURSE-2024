//data types summery

//call by value and call by reference

/* primitive  call by value */
/* 
number
string
boolean
null
undefined
symbol
BigInt
*/

const id = Symbol('123')
const anotherId = Symbol('123')
console.log(id === anotherId);

let BigIntNum = 12212121443232n
console.log(typeof BigIntNum);

//Non primitive or reference type
//Arrays , objects,functions

const myArray = [12,78,323,80]
const myObj = {
    name:"anish",
    age :"19"
}

const myFunction = function(){
    console.log("Hello world");
}
myFunction()
console.log(typeof myFunction);