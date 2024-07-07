//ES6

/* class user {
    constructor(username , email , password){
        this.username = username
        this.email = email
        this.password = password
    }

    encryptPassword(){
        return `${this.password}abc`
    }
    capitalizeUserName(){
        return `${this.username.toUpperCase()}`
    }
}

const userData = new user("Anish" , "anish@gmail.com" , 'anish875#13')

console.log(userData.encryptPassword());
console.log(userData.capitalizeUserName()); */

//behimnd the scene

function User(username , email , password){
    this.username = username
    this.email = email
    this.password = password
}
User.prototype.encryptPassword = function(){
    return `${this.password}abc`
}
User.prototype.capitalizeUserName = function(){
    return `${this.username.toUpperCase()}`
}
const userData2  = new User("Anish" , "anish@gmail.com" , "anis#21278d")
console.log(userData2.encryptPassword());
console.log(userData2.capitalizeUserName());