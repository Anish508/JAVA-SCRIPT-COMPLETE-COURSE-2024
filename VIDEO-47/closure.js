/* function init() {
    var name = "Mozilla"; // name is a local variable created by init
    function displayName() {
      // displayName() is the inner function, that forms the closure
      console.log(name); // use variable declared in the parent function
    }
    displayName();
  }
  init();
   */

   function outer(){
    let username = "anish"
    //console.log(secret); //error :secret is not defined
    function inner(){
        let secret = "A8273"
        console.log("inner:" , username);
    }
    function innerTwo(){
        //console.log(secret); //error :secret is not defined
        console.log("inner two:",username);
    }
    //inner()
    //innerTwo()
  }
  //outer()
 // console.log("Too outer:",username); 

 //closure
 function makeFunc() {
    const name = "Mozilla";
    function displayName() {
      console.log(name);
    }
    return displayName;  //when we return refernce of function it means that we are not only passing that functions execution context , we are also returning entire functions execution context(means ereturning entire lexical scope of that function)
  }
  
  const myFunc = makeFunc();
  myFunc();


  //Another example

  function multiply(num){
    //console.log(num);
    return function(input){
        //console.log("input is :",input , "number is:",num);
        return input * num
    }
  }
  const x1 = multiply(5)
  const x2 = multiply(3)

  console.log(x1(3));
  console.log(x2(2));