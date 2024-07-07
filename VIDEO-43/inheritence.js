class User {
    constructor(username){
        this.username = username
    }
    logMe(){
        console.log('User name is :', this.username);
    }
}

class Teacher extends User{
    constructor(username , email ,pass){
        super(username)
        this.email = email
        this.password = pass
    }
  addCourses(){
    console.log("a new course was added by ", this.username);
  }
}

const newUser = new Teacher("Anish" , "anish@gmail.com",'anish$2Wy8')

newUser.addCourses()
newUser.logMe()

const baseUser = new User("karan")
baseUser.logMe()

//baseUser.addCourses()

console.log(newUser instanceof User);
console.log(User instanceof Teacher);