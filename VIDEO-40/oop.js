//object is collection of properties and methods

//why use oop

//parts of oop

//object literal

const user = {
userName  : "Anish",
loginCount : 8 ,
signedIn : true,
getUserDetails : function(){
    /* console.log(`User name : ${this.userName}`); */
    console.log(this); 
}
}
console.log(user.userName);
console.log(user.getUserDetails());

//constructor function

function userData(userName , id , pass){
    this.userName = userName
    this.userId = id
    this.password = pass
    this.greeting = function(){
        console.log(this.userName);
    }

    return this
}

const userOne = new userData('Anish','22508','anish#kk422')
const userTwo = new userData('karan','22560','karan$2121')

//console.log(userOne);
//console.log(userTwo.greeting());
console.log(userOne.constructor);



