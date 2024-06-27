 //Arrow function and this keyword

 const user = {
    username:"anish",
    price :"999",
    welcomeMessage : function(){
        console.log(`${this.username} , welcome to website`);
        console.log(this);
    }
 }

 user.welcomeMessage()
 user.username = "varun"
 user.welcomeMessage()

 console.log(this);

 //imp

 function interesting(){ //this is generally used in objects but not in function
    const username = "anish";
    console.log(this/* .username */);
 }
 interesting()

 //Arrow function
 
/*  const arrowFn = (num1 , num2)=>{  //explicit return
    return num1 + num2  
 }  */
    //const arrowFn = (num1 , num2)=>  num1 + num2 // implicit return
    const arrowFn = (num1 , num2)=>  (num1 + num2) // implicit return
     
 console.log(arrowFn(4,7));