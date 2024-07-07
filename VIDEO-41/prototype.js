//prototype

let myName = "Anish     "
//console.log(myName.trueLength()); //this problem is solved at the end

let myHeros = ['Thor' , 'spider man']

let heroPower = {
    thor : "hammer",
    spider : "Sling",

    getSpiderPower : function(){
        console.log(`spider power is ${this.spider}`);
    }
}

Object.prototype.Anish = function(){
    console.log("Anish is present all the objects");
}
Array.prototype.heyAnish = function(){
    console.log("hello from Anish");
}

// myHeros.Anish()
// heroPower.Anish()
// myHeros.heyAnish()
// heroPower.heyAnish() 

//Inheritence 

const user = {
  name :"Karan",
  email : "Karan@gmail.com"
}

const Teacher = {
 makeVideos : true,
}

const teachingSupport = {
  isAvailable  :false,
}

const TASupport = {
    makeAssignment : 'JS assignment',
    fullTime : true,
    __proto__ : teachingSupport
}

Teacher.__proto__ = user

//modern syntax

Object.setPrototypeOf(teachingSupport , Teacher)

//string

anotherString = "Anish          "
String.prototype.trueLength = function(){
    console.log(this);
    //console.log(this.name);
    console.log(`True lenght is : ${this.trim().length}`);
}
anotherString.trueLength()
"icetea".trueLength()
"coffe".trueLength()