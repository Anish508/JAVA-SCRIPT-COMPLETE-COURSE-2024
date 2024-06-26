//objects singleton and constructor

/* const tinder = new Object()  //this is singleton object
const newTinder = {}//this is non singleton object */

const tinderUser = {
    fullName :{
        userFullname:{
            firstName :"Anish",
            last_name:"n"
        }
    }
}

tinderUser.name ="Anish"
tinderUser.gmail ="Anish@gmail.com"
tinderUser.isLoggedIn ="true"

/* onsole.log(tinderUser);
console.log(tinderUser.fullName?.userFullname.firstName);
 */

let obj1 = {1:"a", 2:"b"}
let obj2 = {3:"c", 4:"d"}
let obj3 = {obj1 , obj2}
// console.log(obj3); To ovecome this problem we use assign

obj3=Object.assign({},obj1,obj2)//braces is used beacuse it is consider as the standard syntax and good practice it contains two parameter object and source,when we use {} at begining it is conisder as a target value
console.log(obj3);

//another method

const obj4 = {...obj1, ...obj2}
console.log(obj4);

console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));

console.log(tinderUser.hasOwnProperty('isLogged'));