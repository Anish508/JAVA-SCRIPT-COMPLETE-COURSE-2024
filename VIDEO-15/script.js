//js objects
//singleton

//object literals

const mySym =Symbol()

const user = {
    [mySym]:"mykey1",
    name:'anish',
   " full name ":"anish barke",
    password :'anish@1283',
    locatiom:"anish@gmai.com",
    isLoggedIn:"true",
    lastLogin :["monday","friday"]
}

console.log(user.password);
console.log(user["password"]);
console.log(user[" full name "]);
console.log(user[mySym]);

user.name = "Karan"
console.log(user);
//Object.freeze(user)
user.name = "varun"
console.log(user);

user.greeting = function(){
    console.log("Hello users");
}

user.greetingTwo= function(){
    console.log(`hellow ${this.name} welcome`);
}
console.log(user.greeting());
console.log(user.greetingTwo());