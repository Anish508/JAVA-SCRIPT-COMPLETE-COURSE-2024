function setUserName(username){
    //complex DB Calls
    this.username = username
    console.log(this.username);
    console.log("called");
}

function createUser(username , email , pass){
   setUserName.call(this , username) //call holds the reference of calling funtion , this passes the execution context to the catual function
  //call passed the current execution context to another
   this.email = email
   this.password = pass
}

const nameExecution = new createUser("Anish" , 'anish@fb.com' , 'anish#23S2')
console.log(nameExecution);