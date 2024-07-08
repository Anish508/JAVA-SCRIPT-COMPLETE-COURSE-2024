class user{
    constructor(username){
        this.username = username
    }
    logMe(){
        console.log(`user name:${this.username}`);
    }
    static printId(){
        return `123`
    }
}

//const anish = new user("anish")
//console.log(anish.printId());

class Teacher extends user{
    constructor(username , email){
        super(username)
        this.email = email

    }
}

const iphone = new Teacher("iphone" , 'i@phone.gmail.com')
console.log(iphone.printId());