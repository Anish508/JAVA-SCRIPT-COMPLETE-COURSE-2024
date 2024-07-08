class user {
    constructor(email , pass){
        this.email = email
        this.password = pass
    }

    get email(){
        return this._email.toUpperCase()
    }
    set email(val){
        this._email = val
    }
    get password(){
        return `${this._password}anish`
    }
    set  password(value){
        this._password = value.toUpperCase()
        console.log("password is:",this._password);
    }
}

const anish = new user("Anish@gmail.com" , 'anish#872Er')
console.log(anish.password);
console.log(anish.email);