function User(email , pass){
    this._email = email
    this._password = pass

    Object.defineProperty(this , 'email' , {
        get : function(){
            return this._email.toUpperCase()
        },
        set : function(value){
         this._email = value
        }
    })
    Object.defineProperty(this , 'password' , {
        get : function(){
            return this._password.toUpperCase()
        },
        set : function(value){
         this._password = value
        }
    })
}

const user1 = new User("anish@gmail.com" , 'anish#874Ej.')
console.log(user1.email);
console.log(user1.password);