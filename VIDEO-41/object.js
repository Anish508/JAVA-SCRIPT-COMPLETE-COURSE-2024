function multiplyBy5(num){
    return num *5 
}
multiplyBy5.power = 2

// console.log(multiplyBy5(5));
// console.log(multiplyBy5.power);
// console.log(multiplyBy5.prototype);


function createUser(username , score){
    this.username = username
    this.score = score
}

createUser.prototype.increment = function(){
    this.score++
}

createUser.prototype.printMe = function(){
    console.log(`${this.username}`);
}

const user1 = new createUser("Anish" , 10)
const user2 = new createUser("Varun" , 25)

user2.printMe()
console.log(user1.score);