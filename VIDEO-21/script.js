//scope level and mini hoisting in js and closure

function one(){
    const userName = "anish"
    function two(){
        const website = "youtube"
        //console.log(userName);
    }
    //console.log(website);
    two() //if we comment this absolutely code will not work
}
one()

if (true) {
    const userName = "anish"
    if (userName === "anish"){
        const website = " youtube"
        //console.log(userName + website);
    }
    //console.log(website);
}
//console.log(userName);

/* ***************important***************** */

addone(5) //it will create any error
function addone(num){
return num + 1
}

addTwo() //this will create an error of execution before initializing. this is the cocept of hoisting
const addTwo = function(){
    return num + 2
}